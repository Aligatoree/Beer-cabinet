(function(e){function t(t){for(var n,a,s=t[0],l=t[1],u=t[2],c=0,p=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({beer:"beer",profile:"profile"}[e]||e)+"."+{beer:"ad7f64b4",profile:"5161d3d7"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={profile:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({beer:"beer",profile:"profile"}[e]||e)+"."+{beer:"31d6cfe0",profile:"55b02f2e"}[e]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],c=u.getAttribute("data-href");if(c===n||c===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],d.parentNode.removeChild(d),r(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/Beer-cabinet/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav__beer"},[n("router-link",{staticClass:"nav__beer_link",attrs:{to:"/"}},[n("img",{staticClass:"nav__logo",attrs:{src:r("cf05"),alt:"logo"}})])],1),n("div",{staticClass:"nav__profile"},[n("router-link",{staticClass:"nav__profile_link",attrs:{to:"/profile"}},[n("p",{staticClass:"nav__profile_username"},[e._v(e._s(e.username))]),n("img",{staticClass:"nav__profile_avatar",attrs:{src:e.avatar,alt:""}})])],1)]),n("router-view",{attrs:{"beer-info":e.beerInfo,"user-info":e.userInfo,link:e.avatar,email:e.login.email,password:e.login.password},on:{rollbutton:e.newBeer}})],1)},o=[],i=r("bc3a"),s=r.n(i),l={name:"app",data(){return{beerInfo:{},userInfo:{},avatar:"",username:"",login:{email:"",password:""}}},mounted(){this.loadBeer(),this.loadProfile()},methods:{loadBeer(){s.a.get("https://random-data-api.com/api/beer/random_beer.json").then(e=>{this.beerInfo=e.data,delete this.beerInfo.id,delete this.beerInfo.uid}).catch(e=>console.log(e))},loadProfile(){let e=["id","uid","avatar","employment","address","credit_card","subscription","password","email","username"];s.a.get("https://random-data-api.com/api/users/random_user.json").then(t=>{this.avatar=t.data.avatar,this.username=t.data.username,this.login.email=t.data.email,this.login.password=t.data.password,this.userInfo=t.data;for(let r in e)delete this.userInfo[e[r]]}).catch(e=>console.log(e))},newBeer(){this.loadBeer()}}},u=l,c=(r("5c0b"),r("2877")),p=Object(c["a"])(u,a,o,!1,null,null,null),d=p.exports,f=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("h1",[e._v("login")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputEmail,expression:"inputEmail"}],staticClass:"page__email",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.inputEmail},on:{input:function(t){t.target.composing||(e.inputEmail=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputPassword,expression:"inputPassword"}],staticClass:"page__password",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.inputPassword},on:{input:function(t){t.target.composing||(e.inputPassword=t.target.value)}}}),r("button",{staticClass:"page__button",on:{click:e.check}},[e._v("Continue")])])},h=[],v={name:"Login",data(){return{inputEmail:"",inputPassword:""}},props:["email","password"],updated(){this.inputEmail=this.email,this.inputPassword=this.password,console.log(this.email),console.log(this.password)},methods:{check(){this.email==this.inputEmail?(this.checked=!0,localStorage.setItem("isAuth","true"),this.$router.push("/")):this.checked=!1}}},g=v,b=(r("7925"),Object(c["a"])(g,m,h,!1,null,"640deab2",null)),_=b.exports;n["a"].use(f["a"]);const w=[{path:"/",name:"Beer",component:function(){return r.e("beer").then(r.bind(null,"b08b"))},meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:function(){return r.e("profile").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/login",name:"login",component:_}],y=new f["a"]({routes:w});y.beforeEach((e,t,r)=>{e.matched.some(e=>e.meta.requiresAuth)?localStorage.getItem("isAuth")?r():r("/login"):r()});var P=y;n["a"].config.devtools=!0,n["a"].config.productionTip=!1,new n["a"]({router:P,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"774d":function(e,t,r){},7925:function(e,t,r){"use strict";r("774d")},"9c0c":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.b801bc5d.png"}});
//# sourceMappingURL=app.a4fa9147.js.map