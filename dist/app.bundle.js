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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/mgorski/www/fable/src/js/app.js: Unexpected token (10:2)\\n\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39mrender(\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 10 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33mFable\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m  $app\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:7012:17)\\n    at Parser.unexpected (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:8405:16)\\n    at Parser.parseExprAtom (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9661:20)\\n    at Parser.parseExprSubscripts (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9237:23)\\n    at Parser.parseMaybeUnary (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9217:21)\\n    at Parser.parseExprOps (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9083:23)\\n    at Parser.parseMaybeConditional (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9056:23)\\n    at Parser.parseMaybeAssign (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9015:21)\\n    at Parser.parseExprListItem (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:10331:18)\\n    at Parser.parseCallExpressionArguments (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9434:22)\\n    at Parser.parseSubscript (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9342:29)\\n    at Parser.parseSubscripts (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9258:19)\\n    at Parser.parseExprSubscripts (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9247:17)\\n    at Parser.parseMaybeUnary (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9217:21)\\n    at Parser.parseExprOps (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9083:23)\\n    at Parser.parseMaybeConditional (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9056:23)\\n    at Parser.parseMaybeAssign (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:9015:21)\\n    at Parser.parseExpression (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:8965:23)\\n    at Parser.parseStatementContent (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:10819:23)\\n    at Parser.parseStatement (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:10690:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:11266:25)\\n    at Parser.parseBlockBody (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:11253:10)\\n    at Parser.parseTopLevel (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:10621:10)\\n    at Parser.parse (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:12131:10)\\n    at parse (/Users/mgorski/www/fable/node_modules/@babel/parser/lib/index.js:12182:38)\\n    at parser (/Users/mgorski/www/fable/node_modules/@babel/core/lib/transformation/normalize-file.js:187:34)\\n    at normalizeFile (/Users/mgorski/www/fable/node_modules/@babel/core/lib/transformation/normalize-file.js:113:11)\\n    at runSync (/Users/mgorski/www/fable/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/mgorski/www/fable/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/mgorski/www/fable/node_modules/@babel/core/lib/transform.js:34:34)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ })

/******/ });