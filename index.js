var layoutJson = ko.observable({
    partclass: "form",
    parts: [
        {
            partclass: "layoutRow",
            cssClasses: "row",
            parts: [
                
            ]
        },
        {
            partclass: "layoutRow",
            parts: [
                
            ]
        }
    ]
});
FormBuilder.FormBuilder.render(layoutJson, document.getElementById("form-builder"));
//ko.applyBindings({ layout: layoutJson }, document.getElementById("form-builder"));