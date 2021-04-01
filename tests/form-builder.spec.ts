import { Form } from "../sources/form";
import { FormBuilder } from "../sources/form-builder";

test("deserialize basic uiml", () => {
    const form = new Form({}, {
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
    });
    var fb = new FormBuilder(form, []);
    expect(fb.root.elements().length).toBe(1);
    //expect(fb.root.elements()[0].content.partclass).toBe("form");
    expect(fb.root.elements()[0].elements().length).toBe(2);
});
