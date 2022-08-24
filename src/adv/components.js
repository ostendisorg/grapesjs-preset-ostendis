import { openStdin } from "process";

define(function () {
  return (opt = {}) => {
    const domComp = opt.editor.DomComponents;

    //add ostendis block  trait to default
    var defaultTraits = domComp.getType("default").model.prototype.defaults.traits;
    var defaultDataOstBlock = {
      type: "select",
      label: "Ostendis Blocks",
      name: "data-ost-type",
      attributes: {
        "data-tooltip": opt.traitBlkOstendisTooltip,
        "data-tooltip-pos": "bottom",
      },
      options: [
        { id: "", name: opt.traitOstNone },
        { id: "organizationHeading", name: opt.traitOstOrganizationHeading },
        { id: "organization", name: opt.traitOstOrganization },
        { id: "introductionHeading", name: opt.traitOstIntroductionHeading },
        { id: "introduction", name: opt.traitOstIntroduction },
        { id: "descriptionHeading", name: opt.traitOstDescriptionHeading },
        { id: "description", name: opt.traitOstDescription },
        { id: "tasksHeading", name: opt.traitOstTasksHeading },
        { id: "tasks", name: opt.traitOstTasks },
        { id: "requirementsHeading", name: opt.traitOstRequirementsHeading },
        { id: "requirements", name: opt.traitOstRequirements },
        { id: "benefitsHeading", name: opt.traitOstBenefitsHeading },
        { id: "benefits", name: opt.traitOstBenefits },
        { id: "contactHeading", name: opt.traitOstContactHeading },
        { id: "contact", name: opt.traitOstContact },
        { id: "calltoaction", name: opt.traitOstCallToAction },
      ],
    };
    if(defaultTraits.findIndex(element => element.name == defaultDataOstBlock.name) == -1){
        defaultTraits.push(defaultDataOstBlock);
    }

    //add ostendis block trait to image
    var imgTraits = domComp.getType("image").model.prototype.defaults.traits;
    var imageDataOstBlock = {
      type: "select",
      label: "Ostendis Blocks",
      name: "data-ost-type",
      options: [
        { id: "", name: opt.traitOstNone },
        { id: "logoPicURL", name: opt.traitOstLogoPicURL },
        { id: "headerPic1URL", name: opt.traitOstHeaderPic1URL },
        { id: "headerPic2URL", name: opt.traitOstHeaderPic2URL },
        { id: "headerPic3URL", name: opt.traitOstHeaderPic3URL },
        { id: "footerPic1URL", name: opt.traitOstFooterPic1URL },
        { id: "footerPic2URL", name: opt.traitOstFooterPic2URL },
        { id: "footerPic3URL", name: opt.traitOstFooterPic3URL },
        { id: "additionalPic1URL", name: opt.traitOstAdditionalPic1URL },
        { id: "additionalPic2URL", name: opt.traitOstAdditionalPic2URL },
        { id: "additionalPic3URL", name: opt.traitOstAdditionalPic3URL },
      ],
    };
    if(imgTraits.findIndex(element => element.name == imageDataOstBlock.name) == -1){
      imgTraits.push(imageDataOstBlock);
    }

    //add ostendis block trait to video
    var dType = domComp.getType("video");
    var dModel = dType.model;
    var dView = dType.view;
    const yt = "yt";
    const vi = "vi";
    const ytnc = "ytnc";

    domComp.addType("video", {
      model: dModel.extend({
        updateTraits() {
          const { em } = this;
          const prov = this.get("provider");
          let tagName = "iframe";
          let traits;

          switch (prov) {
            case yt:
            case ytnc:
              traits = this.getYoutubeTraits();
              break;
            case vi:
              traits = this.getVimeoTraits();
              break;
            default:
              tagName = "video";
              traits = this.getSourceTraits();
          }

          traits.push({
            type: "select",
            label: "Ostendis Blocks",
            name: "data-ost-type",
            options: [
              { id: "", name: opt.traitOstNone },
              { id: "videoURL", name: opt.traitOstVideoURL },
            ],
          });

          this.set({ tagName }, { silent: 1 }); // avoid break in view
          this.set({ traits });
          em.get("ready") && em.trigger("component:toggled");
        },
      }),
      view: dView,
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
    let ulistitem = `<li><span class="fa-li"><i class="fas fa-circle" data-gjs-type="icon" style="font-size:0.4rem;line-height:inherit"></i></span>
                        <p style="margin:0;padding:0;text-align:left;">Text</p>
                      </li>`;

    domComp.addType("ulist", {
      model: {
        defaults: {
          tagName: "ul",
          attributes: { class: "ulist fa-ul" },
          style: { "padding-top":"0.2em", "padding-bottom":"0.2em", "margin-left" : "2em" }, 
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
              type: "select",
              label: "Icon",
              name: "class",
              attributes: {
                id: "select-fontawesome",
                "data-tooltip": opt.labelIconTooltip,
                "data-tooltip-pos": "bottom",
              },
              options: [
                { id: "fas fa-minus", name: opt.labelIconSelectMinus },
                { id: "fas fa-circle", name: opt.labelIconSelectCircleSolid },
                { id: "far fa-circle", name: opt.labelIconSelectCircle },
                { id: "fas fa-check", name: opt.labelIconSelectCheck },
                { id: "fas fa-square", name: opt.labelIconSelectSquare },
                { id: "fas fa-arrow-right", name: opt.labelIconSelectArrowRight },
                { id: "fas fa-check-circle", name: opt.labelIconSelectCheckCircle },
                { id: "far fa-clock", name: opt.labelIconSelectClock },
                { id: "fas fa-percent", name: opt.labelIconSelectPercent },
                { id: "far fa-building", name: opt.labelIconSelectBuilding },
                { id: "fas fa-home", name: opt.labelIconSelectHome },
                { id: "fas fa-globe", name: opt.labelIconSelectGlobe },
                { id: "far fa-file", name: opt.labelIconSelectFile },
                { id: "fas fa-utensils", name: opt.labelIconSelectUtensils },
                { id: "far fa-calendar-alt", name: opt.labelIconSelectCalendar },
                { id: "far fa-hourglass", name: opt.labelIconSelectHourglass },
                { id: "fas fa-map-marker-alt", name: opt.labelIconSelectMapMarker },
                { id: "fas fa-road", name: opt.labelIconSelectRoad },
                { id: "fas fa-coffee", name: opt.labelIconSelectCoffee },
                { id: "fas fa-phone", name: opt.labelIconSelectPhone },
                { id: "fas fa-envelope", name: opt.labelIconSelectEnvelope },
                { id: "fas fa-star", name: opt.labelIconSelectStar },
              ],
            },
          ],
        },
      },
    });
  };
});
