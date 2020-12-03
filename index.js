var layoutJson = ko.observable({
    partclass: "layoutRow",
    cssClasses: "row test-form"
});

var model = {
    name: ko.observable("Tom"),
    surname: ko.observable("Young"),
    zipcode: ko.observable("103844"),
    city: ko.observable("Kanzas"),
    adress: ko.observable("Mountain drive, 754"),
    phone: ko.observable("2-300-765-11-22"),
}

FormBuilder.UimlPart.render = Uiml.render;
var toolboxItems = [
    {
        title: "label",
        hint: "Drag to add label",
        json: {
            partclass: "layoutItem",
            cssClasses: "item test-item",
            parts: [
                {
                    partclass: "label",
                    cssClasses: "test-label",
                    data: "Label text"
                }
            ]
        }
    },
    {
        title: "input",
        hint: "Drag to add input element",
        json: {
            partclass: "layoutItem",
            cssClasses: "item test-item",
            parts: [
                {
                    partclass: "input",
                    cssClasses: "test-input",
                    data: "valName"
                }
            ]
        }
    },
    {
        title: "composite",
        hint: "Drag to add composite element",
        json: {
            partclass: "layoutItem",
            cssClasses: "item test-item test-group",
            parts: [
                {
                    partclass: "label",
                    cssClasses: "test-label",
                    data: "Name"
                },
                {
                    partclass: "input",
                    cssClasses: "test-input",
                    data: "name"
                }
            ]
        }
    }
];
FormBuilder.render(layoutJson, toolboxItems, model, document.getElementById("form-builder-container"));
