(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),r=c.n(i),s=c(7),o=c.n(s),a=(c(16),c(9)),l=c(10),u=[{id:0,title:"eur",selected:!1},{id:1,title:"pln",selected:!1},{id:2,title:"gel",selected:!1},{id:3,title:"dkk",selected:!1},{id:4,title:"czk",selected:!1},{id:5,title:"gbp",selected:!1},{id:6,title:"sek",selected:!1},{id:7,title:"usd",selected:!1},{id:8,title:"rub",selected:!1}],d=c(2),b=c.n(d),j=function(e){var t=e.onClickHandler,c=e.currencies;return Object(n.jsx)("div",{className:b.a.container,children:Object(n.jsx)("div",{className:b.a.buttonWrapper,children:null===c||void 0===c?void 0:c.map((function(e,c){var i=e.title,r=e.selected,s=e.id;return Object(n.jsxs)("button",{onClick:function(){return t(s)},className:r?b.a.activeButton:b.a.button,children:[Object(n.jsx)("div",{className:b.a.checkbox,children:Object(n.jsx)("div",{className:b.a.checkmark,children:"".concat(r?"x":"")})}),Object(n.jsx)("span",{className:b.a.buttonText,children:i})]},"".concat(c))}))})})},h=c(3),_=c.n(h),p=function(e){var t=e.onClickHandler,c=e.filteredCurrencies;return Object(n.jsx)("div",{className:_.a.container,children:Object(n.jsx)("div",{className:_.a.buttonWrapper,children:null===c||void 0===c?void 0:c.map((function(e,c){var i=e.title,r=e.id;return Object(n.jsxs)("button",{className:_.a.button,children:[Object(n.jsx)("span",{className:_.a.buttonText,children:i}),Object(n.jsx)("div",{onClick:function(){return t(r)},className:_.a.checkbox,children:Object(n.jsx)("span",{className:_.a.checkmark,children:"x"})})]},"".concat(c))}))})})},x=c(8),k=c.n(x),v=function(e){var t=e.children;return Object(n.jsx)("section",{className:k.a.section,children:t})},f=function(){var e=Object(i.useState)(),t=Object(l.a)(e,2),c=t[0],r=t[1];Object(i.useEffect)((function(){r(u)}),[]);var s=null===c||void 0===c?void 0:c.filter((function(e){return e.selected})),o=function(e){var t=Object(a.a)(c);t[e].selected=!t[e].selected,r(t)};return Object(n.jsxs)(v,{children:[Object(n.jsx)(p,{onClickHandler:o,filteredCurrencies:s}),Object(n.jsx)(j,{onClickHandler:o,currencies:c})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),m()},2:function(e,t,c){e.exports={buttonWrapper:"Buttons_buttonWrapper__1c_28",button:"Buttons_button__3iPBp",activeButton:"Buttons_activeButton__1owbn",checkbox:"Buttons_checkbox__3UhF-",checkmark:"Buttons_checkmark__lw6iS"}},3:function(e,t,c){e.exports={container:"FilteredButtons_container__2pTjv",buttonWrapper:"FilteredButtons_buttonWrapper__3QuOw",button:"FilteredButtons_button__2msIO",checkbox:"FilteredButtons_checkbox__3clh2",checkmark:"FilteredButtons_checkmark__3R2Et"}},8:function(e,t,c){e.exports={section:"Section_section__3QMI7"}}},[[17,1,2]]]);
//# sourceMappingURL=main.8906bd72.chunk.js.map