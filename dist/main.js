(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>r});var i=n(81),s=n.n(i),o=n(645),a=n.n(o)()(s());a.push([t.id,".items {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(155, 145, 145);\n}\n\n.list-items h3 {\n  text-align: left;\n  padding-bottom: 2px;\n}\n\n.list-items {\n  width: 400px;\n  justify-content: center;\n  list-style: none;\n  text-align: left;\n  background-color: white;\n  float: right;\n  z-index: 999;\n}\n\n.check {\n  margin-left: -20px;\n  width: 20px;\n}\n\n.not-completed {\n  color: red;\n}\n\n.main {\n  background-color: rgb(233, 229, 226);\n}\n\nhr {\n  width: 110%;\n  margin-left: -40px;\n  margin-bottom: -1px;\n}\n\n.addtask {\n  width: 99%;\n  border-style: none;\n  font-size: 15px;\n  font-style: italic;\n  margin-left: -40px;\n  padding-left: 40px;\n  border-bottom: 1px solid rgb(151, 147, 147);\n  height: 40px;\n  margin-bottom: 20px;\n}\n\n.addtask:focus {\n  outline: none;\n}\n\n.clear {\n  width: 440px;\n  font-size: 30px;\n  padding: 20px;\n  margin-top: -25px;\n}\n\n.cleardiv {\n  position: relative;\n  top: -42px;\n  padding-top: 20px;\n  z-index: 1000;\n}\n\n.cleardiv:hover {\n  background-color: bisque;\n}\n\n.kebab-menu {\n  position: relative;\n  top: -40px;\n  float: right;\n  margin-right: 10px;\n  font-size: 25px;\n  cursor: pointer;\n}\n\n.delete {\n  position: relative;\n  top: -40px;\n  display: none;\n  float: right;\n  right: -200px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.kebab-menu.active + .delete {\n  position: relative;\n  top: -35px;\n  display: block;\n  right: 0;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\n.kebab-menu.active {\n  display: none;\n  position: relative;\n  top: -40px;\n}\n\n.list {\n  padding-top: 10px;\n}\n\n.disc {\n  font-size: 16px;\n  border-style: none;\n  padding-left: 10px;\n  height: 100%;\n  border: none;\n}\n\n.disc:focus {\n  outline: none;\n}\n\n.list-items1 {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  width: 400px;\n  list-style: none;\n  position: relative;\n  top: 20px;\n  margin: auto;\n}\n\n.list-items1 hr {\n  width: 109.5%;\n}\n\n.disc.completed {\n  text-decoration: line-through;\n}\n\n.refresh {\n  position: relative;\n  top: 60px;\n  z-index: 1000;\n  left: 12rem;\n  color: rgb(156, 149, 149);\n}\n",""]);const r=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(a[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},a=[],r=0;r<t.length;r++){var c=t[r],d=i.base?c[0]+i.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var h=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var u=s(m,i);i.byIndex=r,e.splice(r,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var o=i(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var r=n(o[a]);e[r].references--}for(var c=i(t,s),d=0;d<o.length;d++){var l=n(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),i=n(795),s=n.n(i),o=n(569),a=n.n(o),r=n(565),c=n.n(r),d=n(216),l=n.n(d),p=n(589),h=n.n(p),m=n(426),u={};u.styleTagTransform=h(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=s(),u.insertStyleElement=l(),e()(m.Z,u),m.Z&&m.Z.locals&&m.Z.locals;const f=(t,e,n,i,s)=>{const o=t.target.checked,a=t.target.closest(".list");i(Array.from(a.parentNode.children).indexOf(a),o),s()};(new class{constructor(){this.myTasks=[],this.container=document.getElementById("list-items"),this.myTaskInput=document.getElementById("addtask"),this.clearButton=document.querySelector(".clear"),this.initialize(),this.loadTasksFromLocalStorage()}initialize(){this.myTaskInput.addEventListener("keypress",this.getInput.bind(this)),this.clearButton.addEventListener("click",this.clearCompletedItems.bind(this)),this.container.addEventListener("click",(t=>{const e=t.target.closest(".kebab-menu");if(e){e.classList.toggle("active");const t=e.querySelector(".delete");t&&t.classList.toggle("active")}})),this.container.addEventListener("click",(t=>{const e=t.target.closest(".delete");if(e){t.stopPropagation();const n=e.closest(".list"),i=Array.from(this.container.children).indexOf(n);this.deleteListItem(i)}})),this.container.addEventListener("click",(t=>{t.target.closest(".check")&&f(t,this.container,this.myTasks,this.updateCompleted.bind(this),this.storeItems.bind(this))}))}loadTasksFromLocalStorage(){const t=localStorage.getItem("myTasks");t&&(this.myTasks=JSON.parse(t),this.myTasks.forEach(((t,e)=>{this.displayTask(e)})))}addTaskToArray(t,e,n){this.myTasks.push({description:t,completed:!1,index:n})}getInput(t){if("Enter"===t.key){const t=this.myTaskInput.value.trim();""!==t&&(this.addTaskToArray(t,!1,this.myTasks.length+1),this.myTaskInput.value="",this.displayTask(this.myTasks.length-1),this.storeItems())}}displayTask(t){const e=document.createElement("li"),n=document.createElement("input"),i=document.createElement("input"),s=document.createElement("hr"),o=document.createElement("div"),a=document.createElement("span"),r=document.createElement("span");r.classList.add("fas","fa-trash","delete"),n.type="checkbox",n.classList.add("check"),e.classList.add("list"),i.value=this.myTasks[t].description,i.classList.add("disc"),o.classList.add("kebab-menu"),a.classList.add("kebab-icon"),a.innerHTML="&#8942;",o.appendChild(a),e.appendChild(n),e.appendChild(i),e.appendChild(s),e.appendChild(o),e.appendChild(r),this.container.appendChild(e),n.addEventListener("click",(t=>{f(t,this.container,this.myTasks,this.updateCompleted.bind(this),this.storeItems.bind(this))})),this.myTasks[t].completed&&(i.classList.add("completed"),n.checked=!0),i.addEventListener("change",(()=>{const e=i.value.trim();""!==e?this.editTask(t,e):i.value=this.myTasks[t].description}))}deleteListItem(t){this.container.removeChild(this.container.children[t]),this.myTasks.splice(t,1),this.updateIndexes(),this.storeItems()}updateIndexes(){this.myTasks.forEach(((t,e)=>{t.index=e+1}))}storeItems(){localStorage.setItem("myTasks",JSON.stringify(this.myTasks))}editTask(t,e){t>=0&&t<this.myTasks.length&&(this.myTasks[t].description=e,this.storeItems())}updateCompleted(t,e){if(t>=0&&t<this.myTasks.length){this.myTasks[t].completed=e;const n=document.querySelector(`#list-items li:nth-child(${t+1}) .disc`);e?n.classList.add("completed"):n.classList.remove("completed"),this.storeItems()}}clearCompletedItems(){(t=>{t=(t=JSON.parse(localStorage.getItem("myTasks"))||[]).filter((t=>!t.completed));for(let e=0;e<t.length;e+=1)t[e].index=e+1;localStorage.setItem("myTasks",JSON.stringify(t)),window.location.reload()})(this.container,this.myTasks,this.updateIndexes.bind(this),this.storeItems.bind(this))}}).initialize()})()})();