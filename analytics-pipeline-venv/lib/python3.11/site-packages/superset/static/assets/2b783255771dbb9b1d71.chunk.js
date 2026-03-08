"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6167],{2987:(e,t,a)=>{function n(e){const t="CssEditor-css",a=document.head||document.getElementsByTagName("head")[0],n=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className=e,t.type="text/css",t}(t);return"styleSheet"in n?n.styleSheet.cssText=e:n.innerHTML=e,a.appendChild(n),function(){n.remove()}}a.d(t,{A:()=>n})},33132:(e,t,a)=>{a.d(t,{R:()=>s,W:()=>n});const n=(e,t)=>Object.fromEntries(Object.values(e).filter((e=>e[t])).map((e=>[e.id,e[t]]))),s=({chartConfiguration:e,nativeFilters:t,dataMask:a,allSliceIds:n})=>{const s={},i=Object.values(a).some((({id:e})=>{var a;const n=null==t||null==(a=t[e])||null==(a=a.scope)?void 0:a.selectedLayers;return n&&n.length>0}));let r=[],o=[];return i&&Object.values(a).forEach((({id:e})=>{var a,n;const s=null==t||null==(a=t[e])||null==(a=a.scope)?void 0:a.selectedLayers,i=(null==t||null==(n=t[e])||null==(n=n.scope)?void 0:n.excluded)||[];s&&s.length>0&&(r=s,o=i)})),Object.values(a).forEach((({id:a,extraFormData:l={}})=>{var d,c,u,h,p,f,b,v,m;let g=null!=(d=null!=(c=null!=(u=null==t||null==(h=t[a])?void 0:h.chartsInScope)?u:null==e||null==(p=e[parseInt(a,10)])||null==(p=p.crossFilters)?void 0:p.chartsInScope)?c:n)?d:[];const y=null==t||null==(f=t[a])?void 0:f.filterType,S=null==t||null==(b=t[a])?void 0:b.targets;let w,E=null==t||null==(v=t[a])||null==(v=v.scope)?void 0:v.selectedLayers,x=(null==t||null==(m=t[a])||null==(m=m.scope)?void 0:m.excluded)||[];if(!i||E&&0!==E.length||(E=r,x=o),E&&E.length>0){const e=(e=>{const t={},a=new Set;return e.forEach((e=>{const n=e.match(/^chart-(\d+)-layer-(\d+)$/);if(n){const e=parseInt(n[1],10),s=parseInt(n[2],10);Number.isNaN(e)||(t[e]||(t[e]=[]),t[e].push(s),a.add(e))}})),{layerMap:t,chartIds:a}})(E);w=e.layerMap;const t=new Set(e.chartIds);g.forEach((e=>{x.includes(e)||E.some((t=>t.startsWith(`chart-${e}-layer-`)))||t.add(e)})),g=Array.from(t)}else g=g.filter((e=>!x.includes(e)));s[a]={scope:g,targets:S||[],values:l,filterType:y,...w&&{layerScope:w}}})),s}},36167:(e,t,a)=>{a.r(t),a.d(t,{DashboardPage:()=>he,DashboardPageIdContext:()=>le,default:()=>pe});var n=a(2445),s=a(96540),i=a(17437),r=a(61574),o=a(50290),l=a(74098),d=a(61225),c=a(10381),u=a(64457),h=a(92998),p=a(98244),f=a(48813),b=a(30483),v=a(2987),m=a(33132),g=a(15830),y=a(24777),S=a(85923),w=a(31296),E=a(91448),x=a(78929),C=a(82960),I=a(5556),D=a.n(I),F=a(89232),O=a(32064),_=a(29624);function $(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===_.oT&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var j=a(68064),k=a(50816),M=a(37203),T=a(95553);const R=[_.oT,_.xY,_.rG];function U(e){return!Object.values(e).some((({type:e})=>e&&R.includes(e)))}var z=a(37926);const A={actions:D().shape({addSliceToDashboard:D().func.isRequired,removeSliceFromDashboard:D().func.isRequired,triggerQuery:D().func.isRequired,logEvent:D().func.isRequired,clearDataMaskState:D().func.isRequired}).isRequired,dashboardId:D().number.isRequired,editMode:D().bool,isPublished:D().bool,hasUnsavedChanges:D().bool,slices:D().objectOf(j.VE).isRequired,activeFilters:D().object.isRequired,chartConfiguration:D().object,datasources:D().object.isRequired,ownDataCharts:D().object.isRequired,layout:D().object.isRequired,impressionId:D().string.isRequired,timeout:D().number,userId:D().string,children:D().node};class P extends s.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",P.unload):window.removeEventListener("beforeunload",P.unload)}static unload(){const e=(0,l.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,a;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(a=e.ownDataCharts)?a:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,O.Ay)(),{editMode:t,isPublished:a,layout:n}=this.props,s={is_soft_navigation:k.Vy.timeOriginOffset>0,is_edit_mode:t,mount_duration:k.Vy.getTimestamp(),is_empty:U(n),is_published:a,bootstrap_data_length:e.length},i=(0,T.A)();i&&(s.target_id=i),this.props.actions.logEvent(k.es,s),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:k.Vy.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=$(this.props.layout),a=$(e.layout);this.props.dashboardId===e.dashboardId&&(t.length<a.length?a.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(a=e.layout,n=t,Object.values(a).find((e=>e&&e.type===_.oT&&e.meta&&e.meta.chartId===n))));var a,n})):t.length>a.length&&t.filter((e=>-1===a.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{activeFilters:e,ownDataCharts:t,chartConfiguration:a,hasUnsavedChanges:n,editMode:s}=this.props,{appliedFilters:i,appliedOwnDataCharts:r}=this;a&&(s||(0,M.r$)(r,t,{ignoreUndefined:!0})&&(0,M.r$)(i,e,{ignoreUndefined:!0})||this.applyFilters(),n?P.onBeforeUnload(!0):P.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:k.Vy.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(k.Xj,{...this.visibilityEventData,duration:k.Vy.getTimestamp()-e})}}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:a,slices:n}=this.props,s=Object.keys(t),i=Object.keys(e),r=new Set(s.concat(i)),o=((e,t)=>{const a=Object.keys(e),n=Object.keys(t),s=(i=a,r=n,[...i.filter((e=>!r.includes(e))),...r.filter((e=>!i.includes(e)))]).filter((a=>e[a]||t[a]));var i,r;return new Set([...a,...n]).forEach((a=>{(0,M.r$)(e[a],t[a])||s.push(a)})),[...new Set(s)]})(a,this.appliedOwnDataCharts);[...r].forEach((a=>{if(!s.includes(a)&&i.includes(a))o.push(...(0,z.z)(a,e[a],n));else if(i.includes(a)){if((0,M.r$)(e[a].values,t[a].values,{ignoreUndefined:!0})||o.push(...(0,z.z)(a,t[a],n)),!(0,M.r$)(e[a].scope,t[a].scope)){const n=(t[a].scope||[]).concat(e[a].scope||[]);o.push(...n)}}else o.push(...(0,z.z)(a,t[a],n))})),this.refreshCharts([...new Set(o)]),this.appliedFilters=t,this.appliedOwnDataCharts=a}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,n.Y)(h.R,{}):this.props.children}}P.contextType=F.bf,P.propTypes=A,P.defaultProps={timeout:60,userId:""};const q=P;var L=a(92083),V=a(25875),Y=a(35352);const H=(0,d.Ng)((function(e){var t,a;const{datasources:n,sliceEntities:s,dashboardInfo:i,dashboardState:r,dashboardLayout:o,impressionId:l}=e;return{timeout:null==(t=i.common)||null==(t=t.conf)?void 0:t.SUPERSET_WEBSERVER_TIMEOUT,userId:i.userId,dashboardId:i.id,editMode:r.editMode,isPublished:r.isPublished,hasUnsavedChanges:r.hasUnsavedChanges,datasources:n,chartConfiguration:null==(a=i.metadata)?void 0:a.chart_configuration,slices:s.slices,layout:o.present,impressionId:l}}),(function(e){return{actions:(0,C.zH)({setDatasources:b.nC,clearDataMaskState:Y.V9,addSliceToDashboard:E.ft,removeSliceFromDashboard:E.Hg,triggerQuery:L.triggerQuery,logEvent:V.logEvent},e)}}))(q);var N=a(31780);function W({children:e,themeId:t}){const a=(0,N.w)(),[i,r]=(0,s.useState)(null);return(0,s.useEffect)((()=>{t?(async()=>{try{const e=await a.createDashboardThemeProvider(String(t));r(e)}catch(e){console.error("Failed to load dashboard theme:",e),r(null)}})():r(null)}),[t,a]),t?i?(0,n.Y)(i.SupersetThemeProvider,{children:e}):(0,n.Y)(h.R,{}):(0,n.Y)(n.FK,{children:e})}var B=a(43561);const X=e=>i.AH`
  body {
    h1 {
      font-weight: ${e.fontWeightStrong};
      line-height: 1.4;
      font-size: ${e.fontSizeXXL}px;
      letter-spacing: -0.2px;
      margin-top: ${3*e.sizeUnit}px;
      margin-bottom: ${3*e.sizeUnit}px;
    }

    h2 {
      font-weight: ${e.fontWeightStrong};
      line-height: 1.4;
      font-size: ${e.fontSizeXL}px;
      margin-top: ${3*e.sizeUnit}px;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${e.fontWeightStrong};
      line-height: 1.4;
      font-size: ${e.fontSizeLG}px;
      letter-spacing: 0.2px;
      margin-top: ${2*e.sizeUnit}px;
      margin-bottom: ${e.sizeUnit}px;
    }
  }
`,K=e=>i.AH`
  .header-title a {
    margin: ${e.sizeUnit/2}px;
    padding: ${e.sizeUnit/2}px;
  }
  .header-controls {
    &,
    &:hover {
      margin-top: ${e.sizeUnit}px;
    }
  }
`,Q=e=>i.AH`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.sizeUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.sizeUnit}px;
    min-width: ${40*e.sizeUnit}px;
  }
`,G=e=>i.AH`
  a,
  .ant-tabs-tabpane,
  .ant-tabs-tab-btn,
  .superset-button,
  .superset-button.ant-dropdown-trigger,
  .header-controls span {
    &:focus-visible {
      box-shadow: 0 0 0 2px ${e.colorPrimaryText};
      border-radius: ${e.borderRadius}px;
      outline: none;
      text-decoration: none;
    }
    &:not(
      .superset-button,
      .ant-menu-item,
      a,
      .fave-unfave-icon,
      .ant-tabs-tabpane,
      .header-controls span
    ) {
      &:focus-visible {
        padding: ${e.sizeUnit/2}px;
      }
    }
  }
`;var J=a(71086),Z=a.n(J),ee=a(44383),te=a.n(ee),ae=a(78752);const ne={},se=()=>{const e=(0,y.Gq)(y.Hh.DashboardExploreContext,{});return Z()(e,(e=>!e.isRedundant))},ie=(e,t)=>{const a=se();(0,y.SO)(y.Hh.DashboardExploreContext,{...a,[e]:{...t,dashboardPageId:e}})},re=(0,c.Mz)([e=>e.dashboardInfo.metadata,e=>e.dashboardInfo.id,e=>{var t;return null==(t=e.dashboardState)?void 0:t.colorScheme},e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters},e=>e.dataMask,e=>{var t;return(null==(t=e.dashboardState)?void 0:t.sliceIds)||[]}],((e,t,a,n,s,i)=>{const r=Object.keys(n).reduce(((e,t)=>(e[t]=te()(n[t],["chartsInScope"]),e)),{}),o=(0,m.R)({chartConfiguration:(null==e?void 0:e.chart_configuration)||ne,nativeFilters:n,dataMask:s,allSliceIds:i});return{labelsColor:(null==e?void 0:e.label_colors)||ne,labelsColorMap:(null==e?void 0:e.map_label_colors)||ne,sharedLabelsColors:(0,ae.ik)(null==e?void 0:e.shared_label_colors),colorScheme:a,chartConfiguration:(null==e?void 0:e.chart_configuration)||ne,nativeFilters:r,dataMask:s,dashboardId:t,filterBoxFilters:(0,g.ug)(),activeFilters:o}})),oe=({dashboardPageId:e})=>{const t=(0,d.d4)(re);return(0,s.useEffect)((()=>(ie(e,t),()=>{ie(e,{...t,isRedundant:!0})})),[t,e]),null},le=(0,s.createContext)(""),de=(0,s.lazy)((()=>Promise.all([a.e(8096),a.e(7970),a.e(683),a.e(3149),a.e(9644),a.e(117),a.e(2483),a.e(1859),a.e(7972),a.e(4313),a.e(1875),a.e(2808),a.e(2314),a.e(5026)]).then(a.bind(a,65972)))),ce=(0,c.Mz)((e=>e.dataMask),(e=>(0,m.W)(e,"ownState"))),ue=(0,c.Mz)([e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration},e=>e.nativeFilters.filters,e=>e.dataMask,e=>e.dashboardState.sliceIds],((e,t,a,n)=>({...(0,g.ug)(),...(0,m.R)({chartConfiguration:e,nativeFilters:t,dataMask:a,allSliceIds:n})}))),he=({idOrSlug:e})=>{var t;const a=(0,o.DP)(),c=(0,d.wA)(),m=(0,r.W6)(),g=(0,s.useMemo)((()=>(0,B.Ak)()),[]),C=(0,d.d4)((({dashboardInfo:e})=>e&&Object.keys(e).length>0)),I=(0,d.d4)((e=>e.dashboardInfo.theme)),{addDangerToast:D}=(0,u.Yf)(),{result:F,error:O}=(0,p.MZ)(e),{result:_,error:$}=(0,p.DT)(e),{result:j,error:k,status:M}=(0,p.RO)(e),T=(0,s.useRef)(!1),R=O||$,U=Boolean(F&&_),{dashboard_title:z,id:A=0}=F||{},P=(0,d.d4)((e=>e.dashboardState.css))||(null==F?void 0:F.css);(0,s.useEffect)((()=>{const e=()=>{const e=se();(0,y.SO)(y.Hh.DashboardExploreContext,{...e,[g]:{...e[g],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[g]),(0,s.useEffect)((()=>{c((0,E.wh)(M))}),[c,M]),(0,s.useEffect)((()=>{A&&async function(){const e=(0,w.P3)(S.vX.permalinkKey),t=(0,w.P3)(S.vX.nativeFiltersKey),a=(0,w.P3)(S.vX.nativeFilters);let n,s=t||{};if(e){const t=await(0,x.J)(e);t&&({dataMask:s,activeTabs:n}=t.state)}else t&&(s=await(0,x.I8)(A,t));a&&(s=a),U&&(T.current||(T.current=!0),c((0,f.M)({history:m,dashboard:F,charts:_,activeTabs:n,dataMask:s})))}()}),[U]),(0,s.useEffect)((()=>(z&&(document.title=z),()=>{document.title="Superset"})),[z]),(0,s.useEffect)((()=>"string"==typeof P?(0,v.A)(P):()=>{}),[P]),(0,s.useEffect)((()=>{k?D((0,l.t)("Error loading chart datasources. Filters may not work correctly.")):c((0,b.nC)(j))}),[D,j,k,c]);const q=(0,d.d4)(ce),L=(0,d.d4)(ue);if(R)throw R;const V=(0,s.useMemo)((()=>[i.AH`
  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,X(a),Q(a),G(a),K(a)]),[a]);if(R)throw R;const Y=(0,s.useMemo)((()=>(0,n.Y)(de,{})),[]);return(0,n.FD)(n.FK,{children:[(0,n.Y)(i.mL,{styles:V}),U&&C?(0,n.FD)(n.FK,{children:[(0,n.Y)(oe,{dashboardPageId:g}),(0,n.Y)(le.Provider,{value:g,children:(0,n.Y)(W,{themeId:void 0!==I?null==I?void 0:I.id:null==F||null==(t=F.theme)?void 0:t.id,children:(0,n.Y)(H,{activeFilters:L,ownDataCharts:q,children:Y})})})]}):(0,n.Y)(h.R,{})]})},pe=he},37926:(e,t,a)=>{a.d(t,{z:()=>i});var n=a(10900);function s(e,t){return e.length===Object.keys(t).length}function i(e,t,a){var i;let r=[];const o=Object.keys(a).includes(e)&&(0,n.Ub)(t),l=Array.isArray(t.scope)?t.scope:null!=(i=t.chartsInScope)?i:[];o&&(r=function(e,t,a){if(!t[e])return[];const n=[...a.filter((t=>String(t)!==e)),Number(e)],i=new Set(a);return Object.values(t).reduce(((a,r)=>r.slice_id===Number(e)?a:s(n,t)?(a.push(r.slice_id),a):(i.has(r.slice_id)&&a.push(r.slice_id),a)),[])}(e,a,l));const d=t;return(!o||(0,n.ve)(d)||(0,n.qQ)(d))&&(r=function(e,t){if(s(t,e))return Object.keys(e).map(Number);const a=new Set(t);return Object.values(e).reduce(((e,t)=>(a.has(t.slice_id)&&e.push(t.slice_id),e)),[])}(a,l)),r}},78929:(e,t,a)=>{a.d(t,{Au:()=>o,I8:()=>l,J:()=>d,l6:()=>r});var n=a(79378),s=a(75574);const i=(e,t,a)=>{let n=`/api/v1/dashboard/${e}/filter_state`;return t&&(n=n.concat(`/${t}`)),a&&(n=n.concat(`?tab_id=${a}`)),n},r=(e,t,a,r)=>n.A.put({endpoint:i(e,a,r),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(s.A.error(e),null))),o=(e,t,a)=>n.A.post({endpoint:i(e,void 0,a),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(s.A.error(e),null))),l=(e,t)=>n.A.get({endpoint:i(e,t)}).then((({json:e})=>JSON.parse(e.value))).catch((e=>(s.A.error(e),null))),d=e=>n.A.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((({json:e})=>e)).catch((e=>(s.A.error(e),null)))}}]);