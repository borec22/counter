(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,function(e,t,a){e.exports={display:"Display_display__2n21m",mainWindow:"Display_mainWindow__140SA",settings:"Display_settings__MjcOq",field:"Display_field__25h01",label:"Display_label__AlTaw",fieldItem:"Display_fieldItem__1yvJm",fieldFirst:"Display_fieldFirst__2EEse",fieldSecond:"Display_fieldSecond__2r3Sp",input:"Display_input__2TD4b",total:"Display_total__3GvgE",message:"Display_message__1YAFa",errorMessage:"Display_errorMessage__3pWDE",error:"Display_error__3bxsJ",red:"Display_red__1KrWH"}},,,,,,function(e,t,a){e.exports={button:"Button_button__3QF_k"}},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(2),n=a.n(c),i=a(6),l=a.n(i),r=(a(14),a(3)),o=(a(15),a(5)),d=a(8),j=a(7),u=a.n(j),b=function(e){var t=e.children,a=e.onClick,c=e.isDisable,n=Object(d.a)(e,["children","onClick","isDisable"]);return Object(s.jsx)("button",Object(o.a)(Object(o.a)({disabled:c,onClick:a,className:u.a.button},n),{},{children:t}))},_=a(1),O=a.n(_),m=function(e){var t=e.count,a=void 0===t?0:t,c=e.maxValue,n=void 0===c?1:c,i=e.startValue,l=void 0===i?0:i,r=e.view,o=e.setMaxValue,d=e.setStartValue,j=e.message,u=e.error;return Object(s.jsx)("div",{className:O.a.display,children:"settings"===r?Object(s.jsxs)("div",{className:O.a.settings,children:[Object(s.jsxs)("div",{className:"".concat(O.a.field," ").concat(O.a.fieldFirst),children:[Object(s.jsx)("div",{className:O.a.label,children:Object(s.jsx)("label",{children:" max value "})}),Object(s.jsx)("div",{className:O.a.fieldItem,children:Object(s.jsx)("input",{type:"number",value:n,size:10,className:"".concat(O.a.input," ").concat(u?O.a.error:""),onChange:o})})]}),Object(s.jsxs)("div",{className:"".concat(O.a.field," ").concat(O.a.fieldSecond),children:[Object(s.jsx)("div",{className:O.a.label,children:Object(s.jsx)("label",{children:" start value "})}),Object(s.jsx)("div",{className:O.a.fieldItem,children:Object(s.jsx)("input",{type:"number",value:l,size:15,className:"".concat(O.a.input," ").concat(u?O.a.error:""),onChange:d})})]})]}):Object(s.jsx)("div",{className:O.a.mainWindow,children:j?Object(s.jsx)("div",{className:u?O.a.errorMessage:O.a.message,children:u||j}):Object(s.jsx)("div",{className:"".concat(O.a.total," ").concat(a>=n?O.a.red:O.a.total),children:a})})})};var p=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(5),l=Object(r.a)(i,2),o=l[0],d=l[1],j=Object(c.useState)(a),u=Object(r.a)(j,2),_=u[0],O=u[1],p=Object(c.useState)(""),v=Object(r.a)(p,2),x=v[0],f=v[1],h=Object(c.useState)(""),g=Object(r.a)(h,2),D=g[0],y=g[1],N=Object(c.useState)(!0),S=Object(r.a)(N,2),C=S[0],w=S[1];return Object(c.useEffect)((function(){y(a<0||o<=a?"Incorrect value!":"")}),[a,o]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(m,{count:_,maxValue:o,startValue:a,view:"settings",error:D,setMaxValue:function(e){d&&d(+e.currentTarget.value),f("enter values and press 'set'"),w(!1)},setStartValue:function(e){n&&n(+e.currentTarget.value),f("enter values and press 'set'"),w(!1)}}),Object(s.jsx)("div",{className:"control",children:Object(s.jsx)(b,{onClick:function(){O(a),f(""),w(!0)},isDisable:Boolean(D)||C,children:"SET"})})]}),Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(m,{count:_,maxValue:o,view:"main",message:x,error:D}),Object(s.jsxs)("div",{className:"control",children:[Object(s.jsx)(b,{onClick:function(){return O(_+1)},isDisable:!C||_>=o,children:"INC"}),Object(s.jsx)(b,{onClick:function(){return O(a)},isDisable:!C||_===a,children:"RESET"})]})]})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.a687fbf9.chunk.js.map