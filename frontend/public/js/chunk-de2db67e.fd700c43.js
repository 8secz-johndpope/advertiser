(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de2db67e"],{"0bdc":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mx-auto"},[e("apexchart",{attrs:{width:"250",type:"radialBar",options:t.chartOptions,series:t.series}})],1)},i=[],s=e("1321"),r=e.n(s),l={name:"RadialBarExample",components:{apexchart:r.a},data:function(){return{chartOptions:{labels:["Percent"]},series:[81]}}},o=l,c=e("2877"),m=Object(c["a"])(o,n,i,!1,null,null,null);a["a"]=m.exports},"16fe":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"example"},[e("apexchart",{attrs:{height:"350",type:"line",options:t.chartOptions,series:t.series}})],1)},i=[],s=e("1321"),r=e.n(s),l={name:"MixedExample",components:{apexchart:r.a},data:function(){return{chartOptions:{chart:{stacked:!1},stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?t.toFixed(0)+" points":t}}}},series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}]}}},o=l,c=e("2877"),m=Object(c["a"])(o,n,i,!1,null,null,null);a["a"]=m.exports},"1a01":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-page-title"},[e("div",{staticClass:"page-title-wrapper"},[e("div",{staticClass:"page-title-heading"},[e("div",{staticClass:"page-title-icon"},[e("i",{class:t.icon})]),e("div",[t._v(" "+t._s(t.heading)+" "),e("div",{staticClass:"page-title-subheading"},[t._v(t._s(t.subheading))])])]),e("div",{staticClass:"page-title-actions"},[e("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v("Create New ")],1)])])])},i=[],s=e("ecee"),r=e("c074"),l=e("ad3d");s["c"].add(r["X"],r["R"]);var o={components:{"font-awesome-icon":l["a"]},props:{icon:String,heading:String,subheading:String}},c=o,m=e("2877"),p=Object(m["a"])(c,n,i,!1,null,null,null);a["a"]=p.exports},d170:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Area"}},[e("AreaExample")],1),e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Bar"}},[e("BarExample")],1),e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Column"}},[e("ColumnExample")],1),e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Scatter"}},[e("ScatterExample")],1),e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Heatmap"}},[e("HeatmapExample")],1)],1),e("b-col",{attrs:{md:"6"}},[e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Mixed"}},[e("MixedExample")],1),e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Donut"}},[e("DonutExample")],1),e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Radial Bar"}},[e("RadialBarExample")],1),e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Bubble"}},[e("BubbleExample")],1),e("b-card",{staticClass:"main-card mb-3",attrs:{title:"Line"}},[e("LineExample")],1)],1)],1)],1)},i=[],s=e("1a01"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"example"},[e("apexchart",{attrs:{height:"350",type:"area",options:t.chartOptions,series:t.series}})],1)},l=[],o=e("1321"),c=e.n(o),m={name:"AreaExample",components:{apexchart:c.a},data:function(){return{chartOptions:{dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},tooltip:{fixed:{enabled:!1,position:"topRight"}}},series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]}}},p=m,d=e("2877"),u=Object(d["a"])(p,r,l,!1,null,null,null),h=u.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"example"},[e("apexchart",{attrs:{height:"350",type:"bar",options:t.chartOptions,series:t.series}}),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary",on:{click:t.updateChart}},[t._v("Update!")])])],1)},b=[],f={name:"BarExample",components:{apexchart:c.a},data:function(){return{chartOptions:{plotOptions:{bar:{horizontal:!0}},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]}]}},methods:{updateChart:function(){var t=90,a=20,e=this.series[0].data.map((function(){return Math.floor(Math.random()*(t-a+1))+a})),n=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];this.chartOptions={colors:[n[Math.floor(Math.random()*n.length)]]},this.series=[{data:e}]}}},g=f,v=Object(d["a"])(g,x,b,!1,null,null,null),C=v.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"example"},[e("apexchart",{attrs:{height:"350",type:"bar",options:t.chartOptions,series:t.series}}),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary",on:{click:t.updateChart}},[t._v("Update!")])])],1)},M=[],y={name:"ColumnExample",components:{apexchart:c.a},data:function(){return{chartOptions:{plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,41,98,87,44,91,81,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}]}},methods:{updateChart:function(){var t=100,a=20,e=[];this.series.map((function(n){var i=n.data.map((function(){return Math.floor(Math.random()*(t-a+1))+a}));e.push({data:i})})),this.series=e}}},O=y,_=Object(d["a"])(O,E,M,!1,null,null,null),D=_.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"example"},[e("apexchart",{attrs:{height:"350",type:"scatter",options:t.chartOptions,series:t.series}})],1)},B=[],S={name:"ScatterExample",components:{apexchart:c.a},data:function(){return{chartOptions:{chart:{zoom:{enabled:!1}},xaxis:{tickAmount:10},yaxis:{tickAmount:7}},series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[6.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}]}}},A=S,F=Object(d["a"])(A,w,B,!1,null,null,null),T=F.exports,k=e("16fe"),$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"example"},[e("apexchart",{ref:"donut",attrs:{width:"350",type:"donut",options:t.chartOptions,series:t.series}}),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary",on:{click:t.updateChart}},[t._v("Update!")])])],1)},j=[],L={name:"DonutExample",components:{apexchart:c.a},data:function(){return{chartOptions:{labels:["Blue","Green","Yellow","Red"]},series:[11,32,45,32]}},methods:{updateChart:function(){var t=90,a=20,e=this.series.map((function(){return Math.floor(Math.random()*(t-a+1))+a}));this.series=e}}},R=L,J=Object(d["a"])(R,$,j,!1,null,null,null),P=J.exports,W=e("0bdc"),G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"example"},[e("apexchart",{attrs:{height:"350",type:"bubble",options:t.chartOptions,series:t.series}})],1)},H=[],z={name:"BubbleExample",components:{apexchart:c.a},data:function(){return{chartOptions:{dataLabels:{enabled:!1},fill:{opacity:.8,gradient:{enabled:!1}},title:{text:"Simple Bubble Chart"},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70}},series:[{name:"Bubble1",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble3",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble4",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}]}},methods:{generateData:function(t,a,e){var n=0,i=[];while(n<a){var s=Math.floor(750*Math.random())+1,r=Math.floor(Math.random()*(e.max-e.min+1))+e.min,l=Math.floor(61*Math.random())+15;i.push([s,r,l]),864e5,n++}return i}}},U=z,N=Object(d["a"])(U,G,H,!1,null,null,null),V=N.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"example"},[e("apexchart",{attrs:{height:"300",type:"heatmap",options:t.chartOptions,series:t.series}})],1)},Y=[],q={name:"HeatmapExample",components:{apexchart:c.a},data:function(){return{chartOptions:{dataLabels:{enabled:!1},colors:["#008FFB"],xaxis:{type:"category"},title:{text:"HeatMap Chart (Single color)"}},series:[{name:"Metric1",data:this.generateData(20,{min:0,max:90})},{name:"Metric2",data:this.generateData(20,{min:0,max:90})},{name:"Metric3",data:this.generateData(20,{min:0,max:90})},{name:"Metric4",data:this.generateData(20,{min:0,max:90})},{name:"Metric5",data:this.generateData(20,{min:0,max:90})},{name:"Metric6",data:this.generateData(20,{min:0,max:90})},{name:"Metric7",data:this.generateData(20,{min:0,max:90})},{name:"Metric8",data:this.generateData(20,{min:0,max:90})},{name:"Metric9",data:this.generateData(20,{min:0,max:90})}]}},methods:{generateData:function(t,a){var e=0,n=[];while(e<t){var i=(e+1).toString(),s=Math.floor(Math.random()*(a.max-a.min+1))+a.min;n.push({x:i,y:s}),e++}return n}}},I=q,K=Object(d["a"])(I,X,Y,!1,null,null,null),Q=K.exports,Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"example"},[e("apexchart",{attrs:{height:"350",type:"line",options:t.chartOptions,series:t.series}}),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary",on:{click:t.updateChart}},[t._v("Update!")])])],1)},tt=[],at={name:"LineExample",components:{apexchart:c.a},data:function(){return{chartOptions:{xaxis:{type:"datetime",categories:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003"]}},series:[{name:"Series A",data:[30,40,45,50,49,60,70,91]},{name:"Series B",data:[23,43,54,12,44,52,32,11]}]}},methods:{generateDayWiseTimeSeries:function(t,a,e){var n=0,i=[];while(n<a){var s=t,r=Math.floor(Math.random()*(e.max-e.min+1))+e.min;i.push([s,r]),t+=864e5,n++}return i},updateChart:function(){var t=[{name:"South",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})},{name:"North",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(),20,{min:10,max:20})},{name:"Central",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(),20,{min:10,max:15})}];this.series=t}}},et=at,nt=Object(d["a"])(et,Z,tt,!1,null,null,null),it=nt.exports,st={components:{PageTitle:s["a"],AreaExample:h,BarExample:C,ColumnExample:D,ScatterExample:T,MixedExample:k["a"],DonutExample:P,RadialBarExample:W["a"],BubbleExample:V,HeatmapExample:Q,LineExample:it},data:function(){return{heading:"Apex Charts",subheading:"Wonderful animated charts built as a Vue component.",icon:"pe-7s-graph2 icon-gradient bg-happy-green"}},methods:{}},rt=st,lt=Object(d["a"])(rt,n,i,!1,null,null,null);a["default"]=lt.exports}}]);