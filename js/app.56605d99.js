(function(){"use strict";var t={2780:function(t,e,n){var i=n(2856),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view")],1)},o=[],a=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"logo"},[t._v("学习平台")]),e("div",{staticClass:"nav-links"},[e("router-link",{attrs:{to:"/"}},[t._v("学习")]),e("router-link",{attrs:{to:"/download"}},[t._v("pdf")]),t._m(0)],1)])},s=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"external-link",attrs:{href:"https://github.com/21231114/data-mining",target:"_blank",rel:"noopener noreferrer"}},[t._v(" GitHub "),e("i",{staticClass:"fas fa-external-link-alt"})])}],c={name:"NavBar"},l=c,u=n(1656),d=(0,u.A)(l,a,s,!1,null,null,null),h=d.exports,f={name:"App",components:{NavBar:h}},p=f,v=(0,u.A)(p,r,o,!1,null,null,null),m=v.exports,C=n(1594),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"container"},[e("div",{staticClass:"left"},[e("Left",{attrs:{sections:t.leftdata,titles:t.titles,selectedChapter:t.activeChapter,selectedSection:t.activeSection},on:{"item-set":t.setActive}})],1),e("div",{staticClass:"html-content"},[e("div",{domProps:{innerHTML:t._s(t.htmlContent)}}),e("div",{staticClass:"button-container"},[1!==t.activeChapter||1!==t.activeSection?e("button",{staticClass:"button left-button",on:{click:t.prevSection}},[t._v(t._s(t.prevButtonText))]):t._e(),e("button",{staticClass:"button right-button",on:{click:t.nextSection}},[t._v(t._s(t.nextButtonText))])])])])])},g=[],S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},t._l(t.sections,(function(n,i){return e("div",{key:i,staticClass:"section"},[e("h2",{staticClass:"section-title",class:{active:t.selectedChapter===i+1},on:{click:function(e){return t.setSelected(i+1,1)}}},[t._v(" "+t._s(t.titles[i])+" ")]),e("LeftSections",{attrs:{sectionList:n,chapter:i+1,selectedChapter:t.selectedChapter,selectedSection:t.selectedSection},on:{"item-selected":t.setSelected}})],1)})),0)},y=[],_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[e("ul",t._l(t.items,(function(n,i){return e("li",{key:i,class:{active:t.selectedIndex===i},on:{click:function(e){return t.selectItem(i)}}},[t._v(" "+t._s(n)+" ")])})),0)])},x=[],k={name:"LeftSections",props:{sectionList:{type:Array,required:!0},chapter:{type:Number,required:!0},selectedChapter:{type:Number,required:!0},selectedSection:{type:Number,required:!0}},data(){return{items:[],selectedIndex:null}},methods:{updateSelectedIndex(){this.selectedChapter!==this.chapter?this.selectedIndex=null:this.selectedIndex=this.selectedSection-1},selectItem(t){this.selectedIndex=t,this.$emit("item-selected",this.chapter,t+1)}},created(){this.items=this.sectionList,this.selectedIndex=this.selectedChapter==this.chapter?this.selectedSection-1:null},watch:{selectedChapter:"updateSelectedIndex",selectedSection:"updateSelectedIndex"}},A=k,w=(0,u.A)(A,_,x,!1,null,"07dd7736",null),L=w.exports,N={name:"Left",components:{LeftSections:L},props:{sections:{type:Array,required:!0},titles:{type:Array,required:!0},selectedChapter:{type:Number,required:!0},selectedSection:{type:Number,required:!0}},created(){this.selectedChapter=1,this.selectedSection=1},methods:{setSelected(t,e){this.selectedChapter=t,this.selectedSection=e,this.$emit("item-set",t,e)}}},O=N,T=(0,u.A)(O,S,y,!1,null,"5c947dd7",null),E=T.exports,j={name:"HomeView",components:{Left:E},data(){return{leftdata:[["回归分析模型的概述","线性回归","线性回归的概率解释","线性回归的使用","逻辑回归","多项逻辑回归","非线性回归与正则项","本章小结"],["SVM优化算法—SMO","特征映射与核方法","常用核函数及其构造方法","软间隔与松弛变量","支持向量思想在回归问题上的应用—SVR模型","支持向量机的发展历史和历史地位"]],titles:["回归模型","支持向量机SVM"],htmlContent:"",activeChapter:1,activeSection:1}},computed:{prevButtonText(){return this.activeSection>1?"« 上一节":"« 上一章"},nextButtonText(){const t=this.leftdata[this.activeChapter-1].length;return this.activeSection<t?"下一节 »":"下一章 »"}},methods:{setActive(t,e){console.log("chapter="+t),console.log("section="+e);var n=!1;this.activeChapter==t&&this.activeSection==e||(n=!0),this.activeChapter=t,this.activeSection=e,n&&this.loadHtmlContent()},loadHtmlContent(){fetch(`https://21231114.github.io/data-mining/static/chapter_${this.activeChapter}_section_${this.activeSection}.html`).then((t=>t.text())).then((t=>{this.htmlContent=t})).catch((t=>console.error("Error loading HTML:",t)))},prevSection(){this.activeSection>1?this.activeSection--:this.activeChapter>1&&(this.activeChapter--,this.activeSection=this.leftdata[this.activeChapter-1].length),this.loadHtmlContent()},nextSection(){const t=this.leftdata[this.activeChapter-1].length;this.activeSection<t?this.activeSection++:this.activeChapter<this.leftdata.length&&(this.activeChapter++,this.activeSection=1),this.loadHtmlContent()}},mounted(){this.loadHtmlContent()}},I=j,B=(0,u.A)(I,b,g,!1,null,null,null),q=B.exports;i.Ay.use(C.Ay);const H=[{path:"/",name:"home",component:q},{path:"/download",name:"download",component:()=>n.e(467).then(n.bind(n,5013))}],M=new C.Ay({routes:H});var P=M,$=n(1910);i.Ay.use($.Ay);var F=new $.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});i.Ay.config.productionTip=!1,new i.Ay({router:P,store:F,render:t=>t(m)}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var a=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],o=t[u][2];for(var s=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(s=!1,o<a&&(a=o));if(s){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/download.4a880a2c.js"}}(),function(){n.miniCssF=function(t){return"css/download.5d38ceab.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="frontend:";n.l=function(i,r,o,a){if(t[i])t[i].push(r);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=i),t[i]=[r];var h=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var r=t[i];if(delete t[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/data-mining/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,i,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&n.type,s=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=s,a.href=e,i?i.parentNode.insertBefore(a,i.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){r=a[i],o=r.getAttribute("data-href");if(o===t||o===e)return r}},i=function(i){return new Promise((function(r,o){var a=n.miniCssF(i),s=n.p+a;if(e(a,s))return r();t(i,s,null,r,o)}))},r={524:0};n.f.miniCss=function(t,e){var n={467:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=i(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,i){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise((function(n,i){r=t[e]=[n,i]}));i.push(r[2]=o);var a=n.p+n.u(e),s=new Error,c=function(i){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,a=i[0],s=i[1],c=i[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(e&&e(i);l<a.length;l++)o=a[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},i=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(2780)}));i=n.O(i)})();
//# sourceMappingURL=app.56605d99.js.map