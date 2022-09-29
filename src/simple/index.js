import grapesjs from "grapesjs";
///import styles from "./styles";

export default grapesjs.plugins.add("gjs-preset-ostendis-simple", (editor, opts = {}) => {
  let c = opts;
  let config = editor.getConfig();
  let pfx = config.stylePrefix;

  let defaults = {
    editor,
    pfx: pfx || "",
    cmdOpenImport: "gjs-open-import-template",
    cmdTglImages: "gjs-toggle-images",
    cmdInlineHtml: "gjs-get-inlined-html",
    cmdUndo: "undo",
    cmdRedo: "redo",
    cmdBtnMoveLabel: "Move",
    cmdBtnUndoLabel: "Undo",
    cmdBtnRedoLabel: "Redo",
    cmdBtnDesktopLabel: "Desktop",
    cmdBtnTabletLabel: "Tablet",
    cmdBtnMobileLabel: "Mobile",
    modalTitleImport: "Import template",
    modalTitleExport: "Export template",
    modalLabelImport: "",
    modalLabelExport: "",
    modalBtnImport: "Import",
    codeViewerTheme: "material",
    openBlocksBtnTitle: c.openBlocksBtnTitle || "",
    openLayersBtnTitle: c.openLayersBtnTitle || "",
    openSmBtnTitle: c.openSmBtnTitle || "",
    openTmBtnTitle: c.openTmBtnTitle || "",
    expTplBtnTitle: c.expTplBtnTitle || "View Code",
    fullScrBtnTitle: c.fullScrBtnTitle || "Fullscreen",
    swichtVwBtnTitle: c.swichtVwBtnTitle || "View Components",
    categoryLabel: c.categoryLabel || "",
    smSitesCategoryLabel: "Social media sites",
    smSharesCategoryLabel: "Social media shares",
    sharesCategoryLabel: "Shares",
    importPlaceholder: "",
    defaultTemplate: "", // Default template in case the canvas is empty
    inlineCss: 1,
    cellStyle: {
      padding: 0,
      margin: 0,
      "vertical-align": "top",
    },
    tableStyle: {
      height: "150px",
      margin: "0 auto 10px auto",
      padding: "5px 5px 5px 5px",
      width: "100%",
    },
    sect100BlkLabel: "1 Section",
    sect50BlkLabel: "1/2 Section",
    sect30BlkLabel: "1/3 Section",
    sect37BlkLabel: "3/7 Section",

    dividerBlkLabel: "Divider",
    textSectionBlkLabel: "Text Section",
    ulistBlkLabel: "List",
    iconBlkLabel: "Icon",
    imageBlkLabel: "Image",
    videoBlkLabel: "Video",
    mapBlkLabel: "Map",

    facebookBlkLabelSite: "Facebook link",
    instagramBlkLabelSite: "Instagram link",
    youtubeBlkLabelSite: "YouTube link",
    linkedinBlkLabelSite: "LinkedIn link",
    xingBlkLabelSite: "Xing link",
    twitterBlkLabelSite: "Twitter link",
    facebookBlkLabelShare: "Facebook share",
    linkedinBlkLabelShare: "LinkedIn share",
    xingBlkLabelShare: "Xing share",
    twitterBlkLabelShare: "Twitter share",
    whatsAppBlkLabelShare: "WhatsApp share",
    mailBlkLabel: "Mail to",
    smsBlkLabel: "SMS to",
    printBlkLabel: "Print",
    quoteBlkLabel: "Quote",
    linkBlkLabel: "Link",
    linkBlockBlkLabel: "Link Block",
    gridItemsBlkLabel: "Grid Items",
    listItemsBlkLabel: "List Items",
    inputRangeBlkLabel: "Range Input",
    buttonBlkLabel: "Button",
    buttonApplyBlkLabel: "Apply button",
    buttonApplyBlkText: "Apply here",
    viewQrCodeBlkLabel: "View link QR code",
    applyQrCodeBlkLabel: "Apply link QR code",
    traitBlkValue: "Value",
    textBlkLabel: "Text",
    textBlkLabelWithSpace: "Text with spacing",

    textBlkOstType: "Block",
    textBlkLabelOrg: "Organization",
    textBlkLabelOrgList: "Organization List",
    textBlkTitleOrg: "Organization Header",
    textBlkContentOrg: "Organization Text",
    textBlkLabelIntro: "Introduction",
    textBlkLabelIntroList: "Introduction List",
    textBlkTitleIntro: "Introduction Header",
    textBlkContentIntro: "Introduction Text",
    textBlkLabelDesc: "Description",
    textBlkLabelDescList: "Description List",
    textBlkTitleDesc: "Description Header",
    textBlkContentDesc: "Description Text",
    textBlkLabelTasks: "Tasks",
    textBlkLabelTasksList: "Tasks List",
    textBlkTitleTasks: "Your tasks",
    textBlkContentTasks: "Tasks Text",
    textBlkLabelReq: "Requirements",
    textBlkLabelReqList: "Requirements List",
    textBlkTitleReq: "We expect",
    textBlkContentReq: "Requirements Text",
    textBlkLabelBenefits: "Benefits",
    textBlkLabelBenefitsList: "Benefits List",
    textBlkTitleBenefits: "We offer",
    textBlkContentBenefits: "Benefits Text",
    textBlkLabelContact: "Contact",
    textBlkTitleContact: "Contact Header",
    textBlkContentContact: "Contact Text",
    textBlkLabelAction: "Action",
    textBlkContentAction: "Call to action",

    labelIconSelectMinus: "minus",
    labelIconSelectCircleSolid: "circle solid",
    labelIconSelectCircle: "circle",
    labelIconSelectCheck: "check",
    labelIconSelectSquare: "square",
    labelIconSelectArrowRight: "arrow right",
    labelIconSelectCheckCircle: "check circle",
    labelIconSelectClock: "clock",
    labelIconSelectPercent: "percent",
    labelIconSelectBuilding: "building",
    labelIconSelectHome: "home",
    labelIconSelectGlobe: "globe",
    labelIconSelectFile: "file",
    labelIconSelectUtensils: "utensils",
    labelIconSelectCalendar: "calendar",
    labelIconSelectHourglass: "hourglass",
    labelIconSelectMapMarker: "map marker",
    labelIconSelectRoad: "road",
    labelIconSelectCoffee: "coffee",
    labelIconSelectPhone: "phone",
    labelIconSelectEnvelope: "envelope",
    labelIconSelectStar: "star",

    traitBlkOstendisTooltip: "Define Ostendis block.",
    traitOstNone: "None",
    traitOstOrganizationHeading: "Organization Heading",
    traitOstOrganization: "Organization",
    traitOstIntroductionHeading: "Introduction Heading",
    traitOstIntroduction: "Introduction",
    traitOstDescriptionHeading: "Description Heading",
    traitOstDescription: "Description",
    traitOstTasksHeading: "Tasks Heading",
    traitOstTasks: "Tasks",
    traitOstRequirementsHeading: "Requirements Heading",
    traitOstRequirements: "Requirements",
    traitOstBenefitsHeading: "Benefits Heading",
    traitOstBenefits: "Benefits",
    traitOstContactHeading: "Contact Heading",
    traitOstContact: "Contact",
    traitOstCallToAction: "Call to action",
    traitOstLogoPicURL: "Logo Image",
    traitOstHeaderPic1URL: "Header Image 1",
    traitOstHeaderPic2URL: "Header Image 2",
    traitOstHeaderPic3URL: "Header Image 3",
    traitOstFooterPic1URL: "Footer Image 1",
    traitOstFooterPic2URL: "Footer Image 2",
    traitOstFooterPic3URL: "Footer Image 3",
    traitOstAdditionalPic1URL: "Additional Image 1",
    traitOstAdditionalPic2URL: "Additional Image 2",
    traitOstAdditionalPic3URL: "Additional Image 3",
    traitOstVideoURL: "Video",

    assetsModalTitle: c.assetsModalTitle || "Select image",
  };

  // Change some config
  config.devicePreviewMode = 1;

  // Load defaults
  for (let name in defaults) {
    if (!(name in c)) c[name] = defaults[name];
  }

  // Add components
  let importComponents = require("./components");
  importComponents(c);

  // Add traits
  let importTraits = require("./traits");
  importTraits(c);

  // Add commands
  let importCommands = require("./commands");
  importCommands(c);

  // Add blocks
  let importBlocks = require("./blocks");
  importBlocks(c);

  // Add buttons
  let importButtons = require("./buttons");
  importButtons(c);

  // Set default template if the canvas is empty
  if (!editor.getHtml() && c.defaultTemplate) {
    editor.setComponents(c.defaultTemplate);

    // Init components for Undo Manager
    editor.editor.initChildrenComp(editor.DomComponents.getWrapper());
  }

  editor.on("run:open-assets", () => {
    const modal = editor.Modal;
    modal.setTitle(defaults.assetsModalTitle);
  });

  // Do stuff on load
  editor.on("load", function () {

    var openTmBtn = editor.Panels.getButton("views", "open-tm");
    openTmBtn.set("attributes", {
      title: defaults.openTmBtnTitle,
    });


    // Beautify tooltips
    var titles = document.querySelectorAll("*[data-tooltip-pos]");

    for (var i = 0; i < titles.length; i++) {
      var el = titles[i];
      var title = el.getAttribute("title");
      title = title ? title.trim() : "";
      if (!title) break;
      el.setAttribute("data-tooltip", title);
      el.setAttribute("title", "");
    }

    // Paste only plain text
    var iframeBody = editor.Canvas.getBody();
    iframeBody.onpaste = function(e) {

      var pastedText = undefined;
      if (window.clipboardData && window.clipboardData.getData) { // IE
        pastedText = window.clipboardData.getData('Text');
      } 
      else if (e.clipboardData && e.clipboardData.getData) {
        pastedText = e.clipboardData.getData('text/plain');
      }
      e.target.ownerDocument.execCommand("insertText", false, pastedText);
      return false; // Prevent the default handler

      //e.preventDefault();
      //var text = e.clipboardData.getData('text/plain');
      //e.target.ownerDocument.execCommand("insertText", false, text);
    };

    //var allComponents = editor.getComponents();
    //console.log(allComponents);
    // allComponents.foreach((item) => {
    //   item.set({draggable: false,})
    // });


    //Add clear function
    const sm = editor.StyleManager;
    sm.getConfig().clearProperties = 1;
    sm.render();
  });
});

