import grapesjs from "grapesjs";
import styles from "./styles";

export default grapesjs.plugins.add("gjs-preset-ostendis-adv", (editor, opts = {}) => {
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
    ulistLabel: "Liste",
    iconLabel: "Icon",
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
    textBlkTitleOrg: "Organization Header",
    textBlkContentOrg: "Organization Text",
    textBlkLabelIntro: "Introduction",
    textBlkTitleIntro: "Introduction Header",
    textBlkContentIntro: "Introduction Text",
    textBlkLabelDesc: "Description",
    textBlkTitleDesc: "Description Header",
    textBlkContentDesc: "Description Text",
    textBlkLabelTasks: "Tasks",
    textBlkTitleTasks: "Your tasks",
    textBlkContentTasks: "Tasks Text",
    textBlkLabelReq: "Requirements",
    textBlkTitleReq: "We expect",
    textBlkContentReq: "Requirements Text",
    textBlkLabelBenefits: "Benefits",
    textBlkTitleBenefits: "We offer",
    textBlkContentBenefits: "Benefits Text",
    textBlkLabelContact: "Contact",
    textBlkTitleContact: "Contact Header",
    textBlkContentContact: "Contact Text",
    textBlkLabelAction: "Action",
    textBlkContentAction: "Call to action",
    
    traitBlkOstendisTooltip: "Define an Ostendis block.",
    traitOstNone: "None",
    traitOstOrganisationHeading: "Organization Heading",
    traitOstOrganisation: "Organization",
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

  // On component change show the Style Manager
  editor.on("change:selectedComponent", function () {
    var openLayersBtn = editor.Panels.getButton("views", "open-layers");

    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if ((!openLayersBtn || !openLayersBtn.get("active")) && editor.editor.get("selectedComponent")) {
      var openSmBtn = editor.Panels.getButton("views", "open-sm");
      openSmBtn.set("attributes", { title: defaults.openSmBtnTitle });
      openSmBtn && openSmBtn.set("active", 1);
    }
  });

  editor.on("run:open-assets", () => {
    const modal = editor.Modal;
    modal.setTitle(defaults.assetsModalTitle);
  });

  // Do stuff on load
  editor.on("load", function () {
    var expTplBtn = editor.Panels.getButton("options", "export-template");
    expTplBtn.set("attributes", {
      title: defaults.expTplBtnTitle,
    });

    // var fullScrBtn = editor.Panels.getButton('options', 'fullscreen');
    // fullScrBtn.set('attributes', {
    //   title: defaults.fullScrBtnTitle
    // });

    var swichtVwBtn = editor.Panels.getButton("options", "sw-visibility");
    swichtVwBtn.set("attributes", {
      title: defaults.swichtVwBtnTitle,
    });

    var openSmBtn = editor.Panels.getButton("views", "open-sm");
    openSmBtn.set("attributes", {
      title: defaults.openSmBtnTitle,
    });

    var openTmBtn = editor.Panels.getButton("views", "open-tm");
    openTmBtn.set("attributes", {
      title: defaults.openTmBtnTitle,
    });

    var openLayersBtn = editor.Panels.getButton("views", "open-layers");
    openLayersBtn.set("attributes", {
      title: defaults.openLayersBtnTitle,
    });

    // Open block manager
    var openBlocksBtn = editor.Panels.getButton("views", "open-blocks");
    openBlocksBtn.set("attributes", {
      title: defaults.openBlocksBtnTitle,
    });
    openBlocksBtn && openBlocksBtn.set("active", 1);

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

    // Load styles (manager)
    styles(editor);

    //Add clear function
    const sm = editor.StyleManager;
    sm.getConfig().clearProperties = 1;
    sm.render();
  });
});
