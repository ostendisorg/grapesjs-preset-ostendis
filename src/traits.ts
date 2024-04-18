import type { Editor } from "grapesjs";
import { PluginOptions } from ".";

export default (editor: Editor, opts: Required<PluginOptions>) => {
  const { TraitManager } = editor;

  TraitManager.addType("ost-blocks-select", {
    createInput({ trait }) {
      const traitOpts = trait.get("options") || [];
      const traitName = trait.get("name") || "ost-block-select";
      const options = traitOpts.length ? traitOpts : [{ id: "", name: "None", disabled: "disabled" }];

      const el = document.createElement("div");
      el.innerHTML = `
        <select class="ost-blocks-select" id="${traitName}">
          ${options.map((opt) => `<option value="${opt.id}" ${opt.disabled}>${opt.name}</option>`).join("")}
        </select>
        <div class="gjs-sel-arrow">
          <div class="gjs-d-s-arrow"></div>
        </div>`;
      return el;
    },
    onEvent({ elInput, component, trait }) {
      const traitName = trait.get("name") || "ost-block-select-default";
      const element = elInput.querySelector("#" + [traitName]) as HTMLSelectElement;
      const dataOstType = element.value;
      if (dataOstType == "") {
        component.removeAttributes(traitName);
      } else {
        component.addAttributes({ [traitName]: dataOstType });
      }
    },
    onUpdate({ elInput, component, trait }) {
      const traitName = trait.get("name") || "ost-block-select-default";

      if (elInput !== null) {
        let element = elInput.querySelector("#" + [traitName]) as HTMLSelectElement;

        Array.from(element.options).forEach(function (optionElement, optionIndex) {
          if (optionElement.value != "") {
            const usedOstBlockTypesIndex = opts.usedOstBlockTypes.findIndex((e) => e === optionElement.value);

            // Reset
            var ele = elInput.querySelector("#" + [traitName]) as HTMLSelectElement;
            var optionEl = ele.options[optionIndex];
            const regex = /^\(.*\)\s*/g;
            optionEl.text = optionEl.text.replace(regex, "");
            optionEl.removeAttribute("class");
            optionEl.removeAttribute("disabled");
            1;

            if (usedOstBlockTypesIndex > -1) {
              if (opts.usedOstBlockTypes[usedOstBlockTypesIndex].length == 1) {
                optionEl.innerHTML = "(&#10003;) " + optionEl.text;
                optionEl.classList.add("gjs-select-option-ok");
                optionEl.disabled = true;
              } else if (opts.usedOstBlockTypes[usedOstBlockTypesIndex].length > 1) {
                optionEl.innerHTML = "(! " + opts.usedOstBlockTypes[usedOstBlockTypesIndex].length + "&times;) " + optionEl.text;
                optionEl.classList.add("gjs-select-option-nok");
                optionEl.disabled = true;
              }
            }
          }
        });

        const dataOstType = component.getAttributes()[traitName] || "";

        element = elInput.querySelector("#" + [traitName]) as HTMLSelectElement;
        element.value = dataOstType;
      }
    },
  });

  TraitManager.addType("value", {
    label: opts.traitBlkValue,
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
      target?.view?.render();
    },
  });
};
