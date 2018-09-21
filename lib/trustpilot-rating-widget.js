(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("trustpilot-rating-widget", [], factory);
	else if(typeof exports === 'object')
		exports["trustpilot-rating-widget"] = factory();
	else
		root["trustpilot-rating-widget"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/styles/index.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/styles/index.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-container {\n  width: 400px;\n  height: 200px;\n  font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  background-color: #fff; }\n  .widget-container .hide {\n    display: none !important; }\n  .widget-container .total {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    height: 100%; }\n    .widget-container .total > div {\n      margin: 5px 0;\n      flex-grow: 1;\n      padding: 0 5px; }\n    .widget-container .total .logo img {\n      height: 80px; }\n    .widget-container .total .score {\n      font-size: 30px; }\n    .widget-container .total .stars img {\n      height: 30px; }\n    .widget-container .total .toggle-mode {\n      height: 20;\n      font-size: 14px; }\n      .widget-container .total .toggle-mode span {\n        color: #000;\n        cursor: pointer; }\n        .widget-container .total .toggle-mode span:hover {\n          color: #00b67a; }\n  .widget-container .slide {\n    display: flex;\n    flex-direction: column;\n    height: 100%; }\n    .widget-container .slide > div {\n      margin: 5px 0;\n      padding: 0 5px; }\n    .widget-container .slide .header {\n      display: flex;\n      align-items: center;\n      min-height: 30px;\n      max-height: 30px; }\n    .widget-container .slide .stars {\n      margin-right: 5px; }\n      .widget-container .slide .stars img {\n        height: 20px; }\n    .widget-container .slide .autor {\n      flex-grow: 1; }\n    .widget-container .slide .text {\n      overflow-y: auto;\n      flex-grow: 3;\n      min-height: 50px; }\n      .widget-container .slide .text .title {\n        font-weight: bold; }\n      .widget-container .slide .text .text-body {\n        text-align: justify; }\n    .widget-container .slide .navigation {\n      display: flex; }\n      .widget-container .slide .navigation img {\n        width: 20px; }\n      .widget-container .slide .navigation button {\n        cursor: pointer;\n        border: none;\n        background-color: transparent; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reviews = _interopRequireDefault(__webpack_require__(/*! ./reviews */ "./src/reviews.js"));

__webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");

var _template = _interopRequireDefault(__webpack_require__(/*! ./template.html */ "./src/template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  document.addEventListener("DOMContentLoaded", function (e) {
    // create html content
    var mountPoint = document.querySelector('.trustpilot-rating');

    if (!mountPoint) {
      console.error('Sorry, could not find div with \'trustpilot-rating\' class.');
    }

    mountPoint.innerHTML = _template.default; // main slide

    var reviewsCountSpan = document.querySelector('.see-reviews');
    reviewsCountSpan.innerHTML = "See ".concat(_reviews.default.reviews.length, " review").concat(_reviews.default.reviews.length > 1 ? 's' : '');
    var avgRating = Math.round(_reviews.default.reviews.reduce(function (acc, x) {
      return acc + +x.starRating;
    }, 0) / _reviews.default.reviews.length * 10) / 10;
    var scoreDiv = document.querySelector('.score');
    scoreDiv.innerHTML = avgRating;
    var mainLogoRating = document.querySelector('.stars img');
    mainLogoRating.src = getStarsImg(Math.round(avgRating)); // toggle slides

    var showReviewsLink = document.querySelector('.see-reviews');
    var mainView = document.querySelector('.total');
    var slider = document.querySelector('.slide');
    showReviewsLink.addEventListener('click', function (e) {
      mainView.classList.add('hide');
      slider.classList.remove('hide');
      loadSlide(_reviews.default.reviews[0]);
    });
    document.querySelector('body').addEventListener('click', function (e) {
      mainView.classList.remove('hide');
      slider.classList.add('hide');
    });
    document.querySelector('.widget-container').addEventListener('click', function (e) {
      e.stopPropagation();
    }); // slides navigation

    var currentSlide = 0;
    var maxSlides = _reviews.default.reviews.length - 1;
    var leftSlide = document.querySelector('.left-nav-button');
    leftSlide.addEventListener('click', function (e) {
      currentSlide--;

      if (currentSlide < 0) {
        currentSlide = maxSlides;
      }

      loadSlide(_reviews.default.reviews[currentSlide]);
    });
    var rightSlide = document.querySelector('.right-nav-button');
    rightSlide.addEventListener('click', function (e) {
      currentSlide++;

      if (currentSlide > maxSlides) {
        currentSlide = 0;
      }

      loadSlide(_reviews.default.reviews[currentSlide]);
    });

    function loadSlide(review) {
      var author = document.querySelector('.slide .autor');
      author.innerHTML = review.fullName;
      var title = document.querySelector('.slide .text .title');
      title.innerHTML = "\"".concat(review.reviewTitle, "\"");
      var text = document.querySelector('.slide .text .text-body');
      text.innerHTML = review.reviewBody;
      var starsImg = document.querySelector('.slide .stars img');
      starsImg.src = getStarsImg(review.starRating);
    }

    function getStarsImg(starsCount) {
      return "http://cdn.trustpilot.net/brand-assets/1.7.0/stars-".concat(starsCount >= 0 && starsCount <= 5 ? starsCount : 0, ".svg");
    }
  });
})();

/***/ }),

/***/ "./src/reviews.js":
/*!************************!*\
  !*** ./src/reviews.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "reviews": [{
    "firstName": "Simon",
    "lastName": "Lock",
    "fullName": "Simon Lock",
    "location": "Kolding",
    "reviewTitle": "Super quality.. I will show here again!",
    "reviewBody": "Super nice quality, fast devilery, good prices. I will shop here again!",
    "starRating": "5"
  }, {
    "firstName": "Gav",
    "lastName": "",
    "fullName": "Gav",
    "location": "",
    "reviewTitle": "Princely Sum",
    "reviewBody": "A decent local curry house in Faversham, Kent known for its Elvis nights.",
    "starRating": "4"
  }, {
    "firstName": "Justin",
    "lastName": "Wright",
    "fullName": "Justin Wright",
    "location": "London, GB",
    "reviewTitle": "Good Services",
    "reviewBody": "A decent place to introduce your taste buds to fiery Indian fare",
    "starRating": "3"
  }, {
    "firstName": "Erika",
    "lastName": "Wolfe",
    "fullName": "Erika Wolfe",
    "location": "Gothenburg, SE",
    "reviewTitle": "Nightmare experience - no product, no communication, no refund; improved by rapid resolution",
    "reviewBody": "In early 2012, I ordered a set of chairs from Infurn. I thought that by ordering in March, I would have what I needed by November, certainly. I wanted the perfect chairs for my house, and really did not NEED them before the annual Thanksgiving dinner (the only time of year I have a need for a whole lot of chairs at one time). I played it safe, I thought, by ordering so far in advance. Week after week, month after month, Infurn's website kept updating the status of the order so that the chairs' arrival would be further and further in the distant future. Finally when the week of Thanksgiving arrived, and I had had contact with their customer service in early November (and their only clueless reply was to say, 'We had manufacturing problems; let's hope the chairs arrive this week as scheduled.'), I still had no chairs, had to go out and buy some other chairs and still had no clue when the Infurn chairs might arrive. At some point I finally just requested a refund because Infurn could neither deliver my chairs nor give me a solid date about when I might receive them when I inquired about a delivery date. They finally offered me a refund - which I accepted on 14 December 2012.",
    "starRating": "2"
  }, {
    "firstName": "Hugo",
    "lastName": "Beja",
    "fullName": "Hugo Beja",
    "location": "Praia Da Barra, PT",
    "reviewTitle": "FRAUD",
    "reviewBody": "I've been patiently waiting for a miracle to happen with our order AU-316084, 12 Chairs!! First the delays, lots and lots of delays with no apparent reason... after they send just 1/2 of the order and say it's all... So we bought 'Pairs' of chairs... we paid for 5 PAIRS and received 5 chairs!!! The other 2, the rocket chairs we never receive....Communication ZERO, they simply ignore the e-mails... when they did respond they asked us to prove our order to be pairs!!! LOL and just stopped communicating... their website is constantly down... probably to make lose interest and rest your forces to recover what you paid for!!",
    "starRating": "1"
  }]
};
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/styles/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-container\">\r\n    <div class=\"total\">\r\n        <div class=\"logo\">\r\n            <img src=\"http://cdn.trustpilot.net/brand-assets/1.7.0/logo-black.svg\" alt=\"Trustpilot logo\">\r\n        </div>\r\n        <div class=\"score\">\r\n        </div>\r\n        <div class=\"stars\">\r\n            <img src=\"http://cdn.trustpilot.net/brand-assets/1.7.0/stars-5.svg\" alt=\"Stars logo\">\r\n        </div>\r\n        <div class=\"toggle-mode\">\r\n            <span class=\"see-reviews\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"slide hide\">\r\n        <div class=\"header\">\r\n            <div class=\"stars\">\r\n                <img src=\"http://cdn.trustpilot.net/brand-assets/1.7.0/stars-4.svg\" alt=\"User rating\">\r\n            </div>\r\n            <div class=\"autor\">\r\n            </div>\r\n            <div class=\"navigation\">\r\n                <button class=\"left-nav-button\">\r\n                    <img alt=\"Left navigation arrow\" src=\"https://cdn.rawgit.com/oleg531/image-holder/44e88775/left.svg\">\r\n                </button>\r\n                <button class=\"right-nav-button\">\r\n                    <img alt=\"Right navigation arrow\" src=\"https://cdn.rawgit.com/oleg531/image-holder/44e88775/right.svg\">\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"text\">\r\n            <p class=\"title\">\r\n            </p>\r\n            <p class=\"text-body\"></p>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ })

/******/ });
});
//# sourceMappingURL=trustpilot-rating-widget.js.map