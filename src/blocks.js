define(function() {
  return (opt = {}) => {
    let editor = opt.editor;
    let bm = editor.BlockManager;

    bm.getAll().reset();
    
    bm.add('applyButton', {
      label: opt.buttonBlkLabel,
      category: opt.categoryLabel,
      content: '<a data-gjs-type="link" href="$$$ApplyLink$$$" class="button">Apply here</a>',
      attributes: {title: 'Insert h1 block', class:'gjs-fonts gjs-f-button'}
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

    bm.add('image', {
      label: opt.imageBlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-image'},
      content: {
        type:'image',
        style: {color:'black'},
        activeOnRender: 1
      },
    });
    
  };
})
