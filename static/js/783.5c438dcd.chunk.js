"use strict";(self.webpackChunkrtfm_water_tracker_frontend=self.webpackChunkrtfm_water_tracker_frontend||[]).push([[783],{9783:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(4420),i=t(1821),s=t(184),c=function(){return(0,s.jsx)("form",{children:(0,s.jsx)("h2",{children:"Calculate your rate"})})},o=t(4352),l=function(){var n=(0,r.I0)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"My daily norma"}),(0,s.jsx)("button",{type:"button",onClick:function(){n((0,i.K)())},children:(0,s.jsx)(o.n,{id:"#close",width:24,height:24})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsxs)("p",{children:["For girl: ",(0,s.jsx)("span",{children:"V=(M*0,03) + (T*0,4)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("p",{children:["For man: ",(0,s.jsx)("span",{children:"V=(M*0,04) + (T*0,6)"})]})})]}),(0,s.jsx)("p",{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"}),(0,s.jsx)(c,{})]})},d=t(2791),u=function(n){var e=n.children,t=(0,r.I0)(),c=(0,d.useCallback)((function(n){"Escape"===n.code&&t((0,i.K)()),n.currentTarget===n.target&&t((0,i.K)())}),[t]);return(0,d.useEffect)((function(){return window.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c)}}),[c]),(0,s.jsx)("div",{onClick:c,children:(0,s.jsx)("div",{onClick:c,children:e})})},a=function(n){return n.modal.showModal};console.log("showModalSelector",a);var h=function(){var n=(0,r.v9)(a),e=(0,r.I0)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"My daily norma"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"2 L"})}),(0,s.jsx)("button",{type:"button",onClick:function(){e((0,i.K)())},children:"Edit"})]}),n?(0,s.jsx)(u,{children:(0,s.jsx)(l,{})}):null]})},x=function(){var n=r.I0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Log out"}),(0,s.jsx)("button",{type:"button",onClick:function(){n((0,i.K)())},children:(0,s.jsx)(o.n,{id:"#close",width:24,height:24})}),(0,s.jsx)("h3",{children:"Do you really want to leave?"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[",",(0,s.jsx)("button",{type:"button",children:"Cancel"})]}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{type:"button",children:"Logout"})})]})]})},j=t(9439),f=function(){var n=(0,d.useState)(0),e=(0,j.Z)(n,2),t=e[0],r=e[1],i=(0,d.useState)(""),c=(0,j.Z)(i,2),o=c[0],l=c[1],u=(0,d.useState)(function(){var n=new Date,e=String(n.getHours()),t=String(n.getMinutes()).padStart(2,"0");return"".concat(e,":").concat(t)}()),a=(0,j.Z)(u,2),h=a[0],x=a[1];(0,d.useEffect)((function(){l(t.toString())}),[t]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Add water"}),(0,s.jsx)("p",{children:"Choose a value:"}),(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault()},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Amount of water:"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onClick:function(){r((function(n){return Math.max(n-50,0)}))},disabled:0===t,children:"-"}),t,"ml",(0,s.jsx)("button",{onClick:function(){r((function(n){return n+50}))},children:"+"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Recording time:"}),(0,s.jsx)("div",{children:(0,s.jsx)("select",{value:h,onChange:function(n){x(n.target.value)},children:function(){for(var n=[],e=0;e<24;e++)for(var t=0;t<60;t+=5){var r="".concat(e.toString(),":").concat(t.toString().padStart(2,"0"));n.push((0,s.jsx)("option",{value:r,children:r},r))}return n}()})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Enter the value of the water used:"}),(0,s.jsx)("input",{type:"text",value:o,onChange:function(n){l(n.target.value)},onBlur:function(){var n=50*Math.round(Number(o)/50);r(Number(o)),l(n.toString())}})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:[t,"ml"]}),(0,s.jsx)("button",{type:"submit",children:"Save"})]})]})]})},v=function(){var n=(0,d.useState)(!1),e=(0,j.Z)(n,2),t=e[0],r=e[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:"Today"}),(0,s.jsx)("div",{children:"waterRate"})]}),(0,s.jsx)("button",{onClick:function(){r(!t)},children:"Add Water"}),t?(0,s.jsx)(u,{children:(0,s.jsx)(f,{})}):null]})},m=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{children:(0,s.jsx)(x,{})}),(0,s.jsx)(h,{}),(0,s.jsx)(v,{})]})}}}]);
//# sourceMappingURL=783.5c438dcd.chunk.js.map