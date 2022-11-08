define(function () {
  return (opt = {}) => {
    let editor = opt.editor;
    let cmdm = editor.Commands;

    // Overwrite export template after the editor is loaded
    // (default commands are loaded after plugins)
    cmdm.add("undo", {
      run(editor, sender) {
        sender.set("active", 0);
        editor.UndoManager.undo(1);
      },
    });

    cmdm.add("redo", {
      run(editor, sender) {
        sender.set("active", 0);
        editor.UndoManager.redo(1);
      },
    });

    cmdm.add("set-device-desktop", {
      run(editor) {
        editor.setDevice("Desktop");
      },
    });

    cmdm.add("set-device-tablet", {
      run(editor) {
        editor.setDevice("Tablet");
      },
    });

    cmdm.add("set-device-mobile", {
      run(editor) {
        editor.setDevice("Mobile portrait");
      },
    });
  };
});
