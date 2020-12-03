var layoutJson = ko.observable({
    partclass: "layoutRow",
    cssClasses: "row"
});

var model = {
    valName: ko.observable("Some text"),
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
            cssClasses: "item test-item",
            parts: [
                {
                    partclass: "label",
                    cssClasses: "test-label",
                    data: "Label text"
                },
                {
                    partclass: "input",
                    cssClasses: "test-input",
                    data: "valName"
                }
            ]
        }
    }
];
FormBuilder.render(layoutJson, toolboxItems, model, document.getElementById("form-builder-container"));
