(this["webpackJsonpcover-exp"]=this["webpackJsonpcover-exp"]||[]).push([[4],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(1),r=a.n(c),s=a(27),i=a.n(s),o=(a(74),a(6)),l=a(26),d=a(67),j=a(15),b=a(4),u=a(16),m=a(52),O=a(53),h=a(58),_=a(57),x=a(20),f=function(e){Object(h.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={hasError:!1,error:null},n}return Object(O.a)(a,[{key:"componentDidCatch",value:function(e,t){this.props.onError(e)}},{key:"render",value:function(){var e=this;return this.state.hasError?Object(n.jsx)(x.a,{er:this.state.error,clean:function(){return e.props.onError(null)}}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log(e),{hasError:!0,error:e}}}]),a}(r.a.Component),g=a(35),p=a(55),v=a(56),N=r.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(9)]).then(a.bind(null,135))})),y=r.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(10)]).then(a.bind(null,134))})),E=Object(j.b)((function(e){return{media:e.media}}))((function(e){var t=e.media,a=e.children;return Object(n.jsxs)(n.Fragment,{children:[t.sm?Object(n.jsx)(y,{}):Object(n.jsx)(N,{}),a,Object(n.jsx)(v.a,{})]})})),F=r.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(3),a.e(11)]).then(a.bind(null,164))})),w=r.a.lazy((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,174))})),T=r.a.lazy((function(){return a.e(16).then(a.bind(null,166))})),k=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(12)]).then(a.bind(null,172))})),D=r.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(8)]).then(a.bind(null,175))})),S=r.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(7)]).then(a.bind(null,173))})),R=r.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(3),a.e(13)]).then(a.bind(null,167))})),A=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(14)]).then(a.bind(null,176))}));var I=Object(j.b)((function(e){return{media:e.media,categories:e.categories}}),(function(e){return{onSetMedia:function(t,a){return e(g.e(t,a))},onSetData:function(t,a){return e(g.d(t,a))}}}))((function(e){var t=e.onSetMedia,a=e.media,s=e.onSetData,i=e.categories,o=Object(d.a)().i18n,j=Object(c.useState)(null),m=Object(l.a)(j,2),O=m[0],h=m[1],_=Object(b.g)(),g=Object(c.useState)(!1),v=Object(l.a)(g,2),N=v[0],y=v[1],I=window.matchMedia("(max-width: 59.375em)"),M=window.matchMedia("(max-width: 48em)"),C=function(e,a){e.matches?t(a,!0):t(a,!1)};N||(I.onchange=function(){return C(I,"mid")},M.onchange=function(){return C(M,"sm")},C(M,"sm"),C(I,"mid")),Object(c.useEffect)((function(){var e=u.a.interceptors.request.use((function(e){return e.headers.language=o.language,console.log(e),e}),(function(e){return console.log("req error"+e),h(e.message),Promise.reject(e)})),t=u.a.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return e.request.responseURL.includes("/users")||h(e.message),Promise.reject(e)}));return function(){u.a.interceptors.request.eject(e),u.a.interceptors.response.eject(t)}}),[o.language]),Object(c.useEffect)((function(){_.pathname.includes("admin")||(document.documentElement.scrollTop=0)}),[_.pathname]),Object(c.useEffect)((function(){return y(!0)}),[]),Object(c.useEffect)((function(){var e=document.createElement("link"),t=document.getElementsByTagName("body")[0];e.rel="stylesheet","ru"===o.language?(e.href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet',t.style.fontFamily='"Rubik", sans-serif'):"en"!==o.language&&"uz"!==o.language||(e.href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap",t.style.fontFamily='"Poppins", sans-serif'),document.getElementsByTagName("head")[0].appendChild(e)}),[o.language]),Object(c.useEffect)((function(){Promise.all([Object(u.a)("/categories"),Object(u.a)("/skins/popular")]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];console.log(a.data.data.data,n),s("categories",a.data.data.data),s("popular",n.data.data.data)}))}),[s]);var P=Object(n.jsx)(E,{children:a.sm?Object(n.jsx)(R,{er:O}):Object(n.jsx)(F,{})}),z=Object(n.jsx)(E,{children:Object(n.jsx)(w,{categories:i})}),V=Object(n.jsx)(E,{children:Object(n.jsx)(T,{})}),L=Object(n.jsx)(E,{children:Object(n.jsx)(k,{})});return Object(n.jsx)(r.a.Suspense,{fallback:Object(n.jsx)(p.a,{}),children:Object(n.jsx)(f,{onError:h,children:O?Object(n.jsx)(x.a,{er:O,clean:function(){return h(null)}}):Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/admin",children:Object(n.jsx)(A,{})}),Object(n.jsx)(b.a,{path:"/categories/:type",exact:!0,children:z}),Object(n.jsx)(b.a,{path:"/categories/:type/:category",exact:!0,children:z}),Object(n.jsx)(b.a,{path:"/categories/:type/:category/:id",exact:!0,children:P}),Object(n.jsx)(b.a,{path:"/summary",exact:!0,children:L}),Object(n.jsx)(b.a,{path:"/180degrees/:category",exact:!0,children:V}),Object(n.jsx)(b.a,{path:"/",exact:!0,children:a.mid?Object(n.jsx)(S,{}):Object(n.jsx)(D,{})}),Object(n.jsx)(b.a,{children:Object(n.jsx)(x.a,{notFound:!0})})]})})})})),M=function(e){e&&e instanceof Function&&a.e(18).then(a.bind(null,168)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},C=a(30),P=a(23),z=a(5),V=a(34),L=a(11),J={favorites:JSON.parse(localStorage.getItem("favorites"))||[],cart:JSON.parse(sessionStorage.getItem("cart"))||[],media:{mid:!1,sm:!1},categories:null,data:null,popular:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.a.ON_ADD_TO_FAVORITES:var a=Object(V.a)(e.favorites),n=e.favorites.length&&e.favorites.find((function(e){return e._id===t.skin._id}));return n?a=a.filter((function(e){return e!==n})):e.favorites.length<10&&a.push(t.skin),localStorage.setItem("favorites",JSON.stringify(a)),Object(z.a)(Object(z.a)({},e),{},{favorites:a});case L.a.ON_ERROR:return Object(z.a)(Object(z.a)({},e),{},{error:t.error});case L.a.ON_ADD_TO_CART:var c=-1!==e.cart.findIndex((function(e){return e._id===t.skin._id}));if(c)return Object(z.a)({},e);var r=[].concat(Object(V.a)(e.cart),[t.skin]);return sessionStorage.setItem("cart",JSON.stringify(r)),Object(z.a)(Object(z.a)({},e),{},{cart:r});case L.a.ON_REMOVE_FROM_CART:var s=e.cart.filter((function(e){return e._id!==t.skinId}));return sessionStorage.setItem("cart",JSON.stringify(s)),Object(z.a)(Object(z.a)({},e),{},{cart:s});case L.a.ON_SET_MEDIA:return Object(z.a)(Object(z.a)({},e),{},{media:Object(z.a)(Object(z.a)({},e.media),{},Object(P.a)({},t.bp,t.value))});case L.a.ON_SET_DATA:return Object(z.a)(Object(z.a)({},e),{},Object(P.a)({},t.name,t.value));default:return e}},B=a(42),U=a(64),X=a(66),G=a(24);B.a.use(X.a).use(U.a).use(G.e).init({fallbackLng:!1,load:"currentOnly",whitelist:["ru","en","uz"],react:{useSuspense:!1},debug:!0});B.a;var Y=Object(C.b)(q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(j.a,{store:Y,children:Object(n.jsx)(o.a,{children:Object(n.jsx)(I,{})})})}),document.getElementById("root")),M()},11:function(e,t,a){"use strict";t.a={ON_ADD_TO_FAVORITES:"ON_ADD_TO_FAVORITES",ON_ERROR:"ON_ERROR",ON_SET_MEDIA:"ON_SET_MEDIA",ON_REMOVE_FROM_CART:"ON_REMOVE_FROM_CART",ON_ADD_TO_CART:"ON_ADD_TO_CART",ON_SET_DATA:"ON_SET_DATA"}},16:function(e,t,a){"use strict";var n=a(60),c=a.n(n).a.create({baseURL:"http://localhost:8005/api",headers:{Accept:"application/json","Content-Type":"application/json"}});t.a=c},20:function(e,t,a){"use strict";var n=a(2),c=a(67),r=a(18),s=a(4),i=a(6);a(96);t.a=function(e){var t=e.er,a=e.clean,o=e.notFound,l=Object(c.a)().t,d=Object(s.f)();l("main.server er"),l("main.error");return l("main.request er"),Object(n.jsxs)("div",{className:"Er",children:[Object(n.jsx)("div",{className:"main-head",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"flex aic",children:[Object(n.jsx)("button",{className:"btn btn__square mr-2",onClick:function(){return o?d.goBack():a()},children:Object(n.jsx)(r.e,{className:"icon--lg icon--dark"})}),Object(n.jsx)("h2",{className:"heading heading--1 heading--black",children:l("main.error")})]})})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"Er__body",children:[Object(n.jsx)("p",{className:"heading heading--main c-white mb-5",children:o?l("main.not found"):t}),Object(n.jsx)("p",{className:"text text--mid mb-2",children:l(o?"main.wrong address":"main.error reason")}),Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("button",{onClick:function(){d.goBack(),!o&&a()},className:"btn btn__ghost btn__ghost--active mr-15",children:l("main.go back")}),Object(n.jsx)(i.b,{to:"/",className:"btn btn__ghost btn__ghost--active",onClick:function(){return!o&&a()},children:l("nav.home")})]})]})})]})}},35:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return o}));var n=a(11),c=function(e){return{type:n.a.ON_ADD_TO_FAVORITES,skin:e}},r=function(e){return{type:n.a.ON_ADD_TO_CART,skin:e}},s=function(e,t){return{type:n.a.ON_SET_MEDIA,bp:e,value:t}},i=function(e){return{type:n.a.ON_REMOVE_FROM_CART,skinId:e}},o=function(e,t){return{type:n.a.ON_SET_DATA,name:e,value:t}}},43:function(e,t,a){"use strict";t.a=a.p+"static/media/180illustrator-1.98aba280.svg"},55:function(e,t,a){"use strict";var n=a(2),c=a(43);t.a=function(){return Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsxs)("div",{className:"loader__wrapper",children:[Object(n.jsx)("div",{className:"loader__face loader__face--1",children:Object(n.jsx)("div",{className:"loader__circle loader__circle--1"})}),Object(n.jsx)("div",{className:"loader__face loader__face--2",children:Object(n.jsx)("div",{className:"loader__circle loader__circle--2"})}),Object(n.jsx)("div",{className:"loader__logo",children:Object(n.jsx)("object",{type:"image/svg+xml",data:c.a,width:"100%",height:"100%","aria-labelledby":"180logo"})})]}),Object(n.jsxs)("a",{href:"https://www.linkedin.com/in/nodirbek-ulashev-765a28201",target:"_blank",rel:"noopener noreferrer",className:"loader__appdev tc",children:["\xa9180Gradus ",(new Date).getFullYear(),Object(n.jsx)("br",{}),"MiN1One \u2022 Dev"]})]})}},56:function(e,t,a){"use strict";var n=a(2),c=a(1),r=a.n(c),s=a(4),i=a(6),o=a(25),l=a(18),d=a(67),j=a(15),b=(a(103),function(){var e=Object(d.a)(),t=e.t,a=e.i18n,c=Object(j.d)((function(e){return e})),r=c.categories,b=c.popular,u=Object(j.d)((function(e){return e.data})),m=Object(s.h)(),O=(new Date).getFullYear(),h={en:"English",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",uz:"O'zbekcha"},_=[],x=function(e){_.push(Object(n.jsx)("div",{tabIndex:"0",className:"Footer__drop-item",onMouseDown:function(){return a.changeLanguage(e)},children:h[e]},e))};for(var f in h)x(f);var g=r&&r.find((function(e){return e.name===m.category})),p=b&&b.map((function(e,t){var a=r&&r.find((function(t){return t._id===e.category}));return Object(n.jsx)("li",{className:"Footer__item",children:Object(n.jsx)(i.c,{className:"btn btn__pill btn__pill--yellow Footer__tag",activeClassName:"Footer__tag--active",to:"/categories/".concat(e.type,"/").concat(a&&a.name,"/").concat(e._id),children:e.device})},t)}));return Object(n.jsxs)("footer",{className:"Footer",children:[Object(n.jsx)("div",{className:"Footer__head",children:Object(n.jsx)("div",{className:"container w-100",children:Object(n.jsxs)("div",{className:"w-100 flex aic jcsb",children:[Object(n.jsxs)("div",{className:"flex aic text--wrap",children:[Object(n.jsxs)(i.b,{to:"/",className:"Footer__bread-item",children:[Object(n.jsx)(l.h,{className:"icon icon--grey mr-1"}),t("nav.home")]}),m.category&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"text--main mr-1 c-grey",children:"\u2022"}),m.id?Object(n.jsx)(i.b,{to:"/categories/".concat(g&&g.type,"/").concat(m.category),className:"Footer__bread-item text--wrap",children:t("nav.".concat(m.category))}):Object(n.jsx)("span",{className:"Footer__bread-item Footer__bread-item--active",children:t("nav.".concat(m.category))})]}),m.id&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"text--main mr-1 c-grey",children:"\u2022"}),Object(n.jsx)("span",{className:"Footer__bread-item Footer__bread-item--active",children:u})]})]}),Object(n.jsxs)("div",{className:"pos-rel Footer__language--desktop",children:[Object(n.jsxs)("button",{className:"Footer__language btn btn__ghost btn__ghost--active",children:[Object(n.jsx)(l.g,{className:"icon--grey icon mr-5"}),h[a.language]]}),Object(n.jsx)("div",{className:"Footer__lang-drop",children:_})]})]})})}),Object(n.jsx)("div",{className:"container z pos-rel",children:Object(n.jsxs)("div",{className:"Footer__content",children:[Object(n.jsxs)("div",{className:"flex jcsb w-100 aic fwrap fwrap--ss pos-rel",children:[Object(n.jsxs)("div",{className:"flex aic mb-15",children:[Object(n.jsxs)("span",{className:"text text--mid text--cap flex mr-1 tc",children:[t("main.find us"),":"]}),Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("a",{href:"/",className:"btn btn__ghost mr-5",children:Object(n.jsx)(o.b,{className:"icon--mid Footer__i"})}),Object(n.jsx)("a",{href:"/",className:"btn btn__ghost mr-5",children:Object(n.jsx)(o.c,{className:"icon--mid Footer__i"})}),Object(n.jsx)("a",{href:"/",className:"btn btn__ghost mr-5",children:Object(n.jsx)(o.a,{className:"icon--mid Footer__i"})}),Object(n.jsx)("a",{href:"/",className:"btn btn__ghost mr-5",children:Object(n.jsx)(o.d,{className:"icon--mid Footer__i"})})]})]}),Object(n.jsx)(i.b,{to:"/180degrees/contact",className:"mb-15 btn btn__ghost btn__ghost--active",children:t("main.contact us")}),Object(n.jsxs)("div",{className:"Footer__language--mob pos-rel mb-15 ml-15",children:[Object(n.jsxs)("button",{className:"Footer__language btn btn__ghost btn__ghost--active",children:[Object(n.jsx)(l.g,{className:"icon--grey icon mr-5"}),h[a.language]]}),Object(n.jsx)("div",{className:"Footer__lang-drop",children:_})]})]}),Object(n.jsxs)("div",{className:"Footer__body",children:[Object(n.jsxs)("div",{className:"flex fdc aic mb-3",children:[p&&p.length>0&&Object(n.jsxs)("div",{className:"flex aic fdc mb-3",children:[Object(n.jsxs)("span",{className:"text text--mid text--cap",children:[t("nav.popular"),":"]}),Object(n.jsx)("ul",{className:"flex mt-2 fwrap fwrap--sm",children:p})]}),Object(n.jsx)("p",{className:"text text--main c-grey-l Footer__text",children:t("text.contact")})]}),Object(n.jsxs)("div",{className:"flex fwrap mb-2 fwrap--ss",children:[Object(n.jsx)(i.b,{className:"text Footer__link",to:"/180degrees/about",children:t("nav.about")}),Object(n.jsx)(i.b,{className:"text Footer__link",to:"/180degrees/about",children:t("nav.privacy")}),Object(n.jsx)(i.b,{className:"text Footer__link",to:"/180degrees/about",children:t("nav.help")}),Object(n.jsx)(i.b,{className:"text Footer__link",to:"/180degrees/about",children:t("nav.delivery")}),Object(n.jsx)(i.b,{className:"text Footer__link",to:"/180degrees/about",children:t("nav.refund")})]}),Object(n.jsxs)("div",{className:"text text--main c-grey tc",children:["\xa9180Gradus ",O,". ",t("main.reserved")]}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/nodirbek-ulashev-765a28201/",target:"_blank",rel:"noopener noreferrer",className:"Footer__appdev",children:"MiN1One \u2022 Dev"})]})]})})]})});t.a=r.a.memo(b)},74:function(e,t,a){},96:function(e,t,a){}},[[104,5,6]]]);
//# sourceMappingURL=main.b55e5eea.chunk.js.map