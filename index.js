var layoutJson = ko.observable({
    partclass: "layoutRow",
    cssClasses: "row"
});

// var model = {
//     layout: layoutJson,
//     layoutStr: ko.computed({
//         read: function() { return JSON.stringify(layoutJson(), 4); },
//         write: function(val) { layoutJson(JSON.parse(val)) }
//     })
// }
// ko.applyBindings(model, document.getElementById("form-builder-container"));

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
    }
];
FormBuilder.render(layoutJson, toolboxItems, document.getElementById("form-builder-container"));
