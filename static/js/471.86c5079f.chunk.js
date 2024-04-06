"use strict";(self.webpackChunkrtfm_water_tracker_frontend=self.webpackChunkrtfm_water_tracker_frontend||[]).push([[471],{5471:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var a=t(4420),r=t(1821),i=t(9439),s=t(2791),l=t(184),o=function(){var e=(0,s.useState)(""),n=(0,i.Z)(e,2),t=n[0],a=n[1],r=(0,s.useState)(""),o=(0,i.Z)(r,2),c=o[0],d=o[1],u=(0,s.useState)(""),h=(0,i.Z)(u,2),m=h[0],x=h[1],j=(0,s.useState)(""),v=(0,i.Z)(j,2),f=v[0],p=v[1],_=function(e){var n=e.target,t=n.value;switch(n.name){case"gender":a(t);break;case"weight":d(t);break;case"time":x(t);break;case"waterRate":p(t);break;default:return}};console.log("gender",t),console.log("weight",c),console.log("time",m),console.log("waterRate",f);return(0,l.jsxs)("form",{action:"Water rate",onSubmit:function(){},children:[(0,l.jsx)("h2",{children:"Calculate your rate"}),(0,l.jsxs)("label",{htmlFor:"gender",children:[(0,l.jsx)("input",{type:"radio",id:"gender",value:"female",name:"gender",onChange:_}),"For woman"]}),(0,l.jsxs)("label",{htmlFor:"gender",children:[(0,l.jsx)("input",{type:"radio",id:"gender",value:"male",name:"gender",onChange:_}),"For man"]}),(0,l.jsxs)("label",{htmlFor:"weight",children:["Your weight in kilograms:",(0,l.jsx)("input",{type:"text",id:"weight",placeholder:"0",name:"weight",value:c,onChange:_})]}),(0,l.jsxs)("label",{htmlFor:"time",children:["The time of active participation in sports or other activities with a high physical. Load in hours:",(0,l.jsx)("input",{type:"text",id:"time",placeholder:"0",value:m,name:"time",onChange:_})]}),(0,l.jsx)("p",{htmlFor:"",children:"The required amount of water in liters per day:"}),(0,l.jsx)("p",{}),(0,l.jsx)("label",{htmlFor:"water",children:"Write down how much water you will drink:"}),(0,l.jsx)("input",{type:"text",name:"waterRate",id:"water ",value:f,onChange:_}),(0,l.jsx)("button",{type:"submit",children:"Save"})]})},c=t(4352),d=function(){var e=(0,a.I0)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"My daily norma"}),(0,l.jsx)("button",{type:"button",onClick:function(){e((0,r.rA)())},children:(0,l.jsx)(c.n,{id:"#close",width:24,height:24})}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsxs)("p",{children:["For girl: ",(0,l.jsx)("span",{children:"V=(M*0,03) + (T*0,4)"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("p",{children:["For man: ",(0,l.jsx)("span",{children:"V=(M*0,04) + (T*0,6)"})]})})]}),(0,l.jsx)("p",{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"}),(0,l.jsx)(o,{})]})},u=t(9321),h="DailyNorma_wrap__TRK0S",m="DailyNorma_title__X4SZH",x="DailyNorma_wrapper__dU6co",j="DailyNorma_description__cZ1AR",v="DailyNorma_btn__Zr65u",f=t(6681),p=function(){var e=(0,a.I0)(),n=(0,a.v9)(f.WK);return(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("h3",{className:m,children:"My daily norma"}),(0,l.jsxs)("div",{className:x,children:[(0,l.jsx)("p",{className:j,children:(0,l.jsx)("strong",{children:"2 L"})}),(0,l.jsx)("button",{type:"button",className:v,onClick:function(){e((0,r.rA)())},children:"Edit"})]}),n?(0,l.jsx)(u.Z,{onClose:function(){e((0,r.rA)())},children:(0,l.jsx)(d,{})}):null]})},_=t(6818),g=function(e){var n=e.closeModal,t=(0,a.I0)(),r=(0,s.useState)(0),o=(0,i.Z)(r,2),d=o[0],u=o[1],h=(0,s.useState)(""),m=(0,i.Z)(h,2),x=m[0],j=m[1],v=(0,s.useState)(function(){var e=new Date,n=String(e.getHours()),t=String(e.getMinutes()).padStart(2,"0");return"".concat(n,":").concat(t)}()),f=(0,i.Z)(v,2),p=f[0],g=f[1];(0,s.useEffect)((function(){j(d.toString())}),[d]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",onClick:n,children:(0,l.jsx)(c.n,{id:"#close",width:24,height:24})}),(0,l.jsx)("h2",{children:"Add water"}),(0,l.jsx)("p",{children:"Choose a value:"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Amount of water:"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{onClick:function(){u((function(e){return Math.max(e-50,0)}))},disabled:0===d,children:"-"}),d,"ml",(0,l.jsx)("button",{onClick:function(){u((function(e){return e+50}))},children:"+"})]})]}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=p.split(":").map(Number),a=(0,i.Z)(n,2),r=a[0],s=a[1],l=new Date;l.setHours(r),l.setMinutes(s);var o=l.toISOString();t((0,_.L)({amount:d,date:o}))},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Recording time:"}),(0,l.jsx)("div",{children:(0,l.jsx)("select",{value:p,onChange:function(e){g(e.target.value)},children:function(){for(var e=[],n=0;n<24;n++)for(var t=0;t<60;t+=5){var a="".concat(n.toString(),":").concat(t.toString().padStart(2,"0"));e.push((0,l.jsx)("option",{value:a,children:a},a))}return e}()})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{children:"Enter the value of the water used:"}),(0,l.jsx)("input",{type:"text",value:x,onChange:function(e){j(e.target.value)},onBlur:function(){var e=50*Math.round(Number(x)/50);u(Number(x)),j(e.toString())}})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:[d,"ml"]}),(0,l.jsx)("button",{type:"submit",children:"Save"})]})]})]})},w=function(){var e=(0,s.useState)(!1),n=(0,i.Z)(e,2),t=n[0],a=n[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:"Today"}),(0,l.jsx)("div",{children:"waterRate"})]}),(0,l.jsx)("button",{onClick:function(){a(!t)},children:"Add Water"}),t?(0,l.jsx)(u.Z,{children:(0,l.jsx)(g,{closeModal:function(){a(!1)}})}):null]})},y=t(1413),N=t(1726),b=t(3648),C=t(1155),S=t(5962),M=t(3540),k=t(2430),Z=t(2610),F="Calendar_calendarContainer__ZNbWP",D="Calendar_calendarHeader__dtPX6",A="Calendar_monthNameContainer__T-fX8",H="Calendar_monthName__R114a",R="Calendar_buttonMonth__x0JmG",T="Calendar_calendarGrid__7VATe",W="Calendar_titleMonth__VGkaA",L="Calendar_day__voALS",V="Calendar_calendarDay__dt04z",z="Calendar_today__jZMN6",E="Calendar_popover__80+bz",G="Calendar_popoverDate__QmOG4",I="Calendar_popoverList__Tk1vF",P=function(e){var n=e.date,t=e.dailyNorma,a=e.fulfillment,r=e.waterServings,i=(0,N.WU)(n,"d MMMM");return(0,l.jsxs)("div",{className:E,children:[(0,l.jsx)("p",{className:G,children:i}),(0,l.jsxs)("p",{className:I,children:["Daily norma: ",(0,l.jsxs)("span",{className:G,children:[t,"L"]})]}),(0,l.jsxs)("p",{className:I,children:["Fulfillment of the daily norm:"," ",(0,l.jsxs)("span",{className:G,children:[a,"%"]})]}),(0,l.jsxs)("p",{className:I,children:["How many servings of water:"," ",(0,l.jsx)("span",{className:G,children:r})]})]})},U=function(){var e=(0,s.useState)(new Date),n=(0,i.Z)(e,2),t=n[0],a=n[1],r=(0,s.useState)(null),o=(0,i.Z)(r,2),c=o[0],d=o[1],u=(0,S.N)(t),h=(0,M.V)(t),m=(0,k.D)({start:u,end:h}),x=Array(m.length).fill({dailyNorma:1.5,fulfillment:0,waterServings:6});return(0,l.jsxs)("div",{className:F,children:[(0,l.jsxs)("div",{className:D,children:[(0,l.jsx)("h1",{className:W,children:"Month"}),(0,l.jsxs)("div",{className:A,children:[(0,l.jsx)("button",{className:R,onClick:function(){a((0,C.W)(t,1))},children:"<"}),(0,l.jsx)("p",{className:H,children:(0,N.WU)(t,"MMMM yyyy")}),(0,l.jsx)("button",{className:R,onClick:function(){a((0,b.z)(t,1))},children:">"})]})]}),(0,l.jsxs)("div",{className:T,children:[m.map((function(e,n){return(0,l.jsxs)("div",{className:L,children:[(0,l.jsx)("div",{className:"".concat(V," ").concat((0,Z.z)(e)?z:""),onMouseEnter:function(){return d((0,y.Z)((0,y.Z)({},x[n]),{},{date:e}))},onMouseLeave:function(){return d(null)},children:(0,N.WU)(e,"d")}),(0,l.jsxs)("div",{children:[x[n].fulfillment,"%"]})]},n)})),c&&(0,l.jsx)(P,(0,y.Z)((0,y.Z)({},c),{},{date:c.date}))]})]})},O={containerHome:"HomePage_containerHome__TjOv1",waterRateContainer:"HomePage_waterRateContainer__uwnzr"},X=function(){return(0,l.jsx)("section",{className:O.sectionHome,children:(0,l.jsxs)("div",{className:"container ".concat(O.containerHome),children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(p,{}),(0,l.jsx)(w,{})]}),(0,l.jsx)("div",{className:O.waterRateContainer,children:(0,l.jsx)(U,{})})]})})}}}]);
//# sourceMappingURL=471.86c5079f.chunk.js.map