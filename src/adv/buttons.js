define(function() {
  const tltAttr = 'title';
  const tltPosAttr = 'data-tooltip-pos';

  let updateTooltip = (coll) => {
    coll.each((item) => {
      var attrs = item.get('attributes');
      attrs[tltPosAttr] = 'bottom';
      item.set('attributes', attrs);
    });
  }
  
  return (opt = {}) => {
    let editor = opt.editor;
    let pnm = editor.Panels;
    let optPanel = pnm.getPanel('options');

    // Add download
    pnm.addButton('options', {
      id: opt.cmdOpenImport,
      className: 'fa fa-download',
      command: opt.cmdOpenImport,
      attributes: {[tltAttr]: opt.modalTitleImport},
    });

    // Add undo
    pnm.addButton('options', {
      id: opt.cmdUndo,
      className: 'fa fa-undo',
      command: opt.cmdUndo,
      attributes: {
        [tltAttr]: opt.cmdBtnUndoLabel,
      }
    });

    // Add redo
    pnm.addButton('options', {
      id: opt.cmdRedo,
      className: 'fa fa-repeat',
      command: opt.cmdRedo,
      attributes: {
        [tltAttr]: opt.cmdBtnRedoLabel,
      }
    });

    if (optPanel) {
      let cmdBtns = optPanel.get("buttons");

      // Remove preview
      let preView = pnm.removeButton("options", "preview");
      preView && cmdBtns.remove(preView);

      // Remove fullscreen
      let fullScreen = pnm.removeButton("options", "fullscreen");
      fullScreen && cmdBtns.remove(fullScreen);
      
      // Fix tooltip position
      updateTooltip(cmdBtns);
    }

    // Clean commands panel
    let cmdPanel = pnm.getPanel('commands');

    if(cmdPanel){
      let cmdBtns = cmdPanel.get('buttons');
      cmdBtns.reset();

      // Fix tooltip position
      updateTooltip(cmdBtns);
    }

    // Turn off default devices select and create new one
    editor.getConfig().showDevices = 0;
    let devicePanel = pnm.addPanel({
      id: 'devices-c'
    });

    let deviceBtns = devicePanel.get('buttons');
    devicePanel.get('buttons').add([{
      id: 'deviceDesktop',
      command: 'set-device-desktop',
      className: 'fa fa-desktop',
      attributes: {[tltAttr]: opt.cmdBtnDesktopLabel},
      active: 1,
    }, {
      id: 'deviceTablet',
      command: 'set-device-tablet',
      className: 'fa fa-tablet',
      attributes: {[tltAttr]: opt.cmdBtnTabletLabel},
    }, {
      id: 'deviceMobile',
      command: 'set-device-mobile',
      className: 'fa fa-mobile',
      attributes: {[tltAttr]: opt.cmdBtnMobileLabel},
    }])

    updateTooltip(deviceBtns);
  };
})
