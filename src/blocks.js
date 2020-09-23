define(function() {
  return (opt = {}) => {
    let tableStyleStr = '';
    let cellStyleStr = '';
    let editor = opt.editor;
    let tableStyle = opt.tableStyle || {};
    let cellStyle = opt.cellStyle || {};
    let bm = editor.BlockManager;
    for (let prop in tableStyle){
      tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
    }
    for (let prop in cellStyle){
      cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
    }
    bm.getAll().reset();
    
    bm.add('applyButton', {
      label: opt.buttonBlkLabel,
      category: opt.categoryLabel,
      content: '<a data-gjs-type="link" href="$$$ApplyLink$$$" class="button">Apply here</a>',
      attributes: {class:'gjs-fonts gjs-f-button'}
    });
    
    bm.add('text', {
      label: opt.textBlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: {
       type: 'text',
       content: 'Text',
       activeOnRender: 1
      },
    });
  };
})
