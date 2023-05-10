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

    dividerBlkLabel: "Divider",
    ulistBlkLabel: "List",
    iconBlkLabel: "Icon",
    imageBlkLabel: "Image",
    videoBlkLabel: "Video",
    mapBlkLabel: "Map",
    linkBlkLabel: "Link",
    buttonBlkLabel: "Button",
    buttonApplyBlkLabel: "Apply button",
    buttonApplyBlkText: "Apply here",
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

    /* Diese Übersetzugen werden erste verwendet, wenn das Modal geladen wird. Deshalb defaulte Werte in Deutsch.*/
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

  // limit file size
  editor.on('asset:upload:response', (response) => {
    const asstm = editor.AssetManager;
    let maxFileSize = 1048576; //1MB
    let uploadData = response.data;
    let toLargeImages = "";

    uploadData.forEach(function(imgData){
      let base64str = imgData.src.split(',')[1];
      let decoded = Buffer.from(base64str, 'base64');

      if(decoded.length > maxFileSize){
        toLargeImages += "<li><small>" + imgData.name + ": <strong>"+ formatBytes(decoded.length) + "</strong></small></li>";
      }
      else{
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
    };
  });
  
  // On Selected Components
  editor.on('component:selected', () => {
    var selected = editor.getSelected();
    
    // Hide Toolbar
    selected.set('toolbar',[]);
    

    if(selected.is("ulistitem")){
      //console.log("select ulistitem");
      addBtn(selected);
    }
    if(selected.isChildOf('ulistitem')){
      //console.log("select childof ulistitem");
      addBtn(selected.closestType('ulistitem'));
    }

    function addBtn(listitem){
      var el = listitem.getEl();
      var elPos = listitem.index();

      //Add class to li element
      listitem.addClass('gjs-show-add-btn');

      if(el.querySelector('.gjs-btn-container') === null) {
        //console.log("generate btn");
        const div = document.createElement('div');
        div.classList.add('gjs-btn-container');

        const btn = document.createElement('button');
        btn.innerHTML = '+';
        btn.classList.add("gjs-add-list-item-btn");
        btn.addEventListener('click', () => {
          listitem.parent().append(listitem.clone(), {at: elPos + 1});
        });
        div.appendChild(btn);
        el.appendChild(div);
      }
    }
  
  });
  editor.on('component:deselected', (deselected) => {
    if(deselected.is('ulistitem')){
      //console.log("deselected ulistitem");
      deselected.removeClass('gjs-show-add-btn');
    }
    if(deselected.isChildOf('ulistitem')){
      //console.log("deselected child of ulistitem");
      deselected.closestType('ulistitem').removeClass('gjs-show-add-btn');
    }
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