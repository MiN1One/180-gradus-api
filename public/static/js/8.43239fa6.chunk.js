(this["webpackJsonpcover-exp"]=this["webpackJsonpcover-exp"]||[]).push([[8,9],{106:function(e,t,c){"use strict";var a=c(34),n=c(1),i=c(15),s=c(35);t.a=function(){var e=Object(i.d)((function(e){return e})).cart,t=Object(i.c)(),c=Object(n.useCallback)((function(t){return-1!==e.findIndex((function(e){return e._id===t}))}),[e]),r=Object(n.useCallback)((function(n){var i=Object(a.a)(e);c(n._id)?i=i.filter((function(e){return e._id!==n._id})):i.push(n),t(s.b("cart",i)),sessionStorage.setItem("cart",JSON.stringify(i))}),[e,t,c]);return{cart:e,inTheCart:c,editCart:r}}},110:function(e,t,c){"use strict";var a=c(34),n=c(1),i=c(15),s=c(35);t.a=function(){var e=Object(i.d)((function(e){return e})).favorites,t=Object(i.c)(),c=Object(n.useCallback)((function(t){return-1!==e.findIndex((function(e){return e._id===t}))}),[e]),r=Object(n.useCallback)((function(n){var i=Object(a.a)(e);c(n._id)?i=i.filter((function(e){return e._id!==n._id})):e.length<10&&i.push(n),t(s.b("favorites",i)),localStorage.setItem("favorites",JSON.stringify(i))}),[e,t,c]);return{favorites:e,isFavorite:c,editFavorites:r}}},111:function(e,t,c){"use strict";var a=c(123),n=c(67),i=c(18),s=(c(116),c(112)),r=c(2);t.a=function(e){var t=Object(n.a)().t;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{close:e.close,z:100}),Object(r.jsxs)("div",{className:"Modal",children:[Object(r.jsxs)("div",{className:"Modal__head",children:[Object(r.jsx)("h3",{className:"Modal__title heading heading--main",children:e.title}),Object(r.jsx)("button",{className:"btn btn__circle",onClick:e.close,children:Object(r.jsx)(i.q,{className:"icon"})})]}),Object(r.jsx)(a.Scrollbars,{className:"Modal__body",children:Object(r.jsx)("div",{className:"Modal__wrapper",children:e.children||Object(r.jsx)("p",{className:"Modal__text",children:t("main.nothing here")})})}),Object(r.jsx)("div",{className:"Modal__footer",children:e.children&&Object(r.jsxs)("div",{className:"flex aic",children:[e.price&&Object(r.jsxs)("span",{className:"price-tag mr-1",children:[t("main.total"),": $",e.price]}),e.edit&&Object(r.jsx)("button",{className:"btn btn__ghost btn__ghost--active Modal__btn",onClick:function(){return e.cancel()},children:t("main.cancel")}),e.editSave&&Object(r.jsx)("button",{className:"btn btn__ghost btn__ghost--active Modal__btn",onClick:function(){return e.editSave()},children:e.edit?t("main.save"):t("main.edit")}),e.primary&&!e.edit&&Object(r.jsx)("button",{className:"btn btn__ghost btn__ghost--active Modal__btn",onClick:function(){return e.primary()},children:e.actionTitle})]})})]})]})}},112:function(e,t,c){"use strict";c(113);var a=c(2);t.a=function(e){var t=e.z,c=e.close,n=e.className;return Object(a.jsx)("div",{className:"backdrop ".concat(n||""),style:{zIndex:t},onClick:function(){return c()}})}},113:function(e,t,c){},115:function(e,t,c){"use strict";var a=c(6),n=c(44),i=c(2);t.a=function(e){var t=e.className;return Object(i.jsx)(a.b,{to:"/",className:"logo ".concat(t||""),children:Object(i.jsx)("img",{src:n.a,alt:"logo",width:"100%",height:"100%"})})}},116:function(e,t,c){},117:function(e,t,c){"use strict";var a=c(34),n=c(26),i=c(1),s=c(67),r=c(18),o=c(15),l=c(2);t.a=function(){var e=Object(s.a)().t,t=Object(o.d)((function(e){return e})),c=t.favorites,d=t.cart,j=Object(i.useState)(!1),b=Object(n.a)(j,2),u=b[0],m=b[1],O=Object(i.useState)(!1),_=Object(n.a)(O,2),h=_[0],f=_[1],v=Object(i.useRef)(),x=Object(i.useRef)(),p=Object(i.useRef)(),N=Object(i.useRef)();return Object(i.useEffect)((function(){var e;return v.current<c.length&&(m(!0),e=setTimeout((function(){m(!1)}),5e3)),function(){return clearTimeout(e)}}),[c.length]),Object(i.useEffect)((function(){var e;return x.current<d.length&&(f(!0),e=setTimeout((function(){f(!1)}),5e3)),function(){return clearTimeout(e)}}),[d.length]),Object(i.useEffect)((function(){N.current=Object(a.a)(d),x.current=d.length})),Object(i.useEffect)((function(){p.current=Object(a.a)(c),v.current=c.length})),u||h?Object(l.jsx)("div",{className:"notifier",children:Object(l.jsx)("div",{className:"container pos-rel",children:Object(l.jsx)("div",{className:"notifier__wrapper",children:Object(l.jsxs)("div",{className:"notifier__content",children:[Object(l.jsxs)("div",{className:"notifier__message flex aic",children:[Object(l.jsx)(r.a,{className:"icon--sm mr-1"}),e(h?"main.added cart":"main.added fav")]}),Object(l.jsx)("button",{className:"btn btn__circle ml-1",onClick:function(){h&&f(!1),u&&m(!1)},children:Object(l.jsx)(r.q,{className:"icon--sm"})})]})})})}):null}},118:function(e,t,c){"use strict";var a=c(34),n=c(26),i=c(1),s=c.n(i),r=c(15),o=c(4),l=c(106),d=c(35),j=c(111),b=c(109),u=c(67),m=c(2),O=function(e){var t=e.data,c=e.edit,a=e.remove,n=Object(u.a)().t;return Object(m.jsxs)("div",{className:"Modal__item",children:[Object(m.jsxs)("div",{className:"flex aic",children:[Object(m.jsx)("figure",{className:"Modal__figure",children:Object(m.jsx)(b.LazyLoadImage,{className:"img",src:"/images/".concat(t.image),alt:t.name,width:"100%",height:"100%",effect:"opacity"})}),Object(m.jsxs)("div",{className:"flex fdc",children:[Object(m.jsx)("span",{className:"Modal__name",children:t.name}),Object(m.jsxs)("span",{className:"Modal__name--sub",children:[t.device,"\xa0\xa0\u2022\xa0\xa0",n("nav.skins")]})]})]}),c?Object(m.jsx)("button",{className:"btn btn__pill btn__pill--red",onClick:a,children:n("main.remove")}):Object(m.jsxs)("span",{className:"price-tag",children:["$",parseFloat(t.price).toFixed(2)]})]})},_=function(e){var t=e.t,c=e.close,s=Object(l.a)().cart,b=Object(i.useState)(!1),u=Object(n.a)(b,2),_=u[0],h=u[1],f=Object(i.useState)(Object(a.a)(s)),v=Object(n.a)(f,2),x=v[0],p=v[1],N=Object(i.useState)([]),g=Object(n.a)(N,2),H=g[0],y=g[1],k=Object(o.f)(),S=Object(r.c)();Object(i.useEffect)((function(){return p(Object(a.a)(s))}),[s]);var w=x.map((function(e){return Object(m.jsx)(O,{data:e,edit:_,remove:function(){return function(e){var t=x.find((function(t){return t._id===e}));y((function(e){return[].concat(Object(a.a)(e),[t&&t])}));var c=x.filter((function(t){return t._id!==e}));p(c)}(e._id)}},e._id)})),C=0!==s.length&&s.reduce((function(e,t){return e+parseFloat(t.price)}),0);return console.log(H),Object(m.jsx)(j.a,{actionTitle:t("main.proceed"),primary:function(){return k.push("/summary")},title:t("nav.cart"),cancel:function(){p(s),h(!1),y([])},price:C&&C.toFixed(2),close:function(){c(!1),h(!1)},editSave:function(){return _?function(){var e=Object(a.a)(s);H.forEach((function(t){e=e.filter((function(e){return e._id!==t._id}))})),S(d.b("cart",e)),sessionStorage.setItem("cart",JSON.stringify(e)),h(!1),y([])}():h(!0)},edit:_,children:0!==s.length&&w})};t.a=s.a.memo(_)},119:function(e,t,c){"use strict";var a=c(34),n=c(26),i=c(1),s=c.n(i),r=c(15),o=c(106),l=c(110),d=c(35),j=c(111),b=c(109),u=c(67),m=c(18),O=c(4),_=c(6),h=c(2),f=function(e){var t=e.data,c=e.edit,a=e.add,n=e.remove,i=e.media,s=Object(u.a)().t,r=Object(O.f)();return Object(h.jsxs)("div",{className:"pos-rel",children:[Object(h.jsx)("div",{className:"Modal__item",onClick:function(){i&&r.push("/categories/".concat(t.type,"/").concat(t.category,"/").concat(t.deviceId))},children:Object(h.jsxs)("div",{className:"flex aic",children:[Object(h.jsx)("figure",{className:"Modal__figure",children:Object(h.jsx)(b.LazyLoadImage,{className:"img",src:"/images/".concat(t.image),alt:t.name,width:"100%",height:"100%",effect:"opacity"})}),Object(h.jsxs)("div",{className:"flex fdc",children:[Object(h.jsx)("span",{className:"Modal__name",children:t.name}),Object(h.jsxs)("span",{className:"Modal__name--sub",children:[t.device,"\xa0\xa0\u2022\xa0\xa0",s("nav.".concat(t.type))]})]})]})}),Object(h.jsx)("div",{className:"Modal__btn-group",children:c?Object(h.jsx)("button",{className:"btn btn__pill btn__pill--red",onClick:n,children:s("main.remove")}):Object(h.jsxs)("div",{className:"flex",children:[!i&&Object(h.jsx)(_.b,{to:"/categories/".concat(t.type,"/").concat(t.category,"/").concat(t.deviceId),className:"btn btn__pill btn__pill--yellow mr-1",children:s("nav.collection")}),Object(h.jsxs)("button",{className:"btn btn__pill",onClick:a,children:[s("main.to cart"),Object(h.jsx)(m.n,{className:"ml-5 icon--sm"})]})]})})]})};t.a=s.a.memo(Object(r.b)((function(e){return{favorites:e.favorites,media:e.media.mid}}))((function(e){var t=e.t,c=e.close,s=e.media,b=Object(r.c)(),u=Object(l.a)(),m=u.editFavorites,O=u.favorites,_=Object(o.a)().editCart,v=Object(i.useState)(!1),x=Object(n.a)(v,2),p=x[0],N=x[1],g=Object(i.useState)(Object(a.a)(O)),H=Object(n.a)(g,2),y=H[0],k=H[1],S=Object(i.useState)([]),w=Object(n.a)(S,2),C=w[0],M=w[1];Object(i.useEffect)((function(){return k(Object(a.a)(O))}),[O]);var E=y.map((function(e,t){return Object(h.jsx)(f,{media:s,data:e,edit:p,add:function(){return _(e)},remove:function(){return function(e){var t=y.find((function(t){return t._id===e})),c=y.filter((function(t){return t._id!==e}));M((function(e){return[].concat(Object(a.a)(e),[t&&t])})),k(c)}(e._id)}},e._id)}));return Object(h.jsx)(j.a,{actionTitle:t(p?"main.save":"main.edit"),editSave:function(){return p?function(){C.forEach((function(e){return m(e)}));var e=Object(a.a)(O);C.forEach((function(t){e=e.filter((function(e){return e._id!==t._id}))})),b(d.b("favorites",e)),localStorage.setItem("favorites",JSON.stringify(e)),N(!1),M([])}():N(!0)},title:t("nav.favorites"),edit:p,cancel:function(){k(O),N(!1),M([])},close:function(){c(!1),N(!1)},children:O.length>0&&E})})))},126:function(e,t,c){"use strict";t.a=c.p+"static/media/logo.e23e210e.png"},130:function(e,t,c){},131:function(e,t,c){},137:function(e,t,c){"use strict";c.r(t);var a=c(26),n=c(1),i=c.n(n),s=c(18),r=c(122),o=c(4),l=c(6),d=c(67),j=c(15),b=(c(130),c(131),c(2)),u=function(e){return Object(b.jsx)("div",{className:"Tooltip ".concat(e.arrow&&""),children:e.children})},m=c(115),O=c(118),_=c(119),h=c(117),f=function(e){var t=e.className,c=Object(d.a)().t,i=Object(o.g)(),f=Object(j.d)((function(e){return e})),v=f.categories,x=f.cart,p=f.favorites;Object(n.useEffect)((function(){y(!1),C(!1)}),[i.pathname]);var N=Object(n.useState)(!1),g=Object(a.a)(N,2),H=g[0],y=g[1],k=Object(n.useState)(!1),S=Object(a.a)(k,2),w=S[0],C=S[1],M=v&&v.map((function(e,t){return Object(b.jsx)("li",{className:"Navigation__item",children:Object(b.jsx)(l.c,{activeClassName:"Navigation__link--active",to:"/categories/".concat(e.type,"/").concat(e.name),className:"Navigation__link","data-premium":e.exclusive,children:c("nav.".concat(e.name))})},t)}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h.a,{}),H&&Object(b.jsx)(_.a,{t:c,close:y}),w&&Object(b.jsx)(O.a,{t:c,close:C}),Object(b.jsx)("nav",{className:"Navigation ".concat(t||""),children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"Navigation__content",children:[Object(b.jsxs)("div",{className:"Navigation__side",children:[Object(b.jsx)(m.a,{className:"h-100 mr-1"}),Object(b.jsxs)("ul",{className:"Navigation__list",children:[Object(b.jsx)("li",{className:"Navigation__item",children:Object(b.jsx)(l.c,{exact:!0,activeClassName:"Navigation__link--active",to:"/categories/skins",className:"Navigation__link",children:c("nav.skins")})}),M]})]}),Object(b.jsxs)("div",{className:"Navigation__side",children:[Object(b.jsxs)("div",{className:"Navigation__item",children:[Object(b.jsxs)("button",{className:"Navigation__link Navigation__link--pop",onClick:function(){return C(!0)},children:[0!==x.length&&Object(b.jsx)("span",{children:x.length}),Object(b.jsx)(s.b,{className:"Navigation__icon"})]}),Object(b.jsx)(u,{children:c("nav.cart")})]}),Object(b.jsxs)("div",{className:"Navigation__item",children:[Object(b.jsxs)("button",{className:"Navigation__link Navigation__link--pop",onClick:function(){return y(!0)},children:[0!==p.length&&Object(b.jsx)("span",{children:p.length}),Object(b.jsx)(r.b,{className:"Navigation__icon"})]}),Object(b.jsx)(u,{children:c("nav.favorites")})]})]})]})})})]})};t.default=i.a.memo(f)},159:function(e,t,c){},169:function(e,t,c){"use strict";c.r(t);var a=c(26),n=c(1),i=c.n(n),s=c(67),r=c(109),o=(c(159),c(137)),l=c(126),d=c(56),j=c(6),b=c(2),u=function(){var e=Object(s.a)().t,t=Object(n.useState)(0),c=Object(a.a)(t,2),i=c[0],u=c[1],m=Object(n.useState)(0),O=Object(a.a)(m,2),_=O[0],h=O[1],f=Object(n.useState)(0),v=Object(a.a)(f,2),x=v[0],p=v[1],N=Object(n.useState)(0),g=Object(a.a)(N,2),H=g[0],y=g[1],k=Object(n.useState)(0),S=Object(a.a)(k,2),w=S[0],C=S[1],M=8*window.innerHeight,E=Object(n.useState)(!1),L=Object(a.a)(E,2),I=L[0],F=L[1],T=function(){var e=window.innerHeight,t=document.documentElement.scrollTop;t<=e?(h(t),u(0)):h(e),t>e&&(t<=2*e&&u(t-e),t>=2*e&&(u(e),p(t<=3*e?t-2*e:e)),t>=3*e&&(u(t-2*e),t>=4*e&&(u(2*e),y(t>=4*e&&t<5*e?t-4*e:e))),t>=5*e&&(u(t-3*e),t>=6*e&&(u(3*e),C(t<=7*e?t-6*e:e)),t>=7*e&&u(t-4*e))),0===t&&(u(0),h(0),p(0),y(0),C(0)),F(t>0)};Object(n.useEffect)((function(){return document.addEventListener("scroll",T),function(){return document.removeEventListener("scroll",T)}}),[]);var z=["Header__jumbotron"],J=["Header__poppercase"];return I&&(z.push("Header__jumbotron--slideBack"),J.push("Header__poppercase--expand")),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.default,{className:I&&"Navigation--hide"}),Object(b.jsx)("div",{style:{height:M+"px"},id:"heightContainer"}),Object(b.jsx)("div",{style:{top:-i+"px"},id:"wrapper",children:Object(b.jsxs)("header",{className:"Header",children:[Object(b.jsxs)("section",{className:"Header__section",children:[Object(b.jsxs)("div",{className:z.join(" "),children:[Object(b.jsx)("div",{className:"Header__bg"}),Object(b.jsxs)("div",{className:"Header__hero",children:[Object(b.jsx)("div",{className:"Header__logobox",children:Object(b.jsx)("figure",{className:"Header__fig",children:Object(b.jsx)("img",{src:l.a,alt:"180sub",width:"100%",height:"auto"})})}),Object(b.jsxs)("div",{className:"Header__textbox",children:[Object(b.jsxs)("h1",{className:"Header__heading fdc flex",children:[e("main.hero text.p1"),Object(b.jsx)("span",{className:"Header__heading--sub",children:e("main.hero text.p2")})]}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)(j.b,{to:"/categories/skins",className:"Header__btn btn btn__primary mr-15",children:e("main.explore")}),Object(b.jsx)(j.b,{to:"/180degrees/about",href:"/",className:"Header__btn btn btn__secondary btn__secondary--fill",children:e("nav.about")})]})]})]})]}),Object(b.jsxs)("div",{className:J.join(" "),children:[Object(b.jsx)("div",{className:"Header__popper"}),Object(b.jsx)("div",{className:"Header__popperbg",style:{height:"".concat(_,"px"),opacity:"".concat(_/window.innerHeight)}}),Object(b.jsx)("div",{className:"Header__popper-text",children:Object(b.jsxs)("h2",{className:"Header__heading--secondary",children:["Maxmimum wear",Object(b.jsx)("p",{className:"Header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})})]})]}),Object(b.jsx)("section",{className:"Header__section",children:Object(b.jsxs)("div",{className:J.join(" "),children:[Object(b.jsx)("div",{className:"Header__popper"}),Object(b.jsx)("div",{className:"Header__popperbg",style:{height:"".concat(x,"px"),opacity:"".concat(x/window.innerHeight)}}),Object(b.jsx)("div",{className:"Header__popper-text",children:Object(b.jsxs)("h2",{className:"Header__heading--secondary",children:["Protective material",Object(b.jsx)("p",{className:"Header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})})]})}),Object(b.jsx)("section",{className:"Header__section",children:Object(b.jsxs)("div",{className:J.join(" "),children:[Object(b.jsx)("div",{className:"Header__popper"}),Object(b.jsx)("div",{className:"Header__popperbg",style:{height:"".concat(H,"px"),opacity:"".concat(H/window.innerHeight)}}),Object(b.jsx)("div",{className:"Header__popper-text",children:Object(b.jsxs)("h2",{className:"Header__heading--secondary",children:["Rich skin set",Object(b.jsx)("p",{className:"Header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})})]})}),Object(b.jsx)("section",{className:"Header__section",children:Object(b.jsxs)("div",{className:J.join(" "),children:[Object(b.jsx)("div",{className:"Header__popper"}),Object(b.jsx)("div",{className:"Header__popperbg",style:{height:"".concat(w,"px"),opacity:"".concat(w/window.innerHeight)}}),Object(b.jsx)("div",{className:"Header__popper-text",children:Object(b.jsxs)("h2",{className:"Header__heading--secondary",children:["Super accurate cut",Object(b.jsx)("p",{className:"Header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})})]})})]})}),Object(b.jsx)(r.LazyLoadComponent,{children:Object(b.jsx)(d.a,{})})]})};t.default=i.a.memo(u)}}]);
//# sourceMappingURL=8.43239fa6.chunk.js.map