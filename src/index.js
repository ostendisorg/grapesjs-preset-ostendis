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

    /* Diese Übersetzugen werden erste verwendet, wenn das Modal geladen wird. Deshalb default Werte in Deutsch.*/
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
    
    // Hide toolbar
    selected.set('toolbar',[]);

    // Set properties
    selected.set({'draggable' : false, 'removable' : false , 'copyable' : false});
    

    if(selected.is("ulistitem")){
      addBtn(selected);
    }
    if(selected.isChildOf('ulistitem')){
      addBtn(selected.closestType('ulistitem'));
    }

    function addBtn(listitem){
      var el = listitem.getEl();
      var elPos = listitem.index();
      var elLast = listitem.parent().getLastChild().index();

      //console.log(listitem.getI);
      //console.log("selected: " + elPos);
      //console.log("lastchild: " + elLast);

      //Add class to li element
      listitem.addClass('gjs-show-add-btn');

      if(el.querySelector('.gjs-btn-container') === null) {
        const div = document.createElement('div');
        div.classList.add('gjs-btn-container');

        // Add clone button
        const cBtn = document.createElement('button');
        cBtn.innerHTML = '&#43;';
        cBtn.classList.add("gjs-add-list-item-btn","clone");
        cBtn.addEventListener('click', () => {
          listitem.parent().append(listitem.clone(), {at: elPos + 1});
        });
        div.appendChild(cBtn);

        // Add delete button
        const dBtn = document.createElement('button');
        dBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path></svg>';
        dBtn.classList.add("gjs-add-list-item-btn","del");
        dBtn.addEventListener('click', () => {
          listitem.remove();
        });
        if(elLast != 0){
          div.appendChild(dBtn);
        }

        // Add move up button
        const upBtn = document.createElement('button');
        upBtn.innerHTML = '&#9652;';
        upBtn.classList.add("gjs-add-list-item-btn","up");
        upBtn.addEventListener('click', () => {
          //console.log("up to: " + (elPos - 1));
          listitem.move(listitem.parent(), {at: elPos - 1});
          editor.select(listitem);
        });
        div.appendChild(upBtn);

        // Add move down button
        const dwnBtn = document.createElement('button');
        dwnBtn.innerHTML = '&#9662;';
        dwnBtn.classList.add("gjs-add-list-item-btn","down");
        var toPos = elPos + 2;
        if(elPos == elLast){
          toPos = 0;
        }
        dwnBtn.addEventListener('click', () => {
          //console.log("down to: " + toPos);
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
    if(deselected.is('ulistitem')){
      deselected.removeClass('gjs-show-add-btn');
    }
    if(deselected.isChildOf('ulistitem')){
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