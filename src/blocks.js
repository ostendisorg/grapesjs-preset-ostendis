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
      content: '<hr style="border-top: 1px solid #2b303b;" />',
      attributes: {class:'gjs-fonts gjs-f-divider'}
    });

    // OST ad blocks
    bm.add('ost-organization', {
      label: opt.textBlkLabelOrg,
      category: 'Ostendis',
      attributes: {class:'gjs-fonts gjs-f-hero'},
      content: {
        name: opt.textBlkLabelOrg,
        type: 'text',
        content: opt.textBlkContentOrg,
        attributes: { 'data-ost-type': 'organization' },
      },
    });

    bm.add('ost-intro', {
      label: opt.textBlkLabelIntro,
      category: 'Ostendis',
      attributes: {class:'gjs-fonts gjs-f-hero'},
      content: {
        name: opt.textBlkLabelIntro,
        type: 'text',
        content: opt.textBlkContentIntro,
        attributes: { 'data-ost-type': 'introduction' },
      },
    });

    bm.add('ost-description', {
      label: opt.textBlkLabelDesc,
      category: 'Ostendis',
      attributes: {class:'gjs-fonts gjs-f-hero'},
      content: { 
        type: 'text',
        components: [
          {
            type: 'text',
            content: '<strong>' + opt.textBlkTitleDesc + '</strong>',
          },
          {
            name: opt.textBlkLabelDesc,
            type: 'text',
            content: opt.textBlkContentDesc,
            attributes: { 'data-ost-type': 'description' },
          },
        ],
        
      },
    });

    bm.add('ost-tasks', {
      label: opt.textBlkLabelTasks,
      category: 'Ostendis',
      attributes: {class:'gjs-fonts gjs-f-hero'},
      content: { 
        type: 'text',
        components: [
          {
            type: 'text',
            content: '<strong>' + opt.textBlkTitleTasks + '</strong>',
          },
          {
            name: opt.textBlkLabelTasks,
            type: 'text',
            content: opt.textBlkContentTasks,
            attributes: { 'data-ost-type': 'tasks' },
          },
        ],
        
      },
    });

    bm.add('ost-requirements', {
      label: opt.textBlkLabelReq,
      category: 'Ostendis',
      attributes: {class:'gjs-fonts gjs-f-hero'},
      content: {
        type: 'text',
        components: [
          {
            type: 'text',
            content: '<strong>' + opt.textBlkTitleReq + '</strong>',
          },
          {
            name: opt.textBlkLabelReq,
            type: 'text',
            content: opt.textBlkContentReq,
            attributes: { 'data-ost-type': 'requirements' },
          },
        ],
      },
    });

    bm.add('ost-benefits', {
      label: opt.textBlkLabelBenefits,
      category: 'Ostendis',
      attributes: {class:'gjs-fonts gjs-f-hero'},
      content: {
        type: 'text',
        components: [
          {
            type: 'text',
            content: '<strong>' + opt.textBlkTitleBenefits + '</strong>',
          },
          {
            name: opt.textBlkLabelBenefits,
            type: 'text',
            content: opt.textBlkContentBenefits,
            attributes: { 'data-ost-type': 'benefits' },
          },
        ],
        
      },
    });

    bm.add('ost-action', {
      label: opt.textBlkLabelAction,
      category: 'Ostendis',
      attributes: {class:'gjs-fonts gjs-f-hero'},
      content: {
        name: opt.textBlkLabelAction,
        type: 'text',
        content: opt.textBlkContentAction,
        attributes: { 'data-ost-type': 'calltoaction' },
      },
    });

    bm.add('ost-contact', {
      label: opt.textBlkLabelContact,
      category: 'Ostendis',
      attributes: {class:'gjs-fonts gjs-f-hero'},
      content: {
        name: opt.textBlkLabelContact,
        type: 'text',
        content: opt.textBlkContentContact,
        attributes: { 'data-ost-type': 'contact' },
      },
    });
    
  };
})
