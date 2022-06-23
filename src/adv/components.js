import { inlineContent } from "juice";

define(function () {
  return (opt = {}) => {
    const domComp = opt.editor.DomComponents;

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

    // Unsorted list
    let ulistitem = `<div class="ulistitem">
                      <div class="ulisticon"><p><i class="fa fa-circle" aria-hidden="true" data-gjs-type="icon"></i></p></div>
                      <div class="ulisttext"><p>Text</p></div>
                     </div>`;

    domComp.addType("ulist", {
      model: {
        defaults: {
          tagName: "div",
          attributes: { class: "ulist" },
          components: ulistitem + ulistitem + ulistitem,
          styles: `
            .ulist{
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              margin: 1em 0;
              padding: 0.25em 0 0 0;
              width: 100%;
            }
            .ulistitem{
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              margin: 0.25em 0;
              width: 100%;
            }
            .ulistitem p{
              margin:0;
            }
            .ulisticon{
              padding: 0.25em 1em 0.25em 0;
              margin: 0 0 0 2px;
            }
            .ulisticon i{
              font-size: 0.5em;
            }
            .ulisttext{
              margin: 0;
              padding: 0;
            }`,
        },
      },
    });


    domComp.addType("icon", {
      model: {
        defaults: {
          tagName: "i",
          attributes: { class: "fa fa-smile" },
          traits: [
            {
            type: 'select',
            label: 'Icon',
            name: 'icon',
            attributes: {id: 'select-fontawesome'},
            options: [
              { id: 'fas fa-circle', name: '&#xf111; circle'},
              { id: 'far fa-circle', name: '&#xf10c; circle'},
              { id: 'fas fa-check', name: '&#xf00c;'},
              { id: 'fas fa-square', name: '&#xf0c8;'},
            ],
          },
          {
            type: 'text',
            name: 'class',
            label: 'Icon class',
            id: 'font'

          }],
        },
        init() {
          this.on('change:icon', this.handleIconChange);
        },
    
        handleIconChange() {
          //console.log('Input icon changed to: ', this.getAttributes().icon);
          //console.log('Input class changed to: ', this.getAttributes().class);
          this.updateTrait('class',{value: this.getAttributes().icon});
          return this;
        },
      }
    });

  };
});