FormBuilder.UimlPart.render = Uiml.render;

var model = new FormBuilder.UimlPart("panel");

ko.applyBindings(model, document.getElementById("object-container"));
