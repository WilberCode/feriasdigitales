!function(a){var n={};function t(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return a[e].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=a,t.c=n,t.d=function(a,n,e){t.o(a,n)||Object.defineProperty(a,n,{enumerable:!0,get:e})},t.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,n){if(1&n&&(a=t(a)),8&n)return a;if(4&n&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&n&&"string"!=typeof a)for(var c in a)t.d(e,c,function(n){return a[n]}.bind(null,c));return e},t.n=function(a){var n=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(n,"a",n),n},t.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)},t.p="/",t(t.s=0)}([function(a,n,t){t(1),a.exports=t(2)},function(a,n,t){"use strict";t.r(n);var e=function(a){for(var n="",t=0;t<=5;t++)n+='<div class="w-full py-2 loading mt-10" ></div><div class="w-34 py-2 loading mt-2 sm:w-56"> </div> ';a(".marca-card").on("click",(function(t){t.preventDefault();var e=Number(t.target.getBoundingClientRect().top.toFixed())-20;document.documentElement.style.setProperty("--offsettop-modal-marca","".concat(t.target.offsetTop-e+"px"));var c=!1;c||a("#marca-modal-info").html(' \n                <article class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10  placeholder " >\n                    <div>\n                        <div class="w-full py-32 loading mb-4" ></div> \n                        <div class="w-full py-35 loading" ></div> \n                    </div>\n                    <div>\n                        <div class="w-full sm:w-56 py-12 loading mb-12" ></div> \n                        '.concat(n,"\n                    </div>\n                </article>\n           ")),a("#marca-modal").toggleClass("marca-modal-active");var o=a(this).data("postidmarca"),i="",l=new Headers({"Content-Type":"application/json","X-WP-Nonce":ajax_marcas.nonce});fetch("".concat(ajax_marcas.url,"/?post_id=").concat(o),{method:"get",headers:l,credentials:"same-origin"}).then((function(a){return a.ok?a.json():"No información de la marca..."})).then((function(n){c=!0,n&&n.map((function(n){0==n.images?(a("#marca-modal-body").addClass("marca-modal-body-new"),i+='   \n                        <div  class=" relative mt-4"> \n                            <div  class="pl-0 "> \n                                <img  class=" w-32 mb-10 sm:w-40 md:w-48 m-auto modal-logo "  src="'.concat(n.thumbnail,'" alt="').concat(n.title,'">\n                                <div  class="marca-modal-content"> \n                                    ').concat(n.content,'\n                                </div>\n                            </div>\n                            <a href="').concat(n.link,'" class="text-base text-title absolute bottom-0 marca-modal-content-share -mb-8 hover:underline ">Compartir</a>\n                        </div>\n                            ')):i+='   \n                        <div  class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 relative">\n                            <div>   \n                                '.concat(0==n.images?"":n.images.map((function(a){return'<img class="mb-4 w-full" src="'.concat(a.marca_imagenes_individual,'" alt="').concat(n.title,'" />')})).join(""),'\n                            </div>  \n                            <div  class="pl-0 sm:pl-6 marca-modal-content--old "> \n                                <img  class=" w-34 mb-10 sm:w-40 md:w-54 "  src="').concat(n.thumbnail,'" alt="').concat(n.title,'">\n                                    ').concat(n.content,' \n                            </div>\n                            <a href="').concat(n.link,'" class="text-base text-title absolute bottom-0 left-0  -mb-7 hover:underline  "  >Compartir</a>\n                        </div>\n                            ')})),a("#marca-modal-info").html(i)}))})),a(".marca-modal-close").on("click",(function(n){a("#marca-modal").removeClass("marca-modal-active"),a("#marca-modal-info").html("")})),a("#marca-modal").on("click",(function(n){"marca-modal"==n.target.id&&(a("#marca-modal").removeClass("marca-modal-active"),a("#marca-modal-info").html(""))}))},c=function(a){a(".marca-category-filter > a").on("click",(function(n){n.preventDefault();var t=a(this).data("categorymarca"),c="",o=new Headers({"Content-Type":"application/json","X-WP-Nonce":ajax_marcas.nonce}),i="marca-todos"===a(this)[0].id?"":"?category=".concat(t);fetch("".concat(ajax_marcas.url,"/").concat(i),{method:"get",headers:o,credentials:"same-origin"}).then((function(a){return a.ok?a.json():"No hay marcas..."})).then((function(n){n.map((function(a){c+='   \n                                   <div class="marca-card" data-postidmarca="'.concat(a.id,'" >\n                                        <div  class="marca-card-image flex justify-center items-center h-56 sm:h-65 p-4 " >\n                                            <img  class="w-full" style="max-width: 140px;"  src=" ').concat(a.thumbnail,'" alt="').concat(a.link,'" >  \n                                        </div>\n                                        <h2  class="text-lg font-medium text-secondary-300 mt-2 " >Ver Regalos</h2>\n                                    </div>  \n                                  ')})),a("#marca-grid").html(c),e(a)}))}))};jQuery((function(a){c(a)}));var o=function(a){var n=document.getElementById.bind(document),t=n("mobile-nav-wrap"),e=n("nav-toggle");a("#nav-toggle").on("click",(function(){e.classList.toggle("nav-toggle-active"),t.classList.toggle("nav-active")})),a("#mobile-menu li:not(.menu-item-has-children)").on("click",(function(){e.classList.toggle("nav-toggle-active"),t.classList.toggle("nav-active")})),a("#mobile-menu li.menu-item-has-children a").on("click",(function(n){a(".menu-item-has-children .sub-menu").toggleClass("sub-menu-active")}))};jQuery.noConflict();jQuery((function(a){a(document).ready((function(){o(a),e(a)}))}))},function(a,n){}]);