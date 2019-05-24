import * as ko from "knockout";
import { FormBuilder } from "../sources/form-builder";

test("deserialize basic uiml", () => {
    var fb = new FormBuilder(ko.observable({
        partclass: "form",
        parts: [
            {
                partclass: "layoutRow",
                parts: [
                    
                ]
            },
            {
                partclass: "layoutRow",
                parts: [
                    
                ]
            }
        ]
    }));
    expect(fb.root.elements().length).toBe(1);
    //expect(fb.root.elements()[0].content.partclass).toBe("form");
    expect(fb.root.elements()[0].elements().length).toBe(2);
});
