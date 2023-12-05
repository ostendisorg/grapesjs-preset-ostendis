define(function () {
    return (opt = {}) => {
        let editor = opt.editor;
        let rte = editor.RichTextEditor;

        rte.add('removeFormat', {
            icon: '<i class="fa-solid fa-text-slash"></i>',
            attributes: {title: 'Remove format'},
           
           result: rte => {rte.exec('removeformat',false,"");}
        });
    };
});