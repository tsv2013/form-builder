var layoutJson = ko.observable({
    partclass: "layoutRow",
    cssClasses: "row",
    parts: [ ]
});

// var model = {
//     layout: layoutJson,
//     layoutStr: ko.computed({
//         read: function() { return JSON.stringify(layoutJson(), 4); },
//         write: function(val) { layoutJson(JSON.parse(val)) }
//     })
// }
// ko.applyBindings(model, document.getElementById("form-builder-container"));

FormBuilder.FormBuilder.render(layoutJson, document.getElementById("form-builder-container"));
