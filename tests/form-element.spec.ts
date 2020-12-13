import * as ko from "knockout";
import { FormElement } from "../sources/form-element";
import { UimlLayoutSerializer } from "../sources/uiml-layout-serializer";

test("data context", () => {
    const json = {
        "partclass": "panel",
        "parts": [{
            "partclass": "koWith",
            "data": "data",
            "parts": [{
                "partclass": "child"
            }]
        }]
    };
    var elements = [];
    UimlLayoutSerializer.createElements(elements, [json], null);
    var element: FormElement = elements[0];

    const context = {
        a: 1,
        data: {
            b: 2
        }
    };
    element.context = context;
    expect(element.context.a).toBe(1);
    expect(element.context.data).toBeDefined();
    expect(element.context.b).toBeUndefined();
    expect(element.elements()[0].context.a).toBe(1);
    expect(element.elements()[0].context.data).toBeDefined();
    expect(element.elements()[0].context.b).toBeUndefined();
    expect(element.elements()[0].elements()[0].context.a).toBeUndefined();
    expect(element.elements()[0].elements()[0].context.data).toBeUndefined();
    expect(element.elements()[0].elements()[0].context.b).toBe(2);
    var leafElement = element.elements()[0].elements()[0].elements()[0];
    expect(leafElement.context.a).toBeUndefined();
    expect(leafElement.context.data).toBeUndefined();
    expect(leafElement.context.b).toBe(2);
});
