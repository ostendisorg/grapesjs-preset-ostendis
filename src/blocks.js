define(function() {
  return (opt = {}) => {
    let editor = opt.editor;
    let bm = editor.BlockManager;

    bm.getAll().reset();
    
    bm.add('applyButton', {
      label: opt.buttonApplyBlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-button'},
      content: `<a data-gjs-type="link" href="$$$ApplyLink$$$" class="button">${opt.buttonApplyBlkText}</a>`
    });

    bm.add('applyQrCode', {
      label: opt.applyQrCodeBlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-image'},
      content: {
        type: 'image',
        editable: false,
        droppable: true,
        style: {
          'min-height': '100px',
          'min-width': '100px',
          'width': '100px'
        },
        attributes: {src:'$$$ApplyQrCode$$$', alt:'QR code'},
      }
    });
    
    bm.add('text', {
      label: opt.textBlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: {
       type: 'text',
       content: 'Text'
      },
    });

    bm.add('text2', {
      label: opt.textBlkLabelWithSpace,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: {
       type: 'text',
       content: 'Text',
       style: { 'margin-top': '15px', 'margin-bottom': '15px' }
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

    bm.add('divider', {
      label: opt.dividerBlkLabel,
      category: opt.categoryLabel,
      content: `<hr style="border-top: 1px solid #2b303b;" />`,
      attributes: {class:'gjs-fonts gjs-f-divider'}
    });
    
  };
})
