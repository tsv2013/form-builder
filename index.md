## FormBuilder JavaScript Library

JavaScript (TypeScript) form builder library. Allows tp create, modify and save layout for JSON object data.

## Sample usage
If you have the following plain JavaScript object (obtained from a database):

```javascript
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
```

You can pass this object, the DOM element and the update callback function to the Form.show() method:

```javascript
var model = FormBuilder.Form.show(object, document.getElementById("form-builder-container"), function(object, json) {
    document.getElementById("form-builder-model-container").value = json;
});
```

And you will get the following UI:

![FormBuilder Form](https://github.com/tsv2013/form-builder/blob/master/form.png)

### Basic functions
- Create form from a JSON object
- Modify and save layout to JSON
- Apply existing JSON layout to a form
- Built-in object editor
- Built-in collection editor

### Supported frameworks
- KnockoutJS
- something other in plans

## Online demos
- [Form](https://tsv2013.github.io/form-builder/examples/form.html)
- [Object Editor](https://tsv2013.github.io/form-builder/examples/object.html)
- [Collection Editor](https://tsv2013.github.io/form-builder/examples/collection.html)

## How to compile this repo
 - git clone https://github.com/tsv2013/form-builder.git
 - cd form-builder
 - npm i
 - npm test
 - npm run build

## Welcome to GitHub Pages
[Click here to visit default welcome page](welcome.md)
