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

    // Options panel
    let optPanel = pnm.getPanel("options");

    if (optPanel) {
      let optBtns = optPanel.get("buttons");
      optBtns.reset();

      //Add option buttons
      optBtns.add([
        {
          id: "ost-blocks-visibility",
          className: "fa-solid fa-file-circle-check",
          command: "ost-blocks-visibility",
          context: "ost-blocks-visibility",
          togglable: true, 
          attributes: { [tltAttr]: opt.cmdBtnViewOstBlocks },
        },
        {
          id: "sw-visibility",
          className: "fa-solid fa-border-none",
          command: "core:component-outline",
          context: "sw-visibility",
          togglable: true, 
          active: true,
          attributes: { [tltAttr]: opt.cmdBtnViewCompLabel },
        },
        {
          id: "export-template",
          className: "fa-solid fa-code",
          command: "export-template",
          context: "export-template",
          attributes: { [tltAttr]: opt.cmdBtnViewCode },
        },
        {
          id: opt.cmdOpenImport,
          className: "fa-solid fa-upload",
          command: opt.cmdOpenImport,
          attributes: { [tltAttr]: opt.modalTitleImport },
        },
        {
          id: opt.cmdUndo,
          className: "fa-solid fa-rotate-left",
          command: opt.cmdUndo,
          attributes: { [tltAttr]: opt.cmdBtnUndoLabel },
        },
        {
          id: opt.cmdRedo,
          className: "fa-solid fa-rotate-right",
          command: opt.cmdRedo,
          attributes: { [tltAttr]: opt.cmdBtnRedoLabel },
        },
      ]);
      updateTooltip(optBtns);
    }

    // Views panel
    let viewPanel = pnm.getPanel("views");

    if (viewPanel) {
      let viewBtns = viewPanel.get("buttons");
      viewBtns.reset();

      viewBtns.add([
        {
          id: "open-sm",
          className: "fa-solid fa-paintbrush",
          command: "open-sm",
          togglable: false,
          attributes: { [tltAttr]: opt.openSmBtnTitle },
        },
        {
          id: "open-tm",
          className: "fa-solid fa-gear",
          command: "open-tm",
          togglable: false,
          attributes: { [tltAttr]: opt.openTmBtnTitle },
        },
        {
          id: "open-layers",
          className: "fa-solid fa-layer-group",
          command: "open-layers",
          togglable: false,
          attributes: { [tltAttr]: opt.openLayersBtnTitle },
        },
        {
          id: "open-blocks",
          className: "fa-solid fa-table-cells-large",
          command: "open-blocks",
          togglable: false,
          attributes: { [tltAttr]: opt.openBlocksBtnTitle },
          active: true,
        },
      ]);

      // Set tooltip position
      updateTooltip(viewBtns);
    }

    // Commands panel
    let cmdPanel = pnm.getPanel("commands");

    if (cmdPanel) {
      let cmdBtns = cmdPanel.get("buttons");
      cmdBtns.reset();

      // Fix tooltip position
      updateTooltip(cmdBtns);
    }

    // Devices panel
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
        className: "fa-solid fa-desktop",
        attributes: { [tltAttr]: opt.cmdBtnDesktopLabel },
        active: 1,
      },
      {
        id: "deviceTablet",
        command: "set-device-tablet",
        className: "fa-solid fa-tablet-screen-button",
        attributes: { [tltAttr]: opt.cmdBtnTabletLabel },
      },
      {
        id: "deviceMobile",
        command: "set-device-mobile",
        className: "fa-solid fa-mobile-screen-button",
        attributes: { [tltAttr]: opt.cmdBtnMobileLabel },
      },
    ]);

    updateTooltip(deviceBtns);
  };
});
