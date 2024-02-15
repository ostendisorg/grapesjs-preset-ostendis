define(function() {
  return (opt = {}) => {
    let editor = opt.editor;
    let cmdm = editor.Commands;
    let importCommand = require('./openImportCommand');
    let exportCommand = require('./openExportCommand');

    cmdm.add(opt.cmdOpenImport, importCommand(opt));

    // Overwrite export template after the editor is loaded
    // (default commands are loaded after plugins)
    editor.on('load', () => {
      cmdm.add('export-template', exportCommand(opt));
    });

    cmdm.add('ost-blocks-visibility', {
      run(editor) {
        //console.log("ost-blocks-visibility: ", "active");
        const cList = editor.Canvas.getBody().classList;
        cList.add("show-ost-blocks");
      },
      stop(editor) {
        //console.log("ost-blocks-visibility: ", "inactive");
        const cList = editor.Canvas.getBody().classList;
        cList.remove("show-ost-blocks");
      },
    });

    cmdm.add('undo', {
      run(editor, sender) {
        sender.set('active', 0);
        editor.UndoManager.undo(1);
      }
    });

    cmdm.add('redo', {
      run(editor, sender) {
        sender.set('active', 0);
        editor.UndoManager.redo(1);
      }
    });

    cmdm.add('set-device-desktop', {
      run(editor) {
        editor.setDevice('Desktop');
      }
    });

    cmdm.add('set-device-tablet', {
      run(editor) {
        editor.setDevice('Tablet');
      }
    });

    cmdm.add('set-device-mobile', {
      run(editor) {
        editor.setDevice('Mobile portrait');
      }
    });
    
  };
})
