define(function () {
  return (opt = {}) => {
    const domc = opt.editor.DomComponents;

    const nameTrait = {
      name: "name",
    };
    const valueTrait = {
      name: "value",
    };

    // INPUT
    domc.addType("range", {
      isComponent: (el) => el.tagName == "INPUT",

      model: {
        defaults: {
          tagName: "input",
          droppable: true,
          highlightable: true,
          attributes: { type: "range" },
          traits: [nameTrait, valueTrait],
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
