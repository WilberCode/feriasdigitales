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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/posts */ "./assets/js/components/posts.js");
/* harmony import */ var _components_modalMarca__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modalMarca */ "./assets/js/components/modalMarca.js");
var $ = jQuery.noConflict();
 // import menuMobile from  './components/menuMobile'

 // function redirectPage(){
//     return window.location.replace('https://feriasdigitales.pe/')
// }
// redirectPage()
// function activeCategory(){
//     $('.marca-category-filter').on('click',function(e){
//         $('.marca-category-filter').each(function(u) {  
//             $(this).removeClass('marca-category-active')  
//         });  
//         $(this).toggleClass('marca-category-active') 
//     })
// }

jQuery(function ($) {
  $(document).ready(function () {
    // menuMobile($)       // Menu Mobile: Show menu and hide   
    Object(_components_modalMarca__WEBPACK_IMPORTED_MODULE_1__["default"])($); // Active Modal of marca   
  });
});

/***/ }),

/***/ "./assets/js/components/filterMarcas.js":
/*!**********************************************!*\
  !*** ./assets/js/components/filterMarcas.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalMarca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalMarca */ "./assets/js/components/modalMarca.js");


var filterMarcas = function filterMarcas($) {
  $('.marca-category-filter > a').on('click', function (e) {
    e.preventDefault();
    var category = $(this).data('categorymarca');
    var html_marca = '';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'X-WP-Nonce': ajax_marcas.nonce
    });
    var category_url = $(this)[0].id === 'marca-todos' ? '' : "?category=".concat(category);
    fetch("".concat(ajax_marcas.url, "/").concat(category_url), {
      method: 'get',
      headers: headers,
      credentials: 'same-origin'
    }).then(function (response) {
      return response.ok ? response.json() : 'No hay marcas...';
    }).then(function (json_response) {
      json_response.map(function (post) {
        html_marca += "   \n                                   <div class=\"marca-card\" data-postidmarca=\"".concat(post.id, "\" >\n                                        <div  class=\"marca-card-image flex justify-center items-center h-56 sm:h-65 p-4 \" >\n                                            <img  class=\"w-full\" style=\"max-width: 140px;\"  src=\" ").concat(post.thumbnail, "\" alt=\"").concat(post.link, "\" >  \n                                        </div>\n                                        <h2  class=\"text-lg font-medium text-secondary-300 mt-2 \" >Ver Regalos</h2>\n                                    </div>  \n                                  ");
      });
      $('#marca-grid').html(html_marca); // Modal

      Object(_modalMarca__WEBPACK_IMPORTED_MODULE_0__["default"])($);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filterMarcas);

/***/ }),

/***/ "./assets/js/components/modalMarca.js":
/*!********************************************!*\
  !*** ./assets/js/components/modalMarca.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var modalMarca = function modalMarca($) {
  $('.marca-card').on('click', function (e) {
    e.preventDefault();
    document.documentElement.style.setProperty('--offsettop-modal-marca', "".concat(e.target.offsetTop + 'px'));
    var modalActive = false;

    if (!modalActive) {
      $('#marca-modal-info').html(" \n                <article class=\"grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10  placeholder \" >\n                    <div>\n                        <div class=\"w-full py-32 bg-gray-200 loading mb-4\" ></div> \n                        <div class=\"w-full py-35 bg-gray-200 loading\" ></div> \n                    </div>\n                    <div>\n                        <div class=\"w-full sm:w-56 py-12 bg-gray-200 loading\" ></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-12\" ></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-2 sm:w-56 \" ></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-10\" ></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-2 sm:w-56 \" ></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-10\" ></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-2 sm:w-56  \"></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-10\" ></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-2 sm:w-56 \" ></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-10\" ></div>\n                        <div class=\"w-full py-2 bg-gray-200 loading mt-2 sm:w-56  \"></div> \n                    </div>\n                </article>\n           ");
    }

    $('#marca-modal').toggleClass('marca-modal-active');
    var postIdMarca = $(this).data('postidmarca');
    var html_marca_modal_info = '';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'X-WP-Nonce': ajax_marcas.nonce
    });
    fetch("".concat(ajax_marcas.url, "/?post_id=").concat(postIdMarca), {
      method: 'get',
      headers: headers,
      credentials: 'same-origin'
    }).then(function (response) {
      return response.ok ? response.json() : 'No información de la marca...';
    }).then(function (json_response) {
      modalActive = true;

      if (json_response) {
        json_response.map(function (post) {
          html_marca_modal_info += "   \n                    <div  class=\"grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10\">\n                        <div>   \n                            ".concat(post.images == null ? '' : post.images.map(function (image) {
            return "<img class=\"mb-4\" src=\"".concat(image.marca_imagenes_individual, "\" />");
          }).join(''), "\n                        </div>  \n                        <div  class=\"pl-0 sm:pl-6\"> \n                            <img  class=\" w-34 mb-10 sm:w-40 md:w-54 \"  src=\"").concat(post.thumbnail, "\" alt=\"").concat(post.title, "\">\n                                ").concat(post.content, " \n                        </div>\n                        \n                    </div>\n                        ");
        });
      }

      $('#marca-modal-info').html(html_marca_modal_info);
    });
  });
  $('.marca-modal-close').on('click', function (e) {
    $('#marca-modal').removeClass('marca-modal-active');
    $('#marca-modal-info').html('');
  });
  $('#marca-modal').on('click', function (e) {
    var marcaModalID = e.target.id;

    if (marcaModalID == 'marca-modal') {
      $('#marca-modal').removeClass('marca-modal-active');
      $('#marca-modal-info').html('');
    } else {
      return;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modalMarca);

/***/ }),

/***/ "./assets/js/components/posts.js":
/*!***************************************!*\
  !*** ./assets/js/components/posts.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterMarcas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterMarcas */ "./assets/js/components/filterMarcas.js");
 //fetch all posts with ajax

jQuery(function ($) {
  Object(_filterMarcas__WEBPACK_IMPORTED_MODULE_0__["default"])($);
});

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\wordpress\feriasdigitales\wp-content\themes\feriasdigitales\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\feriasdigitales\wp-content\themes\feriasdigitales\assets\scss\app.scss */"./assets/scss/app.scss");


/***/ })

/******/ });