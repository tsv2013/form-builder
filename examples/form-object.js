FormBuilder.UimlPart.render = Uiml.render;

var model = FormBuilder.Form.show(null, null, document.getElementById("form-builder-container"),
    function(object, json) {
        document.getElementById("form-builder-model-container").value = json;
    },
    function(layout) {
        document.getElementById("form-builder-layout-container").value = JSON.stringify(layout, null, 4);
    }
);
