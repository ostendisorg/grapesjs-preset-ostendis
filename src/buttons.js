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

    // Option panel
    let optPanel = pnm.getPanel("options");

    if (optPanel) {
      let optBtns = optPanel.get("buttons");
      optBtns.reset();

      //Add view components
      optBtns.add([
        {
          active: true,
          id: "sw-visibility",
          className: "fa-solid fa-border-none",
          command: "core:component-outline",
          context: "sw-visibility",
          attributes: { [tltAttr]: opt.cmdBtnViewCompLabel },
        },
      ]);

      //Add undo
      optBtns.add([
        {
          id: opt.cmdUndo,
          className: "fa-solid fa-rotate-left",
          command: opt.cmdUndo,
          attributes: {
            [tltAttr]: opt.cmdBtnUndoLabel,
          },
        },
      ]);

      //Add redo
      optBtns.add([
        {
          id: opt.cmdRedo,
          className: "fa-solid fa-rotate-right",
          command: opt.cmdRedo,
          attributes: {
            [tltAttr]: opt.cmdBtnRedoLabel,
          },
        },
      ]);
      updateTooltip(optBtns);
    }

    // Commands panel
    let cmdPanel = pnm.getPanel("commands");

    if (cmdPanel) {
      let cmdBtns = cmdPanel.get("buttons");
      cmdBtns.reset();

      // Fix tooltip position
      updateTooltip(cmdBtns);
    }

    // Views panel
    let viewPanel = pnm.getPanel("views");

    if (viewPanel) {
      let cmdBtns = viewPanel.get("buttons");

      // Remove style manager button
      let smBtn = pnm.removeButton("views", "open-sm");
      smBtn && cmdBtns.remove(smBtn);

      // Set trait manager active
      let tmBtn = pnm.getButton("views", "open-tm");
      tmBtn.set("active", true);

      // Remove layers button
      let layBtn = pnm.removeButton("views", "open-layers");
      layBtn && cmdBtns.remove(layBtn);

      //Remove blocks button
      let blocksBtn = pnm.removeButton("views", "open-blocks");
      blocksBtn && cmdBtns.remove(blocksBtn);

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
        className: "fa-solid fa-tablet",
        attributes: { [tltAttr]: opt.cmdBtnTabletLabel },
      },
      {
        id: "deviceMobile",
        command: "set-device-mobile",
        className: "fa-solid fa-mobile",
        attributes: { [tltAttr]: opt.cmdBtnMobileLabel },
      },
    ]);

    updateTooltip(deviceBtns);
  };
});
