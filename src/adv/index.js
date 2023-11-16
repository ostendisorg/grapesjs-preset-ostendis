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
    cmdBtnViewCompLabel: "View components",
    cmdBtnViewCode: "View code",
    cmdBtnUndoLabel: "Undo",
    cmdBtnRedoLabel: "Redo",
    cmdBtnDesktopLabel: "Desktop",
    cmdBtnTabletLabel: "Tablet",
    cmdBtnMobileLabel: "Mobile",
    viewBtnShowStyleManager: "Open Style Manager",
    viewBtnShowParameterManager: "Open Parameter",
    viewBtnShowLayerManager: "Open Layer",
    viewBtnShowBlocksManager: "Open Blocks",
    modalTitleImport: "Import template",
    modalTitleExport: "Export template",
    modalLabelImport: "",
    modalLabelExport: "",
    modalBtnImport: "Import",
    codeViewerTheme: "material",
    //openBlocksBtnTitle: c.openBlocksBtnTitle || "",
    //openLayersBtnTitle: c.openLayersBtnTitle || "",
    //openSmBtnTitle: c.openSmBtnTitle || "",
    //openTmBtnTitle: c.openTmBtnTitle || "",
    //expTplBtnTitle: c.expTplBtnTitle || "View Code",
    //fullScrBtnTitle: c.fullScrBtnTitle || "Fullscreen",
    //swichtVwBtnTitle: c.swichtVwBtnTitle || "View Components",
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

    ostToolbarClone: "Clone list element",
    ostToolbarDelete: "Delete list element",
    ostToolbarUp: "Move list element up",
    ostToolbarDown: "Move list element down",

    /* Diese Übersetzungen werden erste verwendet, wenn das Modal geladen wird. Deshalb defaulte Werte in Deutsch. */
    assetsModalTitle: "Bild auswählen",
    assetsModalWarningTitle: "Warnung",
    assetsModalUploadImgToLarge: "Bilder zu gross. Maximum Grösse:",
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

  // Add richTextEditorSettings
  let importRichTextEditor = require("./rte");
  importRichTextEditor(c);

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
  editor.on("asset:upload:response", (response) => {
    const asstm = editor.AssetManager;
    let maxFileSize = 1048576; //1MB
    let uploadData = response.data;
    let toLargeImages = "";

    uploadData.forEach(function (imgData) {
      let base64str = imgData.src.split(",")[1];
      let decoded = Buffer.from(base64str, "base64");

      if (decoded.length > maxFileSize) {
        toLargeImages += "<li><small>" + imgData.name + ": <strong>" + formatBytes(decoded.length) + "</strong></small></li>";
      } else {
        asstm.add(imgData);
      }
    });

    if(toLargeImages !== ""){
      const modal = editor.Modal;
      const alertMsg = "<div id='alert-msg-overlay' data-random='" + Date.now() + "' >" +
                        "<div class='alert-msg'>" +
                          "<div class='header'><h3><span>!</span>" + defaults.assetsModalWarningTitle + "</h3></div>" +
                          "<div class='content'>" +
                            defaults.assetsModalUploadImgToLarge + " <strong>" + formatBytes(maxFileSize) + "</strong>" +
                            "<div class='files'>" +
                              "<ul>" + toLargeImages + "</ul>" +
                            "</div>" +
                            "<button class='ok' onclick='document.getElementById(\"alert-msg-overlay\").remove();'>ok</button>" +
                          "</div>" +
                        "</div>" +
                      "</div>";
      modal.setTitle(defaults.assetsModalTitle + alertMsg);
    }
  });

  // Do stuff on load
  editor.on("load", function () {


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

    // Create ostendis toolbar
    let tools = document.getElementById("gjs-tools");
    const ostTools = document.createElement("div");
    ostTools.classList.add("gjs-ost-toolbar");
    tools.append(ostTools);
  });

  // On selected components
  editor.on("component:selected", () => {
    var selected = editor.getSelected();

    selected.set({ draggable: true, removable: true, copyable: true, 'toolbar': [
        { attributes: {class: 'fa-solid fa-arrow-up'}, command: 'select-parent'},
        { attributes: {class: 'fa-solid fa-arrows-up-down-left-right'}, command: 'tlb-move'},
        { attributes: {class: 'fa-regular fa-copy'}, command: 'tlb-clone'},
        { attributes: {class: 'fa-solid fa-trash'}, command: 'tlb-delete'}
      ] 
    });

    if (selected.is("ulistitem")) {
      showOstToolbar(selected);
    } else if (selected.isChildOf("ulistitem")) {
      showOstToolbar(selected.closestType("ulistitem"));
    } else if (selected.getEl().tagName === "LI") {
      // Some are not editable..
      selected.set({ editable: true });

      // If list element empty replace with placeholder text
      if (selected.components().length === 0 && !selected.get("content")) {
        var selectedPosition = selected.index();
        var newComponent = selected.parent().append("<li><p style='margin:0;padding:0;'>Text</p></li>", { at: selectedPosition });
        selected.remove();
        editor.select(newComponent);
        selected = editor.getSelected();
      }

      showOstToolbar(selected);
    } else if (isChildOfElement(selected.getEl(), "LI")) {
      showOstToolbar(selected.closest("li"));
    }

    function showOstToolbar(listItem) {
      var elPos = listItem.index();
      var elLast = listItem.parent().getLastChild().index();

      var ostToolbar = document.querySelector(".gjs-ost-toolbar");
      ostToolbar.innerHTML = "";

      // Add clone button
      const cBtn = document.createElement("div");
      cBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18zm-1.3 3.88h2.6v3.82h3.82v2.6H13.3v3.82h-2.6V13.3H6.88v-2.6h3.82z"/></svg>';
      cBtn.classList.add("gjs-ost-toolbar-item", "clone");
      cBtn.title = defaults.ostToolbarClone;
      cBtn.addEventListener("click", () => {
        listItem.parent().append(listItem.clone(), { at: elPos + 1 });
      });
      ostToolbar.appendChild(cBtn);

      //Add delete button
      const dBtn = document.createElement("div");
      dBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm5.12 7.7v2.6H6.88v-2.6z"/></svg>';
      dBtn.title = defaults.ostToolbarDelete;
      dBtn.classList.add("gjs-ost-toolbar-item", "del");
      if (elLast != 0) {
        dBtn.addEventListener("click", () => {
          listItem.remove();
          ostToolbar.classList.remove("show");
        });
      } else {
        dBtn.classList.add("disable");
      }
      ostToolbar.appendChild(dBtn);

      // Add move up button
      const upBtn = document.createElement("div");
      upBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M1.9 20.75 12 3.25l10.1 17.5Z"/></svg>';
      upBtn.title = defaults.ostToolbarUp;
      upBtn.classList.add("gjs-ost-toolbar-item", "up");
      upBtn.addEventListener("click", () => {
        listItem.move(listItem.parent(), { at: elPos - 1 });
        editor.selectRemove(listItem);
        editor.select(listItem);
      });
      ostToolbar.appendChild(upBtn);

      // Add move down button
      const dwnBtn = document.createElement("div");
      dwnBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22.4 3.25 12 20.75 1.6 3.25Z"/></svg>';
      dwnBtn.title = defaults.ostToolbarDown;
      dwnBtn.classList.add("gjs-ost-toolbar-item", "down");
      var toPos = elPos + 2;
      if (elPos == elLast) {
        toPos = 0;
      }
      dwnBtn.addEventListener("click", () => {
        listItem.move(listItem.parent(), { at: toPos });
        editor.selectRemove(listItem);
        editor.select(listItem);
      });
      ostToolbar.appendChild(dwnBtn);

      ostToolbar.classList.add("show");
    }
  });

  // On deselected components
  editor.on("component:deselected", () => {
    var ostToolbar = document.querySelector(".gjs-ost-toolbar");
    ostToolbar.classList.remove("show");
  });
});

function isChildOfElement(element, tag) {
  while (element.parentNode) {
    element = element.parentNode;
    if (element.tagName === tag) return element;
  }
  return false;
}

function formatBytes(bytes, decimals) {
  if (bytes == 0) return "0 Bytes";
  var k = 1024,
    dm = decimals || 2,
    sizes = ["Bytes", "KB", "MB", "GB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
