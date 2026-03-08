"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[653],{10653:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ie});var i=a(47324),n=a(50290),o=a(5556),s=a.n(o),r=a(7350),l=a.n(r),c=a(20249),h=a.n(c),m=a(24143),u=a.n(m),d=a(74353),p=a.n(d),y=a(83826),x=a.n(y),g=a(71111),b=a.n(g),f=a(58083),v=a(87948),A=a(14503),k=a(7741),w=a(29898),L=a(74098),T=a(52966),$=a(74842),C=a(77709);function M(e){return Object.keys(e).reduce(((e,t)=>{const a=e;return a[t]=t,a}),{})}const N=M({FORMULA:{value:"FORMULA",label:(0,L.t)("Formula")},EVENT:{value:"EVENT",label:(0,L.t)("Event"),supportNativeSource:!0},INTERVAL:{value:"INTERVAL",label:(0,L.t)("Interval"),supportNativeSource:!0},TIME_SERIES:{value:"TIME_SERIES",label:(0,L.t)("Time Series")}}),E=(N.FORMULA,M({NATIVE:{value:"NATIVE",label:"Superset annotation"}})),S={descriptionColumns:["long_descr"],intervalEndColumn:"end_dttm",timeColumn:"start_dttm",titleColumn:"short_descr"};function O(e){return e.sourceType===E.NATIVE?{...e,...S}:e}const F=N;var D=a(7145),I=a(20358);const B=s().oneOfType([s().number,s().oneOf(["auto"])]),z=s().oneOfType([s().string,s().shape({label:s().string})]),R=s().shape({r:s().number.isRequired,g:s().number.isRequired,b:s().number.isRequired}),Y=s().shape({x:s().number,y:s().number}),_=s().shape({x:s().string,y:s().number}),P=s().shape({outliers:s().arrayOf(s().number),Q1:s().number,Q2:s().number,Q3:s().number,whisker_high:s().number,whisker_low:s().number}),V=s().shape({markerLabels:s().arrayOf(s().string),markerLineLabels:s().arrayOf(s().string),markerLines:s().arrayOf(s().number),markers:s().arrayOf(s().number),measures:s().arrayOf(s().number),rangeLabels:s().arrayOf(s().string),ranges:s().arrayOf(s().number)}),U=s().shape({annotationType:s().oneOf(Object.keys(N)),color:s().string,hideLine:s().bool,name:s().string,opacity:s().string,show:s().bool,showMarkers:s().bool,sourceType:s().string,style:s().string,value:s().oneOfType([s().number,s().string]),width:s().number}),W=[{text:"No data",dy:"-.75em",class:"header"},{text:"Adjust filters or check the Datasource.",dy:".75em",class:"body"}];p().extend(x());const G=(0,f.mo)(v.M);b().utils.noData=function(e,t){const a=e.options().margin(),i=b().utils.availableHeight(null,t,a),n=b().utils.availableWidth(null,t,a),o=a.left+n/2,s=a.top+i/2;t.selectAll("g").remove();const r=t.selectAll(".nv-noData").data(W);r.enter().append("text").attr("class",(e=>`nvd3 nv-noData ${e.class}`)).attr("dy",(e=>e.dy)).style("text-anchor","middle"),r.attr("x",o).attr("y",s).text((e=>e.text))};const{getColor:j,getScale:q}=A,H=[k.Y.Compare,k.Y.TimePivot],Q={data:s().oneOfType([s().arrayOf(s().oneOfType([_,s().shape({key:s().string,values:s().arrayOf(_)}),s().shape({key:s().arrayOf(s().string),values:s().arrayOf(Y)}),s().shape({classed:s().string,key:s().string,type:s().string,values:s().arrayOf(Y),yAxis:s().number}),s().shape({label:s().string,values:s().arrayOf(P)}),s().shape({key:s().string,values:s().arrayOf(s().object)})])),V]),width:s().number,height:s().number,annotationData:s().object,annotationLayers:s().arrayOf(U),bottomMargin:B,colorScheme:s().string,comparisonType:s().string,contribution:s().bool,leftMargin:B,onError:s().func,showLegend:s().bool,showMarkers:s().bool,vizType:s().oneOf([k.Y.BoxPlot,"bubble",k.Y.Bullet,k.Y.Compare,"column",k.Y.TimePivot,"pie"]),xAxisFormat:s().string,numberFormat:s().string,xAxisLabel:s().string,xAxisShowMinMax:s().bool,xIsLogScale:s().bool,xTicksLayout:s().oneOf(["auto","staggered","45°"]),yAxisFormat:s().string,yAxisBounds:s().arrayOf(s().number),yAxisLabel:s().string,yAxisShowMinMax:s().bool,yIsLogScale:s().bool,isBarStacked:s().bool,showBarValue:s().bool,showBrush:s().oneOf([!0,"yes",!1,"no","auto"]),onBrushEnd:s().func,yAxis2Format:s().string,lineInterpolation:s().string,isDonut:s().bool,isPieLabelOutside:s().bool,pieLabelType:s().oneOf(["key","value","percent","key_value","key_percent","key_value_percent"]),showLabels:s().bool,entity:s().string,maxBubbleSize:s().number,xField:z,yField:z,sizeField:z,baseColor:R},X=()=>{},J=(0,w.gV)();function K(e,t){const{data:a,width:i,height:n,annotationData:o,annotationLayers:s=[],baseColor:r,bottomMargin:c,colorScheme:m,comparisonType:d,contribution:y,entity:x,isBarStacked:g,isDonut:v,isPieLabelOutside:A,leftMargin:M,lineInterpolation:N="linear",markerLabels:E,markerLines:S,markerLineLabels:B,markers:z,maxBubbleSize:R,onBrushEnd:Y=X,onError:_=X,pieLabelType:P,rangeLabels:V,ranges:U,showBarValue:W,showBrush:Q,showLabels:K,showLegend:Z,showMarkers:ee,sizeField:te,vizType:ae,xAxisFormat:ie,numberFormat:ne,xAxisLabel:oe,xAxisShowMinMax:se=!1,xField:re,xIsLogScale:le,xTicksLayout:ce,yAxisFormat:he,yAxisBounds:me,yAxisLabel:ue,yAxisShowMinMax:de=!1,yAxis2ShowMinMax:pe=!1,yField:ye,yIsLogScale:xe,sliceId:ge}=t,be=null!==document.querySelector("#explorer-container"),fe=e;fe.innerHTML="";const ve=s.filter((e=>e.show));let Ae,ke=fe,we=null;for(;ke.parentElement;){if(ke.parentElement.id.startsWith("chart-id-")){we=ke.parentElement.id;break}ke=ke.parentElement}const Le=i;let Te="key";function $e(e){return e.includes(ae)}fe.style.width=`${i}px`,fe.style.height=`${n}px`,we?(0,I.G0)(we):(0,I.$v)(!0),b().addGraph((function(){const t=u().select(e);t.classed("superset-legacy-chart-nvd3",!0),t.classed(`superset-legacy-chart-nvd3-${h()(ae)}`,!0);let s=t.select("svg");s.empty()&&(s=t.append("svg"));const fe=ae===k.Y.Bullet?Math.min(n,50):n,ke=$e(H),Ce="staggered"===ce,Me="45°"===ce?45:0;if(45===Me&&(0,D.A)(Q))return _((0,L.t)("You cannot use 45° tick layout along with the time range filter")),null;const Ne=(0,D.A)(Q)||"auto"===Q&&n>=480&&"45°"!==ce,Ee=(0,w.gV)(ne);switch(ae){case k.Y.TimePivot:Ae=b().models.lineChart(),Ae.xScale(u().time.scale.utc()),Ae.interpolate(N);break;case k.Y.Pie:if(Ae=b().models.pieChart(),Te="x",Ae.valueFormat(Ee),v&&Ae.donut(!0),Ae.showLabels(K),Ae.labelsOutside(A),Ae.labelThreshold(.05),Ae.cornerRadius(!0),["key","value","percent"].includes(P))Ae.labelType(P);else if("key_value"===P)Ae.labelType((e=>`${e.data.x}: ${Ee(e.data.y)}`));else{const e=u().sum(a,(e=>e.y)),t=(0,w.gV)(T.A.PERCENT_2_POINT);"key_percent"===P?(Ae.tooltip.valueFormatter((e=>t(e))),Ae.labelType((a=>`${a.data.x}: ${t(a.data.y/e)}`))):(Ae.tooltip.valueFormatter((a=>`${Ee(a)} (${t(a/e)})`)),Ae.labelType((a=>`${a.data.x}: ${Ee(a.data.y)} (${t(a.data.y/e)})`)))}Ae.margin({top:0});break;case"column":Ae=b().models.multiBarChart().reduceXTicks(!1);break;case k.Y.Compare:Ae=b().models.cumulativeLineChart(),Ae.xScale(u().time.scale.utc()),Ae.useInteractiveGuideline(!0),Ae.xAxis.showMaxMin(!1);break;case k.Y.LegacyBubble:Ae=b().models.scatterChart(),Ae.showDistX(!1),Ae.showDistY(!1),Ae.tooltip.contentGenerator((e=>(0,I.oh)({point:e.point,entity:x,xField:re,yField:ye,sizeField:te,xFormatter:(0,I.wn)(ie),yFormatter:(0,I.wn)(he),sizeFormatter:J}))),Ae.pointRange([5,R**2]),Ae.pointDomain([0,u().max(a,(e=>u().max(e.values,(e=>e.size))))]);break;case k.Y.BoxPlot:Te="label",Ae=b().models.boxPlotChart(),Ae.x((e=>e.label)),Ae.maxBoxWidth(75);break;case k.Y.Bullet:Ae=b().models.bulletChart(),a.rangeLabels=V,a.ranges=U,a.markerLabels=E,a.markerLines=S,a.markerLineLabels=B,a.markers=z;break;default:throw new Error(`Unrecognized visualization for nvd3${ae}`)}let Se;Ae.margin({left:0,bottom:0}),W&&((0,I.C$)(s,a,g,he),Ae.dispatch.on("stateChange.drawBarValues",(()=>{(0,I.C$)(s,a,g,he)}))),Ne&&Y!==X&&Ae.focus&&Ae.focus.dispatch.on("brush",(e=>{const t=(0,I.EF)(e.extent);t&&e.brush.on("brushend",(()=>{Y(t)}))})),Ae.xAxis&&Ae.xAxis.staggerLabels&&Ae.xAxis.staggerLabels(Ce),Ae.xAxis&&Ae.xAxis.rotateLabels&&Ae.xAxis.rotateLabels(Me),Ae.x2Axis&&Ae.x2Axis.staggerLabels&&Ae.x2Axis.staggerLabels(Ce),Ae.x2Axis&&Ae.x2Axis.rotateLabels&&Ae.x2Axis.rotateLabels(Me),"showLegend"in Ae&&void 0!==Z&&(Le<340&&ae!==k.Y.Pie?Ae.showLegend(!1):Ae.showLegend(Z)),xe&&Ae.yScale(u().scale.log()),le&&Ae.xScale(u().scale.log()),ke?(Se=(0,f.mo)(ie),Ae.interactiveLayer.tooltip.headerFormatter(G)):Se=(0,I.wn)(ie),Ae.x2Axis&&Ae.x2Axis.tickFormat&&Ae.x2Axis.tickFormat(Se),Ae.xAxis&&Ae.xAxis.tickFormat&&($e([k.Y.BoxPlot])?Ae.xAxis.tickFormat((e=>e.length>40?`${e.slice(0,Math.max(0,40))}…`:e)):Ae.xAxis.tickFormat(Se));let Oe=(0,I.wn)(he);if(Ae.yAxis&&Ae.yAxis.tickFormat&&(!y&&"percentage"!==d||he&&he!==T.A.SMART_NUMBER&&he!==T.A.SMART_NUMBER_SIGNED||(Oe=(0,w.gV)(T.A.PERCENT_1_POINT)),Ae.yAxis.tickFormat(Oe)),Ae.y2Axis&&Ae.y2Axis.tickFormat&&Ae.y2Axis.tickFormat(Oe),Ae.yAxis&&Ae.yAxis.ticks(5),Ae.y2Axis&&Ae.y2Axis.ticks(5),(0,I.dw)(Ae.xAxis,se),(0,I.dw)(Ae.x2Axis,se),(0,I.dw)(Ae.yAxis,de),(0,I.dw)(Ae.y2Axis,pe||de),ae===k.Y.TimePivot){if(r){const{r:e,g:t,b:a}=r;Ae.color((i=>{const n=i.rank>0?.5*i.perc:1;return`rgba(${e}, ${t}, ${a}, ${n})`}))}Ae.useInteractiveGuideline(!0),Ae.interactiveLayer.tooltip.contentGenerator((e=>(0,I.qY)(e,Se,Oe)))}else if(ae!==k.Y.Bullet){const e=q(m);Ae.color((t=>t.color||e((0,I.n0)(t[Te]),ge)))}$e([k.Y.Compare])&&Ae.interactiveLayer.tooltip.contentGenerator((e=>(0,I.Jy)(e,Oe))),Ae.width(Le),Ae.height(fe),s.datum(a).transition().duration(500).attr("height",fe).attr("width",Le).call(Ae),xe&&Ae.yAxis.tickFormat((e=>0!==e&&Math.log10(e)%1==0?Oe(e):"")),Me>0&&s.select(".nv-x.nv-axis > g").selectAll("g").selectAll("text").attr("dx",-6.5);const Fe=()=>{if(Ae.yDomain&&Array.isArray(me)&&2===me.length){const[e,t]=me,i=(0,$.A)(e)&&!Number.isNaN(e),n=(0,$.A)(t)&&!Number.isNaN(t);if(i&&n)Ae.yDomain([e,t]),Ae.clipEdge(!0);else if(i||n){const[o,s]=(0,I.B2)(a),r=i?e:o,l=n?t:s;Ae.yDomain([r,l]),Ae.clipEdge(!0)}}};if(Fe(),Ae.dispatch&&Ae.dispatch.stateChange&&Ae.dispatch.on("stateChange.applyYAxisBounds",Fe),ee&&(s.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1),Ae.dispatch.on("stateChange.showMarkers",(()=>{setTimeout((()=>{s.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1)}),10)}))),void 0!==Ae.yAxis||void 0!==Ae.yAxis2){const t=Math.ceil(Math.min(i*(be?.01:.03),30)),n=Ae.margin();Ae.xAxis&&(n.bottom=28);const r=(0,I.cm)(s,Ae.yAxis2?"nv-y1":"nv-y"),h=(0,I.cm)(s,"nv-x");if(n.left=r+t,ue&&""!==ue&&(n.left+=25),W&&(n.top+=24),se&&(n.right=Math.max(20,h/2)+t),45===Me?(n.bottom=h*Math.sin(Math.PI*Me/180)+t+30,n.right=h*Math.cos(Math.PI*Me/180)+t):Ce&&(n.bottom=40),c&&"auto"!==c&&(n.bottom=parseInt(c,10)),M&&"auto"!==M&&(n.left=M),oe&&""!==oe&&Ae.xAxis){n.bottom+=25;let e=0;n.bottom&&!Number.isNaN(n.bottom)&&(e=n.bottom-45),Ae.xAxis.axisLabel(oe).axisLabelDistance(e)}if(ue&&""!==ue&&Ae.yAxis){let e=0;n.left&&!Number.isNaN(n.left)&&(e=n.left-70),Ae.yAxis.axisLabel(ue).axisLabelDistance(e)}if(ke&&o&&ve.length>0){const e=ve.filter((e=>e.annotationType===F.TIME_SERIES)).reduce(((e,t)=>e.concat((o[t.name]||[]).map((e=>{if(!e)return{};const a=Array.isArray(e.key)?`${t.name}, ${e.key.join(", ")}`:`${t.name}, ${e.key}`;return{...e,key:a,color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style} nv-timeseries-annotation-layer showMarkers${t.showMarkers} hideLine${t.hideLine}`}})))),[]);a.push(...e)}if(we&&(Ae&&Ae.interactiveLayer&&Ae.interactiveLayer.tooltip&&Ae.interactiveLayer.tooltip.classes([(0,I.Ir)(we)]),Ae&&Ae.tooltip&&Ae.tooltip.classes([(0,I.Ir)(we)])),Ae.margin(n),s.datum(a).transition().duration(500).attr("width",Le).attr("height",fe).call(Ae),window.addEventListener("scroll",l()((()=>(0,I.$v)(!1)),250)),ke&&ve.length>0){const t=ve.filter((e=>e.annotationType===F.FORMULA)),i=Ae.xAxis.scale().domain()[1].valueOf(),n=Ae.xAxis.scale().domain()[0].valueOf();let r;if(r=Ae.xScale?Ae.xScale():Ae.xAxis.scale?Ae.xAxis.scale():u().scale.linear(),r&&r.clamp&&r.clamp(!0),t.length>0){const e=[];let o=Math.min(...a.map((e=>Math.min(...e.values.slice(1).map(((t,a)=>t.x-e.values[a].x))))));const s=(i-n)/(o||1);o=s<100?(i-n)/100:o,o=s>500?(i-n)/500:o,e.push(n);for(let t=n;t<i;t+=o)e.push(t);e.push(i);const r=t.map((t=>{const{value:a}=t;return{key:t.name,values:e.map((e=>({x:e,y:(0,C.p)(a,e)}))),color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style}`}}));a.push(...r)}const l=Ae.xAxis1?Ae.xAxis1:Ae.xAxis,c=Ae.yAxis1?Ae.yAxis1:Ae.yAxis,h=l.scale().range()[1],d=c.scale().range()[0];o&&(ve.filter((e=>e.annotationType===F.EVENT&&o&&o[e.name])).forEach(((t,a)=>{const i=O(t),n=u().select(e).select(".nv-wrap").append("g").attr("class",`nv-event-annotation-layer-${a}`),s=i.color||j((0,I.n0)(i.name),m),l=(0,I.AN)({...i,annotationTipClass:`arrow-down nv-event-annotation-layer-${t.sourceType}`}),c=(o[i.name].records||[]).map((e=>{const t=new Date(p().utc(e[i.timeColumn]));return{...e,[i.timeColumn]:t}})).filter((e=>!Number.isNaN(e[i.timeColumn].getMilliseconds())));c.length>0&&n.selectAll("line").data(c).enter().append("line").attr({x1:e=>r(new Date(e[i.timeColumn])),y1:0,x2:e=>r(new Date(e[i.timeColumn])),y2:d}).attr("class",`${i.opacity} ${i.style}`).style("stroke",s).style("stroke-width",i.width).on("mouseover",l.show).on("mouseout",l.hide).call(l),Ae.focus&&Ae.focus.dispatch.on("onBrush.event-annotation",(()=>{n.selectAll("line").data(c).attr({x1:e=>r(new Date(e[i.timeColumn])),y1:0,x2:e=>r(new Date(e[i.timeColumn])),y2:d,opacity:e=>{const t=r(new Date(e[i.timeColumn]));return t>0&&t<h?1:0}})}))})),ve.filter((e=>e.annotationType===F.INTERVAL&&o&&o[e.name])).forEach(((t,a)=>{const i=O(t),n=u().select(e).select(".nv-wrap").append("g").attr("class",`nv-interval-annotation-layer-${a}`),s=i.color||j((0,I.n0)(i.name),m),l=(0,I.AN)(i),c=(o[i.name].records||[]).map((e=>{const t=new Date(p().utc(e[i.timeColumn])),a=new Date(p().utc(e[i.intervalEndColumn]));return{...e,[i.timeColumn]:t,[i.intervalEndColumn]:a}})).filter((e=>!Number.isNaN(e[i.timeColumn].getMilliseconds())&&!Number.isNaN(e[i.intervalEndColumn].getMilliseconds())));c.length>0&&n.selectAll("rect").data(c).enter().append("rect").attr({x:e=>Math.min(r(new Date(e[i.timeColumn])),r(new Date(e[i.intervalEndColumn]))),y:0,width:e=>Math.max(Math.abs(r(new Date(e[i.intervalEndColumn]))-r(new Date(e[i.timeColumn]))),1),height:d}).attr("class",`${i.opacity} ${i.style}`).style("stroke-width",i.width).style("stroke",s).style("fill",s).style("fill-opacity",.2).on("mouseover",l.show).on("mouseout",l.hide).call(l),Ae.focus&&Ae.focus.dispatch.on("onBrush.interval-annotation",(()=>{n.selectAll("rect").data(c).attr({x:e=>r(new Date(e[i.timeColumn])),width:e=>{const t=r(new Date(e[i.timeColumn]));return r(new Date(e[i.intervalEndColumn]))-t}})}))}))),s.datum(a).attr("height",fe).attr("width",Le).call(Ae),Ae.dispatch.on("renderEnd.timeseries-annotation",(()=>{u().selectAll(".slice_container .nv-timeseries-annotation-layer.showMarkerstrue .nv-point").style("stroke-opacity",1).style("fill-opacity",1),u().selectAll(".slice_container .nv-timeseries-annotation-layer.hideLinetrue").style("stroke-width",0)}))}}return(0,I.OK)(Ae),Ae}))}K.displayName="NVD3",K.propTypes=Q;const Z=K;var ee=a(2445);const te=(0,i.A)(Z,{componentWillUnmount:function(){const{id:e}=this.props;null!=e?(0,I.G0)(e):(0,I.$v)(!0)}}),ae=({className:e,...t})=>(0,ee.Y)("div",{className:e,children:(0,ee.Y)(te,{...t})});ae.propTypes={className:s().string.isRequired};const ie=(0,n.I4)(ae)`
  .superset-legacy-chart-nvd3-dist-bar,
  .superset-legacy-chart-nvd3-bar {
    overflow-x: auto !important;
    svg {
      &.nvd3-svg {
        width: auto;
        font-size: ${({theme:e})=>e.fontSize};
      }
    }
  }
  .superset-legacy-chart-nvd3 {
    nv-x text {
      font-size: ${({theme:e})=>e.fontSize};
    }
    g.superset path {
      stroke-dasharray: 5, 5;
    }
    .nvtooltip {
      table td {
        font-size: @font-size-s !important;
      }
    }
    .nvtooltip tr.highlight td {
      font-weight: ${({theme:e})=>e.fontWeightStrong};
      font-size: ${({theme:e})=>e.fontSize}px !important;
    }
    text.nv-axislabel {
      font-size: ${({theme:e})=>e.fontSize} !important;
    }
    g.nv-axis text {
      fill: ${({theme:e})=>e.colorText};
    }
    g.nv-series text {
      fill: ${({theme:e})=>e.colorText};
    }
    g.solid path,
    line.solid {
      stroke-dasharray: unset;
    }
    g.dashed path,
    line.dashed {
      stroke-dasharray: 5, 5;
    }
    g.longDashed path,
    line.dotted {
      stroke-dasharray: 1, 1;
    }

    g.opacityLow path,
    line.opacityLow {
      stroke-opacity: 0.2;
    }

    g.opacityMedium path,
    line.opacityMedium {
      stroke-opacity: 0.5;
    }
    g.opacityHigh path,
    line.opacityHigh {
      stroke-opacity: 0.8;
    }
    g.time-shift-0 path,
    line.time-shift-0 {
      stroke-dasharray: 5, 5;
    }
    g.time-shift-1 path,
    line.time-shift-1 {
      stroke-dasharray: 1, 5;
    }
    g.time-shift-2 path,
    line.time-shift-3 {
      stroke-dasharray: 5, 1;
    }
    g.time-shift-3 path,
    line.time-shift-3 {
      stroke-dasharray: 5, 1;
    }
    g.time-shift-4 path,
    line.time-shift-4 {
      stroke-dasharray: 5, 10;
    }
    g.time-shift-5 path,
    line.time-shift-5 {
      stroke-dasharray: 0.9;
    }
    g.time-shift-6 path,
    line.time-shift-6 {
      stroke-dasharray: 15, 10, 5;
    }
    g.time-shift-7 path,
    line.time-shift-7 {
      stroke-dasharray: 15, 10, 5, 10;
    }
    g.time-shift-8 path,
    line.time-shift-8 {
      stroke-dasharray: 15, 10, 5, 10, 15;
    }
    g.time-shift-9 path,
    line.time-shift-9 {
      stroke-dasharray: 5, 5, 1, 5;
    }
    .nv-noData.body {
      font-size: ${({theme:e})=>e.fontSize};
      font-weight: ${({theme:e})=>e.fontWeightNormal};
    }
  }
  .superset-legacy-chart-nvd3-tr-highlight {
    border-top: 1px solid;
    border-bottom: 1px solid;
    font-weight: ${({theme:e})=>e.fontWeightStrong};
  }
  .superset-legacy-chart-nvd3-tr-total {
    font-weight: ${({theme:e})=>e.fontWeightStrong};
  }
  .nvtooltip {
    .tooltip-header {
      white-space: nowrap;
      font-weight: ${({theme:e})=>e.fontWeightStrong};
    }
    tbody tr:not(.tooltip-header) td:nth-of-type(2) {
      word-break: break-word;
    }
  }
  .d3-tip.nv-event-annotation-layer-table,
  .d3-tip.nv-event-annotation-layer-NATIVE {
    width: 200px;
    border-radius: 2px;
    background-color: ${({theme:e})=>e.colorBgContainer};
    fill-opacity: 0.6;
    margin: ${({theme:e})=>2*e.sizeUnit}px;
    padding: ${({theme:e})=>2*e.sizeUnit}px;
    color: ${({theme:e})=>e.colorTextLightSolid};
    &:after {
      content: '\\25BC';
      font-size: ${({theme:e})=>e.fontSize};
      color: ${({theme:e})=>e.colorText};
      position: absolute;
      bottom: -14px;
      left: 94px;
    }
  }
`},47324:(e,t,a)=>{a.d(t,{A:()=>o});var i=a(2445),n=a(96540);function o(e,t){class a extends n.Component{constructor(e){super(e),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=t&&t.componentWillUnmount&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){const{id:e,className:t}=this.props;return(0,i.Y)("div",{ref:this.setContainerRef,id:e,className:t})}}const o=a;return e.displayName&&(o.displayName=e.displayName),e.propTypes&&(o.propTypes={...o.propTypes,...e.propTypes}),e.defaultProps&&(o.defaultProps=e.defaultProps),a}}}]);