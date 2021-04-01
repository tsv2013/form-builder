FormBuilder.UimlPart.render = Uiml.render;

var object = {
    name: "Tom",
    surname: "Young",
    zipcode: "103844",
    city: "Kanzas",
    address: "Mountain drive, 754",
    phone: "2-300-765-11-22",
    data: {
        first_name: "Bob",
        last_name: "Sallivan",
        email: "bob@sallivan-family.org",
    }
}

var model = FormBuilder.Form.show(object, null, document.getElementById("form-builder-container"),
    function(object, json) {
        document.getElementById("form-builder-model-container").value = json;
    },
    function(layout) {
        document.getElementById("form-builder-layout-container").value = JSON.stringify(layout, null, 4);
    }
);
