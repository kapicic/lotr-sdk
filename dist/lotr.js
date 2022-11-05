!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.eTrack=e():t.eTrack=e()}(self,(()=>(()=>{var t={207:(t,e,n)=>{"use strict";n.r(e),n.d(e,{Lotr:()=>S});var r=function(){function t(t){this.apiKey=t,this.baseUrl="https://the-one-api.dev",this.apiVersion="v2"}return t.prototype.config=function(t){this.apiKey=t.apiKey},t.prototype.get=function(t){return e=this,n=void 0,o=function(){var e;return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(n){switch(n.label){case 0:return[4,fetch(this.formatUrl(t),this.getConfig())];case 1:if(!(e=n.sent()).ok)throw new Error(e.statusText);return[4,e.json()];case 2:return[2,n.sent()]}}))},new((r=void 0)||(r=Promise))((function(t,i){function c(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(c,u)}a((o=o.apply(e,n||[])).next())}));var e,n,r,o},t.prototype.getConfig=function(){return{headers:{Authorization:"Bearer ".concat(this.apiKey)}}},t.prototype.formatUrl=function(t){return"".concat(this.baseUrl,"/").concat(this.apiVersion,"/").concat(t)},t}();function o(t){var e,n=new URLSearchParams;!function(t,e){e.page&&t.append("page",e.page.toString()),e.limit&&t.append("limit",e.limit.toString()),e.offset&&t.append("offset",e.offset.toString())}(n,t),function(t,e){e&&t.append("sort",function(t){var e=t.by,n=t.direction;return"".concat(e,":").concat(n)}(e))}(n,t.sort);var r=n.toString();return(null===(e=t.filters)||void 0===e?void 0:e.length)?function(t,e){var n=e.reduce((function(t,e){return t+e}),"");return t?"".concat(t,"&").concat(n):"".concat(n)}(r,t.filters):r}var i,c=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))},u=function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},a=function(){function t(t){this.client=t}return t.prototype.getById=function(t){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.client.get("".concat(this.getResourceName(),"/").concat(t))];case 1:return[2,e.sent()]}}))}))},t.prototype.getList=function(t){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return t?[3,2]:[4,this.client.get(this.getResourceName())];case 1:case 3:return[2,e.sent()];case 2:return[4,this.client.get("".concat(this.getResourceName(),"?").concat(o(t)))]}}))}))},t}(),s=(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resourceUrl="book",e}return s(e,t),e.prototype.getResourceName=function(){return this.resourceUrl},e.prototype.getChapters=function(t,e){return n=this,r=void 0,c=function(){var n;return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(r){switch(r.label){case 0:return n="".concat(this.resourceUrl,"/").concat(t,"/chapter").concat(e?"?".concat(o(e)):""),[4,this.client.get(n)];case 1:return[2,r.sent()]}}))},new((i=void 0)||(i=Promise))((function(t,e){function o(t){try{a(c.next(t))}catch(t){e(t)}}function u(t){try{a(c.throw(t))}catch(t){e(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(o,u)}a((c=c.apply(n,r||[])).next())}));var n,r,i,c},e}(a),f=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resourceUrl="character",e}return f(e,t),e.prototype.getResourceName=function(){return this.resourceUrl},e.prototype.getCharacterQuotes=function(t,e){return n=this,r=void 0,c=function(){var n;return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(r){switch(r.label){case 0:return n="".concat(this.resourceUrl,"/").concat(t,"/quotes").concat(e?"?".concat(o(e)):""),[4,this.client.get(n)];case 1:return[2,r.sent()]}}))},new((i=void 0)||(i=Promise))((function(t,e){function o(t){try{a(c.next(t))}catch(t){e(t)}}function u(t){try{a(c.throw(t))}catch(t){e(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(o,u)}a((c=c.apply(n,r||[])).next())}));var n,r,i,c},e}(a),h=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resourceUrl="movie",e}return h(e,t),e.prototype.getResourceName=function(){return this.resourceUrl},e.prototype.getQuotes=function(t,e){return n=this,r=void 0,c=function(){var n;return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(r){switch(r.label){case 0:return n="".concat(this.resourceUrl,"/").concat(t,"/quote").concat(e?"?".concat(o(e)):""),[4,this.client.get(n)];case 1:return[2,r.sent()]}}))},new((i=void 0)||(i=Promise))((function(t,e){function o(t){try{a(c.next(t))}catch(t){e(t)}}function u(t){try{a(c.throw(t))}catch(t){e(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(o,u)}a((c=c.apply(n,r||[])).next())}));var n,r,i,c},e}(a),v=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resourceUrl="quote",e}return v(e,t),e.prototype.getResourceName=function(){return this.resourceUrl},e}(a),d=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resourceUrl="chapter",e}return d(e,t),e.prototype.getResourceName=function(){return this.resourceUrl},e}(a),g=function(){function t(t){this.field=t,this.value=""}return t.prototype.matches=function(t,e){var n=e?"!=":"=";return this.value="".concat(this.field).concat(n).concat(t),this},t.prototype.includes=function(t,e){var n=e?"!=":"=";return this.value="".concat(this.field).concat(n).concat(t),this},t.prototype.exists=function(t){var e=t?"!":"";return this.value="".concat(e).concat(this.field),this},t.prototype.regex=function(t,e){var n=e?"!=":"=";return this.value="".concat(this.field).concat(n).concat(t),this},t.prototype.greaterThan=function(t,e){var n=e?">=":">";return this.value="".concat(this.field).concat(n).concat(t),this},t.prototype.lesserThan=function(t,e){var n=e?"<=":"<";return this.value="".concat(this.field).concat(n).concat(t),this},t.prototype.toString=function(){return this.value},t}(),m=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))},x=function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},S=function(){function t(t){this.apiKey=t,this.client=new r(t),this.bookService=new l(this.client),this.movieService=new y(this.client),this.characterService=new p(this.client),this.quoteService=new b(this.client),this.chapterService=new w(this.client)}return t.prototype.config=function(t){this.client.config(t)},t.prototype.books=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){switch(e.label){case 0:return[4,this.bookService.getList(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.book=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){switch(e.label){case 0:return[4,this.bookService.getById(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.bookChapters=function(t,e){return m(this,void 0,void 0,(function(){return x(this,(function(n){switch(n.label){case 0:return[4,this.bookService.getChapters(t,e)];case 1:return[2,n.sent()]}}))}))},t.prototype.movies=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){switch(e.label){case 0:return[4,this.movieService.getList(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.movie=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){return[2,this.movieService.getById(t)]}))}))},t.prototype.movieQuotes=function(t,e){return m(this,void 0,void 0,(function(){return x(this,(function(n){return[2,this.movieService.getQuotes(t,e)]}))}))},t.prototype.characters=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){switch(e.label){case 0:return[4,this.characterService.getList(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.character=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){return[2,this.characterService.getById(t)]}))}))},t.prototype.characterQuotes=function(t,e){return m(this,void 0,void 0,(function(){return x(this,(function(n){return[2,this.characterService.getCharacterQuotes(t,e)]}))}))},t.prototype.quotes=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){switch(e.label){case 0:return[4,this.quoteService.getList(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.quote=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){return[2,this.quoteService.getById(t)]}))}))},t.prototype.chapters=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){switch(e.label){case 0:return[4,this.chapterService.getList(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.chapter=function(t){return m(this,void 0,void 0,(function(){return x(this,(function(e){return[2,this.chapterService.getById(t)]}))}))},t.prototype.filter=function(t){return new g(t)},t}()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{var t=r,e=n(207);t.LotrClient=e.Lotr})(),r})()));