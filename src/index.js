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

    /* Diese Übersetzungen werden erste verwendet, wenn das Modal geladen wird. Deshalb default Werte in Deutsch.*/
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
 /* let importBlocks = require("./blocks");
  importBlocks(c);*/

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

  // Limit file size
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
    // Title translation and activate
    var openTmBtn = editor.Panels.getButton("views", "open-tm");
    openTmBtn.set("attributes", {
      title: defaults.openTmBtnTitle,
    });
    openTmBtn && openTmBtn.set("active", 1);

    // Title translation and activate
    var swVisBtn = editor.Panels.getButton("options", "sw-visibility");
    swVisBtn.set("attributes", {
      title: defaults.swichtVwBtnTitle,
    });
    swVisBtn && swVisBtn.set("active", 1);

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
        pastedText = (e.originalEvent || e).clipboardData.getData('text/plain');
      }
      e.target.ownerDocument.execCommand("insertText", false, pastedText);
      return false; // Prevent the default handler
    };
  });
  
  // On selected components
  editor.on('component:selected', () => {
    var selected = editor.getSelected();
       
    // Set properties
    selected.set({'draggable' : false, 'removable' : false , 'copyable' : false,'toolbar': []});
   
    // Is ulistitem or child of ulistitem
    if(selected.is("ulistitem") || selected.getEl().tagName === "LI"){
      addBtn(selected);
    }
    else if(selected.isChildOf('ulistitem')){
      addBtn(selected.closestType('ulistitem'));
    }

    function addBtn(listitem){
      var el = listitem.getEl();
      var elPos = listitem.index();
      var elLast = listitem.parent().getLastChild().index();

      // Toolbar Manipulation (works!)
      // listitem.set({
      //   toolbar:[
      //     {
      //       attributes: {title: defaults.ostToolbarUp },
      //       command: () => {listitem.move(listitem.parent(), {at: elPos - 1});},
      //       label: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M1.9 20.75 12 3.25l10.1 17.5Z"/></svg>',
      //     }
      //   ]
      // });

      //Add class to li element
      listitem.addClass('gjs-show-add-btn');

      if(el.querySelector('.gjs-btn-container') === null) {
        const div = document.createElement('div');
        div.classList.add('gjs-btn-container');

        // Add clone button
        const cBtn = document.createElement('button');
        cBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18zm-1.3 3.88h2.6v3.82h3.82v2.6H13.3v3.82h-2.6V13.3H6.88v-2.6h3.82z"/></svg>';
        cBtn.classList.add("gjs-add-list-item-btn","clone");
        cBtn.title = defaults.ostToolbarClone;
        cBtn.addEventListener('click', () => {
          listitem.parent().append(listitem.clone(), {at: elPos + 1});
        });
        div.appendChild(cBtn);

        // Add delete button
        const dBtn = document.createElement('button');
        dBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm5.12 7.7v2.6H6.88v-2.6z"/></svg>';
        dBtn.title = defaults.ostToolbarDelete;
        dBtn.classList.add("gjs-add-list-item-btn","del");
        dBtn.addEventListener('click', () => {
          listitem.remove();
        });
        if(elLast != 0){
          div.appendChild(dBtn);
        }

        // Add move up button
        const upBtn = document.createElement('button');
        upBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M1.9 20.75 12 3.25l10.1 17.5Z"/></svg>';
        upBtn.title = defaults.ostToolbarUp;
        upBtn.classList.add("gjs-add-list-item-btn","up");
        upBtn.addEventListener('click', () => {
          listitem.move(listitem.parent(), {at: elPos - 1});
          editor.select(listitem);
        });
        div.appendChild(upBtn);

        // Add move down button
        const dwnBtn = document.createElement('button');
        dwnBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22.4 3.25 12 20.75 1.6 3.25Z"/></svg>';
        dwnBtn.title = defaults.ostToolbarDown;
        dwnBtn.classList.add("gjs-add-list-item-btn","down");
        var toPos = elPos + 2;
        if(elPos == elLast){
          toPos = 0;
        }
        dwnBtn.addEventListener('click', () => {
          listitem.move(listitem.parent(), {at: toPos});
          editor.select(listitem);
        });        
        div.appendChild(dwnBtn);

        el.appendChild(div);
      }
    }
  });

  // On deselected components
  editor.on('component:deselected', (deselected) => {
    if(deselected.is('ulistitem') || deselected.getEl().tagName === "LI"){
      deselected.removeClass('gjs-show-add-btn');
    }
    else if(deselected.isChildOf('ulistitem')){
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