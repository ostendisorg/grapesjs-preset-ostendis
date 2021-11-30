define(function () {
  return (opt = {}) => {
    const domc = opt.editor.DomComponents;

    const nameTrait = {
      name: "name",
    };
    const valueTrait = {
      name: "value",
      label: opt.traitBlkValue,
    };

    // INPUT
    domc.addType("range", {
      isComponent: (el) => el.tagName == "INPUT",

      model: {
        defaults: {
          tagName: "input",
          droppable: true,
          highlightable: true,
          traits: [nameTrait, valueTrait],
          attributes: { type: "range", disabled: true },
        },
      },

      extendFnView: ["updateAttributes"],
      view: {
        updateAttributes() {
          this.el.setAttribute("autocomplete", "on");
        },
      },
    });
  };
});
