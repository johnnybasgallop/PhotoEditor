(this["webpackJsonpphoto-editor"]=this["webpackJsonpphoto-editor"]||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(5),c=t.n(r),i=t(4),s=t(2),o=(t(10),t(0)),l=function(e){var a=e.min,t=e.max,n=e.value,r=e.handleChange;return Object(o.jsx)("div",{className:"slider-container",children:Object(o.jsx)("input",{type:"range",className:"slider",min:a,max:t,value:n,onChange:r})})},u=function(e){var a=e.name,t=e.active,n=e.handleClick;return Object(o.jsx)("button",{className:"sidebar-item ".concat(t?"active":""),onClick:n,children:a})},m=[{name:"Brightness",property:"brightness",value:100,range:{min:0,max:200},unit:"%"},{name:"Contrast",property:"contrast",value:100,range:{min:0,max:200},unit:"%"},{name:"Saturation",property:"saturate",value:100,range:{min:0,max:200},unit:"%"},{name:"Grayscale",property:"grayscale",value:0,range:{min:0,max:100},unit:"%"},{name:"Sepia",property:"sepia",value:0,range:{min:0,max:200},unit:"%"},{name:"Hue Rotate",property:"hue-rotate",value:0,range:{min:0,max:360},unit:"deg"},{name:"Blur",property:"blur",value:0,range:{min:0,max:20},unit:"px"}];var p=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(m),p=Object(s.a)(c,2),b=p[0],j=p[1],d=Object(n.useState)("https://firebasestorage.googleapis.com/v0/b/cbstocks-79297.appspot.com/o/paramountplus.jpeg?alt=media&token=c39bd8f0-f1f5-4d53-ba6d-4118c241e2ec"),g=Object(s.a)(d,2),v=g[0],f=g[1],h=b[t];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"file-container",children:Object(o.jsx)("form",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{className:"input-hide",type:"file",onChange:function(e){if(e.target.files&&e.target.files[0]){var a=new FileReader;a.onload=function(e){f(e.target.result)},a.readAsDataURL(e.target.files[0])}}}),Object(o.jsx)("span",{className:"plus",children:"+"})]})})}),Object(o.jsx)("div",{className:"main-image",style:{filter:b.map((function(e){return"".concat(e.property,"(").concat(e.value).concat(e.unit,")")})).join("")},children:Object(o.jsx)("img",{className:"main-image",src:v,alt:"https://firebasestorage.googleapis.com/v0/b/cbstocks-79297.appspot.com/o/paramountplus.jpeg?alt=media&token=c39bd8f0-f1f5-4d53-ba6d-4118c241e2ec"})}),Object(o.jsx)("div",{className:"sidebar",children:b.map((function(e,a){return Object(o.jsx)(u,{name:e.name,active:a===t,handleClick:function(){return r(a)}},a)}))}),Object(o.jsx)(l,{min:h.range.min,max:h.range.max,value:h.value,handleChange:function(e){var a=e.target;j((function(e){return e.map((function(e,n){return n!==t?e:Object(i.a)(Object(i.a)({},e),{},{value:a.value})}))}))}})]})};c.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.bf2e6b5e.chunk.js.map