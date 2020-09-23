define(function() {
  const tltPosAttr = 'data-tooltip-pos';
  
  return (opt = {}) => {
    let editor = opt.editor;
    let pnm = editor.Panels;
    let optPanel = pnm.getPanel('options');
    if(optPanel){
      // Fix tooltip position
      var cmdBtns = optPanel.get('buttons');
      cmdBtns.each((btn) => {
        var attrs = btn.get('attributes');
        attrs[tltPosAttr] = 'bottom';
        btn.set('attributes', attrs);
      });
      // Remove preview
      let prvBtn = pnm.addButton('options', 'preview');
      prvBtn && cmdBtns.remove(prvBtn);
    }
    // Clean commands panel
    let cmdPanel = pnm.getPanel('commands');
    if(cmdPanel){
      let cmdBtns = cmdPanel.get('buttons');
      cmdBtns.reset();
    }
  };
})
