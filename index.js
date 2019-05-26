var layoutJson = ko.observable({
    partclass: "layout",
    cssClasses: "root",
    parts: [
        {
            partclass: "layoutRow",
            cssClasses: "row",
            parts: [
                
            ]
        },
        {
            partclass: "layoutRow",
            cssClasses: "row",
            parts: [
                
            ]
        }
    ]
});
FormBuilder.FormBuilder.render(layoutJson, document.getElementById("form-builder-container"));
//ko.applyBindings({ layout: layoutJson }, document.getElementById("form-builder"));