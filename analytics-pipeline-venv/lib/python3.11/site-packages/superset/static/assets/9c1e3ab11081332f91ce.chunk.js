"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2246],{13410:(e,t,n)=>{n.d(t,{E:()=>o});var a=n(2445),i=n(50290),l=n(52120);const o=(0,i.I4)((e=>(0,a.Y)(l.A,{...e})))`
  ${({theme:e,color:t,count:n})=>`\n    & > sup,\n    & > sup.ant-badge-count {\n      box-shadow: none;\n      ${void 0!==n?`background: ${t||e.colorPrimary};`:""}\n    }\n  `}
`},21554:(e,t,n)=>{n.r(t),n.d(t,{datasetReducer:()=>dt,default:()=>ht});var a=n(2445),i=n(96540),l=n(61574),o=n(79378),r=n(74098),s=n(75574),d=n(58561),c=n.n(d),h=n(91412);const u=(e,t)=>{const[n,a]=(0,i.useState)([]),l=t?encodeURIComponent(t):void 0,d=(0,i.useCallback)((async e=>{let t,n=[],i=0;for(;void 0===t||n.length<t;){const a=c().encode_uri({filters:e,page:i});try{const e=await o.A.get({endpoint:`/api/v1/dataset/?q=${a}`});({count:t}=e.json);const{json:{result:l}}=e;n=[...n,...l],i+=1}catch(e){(0,h.iB)((0,r.t)("There was an error fetching dataset")),s.A.error((0,r.t)("There was an error fetching dataset"),e)}}a(n)}),[]);(0,i.useEffect)((()=>{const n=[{col:"database",opr:"rel_o_m",value:null==e?void 0:e.id},{col:"schema",opr:"eq",value:l},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];t&&d(n)}),[null==e?void 0:e.id,t,l,d]);const u=(0,i.useMemo)((()=>null==n?void 0:n.map((e=>e.table_name))),[n]);return{datasets:n,datasetNames:u}};var p,m=n(73306),g=n(88217),b=n(8558),f=n(85600);!function(e){e[e.SelectDatabase=0]="SelectDatabase",e[e.SelectCatalog=1]="SelectCatalog",e[e.SelectSchema=2]="SelectSchema",e[e.SelectTable=3]="SelectTable",e[e.ChangeDataset=4]="ChangeDataset"}(p||(p={}));var v=n(50290),x=n(17437);const y=v.I4.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colorBgContainer};
`,$=v.I4.div`
  width: ${({theme:e,width:t})=>null!=t?t:80*e.sizeUnit}px;
  max-width: ${({theme:e,width:t})=>null!=t?t:80*e.sizeUnit}px;
  flex-direction: column;
  flex: 1 0 auto;
`,w=v.I4.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,S=v.I4.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,z=(0,v.I4)(S)`
  flex: 1 0 0;
  min-height: 0;
  position: relative;
`,Y=(0,v.I4)(S)`
  flex: 1 0 auto;
  height: auto;
`,C=(0,v.I4)(S)`
  flex: 0 0 auto;
  height: ${({theme:e})=>16*e.sizeUnit}px;
  z-index: 0;
`,U=v.I4.div`
  ${({theme:e})=>`\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  height: ${16*e.sizeUnit}px;\n  border-bottom: 1px solid ${e.colorBorder};\n\n  .header-with-actions {\n    height: ${15.5*e.sizeUnit}px;\n  }\n  `}
`,I=v.I4.div`
  ${({theme:e})=>`\n  margin: ${4*e.sizeUnit}px;\n  font-size: ${e.fontSizeXL}px;\n  font-weight: ${e.fontWeightStrong};\n  `}
`,T=v.I4.div`
  ${({theme:e})=>`\n  height: 100%;\n  border-right: 1px solid ${e.colorBorderSecondary};\n  `}
`,D=v.I4.div`
  width: 100%;
  position: relative;
`,_=v.I4.div`
  ${({theme:e})=>`\n  border-left: 1px solid ${e.colorBorderSecondary};\n  color: ${e.colorSuccess};\n  `}
`,k=v.I4.div`
  ${({theme:e})=>`\n  height: ${16*e.sizeUnit}px;\n  width: 100%;\n  border-top: 1px solid ${e.colorBorderSecondary};\n  border-bottom: 1px solid ${e.colorBorderSecondary};\n  color: ${e.colorInfo};\n  border-top: ${e.sizeUnit/4}px solid\n    ${e.colorBorderSecondary};\n  padding: ${4*e.sizeUnit}px;\n  display: flex;\n  justify-content: flex-end;\n  background-color: ${e.colorBgContainer};\n  z-index: ${e.zIndexPopupBase}\n  `}
`,A=v.I4.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${({theme:e})=>e.colorIconHover};
      }
    }
  }
`,F=e=>x.AH`
  width: ${21.5*e.sizeUnit}px;

  &:disabled {
    background-color: ${e.colorBgContainerDisabled};
    color: ${e.colorTextDisabled};
  }
`,E=(0,r.t)("New dataset"),P={text:(0,r.t)("Select a database table and create dataset"),placement:"bottomRight"},N=()=>(0,a.FD)(g.$,{buttonStyle:"primary",tooltip:null==P?void 0:P.text,placement:null==P?void 0:P.placement,disabled:!0,css:F,children:[(0,a.Y)(b.F.SaveOutlined,{iconSize:"m"}),(0,r.t)("Save")]}),L=()=>(0,a.Y)(f.W1,{items:[{key:"settings",label:(0,r.t)("Settings")},{key:"delete",label:(0,r.t)("Delete")}]});function R({setDataset:e,title:t=E,editing:n=!1}){const i={title:null!=t?t:E,placeholder:E,onSave:t=>{e({type:p.ChangeDataset,payload:{name:"dataset_name",value:t}})},canEdit:!1,label:(0,r.t)("dataset name")};return(0,a.Y)(A,{children:n?(0,a.Y)(m.U,{editableTitleProps:i,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,a.Y)(a.FK,{}),rightPanelAdditionalItems:N(),additionalActionsMenu:L(),menuDropdownProps:{disabled:!0},tooltipProps:P}):(0,a.Y)(I,{children:t||E})})}var M=n(13410),B=n(21325),O=n(71519),W=n(90924),H=n(18009),j=n(38134),q=n(89232),K=n(32023),X=n(64457),V=n(86784),G=n(59674),Q=n(8903),Z=n(95018);const J=v.I4.div`
  & > span {
    width: 100%;
    display: flex;

    .ant-tooltip-open {
      display: inline;
    }
  }
`,ee=v.I4.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`,te=v.I4.span`
  &:not(:last-child)::after {
    content: ', ';
  }
`,ne=v.I4.div`
  .link {
    color: ${({theme:e})=>e.colorTextTertiary};
    display: block;
    text-decoration: underline;
  }
`,ae=v.I4.span`
  ${({theme:e})=>`\n  cursor: pointer;\n  color: ${e.colorPrimaryText};\n  font-weight: ${e.fontWeightNormal};\n  `}
`;function ie({items:e,renderVisibleItem:t=e=>e,renderTooltipItem:n=e=>e,getKey:l=e=>e,maxLinks:o=20}){const[s,d,c,h]=(0,Q.A)(),u=(0,i.useMemo)((()=>e.length>o?e.length-o:void 0),[e,o]),p=(0,i.useMemo)((()=>(0,a.Y)(ee,{ref:s,children:e.map((e=>(0,a.Y)(te,{children:t(e)},l(e))))})),[l,e,t]),m=(0,i.useMemo)((()=>e.slice(0,o).map((e=>(0,a.Y)(ne,{children:n(e)},l(e))))),[l,e,o,n]);return(0,a.Y)(J,{children:(0,a.FD)(Z.m,{placement:"top",title:c?(0,a.FD)(a.FK,{children:[m,u&&(0,a.Y)("span",{children:(0,r.t)("+ %s more",u)})]}):null,children:[p,h&&(0,a.FD)(ae,{ref:d,children:["+",c]})]})})}const le=e=>({key:e.id,to:`/superset/dashboard/${e.id}`,target:"_blank",rel:"noreferer noopener",children:e.dashboard_title}),oe=e=>x.AH`
  color: ${e.colorTextPlaceholder};
  text-decoration: underline;
  &:hover {
    color: inherit;
  }
`,re=[{key:"slice_name",title:(0,r.t)("Chart"),width:"320px",sorter:!0,render:(e,t)=>(0,a.Y)(O.N_,{to:t.url,children:t.slice_name})},{key:"owners",title:(0,r.t)("Chart owners"),width:"242px",render:(e,t)=>{var n,i;return(0,a.Y)(ie,{items:null!=(n=null==(i=t.owners)?void 0:i.map((e=>`${e.first_name} ${e.last_name}`)))?n:[]})}},{key:"last_saved_at",title:(0,r.t)("Chart last modified"),width:"209px",sorter:!0,defaultSortOrder:"descend",render:(e,t)=>t.last_saved_at?G.XV.utc(t.last_saved_at).fromNow():null},{key:"last_saved_by.first_name",title:(0,r.t)("Chart last modified by"),width:"216px",sorter:!0,render:(e,t)=>t.last_saved_by?`${t.last_saved_by.first_name} ${t.last_saved_by.last_name}`:null},{key:"dashboards",title:(0,r.t)("Dashboard usage"),width:"420px",render:(e,t)=>(0,a.Y)(ie,{items:t.dashboards,renderVisibleItem:e=>(0,a.Y)(O.N_,{...le(e)}),renderTooltipItem:e=>(0,a.Y)(O.N_,{...le(e),css:oe}),getKey:e=>e.id})}],se=e=>x.AH`
  && th.ant-table-cell {
    color: ${e.colorTextSecondary};
  }

  .ant-table-placeholder {
    display: none;
  }
`,de=(0,a.FD)(a.FK,{children:[(0,a.Y)(b.F.PlusOutlined,{iconSize:"m",css:x.AH`
        & > .anticon {
          line-height: 0;
        }
      `}),(0,r.t)("Create chart with dataset")]}),ce=(0,v.I4)(j.p)`
  margin: ${({theme:e})=>13*e.sizeUnit}px 0;
`,he=({datasetId:e})=>{const{loading:t,recordCount:n,data:l,onChange:o}=(e=>{const{addDangerToast:t}=(0,X.Yf)(),n=(0,i.useMemo)((()=>[{id:"datasource_id",operator:q.c0.Equals,value:e}]),[e]),{state:{loading:a,resourceCount:l,resourceCollection:o},fetchData:s}=(0,V.RU)("chart",(0,r.t)("chart"),t,!0,[],n),d=(0,i.useMemo)((()=>o.map((e=>({...e,key:e.id})))),[o]),c=(0,i.useCallback)(((e,t,n)=>{var a,i;const l=(null!=(a=e.current)?a:1)-1,o=null!=(i=e.pageSize)?i:0,r=(0,W.A)(n).filter((({columnKey:e})=>"string"==typeof e)).map((({columnKey:e,order:t})=>({id:e,desc:"descend"===t})));s({pageIndex:l,pageSize:o,sortBy:r,filters:[]})}),[s]);return(0,i.useEffect)((()=>{s({pageIndex:0,pageSize:25,sortBy:[{id:"last_saved_at",desc:!0}],filters:[]})}),[s]),{loading:a,recordCount:l,data:d,onChange:c}})(e),s=(0,i.useCallback)((()=>window.open(`/explore/?dataset_type=table&dataset_id=${e}`,"_blank")),[e]);return(0,a.FD)("div",{css:l.length?null:se,children:[(0,a.Y)(H.Ay,{columns:re,data:l,size:H.QS.Middle,defaultPageSize:25,recordCount:n,loading:t,onChange:o}),l.length||t?null:(0,a.Y)(ce,{image:(0,a.Y)(K.A,{}),size:"large",title:(0,r.t)("No charts"),description:(0,r.t)("This dataset is not used to power any charts."),buttonText:de,buttonAction:s})]})},ue=(0,v.I4)(B.Ay)`
  ${({theme:e})=>`\n  margin-top: ${8.5*e.sizeUnit}px;\n  padding-left: ${4*e.sizeUnit}px;\n  padding-right: ${4*e.sizeUnit}px;\n\n  .ant-tabs-top > .ant-tabs-nav::before {\n    width: ${50*e.sizeUnit}px;\n  }\n  `}
`,pe=v.I4.div`
  ${({theme:e})=>`\n  .ant-badge {\n    width: ${8*e.sizeUnit}px;\n    margin-left: ${2.5*e.sizeUnit}px;\n  }\n  `}
`,me={USAGE_TEXT:(0,r.t)("Usage"),COLUMNS_TEXT:(0,r.t)("Columns"),METRICS_TEXT:(0,r.t)("Metrics")},ge=({id:e})=>{const{usageCount:t}=(e=>{const[t,n]=(0,i.useState)(0),a=(0,i.useCallback)((()=>o.A.get({endpoint:`/api/v1/dataset/${e}/related_objects`}).then((({json:e})=>{n(null==e?void 0:e.charts.count)})).catch((e=>{(0,h.iB)((0,r.t)("There was an error fetching dataset's related objects")),s.A.error(e)}))),[e]);return(0,i.useEffect)((()=>{e&&a()}),[e,a]),{usageCount:t}})(e),n=(0,a.FD)(pe,{children:[(0,a.Y)("span",{children:me.USAGE_TEXT}),t>0&&(0,a.Y)(M.E,{count:t})]}),l=[{key:"COLUMNS",label:me.COLUMNS_TEXT,children:null},{key:"METRICS",label:me.METRICS_TEXT,children:null},{key:"USAGE",label:n,children:(0,a.Y)(he,{datasetId:e})}];return(0,a.Y)(ue,{moreIcon:null,items:l})};var be=n(31296),fe=n(94185),ve=n(62070);const xe=n.p+"loading.cff8a5da.gif",ye=v.I4.div`
  padding: ${({theme:e})=>8*e.sizeUnit}px
    ${({theme:e})=>6*e.sizeUnit}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,$e=(0,v.I4)(j.p)`
  max-width: 50%;

  p {
    width: ${({theme:e})=>115*e.sizeUnit}px;
  }
`,we=(0,r.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),Se=(0,r.t)("create dataset from SQL query"),ze=(0,r.t)(" to open SQL Lab. From there you can save the query as a dataset."),Ye=(0,r.t)("Select dataset source"),Ce=(0,r.t)("No table columns"),Ue=(0,r.t)("This database table does not contain any data. Please select a different table."),Ie=(0,r.t)("An Error Occurred"),Te=(0,r.t)("Unable to load columns for the selected table. Please select a different table."),De=e=>{const{hasError:t,tableName:n,hasColumns:i}=e;let l="empty-dataset.svg",o=Ye,r=(0,a.FD)(a.FK,{children:[we,(0,a.Y)(O.N_,{to:"/sqllab",children:(0,a.Y)("span",{role:"button",tabIndex:0,children:Se})}),ze]});return t?(o=Ie,r=(0,a.Y)(a.FK,{children:Te}),l=void 0):n&&!i&&(l="no-columns.svg",o=Ce,r=(0,a.Y)(a.FK,{children:Ue})),(0,a.Y)(ye,{children:(0,a.Y)($e,{image:l,size:"large",title:o,description:r})})};var _e;!function(e){e.ABSOLUTE="absolute",e.RELATIVE="relative"}(_e||(_e={}));const ke=v.I4.div`
  ${({theme:e,position:t})=>`\n  position: ${t};\n  margin: ${4*e.sizeUnit}px\n    ${3*e.sizeUnit}px\n    ${3*e.sizeUnit}px\n    ${6*e.sizeUnit}px;\n  font-size: ${6*e.sizeUnit}px;\n  font-weight: ${e.fontWeightStrong};\n  padding-bottom: ${3*e.sizeUnit}px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  .anticon:first-of-type {\n    margin-right: ${2*e.sizeUnit}px;\n    vertical-align: text-top;\n  }\n\n  `}
`,Ae=v.I4.div`
  ${({theme:e})=>`\n  margin-left: ${6*e.sizeUnit}px;\n  margin-bottom: ${3*e.sizeUnit}px;\n  font-weight: ${e.fontWeightStrong};\n  `}
`,Fe=v.I4.div`
  ${({theme:e})=>`\n  padding: ${8*e.sizeUnit}px\n    ${6*e.sizeUnit}px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  `}
`,Ee=v.I4.div`
  ${({theme:e})=>`\n  max-width: 50%;\n  width: 200px;\n\n  .ant-image {\n    width: 120px;\n    margin-left: 40px;\n  }\n\n  div {\n    width: 100%;\n    margin-top: ${3*e.sizeUnit}px;\n    text-align: center;\n    font-weight: ${e.fontWeightNormal};\n    font-size: ${e.fontSizeLG}px;\n    color: ${e.colorTextSecondary};\n  }\n  `}
`,Pe=v.I4.div`
  ${({theme:e})=>`\n  position: relative;\n  margin: ${3*e.sizeUnit}px;\n  margin-left: ${6*e.sizeUnit}px;\n  height: calc(100% - ${60*e.sizeUnit}px);\n  overflow: auto;\n  `}
`,Ne=v.I4.div`
  ${({theme:e})=>`\n  position: relative;\n  margin: ${3*e.sizeUnit}px;\n  margin-left: ${6*e.sizeUnit}px;\n  height: calc(100% - ${30*e.sizeUnit}px);\n  overflow: auto;\n  `}
`,Le=v.I4.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,Re=(0,v.I4)(fe.F)`
  ${({theme:e})=>`\n  border: 1px solid ${e.colorInfoText};\n  padding: ${4*e.sizeUnit}px;\n  margin: ${6*e.sizeUnit}px ${6*e.sizeUnit}px\n    ${8*e.sizeUnit}px;\n  .view-dataset-button {\n    position: absolute;\n    top: ${4*e.sizeUnit}px;\n    right: ${4*e.sizeUnit}px;\n\n    &:hover {\n      color: ${e.colorPrimary};\n      text-decoration: underline;\n    }\n  }\n  `}
`,Me=(0,r.t)("Refreshing columns"),Be=(0,r.t)("Table columns"),Oe=(0,r.t)("Loading"),We=["5","10","15","25"],He=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(e,t)=>e.name.localeCompare(t.name)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(e,t)=>e.name.localeCompare(t.name)}],je=(0,r.t)("This table already has a dataset associated with it. You can only associate one dataset with a table.\n"),qe=(0,r.t)("View Dataset"),Ke=({tableName:e,columnList:t,loading:n,hasError:i,datasets:l})=>{const o=Boolean((null==t?void 0:t.length)>0),s=null==l?void 0:l.map((e=>e.table_name)),d=null==l?void 0:l.find((t=>t.table_name===e));let c,h;return n&&(h=(0,a.Y)(Fe,{children:(0,a.FD)(Ee,{children:[(0,a.Y)(ve.A,{preview:!1,alt:Oe,src:xe}),(0,a.Y)("div",{children:Me})]})})),n||(c=!n&&e&&o&&!i?(0,a.FD)(a.FK,{children:[(0,a.Y)(Ae,{children:Be}),d?(0,a.Y)(Pe,{children:(0,a.Y)(Le,{children:(0,a.Y)(H.Ay,{loading:n,size:H.QS.Small,columns:He,data:t,pageSizeOptions:We,defaultPageSize:25})})}):(0,a.Y)(Ne,{children:(0,a.Y)(Le,{children:(0,a.Y)(H.Ay,{loading:n,size:H.QS.Small,columns:He,data:t,pageSizeOptions:We,defaultPageSize:25})})})]}):(0,a.Y)(De,{hasColumns:o,hasError:i,tableName:e})),(0,a.FD)(a.FK,{children:[e&&(0,a.FD)(a.FK,{children:[(null==s?void 0:s.includes(e))&&(u=d,(0,a.Y)(Re,{closable:!1,type:"info",showIcon:!0,message:(0,r.t)("This table already has a dataset"),description:(0,a.FD)(a.FK,{children:[je,(0,a.Y)("span",{role:"button",onClick:()=>{window.open(null==u?void 0:u.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button",children:qe})]})})),(0,a.FD)(ke,{position:!n&&o?_e.RELATIVE:_e.ABSOLUTE,title:e||"",children:[(0,a.Y)(b.F.InsertRowAboveOutlined,{iconSize:"xxl"}),e]})]}),c,h]});var u},Xe=({tableName:e,dbId:t,catalog:n,schema:l,setHasColumns:d,datasets:c})=>{const[u,p]=(0,i.useState)([]),[m,g]=(0,i.useState)(!1),[b,f]=(0,i.useState)(!1),v=(0,i.useRef)(e);return(0,i.useEffect)((()=>{v.current=e,e&&l&&t&&(async e=>{const{dbId:t,tableName:a,schema:i}=e;g(!0),null==d||d(!1);const l=`/api/v1/database/${t}/table_metadata/${(0,be.zJ)({name:a,catalog:n,schema:i})}`;try{const e=await o.A.get({endpoint:l});if((e=>{let t=!0;if("string"!=typeof(null==e?void 0:e.name)&&(t=!1),t&&!Array.isArray(e.columns)&&(t=!1),t&&e.columns.length>0){const n=e.columns.some(((e,t)=>{const n=(e=>{let t=!0;const n="The object provided to isITableColumn does match the interface.";return"string"!=typeof(null==e?void 0:e.name)&&(t=!1,console.error(`${n} The property 'name' is required and must be a string`)),t&&"string"!=typeof(null==e?void 0:e.type)&&(t=!1,console.error(`${n} The property 'type' is required and must be a string`)),t})(e);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${t}] is invalid and does not match the ITableColumn interface`),!n}));t=!n}return t})(null==e?void 0:e.json)){const t=e.json;t.name===v.current&&(p(t.columns),null==d||d(t.columns.length>0),f(!1))}else p([]),null==d||d(!1),f(!0),(0,h.iB)((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",l)),s.A.error((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",l))}catch(e){p([]),null==d||d(!1),f(!0)}finally{g(!1)}})({tableName:e,dbId:t,schema:l})}),[e,t,l]),(0,a.Y)(Ke,{columnList:u,hasError:b,loading:m,tableName:e,datasets:c})};var Ve=n(94083),Ge=n(24777),Qe=n(42566);const Ze=v.I4.div`
  ${({theme:e})=>`\n    padding: ${4*e.sizeUnit}px;\n    height: 100%;\n    background-color: ${e.colorBgContainer};\n    position: relative;\n    .emptystate {\n      height: auto;\n      margin-top: ${17.5*e.sizeUnit}px;\n    }\n    .section-title {\n      margin-top: ${5.5*e.sizeUnit}px;\n      margin-bottom: ${11*e.sizeUnit}px;\n      font-weight: ${e.fontWeightStrong};\n    }\n    .table-title {\n      margin-top: ${11*e.sizeUnit}px;\n      margin-bottom: ${6*e.sizeUnit}px;\n      font-weight: ${e.fontWeightStrong};\n    }\n    .options-list {\n      overflow: auto;\n      position: absolute;\n      bottom: 0;\n      top: ${92.25*e.sizeUnit}px;\n      left: ${3.25*e.sizeUnit}px;\n      right: 0;\n\n      .no-scrollbar {\n        margin-right: ${4*e.sizeUnit}px;\n      }\n\n      .options {\n        cursor: pointer;\n        padding: ${1.75*e.sizeUnit}px;\n        border-radius: ${e.borderRadius}px;\n        :hover {\n          background-color: ${e.colorFillTertiary}\n        }\n      }\n\n      .options-highlighted {\n        cursor: pointer;\n        padding: ${1.75*e.sizeUnit}px;\n        border-radius: ${e.borderRadius}px;\n        background-color: ${e.colorPrimaryText};\n        color: ${e.colorTextLightSolid};\n      }\n\n      .options, .options-highlighted {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    }\n    form > span[aria-label="refresh"] {\n      position: absolute;\n      top: ${69*e.sizeUnit}px;\n      left: ${42.75*e.sizeUnit}px;\n      font-size: ${4.25*e.sizeUnit}px;\n    }\n    .table-form {\n      margin-bottom: ${8*e.sizeUnit}px;\n    }\n    .loading-container {\n      position: absolute;\n      top: ${89.75*e.sizeUnit}px;\n      left: 0;\n      right: 0;\n      text-align: center;\n      img {\n        width: ${20*e.sizeUnit}px;\n        margin-bottom: ${2.5*e.sizeUnit}px;\n      }\n      p {\n        color: ${e.colorTextSecondary};\n      }\n    }\n`}
`;function Je({setDataset:e,dataset:t,datasetNames:n}){const{addDangerToast:l}=(0,X.Yf)(),o=(0,i.useCallback)((t=>{e({type:p.SelectDatabase,payload:{db:t}})}),[e]);(0,i.useEffect)((()=>{const e=(0,Ge.Gq)(Ge.Hh.Database,null);e&&o(e)}),[o]);const s=(0,i.useCallback)((e=>(0,a.Y)(Ve.cs,{table:null!=n&&n.includes(e.value)?{...e,extra:{warning_markdown:(0,r.t)("This table already has a dataset")}}:e})),[n]);return(0,a.Y)(Ze,{children:(0,a.Y)(Ve.Ay,{database:null==t?void 0:t.db,handleError:l,emptyState:(0,a.Y)(j.p,{image:"empty.svg",title:(0,r.t)("No databases available"),description:(0,a.FD)("span",{children:[(0,r.t)("Manage your databases")," ",(0,a.Y)(Qe.o.Link,{href:"/databaseview/list",children:(0,r.t)("here")})]}),size:"small"}),onDbChange:o,onCatalogChange:t=>{t&&e({type:p.SelectCatalog,payload:{name:"catalog",value:t}})},onSchemaChange:t=>{t&&e({type:p.SelectSchema,payload:{name:"schema",value:t}})},onTableSelectChange:t=>{e({type:p.SelectTable,payload:{name:"table_name",value:t}})},sqlLabMode:!1,customTableOptionLabelRenderer:s,...(null==t?void 0:t.catalog)&&{catalog:t.catalog},...(null==t?void 0:t.schema)&&{schema:t.schema}})})}var et=n(76576),tt=n(81574),nt=n(25875),at=n(50816);const it=["db","schema","table_name"],lt=[at.ci,at.q0,at.ar,at.R2],ot=(0,X.Ay)((function({datasetObject:e,addDangerToast:t,hasColumns:n=!1,datasets:i}){const o=(0,l.W6)(),s=(0,v.DP)(),{createResource:d}=(0,V.fn)("dataset",(0,r.t)("dataset"),t),c=(0,r.t)("Select a database table."),h=(t=!0)=>{if(e){var n;const a={database:null==(n=e.db)?void 0:n.id,catalog:e.catalog,schema:e.schema,table_name:e.table_name};d(a).then((n=>{n&&"number"==typeof n&&((0,nt.logEvent)(at.oA,e),t?o.push(`/chart/add/?dataset=${e.table_name}`):o.push("/tablemodelview/list/"))}))}},u=(0,r.t)("Create and explore dataset"),p=(0,r.t)("Create dataset"),m=!(null!=e&&e.table_name)||!n||(null==i?void 0:i.includes(null==e?void 0:e.table_name)),x=(0,a.Y)(f.W1,{items:[{key:"create-only",onClick:()=>{h(!1)},label:p}]});return(0,a.FD)(et.s,{align:"center",justify:"flex-end",gap:"8px",children:[(0,a.Y)(g.$,{buttonStyle:"secondary",onClick:()=>{if(e){const t=(e=>{let t=0;const n=Object.keys(e).reduce(((n,a)=>(it.includes(a)&&e[a]&&(t+=1),t)),0);return lt[n]})(e);(0,nt.logEvent)(t,e)}else(0,nt.logEvent)(at.ci,{});o.goBack()},children:(0,r.t)("Cancel")}),(0,a.Y)(tt.g,{type:"primary",disabled:m,tooltip:null!=e&&e.table_name?void 0:c,onClick:()=>h(!0),popupRender:()=>x,icon:(0,a.Y)(b.F.DownOutlined,{iconSize:"xs",iconColor:s.colorTextLightSolid}),trigger:["click"],children:u})]})}));var rt=n(28429);function st({header:e,leftPanel:t,datasetPanel:n,rightPanel:i,footer:l}){const o=(0,v.DP)();return(0,a.FD)(y,{children:[e&&(0,a.Y)(U,{children:e}),(0,a.FD)(z,{children:[t&&(0,a.Y)(rt.A,{id:"dataset",initialWidth:80*o.sizeUnit,minWidth:80*o.sizeUnit,enable:!0,children:e=>(0,a.Y)($,{width:e,children:(0,a.Y)(T,{children:t})})}),(0,a.FD)(w,{children:[(0,a.FD)(Y,{children:[n&&(0,a.Y)(D,{children:n}),i&&(0,a.Y)(_,{children:i})]}),(0,a.Y)(C,{children:l&&(0,a.Y)(k,{children:l})})]})]})]})}function dt(e,t){const n={...e||{}};switch(t.type){case p.SelectDatabase:return{...n,...t.payload,catalog:null,schema:null,table_name:null};case p.SelectCatalog:return{...n,[t.payload.name]:t.payload.value,schema:null,table_name:null};case p.SelectSchema:return{...n,[t.payload.name]:t.payload.value,table_name:null};case p.SelectTable:return{...n,[t.payload.name]:t.payload.value};case p.ChangeDataset:return{...n,[t.payload.name]:t.payload.value};default:return null}}const ct="/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc";function ht(){const[e,t]=(0,i.useReducer)(dt,null),[n,o]=(0,i.useState)(!1),[r,s]=(0,i.useState)(!1),{datasets:d,datasetNames:c}=u(null==e?void 0:e.db,null==e?void 0:e.schema),{datasetId:h}=(0,l.g)();return(0,i.useEffect)((()=>{Number.isNaN(parseInt(h,10))||s(!0)}),[h]),(0,a.Y)(st,{header:(0,a.Y)(R,{setDataset:t,title:null==e?void 0:e.table_name}),leftPanel:r?null:(0,a.Y)(Je,{setDataset:t,dataset:e,datasetNames:c}),datasetPanel:r?(0,a.Y)(ge,{id:h}):(0,a.Y)(Xe,{tableName:null==e?void 0:e.table_name,dbId:null==e||null==(p=e.db)?void 0:p.id,catalog:null==e?void 0:e.catalog,schema:null==e?void 0:e.schema,setHasColumns:o,datasets:d}),footer:(0,a.Y)(ot,{url:ct,datasetObject:e,hasColumns:n,datasets:c})});var p}},28429:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(2445),i=n(33149),l=n(50290),o=n(96540),r=n(24777);const s=l.I4.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:e})=>e.colorPrimary};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,d=({id:e,initialWidth:t,minWidth:n,maxWidth:l,enable:d,children:c})=>{const[h,u]=function(e,t){const n=(0,o.useRef)(),[a,i]=(0,o.useState)(t);return(0,o.useEffect)((()=>{var t;n.current=null!=(t=n.current)?t:(0,r.Gq)(r.Hh.CommonResizableSidebarWidths,{}),n.current[e]&&i(n.current[e])}),[e]),[a,function(t){i(t),(0,r.SO)(r.Hh.CommonResizableSidebarWidths,{...n.current,[e]:t})}]}(e,t);return(0,a.FD)(a.FK,{children:[(0,a.Y)(s,{children:(0,a.Y)(i.c,{enable:{right:d},handleClasses:{right:"sidebar-resizer",bottom:"hidden",bottomRight:"hidden",bottomLeft:"hidden"},size:{width:h,height:"100%"},minWidth:n,maxWidth:l,onResizeStop:(e,t,n,a)=>u(h+a.width)})}),c(h)]})}},35273:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(2445),i=n(50290),l=n(95018),o=n(7437),r=n(8558);const s=function({warningMarkdown:e,size:t,marginRight:n}){const s=(0,i.DP)();return(0,a.Y)(l.m,{id:"warning-tooltip",title:(0,a.Y)(o.z,{source:e}),children:(0,a.Y)(r.F.WarningOutlined,{iconColor:s.colorWarning,iconSize:t,css:{marginRight:null!=n?n:2*s.sizeUnit}})})}},73306:(e,t,n)=>{n.d(t,{U:()=>w});var a=n(2445),i=n(17437),l=n(50290),o=n(74098),r=n(8558),s=n(40105),d=n(96540),c=n(98250),h=n(95018),u=n(17355);const p=e=>i.AH`
  display: flex;
  font-size: ${e.fontSizeXL}px;
  font-weight: ${e.fontWeightStrong};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0;
    color: ${e.colorText};
    background-color: ${e.colorBgContainer};

    &::placeholder {
      color: ${e.colorTextTertiary};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
    white-space: pre;
  }
`,m=(0,d.memo)((({title:e,placeholder:t,onSave:n,canEdit:r,label:s})=>{const m=(0,l.DP)(),[g,b]=(0,d.useState)(!1),[f,v]=(0,d.useState)(!1),[x,y]=(0,d.useState)(e||""),{width:$,ref:w}=(0,c.uZ)(),{width:S,ref:z}=(0,c.uZ)({refreshMode:"debounce"});(0,d.useEffect)((()=>{y(e)}),[e]),(0,d.useEffect)((()=>{if(g&&null!=w&&w.current&&w.current.setSelectionRange){const{length:e}=w.current.value;w.current.setSelectionRange(e,e),w.current.scrollLeft=w.current.scrollWidth}}),[g]),(0,d.useLayoutEffect)((()=>{null!=w&&w.current&&(w.current.textContent=x||t)}),[x,t,w]),(0,d.useEffect)((()=>{var e;const t=null==(e=w.current)?void 0:e.input;t&&(t.scrollWidth>t.clientWidth?v(!0):v(!1))}),[$,S]);const Y=(0,d.useCallback)((()=>{r&&!g&&b(!0)}),[r,g]),C=(0,d.useCallback)((()=>{if(!r)return;const t=x.trim();y(t),e!==t&&n(t),b(!1)}),[r,x,n,e]),U=(0,d.useCallback)((e=>{r&&g&&y(e.target.value)}),[r,g]),I=(0,d.useCallback)((e=>{if(!r)return;e.preventDefault();const{activeElement:t}=document;t&&t instanceof HTMLElement&&t.blur()}),[r]);return(0,a.FD)("div",{css:p,ref:z,children:[(0,a.Y)(h.m,{id:"title-tooltip",title:f&&x&&!g?x:null,children:(0,a.Y)(u.A,{variant:"borderless","aria-label":null!=s?s:(0,o.t)("Title"),className:"dynamic-title-input",value:x,onChange:U,onBlur:C,onClick:Y,onPressEnter:I,placeholder:t,css:i.AH`
              ${!r&&"&[disabled] {\n                  cursor: default;\n                }\n              "}
              font-size: ${m.fontSizeXL}px;
              transition: auto;
              ${$&&$>0&&i.AH`
                width: ${$}px;
              `}
            `,disabled:!r})}),(0,a.Y)("span",{ref:w,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})}));var g=n(28827),b=n(54569),f=n(88217);const v=e=>i.AH`
  width: ${8*e.sizeUnit}px;
  height: ${8*e.sizeUnit}px;
  padding: 0;
  border: 1px solid ${e.colorPrimary};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }
`,x=e=>i.AH`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colorBgContainer};
  height: ${16*e.sizeUnit}px;
  padding: 0 ${4*e.sizeUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*e.sizeUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,y=e=>i.AH`
  display: flex;
  align-items: center;
  padding-left: ${2*e.sizeUnit}px;

  & .anticon-star {
    padding: 0 ${e.sizeUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,$=e=>i.AH`
  margin-left: ${2*e.sizeUnit}px;
`,w=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:n,showFaveStar:i,faveStarProps:d,titlePanelAdditionalItems:c,rightPanelAdditionalItems:h,additionalActionsMenu:u,menuDropdownProps:p,showMenuDropdown:w=!0,tooltipProps:S})=>{const z=(0,l.DP)();return(0,a.FD)("div",{css:x,className:"header-with-actions",children:[(0,a.FD)("div",{className:"title-panel",children:[(0,a.Y)(m,{...e}),t&&(0,a.FD)("div",{css:y,children:[(null==n?void 0:n.certifiedBy)&&(0,a.Y)(b.T,{...n}),i&&(0,a.Y)(s.$,{...d}),c]})]}),(0,a.FD)("div",{className:"right-button-panel",children:[h,(0,a.Y)("div",{css:$,children:w&&(0,a.Y)(g.ms,{trigger:["click"],popupRender:()=>u,...p,children:(0,a.Y)(f.$,{css:v,buttonStyle:"tertiary","aria-label":(0,o.t)("Menu actions trigger"),tooltip:null==S?void 0:S.text,placement:null==S?void 0:S.placement,children:(0,a.Y)(r.F.EllipsisOutlined,{iconColor:z.colorPrimary,iconSize:"l"})})})})]})]})}},81574:(e,t,n)=>{n.d(t,{g:()=>c});var a=n(20249),i=n.n(a),l=n(2445),o=n(88603),r=n(50290),s=n(17437),d=n(95018);const c=({popupRender:e,tooltip:t,tooltipPlacement:n,children:a,...c})=>{const h=(0,r.DP)(),{type:u}=c,p=s.AH`
    ${(!u||"default"===u)&&".ant-dropdown-trigger {\n      position: relative;\n      &:before {\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 1px;\n        height: 100%;\n      }\n      .anticon {\n        vertical-align: middle;\n      }\n    }"}
  `,m=(0,l.Y)(o.A.Button,{popupRender:e,...c,css:[p,s.AH`
          .ant-btn {
            height: 30px;
            box-shadow: none;
            font-size: ${h.fontSizeSM}px;
            font-weight: ${h.fontWeightStrong};
          }
        `],children:a});return t?(0,l.Y)(d.m,{placement:n,id:`${i()(t)}-tooltip`,title:t,children:m}):m}},94083:(e,t,n)=>{n.d(t,{Ay:()=>S,Kt:()=>w,cs:()=>x});var a=n(2445),i=n(96540),l=n(50290),o=n(74098),r=n(59744),s=n(54569),d=n(2801),c=n(89232),h=n(8558),u=n(75116),p=n(9992),m=n(35273),g=n(64457),b=n(98244);const f=l.I4.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.sizeUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .divider {\n      border-bottom: 1px solid ${e.colorSplit};\n      margin: 15px 0;\n    }\n\n    .table-length {\n      color: ${e.colorTextSecondary};\n    }\n\n    .select {\n      flex: 1;\n      max-width: calc(100% - ${e.sizeUnit+30}px)\n    }\n  `}
`,v=l.I4.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,x=({table:e})=>{const{value:t,type:n,extra:i}=e;return(0,a.FD)(v,{title:t,children:["view"===n?(0,a.Y)(h.F.EyeOutlined,{iconSize:"m"}):(0,a.Y)(h.F.InsertRowAboveOutlined,{iconSize:"m"}),(null==i?void 0:i.certification)&&(0,a.Y)(s.T,{certifiedBy:i.certification.certified_by,details:i.certification.details,size:"l"}),(null==i?void 0:i.warning_markdown)&&(0,a.Y)(m.A,{warningMarkdown:i.warning_markdown,size:"l",marginRight:4}),t]})};function y(e,t){return(0,a.FD)("div",{className:"section",children:[(0,a.Y)("span",{className:"select",children:e}),(0,a.Y)("span",{className:"refresh",children:t})]})}const $=({database:e,emptyState:t,formMode:n=!1,getDbList:l,handleError:s,isDatabaseSelectEnabled:h=!0,onDbChange:m,onCatalogChange:v,onSchemaChange:$,readOnly:w=!1,onEmptyResults:S,catalog:z,schema:Y,sqlLabMode:C=!0,tableSelectMode:U="single",tableValue:I,onTableSelectChange:T,customTableOptionLabelRenderer:D})=>{const{addSuccessToast:_}=(0,g.Yf)(),[k,A]=(0,i.useState)(z),[F,E]=(0,i.useState)(Y),[P,N]=(0,i.useState)(void 0),{currentData:L,isFetching:R,refetch:M}=(0,b.ty)({dbId:null==e?void 0:e.id,catalog:k,schema:F,onSuccess:(e,t)=>{t&&_((0,o.t)("List updated"))},onError:e=>{(0,r.h4)(e).then((e=>{s((0,r.hi)((0,o.t)("There was an error loading the tables"),e))}))}}),B=(0,i.useMemo)((()=>L?L.options.map((e=>({value:e.value,label:D?D(e):(0,a.Y)(x,{table:e}),text:e.value}))):[]),[L,D]);(0,i.useEffect)((()=>{void 0===e&&(A(void 0),E(void 0),N(void 0))}),[e,U]),(0,i.useEffect)((()=>{N("single"===U?B.find((e=>e.value===I)):(null==B?void 0:B.filter((e=>e&&(null==I?void 0:I.includes(e.value)))))||[])}),[B,I,U]);const O=(0,i.useMemo)((()=>(e,t)=>{const n=e.trim().toLowerCase(),{value:a}=t;return a.toLowerCase().includes(n)}),[]);return(0,a.FD)(f,{children:[(0,a.Y)(c.RA,{db:e,emptyState:t,formMode:n,getDbList:l,handleError:s,onDbChange:w?void 0:e=>{m&&m(e),A(void 0),E(void 0),N("single"===U?void 0:[])},onEmptyResults:S,onCatalogChange:w?void 0:e=>{A(e),v&&v(e),E(void 0),N("single"===U?void 0:[])},catalog:k,onSchemaChange:w?void 0:e=>{E(e),$&&$(e),N("single"===U?void 0:[])},schema:F,sqlLabMode:C,isDatabaseSelectEnabled:h&&!w,readOnly:w}),C&&!n&&(0,a.Y)("div",{className:"divider"}),function(){const e=F&&!n&&w||!F,t=C?(0,o.t)("See table schema"):(0,o.t)("Table"),i=(0,a.Y)(d.A,{ariaLabel:(0,o.t)("Select table or type to search tables"),disabled:e,filterOption:O,labelInValue:!0,loading:R,name:"select-table",onChange:e=>{return t=e,void(F?null==T||T(Array.isArray(t)?t.map((e=>null==e?void 0:e.value)):null==t?void 0:t.value,k,F):N(t));var t},options:B,placeholder:(0,o.t)("Select table or type to search tables"),showSearch:!0,mode:U,value:P,allowClear:"multiple"===U,allowSelectAll:!1}),l=!w&&(0,a.Y)(p.A,{onClick:()=>M(),tooltipContent:(0,o.t)("Force refresh table list")});return(0,a.FD)(a.FK,{children:[(0,a.Y)(u.q,{children:t}),y(i,l)]})}()]})},w=e=>(0,a.Y)($,{tableSelectMode:"multiple",...e}),S=$}}]);