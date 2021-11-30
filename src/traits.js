define(function () {
  return (opt = {}) => {
    const trm = opt.editor.TraitManager;

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
