FormBuilder.UimlPart.render = Uiml.render;

var object = {
    name: "Tom",
    surname: "Young",
    zipcode: "103844",
    city: "Kanzas",
    address: "Mountain drive, 754",
    phone: "2-300-765-11-22",
    data: {
        first_name: "Bob",
        last_name: "Sallivan",
        email: "bob@sallivan-family.org",
    }
}

var layout = {
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
                "data": "Name"
              },
              {
                "partclass": "input",
                "cssClasses": "test-input",
                "data": "name"
              }
            ]
          },
          {
            "partclass": "layoutItem",
            "cssClasses": "item test-item test-group",
            "parts": [
              {
                "partclass": "label",
                "cssClasses": "test-label",
                "data": "Surname"
              },
              {
                "partclass": "input",
                "cssClasses": "test-input",
                "data": "surname"
              }
            ]
          },
          {
            "partclass": "layoutItem",
            "cssClasses": "item test-item test-group",
            "parts": [
              {
                "partclass": "label",
                "cssClasses": "test-label",
                "data": "Phone"
              },
              {
                "partclass": "input",
                "cssClasses": "test-input",
                "data": "phone"
              }
            ]
          },
          {
            "partclass": "panel",
            "cssClasses": "panel",
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
                        "data": "Zipcode"
                      },
                      {
                        "partclass": "input",
                        "cssClasses": "test-input",
                        "data": "zipcode"
                      }
                    ]
                  },
                  {
                    "partclass": "layoutItem",
                    "cssClasses": "item test-item test-group",
                    "parts": [
                      {
                        "partclass": "label",
                        "cssClasses": "test-label",
                        "data": "City"
                      },
                      {
                        "partclass": "input",
                        "cssClasses": "test-input",
                        "data": "city"
                      }
                    ]
                  },
                  {
                    "partclass": "layoutItem",
                    "cssClasses": "item test-item test-group",
                    "parts": [
                      {
                        "partclass": "label",
                        "cssClasses": "test-label",
                        "data": "Street"
                      },
                      {
                        "partclass": "input",
                        "cssClasses": "test-input",
                        "data": "address"
                      }
                    ]
                  }
                ]
              }
            ],
            "text": "Address",
            "data": "St"
          }
        ]
      }
    ]
  };

var model = FormBuilder.Form.show(object, layout, document.getElementById("form-builder-container"),
    function(object, json) {
        document.getElementById("form-builder-model-container").value = json;
    },
    function(layout) {
        document.getElementById("form-builder-layout-container").value = JSON.stringify(layout, null, 4);
    }
);
