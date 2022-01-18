import grapesjs from "grapesjs";

export default grapesjs.plugins.add("gjs-preset-ostendis", (editor, opts) => {
  let c = opts || {};
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
    dividerBlkLabel: "Divider",
    openBlocksBtnTitle: c.openBlocksBtnTitle || "",
    openLayersBtnTitle: c.openLayersBtnTitle || "",
    openSmBtnTitle: c.openSmBtnTitle || "",
    openTmBtnTitle: c.openTmBtnTitle || "",
    expTplBtnTitle: c.expTplBtnTitle || "View Code",
    fullScrBtnTitle: c.fullScrBtnTitle || "Fullscreen",
    swichtVwBtnTitle: c.swichtVwBtnTitle || "View Components",
    categoryLabel: c.categoryLabel || "",
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
    buttonBlkLabel: "Button",
    buttonApplyBlkLabel: "Apply button",
    buttonApplyBlkText: "Apply here",
    applyQrCodeBlkLabel: "Apply QR code",
    traitBlkValue: "Value",
    textBlkLabel: "Text",
    textBlkLabelWithSpace: "Text with spacing",
    imageBlkLabel: "Image",
    videoBlkLabel: "Video",
    mapBlkLabel: "Map",
    linkBlkLabel: "Link",
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
    // Title translation
    var openTmBtn = editor.Panels.getButton("views", "open-tm");

    openTmBtn.set("attributes", {
      title: defaults.openTmBtnTitle,
    });

    // Title translation
    var swVisBtn = editor.Panels.getButton("options", "sw-visibility");

    swVisBtn.set("attributes", {
      title: defaults.swichtVwBtnTitle,
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
  });
});
