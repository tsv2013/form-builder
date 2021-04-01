import { modelFromLayout } from "../sources/utils";

test("create simple model", () => {
    const layout = {
        "partclass": "layoutRow",
        "cssClasses": "row test-form",
        "parts": [
          {
            "partclass": "layoutColumn",
            "cssClasses": "column",
            "parts": [
              {
                "partclass": "layoutItem",
                "cssClasses": "item test-item test-group",
                "parts": [
                  {
                    "partclass": "label",
                    "cssClasses": "test-label",
                    "text": "Name"
                  },
                  {
                    "partclass": "input",
                    "cssClasses": "test-input",
                    "data": "name"
                  }
                ]
              }
            ]
          }
        ]
      };
    var model = modelFromLayout(layout);
    var names = Object.getOwnPropertyNames(model);
    expect(names.length).toBe(1);
    expect(names[0]).toBe("name");
});

