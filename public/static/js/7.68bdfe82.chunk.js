(this["webpackJsonpcover-exp"]=this["webpackJsonpcover-exp"]||[]).push([[7,10],{106:function(e,a,t){"use strict";var n=t(33),s=t(1),i=t(15),l=t(35);a.a=function(){var e=Object(i.d)((function(e){return e})).cart,a=Object(i.c)(),t=Object(s.useCallback)((function(a){return-1!==e.findIndex((function(e){return e._id===a}))}),[e]),r=Object(s.useCallback)((function(s){var i=Object(n.a)(e);t(s._id)?i=i.filter((function(e){return e._id!==s._id})):i.push(s),a(l.b("cart",i)),sessionStorage.setItem("cart",JSON.stringify(i))}),[e,a,t]);return{cart:e,inTheCart:t,editCart:r}}},109:function(e,a,t){"use strict";var n=t(33),s=t(1),i=t(15),l=t(35);a.a=function(){var e=Object(i.d)((function(e){return e})).favorites,a=Object(i.c)(),t=Object(s.useCallback)((function(a){return-1!==e.findIndex((function(e){return e._id===a}))}),[e]),r=Object(s.useCallback)((function(s){var i=Object(n.a)(e);t(s._id)?i=i.filter((function(e){return e._id!==s._id})):e.length<10&&i.push(s),a(l.b("favorites",i)),localStorage.setItem("favorites",JSON.stringify(i))}),[e,a,t]);return{favorites:e,isFavorite:t,editFavorites:r}}},110:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"a",(function(){return m}));var n=t(123),s=t(113),i=t(67),l=t(18),r=t(4),c=t(6),o=(t(117),t(111)),d=t(2);a.c=function(e){var a=Object(i.a)().t;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{close:e.close,z:100}),Object(d.jsxs)("div",{className:"Modal",children:[Object(d.jsxs)("div",{className:"Modal__head",children:[Object(d.jsx)("h3",{className:"Modal__title heading heading--main",children:e.title}),Object(d.jsx)("button",{className:"btn btn__circle",onClick:e.close,children:Object(d.jsx)(l.q,{className:"icon"})})]}),Object(d.jsx)(n.Scrollbars,{className:"Modal__body",children:Object(d.jsx)("div",{className:"Modal__wrapper",children:e.children||Object(d.jsx)("p",{className:"Modal__text",children:a("main.nothing here")})})}),Object(d.jsx)("div",{className:"Modal__footer",children:e.children&&Object(d.jsxs)("div",{className:"flex aic",children:[e.price&&Object(d.jsxs)("span",{className:"price-tag mr-1",children:[a("main.total"),": $",e.price]}),e.edit&&Object(d.jsx)("button",{className:"btn btn__ghost btn__ghost--active Modal__btn",onClick:function(){return e.cancel()},children:a("main.cancel")}),e.editSave&&Object(d.jsx)("button",{className:"btn btn__ghost btn__ghost--active Modal__btn",onClick:function(){return e.editSave()},children:e.edit?a("main.save"):a("main.edit")}),e.primary&&!e.edit&&Object(d.jsx)("button",{className:"btn btn__ghost btn__ghost--active Modal__btn",onClick:function(){return e.primary()},children:e.actionTitle})]})})]})]})};var u=function(e){var a=e.data,t=e.edit,n=e.add,o=e.remove,u=e.media,m=Object(i.a)().t,b=Object(r.f)();return Object(d.jsxs)("div",{className:"Modal__item",onClick:function(){u&&b.push("/categories/".concat(a.type,"/").concat(a.category,"/").concat(a.deviceId))},children:[Object(d.jsxs)("div",{className:"flex aic",children:[Object(d.jsx)("figure",{className:"Modal__figure",children:Object(d.jsx)(s.LazyLoadImage,{className:"img",src:"/images/".concat(a.image),alt:a.name,width:"100%",height:"100%",effect:"opacity"})}),Object(d.jsxs)("div",{className:"flex fdc",children:[Object(d.jsx)("span",{className:"Modal__name",children:a.name}),Object(d.jsxs)("span",{className:"Modal__name--sub",children:[a.device,"\xa0\xa0\u2022\xa0\xa0",m("nav.".concat(a.type))]})]})]}),t?Object(d.jsx)("button",{className:"btn btn__pill btn__pill--red",onClick:o,children:m("main.remove")}):Object(d.jsxs)("div",{className:"flex",children:[!u&&Object(d.jsx)(c.b,{to:"/categories/".concat(a.type,"/").concat(a.category,"/").concat(a.deviceId),className:"btn btn__pill btn__pill--yellow mr-1",children:m("nav.collection")}),Object(d.jsxs)("button",{className:"btn btn__pill",onClick:n,children:[m("main.to cart"),Object(d.jsx)(l.n,{className:"ml-5 icon--sm"})]})]})]})},m=function(e){var a=e.data,t=e.edit,n=e.remove,l=Object(i.a)().t;return Object(d.jsxs)("div",{className:"Modal__item",children:[Object(d.jsxs)("div",{className:"flex aic",children:[Object(d.jsx)("figure",{className:"Modal__figure",children:Object(d.jsx)(s.LazyLoadImage,{className:"img",src:"/images/".concat(a.image),alt:a.name,width:"100%",height:"100%",effect:"opacity"})}),Object(d.jsxs)("div",{className:"flex fdc",children:[Object(d.jsx)("span",{className:"Modal__name",children:a.name}),Object(d.jsxs)("span",{className:"Modal__name--sub",children:[a.device,"\xa0\xa0\u2022\xa0\xa0",l("nav.skins")]})]})]}),t?Object(d.jsx)("button",{className:"btn btn__pill btn__pill--red",onClick:n,children:l("main.remove")}):Object(d.jsxs)("span",{className:"price-tag",children:["$",parseFloat(a.price).toFixed(2)]})]})}},111:function(e,a,t){"use strict";t(112);var n=t(2);a.a=function(e){var a=e.z,t=e.close,s=e.className;return Object(n.jsx)("div",{className:"backdrop ".concat(s||""),style:{zIndex:a},onClick:function(){return t()}})}},112:function(e,a,t){},115:function(e,a,t){"use strict";var n=t(6),s=t(44),i=t(2);a.a=function(e){var a=e.className;return Object(i.jsx)(n.b,{to:"/",className:"logo ".concat(a||""),children:Object(i.jsx)("img",{src:s.a,alt:"logo",width:"100%",height:"100%"})})}},116:function(e,a,t){"use strict";var n=t(33),s=t(26),i=t(1),l=t.n(i),r=t(15),c=t(4),o=t(106),d=t(35),u=t(110),m=t(2),b=function(e){var a=e.t,t=e.close,l=Object(o.a)().cart,b=Object(i.useState)(!1),p=Object(s.a)(b,2),h=p[0],f=p[1],j=Object(i.useState)(Object(n.a)(l)),v=Object(s.a)(j,2),g=v[0],O=v[1],x=Object(i.useState)([]),_=Object(s.a)(x,2),C=_[0],N=_[1],y=Object(c.f)(),w=Object(r.c)();Object(i.useEffect)((function(){return O(Object(n.a)(l))}),[l]);var M=g.map((function(e){return Object(m.jsx)(u.a,{data:e,edit:h,remove:function(){return function(e){var a=g.find((function(a){return a._id===e}));N((function(e){return[].concat(Object(n.a)(e),[a&&a])}));var t=g.filter((function(a){return a._id!==e}));O(t)}(e._id)}},e._id)})),E=0!==l.length&&l.reduce((function(e,a){return e+parseFloat(a.price)}),0);return console.log(C),Object(m.jsx)(u.c,{actionTitle:a("main.proceed"),primary:function(){return y.push("/summary")},title:a("nav.cart"),cancel:function(){O(l),f(!1),N([])},price:E&&E.toFixed(2),close:function(){t(!1),f(!1)},editSave:function(){return h?function(){var e=Object(n.a)(l);C.forEach((function(a){e=e.filter((function(e){return e._id!==a._id}))})),w(d.b("cart",e)),sessionStorage.setItem("cart",JSON.stringify(e)),f(!1),N([])}():f(!0)},edit:h,children:0!==l.length&&M})};a.a=l.a.memo(b)},117:function(e,a,t){},118:function(e,a,t){"use strict";var n=t(33),s=t(26),i=t(1),l=t.n(i),r=t(15),c=t(106),o=t(109),d=t(35),u=t(110),m=t(2);a.a=l.a.memo(Object(r.b)((function(e){return{favorites:e.favorites,media:e.media.mid}}))((function(e){var a=e.t,t=e.close,l=e.media,b=Object(r.c)(),p=Object(o.a)(),h=p.editFavorites,f=p.favorites,j=Object(c.a)().editCart,v=Object(i.useState)(!1),g=Object(s.a)(v,2),O=g[0],x=g[1],_=Object(i.useState)(Object(n.a)(f)),C=Object(s.a)(_,2),N=C[0],y=C[1],w=Object(i.useState)([]),M=Object(s.a)(w,2),E=M[0],S=M[1];Object(i.useEffect)((function(){return y(Object(n.a)(f))}),[f]);var T=N.map((function(e,a){return Object(m.jsx)(u.b,{media:l,data:e,edit:O,add:function(){return j(e)},remove:function(){return function(e){var a=N.find((function(a){return a._id===e})),t=N.filter((function(a){return a._id!==e}));S((function(e){return[].concat(Object(n.a)(e),[a&&a])})),y(t)}(e._id)}},e._id)}));return Object(m.jsx)(u.c,{actionTitle:a(O?"main.save":"main.edit"),editSave:function(){return O?function(){E.forEach((function(e){return h(e)}));var e=Object(n.a)(f);E.forEach((function(a){e=e.filter((function(e){return e._id!==a._id}))})),b(d.b("favorites",e)),localStorage.setItem("favorites",JSON.stringify(e)),x(!1),S([])}():x(!0)},title:a("nav.favorites"),edit:O,cancel:function(){y(f),x(!1),S([])},close:function(){t(!1),x(!1)},children:f.length>0&&T})})))},119:function(e,a,t){"use strict";var n=t(33),s=t(26),i=t(1),l=t(67),r=t(18),c=t(15),o=t(2);a.a=function(){var e=Object(l.a)().t,a=Object(c.d)((function(e){return e})),t=a.favorites,d=a.cart,u=Object(i.useState)(!1),m=Object(s.a)(u,2),b=m[0],p=m[1],h=Object(i.useState)(!1),f=Object(s.a)(h,2),j=f[0],v=f[1],g=Object(i.useRef)(),O=Object(i.useRef)(),x=Object(i.useRef)(),_=Object(i.useRef)();return Object(i.useEffect)((function(){var e;return g.current<t.length&&(p(!0),e=setTimeout((function(){p(!1)}),5e3)),function(){return clearTimeout(e)}}),[t.length]),Object(i.useEffect)((function(){var e;return O.current<d.length&&(v(!0),e=setTimeout((function(){v(!1)}),5e3)),function(){return clearTimeout(e)}}),[d.length]),Object(i.useEffect)((function(){_.current=Object(n.a)(d),O.current=d.length})),Object(i.useEffect)((function(){x.current=Object(n.a)(t),g.current=t.length})),b||j?Object(o.jsx)("div",{className:"notifier",children:Object(o.jsx)("div",{className:"container pos-rel",children:Object(o.jsx)("div",{className:"notifier__wrapper",children:Object(o.jsxs)("div",{className:"notifier__content",children:[Object(o.jsxs)("div",{className:"notifier__message flex aic",children:[Object(o.jsx)(r.a,{className:"icon--sm mr-1"}),e(j?"main.added cart":"main.added fav")]}),Object(o.jsx)("button",{className:"btn btn__circle ml-1",onClick:function(){j&&v(!1),b&&p(!1)},children:Object(o.jsx)(r.q,{className:"icon--sm"})})]})})})}):null}},125:function(e,a,t){},126:function(e,a,t){"use strict";a.a=t.p+"static/media/logo.e23e210e.png"},132:function(e,a,t){},134:function(e,a,t){"use strict";var n=t(108),s=t(105);function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l={update:function(){var e=this,a=e.rtl,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var i,l=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,c=e.params.loop?Math.ceil((l-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((i=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>l-1-2*e.loopedSlides&&(i-=l-2*e.loopedSlides),i>c-1&&(i-=c),i<0&&"bullets"!==e.params.paginationType&&(i=c+i)):i="undefined"!==typeof e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===t.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var o,d,u,m=e.pagination.bullets;if(t.dynamicBullets&&(e.pagination.bulletSize=m.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=i-e.previousIndex,e.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=i-e.pagination.dynamicBulletIndex,u=((d=o+(Math.min(m.length,t.dynamicMainBullets)-1))+o)/2),m.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)m.each((function(e){var a=Object(n.a)(e),s=a.index();s===i&&a.addClass(t.bulletActiveClass),t.dynamicBullets&&(s>=o&&s<=d&&a.addClass(t.bulletActiveClass+"-main"),s===o&&a.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),s===d&&a.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var b=m.eq(i),p=b.index();if(b.addClass(t.bulletActiveClass),t.dynamicBullets){for(var h=m.eq(o),f=m.eq(d),j=o;j<=d;j+=1)m.eq(j).addClass(t.bulletActiveClass+"-main");if(e.params.loop)if(p>=m.length-t.dynamicMainBullets){for(var v=t.dynamicMainBullets;v>=0;v-=1)m.eq(m.length-v).addClass(t.bulletActiveClass+"-main");m.eq(m.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else h.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),f.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else h.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),f.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(m.length,t.dynamicMainBullets+4),O=(e.pagination.bulletSize*g-e.pagination.bulletSize)/2-u*e.pagination.bulletSize,x=a?"right":"left";m.css(e.isHorizontal()?x:"top",O+"px")}}if("fraction"===t.type&&(r.find(Object(s.b)(t.currentClass)).text(t.formatFractionCurrent(i+1)),r.find(Object(s.b)(t.totalClass)).text(t.formatFractionTotal(c))),"progressbar"===t.type){var _;_=t.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var C=(i+1)/c,N=1,y=1;"horizontal"===_?N=C:y=C,r.find(Object(s.b)(t.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+N+") scaleY("+y+")").transition(e.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(e,i+1,c)),e.emit("paginationRender",r[0])):e.emit("paginationUpdate",r[0]),e.params.watchOverflow&&e.enabled&&r[e.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,n=e.pagination.$el,i="";if("bullets"===a.type){var l=e.params.loop?Math.ceil((t-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&l>t&&(l=t);for(var r=0;r<l;r+=1)a.renderBullet?i+=a.renderBullet.call(e,r,a.bulletClass):i+="<"+a.bulletElement+' class="'+a.bulletClass+'"></'+a.bulletElement+">";n.html(i),e.pagination.bullets=n.find(Object(s.b)(a.bulletClass))}"fraction"===a.type&&(i=a.renderFraction?a.renderFraction.call(e,a.currentClass,a.totalClass):'<span class="'+a.currentClass+'"></span> / <span class="'+a.totalClass+'"></span>',n.html(i)),"progressbar"===a.type&&(i=a.renderProgressbar?a.renderProgressbar.call(e,a.progressbarFillClass):'<span class="'+a.progressbarFillClass+'"></span>',n.html(i)),"custom"!==a.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this;e.params.pagination=Object(s.c)(e.$el,e.params.pagination,e.params.createElements,{el:"swiper-pagination"});var a=e.params.pagination;if(a.el){var t=Object(n.a)(a.el);0!==t.length&&(e.params.uniqueNavElements&&"string"===typeof a.el&&t.length>1&&(t=e.$el.find(a.el)),"bullets"===a.type&&a.clickable&&t.addClass(a.clickableClass),t.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&(t.addClass(""+a.modifierClass+a.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),"progressbar"===a.type&&a.progressbarOpposite&&t.addClass(a.progressbarOppositeClass),a.clickable&&t.on("click",Object(s.b)(a.bulletClass),(function(a){a.preventDefault();var t=Object(n.a)(this).index()*e.params.slidesPerGroup;e.params.loop&&(t+=e.loopedSlides),e.slideTo(t)})),Object(s.e)(e.pagination,{$el:t,el:t[0]}),e.enabled||t.addClass(a.lockClass))}},destroy:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.pagination.$el;t.removeClass(a.hiddenClass),t.removeClass(a.modifierClass+a.type),e.pagination.bullets&&e.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&t.off("click",Object(s.b)(a.bulletClass))}}};a.a={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){Object(s.a)(this,{pagination:i({dynamicBulletIndex:0},l)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||"undefined"===typeof e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},"enable disable":function(e){var a=e.pagination.$el;a&&a[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)},click:function(e,a){var t=a.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!Object(n.a)(t).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&t===e.navigation.nextEl||e.navigation.prevEl&&t===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}}},136:function(e,a,t){"use strict";t.r(a);var n=t(26),s=t(1),i=t.n(s),l=t(67),r=t(122),c=t(18),o=t(15),d=t(4),u=t(6),m=t(116),b=t(118),p=t(111),h=t(115),f=t(119),j=(t(132),t(2)),v=function(){var e=Object(l.a)().t,a=Object(d.g)(),t=Object(s.useState)(!1),i=Object(n.a)(t,2),v=i[0],g=i[1],O=Object(s.useState)(!1),x=Object(n.a)(O,2),_=x[0],C=x[1],N=Object(s.useState)(!1),y=Object(n.a)(N,2),w=y[0],M=y[1],E=Object(o.d)((function(e){return e.categories}));Object(s.useEffect)((function(){var e=document.getElementById("root");return v?(document.documentElement.style.overflow="hidden",e.style.transition="all .3s ease",e.style.transform="translateX(-60vw)"):(e.style.removeProperty("transform"),document.documentElement.style.removeProperty("overflow")),function(){e.removeAttribute("style"),document.documentElement.removeAttribute("style")}}),[v]),Object(s.useEffect)((function(){g(!1),C(!1),M(!1)}),[a.pathname]);var S="/"===a.pathname,T=E&&E.map((function(a,t){return Object(j.jsx)(u.c,{activeClassName:"m-nav__link--active",to:"/categories/".concat(a.type,"/").concat(a.name),className:"m-nav__link","data-premium":a.exclusive,children:e("nav.".concat(a.name))},t)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.a,{}),_&&Object(j.jsx)(b.a,{t:e,close:function(){return C(!1)}}),w&&Object(j.jsx)(m.a,{t:e,close:function(){return M(!1)}}),v&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p.a,{z:109,close:function(){return g(!1)},className:"backdrop--transparent"}),Object(j.jsxs)("nav",{className:"m-nav__bar",children:[Object(j.jsxs)("div",{className:"m-nav__group",children:[Object(j.jsxs)("span",{className:"m-nav__title text text--mid",children:[e("main.categories"),":"]}),Object(j.jsx)(u.c,{activeClassName:"m-nav__link--active",exact:!0,to:"/categories/skins",className:"m-nav__link",children:e("nav.skins")}),T]}),Object(j.jsxs)("div",{className:"m-nav__group",children:[Object(j.jsx)("button",{onClick:function(){g(!1),C(!0)},className:"btn btn__ghost btn__ghost--active",children:Object(j.jsx)(r.b,{className:"icon"})}),Object(j.jsx)("button",{onClick:function(){g(!1),M(!0)},className:"btn btn__ghost btn__ghost--active",children:Object(j.jsx)(c.b,{className:"icon"})})]})]})]}),Object(j.jsx)("nav",{role:"navigation",className:"m-nav",children:Object(j.jsx)("div",{className:"container w-100",children:Object(j.jsxs)("div",{className:"flex aic ".concat(S?"jce":"jcsb"),children:[!S&&Object(j.jsx)(h.a,{}),Object(j.jsx)("button",{className:"m-nav__menu ".concat(v?"m-nav__menu--active":""),onClick:function(){return g(!0)},children:v?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(c.i,{className:"icon mr-5"}),e("main.close")]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(c.j,{className:"icon mr-5"}),e("nav.menu")]})})]})})})]})};a.default=i.a.memo(v)},160:function(e,a,t){},161:function(e,a,t){},177:function(e,a,t){"use strict";t.r(a);var n=t(26),s=t(1),i=t.n(s),l=t(67),r=t(174),c=t(167),o=t(173),d=t(134),u=t(105);function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var b={setTranslate:function(){for(var e=this,a=e.slides,t=0;t<a.length;t+=1){var n=e.slides.eq(t),s=-n[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var i=0;e.isHorizontal()||(i=s,s=0);var l=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(n[0].progress),0):1+Math.min(Math.max(n[0].progress,-1),0);n.css({opacity:l}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,n=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd((function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)n.trigger(e[t])}}))}}},p={name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){Object(u.a)(this,{fadeEffect:m({},b)})},on:{beforeInit:function(e){if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var a={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};Object(u.e)(e.params,a),Object(u.e)(e.originalParams,a)}},setTranslate:function(e){"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e,a){"fade"===e.params.effect&&e.fadeEffect.setTransition(a)}}},h=t(107),f=t(108);var j={lastScrollTime:Object(u.h)(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return Object(h.b)().navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e=Object(h.a)(),a="onwheel",t=a in e;if(!t){var n=e.createElement("div");n.setAttribute(a,"return;"),t="function"===typeof n.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var a=0,t=0,n=0,s=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),n=10*a,s=10*t,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(n=e.deltaX),e.shiftKey&&!n&&(n=s,s=0),(n||s)&&e.deltaMode&&(1===e.deltaMode?(n*=40,s*=40):(n*=800,s*=800)),n&&!a&&(a=n<1?-1:1),s&&!t&&(t=s<1?-1:1),{spinX:a,spinY:t,pixelX:n,pixelY:s}},handleMouseEnter:function(){this.enabled&&(this.mouseEntered=!0)},handleMouseLeave:function(){this.enabled&&(this.mouseEntered=!1)},handle:function(e){var a=e,t=this;if(t.enabled){var n=t.params.mousewheel;t.params.cssMode&&a.preventDefault();var s=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(s=Object(f.a)(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!s[0].contains(a.target)&&!n.releaseOnEdges)return!0;a.originalEvent&&(a=a.originalEvent);var i=0,l=t.rtlTranslate?-1:1,r=j.normalize(a);if(n.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(r.pixelX)>Math.abs(r.pixelY)))return!0;i=-r.pixelX*l}else{if(!(Math.abs(r.pixelY)>Math.abs(r.pixelX)))return!0;i=-r.pixelY}else i=Math.abs(r.pixelX)>Math.abs(r.pixelY)?-r.pixelX*l:-r.pixelY;if(0===i)return!0;n.invert&&(i=-i);var c=t.getTranslate()+i*n.sensitivity;if(c>=t.minTranslate()&&(c=t.minTranslate()),c<=t.maxTranslate()&&(c=t.maxTranslate()),(!!t.params.loop||!(c===t.minTranslate()||c===t.maxTranslate()))&&t.params.nested&&a.stopPropagation(),t.params.freeMode){var o={time:Object(u.h)(),delta:Math.abs(i),direction:Math.sign(i)},d=t.mousewheel.lastEventBeforeSnap,m=d&&o.time<d.time+500&&o.delta<=d.delta&&o.direction===d.direction;if(!m){t.mousewheel.lastEventBeforeSnap=void 0,t.params.loop&&t.loopFix();var b=t.getTranslate()+i*n.sensitivity,p=t.isBeginning,h=t.isEnd;if(b>=t.minTranslate()&&(b=t.minTranslate()),b<=t.maxTranslate()&&(b=t.maxTranslate()),t.setTransition(0),t.setTranslate(b),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!p&&t.isBeginning||!h&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeModeSticky){clearTimeout(t.mousewheel.timeout),t.mousewheel.timeout=void 0;var v=t.mousewheel.recentWheelEvents;v.length>=15&&v.shift();var g=v.length?v[v.length-1]:void 0,O=v[0];if(v.push(o),g&&(o.delta>g.delta||o.direction!==g.direction))v.splice(0);else if(v.length>=15&&o.time-O.time<500&&O.delta-o.delta>=1&&o.delta<=6){var x=i>0?.8:.2;t.mousewheel.lastEventBeforeSnap=o,v.splice(0),t.mousewheel.timeout=Object(u.g)((function(){t.slideToClosest(t.params.speed,!0,void 0,x)}),0)}t.mousewheel.timeout||(t.mousewheel.timeout=Object(u.g)((function(){t.mousewheel.lastEventBeforeSnap=o,v.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(m||t.emit("scroll",a),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),b===t.minTranslate()||b===t.maxTranslate())return!0}}else{var _={time:Object(u.h)(),delta:Math.abs(i),direction:Math.sign(i),raw:e},C=t.mousewheel.recentWheelEvents;C.length>=2&&C.shift();var N=C.length?C[C.length-1]:void 0;if(C.push(_),N?(_.direction!==N.direction||_.delta>N.delta||_.time>N.time+150)&&t.mousewheel.animateSlider(_):t.mousewheel.animateSlider(_),t.mousewheel.releaseScroll(_))return!0}return a.preventDefault?a.preventDefault():a.returnValue=!1,!1}},animateSlider:function(e){var a=this,t=Object(h.b)();return!(this.params.mousewheel.thresholdDelta&&e.delta<this.params.mousewheel.thresholdDelta)&&(!(this.params.mousewheel.thresholdTime&&Object(u.h)()-a.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime)&&(e.delta>=6&&Object(u.h)()-a.mousewheel.lastScrollTime<60||(e.direction<0?a.isEnd&&!a.params.loop||a.animating||(a.slideNext(),a.emit("scroll",e.raw)):a.isBeginning&&!a.params.loop||a.animating||(a.slidePrev(),a.emit("scroll",e.raw)),a.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)))},releaseScroll:function(e){var a=this,t=a.params.mousewheel;if(e.direction<0){if(a.isEnd&&!a.params.loop&&t.releaseOnEdges)return!0}else if(a.isBeginning&&!a.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=this,a=j.event();if(e.params.cssMode)return e.wrapperEl.removeEventListener(a,e.mousewheel.handle),!0;if(!a)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(t=Object(f.a)(e.params.mousewheel.eventsTarget)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(a,e.mousewheel.handle),e.mousewheel.enabled=!0,!0},disable:function(){var e=this,a=j.event();if(e.params.cssMode)return e.wrapperEl.addEventListener(a,e.mousewheel.handle),!0;if(!a)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(t=Object(f.a)(e.params.mousewheel.eventsTarget)),t.off(a,e.mousewheel.handle),e.mousewheel.enabled=!1,!0}},v={name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function(){Object(u.a)(this,{mousewheel:{enabled:!1,lastScrollTime:Object(u.h)(),lastEventBeforeSnap:void 0,recentWheelEvents:[],enable:j.enable,disable:j.disable,handle:j.handle,handleMouseEnter:j.handleMouseEnter,handleMouseLeave:j.handleMouseLeave,animateSlider:j.animateSlider,releaseScroll:j.releaseScroll}})},on:{init:function(e){!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(e){e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}},g=(t(127),t(125),t(160),t(161),t(126)),O=t(136),x=t(6),_=t(2);o.a.use([d.a,p,v]);var C=function(){var e=Object(l.a)().t,a=Object(s.useState)(null),t=Object(n.a)(a,2),i=t[0],o=t[1];return Object(s.useEffect)((function(){return i&&i.update()})),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(O.default,{}),Object(_.jsx)("header",{className:"m-header",children:Object(_.jsxs)(r.a,{className:"m-header__list",effect:"fade",fadeEffect:{crossFade:!0},direction:"vertical",onInit:function(e){return o(e)},mousewheel:!0,children:[Object(_.jsx)(c.a,{className:"m-header__section",children:Object(_.jsx)("div",{className:"m-header__jumbo",children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("figure",{className:"m-header__figure",children:Object(_.jsx)("img",{className:"img",src:g.a,alt:"180logo"})}),Object(_.jsxs)("div",{className:"mb-1",children:[Object(_.jsx)("h1",{className:"m-header__heading",children:e("main.hero text.p1")}),Object(_.jsx)("h2",{className:"m-header__heading--sub",children:e("main.hero text.p2")})]}),Object(_.jsxs)("div",{className:"flex",children:[Object(_.jsx)(x.b,{to:"/categories/skins",className:"btn btn__primary mr-15",children:e("main.explore")}),Object(_.jsx)(x.b,{to:"/180degrees/about",className:"btn btn__secondary",children:e("nav.about")})]})]})})}),Object(_.jsx)(c.a,{className:"m-header__section",children:Object(_.jsxs)("div",{className:"m-header__hero",children:[Object(_.jsx)("h2",{className:"m-header__heading--secondary",children:"Maximum Wear"}),Object(_.jsx)("p",{className:"m-header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})}),Object(_.jsx)(c.a,{className:"m-header__section",children:Object(_.jsxs)("div",{className:"m-header__hero",children:[Object(_.jsx)("h2",{className:"m-header__heading--secondary",children:"Maximum Wear"}),Object(_.jsx)("p",{className:"m-header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})}),Object(_.jsx)(c.a,{className:"m-header__section",children:Object(_.jsxs)("div",{className:"m-header__hero",children:[Object(_.jsx)("h2",{className:"m-header__heading--secondary",children:"Protective material"}),Object(_.jsx)("p",{className:"m-header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})}),Object(_.jsx)(c.a,{className:"m-header__section",children:Object(_.jsxs)("div",{className:"m-header__hero",children:[Object(_.jsx)("h2",{className:"m-header__heading--secondary",children:"Protective material"}),Object(_.jsx)("p",{className:"m-header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})}),Object(_.jsx)(c.a,{className:"m-header__section",children:Object(_.jsxs)("div",{className:"m-header__hero",children:[Object(_.jsx)("h2",{className:"m-header__heading--secondary",children:"Super accurate cut"}),Object(_.jsx)("p",{className:"m-header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})}),Object(_.jsx)(c.a,{className:"m-header__section",children:Object(_.jsxs)("div",{className:"m-header__hero",children:[Object(_.jsx)("h2",{className:"m-header__heading--secondary",children:"Super accurate cut"}),Object(_.jsx)("p",{className:"m-header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})}),Object(_.jsx)(c.a,{className:"m-header__section",children:Object(_.jsxs)("div",{className:"m-header__hero",children:[Object(_.jsx)("h2",{className:"m-header__heading--secondary",children:"Rich skin set"}),Object(_.jsx)("p",{className:"m-header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})}),Object(_.jsx)(c.a,{className:"m-header__section",children:Object(_.jsxs)("div",{className:"m-header__hero",children:[Object(_.jsx)("h2",{className:"m-header__heading--secondary",children:"Rich skin set"}),Object(_.jsx)("p",{className:"m-header__heading--sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus."})]})})]})})]})};a.default=i.a.memo(C)}}]);
//# sourceMappingURL=7.68bdfe82.chunk.js.map