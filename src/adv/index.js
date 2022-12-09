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
    sect333BlkLabel: "1/1/1 Columns",
    sect55BlkLabel: "1/1 Columns",
    sect37BlkLabel: "3/7 Columns",
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

    labelIconTooltip: "For more icons: change class name in style manager.",
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

    assetsModalWarningTitle: "Warning!",
    assetsModalUploadImgToLarge: "Images too large. Maximum size:",
    
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

  // limit file size
  editor.on('asset:upload:response', (response) => {
    const asstm = editor.AssetManager;
    var maxFileSize = 1048576;
    var uploadData = response.data;
    var toLargeImages = "";
    uploadData.forEach(function(imgData){
      var base64str = imgData.src.split(',')[1];
      var decoded = Buffer.from(base64str, 'base64')
      //console.log(imgData.name +": "+ formatBytes(decoded.length));

      if(decoded.length > maxFileSize){
        toLargeImages += "<li><small>" +imgData.name + ": <strong>"+ formatBytes(decoded.length) + "</strong></small></li>";
      }
      else{
        asstm.add(imgData);
      }
    });
    if(toLargeImages !== ""){
      const modal = editor.Modal;
      modal.open({
        title: defaults.assetsModalWarningTitle,
        content: "<p>" + defaults.assetsModalUploadImgToLarge + " <strong>" + formatBytes(maxFileSize) + "</strong></p>" +
                  "<ul>" + toLargeImages + "</ul><br>" +
                  "<button class='gjs-btn-prim ok' onclick='editor.Modal.close();editor.AssetManager.open();'>Ok</button>",
        attributes: { class: 'alert' },
      });
    }
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

function formatBytes(bytes,decimals) {
  if(bytes == 0) return '0 Bytes';
  var k = 1024,
      dm = decimals || 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}