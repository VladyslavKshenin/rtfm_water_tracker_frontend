"use strict";(self.webpackChunkrtfm_water_tracker_frontend=self.webpackChunkrtfm_water_tracker_frontend||[]).push([[949],{1949:function(e,a,t){t.r(a),t.d(a,{default:function(){return ka}});var s=t(4420),n=t(1821),r=t(9439),l=t(2791),i=t(8271),o="DailyNormalModalForm_title__ydMqr",c="DailyNormalModalForm_wrappGender__KLR2y",d="DailyNormalModalForm_label__dwl4R",u="DailyNormalModalForm_genderInput__NXFmL",m="DailyNormalModalForm_userInfo__rQdGe",_="DailyNormalModalForm_input__lk-bE",h="DailyNormalModalForm_result__MiXox",x="DailyNormalModalForm_resultText__L7jOP",j="DailyNormalModalForm_resultColor__zORHx",f="DailyNormalModalForm_waterRateWrapp__0bqtE",v="DailyNormalModalForm_waterRate__jHjDG",N="DailyNormalModalForm_button__ocXB2",p="DailyNormalModalForm_form__645nk",y=t(184),g=function(){var e,a=(0,l.useState)("female"),t=(0,r.Z)(a,2),g=t[0],w=t[1],M=(0,l.useState)(""),b=(0,r.Z)(M,2),C=b[0],k=b[1],S=(0,l.useState)(""),D=(0,r.Z)(S,2),W=D[0],Z=D[1],T=(0,l.useState)(""),F=(0,r.Z)(T,2),A=F[0],P=F[1],I=(0,s.I0)();function H(e){var a=e.target,t=a.value;switch(a.name){case"gender":w(t);break;case"weight":k(t);break;case"time":Z(t);break;case"waterRate":P(t);break;default:return}}switch(g){case"female":e=.03*C+.4*W;break;case"male":e=.04*C+.6*W;break;default:return}return(0,y.jsxs)("form",{action:"Water rate",className:p,onSubmit:function(a){if(a.preventDefault(),A){var t=1e3*A;I((0,i.F)({waterRate:t})).unwrap().then((function(){I((0,n.rA)())})).catch((function(e){alert("Maximum amount of your daily normal is 15L")}))}else{var s=1e3*e;I((0,i.F)({waterRate:s})).unwrap().then((function(){I((0,n.rA)())})).catch((function(e){alert("Maximum amount of your daily normal is 15L")}))}},children:[(0,y.jsx)("h3",{className:o,children:"Calculate your rate"}),(0,y.jsxs)("fieldset",{className:c,children:[(0,y.jsxs)("label",{className:d,htmlFor:"gender",children:[(0,y.jsx)("input",{className:u,type:"radio",id:"gender",value:"female",name:"gender",checked:"female"===g,onChange:H}),"For woman"]}),(0,y.jsxs)("label",{className:d,htmlFor:"gender",children:[(0,y.jsx)("input",{className:u,type:"radio",id:"gender",value:"male",name:"gender",checked:"male"===g,onChange:H}),"For man"]})]}),(0,y.jsxs)("div",{className:m,children:[(0,y.jsx)("label",{className:d,htmlFor:"weight",children:"Your weight in kilograms:"}),(0,y.jsx)("input",{className:_,type:"text",id:"weight",placeholder:"0",name:"weight",value:C,onChange:H})]}),(0,y.jsxs)("div",{className:m,children:[(0,y.jsx)("label",{className:d,htmlFor:"time",children:"The time of active participation in sports or other activities with a high physical. Load in hours:"}),(0,y.jsx)("input",{className:_,type:"text",id:"time",placeholder:"0",value:W,name:"time",onChange:H})]}),(0,y.jsxs)("fieldset",{className:h,children:[(0,y.jsx)("p",{className:x,children:"The required amount of water in liters per day:"}),(0,y.jsx)("p",{className:j,children:e.toFixed(2)})]}),(0,y.jsxs)("fieldset",{className:f,children:[(0,y.jsx)("label",{className:v,htmlFor:"water",children:"Write down how much water you will drink:"}),(0,y.jsx)("input",{className:_,type:"text",name:"waterRate",id:"water",placeholder:"0",value:A,onChange:H,min:0,max:15})]}),(0,y.jsx)("button",{className:N,type:"submit",children:"Save"})]})},w=t(4352),M="DailyNormaModal_wrapp__abudM",b="DailyNormaModal_buttonClose__eT7Mc",C="DailyNormaModal_title__k3ynU",k="DailyNormaModal_list__M8Qvx",S="DailyNormaModal_item__g2Vfz",D="DailyNormaModal_description__h96pu",W="DailyNormaModal_formula__LLd2F",Z="DailyNormaModal_wrappText__sXIFt",T="DailyNormaModal_text__oXaGW",F=function(){var e=(0,s.I0)();return(0,y.jsxs)("div",{className:M,children:[(0,y.jsx)("h2",{className:C,children:"My daily norma"}),(0,y.jsx)("button",{type:"button",className:b,onClick:function(){e((0,n.rA)())},children:(0,y.jsx)(w.n,{id:"#close",width:24,height:24})}),(0,y.jsxs)("ul",{className:k,children:[(0,y.jsx)("li",{className:S,children:(0,y.jsxs)("p",{className:D,children:["For girl: ",(0,y.jsx)("span",{className:W,children:"V=(M*0,03) + (T*0,4)"})]})}),(0,y.jsx)("li",{className:S,children:(0,y.jsxs)("p",{className:D,children:["For man: ",(0,y.jsx)("span",{className:W,children:"V=(M*0,04) + (T*0,6)"})]})})]}),(0,y.jsx)("div",{className:Z,children:(0,y.jsx)("p",{className:T,children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})}),(0,y.jsx)(g,{})]})},A=t(9321),P="DailyNorma_position__JOUK2",I="DailyNorma_title__X4SZH",H="DailyNorma_flex__f42Rc",R="DailyNorma_desc__j4uSG",E="DailyNorma_button__z94Bt",L=t(6681),B=function(e){return e.waterRate.waterRate},z=function(){var e=(0,s.I0)(),a=(0,s.v9)(L.WK),t=(0,s.v9)(B);return(0,y.jsxs)("div",{className:P,children:[(0,y.jsx)("h3",{className:I,children:"My daily norma"}),(0,y.jsxs)("div",{className:H,children:[(0,y.jsx)("p",{className:R,children:(0,y.jsxs)("strong",{children:[(t/1e3).toFixed(2)," L"]})}),(0,y.jsx)("button",{className:E,type:"button",onClick:function(){e((0,n.rA)())},children:"Edit"})]}),a?(0,y.jsx)(A.Z,{active:a,onClose:function(){e((0,n.rA)())},children:(0,y.jsx)(F,{})}):null]})},V=t(5861),G=t(4687),X=t.n(G),O=t(6818),U="AddWaterModal_container__BdiNB",q="AddWaterModal_firstblock__8aE9p",Q="AddWaterModal_exit__hzEA6",K="AddWaterModal_title__1QuAy",J="AddWaterModal_description__MWnVx",Y="AddWaterModal_secondblock__LIZfL",$="AddWaterModal_desc__bUSVa",ee="AddWaterModal_amount__mR7Tc",ae="AddWaterModal_btn__F5VVy",te="AddWaterModal_span__q9j94",se="AddWaterModal_thirdblock__1tEFH",ne="AddWaterModal_select__inDsb",re="AddWaterModal_fourthblock__iXiuN",le="AddWaterModal_label__PTBk-",ie="AddWaterModal_input__Ca7yJ",oe="AddWaterModal_fifthblock__zy-tk",ce="AddWaterModal_amn__sNyLX",de="AddWaterModal_save__Q5Ajf",ue=function(e){var a=e.closeModal,t=(0,s.I0)(),n=(0,l.useState)(0),i=(0,r.Z)(n,2),o=i[0],c=i[1],d=(0,l.useState)(""),u=(0,r.Z)(d,2),m=u[0],_=u[1],h=(0,l.useState)(function(){var e=new Date,a=String(e.getHours()),t=String(e.getMinutes()).padStart(2,"0");return"".concat(a,":").concat(t)}()),x=(0,r.Z)(h,2),j=x[0],f=x[1];(0,l.useEffect)((function(){_(o.toString())}),[o]);var v=function(){var e=(0,V.Z)(X().mark((function e(s){var n,l,i,c,d,u;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),n=j.split(":").map(Number),l=(0,r.Z)(n,2),i=l[0],c=l[1],(d=new Date).setHours(i),d.setMinutes(c),u=d.toISOString(),e.prev=6,e.next=9,t((0,O.LZ)({amount:o,date:u}));case 9:"fulfilled"===e.sent.meta.requestStatus&&a(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(a){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{className:U,children:[(0,y.jsxs)("div",{className:q,children:[(0,y.jsx)("h2",{className:K,children:"Add water"}),(0,y.jsx)("button",{className:Q,type:"button",onClick:a,children:(0,y.jsx)(w.n,{id:"#close",width:24,height:24})})]}),(0,y.jsx)("p",{className:J,children:" Choose a value:"}),(0,y.jsxs)("div",{className:Y,children:[(0,y.jsx)("p",{className:$,children:"Amount of water:"}),(0,y.jsxs)("div",{className:ee,children:[(0,y.jsx)("button",{className:ae,onClick:function(){c((function(e){return Math.max(e-50,0)}))},disabled:0===o,children:(0,y.jsx)(w.n,{id:"#minus",width:10,height:14})}),(0,y.jsxs)("span",{className:te,children:[o,"ml"]}),(0,y.jsx)("button",{className:ae,onClick:function(){c((function(e){return e+50}))},children:(0,y.jsx)(w.n,{id:"#plus",width:14,height:14})})]})]}),(0,y.jsxs)("form",{onSubmit:v,children:[(0,y.jsxs)("div",{className:se,children:[(0,y.jsx)("p",{className:$,children:"Recording time:"}),(0,y.jsx)("div",{children:(0,y.jsx)("select",{value:j,onChange:function(e){f(e.target.value)},className:ne,children:function(){for(var e=[],a=0;a<24;a++)for(var t=0;t<60;t+=5){var s="".concat(a.toString(),":").concat(t.toString().padStart(2,"0"));e.push((0,y.jsx)("option",{value:s,children:s},s))}return e}()})})]}),(0,y.jsxs)("div",{className:re,children:[(0,y.jsx)("label",{className:le,children:"Enter the value of the water used:"}),(0,y.jsx)("input",{className:ie,type:"text",value:m,onChange:function(e){_(e.target.value)},onBlur:function(){var e=50*Math.round(Number(m)/50);c(Number(m)),_(e.toString())}})]}),(0,y.jsxs)("div",{className:oe,children:[(0,y.jsxs)("p",{className:ce,children:[o,"ml"]}),(0,y.jsx)("button",{className:de,type:"submit",children:"Save"})]})]})]})},me=function(e){return e.water.items},_e=function(e){return e.water.todayData},he=function(e){return e.water.error},xe=function(e){return e.water.isLoading},je=function(e){return e.water.listItems},fe="WaterProgress_flex__s5pLC",ve="WaterProgress_title__KtZ5d",Ne="WaterProgress_progressBarConteiner__WLLPk",pe="WaterProgress_progressBar__H2Rel",ye="WaterProgress_progress__HMQxG",ge="WaterProgress_percent_bar__d0xMQ",we="WaterProgress_percent_num__Osrb9",Me="WaterProgress_percent_num_current__PXDPO",be="WaterProgress_button__KbNTZ",Ce="WaterProgress_icon__qku-4",ke=function(){var e=(0,l.useState)(!1),a=(0,r.Z)(e,2),t=a[0],n=a[1],i=(0,s.I0)(),o=(0,s.v9)(_e),c=(0,s.v9)(me),d=(0,s.v9)(B);(0,l.useEffect)((function(){i((0,O.DI)())}),[i,c,d]);var u=function(){n(!1)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:fe,children:[(0,y.jsxs)("div",{className:Ne,children:[(0,y.jsx)("p",{className:ve,children:"Today"}),(0,y.jsx)("div",{className:pe,children:o?(0,y.jsx)("div",{className:ye,style:{width:"".concat(Math.min(o.waterPercent,100),"%")}}):(0,y.jsx)("div",{className:ye,style:{width:"0%"}})}),(0,y.jsxs)("div",{className:ge,children:[(0,y.jsx)("div",{className:0===o.waterPercent?Me:we,children:"0%"}),(0,y.jsx)("div",{className:50===o.waterPercent?Me:we,children:"50%"}),(0,y.jsx)("div",{className:o.waterPercent>=100?Me:we,children:o.waterPercent<=100?"100%":"".concat(o.waterPercent,"%")})]})]}),(0,y.jsxs)("button",{className:be,onClick:function(){n(!t)},children:[(0,y.jsx)("div",{className:Ce,children:(0,y.jsx)(w.n,{id:"#circleplus",width:24,height:24})}),"Add Water"]})]}),t?(0,y.jsx)(A.Z,{active:t,onClose:u,children:(0,y.jsx)(ue,{closeModal:u})}):null]})},Se=t(1413),De=t(1726),We=t(3648),Ze=t(1155),Te=t(5962),Fe=t(3540),Ae=t(2430),Pe=t(2610),Ie="Calendar_calendarContainer__ZNbWP",He="Calendar_calendarHeader__dtPX6",Re="Calendar_titleMonth__VGkaA",Ee="Calendar_monthNameContainer__T-fX8",Le="Calendar_buttonMonth__x0JmG",Be="Calendar_monthName__R114a",ze="Calendar_calendarGrid__7VATe",Ve="Calendar_day__voALS",Ge="Calendar_calendarDay__dt04z",Xe="Calendar_noBorder__VEtYF",Oe="Calendar_today__jZMN6",Ue="Calendar_popover__80+bz",qe="Calendar_popoverDate__QmOG4",Qe="Calendar_popoverList__Tk1vF",Ke=t(442),Je=function(e){return e.month.todayData},Ye=function(e){var a=e.date,t=e.dailyNorma,s=e.fulfillment,n=e.waterServings,r=(0,De.WU)(a,"d MMMM");return(0,y.jsxs)("div",{className:Ue,children:[(0,y.jsx)("p",{className:qe,children:r}),(0,y.jsxs)("p",{className:Qe,children:["Daily norma: ",(0,y.jsxs)("span",{className:qe,children:[t,"L"]})]}),(0,y.jsxs)("p",{className:Qe,children:["Fulfillment of the daily norm:"," ",(0,y.jsxs)("span",{className:qe,children:[s,"%"]})]}),(0,y.jsxs)("p",{className:Qe,children:["How many servings of water:"," ",(0,y.jsx)("span",{className:qe,children:n})]})]})},$e=function(){var e=(0,l.useState)(new Date),a=(0,r.Z)(e,2),t=a[0],n=a[1],i=(0,l.useState)(null),o=(0,r.Z)(i,2),c=o[0],d=o[1],u=(0,l.useState)([]),m=(0,r.Z)(u,2),_=m[0],h=m[1],x=(0,s.I0)(),j=(0,s.v9)(Je);(0,l.useEffect)((function(){var e=function(){var e=(0,V.Z)(X().mark((function e(){return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x((0,Ke.r)((0,De.WU)(t,"yyyy-MM")));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Error fetching month data:",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}),[x,t]),(0,l.useEffect)((function(){if(j){var e=((null===j||void 0===j?void 0:j.waterInfoForMonth)||[]).map((function(e){return{dailyNorma:e.waterRate/1e3,fulfillment:e.percentage,waterServings:e.totalIntake}}));h(e)}}),[j]);var f=(0,Te.N)(t),v=(0,Fe.V)(t),N=(0,Ae.D)({start:f,end:v});return(0,y.jsxs)("div",{className:Ie,children:[(0,y.jsxs)("div",{className:He,children:[(0,y.jsx)("h1",{className:Re,children:"Month"}),(0,y.jsxs)("div",{className:Ee,children:[(0,y.jsx)("button",{className:Le,onClick:function(){n((0,Ze.W)(t,1))},children:"<"}),(0,y.jsx)("p",{className:Be,children:(0,De.WU)(t,"MMMM yyyy")}),(0,y.jsx)("button",{className:Le,onClick:function(){n((0,We.z)(t,1))},children:">"})]})]}),(0,y.jsxs)("div",{className:ze,children:[N.map((function(e,a){var t,s,n=(null===(t=_[a])||void 0===t?void 0:t.fulfillment)>=100;return(0,y.jsxs)("div",{className:Ve,children:[(0,y.jsx)("div",{className:"".concat(Ge," ").concat((0,Pe.z)(e)?Oe:""," ").concat(n?Xe:""),onMouseEnter:function(){return d((0,Se.Z)((0,Se.Z)({},_[a]),{},{date:e}))},onMouseLeave:function(){return d(null)},children:(0,De.WU)(e,"d")}),(0,y.jsxs)("div",{children:[null===(s=_[a])||void 0===s?void 0:s.fulfillment,"%"]})]},a)})),c&&(0,y.jsx)(Ye,(0,Se.Z)((0,Se.Z)({},c),{},{date:c.date}))]})]})},ea="HomePage_sectionHome__E8g+8",aa="HomePage_containerHome__TjOv1",ta="HomePage_direction__1DZZU",sa="HomePage_waterRateContainer__uwnzr",na="Today_todayContainer__7+R3o",ra="Today_todayTitle__M5LM0",la="Today_list_waters__o+iiP",ia="Today_list_item__K+jnz",oa="Today_today_container__q0ds5",ca="Today_waterItemblok__2NG27",da="Today_contentItemblok__QztGO",ua="Today_waterItem__IlUem",ma="Today_timeItem__oLUEd",_a="Today_itemButtonblok__Qio5T",ha="Today_editButton__J-5Hc",xa="Today_iconEdit__Kdmlr",ja="Today_iconDel__d36BZ",fa="Today_delButton__W6q3B",va="Today_button__gVPOA",Na="Today_buttonblok__zqjnr",pa="Today_iconPlus__IhSzI",ya="Today_buttonText__X07F+",ga="Today_iconGlas__RaECM",wa="Today_loader_container__gI9hI",Ma="Today_loader__aAFlB",ba=t(3439),Ca=function(){var e=(0,s.I0)(),a=(0,s.v9)(je),t=(0,s.v9)(xe),n=(0,s.v9)(he),i=(0,l.useState)(""),o=(0,r.Z)(i,2),c=o[0],d=o[1],u=(0,l.useState)(!1),m=(0,r.Z)(u,2),_=m[0],h=m[1],x=(0,l.useState)(!1),j=(0,r.Z)(x,2),f=j[0],v=j[1],N=function(e){document.body.style.overflow="hidden",d(e.currentTarget.dataset.iditems),h(!0),console.log(_)},p=function(e){document.body.style.overflow="hidden",d(e.currentTarget.dataset.iditems),v(!0),console.log(_)},g=function(){h(!1),v(!1),document.body.style.overflow=""},w=(0,l.useState)(0),M=(0,r.Z)(w,2),b=M[0],C=M[1],k=(0,l.useState)(""),S=(0,r.Z)(k,2),D=S[0],W=S[1],Z=(0,l.useState)(function(){var e=new Date,a=String(e.getHours()),t=String(e.getMinutes()).padStart(2,"0");return"".concat(a,":").concat(t)}()),T=(0,r.Z)(Z,2),F=T[0],P=T[1];(0,l.useEffect)((function(){W(b.toString())}),[b]);var I=(0,l.useState)(!1),H=(0,r.Z)(I,2),R=H[0],E=H[1],L=function(){E(!1)};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:na,children:[(0,y.jsxs)("div",{className:oa,children:[(0,y.jsx)("h2",{className:ra,children:"Today"}),(0,y.jsxs)("div",{className:wa,children:[t&&!n&&(0,y.jsx)("div",{className:Ma,children:"loading"}),n&&n]})]}),(0,y.jsx)("ul",{className:la,children:a.waterRecords&&a.waterRecords.map((function(e){var a=e.id,t=e.consumedWater,s=e.date,n=new Date(s);return(0,y.jsxs)("li",{className:ia,children:[(0,y.jsxs)("div",{className:ca,children:[(0,y.jsx)("svg",{className:ga,width:"26",height:"26",children:(0,y.jsx)("use",{href:ba.Z+"#glas"})}),(0,y.jsxs)("div",{className:da,children:[(0,y.jsxs)("p",{className:ua,children:[t," ml"]})," ",(0,y.jsxs)("p",{className:ma,children:[n.getHours()<10&&"0",n.getHours(),":",n.getMinutes()<10&&"0",n.getMinutes()," ",n.getHours()<12?"AM":"PM"]})]})]}),(0,y.jsxs)("div",{className:_a,children:[(0,y.jsx)("button",{className:ha,type:"button","data-iditems":a,onClick:p,children:(0,y.jsx)("svg",{className:xa,width:"16",height:"16",children:(0,y.jsx)("use",{href:ba.Z+"#edit"})})}),(0,y.jsx)("button",{className:fa,type:"button","data-iditems":a,onClick:N,children:(0,y.jsx)("svg",{className:ja,width:"16",height:"13",children:(0,y.jsx)("use",{href:ba.Z+"#delete"})})})]})]},a)}))}),_&&(0,y.jsxs)(A.Z,{active:h,onClose:g,children:[(0,y.jsx)("p",{children:"DELETE"}),(0,y.jsx)("button",{type:"button",onClick:g,children:"cancel"}),(0,y.jsx)("button",{type:"button",onClick:function(){h(!1),document.body.style.overflow="",d(""),e((0,O.Wr)(c))},children:"delete"})]}),f&&(0,y.jsxs)(A.Z,{active:f,onClose:g,children:[(0,y.jsx)("h2",{children:"Edit the entered amount of water"}),a.waterRecords&&a.waterRecords.map((function(e){var a=e.id,t=e.consumedWater,s=e.date,n=new Date(s);return a===c?(0,y.jsxs)("div",{className:ia,children:[(0,y.jsxs)("p",{children:[t," ml"]})," ",(0,y.jsxs)("p",{children:[n.getHours()<10&&"0",n.getHours(),":",n.getMinutes()<10&&"0",n.getMinutes()," ",n.getHours()<12?"AM":"PM"]})]},a):null})),(0,y.jsx)("p",{children:"Correct entered data:"}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:"Amount of water:"}),(0,y.jsxs)("div",{children:[(0,y.jsx)("button",{onClick:function(){C((function(e){return Math.max(e-50,0)}))},disabled:0===b,children:"-"}),b,"ml",(0,y.jsx)("button",{onClick:function(){C((function(e){return e+50}))},children:"+"})]})]}),(0,y.jsxs)("form",{onSubmit:function(a){a.preventDefault();var t=F.split(":").map(Number),s=(0,r.Z)(t,2),n=s[0],l=s[1],i=new Date;i.setHours(n),i.setMinutes(l);var o=i.toISOString();v(!1),document.body.style.overflow="",e((0,O.VZ)({amount:b,date:o,id:c}))},children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:"Recording time:"}),(0,y.jsx)("div",{children:(0,y.jsx)("select",{value:F,onChange:function(e){P(e.target.value)},children:function(){for(var e=[],a=0;a<24;a++)for(var t=0;t<60;t+=5){var s="".concat(a.toString(),":").concat(t.toString().padStart(2,"0"));e.push((0,y.jsx)("option",{value:s,children:s},s))}return e}()})})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{children:"Enter the value of the water used:"}),(0,y.jsx)("input",{type:"text",value:D,onChange:function(e){W(e.target.value)},onBlur:function(){var e=50*Math.round(Number(D)/50);C(Number(D)),W(e.toString())}})]}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{children:[b,"ml"]}),(0,y.jsx)("button",{type:"submit",children:"Save"})]})]})]}),(0,y.jsx)("button",{className:va,onClick:function(){E(!R)},children:(0,y.jsxs)("div",{className:Na,children:[(0,y.jsx)("svg",{className:pa,width:"10",height:"10",children:(0,y.jsx)("use",{href:ba.Z+"#plus"})}),(0,y.jsx)("p",{className:ya,children:"Add Water"})]})}),R?(0,y.jsx)(A.Z,{active:R,onClose:L,children:(0,y.jsx)(ue,{closeModal:L})}):null]})})},ka=function(){return(0,y.jsx)("section",{className:ea,children:(0,y.jsxs)("div",{className:"container ".concat(aa),children:[(0,y.jsxs)("div",{className:ta,children:[(0,y.jsx)(z,{}),(0,y.jsx)(ke,{})]}),(0,y.jsxs)("div",{className:sa,children:[(0,y.jsx)(Ca,{}),(0,y.jsx)($e,{})]})]})})}}}]);
//# sourceMappingURL=949.9b9548e2.chunk.js.map