export function checkOstBlocks(editor, usedOstBlockTypes){

    usedOstBlockTypes.forEach(el => { el.count = 0; });

    var wrapper = editor.DomComponents.getWrapper();
    var elements = wrapper.view.$el.find('[data-ost-type]').get();

    elements.forEach(element => {
        var type = element.getAttribute('data-ost-type');
        let index = usedOstBlockTypes.findIndex((item) => item.type === type);
        if (index === -1) {
            usedOstBlockTypes.push({ type: type, count: 1 });
        }
        else {
            usedOstBlockTypes[index].count = usedOstBlockTypes[index].count + 1; 
        }
    });
}

export function alertOstBlocks(defaults){

    var ostBlocksWithError = "";
    defaults.usedOstBlockTypes.forEach(el => { 
        if( el.count > 1){
            var type = el.type;
            type = type.replace(/[A-Z]/g, " $&");
            type = type[0].toUpperCase() + type.slice(1);
            ostBlocksWithError += `<li>${type} (${el.count}&times;)</li>`;
        } 
    });

    const alertMsg = `<div class='files'>
                        <p>${defaults.ostBlocksModalWarningText}</p>
                        <ul>${ostBlocksWithError}</ul>
                      </div>
                      <button class='ok' data-close-modal=''>ok</button>`; 

    defaults.editor.Modal.open({
        title : defaults.ostBlocksModalWarningTitle,
        content: alertMsg,
        attributes: { class: 'alertModalOstBlocks' },
    });
}
