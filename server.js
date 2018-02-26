/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../statico/src/plugins/serverfy/.temp_server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../statico/src/plugins/serverfy/.temp_server.js":
/*!*******************************************************!*\
  !*** ../statico/src/plugins/serverfy/.temp_server.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n//TODO\n\nfunction getRequests () {\n\n  return [__webpack_require__ ( /*! ./src/server/action.js */ \"./src/server/action.js\" ), __webpack_require__ ( /*! ./src/server/form_ajax.js */ \"./src/server/form_ajax.js\" ), __webpack_require__ ( /*! ./src/server/liker.js */ \"./src/server/liker.js\" ), __webpack_require__ ( /*! ./src/server/remote_action.js */ \"./src/server/remote_action.js\" ), __webpack_require__ ( /*! ./src/server/remote_loader.js */ \"./src/server/remote_loader.js\" ), __webpack_require__ ( /*! ./src/server/remote_modal.js */ \"./src/server/remote_modal.js\" ), __webpack_require__ ( /*! ./src/server/remote_panel.js */ \"./src/server/remote_panel.js\" ), __webpack_require__ ( /*! ./src/server/selectable_action.js */ \"./src/server/selectable_action.js\" ), __webpack_require__ ( /*! ./src/server/subscriber.js */ \"./src/server/subscriber.js\" ), __webpack_require__ ( /*! ./src/server/remote_popover.js */ \"./src/server/remote_popover.js\" )];\n\n}\n\ngetRequests ();\n\n\n//# sourceURL=webpack:///../statico/src/plugins/serverfy/.temp_server.js?");

/***/ }),

/***/ "./src/server/action.js":
/*!******************************!*\
  !*** ./src/server/action.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* ACTION */\n\nconst requests = {\n\n  '/action-action': () => ({\n    message: 'This is an action'\n  }),\n\n  '/action-modal': () => ({\n    modal: '<div class=\"modal container\">This is a modal</div>'\n  }),\n\n  '/action-panel': () => ({\n    panel: '<div class=\"panel container\">This is a panel</div>'\n  }),\n\n  '/action-popover': () => ({\n    popover: '<div class=\"popover container\">This is a popover</div>'\n  })\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/action.js?");

/***/ }),

/***/ "./src/server/form_ajax.js":
/*!*********************************!*\
  !*** ./src/server/form_ajax.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* FORM AJAX */\n\nconst requests = {\n\n  '/form-ajax-basic': req => { //FIXME\n\n    const form = reqParse ( req );\n\n    return {\n      message: `Form submitted using ajax! What's \"${form.fields.input_1}\"?`\n    };\n\n  },\n\n  '/form-ajax-file': req => { //FIXME\n\n    const form = reqParse ( req );\n\n    return {\n      message: `Form submitted using ajax! \"${form.files.file.name}\" has been uploaded too!`\n    };\n\n  }\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/form_ajax.js?");

/***/ }),

/***/ "./src/server/liker.js":
/*!*****************************!*\
  !*** ./src/server/liker.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* LIKER */\n\nconst requests = {\n\n  '/liker-update': ({ body }) => {\n\n    const likes = Number ( body.current.likes ),\n          dislikes = Number ( body.current.dislikes ),\n          prevState = body.current.state,\n          state = body.state;\n\n    if ( state !== prevState ) {\n      if ( state === true ) likes++;\n      if ( state === false ) dislikes++;\n      if ( prevState === true ) likes--;\n      if ( prevState === false ) dislikes--;\n    }\n\n    return { likes, dislikes, state };\n\n  },\n\n  '/liker-state': () => ({\n    state: true\n  })\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/liker.js?");

/***/ }),

/***/ "./src/server/remote_action.js":
/*!*************************************!*\
  !*** ./src/server/remote_action.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* REMOTE ACTION */\n\nconst requests = {\n\n  '/remote-action-1': () => ({\n    message: 'Task accomplished Master!'\n  }),\n\n  '/remote-action-2': ({ body }) => ({\n    message: `Color: \"${body.color}\"`\n  }),\n\n  '/remote-action-3': () => ({\n    refresh: true\n  }),\n\n  '/remote-action-4': () => ({\n    url: 'https://www.google.com'\n  }),\n\n  '/remote-action-5': () => ({\n    noop: true\n  })\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/remote_action.js?");

/***/ }),

/***/ "./src/server/remote_loader.js":
/*!*************************************!*\
  !*** ./src/server/remote_loader.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* REMOTE LOADER */\n\nconst requests = {\n\n  '/remote-loader-text': () => '<span>Remote loaded content</span>',\n\n  '/remote-loader-json': () => ({\n    html: '<span>JSON-loaded content</span>'\n  }),\n\n  '/remote-loader-widget': () => '<div class=\"button ripple ripple-primary\">Rippable</div>',\n\n  '/remote-loader-no-wrap': () => '<span>Not wrapped content</span>',\n\n  '/remote-loader-json-wrong': () => ({}),\n\n  '/remote-loader-json-message': () => ({\n    message: '<span>Error message...</span>'\n  }),\n\n  '/remote-loader-scroll': () => ({\n    message: '<span>Loaded!</span>'\n  }),\n\n  '/remote-loader-preload': () => ({\n    html: '<span>Preloaded!</span>'\n  }),\n\n  '/remote-loader-autofocus': () => ({\n    html: '<input class=\"bordered\" autofocus>'\n  }),\n\n  '/remote-loader-target': () => ({\n    html: `\n      <p class=\"ok\">...remote loaded content...</p>\n      <p class=\"ok\">...that matches the selector</p>\n      <p>I don't match the selector</p>\n    `\n  })\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/remote_loader.js?");

/***/ }),

/***/ "./src/server/remote_modal.js":
/*!************************************!*\
  !*** ./src/server/remote_modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* REMOTE MODAL */\n\nconst requests = {\n\n  '/remote-modal-1': () => ({\n    modal: `\n      <form class=\"card modal xs-8\">\n        <div class=\"card-header text-center\">This is a remote modal!</div>\n        <div class=\"card-block\">\n          <div class=\"placeholder\" style=\"width:95%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:92%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:100%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:87%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:93%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n        </div>\n        <div class=\"card-footer\">Footer</div>\n      </form>\n    `\n  }),\n\n  '/remote-modal-2': ({ body }) => ({\n    modal: `\n      <div class=\"card modal xs-8\">\n        <div class=\"card-header text-center\">This is a remote modal!</div>\n        <div class=\"card-block\">\n          <div class=\"placeholder\" style=\"width:95%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:92%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:100%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:87%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:93%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n        </div>\n        <div class=\"card-footer centerer\">\n          <div class=\"button bordered ${body.color}\">${body.color.toUpperCase ()}</div>\n        </div>\n      </div>\n    `\n  }),\n\n  '/remote-modal-fullscreen': () => ({\n    modal: `\n      <div class=\"card modal fullscreen\">\n          <div class=\"card-header\">\n            <div class=\"multiple\">\n              <span>This is a fullscreen remote modal!</span>\n              <div class=\"spacer\"></div>\n              <div class=\"button small modal-closer compact\">\n                <i class=\"icon\">close</i>\n              </div>\n            </div>\n          </div>\n        <div class=\"card-block\">\n          <div class=\"placeholder\" style=\"width:95%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:92%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:100%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:87%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:93%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n        </div>\n        <div class=\"card-footer\">Footer</div>\n      </div>\n    `\n  }),\n\n  '/remote-modal-autofocus': () => ({\n    modal: `\n      <div class=\"container bordered modal xs-8\">\n        <input class=\"bordered centered\" autofocus>\n      </div>\n    `\n  })\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/remote_modal.js?");

/***/ }),

/***/ "./src/server/remote_panel.js":
/*!************************************!*\
  !*** ./src/server/remote_panel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* REMOTE PANEL */\n\nconst requests = {\n\n  '/remote-panel-left': () => ({\n    panel: '<div class=\"panel left container\">Left</div>'\n  }),\n\n  '/remote-panel-top': () => ({\n    panel: '<div class=\"panel top container\">Top</div>'\n  }),\n\n  '/remote-panel-bottom': () => ({\n    panel: '<div class=\"panel bottom container\">Bottom</div>'\n  }),\n\n  '/remote-panel-right': () => ({\n    panel: '<div class=\"panel right container\">Right</div>'\n  }),\n\n  '/remote-panel-slim': () => ({\n    panel: '<div class=\"panel bottom slim container\">Slim</div>'\n  }),\n\n  '/remote-panel-fullscreen': () => ({\n    panel: '<div class=\"panel top fullscreen container\">Fullscreen</div>'\n  }),\n\n  '/remote-panel-pinned': () => ({\n    panel: '<div class=\"panel left pinned container\">Pinned</div>'\n  })\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/remote_panel.js?");

/***/ }),

/***/ "./src/server/remote_popover.js":
/*!**************************************!*\
  !*** ./src/server/remote_popover.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* REMOTE POPOVER */\n\nconst requests = {\n\n  '/remote-popover-1': () => ({\n    popover: `\n      <div class=\"popover card\">\n        <div class=\"card-header\">This is a remote popover!</div>\n        <div class=\"card-block\">\n          <div class=\"placeholder\" style=\"width:95%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:92%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:100%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:87%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:93%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n        </div>\n        <div class=\"card-footer\">Footer</div>\n      </div>\n    `\n  }),\n\n  '/remote-popover-2': ({ body }) => ({\n    popover: `\n      <div class=\"popover card xs-8\">\n        <div class=\"card-header text-center\">This is a remote popover!</div>\n        <div class=\"card-block\">\n          <div class=\"placeholder\" style=\"width:95%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:92%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:100%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:87%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:93%; height:10px;\"></div>\n          <div class=\"placeholder\" style=\"width:97%; height:10px;\"></div>\n        </div>\n        <div class=\"card-footer centerer\">\n          <div class=\"button bordered ${body.color}\">${body.color.toUpperCase ()}</div>\n        </div>\n      </div>\n    `\n  }),\n\n  '/remote-popover-fullscreen': () => ({\n    popover: '<div class=\"popover fullscreen container\">Fullscreen</div>'\n  }),\n\n  '/remote-popover-autofocus': () => ({\n    popover: `\n      <div class=\"container bordered popover\">\n        <input class=\"bordered\" autofocus>\n      </div>\n    `\n  })\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/remote_popover.js?");

/***/ }),

/***/ "./src/server/selectable_action.js":
/*!*****************************************!*\
  !*** ./src/server/selectable_action.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* SELECTABLE ACTION */\n\nconst requests = {\n\n  '/selectable-action-action': req => {\n\n    const getIds = () => _.castArray ( req.body['ids[]'] ).join ( ', ' );\n\n    return {\n      message: `Rows ids: ${getIds ()}`\n    };\n\n  },\n\n  '/selectable-action-modal': req => {\n\n    const getIds = () => _.castArray ( req.body['ids[]'] ).join ( ', ' );\n\n    return {\n      modal: `<div class=\"modal container\">Rows ids: ${getIds ()}</div>`\n    };\n\n  },\n\n  '/selectable-action-panel': req => {\n\n    const getIds = () => _.castArray ( req.body['ids[]'] ).join ( ', ' );\n\n    return {\n      panel: `<div class=\"panel container\">Rows ids: ${getIds ()}</div>`\n    };\n\n  },\n\n  '/selectable-action-popover': req => {\n\n    const getIds = () => _.castArray ( req.body['ids[]'] ).join ( ', ' );\n\n    return {\n      popover: `<div class=\"popover container\">Rows ids: ${getIds ()}</div>`\n    };\n\n  }\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/selectable_action.js?");

/***/ }),

/***/ "./src/server/subscriber.js":
/*!**********************************!*\
  !*** ./src/server/subscriber.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* SUBSCRIBER */\n\nconst requests = {\n\n  '/subscriber-update': ({ body }) => {\n\n    const counter = Number ( body.current.counter ),\n          prevState = body.current.state,\n          state = body.state;\n\n    if ( state !== prevState ) {\n      if ( state === true ) counter++;\n      if ( prevState === true ) counter--;\n    }\n\n    return { counter, state };\n\n  },\n\n  '/subscriber-state': () => ({\n    state: true\n  })\n\n};\n\n/* EXPORT */\n\nmodule.exports = requests;\n\n\n//# sourceURL=webpack:///./src/server/subscriber.js?");

/***/ })

/******/ });