!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3)},function(e,t,n){},function(e,t){if(window.innerWidth<767)new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,enabled:!0},320:{slidesPerView:1.3,enabled:!0},360:{slidesPerView:1.47,enabled:!0},390:{slidesPerView:1.6,enabled:!0},420:{slidesPerView:2,enabled:!0},768:{enabled:!1}},pagination:{el:".swiper-pagination"}});window.innerWidth>767&&document.querySelector(".table-prices").classList.remove("swiper-wrapper");var n=document.querySelector(".button-read-more--brends");n.addEventListener("click",(function(){var e=n.querySelector(".button-read-more__icon--brends"),t=n.querySelector(".button-read-more__text--brends"),r=document.querySelectorAll('[data-hidden="tablet"]'),o=document.querySelectorAll('[data-hidden="desktop"]');r.forEach((function(e){e.classList.toggle("a-menu-brands--hidden")})),o.forEach((function(e){e.classList.toggle("a-menu-brands--hiddenDesktop")})),e.classList.contains("button-read-more__icon--hidden")?(t.textContent="Показать все",e.classList.remove("button-read-more__icon--hidden")):(t.textContent="Скрыть",e.classList.add("button-read-more__icon--hidden"))}));var r=document.querySelector(".button-read-more--technique");r.addEventListener("click",(function(){var e=r.querySelector(".button-read-more__icon--technique"),t=r.querySelector(".button-read-more__text--technique");document.querySelectorAll('[data-hidden="hidden"]').forEach((function(e){e.classList.toggle("a__block--technique--hidden")})),e.classList.contains("button-read-more__icon--hidden-technique")?(t.textContent="Показать все",e.classList.remove("button-read-more__icon--hidden-technique")):(t.textContent="Скрыть",e.classList.add("button-read-more__icon--hidden-technique"))}));var o=document.querySelector(".body__sidebar--close"),i=document.querySelector(".button-item-sidebar--burger-close");window.innerWidth<1365&&(document.querySelector(".button-menu__burger").addEventListener("click",(function(){o.classList.remove("body__sidebar--close")})),i.addEventListener("click",(function(){o.classList.add("body__sidebar--close")})));for(var c=document.querySelectorAll(".button-menu__call"),d=document.querySelector(".request-call"),l=document.querySelector(".feedback"),s=0;s<c.length;s++)c[s].addEventListener("click",(function(){d.classList.add("request-call--visible")}));for(var a=document.querySelectorAll(".burger-close"),u=0;u<a.length;u++)a[u].addEventListener("click",(function(){d.classList.remove("request-call--visible"),l.classList.remove("feedback--visible")}));for(var b=document.querySelectorAll(".fogOfWar"),f=0;f<b.length;f++)b[f].addEventListener("click",(function(){l.classList.remove("feedback--visible"),o.classList.add("body__sidebar--close"),d.classList.remove("request-call--visible")}));for(var m=document.querySelectorAll(".button-menu__chat"),v=0;v<m.length;v++)m[v].addEventListener("click",(function(){l.classList.add("feedback--visible")}))}]);
//# sourceMappingURL=bundle.js.map