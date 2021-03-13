
var renderedsMap = Uiml.htmlUiRendererPeers[0].dclasses;
renderedsMap.push({ id: "textInput", mapsto: "InputRenderer" });
renderedsMap.push({ id: "plainEditor", mapsto: "InputRenderer" });
Uiml.refresh();

FormBuilder.UimlPart.render = Uiml.render;

var model = new FormBuilder.UimlPart("panel");

ko.applyBindings(model, document.getElementById("object-container"));