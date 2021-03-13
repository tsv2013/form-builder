
var renderedsMap = Uiml.htmlUiRendererPeers[0].dclasses;
renderedsMap.push({ id: "textInput", mapsto: "InputRenderer" });
renderedsMap.push({ id: "plainEditor", mapsto: "InputRenderer" });
Uiml.refresh();

FormBuilder.UimlPart.render = Uiml.render;


var model = {
    options: {
        data: "items",
        itemType: "part"
    },
    context: {
        $data: {
            create: function(elementType) { return new FormBuilder.UimlPart(elementType); },
            items: []
        }
    }
}

ko.applyBindings(model, document.getElementById("collection-container"));