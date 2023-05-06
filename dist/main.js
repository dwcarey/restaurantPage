/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./LionImage.jpg */ "./src/LionImage.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n\nbody {\n    background-color: brown;\n    display: grid;\n    grid-template-rows: 48px 1fr;\n    justify-items: center;\n}\n\n.section {\n    width: min(1000px, calc(60% + 100px));\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#content {\n    margin-left: 7vw;\n    margin-right: 7vw;\n    margin-bottom: 3vh;\n    justify-content: flex-start;\n    border: 3px solid rgb(72, 255, 0);\n    background-color: aqua;\n}\n\nbutton.active {\n    background-color: pink;\n}\n#header {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: row;\n}\n\nbutton {\n    background-color: aquamarine;\n    width: clamp(70px, 25vw, 200px);\n    height: clamp(24px, 3vh, 32px);\n}\n#imageHolder {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: clamp(250px, 75vw, 500px);\n    height: clamp(250px, 75vw, 500px);\n    margin-top: 5vw;\n}\n\n#bodyHolder {\n    padding: 5vw;\n}\n\n#menuHolder {\n    display: flex;\n    flex-direction: column;\n    gap: 1vh;\n}\n\n.menuCard {\n    border: 3px solid purple;\n    background-color: yellowgreen;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n.lionHolder {\n    width: clamp(250px, 75vw, 500px);\n    height: clamp(250px, 75vw, 500px);\n    margin-top: 5vw;\n}\n\nimg {\n    width: 100%;\n    height: 100%;\n}\n\nh1 {\n    font-size: clamp(1.5rem, 7vw, 5rem);\n    font-weight: 600;\n    margin-top: 2vh;\n}\n\nh2 {\n    font-size: clamp(1rem, 4vw, 2rem);\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\nh3 {\n    grid-row: 2;\n    grid-column: 1 / span 2;\n    display: flex;\n    margin-top: 3vh;\n    text-align: center;\n}\n\n#map {\n    width: clamp(250px, 75vw, 500px);\n    height: clamp(250px, 75vw, 500px);\n    padding-top: 5vw;\n}\n\n#contactBlurb {\n    margin-bottom: 5vw;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,uCAAuC;AACvC,uCAAuC;AACvC,uCAAuC;AACvC,uCAAuC;AACvC,uCAAuC;;AAEvC;IACI,uBAAuB;IACvB,aAAa;IACb,4BAA4B;IAC5B,qBAAqB;AACzB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;IAC3B,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,+BAA+B;IAC/B,8BAA8B;AAClC;AACA;IACI,mDAAkC;IAClC,gCAAgC;IAChC,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,wBAAwB;IACxB,6BAA6B;IAC7B,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,gCAAgC;IAChC,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/\n\nbody {\n    background-color: brown;\n    display: grid;\n    grid-template-rows: 48px 1fr;\n    justify-items: center;\n}\n\n.section {\n    width: min(1000px, calc(60% + 100px));\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#content {\n    margin-left: 7vw;\n    margin-right: 7vw;\n    margin-bottom: 3vh;\n    justify-content: flex-start;\n    border: 3px solid rgb(72, 255, 0);\n    background-color: aqua;\n}\n\nbutton.active {\n    background-color: pink;\n}\n#header {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: row;\n}\n\nbutton {\n    background-color: aquamarine;\n    width: clamp(70px, 25vw, 200px);\n    height: clamp(24px, 3vh, 32px);\n}\n#imageHolder {\n    background: url('./LionImage.jpg');\n    width: clamp(250px, 75vw, 500px);\n    height: clamp(250px, 75vw, 500px);\n    margin-top: 5vw;\n}\n\n#bodyHolder {\n    padding: 5vw;\n}\n\n#menuHolder {\n    display: flex;\n    flex-direction: column;\n    gap: 1vh;\n}\n\n.menuCard {\n    border: 3px solid purple;\n    background-color: yellowgreen;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n.lionHolder {\n    width: clamp(250px, 75vw, 500px);\n    height: clamp(250px, 75vw, 500px);\n    margin-top: 5vw;\n}\n\nimg {\n    width: 100%;\n    height: 100%;\n}\n\nh1 {\n    font-size: clamp(1.5rem, 7vw, 5rem);\n    font-weight: 600;\n    margin-top: 2vh;\n}\n\nh2 {\n    font-size: clamp(1rem, 4vw, 2rem);\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\nh3 {\n    grid-row: 2;\n    grid-column: 1 / span 2;\n    display: flex;\n    margin-top: 3vh;\n    text-align: center;\n}\n\n#map {\n    width: clamp(250px, 75vw, 500px);\n    height: clamp(250px, 75vw, 500px);\n    padding-top: 5vw;\n}\n\n#contactBlurb {\n    margin-bottom: 5vw;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactPageLoad.js":
/*!********************************!*\
  !*** ./src/contactPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPageLoad": () => (/* binding */ contactPageLoad)
/* harmony export */ });
/* harmony import */ var _contactsLion_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactsLion.jpg */ "./src/contactsLion.jpg");


// Initialize and add the map
let map;

async function initMap() {
  // The location of the jungle
  const position = { lat: -3.077, lng: 35.626 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at the jungle 
  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at the jungle in Africa
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Jungle",
  });
};


const contactPageLoad = (() => {

  const contentDiv = document.getElementById('content');
  contentDiv.replaceChildren();

  function headerComponent() {
    const headerHolder = document.createElement('h1');
    headerHolder.id = 'headerHolder';
    headerHolder.textContent = 'Contact';
    return headerHolder;
  }

  function contactsImage() {
    const image = document.createElement('img');
    const lionHolder = document.createElement('div');
    image.src = _contactsLion_jpg__WEBPACK_IMPORTED_MODULE_0__;
    lionHolder.classList.add('lionHolder');
    lionHolder.appendChild(image);
    return lionHolder;
  }

  function bodyComponent() {
    const bodyHolder = document.createElement('div');
    bodyHolder.id = 'bodyHolder';
    const contactBlurb = document.createElement('p');
    contactBlurb.textContent = `Welcome to The Jungle, located in the heart of Ngorongoro Conservation! If you have any questions, comments, or concerns, please do not hesitate to contact us. Our friendly staff are always happy to assist you and ensure that your dining experience is one to remember.

    To find us, simply head to Ngorongoro Conservation and look for the large, brightly colored sign with our restaurant's name on it. We are situated in a lush and vibrant jungle setting, surrounded by the sights and sounds of nature. We can't wait to welcome you to our unique and unforgettable dining experience in the heart of the African wilderness!`
    const mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    mapDiv.style.height = '400px';
    contactBlurb.id = 'contactBlurb';
    bodyHolder.appendChild(contactBlurb);
    bodyHolder.appendChild(mapDiv);
    initMap();
    return bodyHolder;
  }

    
  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(contactsImage());
  contentDiv.appendChild(bodyComponent());
});





/***/ }),

/***/ "./src/firstPageLoad.js":
/*!******************************!*\
  !*** ./src/firstPageLoad.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstPageLoad": () => (/* binding */ firstPageLoad)
/* harmony export */ });
/* harmony import */ var _LionImage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LionImage.jpg */ "./src/LionImage.jpg");


const firstPageLoad = (() => {
  const contentDiv = document.getElementById('content');
  contentDiv.replaceChildren();

  function imageComponent() {
    const imageHolder = document.createElement('div');
    imageHolder.id = 'imageHolder';
    const lion = new Image();
    lion.src = _LionImage_jpg__WEBPACK_IMPORTED_MODULE_0__;
    imageHolder.appendChild(lion);
    return imageHolder;
  }

  function headerComponent() {
    const headerHolder = document.createElement('h1');
    headerHolder.id = 'headerHolder';
    headerHolder.textContent = 'The Jungle';
    return headerHolder;
  }

  function bodyComponent() {
    const bodyHolder = document.createElement('p');
    bodyHolder.id = 'bodyHolder';
    bodyHolder.innerText = `Welcome to The Jungle, where the king invites you to indulge in a wild dining experience! Our menu features a variety of exotic dishes that will tantalize your taste buds and transport you to the heart of the jungle.

    Our signature dish is the Meerkat Skewers, tender strips of seasoned meat grilled to perfection. For those seeking a lighter option, try our Raccoon Salad, a fresh mix of greens topped with crispy bits of raccoon meat. For a hearty meal, we offer our Venison Stew, slow-cooked with herbs and spices for a rich and savory flavor. And for the adventurous foodies, our Bird Curry is a spicy blend of tropical flavors that will leave you wanting more.
    
    As you dine, keep an eye out for our resident meerkats who scurry around the restaurant, adding to the ambiance of the jungle. And if you're lucky, you may catch a glimpse of other wildlife roaming outside the restaurant.
    
    In The Jungle, we offer a unique dining experience that blends the wild and the culinary. So come on down and let us take you on a gastronomic journey through the wilds.`
    
    return bodyHolder;
  }

  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(imageComponent());
  contentDiv.appendChild(bodyComponent());
});



/***/ }),

/***/ "./src/menuArray.js":
/*!**************************!*\
  !*** ./src/menuArray.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuArray": () => (/* binding */ menuArray)
/* harmony export */ });
let menuArray = [];

class menuItem {
    constructor(name, price, imageID, blurb) {
        this.name = name;
        this.price = price;
        this.imageID = imageID;
        this.blurb = blurb;
    }

    static addToMenu(name, price, imageID, blurb) {
        const menuObject = new menuItem(name, price, imageID, blurb);
        menuArray.push(menuObject);
      }
};

menuItem.addToMenu('Meerkat Skewers', '$12', 'MeerkatImage', 'Try our signature dish of juicy, tender Meerkat meat skewered and grilled to perfection. Served with a side of wild rice and jungle-inspired spices, this dish will have your taste buds roaring.');
menuItem.addToMenu('Bird Curry', '$3', 'BirdImage', 'A flavorful blend of spices and herbs, our Bird Curry is a must-try for adventurous eaters. Made with tender, succulent pieces of bird meat, this dish is served with a side of steamed vegetables and fragrant basmati rice.');
menuItem.addToMenu('Venison Stew', '$400', 'DeerImage', 'For those looking for a hearty, satisfying meal, our Venison Stew is the perfect choice. Made with tender chunks of venison, fresh vegetables, and a rich, savory broth, this dish is slow-cooked to perfection and served piping hot.');
menuItem.addToMenu('Raccoon Salad', 'Free', 'RaccoonImage', "Looking for a light, refreshing salad? Our Raccoon Salad is a delightful mix of crisp greens, juicy cherry tomatoes, and tender strips of raccoon meat. Topped with a tangy dressing and served with a side of warm bread, this salad is the perfect way to satisfy your hunger without weighing you down. Best of all, it's on the house!");



/***/ }),

/***/ "./src/menuPageLoad.js":
/*!*****************************!*\
  !*** ./src/menuPageLoad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPageLoad": () => (/* binding */ menuPageLoad)
/* harmony export */ });
/* harmony import */ var _menuArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuArray */ "./src/menuArray.js");
/* harmony import */ var _MeerkatImage_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeerkatImage.jpg */ "./src/MeerkatImage.jpg");
/* harmony import */ var _DeerImage_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeerImage.jpg */ "./src/DeerImage.jpg");
/* harmony import */ var _BirdImage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BirdImage.jpg */ "./src/BirdImage.jpg");
/* harmony import */ var _RaccoonImage_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RaccoonImage.jpg */ "./src/RaccoonImage.jpg");






const menuPageLoad = (() => {
  const contentDiv = document.getElementById('content');
  contentDiv.replaceChildren();

  function headerComponent() {
    const headerHolder = document.createElement('h1');
    headerHolder.id = 'headerHolder';
    headerHolder.textContent = 'Menu';
    return headerHolder;
  }

  function bodyComponent() {
    const bodyHolder = document.createElement('div');
    bodyHolder.id = 'bodyHolder';
    const menuHolder = document.createElement('div');
    menuHolder.id = 'menuHolder';

    for (let menuItem of _menuArray__WEBPACK_IMPORTED_MODULE_0__.menuArray) {
        const card = document.createElement('div');
        card.classList.add('menuCard');

        const image = document.createElement('img');
        switch(menuItem.imageID) {
          case 'MeerkatImage':
            image.src = _MeerkatImage_jpg__WEBPACK_IMPORTED_MODULE_1__;
            break;
          case 'DeerImage':
            image.src = _DeerImage_jpg__WEBPACK_IMPORTED_MODULE_2__;
            break;
          case 'BirdImage':
            image.src = _BirdImage_jpg__WEBPACK_IMPORTED_MODULE_3__;
            break;
          case 'RaccoonImage':
            image.src = _RaccoonImage_jpg__WEBPACK_IMPORTED_MODULE_4__;
            break;
          default:
            image.src = './LionImage.jpg';
        }

        const namePrice = document.createElement('h2');
        namePrice.classList.add('menuName');
        namePrice.innerText = `${menuItem.name} 
        - ${menuItem.price}`;

        const blurb = document.createElement('h3');
        blurb.classList.add('blurb');
        blurb.textContent = `${menuItem.blurb}`;

        card.appendChild(image);
        card.appendChild(namePrice);
        card.appendChild(blurb);
        menuHolder.appendChild(card);
        bodyHolder.appendChild(menuHolder);
    }
    return bodyHolder;
  }
  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(bodyComponent());
});



/***/ }),

/***/ "./src/BirdImage.jpg":
/*!***************************!*\
  !*** ./src/BirdImage.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33f50592643ef84a1a5f.jpg";

/***/ }),

/***/ "./src/DeerImage.jpg":
/*!***************************!*\
  !*** ./src/DeerImage.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67c30fd2833c85aeac74.jpg";

/***/ }),

/***/ "./src/LionImage.jpg":
/*!***************************!*\
  !*** ./src/LionImage.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55ceb940464a8efb6af8.jpg";

/***/ }),

/***/ "./src/MeerkatImage.jpg":
/*!******************************!*\
  !*** ./src/MeerkatImage.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a90ac77cf1be77b57bb7.jpg";

/***/ }),

/***/ "./src/RaccoonImage.jpg":
/*!******************************!*\
  !*** ./src/RaccoonImage.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2560a2ebb0d9a80319b.jpg";

/***/ }),

/***/ "./src/contactsLion.jpg":
/*!******************************!*\
  !*** ./src/contactsLion.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "affd47b4c9902ae9d84b.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _firstPageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstPageLoad */ "./src/firstPageLoad.js");
/* harmony import */ var _menuPageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPageLoad */ "./src/menuPageLoad.js");
/* harmony import */ var _contactPageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPageLoad */ "./src/contactPageLoad.js");
/* harmony import */ var _menuArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuArray */ "./src/menuArray.js");






(0,_firstPageLoad__WEBPACK_IMPORTED_MODULE_1__.firstPageLoad)();
createButtons();
console.log(_menuArray__WEBPACK_IMPORTED_MODULE_4__.menuArray);

function createButtons() { 
const headerDiv = document.getElementById('header');
headerDiv.replaceChildren();

const homeButton = document.createElement('button');
homeButton.id = 'Home';
homeButton.textContent = homeButton.id;
homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    else {
        (0,_firstPageLoad__WEBPACK_IMPORTED_MODULE_1__.firstPageLoad)();
        activeButton(homeButton);
}});

const menuButton = document.createElement('button');
menuButton.id = 'Menu';
menuButton.textContent = menuButton.id;
menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    else {
        (0,_menuPageLoad__WEBPACK_IMPORTED_MODULE_2__.menuPageLoad)();
        activeButton(menuButton);
    }
});

const contactButton = document.createElement('button');
contactButton.id = 'Contact';
contactButton.textContent = contactButton.id;
contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    else {
        (0,_contactPageLoad__WEBPACK_IMPORTED_MODULE_3__.contactPageLoad)();
        activeButton(contactButton);
    }
});

headerDiv.appendChild(homeButton);
headerDiv.appendChild(menuButton);
headerDiv.appendChild(contactButton);
};

function activeButton(button) {
    const buttons = document.querySelectorAll('.active');

    buttons.forEach ((buttonItem) => {
        buttonItem.classList.remove('active');
    })

    button.classList.add('active');
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMyQjtBQUNGO0FBQ007QUFDWjs7QUFFeEMsNkRBQWE7QUFDYjtBQUNBLFlBQVksaURBQVM7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFhO0FBQ3JCO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFZO0FBQ3BCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWU7QUFDdkI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2ZpcnN0UGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudUFycmF5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVQYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0xpb25JbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLypAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAqL1xcbi8qQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAKi9cXG4vKkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCovXFxuLypAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAqL1xcbi8qQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAKi9cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDhweCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICB3aWR0aDogbWluKDEwMDBweCwgY2FsYyg2MCUgKyAxMDBweCkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogN3Z3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDd2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYig3MiwgMjU1LCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgd2lkdGg6IGNsYW1wKDcwcHgsIDI1dncsIDIwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyNHB4LCAzdmgsIDMycHgpO1xcbn1cXG4jaW1hZ2VIb2xkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICB3aWR0aDogY2xhbXAoMjUwcHgsIDc1dncsIDUwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyNTBweCwgNzV2dywgNTAwcHgpO1xcbiAgICBtYXJnaW4tdG9wOiA1dnc7XFxufVxcblxcbiNib2R5SG9sZGVyIHtcXG4gICAgcGFkZGluZzogNXZ3O1xcbn1cXG5cXG4jbWVudUhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXZoO1xcbn1cXG5cXG4ubWVudUNhcmQge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBwdXJwbGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLmxpb25Ib2xkZXIge1xcbiAgICB3aWR0aDogY2xhbXAoMjUwcHgsIDc1dncsIDUwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyNTBweCwgNzV2dywgNTAwcHgpO1xcbiAgICBtYXJnaW4tdG9wOiA1dnc7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDd2dywgNXJlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgMnJlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAzdmg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21hcCB7XFxuICAgIHdpZHRoOiBjbGFtcCgyNTBweCwgNzV2dywgNTAwcHgpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDI1MHB4LCA3NXZ3LCA1MDBweCk7XFxuICAgIHBhZGRpbmctdG9wOiA1dnc7XFxufVxcblxcbiNjb250YWN0Qmx1cmIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1dnc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLHVDQUF1QztBQUN2Qyx1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHVDQUF1QztBQUN2Qyx1Q0FBdUM7O0FBRXZDO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtREFBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAKi9cXG4vKkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCovXFxuLypAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAqL1xcbi8qQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAKi9cXG4vKkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCovXFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHggMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gICAgd2lkdGg6IG1pbigxMDAwcHgsIGNhbGMoNjAlICsgMTAwcHgpKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDd2dztcXG4gICAgbWFyZ2luLXJpZ2h0OiA3dnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoNzIsIDI1NSwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbmJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIHdpZHRoOiBjbGFtcCg3MHB4LCAyNXZ3LCAyMDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMjRweCwgM3ZoLCAzMnB4KTtcXG59XFxuI2ltYWdlSG9sZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL0xpb25JbWFnZS5qcGcnKTtcXG4gICAgd2lkdGg6IGNsYW1wKDI1MHB4LCA3NXZ3LCA1MDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMjUwcHgsIDc1dncsIDUwMHB4KTtcXG4gICAgbWFyZ2luLXRvcDogNXZ3O1xcbn1cXG5cXG4jYm9keUhvbGRlciB7XFxuICAgIHBhZGRpbmc6IDV2dztcXG59XFxuXFxuI21lbnVIb2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDF2aDtcXG59XFxuXFxuLm1lbnVDYXJkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5saW9uSG9sZGVyIHtcXG4gICAgd2lkdGg6IGNsYW1wKDI1MHB4LCA3NXZ3LCA1MDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMjUwcHgsIDc1dncsIDUwMHB4KTtcXG4gICAgbWFyZ2luLXRvcDogNXZ3O1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCA3dncsIDVyZW0pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA0dncsIDJyZW0pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNtYXAge1xcbiAgICB3aWR0aDogY2xhbXAoMjUwcHgsIDc1dncsIDUwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyNTBweCwgNzV2dywgNTAwcHgpO1xcbiAgICBwYWRkaW5nLXRvcDogNXZ3O1xcbn1cXG5cXG4jY29udGFjdEJsdXJiIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjb250YWN0c0xpb24gZnJvbSBcIi4vY29udGFjdHNMaW9uLmpwZ1wiO1xuXG4vLyBJbml0aWFsaXplIGFuZCBhZGQgdGhlIG1hcFxubGV0IG1hcDtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgLy8gVGhlIGxvY2F0aW9uIG9mIHRoZSBqdW5nbGVcbiAgY29uc3QgcG9zaXRpb24gPSB7IGxhdDogLTMuMDc3LCBsbmc6IDM1LjYyNiB9O1xuICAvLyBSZXF1ZXN0IG5lZWRlZCBsaWJyYXJpZXMuXG4gIC8vQHRzLWlnbm9yZVxuICBjb25zdCB7IE1hcCB9ID0gYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeShcIm1hcHNcIik7XG4gIGNvbnN0IHsgQWR2YW5jZWRNYXJrZXJWaWV3IH0gPSBhd2FpdCBnb29nbGUubWFwcy5pbXBvcnRMaWJyYXJ5KFwibWFya2VyXCIpO1xuXG4gIC8vIFRoZSBtYXAsIGNlbnRlcmVkIGF0IHRoZSBqdW5nbGUgXG4gIG1hcCA9IG5ldyBNYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICB6b29tOiA4LFxuICAgIGNlbnRlcjogcG9zaXRpb24sXG4gICAgbWFwSWQ6IFwiREVNT19NQVBfSURcIixcbiAgfSk7XG5cbiAgLy8gVGhlIG1hcmtlciwgcG9zaXRpb25lZCBhdCB0aGUganVuZ2xlIGluIEFmcmljYVxuICBjb25zdCBtYXJrZXIgPSBuZXcgQWR2YW5jZWRNYXJrZXJWaWV3KHtcbiAgICBtYXA6IG1hcCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgdGl0bGU6IFwiSnVuZ2xlXCIsXG4gIH0pO1xufTtcblxuXG5jb25zdCBjb250YWN0UGFnZUxvYWQgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50RGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGZ1bmN0aW9uIGhlYWRlckNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBoZWFkZXJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlckhvbGRlci5pZCA9ICdoZWFkZXJIb2xkZXInO1xuICAgIGhlYWRlckhvbGRlci50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICByZXR1cm4gaGVhZGVySG9sZGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGFjdHNJbWFnZSgpIHtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGxpb25Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZS5zcmMgPSBjb250YWN0c0xpb247XG4gICAgbGlvbkhvbGRlci5jbGFzc0xpc3QuYWRkKCdsaW9uSG9sZGVyJyk7XG4gICAgbGlvbkhvbGRlci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgcmV0dXJuIGxpb25Ib2xkZXI7XG4gIH1cblxuICBmdW5jdGlvbiBib2R5Q29tcG9uZW50KCkge1xuICAgIGNvbnN0IGJvZHlIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5SG9sZGVyLmlkID0gJ2JvZHlIb2xkZXInO1xuICAgIGNvbnN0IGNvbnRhY3RCbHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0Qmx1cmIudGV4dENvbnRlbnQgPSBgV2VsY29tZSB0byBUaGUgSnVuZ2xlLCBsb2NhdGVkIGluIHRoZSBoZWFydCBvZiBOZ29yb25nb3JvIENvbnNlcnZhdGlvbiEgSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgY29tbWVudHMsIG9yIGNvbmNlcm5zLCBwbGVhc2UgZG8gbm90IGhlc2l0YXRlIHRvIGNvbnRhY3QgdXMuIE91ciBmcmllbmRseSBzdGFmZiBhcmUgYWx3YXlzIGhhcHB5IHRvIGFzc2lzdCB5b3UgYW5kIGVuc3VyZSB0aGF0IHlvdXIgZGluaW5nIGV4cGVyaWVuY2UgaXMgb25lIHRvIHJlbWVtYmVyLlxuXG4gICAgVG8gZmluZCB1cywgc2ltcGx5IGhlYWQgdG8gTmdvcm9uZ29ybyBDb25zZXJ2YXRpb24gYW5kIGxvb2sgZm9yIHRoZSBsYXJnZSwgYnJpZ2h0bHkgY29sb3JlZCBzaWduIHdpdGggb3VyIHJlc3RhdXJhbnQncyBuYW1lIG9uIGl0LiBXZSBhcmUgc2l0dWF0ZWQgaW4gYSBsdXNoIGFuZCB2aWJyYW50IGp1bmdsZSBzZXR0aW5nLCBzdXJyb3VuZGVkIGJ5IHRoZSBzaWdodHMgYW5kIHNvdW5kcyBvZiBuYXR1cmUuIFdlIGNhbid0IHdhaXQgdG8gd2VsY29tZSB5b3UgdG8gb3VyIHVuaXF1ZSBhbmQgdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZSBpbiB0aGUgaGVhcnQgb2YgdGhlIEFmcmljYW4gd2lsZGVybmVzcyFgXG4gICAgY29uc3QgbWFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFwRGl2LmlkID0gJ21hcCc7XG4gICAgbWFwRGl2LnN0eWxlLmhlaWdodCA9ICc0MDBweCc7XG4gICAgY29udGFjdEJsdXJiLmlkID0gJ2NvbnRhY3RCbHVyYic7XG4gICAgYm9keUhvbGRlci5hcHBlbmRDaGlsZChjb250YWN0Qmx1cmIpO1xuICAgIGJvZHlIb2xkZXIuYXBwZW5kQ2hpbGQobWFwRGl2KTtcbiAgICBpbml0TWFwKCk7XG4gICAgcmV0dXJuIGJvZHlIb2xkZXI7XG4gIH1cblxuICAgIFxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckNvbXBvbmVudCgpKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0c0ltYWdlKCkpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGJvZHlDb21wb25lbnQoKSk7XG59KTtcblxuZXhwb3J0IHsgY29udGFjdFBhZ2VMb2FkIH07XG5cbiIsImltcG9ydCBMaW9uSW1hZ2UgZnJvbSBcIi4vTGlvbkltYWdlLmpwZ1wiO1xuXG5jb25zdCBmaXJzdFBhZ2VMb2FkID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnREaXYucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgZnVuY3Rpb24gaW1hZ2VDb21wb25lbnQoKSB7XG4gICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZUhvbGRlci5pZCA9ICdpbWFnZUhvbGRlcic7XG4gICAgY29uc3QgbGlvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxpb24uc3JjID0gTGlvbkltYWdlO1xuICAgIGltYWdlSG9sZGVyLmFwcGVuZENoaWxkKGxpb24pO1xuICAgIHJldHVybiBpbWFnZUhvbGRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlYWRlckNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBoZWFkZXJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlckhvbGRlci5pZCA9ICdoZWFkZXJIb2xkZXInO1xuICAgIGhlYWRlckhvbGRlci50ZXh0Q29udGVudCA9ICdUaGUgSnVuZ2xlJztcbiAgICByZXR1cm4gaGVhZGVySG9sZGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gYm9keUNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBib2R5SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJvZHlIb2xkZXIuaWQgPSAnYm9keUhvbGRlcic7XG4gICAgYm9keUhvbGRlci5pbm5lclRleHQgPSBgV2VsY29tZSB0byBUaGUgSnVuZ2xlLCB3aGVyZSB0aGUga2luZyBpbnZpdGVzIHlvdSB0byBpbmR1bGdlIGluIGEgd2lsZCBkaW5pbmcgZXhwZXJpZW5jZSEgT3VyIG1lbnUgZmVhdHVyZXMgYSB2YXJpZXR5IG9mIGV4b3RpYyBkaXNoZXMgdGhhdCB3aWxsIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMgYW5kIHRyYW5zcG9ydCB5b3UgdG8gdGhlIGhlYXJ0IG9mIHRoZSBqdW5nbGUuXG5cbiAgICBPdXIgc2lnbmF0dXJlIGRpc2ggaXMgdGhlIE1lZXJrYXQgU2tld2VycywgdGVuZGVyIHN0cmlwcyBvZiBzZWFzb25lZCBtZWF0IGdyaWxsZWQgdG8gcGVyZmVjdGlvbi4gRm9yIHRob3NlIHNlZWtpbmcgYSBsaWdodGVyIG9wdGlvbiwgdHJ5IG91ciBSYWNjb29uIFNhbGFkLCBhIGZyZXNoIG1peCBvZiBncmVlbnMgdG9wcGVkIHdpdGggY3Jpc3B5IGJpdHMgb2YgcmFjY29vbiBtZWF0LiBGb3IgYSBoZWFydHkgbWVhbCwgd2Ugb2ZmZXIgb3VyIFZlbmlzb24gU3Rldywgc2xvdy1jb29rZWQgd2l0aCBoZXJicyBhbmQgc3BpY2VzIGZvciBhIHJpY2ggYW5kIHNhdm9yeSBmbGF2b3IuIEFuZCBmb3IgdGhlIGFkdmVudHVyb3VzIGZvb2RpZXMsIG91ciBCaXJkIEN1cnJ5IGlzIGEgc3BpY3kgYmxlbmQgb2YgdHJvcGljYWwgZmxhdm9ycyB0aGF0IHdpbGwgbGVhdmUgeW91IHdhbnRpbmcgbW9yZS5cbiAgICBcbiAgICBBcyB5b3UgZGluZSwga2VlcCBhbiBleWUgb3V0IGZvciBvdXIgcmVzaWRlbnQgbWVlcmthdHMgd2hvIHNjdXJyeSBhcm91bmQgdGhlIHJlc3RhdXJhbnQsIGFkZGluZyB0byB0aGUgYW1iaWFuY2Ugb2YgdGhlIGp1bmdsZS4gQW5kIGlmIHlvdSdyZSBsdWNreSwgeW91IG1heSBjYXRjaCBhIGdsaW1wc2Ugb2Ygb3RoZXIgd2lsZGxpZmUgcm9hbWluZyBvdXRzaWRlIHRoZSByZXN0YXVyYW50LlxuICAgIFxuICAgIEluIFRoZSBKdW5nbGUsIHdlIG9mZmVyIGEgdW5pcXVlIGRpbmluZyBleHBlcmllbmNlIHRoYXQgYmxlbmRzIHRoZSB3aWxkIGFuZCB0aGUgY3VsaW5hcnkuIFNvIGNvbWUgb24gZG93biBhbmQgbGV0IHVzIHRha2UgeW91IG9uIGEgZ2FzdHJvbm9taWMgam91cm5leSB0aHJvdWdoIHRoZSB3aWxkcy5gXG4gICAgXG4gICAgcmV0dXJuIGJvZHlIb2xkZXI7XG4gIH1cblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckNvbXBvbmVudCgpKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbWFnZUNvbXBvbmVudCgpKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChib2R5Q29tcG9uZW50KCkpO1xufSk7XG5cbmV4cG9ydCB7IGZpcnN0UGFnZUxvYWQgfTsiLCJsZXQgbWVudUFycmF5ID0gW107XG5cbmNsYXNzIG1lbnVJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgaW1hZ2VJRCwgYmx1cmIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmltYWdlSUQgPSBpbWFnZUlEO1xuICAgICAgICB0aGlzLmJsdXJiID0gYmx1cmI7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRvTWVudShuYW1lLCBwcmljZSwgaW1hZ2VJRCwgYmx1cmIpIHtcbiAgICAgICAgY29uc3QgbWVudU9iamVjdCA9IG5ldyBtZW51SXRlbShuYW1lLCBwcmljZSwgaW1hZ2VJRCwgYmx1cmIpO1xuICAgICAgICBtZW51QXJyYXkucHVzaChtZW51T2JqZWN0KTtcbiAgICAgIH1cbn07XG5cbm1lbnVJdGVtLmFkZFRvTWVudSgnTWVlcmthdCBTa2V3ZXJzJywgJyQxMicsICdNZWVya2F0SW1hZ2UnLCAnVHJ5IG91ciBzaWduYXR1cmUgZGlzaCBvZiBqdWljeSwgdGVuZGVyIE1lZXJrYXQgbWVhdCBza2V3ZXJlZCBhbmQgZ3JpbGxlZCB0byBwZXJmZWN0aW9uLiBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygd2lsZCByaWNlIGFuZCBqdW5nbGUtaW5zcGlyZWQgc3BpY2VzLCB0aGlzIGRpc2ggd2lsbCBoYXZlIHlvdXIgdGFzdGUgYnVkcyByb2FyaW5nLicpO1xubWVudUl0ZW0uYWRkVG9NZW51KCdCaXJkIEN1cnJ5JywgJyQzJywgJ0JpcmRJbWFnZScsICdBIGZsYXZvcmZ1bCBibGVuZCBvZiBzcGljZXMgYW5kIGhlcmJzLCBvdXIgQmlyZCBDdXJyeSBpcyBhIG11c3QtdHJ5IGZvciBhZHZlbnR1cm91cyBlYXRlcnMuIE1hZGUgd2l0aCB0ZW5kZXIsIHN1Y2N1bGVudCBwaWVjZXMgb2YgYmlyZCBtZWF0LCB0aGlzIGRpc2ggaXMgc2VydmVkIHdpdGggYSBzaWRlIG9mIHN0ZWFtZWQgdmVnZXRhYmxlcyBhbmQgZnJhZ3JhbnQgYmFzbWF0aSByaWNlLicpO1xubWVudUl0ZW0uYWRkVG9NZW51KCdWZW5pc29uIFN0ZXcnLCAnJDQwMCcsICdEZWVySW1hZ2UnLCAnRm9yIHRob3NlIGxvb2tpbmcgZm9yIGEgaGVhcnR5LCBzYXRpc2Z5aW5nIG1lYWwsIG91ciBWZW5pc29uIFN0ZXcgaXMgdGhlIHBlcmZlY3QgY2hvaWNlLiBNYWRlIHdpdGggdGVuZGVyIGNodW5rcyBvZiB2ZW5pc29uLCBmcmVzaCB2ZWdldGFibGVzLCBhbmQgYSByaWNoLCBzYXZvcnkgYnJvdGgsIHRoaXMgZGlzaCBpcyBzbG93LWNvb2tlZCB0byBwZXJmZWN0aW9uIGFuZCBzZXJ2ZWQgcGlwaW5nIGhvdC4nKTtcbm1lbnVJdGVtLmFkZFRvTWVudSgnUmFjY29vbiBTYWxhZCcsICdGcmVlJywgJ1JhY2Nvb25JbWFnZScsIFwiTG9va2luZyBmb3IgYSBsaWdodCwgcmVmcmVzaGluZyBzYWxhZD8gT3VyIFJhY2Nvb24gU2FsYWQgaXMgYSBkZWxpZ2h0ZnVsIG1peCBvZiBjcmlzcCBncmVlbnMsIGp1aWN5IGNoZXJyeSB0b21hdG9lcywgYW5kIHRlbmRlciBzdHJpcHMgb2YgcmFjY29vbiBtZWF0LiBUb3BwZWQgd2l0aCBhIHRhbmd5IGRyZXNzaW5nIGFuZCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygd2FybSBicmVhZCwgdGhpcyBzYWxhZCBpcyB0aGUgcGVyZmVjdCB3YXkgdG8gc2F0aXNmeSB5b3VyIGh1bmdlciB3aXRob3V0IHdlaWdoaW5nIHlvdSBkb3duLiBCZXN0IG9mIGFsbCwgaXQncyBvbiB0aGUgaG91c2UhXCIpO1xuXG5leHBvcnQgeyBtZW51QXJyYXkgfTsiLCJpbXBvcnQgeyBtZW51QXJyYXkgfSBmcm9tIFwiLi9tZW51QXJyYXlcIjtcbmltcG9ydCBNZWVya2F0SW1hZ2UgZnJvbSBcIi4vTWVlcmthdEltYWdlLmpwZ1wiO1xuaW1wb3J0IERlZXJJbWFnZSBmcm9tIFwiLi9EZWVySW1hZ2UuanBnXCI7XG5pbXBvcnQgQmlyZEltYWdlIGZyb20gXCIuL0JpcmRJbWFnZS5qcGdcIjtcbmltcG9ydCBSYWNjb29uSW1hZ2UgZnJvbSBcIi4vUmFjY29vbkltYWdlLmpwZ1wiO1xuXG5jb25zdCBtZW51UGFnZUxvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudERpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBmdW5jdGlvbiBoZWFkZXJDb21wb25lbnQoKSB7XG4gICAgY29uc3QgaGVhZGVySG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJIb2xkZXIuaWQgPSAnaGVhZGVySG9sZGVyJztcbiAgICBoZWFkZXJIb2xkZXIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgcmV0dXJuIGhlYWRlckhvbGRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvZHlDb21wb25lbnQoKSB7XG4gICAgY29uc3QgYm9keUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHlIb2xkZXIuaWQgPSAnYm9keUhvbGRlcic7XG4gICAgY29uc3QgbWVudUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVIb2xkZXIuaWQgPSAnbWVudUhvbGRlcic7XG5cbiAgICBmb3IgKGxldCBtZW51SXRlbSBvZiBtZW51QXJyYXkpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVDYXJkJyk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgc3dpdGNoKG1lbnVJdGVtLmltYWdlSUQpIHtcbiAgICAgICAgICBjYXNlICdNZWVya2F0SW1hZ2UnOlxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gTWVlcmthdEltYWdlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnRGVlckltYWdlJzpcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IERlZXJJbWFnZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0JpcmRJbWFnZSc6XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBCaXJkSW1hZ2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdSYWNjb29uSW1hZ2UnOlxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gUmFjY29vbkltYWdlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGltYWdlLnNyYyA9ICcuL0xpb25JbWFnZS5qcGcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnVOYW1lJyk7XG4gICAgICAgIG5hbWVQcmljZS5pbm5lclRleHQgPSBgJHttZW51SXRlbS5uYW1lfSBcbiAgICAgICAgLSAke21lbnVJdGVtLnByaWNlfWA7XG5cbiAgICAgICAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBibHVyYi5jbGFzc0xpc3QuYWRkKCdibHVyYicpO1xuICAgICAgICBibHVyYi50ZXh0Q29udGVudCA9IGAke21lbnVJdGVtLmJsdXJifWA7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobmFtZVByaWNlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChibHVyYik7XG4gICAgICAgIG1lbnVIb2xkZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIGJvZHlIb2xkZXIuYXBwZW5kQ2hpbGQobWVudUhvbGRlcik7XG4gICAgfVxuICAgIHJldHVybiBib2R5SG9sZGVyO1xuICB9XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyQ29tcG9uZW50KCkpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGJvZHlDb21wb25lbnQoKSk7XG59KTtcblxuZXhwb3J0IHsgbWVudVBhZ2VMb2FkIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGZpcnN0UGFnZUxvYWQgfSBmcm9tICcuL2ZpcnN0UGFnZUxvYWQnO1xuaW1wb3J0IHsgbWVudVBhZ2VMb2FkIH0gZnJvbSAnLi9tZW51UGFnZUxvYWQnO1xuaW1wb3J0IHsgY29udGFjdFBhZ2VMb2FkIH0gZnJvbSAnLi9jb250YWN0UGFnZUxvYWQnO1xuaW1wb3J0IHsgbWVudUFycmF5IH0gZnJvbSAnLi9tZW51QXJyYXknO1xuXG5maXJzdFBhZ2VMb2FkKCk7XG5jcmVhdGVCdXR0b25zKCk7XG5jb25zb2xlLmxvZyhtZW51QXJyYXkpO1xuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25zKCkgeyBcbmNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbmhlYWRlckRpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuaG9tZUJ1dHRvbi5pZCA9ICdIb21lJztcbmhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBob21lQnV0dG9uLmlkO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBlbHNlIHtcbiAgICAgICAgZmlyc3RQYWdlTG9hZCgpO1xuICAgICAgICBhY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG59fSk7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm1lbnVCdXR0b24uaWQgPSAnTWVudSc7XG5tZW51QnV0dG9uLnRleHRDb250ZW50ID0gbWVudUJ1dHRvbi5pZDtcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgZWxzZSB7XG4gICAgICAgIG1lbnVQYWdlTG9hZCgpO1xuICAgICAgICBhY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgfVxufSk7XG5cbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnRhY3RCdXR0b24uaWQgPSAnQ29udGFjdCc7XG5jb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gY29udGFjdEJ1dHRvbi5pZDtcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnRhY3RQYWdlTG9hZCgpO1xuICAgICAgICBhY3RpdmVCdXR0b24oY29udGFjdEJ1dHRvbik7XG4gICAgfVxufSk7XG5cbmhlYWRlckRpdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbmhlYWRlckRpdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbmhlYWRlckRpdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbn07XG5cbmZ1bmN0aW9uIGFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoICgoYnV0dG9uSXRlbSkgPT4ge1xuICAgICAgICBidXR0b25JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9