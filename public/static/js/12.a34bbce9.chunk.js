(this["webpackJsonpcover-exp"]=this["webpackJsonpcover-exp"]||[]).push([[12],{122:function(e,a,t){},123:function(e,a,t){},131:function(e,a,t){"use strict";var n=t(107),i=t(105);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s={update:function(){var e=this,a=e.params.navigation;if(!e.params.loop){var t=e.navigation,n=t.$nextEl,i=t.$prevEl;i&&i.length>0&&(e.isBeginning?i.addClass(a.disabledClass):i.removeClass(a.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](a.lockClass)),n&&n.length>0&&(e.isEnd?n.addClass(a.disabledClass):n.removeClass(a.disabledClass),n[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](a.lockClass))}},onPrevClick:function(e){var a=this;e.preventDefault(),a.isBeginning&&!a.params.loop||a.slidePrev()},onNextClick:function(e){var a=this;e.preventDefault(),a.isEnd&&!a.params.loop||a.slideNext()},init:function(){var e,a,t=this,l=t.params.navigation;(l.nextEl||l.prevEl)&&(l.nextEl&&(e=Object(n.a)(l.nextEl),t.params.uniqueNavElements&&"string"===typeof l.nextEl&&e.length>1&&1===t.$el.find(l.nextEl).length&&(e=t.$el.find(l.nextEl))),l.prevEl&&(a=Object(n.a)(l.prevEl),t.params.uniqueNavElements&&"string"===typeof l.prevEl&&a.length>1&&1===t.$el.find(l.prevEl).length&&(a=t.$el.find(l.prevEl))),e&&e.length>0&&e.on("click",t.navigation.onNextClick),a&&a.length>0&&a.on("click",t.navigation.onPrevClick),Object(i.c)(t.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:a,prevEl:a&&a[0]}))},destroy:function(){var e=this,a=e.navigation,t=a.$nextEl,n=a.$prevEl;t&&t.length&&(t.off("click",e.navigation.onNextClick),t.removeClass(e.params.navigation.disabledClass)),n&&n.length&&(n.off("click",e.navigation.onPrevClick),n.removeClass(e.params.navigation.disabledClass))}};a.a={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){Object(i.a)(this,{navigation:l({},s)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},click:function(e,a){var t=e.navigation,i=t.$nextEl,l=t.$prevEl,s=a.target;if(e.params.navigation.hideOnClick&&!Object(n.a)(s).is(l)&&!Object(n.a)(s).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===s||e.pagination.el.contains(s)))return;var r;i?r=i.hasClass(e.params.navigation.hiddenClass):l&&(r=l.hasClass(e.params.navigation.hiddenClass)),!0===r?e.emit("navigationShow"):e.emit("navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),l&&l.toggleClass(e.params.navigation.hiddenClass)}}}}},132:function(e,a,t){"use strict";var n=t(107),i=t(105);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s={update:function(){var e=this,a=e.rtl,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var i,l=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,s=e.pagination.$el,r=e.params.loop?Math.ceil((l-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((i=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>l-1-2*e.loopedSlides&&(i-=l-2*e.loopedSlides),i>r-1&&(i-=r),i<0&&"bullets"!==e.params.paginationType&&(i=r+i)):i="undefined"!==typeof e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===t.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var c,o,u,d=e.pagination.bullets;if(t.dynamicBullets&&(e.pagination.bulletSize=d.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),s.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=i-e.previousIndex,e.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),c=i-e.pagination.dynamicBulletIndex,u=((o=c+(Math.min(d.length,t.dynamicMainBullets)-1))+c)/2),d.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),s.length>1)d.each((function(e){var a=Object(n.a)(e),l=a.index();l===i&&a.addClass(t.bulletActiveClass),t.dynamicBullets&&(l>=c&&l<=o&&a.addClass(t.bulletActiveClass+"-main"),l===c&&a.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),l===o&&a.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=d.eq(i),m=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var b=d.eq(c),v=d.eq(o),g=c;g<=o;g+=1)d.eq(g).addClass(t.bulletActiveClass+"-main");if(e.params.loop)if(m>=d.length-t.dynamicMainBullets){for(var h=t.dynamicMainBullets;h>=0;h-=1)d.eq(d.length-h).addClass(t.bulletActiveClass+"-main");d.eq(d.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else b.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else b.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var f=Math.min(d.length,t.dynamicMainBullets+4),j=(e.pagination.bulletSize*f-e.pagination.bulletSize)/2-u*e.pagination.bulletSize,x=a?"right":"left";d.css(e.isHorizontal()?x:"top",j+"px")}}if("fraction"===t.type&&(s.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),s.find("."+t.totalClass).text(t.formatFractionTotal(r))),"progressbar"===t.type){var O;O=t.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var C=(i+1)/r,y=1,_=1;"horizontal"===O?y=C:_=C,s.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+y+") scaleY("+_+")").transition(e.params.speed)}"custom"===t.type&&t.renderCustom?(s.html(t.renderCustom(e,i+1,r)),e.emit("paginationRender",s[0])):e.emit("paginationUpdate",s[0]),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,n=e.pagination.$el,i="";if("bullets"===a.type){var l=e.params.loop?Math.ceil((t-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&l>t&&(l=t);for(var s=0;s<l;s+=1)a.renderBullet?i+=a.renderBullet.call(e,s,a.bulletClass):i+="<"+a.bulletElement+' class="'+a.bulletClass+'"></'+a.bulletElement+">";n.html(i),e.pagination.bullets=n.find("."+a.bulletClass.replace(/ /g,"."))}"fraction"===a.type&&(i=a.renderFraction?a.renderFraction.call(e,a.currentClass,a.totalClass):'<span class="'+a.currentClass+'"></span> / <span class="'+a.totalClass+'"></span>',n.html(i)),"progressbar"===a.type&&(i=a.renderProgressbar?a.renderProgressbar.call(e,a.progressbarFillClass):'<span class="'+a.progressbarFillClass+'"></span>',n.html(i)),"custom"!==a.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this,a=e.params.pagination;if(a.el){var t=Object(n.a)(a.el);0!==t.length&&(e.params.uniqueNavElements&&"string"===typeof a.el&&t.length>1&&(t=e.$el.find(a.el)),"bullets"===a.type&&a.clickable&&t.addClass(a.clickableClass),t.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&(t.addClass(""+a.modifierClass+a.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),"progressbar"===a.type&&a.progressbarOpposite&&t.addClass(a.progressbarOppositeClass),a.clickable&&t.on("click","."+a.bulletClass.replace(/ /g,"."),(function(a){a.preventDefault();var t=Object(n.a)(this).index()*e.params.slidesPerGroup;e.params.loop&&(t+=e.loopedSlides),e.slideTo(t)})),Object(i.c)(e.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.pagination.$el;t.removeClass(a.hiddenClass),t.removeClass(a.modifierClass+a.type),e.pagination.bullets&&e.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&t.off("click","."+a.bulletClass.replace(/ /g,"."))}}};a.a={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){Object(i.a)(this,{pagination:l({dynamicBulletIndex:0},s)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||"undefined"===typeof e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},click:function(e,a){var t=a.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!Object(n.a)(t).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&t===e.navigation.nextEl||e.navigation.prevEl&&t===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}}},155:function(e,a,t){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;a.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var a=e.split("@");return!(a[0].length>64)&&!a[1].split(".").some((function(e){return e.length>63}))}},156:function(e,a,t){},172:function(e,a,t){"use strict";t.r(a);var n=t(34),i=t(26),l=t(2),s=t(1),r=t.n(s),c=t(67),o=t(165),u=t(171),d=t(170),p=t(131),m=t(132),b=t(110),v=t(18),g=t(5);function h(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var f=t(52),j=t(53),x=t(54),O=t(58),C=t(57),y=t(121),_=t(127),N=t.n(_),w=function(e){Object(O.a)(t,e);var a=Object(C.a)(t);function t(e){var n;Object(f.a)(this,t);for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];return(n=a.call.apply(a,[this,e].concat(l))).state={scrollTop:0,scrollHeight:0,clientHeight:0},n.handleUpdate=n.handleUpdate.bind(Object(x.a)(n)),n}return Object(j.a)(t,[{key:"handleUpdate",value:function(e){var a=this.refs,t=a.shadowTop,n=a.shadowBottom,i=e.scrollTop,l=e.scrollHeight,s=e.clientHeight,r=.05*Math.min(i,20),c=l-s,o=.05*(c-Math.max(i,c-20));N()(t,{opacity:r}),N()(n,{opacity:o})}},{key:"render",value:function(){var e=this.props,a=e.style,t=h(e,["style"]),n=Object(g.a)(Object(g.a)({},a),{},{position:"relative"});return Object(l.jsxs)("div",{style:n,children:[Object(l.jsx)(y.Scrollbars,Object(g.a)({ref:"scrollbars",onUpdate:this.handleUpdate},t)),Object(l.jsx)("div",{ref:"shadowTop",style:{position:"absolute",top:0,left:0,right:0,height:20,background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%)"}}),Object(l.jsx)("div",{ref:"shadowBottom",style:{position:"absolute",bottom:0,left:0,right:0,height:20,background:"linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%)"}})]})}}]),t}(s.Component),k=t(4),S=t(6),E=t(155),A=t(15),B=(t(125),t(122),t(123),t(35)),$=(t(156),t(16)),I=r.a.lazy((function(){return t.e(17).then(t.bind(null,169))}));d.a.use([p.a,m.a]);var M=function(){var e=Object(k.f)(),a=Object(A.d)((function(e){return e})).cart,t=Object(A.c)(),r=Object(s.useRef)();r.current=!1,r.current||0!==a.length||e.push("/");var d=Object(s.useState)(null),p=Object(i.a)(d,2),m=p[0],g=p[1],h=Object(s.useState)(!1),f=Object(i.a)(h,2),j=f[0],x=f[1],O=Object(s.useState)(null),C=Object(i.a)(O,2),y=C[0],_=C[1],N=Object(s.useState)(!1),M=Object(i.a)(N,2),z=M[0],P=M[1],F=Object(s.useState)(!1),H=Object(i.a)(F,2),q=H[0],T=H[1],L=Object(s.useState)(Object(n.a)(a)),R=Object(i.a)(L,2),G=R[0],U=R[1],Z=Object(s.useState)(0),D=Object(i.a)(Z,2),J=D[0],V=D[1],W=Object(s.useState)([]),X=Object(i.a)(W,2),Y=X[0],K=X[1],Q=a.map((function(e){return e.device})),ee=Object(c.a)(["translation","input"].concat(Object(n.a)(Q))).t,ae=Object(s.useRef)(),te=Object(s.useRef)(),ne=Object(s.useRef)(),ie=Object(s.useRef)(),le=Object(s.useRef)();Object(s.useEffect)((function(){return m&&m.update()})),Object(s.useEffect)((function(){return r.current=!0}),[]),Object(s.useEffect)((function(){return U(Object(n.a)(a))}),[a]),Object(s.useEffect)((function(){y&&(document.documentElement.scrollTop=0)}),[y]);var se=G.map((function(e,a){return Object(l.jsx)(o.a,{className:"Summary__item",children:Object(l.jsx)("figure",{className:"Summary__figure",children:Object(l.jsx)(b.LazyLoadImage,{src:"/images/".concat(e.image),alt:e.name,width:"100%",height:"100%",effect:"opacity",className:"img"})})},a)})),re=G.map((function(e,t){return Object(l.jsxs)("div",{className:"Summary__card",tabIndex:"0",onClick:function(){return!q&&m.slideTo(t,300)},children:[Object(l.jsxs)("div",{className:"flex aic",children:[Object(l.jsx)(v.l,{className:"icon mr-1"}),Object(l.jsxs)("div",{className:"flex fdc",children:[Object(l.jsx)("span",{className:"Summary__card-title",children:ee("".concat(e.device,":").concat(e.name))}),Object(l.jsx)("span",{className:"Summary__card-title--sub",children:ee("translation:nav.skins")})]})]}),q?Object(l.jsx)("button",{onClick:function(){return function(e){var t=a.find((function(a){return a._id!==e}))._id,i=G.filter((function(a){return a._id!==e}));U(i),K((function(e){return[].concat(Object(n.a)(e),[t&&t])}))}(e._id)},className:"price-tag mr-5 Summary__card-btn",children:Object(l.jsx)(v.q,{className:"icon"})}):Object(l.jsxs)("span",{className:"price-tag",children:["$",parseFloat(e.price).toFixed(2)]})]},t)})),ce=G.map((function(e){return ee("".concat(e.device,":").concat(e.name))})),oe=G.reduce((function(e,a){return e+parseFloat(a.price)}),0).toFixed(2);return j?Object(l.jsx)(I,{geoMode:z}):Object(l.jsxs)("section",{className:"Summary",children:[Object(l.jsxs)("div",{className:"Summary__left",children:[Object(l.jsxs)("div",{className:"d-flex fdc w-100",children:[Object(l.jsxs)(u.a,{className:"Summary__list mb-3",navigation:{prevEl:".btn__control--prev",nextEl:".btn__control--next",disabledClass:"btn__control--disabled"},slidesPerView:1,onInit:function(e){return g(e)},onSlideChange:function(e){return V(e.activeIndex)},children:[se,Object(l.jsx)("button",{className:"Summary__btn-control btn__control btn__control--prev",children:Object(l.jsx)(v.e,{className:"icon--sm"})}),Object(l.jsx)("button",{className:"Summary__btn-control btn__control btn__control--next",children:Object(l.jsx)(v.f,{className:"icon--sm"})})]}),Object(l.jsxs)("div",{className:"flex fdc aic mb-3",children:[Object(l.jsx)("h3",{className:"heading heading--main mb-15",children:ee("".concat(a[J].device,":").concat(a[J].name))}),Object(l.jsx)("h2",{className:"heading heading--sm",children:a[J].device})]}),Object(l.jsx)("div",{className:"Summary__cards",children:Object(l.jsx)(w,{className:"Summary__wrapper",children:re})})]}),Object(l.jsxs)("div",{className:"w-100 flex jcsb px-15",children:[q?Object(l.jsx)("button",{onClick:function(){U(Object(n.a)(a)),T(!1)},className:"btn btn__ghost btn__ghost--active",children:ee("main.cancel")}):Object(l.jsxs)("p",{className:"text text--sm text--wrap w-50 c-grey-l",children:[ee("translation:main.num skins"),": ",a.length,",",Object(l.jsx)("br",{}),ee("translation:nav.set"),": ",ce.join(", ")]}),Object(l.jsx)("button",{onClick:function(){return q?(Y.forEach((function(e){return t(B.c(e))})),void T(!1)):T(!0)},className:"btn btn__ghost btn__ghost--active",children:ee(q?"translation:main.save":"translation:main.edit")})]})]}),Object(l.jsxs)("div",{className:"Summary__right",children:[Object(l.jsx)("div",{className:"Summary__head",children:Object(l.jsx)("h2",{className:"heading heading--1 c-white",children:ee("translation:nav.summary")})}),Object(l.jsxs)("div",{className:"Summary__body",children:[Object(l.jsxs)("p",{className:"text text--main mb-lg",children:[ee("input:summary.s1.p1"),Object(l.jsx)(S.b,{to:"/180degrees/privacy",className:"link link--outline",children:ee("input:summary.s1.p2")}),ee("input:summary.s2.p1"),Object(l.jsx)(S.b,{to:"/180degrees/delivery",className:"link link--outline",children:ee("input:summary.s2.p2")}),Object(l.jsx)("br",{}),ee("input:summary.s3.p1"),Object(l.jsx)("a",{rel:"noreferrer noopener",target:"_blank",href:"https://www.t.me/he_go_bot",className:"link link--outline",children:ee("input:summary.s3.p2")}),ee("input:summary.s3.p3")]}),y&&Object(l.jsx)("p",{className:"text text--main c-red mb-15",children:y}),Object(l.jsxs)("form",{className:"Summary__form",children:[Object(l.jsxs)("div",{className:"flex fdc wh-auto",children:[Object(l.jsx)("label",{className:"input--label",children:ee("input:enter fname")}),Object(l.jsx)("input",{ref:ie,className:"input input--main",placeholder:ee("input:fname")})]}),Object(l.jsxs)("div",{className:"flex fdc wh-auto",children:[Object(l.jsx)("label",{className:"input--label",children:ee("input:enter lname")}),Object(l.jsx)("input",{ref:le,className:"input input--main",placeholder:ee("input:lname")})]}),Object(l.jsxs)("div",{className:"flex fdc wh-auto pos-rel",children:[Object(l.jsx)("label",{className:"input--label",children:ee("input:choose method")}),Object(l.jsxs)("div",{className:"Summary__input input input--main",tabIndex:"0",children:[ee("input:".concat(z?"telegram":"input")),Object(l.jsx)(v.d,{className:"icon icon--dark"})]}),Object(l.jsxs)("div",{className:"Summary__dropdown",children:[Object(l.jsx)("div",{className:"Summary__drop-item",tabIndex:"0",onMouseDown:function(){return P(!0)},children:ee("input:telegram")}),Object(l.jsx)("div",{className:"Summary__drop-item",tabIndex:"0",onMouseDown:function(){return P(!1)},children:ee("input:input")})]})]}),Object(l.jsxs)("div",{className:"flex fdc wh-auto",children:[Object(l.jsx)("label",{className:"input--label",children:ee("input:enter phone")}),Object(l.jsx)("input",{maxLength:"15",type:"number",ref:te,className:"input input--main",placeholder:ee("input:phone")})]}),Object(l.jsxs)("div",{className:"flex fdc wh-auto",children:[Object(l.jsx)("label",{className:"input--label",children:ee("input:enter email")}),Object(l.jsx)("input",{ref:ae,className:"input input--main",placeholder:ee("input:email")})]}),z?Object(l.jsxs)("div",{className:"flex fdc wh-auto",children:[Object(l.jsx)("label",{className:"input--label",children:ee("input:telegram")}),Object(l.jsxs)("a",{href:"https://www.t.me/he_go_bot",className:"Summary__input input input--main",target:"_blank",rel:"noopener noreferrer",children:[ee("input:telegram"),Object(l.jsx)(v.f,{className:"icon icon--dark"})]})]}):Object(l.jsxs)("div",{className:"flex fdc wh-auto",children:[Object(l.jsx)("label",{className:"input--label",children:ee("input:enter address")}),Object(l.jsx)("input",{ref:ne,className:"input input--main",placeholder:ee("input:address")})]})]})]}),Object(l.jsx)("div",{className:"Summary__footer",children:Object(l.jsxs)("div",{className:"flex aic",children:[Object(l.jsxs)("span",{className:"text text--main flex mr-5",children:[ee("translation:main.total"),":\xa0"]}),Object(l.jsxs)("span",{className:"Summary__price-tag price-tag mr-1",children:["$",oe]}),Object(l.jsx)("button",{onClick:function(){return function(){if(ie.current.value.length<2||le.current.value.length<2)return _(ee("input:fill out all"));if(te.current.value.length<7)return _(ee("input:provide valid phone number"));if(!z&&(""===ne.current.value||ne.current.value.length<4))return _(ee("input:provide valid address"));if(""!==ae.current.value&&!E.validate(ae.current.value))return _(ee("input:provide valid email"));_(null);var e=Object(n.a)(a);["_id","image","id","deviceId"].forEach((function(a){return e.forEach((function(e){return delete e[a]}))}));var t=a.map((function(e){return e.deviceId})),i=t.map((function(e,a){return e!==t[a+1]&&e})).filter((function(e){return e&&e})),l={name:ie.current.value,last_name:le.current.value,phone_number:te.current.value,email:ae.current.value||"",address:!z&&ne.current.value?ne.current.value:"",device_ids:i,order:{items:e}};$.a.post("/order",l).then((function(){z&&window.open("https://www.t.me/he_go_bot","_blank"),x(!0)}))}()},className:"btn btn__ghost btn__ghost--active Summary__btn",children:ee("translation:main.order")})]})})]})]})};a.default=r.a.memo(M)}}]);
//# sourceMappingURL=12.a34bbce9.chunk.js.map