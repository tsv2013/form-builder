import { UimlLayoutSerializer } from "../sources/uiml-layout-serializer";

test("deserialize basic uiml", () => {
    var elements = [];
    UimlLayoutSerializer.createElements(elements, [{
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
    }]);
    expect(elements.length).toBe(1);
    expect(elements[0].content.partclass).toBe("form");
    expect(elements[0].elements().length).toBe(2);
});
