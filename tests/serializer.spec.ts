import { UimlLayoutSerializer } from "../sources/uiml-layout-serializer";

test("deserialize/serialize basic uiml", () => {
    var json = [{
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
    }];
    var elements = [];
    UimlLayoutSerializer.createElements(elements, json, null);
    expect(elements.length).toBe(1);
    expect(elements[0].content.partclass).toBe("form");
    expect(elements[0].elements().length).toBe(2);
    var result = elements.map(el => UimlLayoutSerializer.serialize(el));
    expect(result).toMatchObject(json);
});
