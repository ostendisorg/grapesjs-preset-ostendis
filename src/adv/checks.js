export function checkOstBlocks(editor, usedOstBlockTypes){
    console.log("--- CheckOstBlocks ---");
 
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
