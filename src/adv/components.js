import { inlineContent } from "juice";

define(function () {
  return (opt = {}) => {
    const domComp = opt.editor.DomComponents;

    //add trait to default
    domComp.getType("default").model.prototype.defaults.traits.push({
      type: 'select',
      label: 'Ostendis Blocks',
      name: 'data-ost-type',
      attributes: {
        'data-tooltip' : opt.traitBlkOstendisTooltip,
        'data-tooltip-pos' : 'bottom'},
      options: [
        { id: '' , name: opt.traitOstNone},
        { id: 'organizationHeading', name: opt.traitOstOrganisationHeading},
        { id: 'organization', name: opt.traitOstOrganisation},
        { id: 'introductionHeading', name: opt.traitOstIntroductionHeading},
        { id: 'introduction', name: opt.traitOstIntroduction},
        { id: 'descriptionHeading', name: opt.traitOstDescriptionHeading},
        { id: 'description', name: opt.traitOstDescription},
        { id: 'tasksHeading', name: opt.traitOstTasksHeading},
        { id: 'tasks', name: opt.traitOstTasks},
      ],

      });

    // Range trait
    const nameTrait = {
      name: "name",
    };

    const valueTrait = {
      name: "value",
      label: opt.traitBlkValue,
    };

    // INPUT
    domComp.addType("range", {
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
    let ulistitem =   `<li><span class="fa-li"><i class="fas fa-minus" data-gjs-type="icon"></i></span>
                        <p style="margin:0;padding:0;text-align:left;">Text</p>
                      </li>`;

    domComp.addType("ulist", {
      model: {
        defaults: {
          tagName: "ul",
          attributes: { class: "ulist fa-ul" },
          components: ulistitem + ulistitem + ulistitem,
        },
      },
    });

    domComp.addType("icon", {
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