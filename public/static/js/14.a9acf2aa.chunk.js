(this["webpackJsonpcover-exp"]=this["webpackJsonpcover-exp"]||[]).push([[14],{108:function(e,a,c){"use strict";var n=c(2);c(111);a.a=function(e){var a=e.z,c=e.close,t=e.className;return Object(n.jsx)("div",{className:"backdrop ".concat(t||""),style:{zIndex:a},onClick:function(){return c()}})}},111:function(e,a,c){},112:function(e,a,c){"use strict";var n=c(2);a.a=function(e){var a=e.className;return Object(n.jsx)("div",{className:"loading ".concat(a||"")})}},162:function(e,a,c){},176:function(e,a,c){"use strict";c.r(a);var n=c(5),t=c(26),s=c(2),i=c(1),l=c(4),r=c(6),d=c(67),j=c(110),m=c(18),b=c(121),o=(c(162),c(16)),u=c(55),h=c(112),O=c(108),_=function(e){var a=e.click,c=e.close,n=(e.message,e.items),t=Object(d.a)().t;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O.a,{z:100,close:c}),Object(s.jsxs)("div",{className:"confirm",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"confirm__text",children:t("main.confirm")}),n&&Object(s.jsxs)("p",{className:"confirm__text--sub",children:[t("main.to delete"),": ",n]})]}),Object(s.jsxs)("div",{className:"flex w-100 jce",children:[Object(s.jsx)("button",{className:"btn btn__ghost btn__ghost--active mr-1",onClick:a,children:t("main.apply")}),Object(s.jsx)("button",{className:"btn btn__ghost btn__ghost--active",onClick:c,children:t("main.cancel")})]})]})]})},x=function(){var e=Object(d.a)().t,a=Object(i.useState)(null),c=Object(t.a)(a,2),l=c[0],r=c[1],u=Object(i.useState)(!1),O=Object(t.a)(u,2),x=O[0],f=O[1],N=Object(i.useState)(!1),p=Object(t.a)(N,2),v=(p[0],p[1],Object(i.useRef)()),g=Object(i.useState)(!1),k=Object(t.a)(g,2),C=k[0],w=k[1],y=Object(i.useState)(!1),S=Object(t.a)(y,2),F=(S[0],S[1]),I=Object(i.useState)(!1),z=Object(t.a)(I,2),E=z[0],q=z[1],A=Object(i.useState)(null),D=Object(t.a)(A,2),H=D[0],J=D[1],L=Object(i.useState)(null),$=Object(t.a)(L,2),B=$[0],G=$[1],P=Object(i.useState)(null),R=Object(t.a)(P,2),Y=R[0],K=R[1];Object(i.useEffect)((function(){Object(o.a)("/skins").then((function(e){var a=e.data;console.log(a),r(a.data.data)}))}),[]);var M=E&&E._id;Object(i.useEffect)((function(){return K(null)}),[M]);var Q=E&&E.skins&&E.skins.map((function(e,a){return Object(s.jsxs)("div",{className:"admin__panel-item ".concat(H&&H._id===e._id?"admin__panel-item--active":""),tabIndex:"0",onClick:function(){return J(e)},children:[Object(s.jsxs)("div",{className:"flex aic",children:[Object(s.jsx)("figure",{className:"admin__panel-figure",children:Object(s.jsx)(j.LazyLoadImage,{className:"img",width:"100%",height:"100%",alt:e.name,effect:"opacity",src:"http://localhost:3003/images/".concat(e.image)})}),Object(s.jsx)("span",{className:"admin__panel-itemname",children:e.name})]}),Object(s.jsxs)("span",{className:"admin__panel-itemprice",children:["$",parseFloat(e.price).toFixed(2)]})]},a)})),T=l&&l.length>0&&l.map((function(a,c){return Object(s.jsxs)("li",{className:"admin__item pos-rel",children:[Object(s.jsxs)("div",{className:"admin__card ".concat(E&&a._id===E._id?"admin__card--active":""),onClick:function(){var e;F(!1),e=a,f(!0),Object(o.a)("/skins/".concat(e._id,"?project=skins")).then((function(a){var c=a.data;q(Object(n.a)(Object(n.a)({},e),{},{skins:c.data.data.skins})),f(!1)})),G(null)},tabIndex:"0",children:[Object(s.jsxs)("div",{className:"flex fdc mr-15",children:[Object(s.jsx)("span",{className:"admin__card-title",children:a.device}),Object(s.jsx)("span",{className:"heading heading--sub c-grey-l",children:a.type})]}),Object(s.jsxs)("div",{className:"flex",children:[Object(s.jsxs)("span",{className:"admin__card-feature",children:[e("main.num skins"),": ",a.skins.length]}),Object(s.jsxs)("span",{className:"admin__card-feature",children:[e("main.num purchases"),": ",a.numberOfPurchases]})]})]}),Object(s.jsx)("div",{className:"admin__card-sets",children:E&&E._id===a._id&&Object(s.jsx)("button",{className:"admin__card-btn",onClick:function(){return G("device")},children:Object(s.jsx)(m.q,{className:"icon--sm"})})})]},c)}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"flex w-100 jce mb-15",children:[E&&Object(s.jsx)("button",{className:"btn btn__ghost btn__ghost--active mr-1",onClick:function(){return Y?function(){var e=new FormData,a=v.current.files;console.log(a),Array.from(a).forEach((function(a){e.append("skinImage",a)})),o.a.patch("/skins/".concat(E._id),{images:e}).then((function(e){console.log(e)}))}():K({name:"",price:"",image:null})},children:e(Y?"main.save":"main.add skin")}),Object(s.jsx)("button",{className:"btn btn__ghost btn__ghost--active",onClick:function(){w(!C),F(!1)},children:e(C?"main.save":"main.add")})]}),Object(s.jsxs)("div",{className:"flex w-100",children:[B&&"device"===B&&Object(s.jsx)(_,{click:function(){o.a.delete("/skins/".concat(E._id)).then((function(e){var a=l.filter((function(e){return e._id!==E._id}));r(a),q(null),G(null)}))},close:function(){return G(null)},items:E.device}),l&&l.length>0?Object(s.jsxs)("div",{className:"flex fdc w-100",children:[Object(s.jsx)(b.Scrollbars,{className:"fgr",style:{height:"25rem",width:"100%"},children:Object(s.jsx)("ul",{className:"admin__list",children:T})}),Y&&Object(s.jsxs)("div",{className:"admin__form",children:[Object(s.jsx)("div",{className:"admin__panel-head",children:Object(s.jsxs)("div",{className:"flex aic jcsb",children:[Object(s.jsx)("h1",{className:"heading heaing--main",children:e("main.add")}),Object(s.jsx)("button",{className:"btn btn__circle",onClick:function(){return K(null)},children:Object(s.jsx)(m.q,{className:"icon"})})]})}),Object(s.jsxs)("div",{className:"flex w-100",children:[Object(s.jsxs)("div",{className:"w-100",children:[Object(s.jsxs)("label",{className:"admin__card-feature w-100",children:[e("main.name"),Object(s.jsx)("input",{className:"admin__input",type:"text",placeholder:e("main.name"),value:Y.name,onChange:function(e){return K((function(a){return Object(n.a)(Object(n.a)({},a),{},{name:e.target.value})}))}})]}),Object(s.jsxs)("label",{className:"admin__card-feature w-100",children:[e("main.price"),Object(s.jsx)("input",{className:"admin__input",type:"text",placeholder:e("main.price"),value:Y.price,onChange:function(e){return K((function(a){return Object(n.a)(Object(n.a)({},a),{},{price:e.target.value})}))}})]}),Object(s.jsx)("input",{className:"none",type:"file",accept:"image/*",ref:v})]}),Object(s.jsxs)("div",{className:"admin__images",children:[Object(s.jsx)("span",{className:"admin__card-feature",children:"Images:"}),Object(s.jsx)("button",{className:"btn btn__ghost btn__ghost--active",type:"button",onClick:function(){return v.current.click()},children:Object(s.jsx)(m.o,{className:"icon"})})]})]})]})]}):Object(s.jsx)("div",{className:"admin__list text text--mid tc",children:e("main.nothing here")}),C&&Object(s.jsxs)("div",{className:"admin__panel",children:[Object(s.jsxs)("div",{className:"admin__panel-head flex aic jcsb",children:[Object(s.jsx)("h1",{className:"heading heaing--main",children:e("main.add")}),Object(s.jsx)("button",{className:"btn btn__circle",onClick:function(){return w(!1)},children:Object(s.jsx)(m.q,{className:"icon"})})]}),Object(s.jsx)("div",{className:"admin__panel-body"})]}),E?Object(s.jsx)("div",{className:"admin__panel",children:x?Object(s.jsx)("div",{className:"wh-100 flex aic jcc",children:Object(s.jsx)(h.a,{})}):Object(s.jsxs)(s.Fragment,{children:[B&&"skin"===B&&Object(s.jsx)(_,{click:function(){return function(e){var a=E.skins.filter((function(a){return a._id!==e}));o.a.patch("/skins/".concat(E._id),{skins:a}).then((function(e){q(Object(n.a)(Object(n.a)({},E),{},{skins:a})),G(!1),console.log(e)}))}(H._id)},close:function(){return G(null)},items:"".concat(E.device,", ").concat(H.name)}),Object(s.jsxs)("div",{className:"admin__panel-head",children:[Object(s.jsxs)("div",{className:"flex jcsb aic",children:[Object(s.jsx)("h1",{className:"heading heaing--main",children:E.device}),Object(s.jsx)("button",{className:"btn btn__circle",onClick:function(){return q(null)},children:Object(s.jsx)(m.q,{className:"icon"})})]}),Object(s.jsxs)("span",{className:"admin__card-feature",children:[e("main.num skins"),": ",E.skins.length,"; ",e("main.avg price"),": $",parseFloat(E.skins.reduce((function(e,a){return e+parseFloat(a.price)}),0)/E.skins.length).toFixed(2)]})]}),Object(s.jsx)("div",{className:"admin__panel-body",children:Object(s.jsx)(b.Scrollbars,{className:"admin__panel-wrapper",children:Q})}),Object(s.jsx)("div",{className:"admin__panel-footer",children:H&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{className:"admin__card-btn mr-5",onClick:function(){},children:Object(s.jsx)(m.m,{className:"icon--sm"})}),Object(s.jsx)("button",{className:"admin__card-btn",onClick:function(){return G("skin")},children:Object(s.jsx)(m.k,{className:"icon--sm"})})]})})]})}):!C&&Object(s.jsx)("div",{className:"admin__panel"})]})]})},f=function(e){var a=e.onAuth,c=Object(d.a)().t,n=Object(i.useState)("admin"),l=Object(t.a)(n,2),r=l[0],j=l[1],m=Object(i.useState)("hehe boay"),b=Object(t.a)(m,2),h=b[0],O=b[1],_=Object(i.useState)(null),x=Object(t.a)(_,2),f=x[0],N=x[1],p=Object(i.useState)(!1),v=Object(t.a)(p,2),g=v[0],k=v[1];return g?Object(s.jsx)(u.a,{}):Object(s.jsx)("div",{className:"auth",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"auth__wrapper",children:[Object(s.jsxs)("div",{className:"auth__content",children:[Object(s.jsxs)("div",{className:"auth__head",children:[Object(s.jsx)("h1",{className:"auth__heading",children:c("nav.auth")}),f&&Object(s.jsx)("p",{className:"auth__text--error",children:f})]}),Object(s.jsxs)("form",{className:"auth__body",onSubmit:function(e){return function(e){if(e.preventDefault(),""===r||""===h)return N(c("error.fill all"));k(!0),o.a.post("/users/login",{login:r,password:h}).then((function(e){console.log(e),k(!0),N(null),a(e.data.token)})).catch((function(e){console.log(e.response.data.message),N(e.response.data.message),k(!1)}))}(e)},children:[Object(s.jsxs)("label",{className:"auth__label",children:[c("input.y login"),Object(s.jsx)("input",{className:"auth__input",placeholder:c("input.login"),value:r,type:"text",onChange:function(e){return j(e.target.value)}})]}),Object(s.jsxs)("label",{className:"auth__label mb-2",children:[c("input.y password"),Object(s.jsx)("input",{className:"auth__input",placeholder:c("input.password"),value:h,type:"password",onChange:function(e){return O(e.target.value)}})]}),Object(s.jsx)("button",{className:"auth__btn",children:c("main.log in")})]})]}),Object(s.jsxs)("div",{className:"auth__brand",children:["\xa9180Gradus ",(new Date).getFullYear()]})]})})})};a.default=function(){var e=Object(l.h)(),a=Object(d.a)().t,c=Object(i.useState)(!1),n=Object(t.a)(c,2),j=n[0],m=n[1],b=Object(i.useState)(null),u=Object(t.a)(b,2),h=u[0],O=u[1],_=Object(i.useState)(null),N=Object(t.a)(_,2),p=(N[0],N[1]);return Object(i.useEffect)((function(){o.a.defaults.headers.common.Authorization=h&&"Bearer ".concat(h)}),[h]),Object(i.useEffect)((function(){h&&Object(o.a)("/".concat(e.section||"skins")).then((function(e){console.log(e),p(e.data.data.data)}))}),[h,e.section]),j?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("section",{className:"admin",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"admin__wrapper",children:[Object(s.jsxs)("nav",{className:"admin__nav",role:"navigation",children:[Object(s.jsx)(r.c,{to:"/admin",activeClassName:"admin__link--active",className:"admin__link",exact:!0,children:a("nav.dashboard")}),Object(s.jsx)(r.c,{to:"/admin/skins",activeClassName:"admin__link--active",className:"admin__link",children:a("nav.skins")}),Object(s.jsx)(r.c,{to:"/admin/orders",activeClassName:"admin__link--active",className:"admin__link",children:a("nav.orders")}),Object(s.jsx)(r.c,{to:"/admin/categories",activeClassName:"admin__link--active",className:"admin__link",children:a("main.categories")}),Object(s.jsx)(r.c,{to:"/admin/users",activeClassName:"admin__link--active",className:"admin__link",children:a("nav.users")})]}),Object(s.jsx)("div",{className:"admin__body",children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/admin/skins",children:Object(s.jsx)(x,{token:h})}),Object(s.jsx)(l.a,{path:"/categories",children:"Hello"}),Object(s.jsx)(l.a,{path:"/orders",children:"Hello"}),Object(s.jsx)(l.a,{path:"/users",children:"Hello"})]})})]})})})}):Object(s.jsx)(f,{onAuth:function(e){m(!0),O(e)}})}}}]);
//# sourceMappingURL=14.a9acf2aa.chunk.js.map