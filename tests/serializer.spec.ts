import { UimlLayoutSerializer } from "../sources/uiml-layout-serializer";

test("deserialize/serialize basic uiml", () => {
    var json = [{
        partclass: "form",
        parts: [
            {
                partclass: "layoutRow",
            },
            {
                partclass: "layoutRow",
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

test("deserialize/serialize custom properties", () => {
    var json = [{
        partclass: "form",
        parts: [
            {
                partclass: "layoutRow",
                customProperty1: "value1"
            },
            {
                partclass: "layoutRow",
                customProperty2: "value2"
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
    expect(result[0].parts[0].customProperty1).toBe("value1");
    expect(result[0].parts[1].customProperty2).toBe("value2");
});
