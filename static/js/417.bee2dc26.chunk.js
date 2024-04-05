"use strict";(self.webpackChunkrtfm_water_tracker_frontend=self.webpackChunkrtfm_water_tracker_frontend||[]).push([[417],{417:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(4420),i=n(1821),a=n(9439),s=n(2791),l=n(184),o=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],r=t[1],i=(0,s.useState)(""),o=(0,a.Z)(i,2),c=o[0],d=o[1],h=(0,s.useState)(""),u=(0,a.Z)(h,2),x=u[0],j=u[1],m=(0,s.useState)(""),p=(0,a.Z)(m,2),f=p[0],v=p[1],g=function(e){var t=e.target,n=t.value;switch(t.name){case"gender":r(n);break;case"weight":d(n);break;case"time":j(n);break;case"waterRate":v(n);break;default:return}};console.log("gender",n),console.log("weight",c),console.log("time",x),console.log("waterRate",f);return(0,l.jsxs)("form",{action:"Water rate",onSubmit:function(){},children:[(0,l.jsx)("h2",{children:"Calculate your rate"}),(0,l.jsxs)("label",{htmlFor:"gender",children:[(0,l.jsx)("input",{type:"radio",id:"gender",value:"female",name:"gender",onChange:g}),"For woman"]}),(0,l.jsxs)("label",{htmlFor:"gender",children:[(0,l.jsx)("input",{type:"radio",id:"gender",value:"male",name:"gender",onChange:g}),"For man"]}),(0,l.jsxs)("label",{htmlFor:"weight",children:["Your weight in kilograms:",(0,l.jsx)("input",{type:"text",id:"weight",placeholder:"0",name:"weight",value:c,onChange:g})]}),(0,l.jsxs)("label",{htmlFor:"time",children:["The time of active participation in sports or other activities with a high physical. Load in hours:",(0,l.jsx)("input",{type:"text",id:"time",placeholder:"0",value:x,name:"time",onChange:g})]}),(0,l.jsx)("p",{htmlFor:"",children:"The required amount of water in liters per day:"}),(0,l.jsx)("p",{}),(0,l.jsx)("label",{htmlFor:"water",children:"Write down how much water you will drink:"}),(0,l.jsx)("input",{type:"text",name:"waterRate",id:"water ",value:f,onChange:g}),(0,l.jsx)("button",{type:"submit",children:"Save"})]})},c=n(4352),d=function(){var e=(0,r.I0)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"My daily norma"}),(0,l.jsx)("button",{type:"button",onClick:function(){var t;console.log("e.currentTarget",t),e((0,i.K)())},children:(0,l.jsx)(c.n,{id:"#close",width:24,height:24})}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsxs)("p",{children:["For girl: ",(0,l.jsx)("span",{children:"V=(M*0,03) + (T*0,4)"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("p",{children:["For man: ",(0,l.jsx)("span",{children:"V=(M*0,04) + (T*0,6)"})]})})]}),(0,l.jsx)("p",{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"}),(0,l.jsx)(o,{})]})},h=function(e){return e.modal.showModal},u="DailyNorma_wrap__TRK0S",x="DailyNorma_title__X4SZH",j="DailyNorma_wrapper__dU6co",m="DailyNorma_description__cZ1AR",p="DailyNorma_btn__Zr65u",f=function(){var e=(0,r.v9)(h),t=(0,r.I0)();return(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("h3",{className:x,children:"My daily norma"}),(0,l.jsxs)("div",{className:j,children:[(0,l.jsx)("p",{className:m,children:(0,l.jsx)("strong",{children:"2 L"})}),(0,l.jsx)("button",{type:"button",className:p,onClick:function(){t((0,i.K)())},children:"Edit"})]}),e?(0,l.jsx)(d,{}):null]})},v=n(6818),g=function(e){var t=e.closeModal,n=(0,r.I0)(),i=(0,s.useState)(0),o=(0,a.Z)(i,2),d=o[0],h=o[1],u=(0,s.useState)(""),x=(0,a.Z)(u,2),j=x[0],m=x[1],p=(0,s.useState)(function(){var e=new Date,t=String(e.getHours()),n=String(e.getMinutes()).padStart(2,"0");return"".concat(t,":").concat(n)}()),f=(0,a.Z)(p,2),g=f[0],w=f[1];(0,s.useEffect)((function(){m(d.toString())}),[d]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",onClick:t,children:(0,l.jsx)(c.n,{id:"#close",width:24,height:24})}),(0,l.jsx)("h2",{children:"Add water"}),(0,l.jsx)("p",{children:"Choose a value:"}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n((0,v.L)({waterDose:d,time:g}))},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Amount of water:"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{onClick:function(){h((function(e){return Math.max(e-50,0)}))},disabled:0===d,children:"-"}),d,"ml",(0,l.jsx)("button",{onClick:function(){h((function(e){return e+50}))},children:"+"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Recording time:"}),(0,l.jsx)("div",{children:(0,l.jsx)("select",{value:g,onChange:function(e){w(e.target.value)},children:function(){for(var e=[],t=0;t<24;t++)for(var n=0;n<60;n+=5){var r="".concat(t.toString(),":").concat(n.toString().padStart(2,"0"));e.push((0,l.jsx)("option",{value:r,children:r},r))}return e}()})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{children:"Enter the value of the water used:"}),(0,l.jsx)("input",{type:"text",value:j,onChange:function(e){m(e.target.value)},onBlur:function(){var e=50*Math.round(Number(j)/50);h(Number(j)),m(e.toString())}})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:[d,"ml"]}),(0,l.jsx)("button",{type:"submit",children:"Save"})]})]})]})},w="Modal_backdrop__xTnIT",b="Modal_backdropIsHidden__OqhjM",y="Modal_modalCallback__hw-ED",_=function(e){var t=e.children;return(0,l.jsx)("div",{className:w+" "+b,children:(0,l.jsx)("div",{className:y,children:t})})},S=function(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:"Today"}),(0,l.jsx)("div",{children:"waterRate"})]}),(0,l.jsx)("button",{onClick:function(){r(!n)},children:"Add Water"}),n?(0,l.jsx)(_,{children:(0,l.jsx)(g,{closeModal:function(){r(!1)}})}):null]})},k=function(){return(0,l.jsx)("section",{children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(f,{}),(0,l.jsx)(S,{})]})})}}}]);
//# sourceMappingURL=417.bee2dc26.chunk.js.map