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

    // Unsorted list with fontawesome 5.x
    let ulistitem =   `<li style="text-align:left;"><span class="fa-li"><i class="fas fa-minus" data-gjs-type="icon"></i></span>
                        <p style="margin:0;padding:0;">Text</p>
                      </li>`;

    domc.addType("ulist", {
      model: {
        defaults: {
          tagName: "ul",
          attributes: { class: "ulist fa-ul" },
          components: ulistitem + ulistitem + ulistitem,
        },
      },
    });


    domc.addType("icon", {
      model: {
        defaults: {
          tagName: "i",
          attributes: { class: "fas fa-star" },
          traits: [
            {
            type: 'select',
            label: 'Icon',
            name: 'class',
            attributes: {
              id: 'select-fontawesome', 
              'data-tooltip' : 'For more icons: change class name in style manager.',
              'data-tooltip-pos' : 'bottom'},
            options: [
              { id: 'fas fa-minus' , name: '&#xf068; minus'},
              { id: 'fas fa-circle', name: '&#xf111; circle solid'},
              { id: 'far fa-circle', name: '&#xf10c; circle'},
              { id: 'fas fa-check', name: '&#xf00c; check'},
              { id: 'fas fa-square', name: '&#xf0c8; square'},
              { id: 'fas fa-arrow-right', name: '&#xf061; arrwo-right'},
              { id: 'fas fa-check-circle', name: '&#xf058; check-circle'},
              { id: 'fas fa-phone', name: '&#xf095; phone'},
              { id: 'fas fa-envelope', name: '&#xf0e0; envelope'},
              { id: 'fas fa-star', name: '&#xf005; star'},
            ],
          }
          ],
        },
      }
    });
  };
});
