(this["webpackJsonpcover-exp"]=this["webpackJsonpcover-exp"]||[]).push([[9],{108:function(e,t,c){"use strict";var n=c(2);c(111);t.a=function(e){var t=e.z,c=e.close,a=e.className;return Object(n.jsx)("div",{className:"backdrop ".concat(a||""),style:{zIndex:t},onClick:function(){return c()}})}},109:function(e,t,c){"use strict";c.d(t,"b",(function(){return d})),c.d(t,"a",(function(){return u}));var n=c(2),a=c(121),i=c(110),s=c(67),r=c(18),o=c(4),l=c(6),j=(c(115),c(108));t.c=function(e){var t=Object(s.a)().t;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j.a,{close:e.close,z:100}),Object(n.jsxs)("div",{className:"Modal",children:[Object(n.jsxs)("div",{className:"Modal__head",children:[Object(n.jsx)("h3",{className:"Modal__title heading heading--main",children:e.title}),Object(n.jsx)("button",{className:"btn btn__circle",onClick:e.close,children:Object(n.jsx)(r.r,{className:"icon"})})]}),Object(n.jsx)(a.Scrollbars,{className:"Modal__body",children:Object(n.jsx)("div",{className:"Modal__wrapper",children:e.children||Object(n.jsx)("p",{className:"Modal__text",children:t("main.nothing here")})})}),Object(n.jsx)("div",{className:"Modal__footer",children:e.children&&Object(n.jsxs)("div",{className:"flex aic",children:[e.price&&Object(n.jsxs)("span",{className:"price-tag mr-1",children:[t("main.total"),": $",e.price]}),e.edit&&Object(n.jsx)("button",{className:"btn btn__ghost btn__ghost--active Modal__btn",onClick:function(){return e.cancel()},children:t("main.cancel")}),e.editSave&&Object(n.jsx)("button",{className:"btn btn__ghost btn__ghost--active Modal__btn",onClick:function(){return e.editSave()},children:e.edit?t("main.save"):t("main.edit")}),e.primary&&!e.edit&&Object(n.jsx)("button",{className:"btn btn__ghost btn__ghost--active Modal__btn",onClick:function(){return e.primary()},children:e.actionTitle})]})})]})]})};var d=function(e){var t=e.data,c=e.edit,a=e.add,j=e.remove,d=e.media,u=Object(s.a)().t,b=Object(o.f)();return Object(n.jsxs)("div",{className:"Modal__item",onClick:function(){d&&b.push("/categories/".concat(t.type,"/").concat(t.category,"/").concat(t.deviceId))},children:[Object(n.jsxs)("div",{className:"flex aic",children:[Object(n.jsx)("figure",{className:"Modal__figure",children:Object(n.jsx)(i.LazyLoadImage,{className:"img",src:"/images/".concat(t.image),alt:t.name,width:"100%",height:"100%",effect:"opacity"})}),Object(n.jsxs)("div",{className:"flex fdc",children:[Object(n.jsx)("span",{className:"Modal__name",children:t.name}),Object(n.jsxs)("span",{className:"Modal__name--sub",children:[t.device,"\xa0\xa0\u2022\xa0\xa0",u("nav.".concat(t.type))]})]})]}),c?Object(n.jsx)("button",{className:"btn btn__pill btn__pill--red",onClick:j,children:u("main.remove")}):Object(n.jsxs)("div",{className:"flex",children:[!d&&Object(n.jsx)(l.b,{to:"/categories/".concat(t.type,"/").concat(t.category,"/").concat(t.deviceId),className:"btn btn__pill btn__pill--yellow mr-1",children:u("nav.collection")}),Object(n.jsxs)("button",{className:"btn btn__pill",onClick:a,children:[u("main.to cart"),Object(n.jsx)(r.o,{className:"ml-5 icon--sm"})]})]})]})},u=function(e){var t=e.data,c=e.edit,a=e.remove,r=Object(s.a)().t;return Object(n.jsxs)("div",{className:"Modal__item",children:[Object(n.jsxs)("div",{className:"flex aic",children:[Object(n.jsx)("figure",{className:"Modal__figure",children:Object(n.jsx)(i.LazyLoadImage,{className:"img",src:"/images/".concat(t.image),alt:t.name,width:"100%",height:"100%",effect:"opacity"})}),Object(n.jsxs)("div",{className:"flex fdc",children:[Object(n.jsx)("span",{className:"Modal__name",children:t.name}),Object(n.jsxs)("span",{className:"Modal__name--sub",children:[t.device,"\xa0\xa0\u2022\xa0\xa0",r("nav.skins")]})]})]}),c?Object(n.jsx)("button",{className:"btn btn__pill btn__pill--red",onClick:a,children:r("main.remove")}):Object(n.jsxs)("span",{className:"price-tag",children:["$",parseFloat(t.price).toFixed(2)]})]})}},111:function(e,t,c){},113:function(e,t,c){"use strict";var n=c(2),a=c(6),i=c(43);t.a=function(e){var t=e.className;return Object(n.jsx)(a.b,{to:"/",className:"logo ".concat(t||""),children:Object(n.jsx)("object",{type:"image/svg+xml",data:i.a,width:"100%",height:"100%","aria-labelledby":"180logo",style:{pointerEvents:"none"}})})}},114:function(e,t,c){"use strict";var n=c(34),a=c(26),i=c(2),s=c(1),r=c.n(s),o=c(15),l=c(4),j=c(35),d=c(109);t.a=r.a.memo(Object(o.b)((function(e){return{cart:e.cart}}),(function(e){return{onRemoveFromCart:function(t){return e(j.c(t))}}}))((function(e){var t=e.t,c=e.close,r=e.onRemoveFromCart,o=e.cart,j=Object(s.useState)(!1),u=Object(a.a)(j,2),b=u[0],m=u[1],f=Object(s.useState)(Object(n.a)(o)),O=Object(a.a)(f,2),v=O[0],_=O[1],h=Object(s.useState)([]),x=Object(a.a)(h,2),N=x[0],g=x[1],p=Object(l.f)();Object(s.useEffect)((function(){return _(Object(n.a)(o))}),[o]);var k=v.map((function(e,t){return Object(i.jsx)(d.a,{data:e,edit:b,remove:function(){return function(e){var t=v.filter((function(t){return t._id!==e})),c=v.find((function(t){return t._id===e}))._id;g((function(e){return[].concat(Object(n.a)(e),[c&&c])})),_(t)}(e._id)}},t)})),y=0!==o.length&&o.reduce((function(e,t){return e+parseFloat(t.price)}),0);return Object(i.jsx)(d.c,{actionTitle:t("main.proceed"),primary:function(){return p.push("/summary")},title:t("nav.cart"),cancel:function(){_(o),m(!1),g([])},price:y&&y.toFixed(2),close:function(){c(!1),m(!1)},editSave:function(){return b?(N.forEach((function(e){return r(e)})),m(!1),void g([])):m(!0)},edit:b,children:0!==o.length&&k})})))},115:function(e,t,c){},116:function(e,t,c){"use strict";var n=c(34),a=c(26),i=c(2),s=c(1),r=c.n(s),o=c(15),l=c(35),j=c(109);t.a=r.a.memo(Object(o.b)((function(e){return{favorites:e.favorites,media:e.media.mid}}),(function(e){return{onAddToCart:function(t){return e(l.a(t))},onRemoveAddToFav:function(t){return e(l.b(t))}}}))((function(e){var t=e.t,c=e.close,r=e.onRemoveAddToFav,o=e.onAddToCart,l=e.favorites,d=e.media,u=Object(s.useState)(!1),b=Object(a.a)(u,2),m=b[0],f=b[1],O=Object(s.useState)(Object(n.a)(l)),v=Object(a.a)(O,2),_=v[0],h=v[1],x=Object(s.useState)([]),N=Object(a.a)(x,2),g=N[0],p=N[1];Object(s.useEffect)((function(){return h(Object(n.a)(l))}),[l]);var k=_.map((function(e,t){return Object(i.jsx)(j.b,{media:d,data:e,edit:m,add:function(){return o(e)},remove:function(){return function(e){var t=_.find((function(t){return t._id===e})),c=_.filter((function(t){return t._id!==e}));h(c),p((function(e){return[].concat(Object(n.a)(e),[t&&t])}))}(e._id)}},t)}));return Object(i.jsx)(j.c,{actionTitle:t(m?"main.save":"main.edit"),editSave:function(){return m?(g.forEach((function(e){return r(e)})),f(!1),void p([])):f(!0)},title:t("nav.favorites"),edit:m,cancel:function(){h(l),f(!1),p([])},close:function(){c(!1),f(!1)},children:0!==l.length&&k})})))},117:function(e,t,c){"use strict";var n=c(34),a=c(26),i=c(2),s=c(1),r=c(67),o=c(18),l=c(15);t.a=function(){var e=Object(r.a)().t,t=Object(l.d)((function(e){return e})),c=t.favorites,j=t.cart,d=Object(s.useState)(!1),u=Object(a.a)(d,2),b=u[0],m=u[1],f=Object(s.useState)(!1),O=Object(a.a)(f,2),v=O[0],_=O[1],h=Object(s.useRef)(),x=Object(s.useRef)(),N=Object(s.useRef)(),g=Object(s.useRef)();return Object(s.useEffect)((function(){var e;return h.current<c.length&&(m(!0),e=setTimeout((function(){m(!1)}),5e3)),function(){return clearTimeout(e)}}),[c.length]),Object(s.useEffect)((function(){var e;return x.current<j.length&&(_(!0),e=setTimeout((function(){_(!1)}),5e3)),function(){return clearTimeout(e)}}),[j.length]),Object(s.useEffect)((function(){g.current=Object(n.a)(j),x.current=j.length})),Object(s.useEffect)((function(){N.current=Object(n.a)(c),h.current=c.length})),b||v?Object(i.jsx)("div",{className:"notifier",children:Object(i.jsx)("div",{className:"container pos-rel",children:Object(i.jsx)("div",{className:"notifier__wrapper",children:Object(i.jsxs)("div",{className:"notifier__content",children:[Object(i.jsxs)("div",{className:"notifier__message flex aic",children:[Object(i.jsx)(o.a,{className:"icon--sm mr-1"}),e(v?"main.added cart":"main.added fav")]}),Object(i.jsx)("button",{className:"btn btn__circle ml-1",onClick:function(){v&&_(!1),b&&m(!1)},children:Object(i.jsx)(o.r,{className:"icon--sm"})})]})})})}):null}},128:function(e,t,c){},129:function(e,t,c){},135:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(2),i=c(1),s=c.n(i),r=c(18),o=c(120),l=c(4),j=c(6),d=c(67),u=c(15),b=(c(128),c(129),function(e){return Object(a.jsx)("div",{className:"Tooltip ".concat(e.arrow&&""),children:e.children})}),m=c(113),f=c(114),O=c(116),v=c(117),_=function(e){var t=e.className,c=Object(d.a)().t,s=Object(l.g)(),_=Object(u.d)((function(e){return e})),h=_.categories,x=_.cart,N=_.favorites;Object(i.useEffect)((function(){y(!1),T(!1)}),[s.pathname]);var g=Object(i.useState)(!1),p=Object(n.a)(g,2),k=p[0],y=p[1],C=Object(i.useState)(!1),M=Object(n.a)(C,2),S=M[0],T=M[1],E=h&&h.map((function(e,t){return Object(a.jsx)("li",{className:"Navigation__item",children:Object(a.jsx)(j.c,{activeClassName:"Navigation__link--active",to:"/categories/".concat(e.type,"/").concat(e.name),className:"Navigation__link","data-premium":e.exclusive,children:c("nav.".concat(e.name))})},t)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{}),k&&Object(a.jsx)(O.a,{t:c,close:y}),S&&Object(a.jsx)(f.a,{t:c,close:T}),Object(a.jsx)("nav",{className:"Navigation ".concat(t||""),children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"Navigation__content",children:[Object(a.jsxs)("div",{className:"Navigation__side",children:[Object(a.jsx)(m.a,{className:"h-100 mr-1"}),Object(a.jsxs)("ul",{className:"Navigation__list",children:[Object(a.jsx)("li",{className:"Navigation__item",children:Object(a.jsx)(j.c,{exact:!0,activeClassName:"Navigation__link--active",to:"/categories/skins",className:"Navigation__link",children:c("nav.skins")})}),E]})]}),Object(a.jsxs)("div",{className:"Navigation__side",children:[Object(a.jsxs)("div",{className:"Navigation__item",children:[Object(a.jsxs)("button",{className:"Navigation__link Navigation__link--pop",onClick:function(){return T(!0)},children:[0!==x.length&&Object(a.jsx)("span",{children:x.length}),Object(a.jsx)(r.b,{className:"Navigation__icon"})]}),Object(a.jsx)(b,{children:c("nav.cart")})]}),Object(a.jsxs)("div",{className:"Navigation__item",children:[Object(a.jsxs)("button",{className:"Navigation__link Navigation__link--pop",onClick:function(){return y(!0)},children:[0!==N.length&&Object(a.jsx)("span",{children:N.length}),Object(a.jsx)(o.b,{className:"Navigation__icon"})]}),Object(a.jsx)(b,{children:c("nav.favorites")})]})]})]})})})]})};t.default=s.a.memo(_)}}]);
//# sourceMappingURL=9.162f04f5.chunk.js.map