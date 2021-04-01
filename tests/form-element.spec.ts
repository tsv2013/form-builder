import * as ko from "knockout";
import { FormElement } from "../sources/form-element";
import { UimlLayoutSerializer } from "../sources/uiml-layout-serializer";
import { UimlPart } from "../sources/uiml-parts";

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

test("drop above a row", () => {
    const json = {
        "partclass": "layoutRow",
        "cssClasses": "row",
        "parts": [
          {
            "partclass": "label",
            "cssClasses": "test-label",
            "text": "Label text"
          },
          {
            "partclass": "label",
            "cssClasses": "test-label",
            "text": "Label text"
          }
        ]
      };
    const inputJson = {
        "partclass": "input",
        "cssClasses": "test-input",
        "data": "valName"
      };
    const root: FormElement = UimlLayoutSerializer.createRoot();
    UimlLayoutSerializer.createElements(root.elements, [json], root);

    const row = <FormElement>root.elements()[0];
    expect(row.content["partclass"]).toBe("layoutRow");

    row.addElement(UimlPart.fromJSON(inputJson), "top", row);
    expect(root.elements().length).toBe(1);
    expect(root.elements()[0].content["partclass"]).toBe("layoutColumn");
    expect(root.elements()[0].elements().length).toBe(2);
    expect(root.elements()[0].elements()[0].content["partclass"]).toBe("input");
    expect(root.elements()[0].elements()[1].content["partclass"]).toBe("layoutRow");
    expect(root.elements()[0].elements()[1].elements().length).toBe(2);
    expect(root.elements()[0].elements()[1].elements()[0].content["partclass"]).toBe("label");
    expect(root.elements()[0].elements()[1].elements()[1].content["partclass"]).toBe("label");
});

test("drop into a panel", () => {
    const json = {
        "partclass": "layoutRow",
        "cssClasses": "row",
        "parts": [
          {
            "partclass": "panel",
            "cssClasses": "panel",
            "parts": []
          }
        ]
    };
    const inputJson = {
        "partclass": "input",
        "cssClasses": "test-input",
        "data": "valName"
      };
    const root: FormElement = UimlLayoutSerializer.createRoot();
    UimlLayoutSerializer.createElements(root.elements, [json], root);

    const panelLayout = <FormElement>root.elements()[0].elements()[0].elements()[0];
    expect(panelLayout.content["partclass"]).toBe("layout");

    panelLayout.addElement(UimlPart.fromJSON(inputJson), "left");
    expect(panelLayout.elements().length).toBe(1);
    expect(panelLayout.elements()[0].content["partclass"]).toBe("layoutRow");
    expect(panelLayout.elements()[0].elements().length).toBe(1);
    expect(panelLayout.elements()[0].elements()[0].content["partclass"]).toBe("input");
});