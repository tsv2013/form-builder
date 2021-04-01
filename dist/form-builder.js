(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	else if(typeof define === 'function' && define.amd)
		define("FormBuilder", ["knockout"], factory);
	else if(typeof exports === 'object')
		exports["FormBuilder"] = factory(require("knockout"));
	else
		root["FormBuilder"] = factory(root["ko"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_knockout__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./metadata/model.ts":
/*!***************************!*\
  !*** ./metadata/model.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayElementType = exports.isArrayType = exports.isSimpleType = exports.getObjectDescription = exports.domain = void 0;
exports.domain = {};
exports.domain["part"] = {
    name: "part",
    properties: [
        { name: "partclass" },
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["panel"] = {
    name: "panel",
    properties: [
        { name: "text" },
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["layoutItem"] = {
    name: "layoutItem",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["container"] = {
    name: "container",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["label"] = {
    name: "label",
    properties: [
        { name: "text" },
        { name: "cssClasses" }
    ]
};
exports.domain["input"] = {
    name: "input",
    properties: [
        { name: "cssClasses" }
    ]
};
exports.domain["layout"] = {
    name: "layout",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["layoutRow"] = {
    name: "layoutRow",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["layoutColumn"] = {
    name: "input",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
function getObjectDescription(name) {
    return exports.domain[name];
}
exports.getObjectDescription = getObjectDescription;
function isSimpleType(name) {
    return !!name && (!exports.domain[name] && name.indexOf("[]") == -1);
}
exports.isSimpleType = isSimpleType;
function isArrayType(name) {
    return !!name && name.length > 2 && name[name.length - 2] === "[" && name[name.length - 1] === "]";
}
exports.isArrayType = isArrayType;
function getArrayElementType(name) {
    if (isArrayType(name)) {
        return name.substring(0, name.length - 2);
    }
    return undefined;
}
exports.getArrayElementType = getArrayElementType;


/***/ }),

/***/ "./node_modules/text-loader/index.js!./sources/form-builder.html":
/*!**************************************************************!*\
  !*** ./node_modules/text-loader!./sources/form-builder.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bf-layout\">\r\n    <layout-item params=\"element: root\" data-bind=\"css: { 'bf-layout--design-mode': isDesignMode }\"></layout-item>\r\n    <!-- <div class=\"bf-mode-button fa\" data-bind=\"click: toggleDesignMode, text: isDesignMode ? 'View':'', css: { 'fa-cog': !isDesignMode } \"> -->\r\n    <div class=\"bf-mode-button\" data-bind=\"click: toggleDesignMode, text: isDesignMode ? 'View':'Design' \">\r\n    </div>\r\n</div>\r\n<div class=\"bf-toolbox\" data-bind=\"visible: isDesignMode, foreach: toolbox\">\r\n    <div class=\"bf-toolbox__item\" draggable=\"true\"\r\n        data-bind=\"text: title, event: { dragstart: $parent.dragstart }, attr: { title: hint }\">\r\n    </div>\r\n</div>\r\n<div class=\"bf-layout-json\" data-bind=\"visible: isDesignMode\">\r\n    <textarea data-bind=\"value: jsonText\"></textarea>\r\n</div>\r\n<script type=\"text/html\" id=\"bf-item-part\">\r\n    <div data-bind=\"with: formElement.context || $data\">\r\n    </div>\r\n</script>"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./sources/item-menu.html":
/*!***********************************************************!*\
  !*** ./node_modules/text-loader!./sources/item-menu.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bf-item-menu\" data-bind=\"click: function() { return true; }, clickBubble: false\">\r\n    <div>\r\n        <!-- ko foreach: menuItems -->\r\n        <!-- ko component: { name: $data.component || 'ui-button', params: { item: $data } } -->\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n        <object-editor params=\"context: content\"></object-editor>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./sources/layout-item.html":
/*!*************************************************************!*\
  !*** ./node_modules/text-loader!./sources/layout-item.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: isContainer -->\r\n<div class=\"bf-item-content\" data-bind=\"click: select, css: css\">\r\n    <!-- ko foreach: elements -->\r\n    <layout-item params=\"element: $data\" data-bind=\"style: {  }\"></layout-item>\r\n    <!-- /ko -->\r\n    <!-- ko if: elements().length === 0 -->\r\n    <placeholder-item params=\"element: formElement\"></placeholder-item>\r\n    <!-- /ko -->\r\n</div>\r\n<!-- /ko -->\r\n<!-- ko ifnot: isContainer -->\r\n<div class=\"bf-item-content\" draggable=\"true\"\r\n    data-bind=\"event: { dragenter: dragenter, dragover: dragover, dragleave: dragleave, drop: drop, dragstart: dragstart }, click: select, css: css\">\r\n    <!-- ko ifnot: isDesignMode -->\r\n    <div class=\"bf-item-content-holder\" data-bind=\"with: formElement.context || $data\">\r\n    </div>\r\n    <!-- /ko -->\r\n    <!-- ko if: isDesignMode -->\r\n    <div class=\"bf-item-content-holder\" data-bind=\"let: { $part: part }\">\r\n        <!-- ko template: { name: \"bf-item-part\", afterRender: afterPartTemplateRender } -->\r\n        <!-- /ko -->\r\n    </div>\r\n    <!-- /ko -->\r\n</div>\r\n<!-- /ko -->\r\n<!-- ko if: isSelected -->\r\n<item-menu params=\"element: formElement\"></item-menu>\r\n<!-- /ko -->"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./sources/placeholder-item.html":
/*!******************************************************************!*\
  !*** ./node_modules/text-loader!./sources/placeholder-item.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bf-item-placeholder\" data-bind=\"event: { dragover: dragover, drop: drop }\">\r\n</div>"

/***/ }),

/***/ "./sources/default-toolbox.ts":
/*!************************************!*\
  !*** ./sources/default-toolbox.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultToolboxItems = exports.createToolboxItemsFor = exports.defaultToolboxItems = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./sources/utils.ts");
exports.defaultToolboxItems = [
    {
        title: "row",
        hint: "Drag to add row",
        json: {
            partclass: "layoutRow",
            cssClasses: "row",
            parts: []
        }
    },
    {
        title: "column",
        hint: "Drag to add column",
        json: {
            partclass: "layoutColumn",
            cssClasses: "column",
            parts: []
        }
    },
    {
        title: "panel",
        hint: "Drag to add panel",
        json: {
            partclass: "panel",
            cssClasses: "panel",
            parts: []
        }
    },
    {
        title: "label",
        hint: "Drag to add label",
        json: {
            partclass: "label",
            cssClasses: "test-label",
            text: "Label text"
        }
    },
    {
        title: "input",
        hint: "Drag to add input element",
        json: {
            partclass: "input",
            cssClasses: "test-input",
            data: "valName"
        }
    },
    {
        title: "composite",
        hint: "Drag to add composite element",
        json: {
            partclass: "layoutItem",
            cssClasses: "item test-item test-group",
            parts: [
                {
                    partclass: "label",
                    cssClasses: "test-label",
                    text: "Name"
                },
                {
                    partclass: "input",
                    cssClasses: "test-input",
                    data: "name"
                }
            ]
        }
    }
];
function createToolboxItemsFor(model) {
    return (Object.keys(model) || [])
        .filter(function (propertyName) { return typeof model[propertyName] !== "object"; })
        .map(function (propertyName) {
        return {
            title: utils_1.makeTitle(propertyName),
            hint: "Drag to add " + utils_1.makeTitle(propertyName),
            json: utils_1.createPropertyEditor(propertyName)
        };
    });
}
exports.createToolboxItemsFor = createToolboxItemsFor;
function createDefaultToolboxItems(model) {
    return [].concat(exports.defaultToolboxItems).concat(createToolboxItemsFor(model));
}
exports.createDefaultToolboxItems = createDefaultToolboxItems;


/***/ }),

/***/ "./sources/form-builder.scss":
/*!***********************************!*\
  !*** ./sources/form-builder.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/form-builder.ts":
/*!*********************************!*\
  !*** ./sources/form-builder.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FormBuilder = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var uiml_layout_serializer_1 = __webpack_require__(/*! ./uiml-layout-serializer */ "./sources/uiml-layout-serializer.ts");
__webpack_require__(/*! ./form-builder.scss */ "./sources/form-builder.scss");
var uiml_parts_1 = __webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts");
var template = __webpack_require__(/*! text-loader!./form-builder.html */ "./node_modules/text-loader/index.js!./sources/form-builder.html");
var FormBuilder = (function () {
    function FormBuilder(_form, toolboxItems) {
        var _this = this;
        if (toolboxItems === void 0) { toolboxItems = []; }
        this._form = _form;
        this.toolbox = ko.observableArray();
        this.root = uiml_layout_serializer_1.UimlLayoutSerializer.createRoot();
        this._modelSubscription = ko.computed(function () {
            _this.root.context = _form.model;
        });
        this._layoutSubscription = ko.computed(function () {
            var layoutValue = _form.layout;
            if (!Array.isArray(layoutValue)) {
                layoutValue = [layoutValue];
            }
            _this.root.content.parts = layoutValue.map(function (part) { return uiml_parts_1.UimlPart.fromJSON(part); });
        });
        toolboxItems.forEach(function (item) { return _this.toolbox.push(item); });
    }
    FormBuilder.prototype.dragstart = function (model, event) {
        var originalEvent = (event.originalEvent || event);
        originalEvent.dataTransfer.setData("bf-item-json", JSON.stringify(model.json));
        return true;
    };
    Object.defineProperty(FormBuilder.prototype, "jsonText", {
        get: function () {
            if (this.root.elements().length > 0) {
                return JSON.stringify(uiml_layout_serializer_1.UimlLayoutSerializer.serialize(this.root.elements()[0]), null, 2);
            }
            return FormBuilder.defaultText;
        },
        set: function (json) {
            this._form.layout = JSON.parse(json || FormBuilder.defaultText);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormBuilder.prototype, "isDesignMode", {
        get: function () {
            return this.root.isDesignMode;
        },
        set: function (value) {
            this.root.isDesignMode = value;
        },
        enumerable: false,
        configurable: true
    });
    FormBuilder.prototype.toggleDesignMode = function (builder) {
        builder.isDesignMode = !builder.isDesignMode;
        this.jsonText = this.jsonText;
    };
    FormBuilder.prototype.dispose = function () {
        this._modelSubscription.dispose();
        this._layoutSubscription.dispose();
    };
    FormBuilder.defaultText = '{"partclass": "layoutRow","cssClasses": "row","parts": []}';
    return FormBuilder;
}());
exports.FormBuilder = FormBuilder;
ko.components.register("form-builder", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new FormBuilder(params.form, params.items);
        }
    },
    template: template
});


/***/ }),

/***/ "./sources/form-element.ts":
/*!*********************************!*\
  !*** ./sources/form-element.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FormElement = exports.PlaceHolder = exports.fillDraggedOverInDirection = exports.hasParentEdgeInDirection = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var uiml_parts_1 = __webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts");
var uiml_layout_serializer_1 = __webpack_require__(/*! ./uiml-layout-serializer */ "./sources/uiml-layout-serializer.ts");
function hasParentEdgeInDirection(element, direction) {
    var parent = element && element.parent;
    if (!parent || !parent.elements) {
        return false;
    }
    var elements = ko.unwrap(parent.elements) || [];
    var index = elements.indexOf(element);
    if (parent.content["partclass"] === "layoutRow") {
        if (direction === "top" || direction === "bottom") {
            return true;
        }
        return index === 0 && direction === "left" || index === elements.length - 1 && direction === "right";
    }
    else {
        if (direction === "left" || direction === "right") {
            return true;
        }
        return index === 0 && direction === "top" || index === elements.length - 1 && direction === "bottom";
    }
}
exports.hasParentEdgeInDirection = hasParentEdgeInDirection;
function fillDraggedOverInDirection(current, direction, elements) {
    if (elements === void 0) { elements = []; }
    if (current && (!current.content || current.content["partclass"] !== "layout")) {
        elements.push(current);
        if (hasParentEdgeInDirection(current, direction)) {
            fillDraggedOverInDirection(current.parent, direction, elements);
        }
    }
}
exports.fillDraggedOverInDirection = fillDraggedOverInDirection;
var PlaceHolder = (function () {
    function PlaceHolder(parent) {
        this.parent = parent;
        this.isContainer = false;
        this.hasInnerLayout = false;
    }
    Object.defineProperty(PlaceHolder.prototype, "isDesignMode", {
        get: function () {
            return this.parent.isDesignMode;
        },
        enumerable: false,
        configurable: true
    });
    PlaceHolder.prototype.render = function (htmlElement) {
        htmlElement.innerHTML = "<span data-bind='if: formElement.isDesignMode'>Drop items here</span>";
    };
    PlaceHolder.prototype.addElement = function (json, location) {
        if (location === void 0) { location = "bottom"; }
        this.parent.addElement(json, location);
    };
    PlaceHolder.prototype.remove = function () { };
    PlaceHolder.prototype.dispose = function () { };
    return PlaceHolder;
}());
exports.PlaceHolder = PlaceHolder;
var FormElement = (function () {
    function FormElement(content, parent) {
        var _this = this;
        this.content = content;
        this.parent = parent;
        this._context = undefined;
        this._isDesignMode = ko.observable(false);
        this._dragPosition = ko.observable("");
        this.elements = ko.observableArray();
        var part = content;
        this._elementsSubscription = ko.computed(function () {
            var elements = (part.parts || []).map(function (part) { return uiml_layout_serializer_1.UimlLayoutSerializer.createElement(part, _this); });
            var prevElements = _this.elements.peek();
            _this.elements(elements);
            prevElements.forEach(function (element) { return element.dispose(); });
        });
    }
    Object.defineProperty(FormElement.prototype, "isContainer", {
        get: function () { return this.content.isContainer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormElement.prototype, "hasInnerLayout", {
        get: function () { return this.content.hasInnerLayout; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormElement.prototype, "dragPosition", {
        get: function () {
            return this._dragPosition();
        },
        set: function (value) {
            this._dragPosition(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormElement.prototype, "isDesignMode", {
        get: function () {
            if (!!this.parent) {
                return this.parent.isDesignMode;
            }
            return this._isDesignMode();
        },
        set: function (value) {
            this._isDesignMode(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormElement.prototype, "context", {
        get: function () {
            if (!this._context && this.parent) {
                this._context = this.parent.context;
                if (this.isContainer) {
                    var dataPath = this.content["data"];
                    if (!!dataPath) {
                        this._context = this.parent.context[dataPath];
                    }
                }
            }
            return this._context;
        },
        set: function (context) {
            this._context = context;
        },
        enumerable: false,
        configurable: true
    });
    FormElement.prototype.render = function (htmlElement) {
        if (this.content.hasInnerLayout || this.isContainer || this.elements().length === 0) {
            this.content.render(htmlElement);
        }
        else {
            this.elements().forEach(function (element) { return element.content.render(htmlElement); });
        }
    };
    FormElement.prototype.addElement = function (uimlPart, location, hoveredElement) {
        if (location === void 0) { location = "bottom"; }
        if (!this.isContainer || this === hoveredElement) {
            this.parent.addElement(uimlPart, location, this);
        }
        else {
            if (this.content["partclass"] === "layout") {
                var isHorizontalRoot = location === "left" || location === "right";
                var rootWrapper = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON({ partclass: isHorizontalRoot ? "layoutRow" : "layoutColumn", cssClasses: isHorizontalRoot ? "row" : "column" }), this);
                this.elements().forEach(function (element) { return element.parent = rootWrapper; });
                rootWrapper.elements(this.elements());
                this.elements([rootWrapper]);
                rootWrapper.addElement(uimlPart, location);
            }
            else if (this.content["partclass"] === "layoutRow") {
                if (!!hoveredElement && (location === "top" || location === "bottom")) {
                    var newColumn = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON({ partclass: "layoutColumn", cssClasses: "column" }), this);
                    this.elements.splice(this.elements().indexOf(hoveredElement), 1, newColumn);
                    hoveredElement.parent = newColumn;
                    newColumn.elements.push(hoveredElement);
                    newColumn.addElement(uimlPart, location, hoveredElement);
                }
                else {
                    var newElement = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uimlPart, this);
                    this.elements.splice(this.elements().indexOf(hoveredElement) + (location === "right" ? 1 : 0), 0, newElement);
                }
            }
            else {
                if (!!hoveredElement && (location === "left" || location === "right")) {
                    var newRow = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON({ partclass: "layoutRow", cssClasses: "row" }), this);
                    this.elements.splice(this.elements().indexOf(hoveredElement), 1, newRow);
                    hoveredElement.parent = newRow;
                    newRow.elements.push(hoveredElement);
                    newRow.addElement(uimlPart, location, hoveredElement);
                }
                else {
                    var newElement = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uimlPart, this);
                    this.elements.splice(this.elements().indexOf(hoveredElement) + (location === "bottom" ? 1 : 0), 0, newElement);
                }
            }
        }
    };
    FormElement.prototype.remove = function () {
        if (!!this.parent) {
            this.parent.elements.remove(this);
            if ((this.parent.content["partclass"] === "layoutRow" || this.parent.content["partclass"] === "layoutColumn") && this.parent.elements().length === 0) {
                this.parent.remove();
            }
        }
    };
    FormElement.prototype.dispose = function () {
        this._elementsSubscription.dispose();
    };
    return FormElement;
}());
exports.FormElement = FormElement;


/***/ }),

/***/ "./sources/form.ts":
/*!*************************!*\
  !*** ./sources/form.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var utils_1 = __webpack_require__(/*! ./utils */ "./sources/utils.ts");
var default_toolbox_1 = __webpack_require__(/*! ./default-toolbox */ "./sources/default-toolbox.ts");
var Form = (function () {
    function Form(originalModel, layout, onModelChanged, onLayoutChanged) {
        var _this = this;
        this.onModelChanged = onModelChanged;
        this.onLayoutChanged = onLayoutChanged;
        this._model = ko.observable(utils_1.modelFromJSON(originalModel || {}));
        this._layout = ko.observable(layout || Form.createDefaultLayout(this.model));
        this._modelChangedObserver = ko.computed(function () { return _this.onModelChanged && _this.onModelChanged(_this.object, utils_1.modelToJSON(_this.model)); });
        this._layoutChangedObserver = ko.computed(function () {
            if (originalModel === null) {
                _this._model(utils_1.modelFromJSON(utils_1.modelFromLayout(_this.layout)));
            }
            _this.onLayoutChanged && _this.onLayoutChanged(_this.layout);
        });
    }
    Object.defineProperty(Form.prototype, "layout", {
        get: function () {
            return this._layout();
        },
        set: function (layout) {
            this._layout(layout);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "model", {
        get: function () {
            return this._model();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "object", {
        get: function () {
            return ko.toJS(this.model);
        },
        enumerable: false,
        configurable: true
    });
    Form.prototype.dispose = function () {
        this._modelChangedObserver.dispose();
        this._layoutChangedObserver.dispose();
    };
    Form.show = function (model, layout, at, onModelChanged, onLayoutChanged) {
        var form = new Form(model, layout, onModelChanged, onLayoutChanged);
        var items = default_toolbox_1.createDefaultToolboxItems(form.model);
        ko.applyBindings({ form: form, items: items }, typeof at === "string" ? document.getElementById(at) : at);
        return form;
    };
    Form.createDefaultLayout = utils_1.createDefaultLayout;
    return Form;
}());
exports.Form = Form;


/***/ }),

/***/ "./sources/index.ts":
/*!**************************!*\
  !*** ./sources/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./form-builder */ "./sources/form-builder.ts"), exports);
__exportStar(__webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts"), exports);
__exportStar(__webpack_require__(/*! ./form-element */ "./sources/form-element.ts"), exports);
__exportStar(__webpack_require__(/*! ./layout-item */ "./sources/layout-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./placeholder-item */ "./sources/placeholder-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./item-menu */ "./sources/item-menu.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "./sources/utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./default-toolbox */ "./sources/default-toolbox.ts"), exports);
__exportStar(__webpack_require__(/*! ./form */ "./sources/form.ts"), exports);


/***/ }),

/***/ "./sources/item-menu.scss":
/*!********************************!*\
  !*** ./sources/item-menu.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/item-menu.ts":
/*!******************************!*\
  !*** ./sources/item-menu.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemMenu = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
__webpack_require__(/*! ./item-menu.scss */ "./sources/item-menu.scss");
var template = __webpack_require__(/*! text-loader!./item-menu.html */ "./node_modules/text-loader/index.js!./sources/item-menu.html");
var ItemMenu = (function () {
    function ItemMenu(formElement) {
        this.formElement = formElement;
        this.menuItems = ko.observableArray();
        this.menuItems.push({
            title: "- Remove",
            action: function () { return formElement.remove(); },
            visible: ko.computed(function () { return !!formElement.parent; })
        });
    }
    Object.defineProperty(ItemMenu.prototype, "content", {
        get: function () {
            return this.formElement.content;
        },
        enumerable: false,
        configurable: true
    });
    return ItemMenu;
}());
exports.ItemMenu = ItemMenu;
ko.components.register("item-menu", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new ItemMenu(params.element);
        }
    },
    template: template
});


/***/ }),

/***/ "./sources/layout-item.scss":
/*!**********************************!*\
  !*** ./sources/layout-item.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/layout-item.ts":
/*!********************************!*\
  !*** ./sources/layout-item.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutItem = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var form_element_1 = __webpack_require__(/*! ./form-element */ "./sources/form-element.ts");
var uiml_layout_serializer_1 = __webpack_require__(/*! ./uiml-layout-serializer */ "./sources/uiml-layout-serializer.ts");
var uiml_parts_1 = __webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts");
__webpack_require__(/*! ./layout-item.scss */ "./sources/layout-item.scss");
var template = __webpack_require__(/*! text-loader!./layout-item.html */ "./node_modules/text-loader/index.js!./sources/layout-item.html");
function getLocation(x, y, width, height) {
    if (y >= height / width * x) {
        if (y >= -height / width * x + height) {
            return 'bottom';
        }
        else {
            return 'left';
        }
    }
    else {
        if (y >= -height / width * x + height) {
            return 'right';
        }
        else {
            return 'top';
        }
    }
}
var LayoutItem = (function () {
    function LayoutItem(formElement) {
        var _this = this;
        this.formElement = formElement;
        this._isSelected = ko.observable(false);
        this._hoverItems = [];
        this._currentHoverIndex = 0;
        this._hoverIndicatorTimer = undefined;
        this.afterPartTemplateRender = function (elements) {
            if (!_this.isContainer) {
                var holderElement = elements[1];
                var dataContext = ko.contextFor(holderElement);
                ko.cleanNode(holderElement);
                _this.formElement.render(holderElement);
                ko.applyBindings(dataContext, holderElement);
            }
        };
        this.isSelected = ko.computed(function () { return _this.formElement.isDesignMode && _this._isSelected(); });
    }
    LayoutItem.prototype.clearHoverIndicator = function () {
        LayoutItem.draggedOverElement = null;
        LayoutItem.draggedOverPosition = null;
        if (this._hoverIndicatorTimer) {
            clearTimeout(this._hoverIndicatorTimer);
            this._hoverIndicatorTimer = undefined;
        }
        if (Array.isArray(this._hoverItems)) {
            this._hoverItems.forEach(function (item) { return item.dragPosition = ""; });
        }
    };
    Object.defineProperty(LayoutItem.prototype, "elements", {
        get: function () { return this.formElement.elements; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LayoutItem.prototype, "isContainer", {
        get: function () { return this.formElement.isContainer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LayoutItem.prototype, "css", {
        get: function () {
            var result = this.formElement.content instanceof uiml_parts_1.UimlPart ? this.formElement.content["cssClasses"] : "";
            if (this.formElement.isDesignMode) {
                if (this.isSelected()) {
                    result += " " + "bf-item--selected";
                }
                if (this.formElement.dragPosition) {
                    result += " " + "bf-item--drag-over-" + this.formElement.dragPosition;
                }
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    LayoutItem.prototype.dragstart = function (model, ev) {
        if (this.formElement.isDesignMode) {
            var originalEvent = (ev.originalEvent || ev);
            originalEvent.dataTransfer.setData("bf-item-json", JSON.stringify(uiml_layout_serializer_1.UimlLayoutSerializer.serialize(model.formElement)));
            LayoutItem.draggedElement = model.formElement;
            ev.cancelBubble = true;
            return true;
        }
    };
    LayoutItem.prototype.dragenter = function (model, ev) {
        ev.preventDefault();
        ev.cancelBubble = true;
    };
    LayoutItem.prototype.dragover = function (model, ev) {
        if (model.formElement.isDesignMode) {
            var originalEvent = (ev.originalEvent || ev), targetItem = ko.dataFor(originalEvent.target);
            var hoverLocation = getLocation(originalEvent.offsetX, originalEvent.offsetY, ev.target.clientWidth, ev.target.clientHeight);
            if (LayoutItem.draggedOverElement !== model.formElement || LayoutItem.draggedOverPosition !== hoverLocation) {
                model.clearHoverIndicator();
                LayoutItem.draggedOverElement = model.formElement;
                LayoutItem.draggedOverPosition = hoverLocation;
                model._hoverItems = [];
                form_element_1.fillDraggedOverInDirection(model.formElement, hoverLocation, model._hoverItems);
                model._currentHoverIndex = model._hoverItems.length - 1;
                var hoverIndicatorUpdater_1 = function () {
                    model._hoverItems[model._currentHoverIndex].dragPosition = "";
                    model._currentHoverIndex = (model._currentHoverIndex + 1) % model._hoverItems.length;
                    model._hoverItems[model._currentHoverIndex].dragPosition = hoverLocation;
                    model._hoverIndicatorTimer = setTimeout(hoverIndicatorUpdater_1, 1000);
                };
                hoverIndicatorUpdater_1();
            }
            ev.preventDefault();
            ev.cancelBubble = true;
        }
    };
    LayoutItem.prototype.dragleave = function (model, ev) {
        if (model.formElement.isDesignMode) {
            model.clearHoverIndicator();
            ev.preventDefault();
            ev.cancelBubble = true;
        }
    };
    LayoutItem.prototype.drop = function (model, ev) {
        if (model.formElement.isDesignMode) {
            var originalEvent = (ev.originalEvent || ev);
            var data = originalEvent.dataTransfer.getData("bf-item-json");
            if (!!data) {
                if (!!LayoutItem.draggedElement) {
                    LayoutItem.draggedElement.parent.elements.remove(LayoutItem.draggedElement);
                    LayoutItem.draggedElement = null;
                }
                var dropTargetElement = model._hoverItems[model._currentHoverIndex];
                dropTargetElement.addElement(uiml_parts_1.UimlPart.fromJSON(JSON.parse(data)), dropTargetElement.dragPosition, dropTargetElement);
            }
            model.clearHoverIndicator();
            ev.preventDefault();
            ev.cancelBubble = true;
        }
    };
    LayoutItem.prototype.select = function (model, ev) {
        if (this.formElement.isDesignMode) {
            if (!!LayoutItem.selectedElement()) {
                LayoutItem.selectedElement()._isSelected(false);
            }
            model._isSelected(true);
            LayoutItem.selectedElement(model);
            var originalEvent = (ev.originalEvent || ev);
            originalEvent.preventDefault();
            originalEvent.cancelBubble = true;
            return true;
        }
    };
    Object.defineProperty(LayoutItem.prototype, "isDesignMode", {
        get: function () {
            return this.formElement.isDesignMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LayoutItem.prototype, "part", {
        get: function () {
            return this.formElement.content["part"];
        },
        enumerable: false,
        configurable: true
    });
    LayoutItem.draggedElement = null;
    LayoutItem.draggedOverElement = null;
    LayoutItem.draggedOverPosition = null;
    LayoutItem.selectedElement = ko.observable();
    return LayoutItem;
}());
exports.LayoutItem = LayoutItem;
ko.components.register("layout-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var formElement = params.element || uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON(params.uiml), null);
            if (!!params.context) {
                formElement.context = params.context;
            }
            if (!formElement.isContainer) {
                var itemElelemtContainer = componentInfo.element.getElementsByClassName("bf-item-content-holder")[0];
                formElement.render(itemElelemtContainer);
            }
            return new LayoutItem(formElement);
        }
    },
    template: template
});


/***/ }),

/***/ "./sources/placeholder-item.scss":
/*!***************************************!*\
  !*** ./sources/placeholder-item.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/placeholder-item.ts":
/*!*************************************!*\
  !*** ./sources/placeholder-item.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderComponent = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var form_element_1 = __webpack_require__(/*! ./form-element */ "./sources/form-element.ts");
var layout_item_1 = __webpack_require__(/*! ./layout-item */ "./sources/layout-item.ts");
__webpack_require__(/*! ./placeholder-item.scss */ "./sources/placeholder-item.scss");
var template = __webpack_require__(/*! text-loader!./placeholder-item.html */ "./node_modules/text-loader/index.js!./sources/placeholder-item.html");
ko.components.register("placeholder-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var itemElelemt = componentInfo.element.getElementsByClassName("bf-item-placeholder")[0];
            var formElement = new form_element_1.PlaceHolder(params.element);
            formElement.render(itemElelemt);
            return new layout_item_1.LayoutItem(formElement);
        }
    },
    template: template
});
exports.PlaceholderComponent = null;


/***/ }),

/***/ "./sources/uiml-layout-serializer.ts":
/*!*******************************************!*\
  !*** ./sources/uiml-layout-serializer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UimlLayoutSerializer = void 0;
var form_element_1 = __webpack_require__(/*! ./form-element */ "./sources/form-element.ts");
var uiml_parts_1 = __webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts");
var UimlLayoutSerializer = (function () {
    function UimlLayoutSerializer() {
    }
    UimlLayoutSerializer.createRoot = function () {
        var rootPart = uiml_parts_1.UimlPartsRepository.create(UimlLayoutSerializer.layoutPartClass, { cssClasses: "root" });
        return new form_element_1.FormElement(rootPart, null);
    };
    UimlLayoutSerializer.createElement = function (uimlPart, parent) {
        if (uimlPart.hasInnerLayout) {
            var groupElementJson = { partclass: UimlLayoutSerializer.layoutPartClass, cssClasses: "group", parts: [] };
            var groupElement = uiml_parts_1.UimlPart.fromJSON(groupElementJson);
            groupElement.parts = uimlPart.part.parts || [];
            uimlPart.parts = [groupElement];
        }
        return new form_element_1.FormElement(uimlPart, parent);
    };
    UimlLayoutSerializer.createElements = function (collection, parts, parent) {
        if (parts === void 0) { parts = []; }
        parts.forEach(function (elementJson) {
            collection.push(UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON(elementJson), parent));
        });
    };
    UimlLayoutSerializer.serialize = function (formElement) {
        var uimlPart = formElement.content;
        var element = {
            partclass: uimlPart.partclass,
        };
        Object.keys(uimlPart.part).forEach(function (key) { return element[key] = uimlPart.part[key]; });
        if (formElement.elements().length) {
            element.parts = formElement.elements().map(function (fe) { return UimlLayoutSerializer.serialize(fe); });
        }
        if (Array.isArray(element.parts) && element.parts.length === 1 && element.parts[0].partclass === UimlLayoutSerializer.layoutPartClass) {
            element.parts = element.parts[0].parts;
        }
        return element;
    };
    UimlLayoutSerializer.layoutPartClass = "layout";
    return UimlLayoutSerializer;
}());
exports.UimlLayoutSerializer = UimlLayoutSerializer;


/***/ }),

/***/ "./sources/uiml-parts.scss":
/*!*********************************!*\
  !*** ./sources/uiml-parts.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/uiml-parts.ts":
/*!*******************************!*\
  !*** ./sources/uiml-parts.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UimlPartsRepository = exports.UimlPart = exports.createProperty = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var model_1 = __webpack_require__(/*! ../metadata/model */ "./metadata/model.ts");
__webpack_require__(/*! ./uiml-parts.scss */ "./sources/uiml-parts.scss");
function createProperty(target, propertyDescription, value) {
    var observableValue = ko.observable(value);
    Object.defineProperty(target, propertyDescription.name, {
        get: function () { return observableValue(); },
        set: function (val) { return observableValue(val); }
    });
}
exports.createProperty = createProperty;
var UimlPart = (function () {
    function UimlPart(_partclass) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this._partclass = _partclass;
        this.id = UimlPart.counter++;
        this._part = Object.assign({}, params[0]);
        this._objectDescription = model_1.getObjectDescription(_partclass);
        if (this._objectDescription) {
            this._objectDescription.properties.forEach(function (pd) {
                var propertyType = pd.type || "string";
                if (!model_1.isArrayType(propertyType)) {
                    createProperty(_this, pd, _this._part[pd.name]);
                }
            });
        }
        createProperty(this, { name: "data" }, this._part.data);
        createProperty(this, { name: "parts", type: "part[]" }, (this._part.parts || []).map(function (json) { return UimlPartsRepository.create(json.partclass, json); }));
    }
    UimlPart.prototype.render = function (htmlElement) {
        if (UimlPart.render) {
            UimlPart.render(this, htmlElement);
        }
        else {
            htmlElement.className += (" " + this["cssClasses"]);
            if (!this.isContainer) {
                htmlElement.innerHTML = this.partclass + this.id;
            }
        }
    };
    Object.defineProperty(UimlPart.prototype, "hasInnerLayout", {
        get: function () {
            return UimlPart.layoutHolderParts.indexOf(this.partclass) !== -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UimlPart.prototype, "isContainer", {
        get: function () {
            return UimlPart.containerParts.indexOf(this.partclass) !== -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UimlPart.prototype, "partclass", {
        get: function () {
            return UimlPart.layoutConvertableParts[this._partclass] || this._partclass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UimlPart.prototype, "part", {
        get: function () {
            var _this = this;
            var part = Object.assign({}, this._part);
            part.data = this.data;
            if (this._objectDescription) {
                this._objectDescription.properties.forEach(function (pd) {
                    part[pd.name] = _this[pd.name];
                });
            }
            return part;
        },
        enumerable: false,
        configurable: true
    });
    UimlPart.fromJSON = function (json) {
        return UimlPartsRepository.create(json.partclass, json);
    };
    UimlPart.prototype.toJSON = function () {
        return this.part;
    };
    UimlPart.prototype.create = function (partclass) {
        return UimlPartsRepository.create(partclass, {});
    };
    UimlPart.containerParts = ["layout", "layoutRow", "layoutColumn"];
    UimlPart.layoutHolderParts = ["panel"];
    UimlPart.layoutConvertableParts = {
        "view": "layout",
        "form": "layout",
        "koWith": "layoutColumn",
        "container": "layoutColumn",
        "accordion": "layoutColumn",
        "div": "container",
        "formGroup": "layoutItem"
    };
    UimlPart.render = undefined;
    UimlPart.counter = 1;
    return UimlPart;
}());
exports.UimlPart = UimlPart;
var UimlPartsRepository = (function () {
    function UimlPartsRepository() {
    }
    Object.defineProperty(UimlPartsRepository, "instance", {
        get: function () { return UimlPartsRepository._instance; },
        enumerable: false,
        configurable: true
    });
    UimlPartsRepository.register = function (partclass, partConstructor) {
        UimlPartsRepository.parts[partclass] = partConstructor;
    };
    UimlPartsRepository.create = function (partclass) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (!!UimlPartsRepository.parts[partclass]) {
            return new ((_a = UimlPartsRepository.parts[partclass]).bind.apply(_a, __spreadArrays([void 0], params)))();
        }
        return new (UimlPart.bind.apply(UimlPart, __spreadArrays([void 0, partclass], params)))();
    };
    UimlPartsRepository.parts = {};
    UimlPartsRepository._instance = new UimlPartsRepository();
    return UimlPartsRepository;
}());
exports.UimlPartsRepository = UimlPartsRepository;


/***/ }),

/***/ "./sources/utils.ts":
/*!**************************!*\
  !*** ./sources/utils.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.modelToJSON = exports.modelFromLayout = exports.traversePart = exports.modelFromJSON = exports.createDefaultLayout = exports.createColumnLayout = exports.createPropertyEditor = exports.makeTitle = exports.capitalize = void 0;
var uiml_parts_1 = __webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts");
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
function makeTitle(propertyName) {
    return propertyName.split("_").map(function (part) { return capitalize(part); }).join(" ");
}
exports.makeTitle = makeTitle;
function createPropertyEditor(propertyName) {
    return {
        partclass: "layoutItem",
        cssClasses: "item test-item test-group",
        parts: [
            {
                partclass: "label",
                cssClasses: "test-label",
                text: makeTitle(propertyName)
            },
            {
                partclass: "input",
                cssClasses: "test-input",
                data: propertyName
            }
        ]
    };
}
exports.createPropertyEditor = createPropertyEditor;
function createColumnLayout(model, includeNestedObjects) {
    if (includeNestedObjects === void 0) { includeNestedObjects = false; }
    return {
        "partclass": "layoutColumn",
        "data": undefined,
        "cssClasses": "column",
        "parts": (Object.keys(model) || [])
            .filter(function (propertyName) { return includeNestedObjects || typeof model[propertyName] !== "object"; })
            .map(function (propertyName) { return createPropertyEditor(propertyName); })
    };
}
exports.createColumnLayout = createColumnLayout;
function createDefaultLayout(model) {
    var layout = {
        "partclass": "layoutRow",
        "data": undefined,
        "cssClasses": "row test-form",
        "parts": [createColumnLayout(model)]
    };
    (Object.keys(model) || [])
        .filter(function (propertyName) { return typeof model[propertyName] === "object"; })
        .forEach(function (propertyName) {
        var column = createColumnLayout(model[propertyName]);
        column.data = propertyName;
        layout.parts.push(column);
    });
    return layout;
}
exports.createDefaultLayout = createDefaultLayout;
function modelFromJSON(json) {
    var model = {};
    var properties = Object.getOwnPropertyNames(json);
    properties = properties.concat(Object.keys(json));
    properties.forEach(function (key) {
        if (typeof json[key] !== "object") {
            model[key] = ko.observable(json[key]);
        }
        else {
            model[key] = modelFromJSON(json[key]);
        }
    });
    return model;
}
exports.modelFromJSON = modelFromJSON;
function traversePart(part, visit) {
    visit(part);
    (part.parts || []).forEach(function (child) {
        traversePart(child, visit);
    });
}
exports.traversePart = traversePart;
function modelFromLayout(layout) {
    var model = {};
    traversePart(layout, function (part) {
        if (part["data"] !== undefined) {
            uiml_parts_1.createProperty(model, {
                name: part["data"]
            });
        }
    });
    return model;
}
exports.modelFromLayout = modelFromLayout;
function modelToJSON(model) {
    return ko.toJSON(model, null, 2);
}
exports.modelToJSON = modelToJSON;


/***/ }),

/***/ "knockout":
/*!********************************************************************************************!*\
  !*** external {"root":"ko","commonjs2":"knockout","commonjs":"knockout","amd":"knockout"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_knockout__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9tZXRhZGF0YS9tb2RlbC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL2Zvcm0tYnVpbGRlci5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvaXRlbS1tZW51Lmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy9sYXlvdXQtaXRlbS5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvcGxhY2Vob2xkZXItaXRlbS5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvZGVmYXVsdC10b29sYm94LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvZm9ybS1idWlsZGVyLnNjc3M/NDlmNiIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL2Zvcm0tYnVpbGRlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL2Zvcm0tZWxlbWVudC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL2l0ZW0tbWVudS5zY3NzPzAwNDQiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy9pdGVtLW1lbnUudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy9sYXlvdXQtaXRlbS5zY3NzPzA4NTUiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy9sYXlvdXQtaXRlbS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL3BsYWNlaG9sZGVyLWl0ZW0uc2Nzcz8yNThhIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvcGxhY2Vob2xkZXItaXRlbS50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL3VpbWwtbGF5b3V0LXNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy91aW1sLXBhcnRzLnNjc3MiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy91aW1sLXBhcnRzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpcImtvXCIsXCJjb21tb25qczJcIjpcImtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwia25vY2tvdXRcIixcImFtZFwiOlwia25vY2tvdXRcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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QUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFGRCxrQ0FFQzs7Ozs7Ozs7Ozs7O0FDbkdELHNEIiwiZmlsZSI6ImZvcm0tYnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImtub2Nrb3V0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRm9ybUJ1aWxkZXJcIiwgW1wia25vY2tvdXRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRm9ybUJ1aWxkZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRm9ybUJ1aWxkZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJrb1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlcy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IElPYmplY3REZXNjcmlwdGlvbiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5cclxuZXhwb3J0IHZhciBkb21haW46IHtbaW5kZXg6IHN0cmluZ106IElPYmplY3REZXNjcmlwdGlvbn0gPSB7fTtcclxuXHJcbmRvbWFpbltcInBhcnRcIl0gPSB7XHJcbiAgICBuYW1lOiBcInBhcnRcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydGNsYXNzXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wicGFuZWxcIl0gPSB7XHJcbiAgICBuYW1lOiBcInBhbmVsXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInRleHRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJwYXJ0c1wiLCB0eXBlOiBcInBhcnRbXVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNzc0NsYXNzZXNcIiB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5kb21haW5bXCJsYXlvdXRJdGVtXCJdID0ge1xyXG4gICAgbmFtZTogXCJsYXlvdXRJdGVtXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInBhcnRzXCIsIHR5cGU6IFwicGFydFtdXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImNvbnRhaW5lclwiXSA9IHtcclxuICAgIG5hbWU6IFwiY29udGFpbmVyXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInBhcnRzXCIsIHR5cGU6IFwicGFydFtdXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImxhYmVsXCJdID0ge1xyXG4gICAgbmFtZTogXCJsYWJlbFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJ0ZXh0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImlucHV0XCJdID0ge1xyXG4gICAgbmFtZTogXCJpbnB1dFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0XCJdID0ge1xyXG4gICAgbmFtZTogXCJsYXlvdXRcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0Um93XCJdID0ge1xyXG4gICAgbmFtZTogXCJsYXlvdXRSb3dcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0Q29sdW1uXCJdID0ge1xyXG4gICAgbmFtZTogXCJpbnB1dFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJwYXJ0c1wiLCB0eXBlOiBcInBhcnRbXVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNzc0NsYXNzZXNcIiB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0RGVzY3JpcHRpb24obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZG9tYWluW25hbWVdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTaW1wbGVUeXBlKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICEhbmFtZSAmJiAoIWRvbWFpbltuYW1lXSAmJiBuYW1lLmluZGV4T2YoXCJbXVwiKSA9PSAtMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5VHlwZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhIW5hbWUgJiYgbmFtZS5sZW5ndGggPiAyICYmIG5hbWVbbmFtZS5sZW5ndGgtMl0gPT09IFwiW1wiICYmIG5hbWVbbmFtZS5sZW5ndGgtMV0gPT09IFwiXVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlFbGVtZW50VHlwZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmKGlzQXJyYXlUeXBlKG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoLTIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYmYtbGF5b3V0XFxcIj5cXHJcXG4gICAgPGxheW91dC1pdGVtIHBhcmFtcz1cXFwiZWxlbWVudDogcm9vdFxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHsgJ2JmLWxheW91dC0tZGVzaWduLW1vZGUnOiBpc0Rlc2lnbk1vZGUgfVxcXCI+PC9sYXlvdXQtaXRlbT5cXHJcXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJiZi1tb2RlLWJ1dHRvbiBmYVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogdG9nZ2xlRGVzaWduTW9kZSwgdGV4dDogaXNEZXNpZ25Nb2RlID8gJ1ZpZXcnOicnLCBjc3M6IHsgJ2ZhLWNvZyc6ICFpc0Rlc2lnbk1vZGUgfSBcXFwiPiAtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYmYtbW9kZS1idXR0b25cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IHRvZ2dsZURlc2lnbk1vZGUsIHRleHQ6IGlzRGVzaWduTW9kZSA/ICdWaWV3JzonRGVzaWduJyBcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJiZi10b29sYm94XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGlzRGVzaWduTW9kZSwgZm9yZWFjaDogdG9vbGJveFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJmLXRvb2xib3hfX2l0ZW1cXFwiIGRyYWdnYWJsZT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGUsIGV2ZW50OiB7IGRyYWdzdGFydDogJHBhcmVudC5kcmFnc3RhcnQgfSwgYXR0cjogeyB0aXRsZTogaGludCB9XFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiYmYtbGF5b3V0LWpzb25cXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogaXNEZXNpZ25Nb2RlXFxcIj5cXHJcXG4gICAgPHRleHRhcmVhIGRhdGEtYmluZD1cXFwidmFsdWU6IGpzb25UZXh0XFxcIj48L3RleHRhcmVhPlxcclxcbjwvZGl2PlxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwiYmYtaXRlbS1wYXJ0XFxcIj5cXHJcXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcIndpdGg6IGZvcm1FbGVtZW50LmNvbnRleHQgfHwgJGRhdGFcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJiZi1pdGVtLW1lbnVcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSwgY2xpY2tCdWJibGU6IGZhbHNlXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogbWVudUl0ZW1zIC0tPlxcclxcbiAgICAgICAgPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogJGRhdGEuY29tcG9uZW50IHx8ICd1aS1idXR0b24nLCBwYXJhbXM6IHsgaXRlbTogJGRhdGEgfSB9IC0tPlxcclxcbiAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgICAgIDxvYmplY3QtZWRpdG9yIHBhcmFtcz1cXFwiY29udGV4dDogY29udGVudFxcXCI+PC9vYmplY3QtZWRpdG9yPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGtvIGlmOiBpc0NvbnRhaW5lciAtLT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJiZi1pdGVtLWNvbnRlbnRcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IHNlbGVjdCwgY3NzOiBjc3NcXFwiPlxcclxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGVsZW1lbnRzIC0tPlxcclxcbiAgICA8bGF5b3V0LWl0ZW0gcGFyYW1zPVxcXCJlbGVtZW50OiAkZGF0YVxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZTogeyAgfVxcXCI+PC9sYXlvdXQtaXRlbT5cXHJcXG4gICAgPCEtLSAva28gLS0+XFxyXFxuICAgIDwhLS0ga28gaWY6IGVsZW1lbnRzKCkubGVuZ3RoID09PSAwIC0tPlxcclxcbiAgICA8cGxhY2Vob2xkZXItaXRlbSBwYXJhbXM9XFxcImVsZW1lbnQ6IGZvcm1FbGVtZW50XFxcIj48L3BsYWNlaG9sZGVyLWl0ZW0+XFxyXFxuICAgIDwhLS0gL2tvIC0tPlxcclxcbjwvZGl2PlxcclxcbjwhLS0gL2tvIC0tPlxcclxcbjwhLS0ga28gaWZub3Q6IGlzQ29udGFpbmVyIC0tPlxcclxcbjxkaXYgY2xhc3M9XFxcImJmLWl0ZW0tY29udGVudFxcXCIgZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIlxcclxcbiAgICBkYXRhLWJpbmQ9XFxcImV2ZW50OiB7IGRyYWdlbnRlcjogZHJhZ2VudGVyLCBkcmFnb3ZlcjogZHJhZ292ZXIsIGRyYWdsZWF2ZTogZHJhZ2xlYXZlLCBkcm9wOiBkcm9wLCBkcmFnc3RhcnQ6IGRyYWdzdGFydCB9LCBjbGljazogc2VsZWN0LCBjc3M6IGNzc1xcXCI+XFxyXFxuICAgIDwhLS0ga28gaWZub3Q6IGlzRGVzaWduTW9kZSAtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYmYtaXRlbS1jb250ZW50LWhvbGRlclxcXCIgZGF0YS1iaW5kPVxcXCJ3aXRoOiBmb3JtRWxlbWVudC5jb250ZXh0IHx8ICRkYXRhXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICA8IS0tIGtvIGlmOiBpc0Rlc2lnbk1vZGUgLS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJmLWl0ZW0tY29udGVudC1ob2xkZXJcXFwiIGRhdGEtYmluZD1cXFwibGV0OiB7ICRwYXJ0OiBwYXJ0IH1cXFwiPlxcclxcbiAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXFwiYmYtaXRlbS1wYXJ0XFxcIiwgYWZ0ZXJSZW5kZXI6IGFmdGVyUGFydFRlbXBsYXRlUmVuZGVyIH0gLS0+XFxyXFxuICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwhLS0gL2tvIC0tPlxcclxcbjwvZGl2PlxcclxcbjwhLS0gL2tvIC0tPlxcclxcbjwhLS0ga28gaWY6IGlzU2VsZWN0ZWQgLS0+XFxyXFxuPGl0ZW0tbWVudSBwYXJhbXM9XFxcImVsZW1lbnQ6IGZvcm1FbGVtZW50XFxcIj48L2l0ZW0tbWVudT5cXHJcXG48IS0tIC9rbyAtLT5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJiZi1pdGVtLXBsYWNlaG9sZGVyXFxcIiBkYXRhLWJpbmQ9XFxcImV2ZW50OiB7IGRyYWdvdmVyOiBkcmFnb3ZlciwgZHJvcDogZHJvcCB9XFxcIj5cXHJcXG48L2Rpdj5cIiIsImltcG9ydCB7IGNyZWF0ZVByb3BlcnR5RWRpdG9yLCBtYWtlVGl0bGUgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUb29sYm94SXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwicm93XCIsXHJcbiAgICAgICAgaGludDogXCJEcmFnIHRvIGFkZCByb3dcIixcclxuICAgICAgICBqc29uOiB7XHJcbiAgICAgICAgICAgIHBhcnRjbGFzczogXCJsYXlvdXRSb3dcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3NlczogXCJyb3dcIixcclxuICAgICAgICAgICAgcGFydHM6IFtcclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGhpbnQ6IFwiRHJhZyB0byBhZGQgY29sdW1uXCIsXHJcbiAgICAgICAganNvbjoge1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IFwibGF5b3V0Q29sdW1uXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIHBhcnRzOiBbXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJwYW5lbFwiLFxyXG4gICAgICAgIGhpbnQ6IFwiRHJhZyB0byBhZGQgcGFuZWxcIixcclxuICAgICAgICBqc29uOiB7XHJcbiAgICAgICAgICAgIHBhcnRjbGFzczogXCJwYW5lbFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBcInBhbmVsXCIsXHJcbiAgICAgICAgICAgIHBhcnRzOiBbXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJsYWJlbFwiLFxyXG4gICAgICAgIGhpbnQ6IFwiRHJhZyB0byBhZGQgbGFiZWxcIixcclxuICAgICAgICBqc29uOiB7XHJcbiAgICAgICAgICAgIHBhcnRjbGFzczogXCJsYWJlbFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtbGFiZWxcIixcclxuICAgICAgICAgICAgdGV4dDogXCJMYWJlbCB0ZXh0XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcImlucHV0XCIsXHJcbiAgICAgICAgaGludDogXCJEcmFnIHRvIGFkZCBpbnB1dCBlbGVtZW50XCIsXHJcbiAgICAgICAganNvbjoge1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3NlczogXCJ0ZXN0LWlucHV0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFwidmFsTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJjb21wb3NpdGVcIixcclxuICAgICAgICBoaW50OiBcIkRyYWcgdG8gYWRkIGNvbXBvc2l0ZSBlbGVtZW50XCIsXHJcbiAgICAgICAganNvbjoge1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IFwibGF5b3V0SXRlbVwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBcIml0ZW0gdGVzdC1pdGVtIHRlc3QtZ3JvdXBcIixcclxuICAgICAgICAgICAgcGFydHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0Y2xhc3M6IFwibGFiZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtbGFiZWxcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0Y2xhc3M6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBcIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xib3hJdGVtc0Zvcihtb2RlbDogYW55KSB7XHJcbiAgICByZXR1cm4gKE9iamVjdC5rZXlzKG1vZGVsKSB8fCBbXSlcclxuICAgICAgICAuZmlsdGVyKHByb3BlcnR5TmFtZSA9PiB0eXBlb2YgbW9kZWxbcHJvcGVydHlOYW1lXSAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICAubWFwKHByb3BlcnR5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWFrZVRpdGxlKHByb3BlcnR5TmFtZSksXHJcbiAgICAgICAgICAgICAgICBoaW50OiBcIkRyYWcgdG8gYWRkIFwiICsgbWFrZVRpdGxlKHByb3BlcnR5TmFtZSksXHJcbiAgICAgICAgICAgICAgICBqc29uOiBjcmVhdGVQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWUpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0VG9vbGJveEl0ZW1zKG1vZGVsOiBhbnkpIHtcclxuICAgIHJldHVybiBbXS5jb25jYXQoZGVmYXVsdFRvb2xib3hJdGVtcykuY29uY2F0KGNyZWF0ZVRvb2xib3hJdGVtc0Zvcihtb2RlbCkpO1xyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1FbGVtZW50IH0gZnJvbSBcIi4vZm9ybS1lbGVtZW50XCI7XHJcbmltcG9ydCB7IFVpbWxMYXlvdXRTZXJpYWxpemVyIH0gZnJvbSBcIi4vdWltbC1sYXlvdXQtc2VyaWFsaXplclwiO1xyXG5cclxuaW1wb3J0IFwiLi9mb3JtLWJ1aWxkZXIuc2Nzc1wiO1xyXG5pbXBvcnQgeyBVaW1sUGFydCwgVWltbFBhcnRzUmVwb3NpdG9yeSB9IGZyb20gXCIuL3VpbWwtcGFydHNcIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcclxudmFyIHRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vZm9ybS1idWlsZGVyLmh0bWxcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUJ1aWxkZXIge1xyXG4gICAgcHJpdmF0ZSBfbGF5b3V0U3Vic2NyaXB0aW9uOiBrby5Db21wdXRlZDtcclxuICAgIHByaXZhdGUgX21vZGVsU3Vic2NyaXB0aW9uOiBrby5Db21wdXRlZDtcclxuICAgIHByaXZhdGUgc3RhdGljIGRlZmF1bHRUZXh0ID0gJ3tcInBhcnRjbGFzc1wiOiBcImxheW91dFJvd1wiLFwiY3NzQ2xhc3Nlc1wiOiBcInJvd1wiLFwicGFydHNcIjogW119JztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm06IEZvcm0sIHRvb2xib3hJdGVtczogQXJyYXk8YW55PiA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxTdWJzY3JpcHRpb24gPSBrby5jb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5jb250ZXh0ID0gX2Zvcm0ubW9kZWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fbGF5b3V0U3Vic2NyaXB0aW9uID0ga28uY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbGF5b3V0VmFsdWU6IGFueSA9IF9mb3JtLmxheW91dDtcclxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkobGF5b3V0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRWYWx1ZSA9IFtsYXlvdXRWYWx1ZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKDxVaW1sUGFydD50aGlzLnJvb3QuY29udGVudCkucGFydHMgPSBsYXlvdXRWYWx1ZS5tYXAocGFydCA9PiBVaW1sUGFydC5mcm9tSlNPTihwYXJ0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdG9vbGJveEl0ZW1zLmZvckVhY2goaXRlbSA9PiB0aGlzLnRvb2xib3gucHVzaChpdGVtKSk7XHJcbiAgICB9XHJcbiAgICB0b29sYm94ID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICByb290OiBGb3JtRWxlbWVudCA9IFVpbWxMYXlvdXRTZXJpYWxpemVyLmNyZWF0ZVJvb3QoKTtcclxuICAgIGRyYWdzdGFydChtb2RlbCwgZXZlbnQpIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IDxEcmFnRXZlbnQ+KCg8YW55PmV2ZW50KS5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50KTtcclxuICAgICAgICBvcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiYmYtaXRlbS1qc29uXCIsIEpTT04uc3RyaW5naWZ5KG1vZGVsLmpzb24pKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGdldCBqc29uVGV4dCgpIHtcclxuICAgICAgICBpZih0aGlzLnJvb3QuZWxlbWVudHMoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShVaW1sTGF5b3V0U2VyaWFsaXplci5zZXJpYWxpemUodGhpcy5yb290LmVsZW1lbnRzKClbMF0pLCBudWxsLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEZvcm1CdWlsZGVyLmRlZmF1bHRUZXh0O1xyXG4gICAgfVxyXG4gICAgc2V0IGpzb25UZXh0KGpzb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2Zvcm0ubGF5b3V0ID0gSlNPTi5wYXJzZShqc29uIHx8IEZvcm1CdWlsZGVyLmRlZmF1bHRUZXh0KTtcclxuICAgIH1cclxuICAgIHNldCBpc0Rlc2lnbk1vZGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnJvb3QuaXNEZXNpZ25Nb2RlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNEZXNpZ25Nb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3QuaXNEZXNpZ25Nb2RlO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlRGVzaWduTW9kZShidWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgICAgIGJ1aWxkZXIuaXNEZXNpZ25Nb2RlID0gIWJ1aWxkZXIuaXNEZXNpZ25Nb2RlO1xyXG4gICAgICAgIC8vIFRPRE86IHJlLXRoaW5rIC0gaG93IHRoZSB3aG9sZSBsYXlvdXQgd2lsbCBiZSB1cGRhdGVkLCByZW1vdmUgdGhpcyBjcnV0Y2hcclxuICAgICAgICB0aGlzLmpzb25UZXh0ID0gdGhpcy5qc29uVGV4dDtcclxuICAgIH1cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2xheW91dFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJmb3JtLWJ1aWxkZXJcIiwge1xyXG4gICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtQnVpbGRlcihwYXJhbXMuZm9ybSwgcGFyYW1zLml0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQgeyBJUmVuZGVyYWJsZSwgVWltbFBhcnQgfSBmcm9tIFwiLi91aW1sLXBhcnRzXCI7XHJcbmltcG9ydCB7IFVpbWxMYXlvdXRTZXJpYWxpemVyIH0gZnJvbSBcIi4vdWltbC1sYXlvdXQtc2VyaWFsaXplclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRm9ybUVsZW1lbnQgZXh0ZW5kcyBJUmVuZGVyYWJsZSB7XHJcbiAgICBwYXJlbnQ6IElGb3JtRWxlbWVudDtcclxuICAgIGFkZEVsZW1lbnQodWltbFBhcnQ6IFVpbWxQYXJ0LCBsb2NhdGlvbjogc3RyaW5nLCBob3ZlcmVkRWxlbWVudD86IElGb3JtRWxlbWVudCk6IHZvaWQ7XHJcbiAgICByZW1vdmUoKTogdm9pZDtcclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxuICAgIGVsZW1lbnRzPzogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8SUZvcm1FbGVtZW50PjtcclxuICAgIGNvbnRlbnQ/OiBJUmVuZGVyYWJsZTtcclxuICAgIGNvbnRleHQ/OiBhbnk7XHJcbiAgICBpc0Rlc2lnbk1vZGU6IGJvb2xlYW47XHJcbiAgICBkcmFnUG9zaXRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNQYXJlbnRFZGdlSW5EaXJlY3Rpb24oZWxlbWVudDogSUZvcm1FbGVtZW50LCBkaXJlY3Rpb246IHN0cmluZykge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudDtcclxuICAgIGlmKCFwYXJlbnQgfHwgIXBhcmVudC5lbGVtZW50cykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0ga28udW53cmFwKHBhcmVudC5lbGVtZW50cykgfHwgW107XHJcbiAgICBjb25zdCBpbmRleCA9IGVsZW1lbnRzLmluZGV4T2YoZWxlbWVudCk7XHJcbiAgICBpZihwYXJlbnQuY29udGVudFtcInBhcnRjbGFzc1wiXSA9PT0gXCJsYXlvdXRSb3dcIikge1xyXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gMCAmJiBkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGluZGV4ID09PSBlbGVtZW50cy5sZW5ndGggLSAxICYmIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgJiYgZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IGluZGV4ID09PSBlbGVtZW50cy5sZW5ndGggLSAxICYmIGRpcmVjdGlvbiA9PT0gXCJib3R0b21cIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxEcmFnZ2VkT3ZlckluRGlyZWN0aW9uKGN1cnJlbnQ6IElGb3JtRWxlbWVudCwgZGlyZWN0aW9uOiBzdHJpbmcsIGVsZW1lbnRzOiBJRm9ybUVsZW1lbnRbXSA9IFtdKSB7XHJcbiAgICBpZihjdXJyZW50ICYmICghY3VycmVudC5jb250ZW50IHx8IGN1cnJlbnQuY29udGVudFtcInBhcnRjbGFzc1wiXSAhPT0gXCJsYXlvdXRcIikpIHtcclxuICAgICAgICBlbGVtZW50cy5wdXNoKGN1cnJlbnQpO1xyXG4gICAgICAgIGlmKGhhc1BhcmVudEVkZ2VJbkRpcmVjdGlvbihjdXJyZW50LCBkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGZpbGxEcmFnZ2VkT3ZlckluRGlyZWN0aW9uKGN1cnJlbnQucGFyZW50LCBkaXJlY3Rpb24sIGVsZW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFjZUhvbGRlciBpbXBsZW1lbnRzIElGb3JtRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFyZW50OiBJRm9ybUVsZW1lbnQpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXQgaXNEZXNpZ25Nb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5pc0Rlc2lnbk1vZGU7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gXCI8c3BhbiBkYXRhLWJpbmQ9J2lmOiBmb3JtRWxlbWVudC5pc0Rlc2lnbk1vZGUnPkRyb3AgaXRlbXMgaGVyZTwvc3Bhbj5cIjtcclxuICAgIH1cclxuICAgIGFkZEVsZW1lbnQoanNvbjogYW55LCBsb2NhdGlvbjogc3RyaW5nID0gXCJib3R0b21cIikge1xyXG4gICAgICAgIHRoaXMucGFyZW50LmFkZEVsZW1lbnQoanNvbiwgbG9jYXRpb24pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKCkge31cclxuICAgIGRpc3Bvc2UoKSB7fVxyXG4gICAgaXNDb250YWluZXIgPSBmYWxzZTtcclxuICAgIGhhc0lubmVyTGF5b3V0ID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtRWxlbWVudCBpbXBsZW1lbnRzIElGb3JtRWxlbWVudCB7XHJcbiAgICBwcml2YXRlIF9lbGVtZW50c1N1YnNjcmlwdGlvbjoga28uQ29tcHV0ZWQ7XHJcbiAgICBwcml2YXRlIF9jb250ZXh0OmFueSA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgX2lzRGVzaWduTW9kZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ1Bvc2l0aW9uID0ga28ub2JzZXJ2YWJsZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBJUmVuZGVyYWJsZSwgcHVibGljIHBhcmVudDogSUZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgcGFydCA9IGNvbnRlbnQgYXMgVWltbFBhcnQ7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudHNTdWJzY3JpcHRpb24gPSBrby5jb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gKHBhcnQucGFydHMgfHwgW10pLm1hcChwYXJ0ID0+IFVpbWxMYXlvdXRTZXJpYWxpemVyLmNyZWF0ZUVsZW1lbnQocGFydCwgdGhpcykpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2RWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLnBlZWsoKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cyhlbGVtZW50cyk7XHJcbiAgICAgICAgICAgIHByZXZFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5kaXNwb3NlKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnRzID0ga28ub2JzZXJ2YWJsZUFycmF5PElGb3JtRWxlbWVudD4oKTtcclxuXHJcbiAgICBnZXQgaXNDb250YWluZXIoKSB7IHJldHVybiB0aGlzLmNvbnRlbnQuaXNDb250YWluZXI7IH1cclxuICAgIGdldCBoYXNJbm5lckxheW91dCgpIHsgcmV0dXJuIHRoaXMuY29udGVudC5oYXNJbm5lckxheW91dDsgfVxyXG5cclxuICAgIGdldCBkcmFnUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYWdQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRyYWdQb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1Bvc2l0aW9uKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXNEZXNpZ25Nb2RlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNEZXNpZ25Nb2RlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGdldCBpc0Rlc2lnbk1vZGUoKSB7XHJcbiAgICAgICAgaWYoISF0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuaXNEZXNpZ25Nb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faXNEZXNpZ25Nb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGNvbnRleHQoY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcbiAgICBnZXQgY29udGV4dCgpIHtcclxuICAgICAgICBpZighdGhpcy5fY29udGV4dCAmJiB0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5wYXJlbnQuY29udGV4dDtcclxuICAgICAgICAgICAgaWYodGhpcy5pc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFQYXRoID0gdGhpcy5jb250ZW50W1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmKCEhZGF0YVBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzdXBwb3J0IGNvbXBsZXggcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLnBhcmVudC5jb250ZXh0W2RhdGFQYXRoXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcclxuICAgIH1cclxuICAgIHJlbmRlcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBpZih0aGlzLmNvbnRlbnQuaGFzSW5uZXJMYXlvdXQgfHwgdGhpcy5pc0NvbnRhaW5lciB8fCB0aGlzLmVsZW1lbnRzKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5yZW5kZXIoaHRtbEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cygpLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNvbnRlbnQucmVuZGVyKGh0bWxFbGVtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkRWxlbWVudCh1aW1sUGFydDogVWltbFBhcnQsIGxvY2F0aW9uOiBzdHJpbmcgPSBcImJvdHRvbVwiLCBob3ZlcmVkRWxlbWVudD86IElGb3JtRWxlbWVudCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzQ29udGFpbmVyIHx8IHRoaXMgPT09IGhvdmVyZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmFkZEVsZW1lbnQodWltbFBhcnQsIGxvY2F0aW9uLCB0aGlzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZih0aGlzLmNvbnRlbnRbXCJwYXJ0Y2xhc3NcIl0gPT09IFwibGF5b3V0XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbFJvb3QgPSBsb2NhdGlvbiA9PT0gXCJsZWZ0XCIgfHwgbG9jYXRpb24gPT09IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgIHZhciByb290V3JhcHBlciA9IFVpbWxMYXlvdXRTZXJpYWxpemVyLmNyZWF0ZUVsZW1lbnQoVWltbFBhcnQuZnJvbUpTT04oeyBwYXJ0Y2xhc3M6IGlzSG9yaXpvbnRhbFJvb3QgPyBcImxheW91dFJvd1wiIDogXCJsYXlvdXRDb2x1bW5cIiwgY3NzQ2xhc3NlczogaXNIb3Jpem9udGFsUm9vdCA/IFwicm93XCIgOiBcImNvbHVtblwiIH0pLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5wYXJlbnQgPSByb290V3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICByb290V3JhcHBlci5lbGVtZW50cyh0aGlzLmVsZW1lbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cyhbcm9vdFdyYXBwZXJdKTtcclxuICAgICAgICAgICAgICAgIHJvb3RXcmFwcGVyLmFkZEVsZW1lbnQodWltbFBhcnQsIGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuY29udGVudFtcInBhcnRjbGFzc1wiXSA9PT0gXCJsYXlvdXRSb3dcIikge1xyXG4gICAgICAgICAgICAgICAgaWYoISFob3ZlcmVkRWxlbWVudCAmJiAobG9jYXRpb24gPT09IFwidG9wXCIgfHwgbG9jYXRpb24gPT09IFwiYm90dG9tXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0NvbHVtbiA9IFVpbWxMYXlvdXRTZXJpYWxpemVyLmNyZWF0ZUVsZW1lbnQoVWltbFBhcnQuZnJvbUpTT04oeyBwYXJ0Y2xhc3M6IFwibGF5b3V0Q29sdW1uXCIsIGNzc0NsYXNzZXM6IFwiY29sdW1uXCIgfSksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuc3BsaWNlKHRoaXMuZWxlbWVudHMoKS5pbmRleE9mKGhvdmVyZWRFbGVtZW50KSwgMSwgbmV3Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICBob3ZlcmVkRWxlbWVudC5wYXJlbnQgPSBuZXdDb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sdW1uLmVsZW1lbnRzLnB1c2goaG92ZXJlZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbHVtbi5hZGRFbGVtZW50KHVpbWxQYXJ0LCBsb2NhdGlvbiwgaG92ZXJlZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGFyZW50LmFkZEVsZW1lbnQoanNvbiwgbG9jYXRpb24sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RWxlbWVudCA9IFVpbWxMYXlvdXRTZXJpYWxpemVyLmNyZWF0ZUVsZW1lbnQodWltbFBhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuc3BsaWNlKHRoaXMuZWxlbWVudHMoKS5pbmRleE9mKGhvdmVyZWRFbGVtZW50KSArIChsb2NhdGlvbiA9PT0gXCJyaWdodFwiID8gMSA6IDApLCAwLCBuZXdFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKCEhaG92ZXJlZEVsZW1lbnQgJiYgKGxvY2F0aW9uID09PSBcImxlZnRcIiB8fCBsb2NhdGlvbiA9PT0gXCJyaWdodFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb3cgPSBVaW1sTGF5b3V0U2VyaWFsaXplci5jcmVhdGVFbGVtZW50KFVpbWxQYXJ0LmZyb21KU09OKHsgcGFydGNsYXNzOiBcImxheW91dFJvd1wiLCBjc3NDbGFzc2VzOiBcInJvd1wiIH0pLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNwbGljZSh0aGlzLmVsZW1lbnRzKCkuaW5kZXhPZihob3ZlcmVkRWxlbWVudCksIDEsIG5ld1Jvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJlZEVsZW1lbnQucGFyZW50ID0gbmV3Um93O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Jvdy5lbGVtZW50cy5wdXNoKGhvdmVyZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdSb3cuYWRkRWxlbWVudCh1aW1sUGFydCwgbG9jYXRpb24sIGhvdmVyZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBVaW1sTGF5b3V0U2VyaWFsaXplci5jcmVhdGVFbGVtZW50KHVpbWxQYXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNwbGljZSh0aGlzLmVsZW1lbnRzKCkuaW5kZXhPZihob3ZlcmVkRWxlbWVudCkgKyAobG9jYXRpb24gPT09IFwiYm90dG9tXCIgPyAxIDogMCksIDAsIG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIGlmKCEhdGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZWxlbWVudHMucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgICAgICBpZigodGhpcy5wYXJlbnQuY29udGVudFtcInBhcnRjbGFzc1wiXSA9PT0gXCJsYXlvdXRSb3dcIiB8fCB0aGlzLnBhcmVudC5jb250ZW50W1wicGFydGNsYXNzXCJdID09PSBcImxheW91dENvbHVtblwiKSAmJiB0aGlzLnBhcmVudC5lbGVtZW50cygpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRzU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdExheW91dCwgbW9kZWxGcm9tSlNPTiwgbW9kZWxGcm9tTGF5b3V0LCBtb2RlbFRvSlNPTiB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRUb29sYm94SXRlbXMgfSBmcm9tIFwiLi9kZWZhdWx0LXRvb2xib3hcIjtcclxuaW1wb3J0IHsgSVBhcnQgfSBmcm9tIFwiLi4vdWltbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0ge1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVEZWZhdWx0TGF5b3V0ID0gY3JlYXRlRGVmYXVsdExheW91dDtcclxuICAgIHByaXZhdGUgX21vZGVsOiBrby5PYnNlcnZhYmxlPGFueT47XHJcbiAgICBwcml2YXRlIF9sYXlvdXQ6IGtvLk9ic2VydmFibGU8SVBhcnQ+O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbW9kZWxDaGFuZ2VkT2JzZXJ2ZXI6IGtvLkNvbXB1dGVkO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbGF5b3V0Q2hhbmdlZE9ic2VydmVyOiBrby5Db21wdXRlZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcmlnaW5hbE1vZGVsOiBhbnksIGxheW91dDogYW55LCBwcml2YXRlIG9uTW9kZWxDaGFuZ2VkPzogKG9iamVjdDogYW55LCBqc29uOiBzdHJpbmcpID0+IHZvaWQsIHByaXZhdGUgb25MYXlvdXRDaGFuZ2VkPzogKGxheW91dDogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWwgPSBrby5vYnNlcnZhYmxlKG1vZGVsRnJvbUpTT04ob3JpZ2luYWxNb2RlbCB8fCB7fSkpO1xyXG4gICAgICAgIHRoaXMuX2xheW91dCA9IGtvLm9ic2VydmFibGUobGF5b3V0IHx8IEZvcm0uY3JlYXRlRGVmYXVsdExheW91dCh0aGlzLm1vZGVsKSk7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxDaGFuZ2VkT2JzZXJ2ZXIgPSBrby5jb21wdXRlZCgoKSA9PiB0aGlzLm9uTW9kZWxDaGFuZ2VkICYmIHRoaXMub25Nb2RlbENoYW5nZWQodGhpcy5vYmplY3QsIG1vZGVsVG9KU09OKHRoaXMubW9kZWwpKSk7XHJcbiAgICAgICAgdGhpcy5fbGF5b3V0Q2hhbmdlZE9ic2VydmVyID0ga28uY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihvcmlnaW5hbE1vZGVsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbChtb2RlbEZyb21KU09OKG1vZGVsRnJvbUxheW91dCh0aGlzLmxheW91dCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uTGF5b3V0Q2hhbmdlZCAmJiB0aGlzLm9uTGF5b3V0Q2hhbmdlZCh0aGlzLmxheW91dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsYXlvdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xheW91dCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBsYXlvdXQobGF5b3V0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9sYXlvdXQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgbW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IG9iamVjdCgpIHtcclxuICAgICAgICByZXR1cm4ga28udG9KUyh0aGlzLm1vZGVsKTtcclxuICAgIH1cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxDaGFuZ2VkT2JzZXJ2ZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2xheW91dENoYW5nZWRPYnNlcnZlci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaG93KG1vZGVsOiBhbnksIGxheW91dDogYW55LCBhdDogSFRNTEVsZW1lbnQgfCBzdHJpbmcsIG9uTW9kZWxDaGFuZ2VkPzogKG9iamVjdDogYW55LCBqc29uOiBzdHJpbmcpID0+IHZvaWQsIG9uTGF5b3V0Q2hhbmdlZD86IChsYXlvdXQ6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybShtb2RlbCwgbGF5b3V0LCBvbk1vZGVsQ2hhbmdlZCwgb25MYXlvdXRDaGFuZ2VkKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGNyZWF0ZURlZmF1bHRUb29sYm94SXRlbXMoZm9ybS5tb2RlbCk7XHJcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh7IGZvcm0sIGl0ZW1zIH0sIHR5cGVvZiBhdCA9PT0gXCJzdHJpbmdcIiA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0KSA6IGF0KTtcclxuICAgICAgICByZXR1cm4gZm9ybTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9mb3JtLWJ1aWxkZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdWltbC1wYXJ0c1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9mb3JtLWVsZW1lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGF5b3V0LWl0ZW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGxhY2Vob2xkZXItaXRlbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pdGVtLW1lbnVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZGVmYXVsdC10b29sYm94XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvcm1cIjtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuXHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vdWltbFwiO1xyXG5cclxuaW1wb3J0IHsgSUZvcm1FbGVtZW50IH0gZnJvbSBcIi4vZm9ybS1lbGVtZW50XCI7XHJcblxyXG5pbXBvcnQgXCIuL2l0ZW0tbWVudS5zY3NzXCI7XHJcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoXCJ0ZXh0LWxvYWRlciEuL2l0ZW0tbWVudS5odG1sXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1NZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUVsZW1lbnQ6IElGb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogXCItIFJlbW92ZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246ICgpID0+IGZvcm1FbGVtZW50LnJlbW92ZSgpLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBrby5jb21wdXRlZCgoKSA9PiAhIWZvcm1FbGVtZW50LnBhcmVudClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtZW51SXRlbXMgPSBrby5vYnNlcnZhYmxlQXJyYXk8SUFjdGlvbj4oKTtcclxuICAgIGdldCBjb250ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1FbGVtZW50LmNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJpdGVtLW1lbnVcIiwge1xyXG4gICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJdGVtTWVudShwYXJhbXMuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlXHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5cclxuaW1wb3J0IHsgZmlsbERyYWdnZWRPdmVySW5EaXJlY3Rpb24sIElGb3JtRWxlbWVudCB9IGZyb20gXCIuL2Zvcm0tZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBVaW1sTGF5b3V0U2VyaWFsaXplciB9IGZyb20gXCIuL3VpbWwtbGF5b3V0LXNlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHsgVWltbFBhcnQgfSBmcm9tIFwiLi91aW1sLXBhcnRzXCI7XHJcblxyXG5pbXBvcnQgXCIuL2xheW91dC1pdGVtLnNjc3NcIjtcclxudmFyIHRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vbGF5b3V0LWl0ZW0uaHRtbFwiKTtcclxuXHJcbmZ1bmN0aW9uIGdldExvY2F0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgaWYoeSA+PSBoZWlnaHQgLyB3aWR0aCAqIHgpIHtcclxuICAgICAgICBpZih5ID49IC0gaGVpZ2h0IC8gd2lkdGggKiB4ICsgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYm90dG9tJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYoeSA+PSAtIGhlaWdodCAvIHdpZHRoICogeCArIGhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3JpZ2h0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndG9wJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIExheW91dEl0ZW0ge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZHJhZ2dlZEVsZW1lbnQ6IElGb3JtRWxlbWVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBkcmFnZ2VkT3ZlckVsZW1lbnQ6IElGb3JtRWxlbWVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBkcmFnZ2VkT3ZlclBvc2l0aW9uOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0ZWRFbGVtZW50ID0ga28ub2JzZXJ2YWJsZTxMYXlvdXRJdGVtPigpO1xyXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RlZCA9IGtvLm9ic2VydmFibGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcHJpdmF0ZSBfaG92ZXJJdGVtczogSUZvcm1FbGVtZW50W10gPSBbXTtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRIb3ZlckluZGV4ID0gMDtcclxuICAgIHByaXZhdGUgX2hvdmVySW5kaWNhdG9yVGltZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhckhvdmVySW5kaWNhdG9yKCkge1xyXG4gICAgICAgIExheW91dEl0ZW0uZHJhZ2dlZE92ZXJFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICBMYXlvdXRJdGVtLmRyYWdnZWRPdmVyUG9zaXRpb24gPSBudWxsO1xyXG4gICAgICAgIGlmKHRoaXMuX2hvdmVySW5kaWNhdG9yVGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hvdmVySW5kaWNhdG9yVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9ob3ZlckluZGljYXRvclRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KHRoaXMuX2hvdmVySXRlbXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hvdmVySXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZHJhZ1Bvc2l0aW9uID0gXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUVsZW1lbnQ6IElGb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGtvLmNvbXB1dGVkKCgpID0+IHRoaXMuZm9ybUVsZW1lbnQuaXNEZXNpZ25Nb2RlICYmIHRoaXMuX2lzU2VsZWN0ZWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW1lbnRzKCkgeyByZXR1cm4gdGhpcy5mb3JtRWxlbWVudC5lbGVtZW50czsgfVxyXG4gICAgZ2V0IGlzQ29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy5mb3JtRWxlbWVudC5pc0NvbnRhaW5lcjsgfVxyXG4gICAgZ2V0IGNzcygpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5mb3JtRWxlbWVudC5jb250ZW50IGluc3RhbmNlb2YgVWltbFBhcnQgPyB0aGlzLmZvcm1FbGVtZW50LmNvbnRlbnRbXCJjc3NDbGFzc2VzXCJdIDogXCJcIjtcclxuICAgICAgICBpZih0aGlzLmZvcm1FbGVtZW50LmlzRGVzaWduTW9kZSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiIFwiICsgXCJiZi1pdGVtLS1zZWxlY3RlZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZm9ybUVsZW1lbnQuZHJhZ1Bvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIgXCIgKyBcImJmLWl0ZW0tLWRyYWctb3Zlci1cIiArIHRoaXMuZm9ybUVsZW1lbnQuZHJhZ1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBpc1NlbGVjdGVkOiBrby5Db21wdXRlZDxib29sZWFuPjtcclxuXHJcbiAgICBkcmFnc3RhcnQobW9kZWw6IExheW91dEl0ZW0sIGV2OiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBpZih0aGlzLmZvcm1FbGVtZW50LmlzRGVzaWduTW9kZSkge1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IDxEcmFnRXZlbnQ+KCg8YW55PmV2KS5vcmlnaW5hbEV2ZW50IHx8IGV2KTtcclxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImJmLWl0ZW0tanNvblwiLCBKU09OLnN0cmluZ2lmeShVaW1sTGF5b3V0U2VyaWFsaXplci5zZXJpYWxpemUobW9kZWwuZm9ybUVsZW1lbnQpKSk7XHJcbiAgICAgICAgICAgIExheW91dEl0ZW0uZHJhZ2dlZEVsZW1lbnQgPSBtb2RlbC5mb3JtRWxlbWVudDtcclxuICAgICAgICAgICAgZXYuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhZ2VudGVyKG1vZGVsOiBMYXlvdXRJdGVtLCBldjogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldi5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZHJhZ292ZXIobW9kZWw6IExheW91dEl0ZW0sIGV2OiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBpZihtb2RlbC5mb3JtRWxlbWVudC5pc0Rlc2lnbk1vZGUpIHtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSA8RHJhZ0V2ZW50PigoPGFueT5ldikub3JpZ2luYWxFdmVudCB8fCBldiksXHJcbiAgICAgICAgICAgIHRhcmdldEl0ZW0gPSBrby5kYXRhRm9yKDxhbnk+b3JpZ2luYWxFdmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB2YXIgaG92ZXJMb2NhdGlvbiA9IGdldExvY2F0aW9uKG9yaWdpbmFsRXZlbnQub2Zmc2V0WCwgb3JpZ2luYWxFdmVudC5vZmZzZXRZLCAoPGFueT5ldi50YXJnZXQpLmNsaWVudFdpZHRoLCAoPGFueT5ldi50YXJnZXQpLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihMYXlvdXRJdGVtLmRyYWdnZWRPdmVyRWxlbWVudCAhPT0gbW9kZWwuZm9ybUVsZW1lbnQgfHwgTGF5b3V0SXRlbS5kcmFnZ2VkT3ZlclBvc2l0aW9uICE9PSBob3ZlckxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5jbGVhckhvdmVySW5kaWNhdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBMYXlvdXRJdGVtLmRyYWdnZWRPdmVyRWxlbWVudCA9IG1vZGVsLmZvcm1FbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgTGF5b3V0SXRlbS5kcmFnZ2VkT3ZlclBvc2l0aW9uID0gaG92ZXJMb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgIG1vZGVsLl9ob3Zlckl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICBmaWxsRHJhZ2dlZE92ZXJJbkRpcmVjdGlvbihtb2RlbC5mb3JtRWxlbWVudCwgaG92ZXJMb2NhdGlvbiwgbW9kZWwuX2hvdmVySXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuX2N1cnJlbnRIb3ZlckluZGV4ID0gbW9kZWwuX2hvdmVySXRlbXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdmVySW5kaWNhdG9yVXBkYXRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5faG92ZXJJdGVtc1ttb2RlbC5fY3VycmVudEhvdmVySW5kZXhdLmRyYWdQb3NpdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuX2N1cnJlbnRIb3ZlckluZGV4ID0gKG1vZGVsLl9jdXJyZW50SG92ZXJJbmRleCArIDEpICUgbW9kZWwuX2hvdmVySXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLl9ob3Zlckl0ZW1zW21vZGVsLl9jdXJyZW50SG92ZXJJbmRleF0uZHJhZ1Bvc2l0aW9uID0gaG92ZXJMb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5faG92ZXJJbmRpY2F0b3JUaW1lciA9IHNldFRpbWVvdXQoaG92ZXJJbmRpY2F0b3JVcGRhdGVyLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGhvdmVySW5kaWNhdG9yVXBkYXRlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldi5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYWdsZWF2ZShtb2RlbDogTGF5b3V0SXRlbSwgZXY6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGlmKG1vZGVsLmZvcm1FbGVtZW50LmlzRGVzaWduTW9kZSkge1xyXG4gICAgICAgICAgICBtb2RlbC5jbGVhckhvdmVySW5kaWNhdG9yKCk7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJvcChtb2RlbDogTGF5b3V0SXRlbSwgZXY6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGlmKG1vZGVsLmZvcm1FbGVtZW50LmlzRGVzaWduTW9kZSkge1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IDxEcmFnRXZlbnQ+KCg8YW55PmV2KS5vcmlnaW5hbEV2ZW50IHx8IGV2KTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBvcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYmYtaXRlbS1qc29uXCIpO1xyXG4gICAgICAgICAgICBpZighIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmKCEhTGF5b3V0SXRlbS5kcmFnZ2VkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExheW91dEl0ZW0uZHJhZ2dlZEVsZW1lbnQucGFyZW50LmVsZW1lbnRzLnJlbW92ZShMYXlvdXRJdGVtLmRyYWdnZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlvdXRJdGVtLmRyYWdnZWRFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyb3BUYXJnZXRFbGVtZW50ID0gbW9kZWwuX2hvdmVySXRlbXNbbW9kZWwuX2N1cnJlbnRIb3ZlckluZGV4XTtcclxuICAgICAgICAgICAgICAgIGRyb3BUYXJnZXRFbGVtZW50LmFkZEVsZW1lbnQoVWltbFBhcnQuZnJvbUpTT04oSlNPTi5wYXJzZShkYXRhKSksIGRyb3BUYXJnZXRFbGVtZW50LmRyYWdQb3NpdGlvbiwgZHJvcFRhcmdldEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vZGVsLmNsZWFySG92ZXJJbmRpY2F0b3IoKTtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXYuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3QobW9kZWw6IExheW91dEl0ZW0sIGV2OiBFdmVudCkge1xyXG4gICAgICAgIGlmKHRoaXMuZm9ybUVsZW1lbnQuaXNEZXNpZ25Nb2RlKSB7XHJcbiAgICAgICAgICAgIGlmKCEhTGF5b3V0SXRlbS5zZWxlY3RlZEVsZW1lbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgTGF5b3V0SXRlbS5zZWxlY3RlZEVsZW1lbnQoKS5faXNTZWxlY3RlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW9kZWwuX2lzU2VsZWN0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIExheW91dEl0ZW0uc2VsZWN0ZWRFbGVtZW50KG1vZGVsKTtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSAoKDxhbnk+ZXYpLm9yaWdpbmFsRXZlbnQgfHwgZXYpO1xyXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGlzRGVzaWduTW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtRWxlbWVudC5pc0Rlc2lnbk1vZGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcGFydCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtRWxlbWVudC5jb250ZW50W1wicGFydFwiXTtcclxuICAgIH1cclxuICAgIGFmdGVyUGFydFRlbXBsYXRlUmVuZGVyID0gKGVsZW1lbnRzOiBIVE1MRWxlbWVudFtdKSA9PiB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaG9sZGVyRWxlbWVudCA9IGVsZW1lbnRzWzFdO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhQ29udGV4dCA9IGtvLmNvbnRleHRGb3IoaG9sZGVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGtvLmNsZWFuTm9kZShob2xkZXJFbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5yZW5kZXIoaG9sZGVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3MoZGF0YUNvbnRleHQsIGhvbGRlckVsZW1lbnQpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwibGF5b3V0LWl0ZW1cIiwge1xyXG4gICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICAgICAgbGV0IGZvcm1FbGVtZW50OiBJRm9ybUVsZW1lbnQgPSBwYXJhbXMuZWxlbWVudCB8fCBVaW1sTGF5b3V0U2VyaWFsaXplci5jcmVhdGVFbGVtZW50KFVpbWxQYXJ0LmZyb21KU09OKHBhcmFtcy51aW1sKSwgbnVsbCk7XHJcbiAgICAgICAgICAgIGlmKCEhcGFyYW1zLmNvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50LmNvbnRleHQgPSBwYXJhbXMuY29udGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighZm9ybUVsZW1lbnQuaXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtRWxlbGVtdENvbnRhaW5lciA9ICg8SFRNTEVsZW1lbnQ+Y29tcG9uZW50SW5mby5lbGVtZW50KS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmYtaXRlbS1jb250ZW50LWhvbGRlclwiKVswXTtcclxuICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50LnJlbmRlcig8SFRNTEVsZW1lbnQ+aXRlbUVsZWxlbXRDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGF5b3V0SXRlbShmb3JtRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlXHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5cclxuaW1wb3J0IHsgUGxhY2VIb2xkZXIgfSBmcm9tIFwiLi9mb3JtLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0SXRlbSB9IGZyb20gXCIuL2xheW91dC1pdGVtXCI7XHJcblxyXG5pbXBvcnQgXCIuL3BsYWNlaG9sZGVyLWl0ZW0uc2Nzc1wiO1xyXG52YXIgdGVtcGxhdGUgPSByZXF1aXJlKFwidGV4dC1sb2FkZXIhLi9wbGFjZWhvbGRlci1pdGVtLmh0bWxcIik7XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwicGxhY2Vob2xkZXItaXRlbVwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUVsZWxlbXQgPSAoPEhUTUxFbGVtZW50PmNvbXBvbmVudEluZm8uZWxlbWVudCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJmLWl0ZW0tcGxhY2Vob2xkZXJcIilbMF07XHJcbiAgICAgICAgICAgIGxldCBmb3JtRWxlbWVudCA9IG5ldyBQbGFjZUhvbGRlcihwYXJhbXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGZvcm1FbGVtZW50LnJlbmRlcig8SFRNTEVsZW1lbnQ+aXRlbUVsZWxlbXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExheW91dEl0ZW0oZm9ybUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGFjZWhvbGRlckNvbXBvbmVudCA9IG51bGw7IiwiaW1wb3J0IHsgRm9ybUVsZW1lbnQsIElGb3JtRWxlbWVudCB9IGZyb20gXCIuL2Zvcm0tZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBVaW1sUGFydHNSZXBvc2l0b3J5LCBVaW1sUGFydCB9IGZyb20gXCIuL3VpbWwtcGFydHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVaW1sTGF5b3V0U2VyaWFsaXplciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsYXlvdXRQYXJ0Q2xhc3MgPSBcImxheW91dFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVSb290KCk6IEZvcm1FbGVtZW50IHtcclxuICAgICAgICB2YXIgcm9vdFBhcnQgPSBVaW1sUGFydHNSZXBvc2l0b3J5LmNyZWF0ZShVaW1sTGF5b3V0U2VyaWFsaXplci5sYXlvdXRQYXJ0Q2xhc3MsIHsgY3NzQ2xhc3NlczogXCJyb290XCIgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtRWxlbWVudChyb290UGFydCwgbnVsbCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVsZW1lbnQodWltbFBhcnQ6IFVpbWxQYXJ0LCBwYXJlbnQ6IElGb3JtRWxlbWVudCk6IElGb3JtRWxlbWVudCB7XHJcbiAgICAgICAgaWYodWltbFBhcnQuaGFzSW5uZXJMYXlvdXQpIHtcclxuICAgICAgICAgICAgdmFyIGdyb3VwRWxlbWVudEpzb24gPSB7IHBhcnRjbGFzczogVWltbExheW91dFNlcmlhbGl6ZXIubGF5b3V0UGFydENsYXNzLCBjc3NDbGFzc2VzOiBcImdyb3VwXCIsIHBhcnRzOiBbXSB9O1xyXG4gICAgICAgICAgICB2YXIgZ3JvdXBFbGVtZW50ID0gVWltbFBhcnQuZnJvbUpTT04oZ3JvdXBFbGVtZW50SnNvbik7XHJcbiAgICAgICAgICAgIGdyb3VwRWxlbWVudC5wYXJ0cyA9IHVpbWxQYXJ0LnBhcnQucGFydHMgfHwgW107XHJcbiAgICAgICAgICAgIHVpbWxQYXJ0LnBhcnRzID0gW2dyb3VwRWxlbWVudF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRm9ybUVsZW1lbnQodWltbFBhcnQsIHBhcmVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVsZW1lbnRzKGNvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PElGb3JtRWxlbWVudD4gfCBBcnJheTxJRm9ybUVsZW1lbnQ+LCBwYXJ0czogYW55W10gPSBbXSwgcGFyZW50OiBJRm9ybUVsZW1lbnQpIHtcclxuICAgICAgICBwYXJ0cy5mb3JFYWNoKGVsZW1lbnRKc29uID0+IHtcclxuICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKFVpbWxMYXlvdXRTZXJpYWxpemVyLmNyZWF0ZUVsZW1lbnQoVWltbFBhcnQuZnJvbUpTT04oZWxlbWVudEpzb24pLCBwYXJlbnQpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplKGZvcm1FbGVtZW50OiBJRm9ybUVsZW1lbnQpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHVpbWxQYXJ0ID0gPFVpbWxQYXJ0PmZvcm1FbGVtZW50LmNvbnRlbnQ7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQ6IGFueSA9IHtcclxuICAgICAgICAgICAgcGFydGNsYXNzOiB1aW1sUGFydC5wYXJ0Y2xhc3MsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBPYmplY3Qua2V5cyh1aW1sUGFydC5wYXJ0KS5mb3JFYWNoKGtleSA9PiBlbGVtZW50W2tleV0gPSB1aW1sUGFydC5wYXJ0W2tleV0pO1xyXG4gICAgICAgIGlmKGZvcm1FbGVtZW50LmVsZW1lbnRzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFydHMgPSBmb3JtRWxlbWVudC5lbGVtZW50cygpLm1hcChmZSA9PiBVaW1sTGF5b3V0U2VyaWFsaXplci5zZXJpYWxpemUoZmUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShlbGVtZW50LnBhcnRzKSAmJiBlbGVtZW50LnBhcnRzLmxlbmd0aCA9PT0gMSAmJiBlbGVtZW50LnBhcnRzWzBdLnBhcnRjbGFzcyA9PT0gVWltbExheW91dFNlcmlhbGl6ZXIubGF5b3V0UGFydENsYXNzKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFydHMgPSBlbGVtZW50LnBhcnRzWzBdLnBhcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRPYmplY3REZXNjcmlwdGlvbiwgaXNBcnJheVR5cGUgfSBmcm9tIFwiLi4vbWV0YWRhdGEvbW9kZWxcIjtcclxuaW1wb3J0IHsgSU9iamVjdERlc2NyaXB0aW9uLCBJUHJvcGVydHlEZXNjcmlwdGlvbiB9IGZyb20gXCIuLi9tZXRhZGF0YS9vYmplY3RcIjtcclxuXHJcbmltcG9ydCBcIi4vdWltbC1wYXJ0cy5zY3NzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZW5kZXJhYmxlIHtcclxuICAgIHJlbmRlcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpO1xyXG4gICAgaXNDb250YWluZXI6IGJvb2xlYW47XHJcbiAgICBoYXNJbm5lckxheW91dDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5KHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eURlc2NyaXB0aW9uOiBJUHJvcGVydHlEZXNjcmlwdGlvbiwgdmFsdWU/OiBhbnkpIHtcclxuICAgIGNvbnN0IG9ic2VydmFibGVWYWx1ZSA9IGtvLm9ic2VydmFibGUodmFsdWUpOyBcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5RGVzY3JpcHRpb24ubmFtZSwge1xyXG4gICAgICAgIGdldDogKCkgPT4gb2JzZXJ2YWJsZVZhbHVlKCksXHJcbiAgICAgICAgc2V0OiB2YWwgPT4gb2JzZXJ2YWJsZVZhbHVlKHZhbClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWltbFBhcnQgaW1wbGVtZW50cyBJUmVuZGVyYWJsZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnRhaW5lclBhcnRzID0gW1wibGF5b3V0XCIsIFwibGF5b3V0Um93XCIsIFwibGF5b3V0Q29sdW1uXCJdO1xyXG4gICAgcHVibGljIHN0YXRpYyBsYXlvdXRIb2xkZXJQYXJ0cyA9IFtcInBhbmVsXCJdO1xyXG4gICAgcHVibGljIHN0YXRpYyBsYXlvdXRDb252ZXJ0YWJsZVBhcnRzID0ge1xyXG4gICAgICAgIFwidmlld1wiOiBcImxheW91dFwiLFxyXG4gICAgICAgIFwiZm9ybVwiOiBcImxheW91dFwiLFxyXG4gICAgICAgIFwia29XaXRoXCI6IFwibGF5b3V0Q29sdW1uXCIsXHJcbiAgICAgICAgXCJjb250YWluZXJcIjogXCJsYXlvdXRDb2x1bW5cIixcclxuICAgICAgICBcImFjY29yZGlvblwiOiBcImxheW91dENvbHVtblwiLCAvLyBUT0RPOiBpbXBsZW1lbnQgYWNjb3JkaW9uL2xheW91dCBjb21wb25lbnRcclxuICAgICAgICBcImRpdlwiOiBcImNvbnRhaW5lclwiLFxyXG4gICAgICAgIFwiZm9ybUdyb3VwXCI6IFwibGF5b3V0SXRlbVwiXHJcbiAgICB9O1xyXG4gICAgcHVibGljIHN0YXRpYyByZW5kZXI6IChwYXJ0OiBhbnksIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50KSA9PiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgc3RhdGljIGNvdW50ZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFydDogYW55O1xyXG4gICAgcHJpdmF0ZSBfb2JqZWN0RGVzY3JpcHRpb246IElPYmplY3REZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhcnRjbGFzczogc3RyaW5nLCAuLi5wYXJhbXM6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBVaW1sUGFydC5jb3VudGVyKys7XHJcbiAgICAgICAgdGhpcy5fcGFydCA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtc1swXSk7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0RGVzY3JpcHRpb24gPSBnZXRPYmplY3REZXNjcmlwdGlvbihfcGFydGNsYXNzKTtcclxuICAgICAgICBpZih0aGlzLl9vYmplY3REZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9vYmplY3REZXNjcmlwdGlvbi5wcm9wZXJ0aWVzLmZvckVhY2gocGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5VHlwZSA9IHBkLnR5cGUgfHwgXCJzdHJpbmdcIjtcclxuICAgICAgICAgICAgICAgIGlmKCFpc0FycmF5VHlwZShwcm9wZXJ0eVR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUHJvcGVydHkodGhpcywgcGQsIHRoaXMuX3BhcnRbcGQubmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlUHJvcGVydHkodGhpcywgeyBuYW1lOiBcImRhdGFcIiB9LCB0aGlzLl9wYXJ0LmRhdGEpO1xyXG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHRoaXMsIHsgbmFtZTogXCJwYXJ0c1wiLCB0eXBlOiBcInBhcnRbXVwiIH0sICh0aGlzLl9wYXJ0LnBhcnRzIHx8IFtdKS5tYXAoanNvbiA9PiBVaW1sUGFydHNSZXBvc2l0b3J5LmNyZWF0ZShqc29uLnBhcnRjbGFzcywganNvbikpKTtcclxuICAgIH1cclxuICAgIHJlbmRlcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBpZihVaW1sUGFydC5yZW5kZXIpIHtcclxuICAgICAgICAgICAgVWltbFBhcnQucmVuZGVyKHRoaXMsIGh0bWxFbGVtZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBodG1sRWxlbWVudC5jbGFzc05hbWUgKz0gKFwiIFwiICsgdGhpc1tcImNzc0NsYXNzZXNcIl0pO1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5wYXJ0Y2xhc3MgKyB0aGlzLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGhhc0lubmVyTGF5b3V0KCkge1xyXG4gICAgICAgIHJldHVybiBVaW1sUGFydC5sYXlvdXRIb2xkZXJQYXJ0cy5pbmRleE9mKHRoaXMucGFydGNsYXNzKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNDb250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFVpbWxQYXJ0LmNvbnRhaW5lclBhcnRzLmluZGV4T2YodGhpcy5wYXJ0Y2xhc3MpICE9PSAtMTtcclxuICAgIH1cclxuICAgIGdldCBwYXJ0Y2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIFVpbWxQYXJ0LmxheW91dENvbnZlcnRhYmxlUGFydHNbdGhpcy5fcGFydGNsYXNzXSB8fCB0aGlzLl9wYXJ0Y2xhc3M7XHJcbiAgICB9XHJcbiAgICBnZXQgcGFydCgpIHtcclxuICAgICAgICB2YXIgcGFydCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3BhcnQpO1xyXG4gICAgICAgIHBhcnQuZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICBpZih0aGlzLl9vYmplY3REZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9vYmplY3REZXNjcmlwdGlvbi5wcm9wZXJ0aWVzLmZvckVhY2gocGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFydFtwZC5uYW1lXSA9IHRoaXNbcGQubmFtZV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwYXJ0O1xyXG4gICAgfVxyXG4gICAgcGFydHM6IEFycmF5PFVpbWxQYXJ0PjtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIHN0YXRpYyBmcm9tSlNPTihqc29uOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gVWltbFBhcnRzUmVwb3NpdG9yeS5jcmVhdGUoanNvbi5wYXJ0Y2xhc3MsIGpzb24pO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnQ7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUocGFydGNsYXNzOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gVWltbFBhcnRzUmVwb3NpdG9yeS5jcmVhdGUocGFydGNsYXNzLCB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVaW1sUGFydHNSZXBvc2l0b3J5IHtcclxuICAgIHByaXZhdGUgc3RhdGljIHBhcnRzOiB7W2tleTogc3RyaW5nXTogbmV3ICguLi5wYXJhbXM6IGFueSkgPT4gVWltbFBhcnQgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlID0gbmV3IFVpbWxQYXJ0c1JlcG9zaXRvcnkoKTtcclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7IHJldHVybiBVaW1sUGFydHNSZXBvc2l0b3J5Ll9pbnN0YW5jZTsgfVxyXG4gICAgc3RhdGljIHJlZ2lzdGVyKHBhcnRjbGFzczogc3RyaW5nLCBwYXJ0Q29uc3RydWN0b3I6IG5ldyAoKSA9PiBVaW1sUGFydCkge1xyXG4gICAgICAgIFVpbWxQYXJ0c1JlcG9zaXRvcnkucGFydHNbcGFydGNsYXNzXSA9IHBhcnRDb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGUocGFydGNsYXNzOiBzdHJpbmcsIC4uLnBhcmFtczogYW55KSB7XHJcbiAgICAgICAgaWYoISFVaW1sUGFydHNSZXBvc2l0b3J5LnBhcnRzW3BhcnRjbGFzc10pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW1sUGFydHNSZXBvc2l0b3J5LnBhcnRzW3BhcnRjbGFzc10oLi4ucGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW1sUGFydChwYXJ0Y2xhc3MsIC4uLnBhcmFtcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVBhcnQgfSBmcm9tIFwiLi4vdWltbFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9wZXJ0eSB9IGZyb20gXCIuL3VpbWwtcGFydHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVGl0bGUocHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWUuc3BsaXQoXCJfXCIpLm1hcChwYXJ0ID0+IGNhcGl0YWxpemUocGFydCkpLmpvaW4oXCIgXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvcGVydHlFZGl0b3IocHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydGNsYXNzOiBcImxheW91dEl0ZW1cIixcclxuICAgICAgICBjc3NDbGFzc2VzOiBcIml0ZW0gdGVzdC1pdGVtIHRlc3QtZ3JvdXBcIixcclxuICAgICAgICBwYXJ0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0Y2xhc3M6IFwibGFiZWxcIixcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzZXM6IFwidGVzdC1sYWJlbFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogbWFrZVRpdGxlKHByb3BlcnR5TmFtZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFydGNsYXNzOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByb3BlcnR5TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbHVtbkxheW91dChtb2RlbDogYW55LCBpbmNsdWRlTmVzdGVkT2JqZWN0cyA9IGZhbHNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFwicGFydGNsYXNzXCI6IFwibGF5b3V0Q29sdW1uXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IHVuZGVmaW5lZCxcclxuICAgICAgICBcImNzc0NsYXNzZXNcIjogXCJjb2x1bW5cIixcclxuICAgICAgICBcInBhcnRzXCI6IChPYmplY3Qua2V5cyhtb2RlbCkgfHwgW10pXHJcbiAgICAgICAgICAgIC5maWx0ZXIocHJvcGVydHlOYW1lID0+IGluY2x1ZGVOZXN0ZWRPYmplY3RzIHx8IHR5cGVvZiBtb2RlbFtwcm9wZXJ0eU5hbWVdICE9PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICAubWFwKHByb3BlcnR5TmFtZSA9PiBjcmVhdGVQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWUpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdExheW91dChtb2RlbDogYW55KSB7XHJcbiAgICBjb25zdCBsYXlvdXQgPSB7XHJcbiAgICAgICAgXCJwYXJ0Y2xhc3NcIjogXCJsYXlvdXRSb3dcIixcclxuICAgICAgICBcImRhdGFcIjogdW5kZWZpbmVkLFxyXG4gICAgICAgIFwiY3NzQ2xhc3Nlc1wiOiBcInJvdyB0ZXN0LWZvcm1cIixcclxuICAgICAgICBcInBhcnRzXCI6IFsgY3JlYXRlQ29sdW1uTGF5b3V0KG1vZGVsKSBdXHJcbiAgICB9O1xyXG4gICAgKE9iamVjdC5rZXlzKG1vZGVsKSB8fCBbXSlcclxuICAgIC5maWx0ZXIocHJvcGVydHlOYW1lID0+IHR5cGVvZiBtb2RlbFtwcm9wZXJ0eU5hbWVdID09PSBcIm9iamVjdFwiKVxyXG4gICAgLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjb2x1bW4gPSBjcmVhdGVDb2x1bW5MYXlvdXQobW9kZWxbcHJvcGVydHlOYW1lXSk7XHJcbiAgICAgICAgY29sdW1uLmRhdGEgPSBwcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgbGF5b3V0LnBhcnRzLnB1c2goY29sdW1uKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gbGF5b3V0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9kZWxGcm9tSlNPTihqc29uOiBhbnkpIHtcclxuICAgIGNvbnN0IG1vZGVsID0ge307XHJcbiAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGpzb24pO1xyXG4gICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuY29uY2F0KE9iamVjdC5rZXlzKGpzb24pKTtcclxuICAgIHByb3BlcnRpZXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmKHR5cGVvZiBqc29uW2tleV0gIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgbW9kZWxba2V5XSA9IGtvLm9ic2VydmFibGUoanNvbltrZXldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb2RlbFtrZXldID0gbW9kZWxGcm9tSlNPTihqc29uW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShqc29uKSwgKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAvLyAgICAgaWYodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBrby5vYnNlcnZhYmxlKHZhbHVlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgLy8gfSk7XHJcbiAgICByZXR1cm4gbW9kZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZVBhcnQocGFydDogSVBhcnQsIHZpc2l0OiAocGFydDogSVBhcnQpID0+IHZvaWQpIHtcclxuICAgIHZpc2l0KHBhcnQpO1xyXG4gICAgKHBhcnQucGFydHMgfHwgW10pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIHRyYXZlcnNlUGFydChjaGlsZCwgdmlzaXQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb2RlbEZyb21MYXlvdXQobGF5b3V0OiBhbnkpIHtcclxuICAgIGNvbnN0IG1vZGVsID0ge307XHJcbiAgICB0cmF2ZXJzZVBhcnQobGF5b3V0LCAocGFydDogSVBhcnQpID0+IHtcclxuICAgICAgICBpZihwYXJ0W1wiZGF0YVwiXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb3BlcnR5KG1vZGVsLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwYXJ0W1wiZGF0YVwiXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtb2RlbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vZGVsVG9KU09OKG1vZGVsOiBhbnkpIHtcclxuICAgIHJldHVybiBrby50b0pTT04obW9kZWwsIG51bGwsIDIpXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXzsiXSwic291cmNlUm9vdCI6IiJ9