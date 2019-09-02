!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ssr-pagination",[],t):"object"==typeof exports?exports["ssr-pagination"]=t():e["ssr-pagination"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=1)}([function(e,t,a){"use strict";t.a={name:"Pagination",props:{total:{type:Number,default:0},pageSize:{type:Number,default:10},pagerCount:{type:Number,default:function(e){if(!e||isNaN(e)||e<5||e>21)return 7;for(var t=7,a=5;a<=21;a++)a%2!=0&&e>=a&&e<a+2&&(t=a);return t}},currentPage:{type:Number,default:1},pageCount:{type:Number,default:0},firstLink:{type:String,default:""},link:{type:String,default:""},linkPath:{type:String,default:"/page"},useALink:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},confirmBtn:{type:Boolean,default:!1}},data:function(){return{nowPage:1,redirectNum:1}},watch:{currentPage:function(e){this.nowPage=e,this.redirectNum=e}},computed:{totalPage:function(){return this.pageCount>0?this.pageCount:Math.ceil(this.total/this.pageSize)},jumpNum:function(){return(this.pagerCount+3)/2},addNum:function(){return(this.pagerCount-3)/2},pageList:function(){var e=[];if(this.totalPage<=4)return[];if(this.totalPage>4&&this.totalPage<=this.pagerCount+1)e=Array.from(new Array(this.totalPage-1).keys()).slice(3);else if(this.totalPage>this.pagerCount+1)if(this.nowPage<this.jumpNum)e=Array.from(new Array(this.pagerCount).keys()).slice(3);else if(this.nowPage>=this.jumpNum&&this.nowPage<this.totalPage-this.addNum-1){var t=this.nowPage+this.addNum;e=Array.from(new Array(t+1).keys()).slice(this.nowPage-this.addNum)}else if(this.nowPage>=this.totalPage-this.addNum-1){var a=this.totalPage,n=2*this.addNum+1;e=Array.from(new Array(a-1).keys()).slice(this.totalPage-n)}return e}},methods:{prevPage:function(){if(this.nowPage<=1)return!1;this.nowPage-=1,this.redirectNum=this.nowPage,this.$emit("changePager",this.nowPage)},changePage:function(e){e>0&&(this.nowPage=e,this.redirectNum=e,this.$emit("changePager",this.nowPage))},jumpPage:function(e){var t=String(e.target.value);if(t.charAt(0)>=1){var a=parseInt(t);a<=this.totalPage?this.redirectNum=a:this.redirectNum=this.totalPage}else this.redirectNum=1;this.nowPage=Number(this.redirectNum),this.$emit("changePager",this.nowPage)},nextPage:function(){if(this.nowPage>=this.totalPage)return!1;this.nowPage+=1,this.redirectNum=this.nowPage,this.$emit("changePager",this.nowPage)},jumpFivePage:function(e){"prev"===e?(this.nowPage-=this.pagerCount-2,this.nowPage<=1&&(this.nowPage=1)):(this.nowPage+=this.pagerCount-2,this.nowPage>=this.totalPage&&(this.nowPage=this.totalPage)),this.redirectNum=this.nowPage,this.$emit("changePager",this.nowPage)}},created:function(){this.nowPage=this.currentPage,this.redirectNum=this.nowPage}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2);n.a.install=function(e){e.component("Pagination",n.a)},"undefined"!=typeof window&&window.Vue&&n.a.install(window.Vue),t.default=n.a},function(e,t,a){"use strict";function n(e){a(3)}var r=a(0),o=a(9),i=a(8),s=n,u=i(r.a,o.a,!1,s,"data-v-67573e9e",null);t.a=u.exports},function(e,t,a){var n=a(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(6)("00cc5d84",n,!0,{})},function(e,t,a){t=e.exports=a(5)(!1),t.push([e.i,'.ssr-pager[data-v-67573e9e]{padding:40px 0;text-align:center;moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-khtml-user-select:none;user-select:none;font-size:14px;color:#606266}.ssr-pager .pager-box[data-v-67573e9e]{display:inline-block}.ssr-pager .pager-box .btn[data-v-67573e9e]{display:inline-block;border:none;background-color:#f4f4f5;height:28px;line-height:28px;border-radius:2px;cursor:pointer;padding:0 10px;color:#606266}.ssr-pager .pager-box .btn[data-v-67573e9e]:hover{color:#ff6900}.ssr-pager .pager-box .btn.disabled[data-v-67573e9e]{cursor:not-allowed;color:#c0c4cc}.ssr-pager .pager-box .btn.disabled[data-v-67573e9e]:hover{color:#c0c4cc}.ssr-pager .pager-box .pager-ul[data-v-67573e9e]{display:inline-block;margin:0 4px;vertical-align:top}.ssr-pager .pager-box .pager-ul .number[data-v-67573e9e]{display:inline-block;vertical-align:top;height:28px;min-width:30px;line-height:28px;margin:0 5px;box-sizing:border-box;text-align:center;background-color:#f4f4f5;color:#606266;border-radius:2px;cursor:pointer}.ssr-pager .pager-box .pager-ul .number.point[data-v-67573e9e]{line-height:20px;position:relative}.ssr-pager .pager-box .pager-ul .number.point[data-v-67573e9e]:hover{color:#ff6900}.ssr-pager .pager-box .pager-ul .number.point[data-v-67573e9e]:hover:before{content:"<<";position:absolute;min-width:30px;height:100%;left:0;line-height:28px;background-color:#f4f4f5}.ssr-pager .pager-box .pager-ul .number.point:hover.point-next[data-v-67573e9e]:before{content:">>"}.ssr-pager .pager-box .pager-ul .number.active[data-v-67573e9e]{background-color:#ff6900;color:#fff}.ssr-pager .pager-box .pager-ul .number.active[data-v-67573e9e]:hover{color:#fff;cursor:text}.ssr-pager .pager-box .pager-ul .number[data-v-67573e9e]:hover{color:#ff6900}.ssr-pager .pager-box .pager-jump[data-v-67573e9e]{display:inline-block;margin:0 10px 0 30px}.ssr-pager .pager-box .pager-jump .jump-input[data-v-67573e9e]{width:50px;-webkit-appearance:none;-moz-appearance:textfield;background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;text-align:center;display:inline-block;font-size:inherit;height:28px;padding:0 3px;line-height:28px;outline:0;transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.ssr-pager input[data-v-67573e9e]::-webkit-inner-spin-button,.ssr-pager input[data-v-67573e9e]::-webkit-outer-spin-button{-webkit-appearance:none}.ssr-pager input[type=number][data-v-67573e9e]{-moz-appearance:textfield}.ssr-pager button[data-v-67573e9e]{outline:none}.ssr-pager a[data-v-67573e9e]{text-decoration:none}',""])},function(e,t){function a(e,t){var a=e[1]||"",r=e[3];if(!r)return a;if(t&&"function"==typeof btoa){var o=n(r);return[a].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[a].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=a(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&n[i[0]]||(a&&!i[2]?i[2]=a:a&&(i[2]="("+i[2]+") and ("+a+")"),t.push(i))}},t}},function(e,t,a){function n(e){for(var t=0;t<e.length;t++){var a=e[t],n=g[a.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](a.parts[r]);for(;r<a.parts.length;r++)n.parts.push(o(a.parts[r]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var i=[],r=0;r<a.parts.length;r++)i.push(o(a.parts[r]));g[a.id]={id:a.id,refs:1,parts:i}}}}function r(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,a,n=document.querySelector("style["+v+'~="'+e.id+'"]');if(n){if(f)return P;n.parentNode.removeChild(n)}if(b){var o=d++;n=p||(p=r()),t=i.bind(null,n,o,!1),a=i.bind(null,n,o,!0)}else n=r(),t=s.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}function i(e,t,a,n){var r=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var a=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),h.ssrId&&e.setAttribute(v,t.id),r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=a(7),g={},c=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,f=!1,P=function(){},h=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a,r){f=a,h=r||{};var o=l(e,t);return n(o),function(t){for(var a=[],r=0;r<o.length;r++){var i=o[r],s=g[i.id];s.refs--,a.push(s)}t?(o=l(e,t),n(o)):o=[];for(var r=0;r<a.length;r++){var s=a[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete g[s.id]}}}};var m=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var a=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],s=o[1],u=o[2],l=o[3],g={id:e+":"+r,css:s,media:u,sourceMap:l};n[i]?n[i].parts.push(g):a.push(n[i]={id:i,parts:[g]})}return a}},function(e,t){e.exports=function(e,t,a,n,r,o){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),a&&(l.functional=!0),r&&(l._scopeId=r);var g;if(o?(g=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=g):n&&(g=n),g){var c=l.functional,p=c?l.render:l.beforeCreate;c?(l._injectStyles=g,l.render=function(e,t){return g.call(t),p(e,t)}):l.beforeCreate=p?[].concat(p,g):[g]}return{esModule:i,exports:s,options:l}}},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.totalPage>0?a("div",{staticClass:"ssr-pager"},[a("div",{staticClass:"pager-box"},[e.ssr&&!e.useALink?[e.currentPage>1||e.nowPage>1?a("nuxt-link",{class:["btn btn-prev",{disabled:1===e.nowPage}],attrs:{to:""+e.link+e.linkPath+(e.nowPage-1)}},[e._v("上一页")]):1===e.currentPage||1===e.nowPage?a("button",{class:["btn btn-prev",{disabled:1===e.nowPage}],attrs:{type:"button"},on:{click:e.prevPage}},[e._v("上一页")]):e._e()]:e.ssr&&e.useALink?[e.currentPage>1||e.nowPage>1?a("a",{class:["btn btn-prev",{disabled:1===e.nowPage}],attrs:{href:e.nowPage-1==1?e.firstLink?e.firstLink:""+e.link+e.linkPath+"1":""+e.link+e.linkPath+(e.nowPage-1)}},[e._v("上一页")]):1===e.currentPage||1===e.nowPage?a("button",{class:["btn btn-prev",{disabled:1===e.nowPage}],attrs:{type:"button"},on:{click:e.prevPage}},[e._v("上一页")]):e._e()]:e.ssr?e._e():[a("button",{class:["btn btn-prev",{disabled:1===e.nowPage}],attrs:{type:"button"},on:{click:e.prevPage}},[e._v("上一页")])],e._v(" "),a("div",{staticClass:"pager-ul"},[e.ssr&&!e.useALink?[a("nuxt-link",{key:1,class:["number",{active:1===e.nowPage}],attrs:{to:e.firstLink?e.firstLink:""+e.link+e.linkPath+"1"}},[e._v("1")])]:e.ssr&&e.useALink?[a("a",{class:["number",{active:1===e.nowPage}],attrs:{href:1===e.nowPage?"javascript:void(0)":e.firstLink?e.firstLink:""+e.link+e.linkPath+"1"}},[e._v("1")])]:e.ssr?e._e():[a("span",{class:["number",{active:1===e.nowPage}],on:{click:function(t){return e.changePage(1)}}},[e._v("1")])],e._v(" "),e.totalPage>e.pagerCount&&e.nowPage>=e.jumpNum?a("span",{staticClass:"number point point-prev",on:{click:function(t){return e.jumpFivePage("prev")}}},[e._v("...")]):e._e(),e._v(" "),e.ssr&&!e.useALink?[(e.totalPage<=e.pagerCount||e.nowPage<e.jumpNum)&&e.totalPage>2?a("nuxt-link",{key:2,class:["number",{active:2===e.nowPage}],attrs:{to:""+e.link+e.linkPath+"2"}},[e._v("2")]):e._e()]:e.ssr&&e.useALink?[(e.totalPage<=e.pagerCount||e.nowPage<e.jumpNum)&&e.totalPage>2?a("a",{class:["number",{active:2===e.nowPage}],attrs:{href:2===e.nowPage?"javascript:void(0);":""+e.link+e.linkPath+"2"}},[e._v("2")]):e._e()]:e.ssr?e._e():[(e.totalPage<=e.pagerCount||e.nowPage<e.jumpNum)&&e.totalPage>2?a("span",{class:["number",{active:2===e.nowPage}],on:{click:function(t){return e.changePage(2)}}},[e._v("2")]):e._e()],e._v(" "),e.ssr&&!e.useALink?e._l(e.pageList,function(t){return a("nuxt-link",{key:t,class:["number",{active:e.nowPage===t}],attrs:{to:""+e.link+e.linkPath+t}},[e._v(e._s(t))])}):e.ssr&&e.useALink?e._l(e.pageList,function(t){return a("a",{key:t,class:["number",{active:e.nowPage===t}],attrs:{href:e.nowPage===t?"javascript:void(0);":""+e.link+e.linkPath+t}},[e._v(e._s(t))])}):e.ssr?e._e():e._l(e.pageList,function(t){return a("span",{key:t,class:["number",{active:e.nowPage===t}],on:{click:function(a){return e.changePage(t)}}},[e._v(e._s(t))])}),e._v(" "),e.ssr&&!e.useALink?[(e.totalPage<=e.pagerCount||e.nowPage>=e.totalPage-e.addNum-1)&&e.totalPage>3?a("nuxt-link",{class:["number",{active:e.nowPage===e.totalPage-1}],attrs:{to:""+e.link+e.linkPath+(e.totalPage-1)}},[e._v(e._s(e.totalPage-1))]):e._e()]:e.ssr&&e.useALink?[(e.totalPage<=e.pagerCount||e.nowPage>=e.totalPage-e.addNum-1)&&e.totalPage>3?a("a",{class:["number",{active:e.nowPage===e.totalPage-1}],attrs:{href:e.nowPage===e.totalPage-1?"javascript:void(0);":""+e.link+e.linkPath+(e.totalPage-1)}},[e._v(e._s(e.totalPage-1))]):e._e()]:e.ssr?e._e():[(e.totalPage<=e.pagerCount||e.nowPage>=e.totalPage-e.addNum-1)&&e.totalPage>3?a("span",{class:["number",{active:e.nowPage===e.totalPage-1}],on:{click:function(t){return e.changePage(e.totalPage-1)}}},[e._v(e._s(e.totalPage-1))]):e._e()],e._v(" "),e.totalPage>e.pagerCount&&e.nowPage<e.totalPage-e.addNum-1?a("span",{staticClass:"number point point-next",on:{click:function(t){return e.jumpFivePage("next")}}},[e._v("...")]):e._e(),e._v(" "),e.ssr&&!e.useALink?[e.totalPage>1?a("nuxt-link",{class:["number",{active:e.nowPage===e.totalPage}],attrs:{to:""+e.link+e.linkPath+e.totalPage}},[e._v(e._s(e.totalPage))]):e._e()]:e.ssr&&e.useALink?[e.totalPage>1?a("a",{class:["number",{active:e.nowPage===e.totalPage}],attrs:{href:e.nowPage===e.totalPage?"javascript:void(0);":""+e.link+e.linkPath+e.totalPage}},[e._v(e._s(e.totalPage))]):e._e()]:e.ssr?e._e():[e.totalPage>1?a("span",{class:["number",{active:e.nowPage===e.totalPage}],on:{click:function(t){return e.changePage(e.totalPage)}}},[e._v(e._s(e.totalPage))]):e._e()]],2),e._v(" "),e.ssr&&!e.useALink?[e.nowPage<e.totalPage?a("nuxt-link",{class:["btn btn-next",{disabled:e.nowPage===e.totalPage}],attrs:{to:""+e.link+e.linkPath+(e.nowPage+1)}},[e._v("下一页")]):e.nowPage>=e.totalPage?a("button",{class:["btn btn-next",{disabled:e.nowPage===e.totalPage}],attrs:{type:"button"},on:{click:e.nextPage}},[e._v("下一页")]):e._e()]:e.ssr&&e.useALink?[e.nowPage<e.totalPage?a("a",{class:["btn btn-next",{disabled:e.nowPage===e.totalPage}],attrs:{href:""+e.link+e.linkPath+(e.nowPage+1)}},[e._v("下一页")]):e.nowPage>=e.totalPage?a("button",{class:["btn btn-next",{disabled:e.nowPage===e.totalPage}],attrs:{type:"button"},on:{click:e.nextPage}},[e._v("下一页")]):e._e()]:e.ssr?e._e():[a("button",{class:["btn btn-next",{disabled:e.nowPage===e.totalPage}],attrs:{type:"button"},on:{click:e.nextPage}},[e._v("下一页")])],e._v(" "),a("div",{staticClass:"pager-jump"},[e._v("\n      前往\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.redirectNum,expression:"redirectNum"}],staticClass:"jump-input",attrs:{type:"number",min:"1",max:e.totalPage},domProps:{value:e.redirectNum},on:{change:e.jumpPage,blur:e.jumpPage,input:function(t){t.target.composing||(e.redirectNum=t.target.value)}}}),e._v("\n      页\n    ")]),e._v(" "),e.confirmBtn?a("button",{staticClass:"btn btn-jump",attrs:{type:"button"}},[e._v("确定")]):e._e()],2)]):e._e()},r=[],o={render:n,staticRenderFns:r};t.a=o}])});