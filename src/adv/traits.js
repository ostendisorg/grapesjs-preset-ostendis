define(function () {
  return (opt = {}) => {
    const trm = opt.editor.TraitManager;

    trm.addType("ost-blocks-select", {
      createInput({ trait }) {
        const traitOpts = trait.get("options") || [];
        const traitName = trait.get("name") || "ost-block-select";
        const options = traitOpts.length ? traitOpts : [{ id: "", name: "None", disabled: "disabled" }];

        const el = document.createElement("div");
        el.innerHTML = `
          <select class="ost-blocks-select" id="${traitName}">
            ${options.map((opt) => `<option value="${opt.id}" ${opt.disabled !== undefined ? 'disabled' : ''}>${opt.name}</option>`).join("")}
          </select>
          <div class="gjs-sel-arrow">
            <div class="gjs-d-s-arrow"></div>
          </div>`;
        return el;
      },
      onEvent({ elInput, component, trait }) {
        const traitName = trait.get("name") || "ost-block-select-default";
        const dataOstType = elInput.querySelector("#" + [traitName]).value;
        if (dataOstType == "") {
          component.removeAttributes(traitName);
        } else {
          component.addAttributes({ [traitName]: dataOstType });
        }
      },

      onUpdate({ elInput, component, trait }) {
        const traitName = trait.get("name") || "ost-block-select-default";

        Array.from(elInput.querySelector("#" + [traitName]).options).forEach(function (optionElement, optionIndex) {
          if (optionElement.value != "") {
            const usedOstBlockTypesIndex = opt.usedOstBlockTypes.findIndex((e) => e.type === optionElement.value);

            // Reset
            var optionEl = elInput.querySelector("#" + [traitName]).options[optionIndex];
            const regex = /^\(.*\)\s*/g;
            optionEl.text = optionEl.text.replace(regex, "");
            optionEl.removeAttribute("class");
            optionEl.removeAttribute("disabled");

            if (usedOstBlockTypesIndex > -1) {
              if (opt.usedOstBlockTypes[usedOstBlockTypesIndex].count == 1) {
                optionEl.innerHTML = "(&#10003;) " + optionEl.text;
                optionEl.classList.add("gjs-select-option-ok");
                optionEl.disabled = true;
              } else if (opt.usedOstBlockTypes[usedOstBlockTypesIndex].count > 1) {
                optionEl.innerHTML = "(! " + opt.usedOstBlockTypes[usedOstBlockTypesIndex].count + "&times;) " + optionEl.text;
                optionEl.classList.add("gjs-select-option-nok");
                optionEl.disabled = true;
              }
            }
          }
        });
        const dataOstType = component.getAttributes()[traitName] || "";
        elInput.querySelector("#" + [traitName]).value = dataOstType;
      },
    });

    trm.addType("value", {
      label: opt.traitBlkValue,
      min: 0, // Minimum number value
      max: 100, // Maximum number value
      events: {
        keyup: "onChange",
      },

      onValueChange() {
        const { model, target } = this;
        const optionsStr = model.get("value").trim();
        const options = optionsStr.split("\n");
        const optComps = [];

        for (let i = 0; i < options.length; i++) {
          const optionStr = options[i];
          const option = optionStr.split("::");
          optComps.push({
            type: "range",
            components: option[1] || option[0],
            attributes: { value: option[0] },
          });
        }

        target.components().reset(optComps);
        target.view.render();
      },
    });
  };
});
