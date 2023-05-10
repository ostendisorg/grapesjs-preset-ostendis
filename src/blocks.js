define(function () {
  return (opt = {}) => {
    let editor = opt.editor;
    let bm = editor.BlockManager;

    bm.getAll().reset();

  };
});
