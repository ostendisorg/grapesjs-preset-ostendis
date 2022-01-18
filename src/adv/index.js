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
    imageBlkLabel: "Image",
    videoBlkLabel: "Video",
    mapBlkLabel: "Map",
    facebookBlkLabelSite: "Facebook link",
    instagramBlkLabelSite: "Instagram link",
    linkedinBlkLabelSite: "LinkedIn link",
    xingBlkLabelSite: "Xing link",
    twitterBlkLabelSite: "Twitter link",
    facebookBlkLabelShare: "Facebook share",
    linkedinBlkLabelShare: "LinkedIn share",
    xingBlkLabelShare: "Xing share",
    twitterBlkLabelShare: "Twitter share",
    mailBlkLabel: "Mail to",
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
    textBlkLabelIntro: "Introduction",
    textBlkLabelDesc: "Description",
    textBlkLabelTasks: "Tasks",
    textBlkLabelReq: "Requirements",
    textBlkLabelBenefits: "Benefits",
    textBlkLabelAction: "Action",
    textBlkLabelContact: "Contact",
    textBlkContentOrg: "Organization",
    textBlkContentIntro: "Introduction",
    textBlkTitleDesc: "Description:",
    textBlkContentDesc: "Description",
    textBlkTitleTasks: "Your tasks:",
    textBlkContentTasks: "Tasks",
    textBlkTitleReq: "We expect:",
    textBlkContentReq: "Requirements",
    textBlkTitleBenefits: "We offer:",
    textBlkContentBenefits: "Benefits",
    textBlkContentAction: "Call to action",
    textBlkContentContact: "Contact",
    assetsModalTitle: c.assetsModalTitle || "Select image",
  };

  // Change some config
  config.devicePreviewMode = 1;

  // Load defaults
  for (let name in defaults) {
    if (!(name in c)) c[name] = defaults[name];
  }

  // Add traits
  // editor.DomComponents.addType('text', {
  //   isComponent: el => true,
  //   model: {
  //     defaults: {
  //       traits: [
  //         'id',
  //         'title',
  //         {
  //           type: 'select',
  //           label: defaults.textBlkOstType,
  //           name: 'data-ost-type',
  //           options: [
  //             { id: 'organization', name: 'organization'},
  //             { id: 'introduction', name: 'introduction'},
  //             { id: 'description', name: 'description'},
  //             { id: 'requirements', name: 'requirements'},
  //             { id: 'benefits', name: 'benefits'},
  //             { id: 'contact', name: 'contact'},
  //           ]
  //         }
  //       ]
  //     }
  //   }
  // });

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
