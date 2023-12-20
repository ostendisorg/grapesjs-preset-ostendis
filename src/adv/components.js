define(function () {
  return (opt = {}) => {
    const domComp = opt.editor.DomComponents;

    //define ostendis type trait for text and default components
    const ostTypeTextTrait = {
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

    //define ostendis type trait for images
    const ostTypeImageTrait = {
      type: "select",
      label: "Ostendis Blocks",
      name: "data-ost-type",
      attributes: {
        "data-tooltip": opt.traitBlkOstendisTooltip,
        "data-tooltip-pos": "bottom",
      },
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

    //define ostendis type hide in simple html
    const ostTypeHideInSimpleHtmlTrait = {
      type: "select",
      label: "Hide in Simple Html",
      name: "data-ost-simple-html",
      attributes: {
        "data-tooltip": "Element in Simple Html nicht anzeigen.",
        "data-tooltip-pos": "bottom",
      },
      options: [
        { id: "", name: "show" },
        { id: "hidden", name: "hide" },
      ],
    };

    //add ostendis type trait to image components
    domComp.addType("image", {
      model: {
        defaults: {
          traits: ["alt", ostTypeImageTrait, ostTypeHideInSimpleHtmlTrait],
        },
      },
    });

    //add ostendis block trait to video components
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

    // Scale the new range
    domComp.addType("scale", {
      isComponent: (el) => el.tagName === "DIV" && el.classList.contains("scale"),
      model: {
        defaults: {
          tagName: "div",
          attributes: { class: "scale", "data-percent" : "66", "data-fcolor" : "#3b5998", "data-bgcolor" : "#CCCCCC" },
          style: { "box-sizing": "border-box", padding: "0", height: "20px", "max-width": "100%", border: "0px solid #666666", background: "linear-gradient(to right,#3b5998 66%, #CCCCCC 66%);" },
          traits: [
            {
              name: "percent",
              type: "number",
              min: 0,
              max: 100,
              label: opt.labelScalePercent,
              changeProp: 1,
            },
            {
              name: "fcolor",
              type: "color",
              label: opt.labelScaleBarColor,
              placeholder: "#222222",
              changeProp: 1,
            },
            {
              name: "bgcolor",
              type: "color",
              label: opt.labelScaleBgColor,
              placeholder: "#cccccc",
              changeProp: 1,
            },
          ],
        },
        init() {
          const scaleAttr = this.getAttributes();
          this.set('percent', scaleAttr["data-percent"] );
          this.set('bgcolor', scaleAttr["data-bgcolor"] );
          this.set('fcolor', scaleAttr["data-fcolor"] );

          this.on("change:percent", this.updateScale);
          this.on("change:bgcolor", this.updateScale);
          this.on("change:fcolor", this.updateScale);
        },
        updateScale() {
          var p = this.get("percent");
          var b = this.get("bgcolor");
          var f = this.get("fcolor");
          this.set('attributes',{'data-percent': p, 'data-bgcolor': b, 'data-fcolor': f})
          this.addStyle({ background: "linear-gradient(to right, " + f + " " + p + "%, " + b + " " + p + "%)" });
        },
      },
    });

    // Unsorted list item component
    const ulistItemContent = `<span class="fa-li" style="left:-2em;width:2em;">
                                <i class="fas fa-circle" data-gjs-type="icon" style="font-size:0.4em;line-height:inherit;display:block;"></i>
                              </span>
                              <p style="margin:0;padding:0;text-align:left;">Text</p>`;
    domComp.addType("ulistitem", {
      isComponent: (el) => {
        if (el.tagName === "LI" && el.classList.contains("ulistitem")) {
          return { type: "ulistitem" };
        }
      },
      model: {
        defaults: {
          tagName: "li",
          draggable: "ul",
          attributes: { class: "ulistitem" },
          style: { "text-align": "left" },
          components: ulistItemContent,
          traits: ["id", "title", ostTypeTextTrait, ostTypeHideInSimpleHtmlTrait],
        },
      },
    });

    // Unsorted list component with fontawesome
    const ulListItem = `<li style="text-align:left" data-gjs-type="ulistitem">` + ulistItemContent + `</li>`;
    domComp.addType("ulist", {
      isComponent: (el) => {
        if (el.tagName === "UL" && el.classList.contains("ulist")) {
          return { type: "ulist" };
        }
      },
      model: {
        defaults: {
          tagName: "ul",
          attributes: { class: "ulist fa-ul" },
          style: { padding: "0.2em 0", "margin-left": "2em", "line-height": "1.4em" },
          components: ulListItem + ulListItem + ulListItem,
          traits: ["id", "title", ostTypeTextTrait, ostTypeHideInSimpleHtmlTrait],
        },
      },
    });

    // icon component
    domComp.addType("icon", {
      isComponent: (el) => {
        var classNames = ["fa", "fas", "far", "fab", "fa-solid", "fa-regular", "fa-brands"];
        if (el.tagName === "I" && classNames.some((className) => el.classList.contains(className))) {
          return { type: "icon" };
        }
      },
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

    //add ostendis type trait to text components
    domComp.addType("text", {
      model: {
        defaults: {
          traits: ["id", "title", ostTypeTextTrait, ostTypeHideInSimpleHtmlTrait],
        },
      },
    });

    //add ostendis type trait to default components
    domComp.addType("default", {
      model: {
        defaults: {
          traits: ["id", "title", ostTypeTextTrait, ostTypeHideInSimpleHtmlTrait],
        },
      },
    });
  };
});
