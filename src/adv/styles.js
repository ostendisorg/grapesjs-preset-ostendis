export default (editor) => {
  const sm = editor.StyleManager;

  const removed = sm.removeSector('typography');

  if(removed) {
    var sector = sm.addSector('typography',{
      name: 'Typography',
      open: false,
      buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
      properties: [{
        property: 'text-align',
        list: [
            { value: 'left', className: 'fa fa-align-left' },
            { value: 'center', className: 'fa fa-align-center'  },
            { value: 'right', className: 'fa fa-align-right' },
            { value: 'justify', className: 'fa fa-align-justify' },
        ],
      },{
        property: 'font-family',
        name: 'Font',
        list: [
          { name: 'Calibri', value: 'Calibri, sans-serif' },
          { name: 'Calibri Light', value: 'Calibri Light, sans-serif' },
          { name: 'Open Sans', value: 'Open Sans, sans-serif' },
          { name: 'Open Sans Condensed', value: 'Open Sans Condensed, sans-serif' },
          { name: 'Roboto', value: 'Roboto, sans-serif' },
          { name: 'Roboto Slab', value: 'Roboto Slab, serif' },
          { name: 'Merriweather', value: 'Merriweather, serif' },
          { name: 'PT Serif', value: 'PT Serif, serif' },
          { name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
          { name: 'Helvetica', value: 'Helvetica, Arial, sans-serif' },
          { name: 'Helvetica Neue', value: 'Helvetica Neue, Helvetica, Arial, sans-serif' },
          { name: 'Comic Sans MS', value: 'Comic Sans MS, cursive' },
          { name: 'Courier New', value: 'Courier New, Courier, monospace' },
          { name: 'Georgia', value: 'Georgia, serif' },
          { name: 'Lucida Sans Unicode', value: 'Lucida Sans Unicode, Lucida Grande, sans-serif' },
          { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
          { name: 'Times New Roman', value: 'Times New Roman, Times, serif' },
          { name: 'Trebuchet MS', value: 'Trebuchet MS, Helvetica, sans-serif' },
          { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
          { name: 'Brush Script MT', value: 'Brush Script MT, sans-serif' },
          { name: 'Impact', value: 'Impact, Charcoal, sans-serif' }
        ]
      }]
    }, { at: 0 });
  }
}