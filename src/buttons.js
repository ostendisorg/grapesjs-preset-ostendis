define(function () {
  const tltAttr = "title";
  const tltPosAttr = "data-tooltip-pos";

  let updateTooltip = (coll) => {
    coll.each((item) => {
      var attrs = item.get("attributes");
      attrs[tltPosAttr] = "bottom";
      item.set("attributes", attrs);
    });
  };

  return (opt = {}) => {
    let editor = opt.editor;
    let pnm = editor.Panels;

    // Add undo
    pnm.addButton("options", {
      id: opt.cmdUndo,
      className: "fa fa-undo",
      command: opt.cmdUndo,
      attributes: {
        [tltAttr]: opt.cmdBtnUndoLabel,
      },
    });

    // Add redo
    pnm.addButton("options", {
      id: opt.cmdRedo,
      className: "fa fa-repeat",
      command: opt.cmdRedo,
      attributes: {
        [tltAttr]: opt.cmdBtnRedoLabel,
      },
    });

    let optPanel = pnm.getPanel("options");

    if (optPanel) {
      let cmdBtns = optPanel.get("buttons");

      // Remove preview
      let preView = pnm.removeButton("options", "preview");
      preView && cmdBtns.remove(preView);
     
      // Remove code view
      let expTemp = pnm.removeButton("options", "export-template");
      expTemp && cmdBtns.remove(expTemp);

      // Remove fullscreen
      let fullScreen = pnm.removeButton("options", "fullscreen");
      fullScreen && cmdBtns.remove(fullScreen);
      
      // Fix tooltip position
      updateTooltip(cmdBtns);
    }

    // Clean commands panel
    let cmdPanel = pnm.getPanel("commands");

    if (cmdPanel) {
      let cmdBtns = cmdPanel.get("buttons");
      cmdBtns.reset();

      // Fix tooltip position
      updateTooltip(cmdBtns);
    }

    // Clean views panel
    let viewPanel = pnm.getPanel("views");
  
    if (viewPanel) {
      let cmdBtns = viewPanel.get("buttons");

      // Remove style manager button
      let smBtn = pnm.removeButton("views", "open-sm");
      smBtn && cmdBtns.remove(smBtn);

      // Set trait manager active
      let tmBtn = pnm.getButton("views", "open-tm");
      tmBtn.set('active',true);

      // Remove layers button
      let layBtn = pnm.removeButton("views", "open-layers");
      layBtn && cmdBtns.remove(layBtn);

      //Remove blocks button
      /*let blocksBtn = pnm.removeButton("views", "open-blocks");
      blocksBtn && cmdBtns.remove(blocksBtn);*/

      // Fix tooltip position
      updateTooltip(cmdBtns);
    }

    // Turn off default devices select and create new one
    editor.getConfig().showDevices = 0;
    let devicePanel = pnm.addPanel({
      id: "devices-c",
    });

    let deviceBtns = devicePanel.get("buttons");

    devicePanel.get("buttons").add([
      {
        id: "deviceDesktop",
        command: "set-device-desktop",
        className: "fa fa-desktop",
        attributes: { [tltAttr]: opt.cmdBtnDesktopLabel },
        active: 1,
      },
      {
        id: "deviceTablet",
        command: "set-device-tablet",
        className: "fa fa-tablet",
        attributes: { [tltAttr]: opt.cmdBtnTabletLabel },
      },
      {
        id: "deviceMobile",
        command: "set-device-mobile",
        className: "fa fa-mobile",
        attributes: { [tltAttr]: opt.cmdBtnMobileLabel },
      },
    ]);

    updateTooltip(deviceBtns);
  };
});
