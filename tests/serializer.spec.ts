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
    expect(elements[0].content.partclass).toBe("layout");
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
    expect(elements[0].content.partclass).toBe("layout");
    expect(elements[0].elements().length).toBe(2);
    var result = elements.map(el => UimlLayoutSerializer.serialize(el));
    expect(result).toMatchObject(json);
    expect(result[0].parts[0].customProperty1).toBe("value1");
    expect(result[0].parts[1].customProperty2).toBe("value2");
});

test("deserialize legacy layout - panel", () => {
    const json = {
        "id": "customer.public.customer.customer_id.payment.public.payment.customer_idPanel",
        "isRelation": true,
        "partclass": "panel",
        "visibleIndex": "customer.public.customer.customer_id.payment.public.payment.customer_id",
        "expanded": false,
        "cssClasses": "relation",
        "text": "payment",
        "customHeaderTemplate": "child-view-context-actions-template",
        "customBodyHeaderTemplate": "child-view-body-actions-template",
        "customHeaderData": "customer.public.customer.customer_id.payment.public.payment.customer_id",
        "parts": [{
            "id": "row2",
            "partclass": "layoutRow",
            "parts": [{
                "id": "customer.public.customer.customer_id.payment.public.payment.customer_idListView",
                "partclass": "child",
                "model": "customer.public.customer.customer_id.payment.public.payment.customer_id"
            }]
        }]
    };
    var elements = [];
    UimlLayoutSerializer.createElements(elements, [json], null);
    var element = elements[0];
    expect(element.content.partclass).toBe("panel");
    expect(element.elements().length).toBe(1);
    expect(element.elements()[0].content.partclass).toBe("layout");
    expect(element.elements()[0].elements().length).toBe(1);
    expect(element.elements()[0].elements()[0].content.partclass).toBe("layoutRow");
    expect(element.elements()[0].elements()[0].elements().length).toBe(1);
    var leafElement = element.elements()[0].elements()[0].elements()[0];
    expect(leafElement.content.partclass).toBe("child");
    expect(leafElement.isContainer).toBeFalsy();
});

test("serialize legacy layout - panel", () => {
    const json = {
        "id": "customer.public.customer.customer_id.payment.public.payment.customer_idPanel",
        "isRelation": true,
        "partclass": "panel",
        "visibleIndex": "customer.public.customer.customer_id.payment.public.payment.customer_id",
        "expanded": false,
        "cssClasses": "relation",
        "text": "payment",
        "customHeaderTemplate": "child-view-context-actions-template",
        "customBodyHeaderTemplate": "child-view-body-actions-template",
        "customHeaderData": "customer.public.customer.customer_id.payment.public.payment.customer_id",
        "parts": [{
            "id": "row2",
            "partclass": "layoutRow",
            "parts": [{
                "id": "customer.public.customer.customer_id.payment.public.payment.customer_idListView",
                "partclass": "child",
                "model": "customer.public.customer.customer_id.payment.public.payment.customer_id"
            }]
        }]
    };
    var elements = [];
    UimlLayoutSerializer.createElements(elements, [json], null);

    var serializedLayout = UimlLayoutSerializer.serialize(elements[0]);
    expect(serializedLayout).toMatchObject(json);
    expect(serializedLayout.partclass).toBe("panel");
    expect(serializedLayout.parts.length).toBe(1);
    expect(serializedLayout.parts[0].partclass).toBe("layoutRow");
    expect(serializedLayout.parts[0].parts.length).toBe(1);
    expect(serializedLayout.parts[0].parts[0].partclass).toBe("child");
    expect(serializedLayout.parts[0].parts[0].parts).toBeUndefined();
});