"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9915],{1600:(e,t,r)=>{r.d(t,{A:()=>u});var i=r(2445),a=r(96540),o=r(50290),n=r(74098),l=r(55204),s=r(8558),c=r(77627);const d=o.I4.div`
  position: relative;

  &:hover {
    .copy-button {
      visibility: visible;
    }
  }

  .copy-button {
    position: absolute;
    top: 40px;
    right: 16px;
    z-index: 10;
    visibility: hidden;
    margin: -4px;
    padding: 4px;
    background: ${({theme:e})=>e.colorBgContainer};
    border-radius: ${({theme:e})=>e.borderRadius}px;
    color: ${({theme:e})=>e.colorIcon};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: ${({theme:e})=>e.colorFillContentHover};
      color: ${({theme:e})=>e.colorIconHover};
    }

    &:focus {
      visibility: visible;
      outline: 2px solid ${({theme:e})=>e.colorPrimary};
      outline-offset: 2px;
    }
  }
`;function u({addDangerToast:e,addSuccessToast:t,children:r,language:o,...u}){function h(r){(0,c.A)((()=>Promise.resolve(r))).then((()=>{t&&t((0,n.t)("Code Copied!"))})).catch((()=>{e&&e((0,n.t)("Sorry, your browser does not support copying."))}))}return(0,a.useEffect)((()=>{(0,l.Fq)([o])}),[o]),(0,i.FD)(d,{children:[(0,i.Y)(s.F.CopyOutlined,{className:"copy-button",tabIndex:0,role:"button","aria-label":(0,n.t)("Copy code to clipboard"),onClick:e=>{e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),h(r)},onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),h(r))}}),(0,i.Y)(l.Ay,{language:o,...u,children:r})]})}},21044:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var i=r(2445),a=r(96540),o=r(61574),n=r(71519),l=r(50290),s=r(74098),c=r(79378),d=r(88808),u=r(17437),h=r(71323),m=r(64457),p=r(86784),b=r(20237),g=r(27509),y=r(95018),f=r(23576),S=r(22070),v=r(89232),x=r(55204),H=r(85923),k=r(79605),q=r(8558),C=r(46942),D=r.n(C),w=r(97163),F=r(88217),Y=r(1600),T=r(63178);const z=l.I4.div`
  color: ${({theme:e})=>e.colorTextSecondary};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  margin-bottom: 0;
`,$=l.I4.div`
  color: ${({theme:e})=>e.colorText};
  font-size: ${({theme:e})=>e.fontSize}px;
  padding: 4px 0 24px 0;
`,I=l.I4.div`
  display: flex;
`,A=l.I4.div`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  padding: ${({theme:e})=>2*e.sizeUnit}px
    ${({theme:e})=>4*e.sizeUnit}px;
  margin-right: ${({theme:e})=>4*e.sizeUnit}px;
  color: ${({theme:e})=>e.colorPrimaryText};

  &.active,
  &:focus,
  &:hover {
    background: ${({theme:e})=>e.colorPrimaryBg};
    border-radius: ${({theme:e})=>e.borderRadius}px;
  }

  &:hover:not(.active) {
    background: ${({theme:e})=>e.colorPrimaryBgHover};
  }
`,U=(0,l.I4)(w.aF)`
  .ant-modal-body {
    padding: ${({theme:e})=>6*e.sizeUnit}px;
  }
`,N=(0,m.Ay)((function({onHide:e,openInSqlLab:t,queries:r,query:o,fetchData:n,show:l,addDangerToast:c,addSuccessToast:d}){const{handleKeyPress:u,handleDataChange:h,disablePrevious:m,disableNext:p}=(0,T.A)({queries:r,currentQueryId:o.id,fetchData:n}),[b,g]=(0,a.useState)("user"),{id:y,sql:f,executed_sql:S}=o;return(0,i.Y)("div",{role:"none",onKeyUp:u,children:(0,i.FD)(U,{onHide:e,show:l,title:(0,s.t)("Query preview"),footer:(0,i.FD)(i.FK,{children:[(0,i.Y)(F.$,{buttonStyle:"secondary",disabled:m,onClick:()=>h(!0),children:(0,s.t)("Previous")},"previous-query"),(0,i.Y)(F.$,{buttonStyle:"secondary",disabled:p,onClick:()=>h(!1),children:(0,s.t)("Next")},"next-query"),(0,i.Y)(F.$,{onClick:()=>t(y),children:(0,s.t)("Open in SQL Lab")},"open-in-sql-lab")]}),children:[(0,i.Y)(z,{children:(0,s.t)("Tab name")}),(0,i.Y)($,{children:o.tab_name}),(0,i.FD)(I,{children:[(0,i.Y)(A,{role:"button",className:D()({active:"user"===b}),onClick:()=>g("user"),children:(0,s.t)("User query")}),(0,i.Y)(A,{role:"button",className:D()({active:"executed"===b}),onClick:()=>g("executed"),children:(0,s.t)("Executed query")})]}),(0,i.Y)(Y.A,{addDangerToast:c,addSuccessToast:d,language:"sql",children:("user"===b?f:S)||""})]})})}));var P=r(91412),L=r(58486),R=r(59674);const _=(0,l.I4)(v.uO)`
  table .ant-table-cell {
    vertical-align: top;
  }
`,O=(0,l.I4)(x.Ay)`
  height: ${({theme:e})=>26*e.sizeUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Ensure the syntax highlighter content respects the container constraints */
  & > div {
    height: 100%;
    overflow: hidden;
  }

  pre {
    height: 100% !important;
    overflow: hidden !important;
    margin: 0 !important;
  }
`,E=l.I4.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colorPrimary};
    text-decoration: underline;
    cursor: pointer;
  }
`,Q=l.I4.div`
  color: ${({theme:e})=>e.colorText};
`,K=(0,l.I4)(g.JU)`
  text-align: left;
  font-family: ${({theme:e})=>e.fontFamilyCode};
`,Z=(0,m.Ay)((function({addDangerToast:e}){const{state:{loading:t,resourceCount:r,resourceCollection:m},fetchData:g}=(0,p.RU)("query",(0,s.t)("Query history"),e,!1),[C,D]=(0,a.useState)(),w=(0,l.DP)(),F=(0,o.W6)();(0,a.useEffect)((()=>{(0,x.Fq)(["sql"])}),[]);const Y=(0,a.useCallback)((t=>{c.A.get({endpoint:`/api/v1/query/${t}`}).then((({json:e={}})=>{D({...e.result})}),(0,h.JF)((t=>e((0,s.t)("There was an issue previewing the selected query. %s",t)))))}),[e]),T={activeChild:"Query history",...S.F},z=[{id:k.H.StartTime,desc:!0}],$=(0,a.useMemo)((()=>[{Cell:({row:{original:{status:e}}})=>{const t={name:null,label:""};return e===d.kZ.Success?(t.name=(0,i.Y)(q.F.CheckOutlined,{iconSize:"m",iconColor:w.colorSuccess,css:u.AH`
                  vertical-align: -webkit-baseline-middle;
                `}),t.label=(0,s.t)("Success")):e===d.kZ.Failed||e===d.kZ.Stopped?(t.name=(0,i.Y)(q.F.CloseOutlined,{iconSize:"m",iconColor:e===d.kZ.Failed?w.colorError:w.colorIcon}),t.label=(0,s.t)("Failed")):e===d.kZ.Running?(t.name=(0,i.Y)(q.F.LoadingOutlined,{iconSize:"m",iconColor:w.colorPrimary}),t.label=(0,s.t)("Running")):e===d.kZ.TimedOut?(t.name=(0,i.Y)(q.F.CircleSolid,{iconSize:"m",iconColor:w.colorIcon}),t.label=(0,s.t)("Offline")):e!==d.kZ.Scheduled&&e!==d.kZ.Pending||(t.name=(0,i.Y)(q.F.Queued,{iconSize:"m"}),t.label=(0,s.t)("Scheduled")),(0,i.Y)(y.m,{title:t.label,placement:"bottom",children:(0,i.Y)("span",{children:t.name})})},accessor:k.H.Status,size:"xs",disableSortBy:!0,id:k.H.Status},{accessor:k.H.StartTime,Header:(0,s.t)("Time"),size:"lg",Cell:({row:{original:{start_time:e}}})=>{const t=R.XV.utc(e).local().format(H.QU).split(" ");return(0,i.FD)(i.FK,{children:[t[0]," ",(0,i.Y)("br",{}),t[1]]})},id:k.H.StartTime},{Header:(0,s.t)("Duration"),size:"lg",Cell:({row:{original:{status:e,start_time:t,start_running_time:r,end_time:a}}})=>{const o=e===d.kZ.Failed?"danger":e,n=r||t,l=a&&n?(0,R.XV)(R.XV.utc(a-n)).format(H.os):"00:00:00.000";return(0,i.Y)(K,{type:o,role:"timer",children:l})},id:"duration"},{accessor:k.H.TabName,Header:(0,s.t)("Tab name"),size:"xl",id:k.H.TabName},{accessor:k.H.DatabaseName,Header:(0,s.t)("Database"),size:"lg",id:k.H.DatabaseName},{accessor:k.H.Database,hidden:!0,id:k.H.Database},{accessor:k.H.Schema,Header:(0,s.t)("Schema"),size:"lg",id:k.H.Schema},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),r=t.length>0?t.shift():"";return t.length?(0,i.FD)(E,{children:[(0,i.Y)("span",{children:r}),(0,i.Y)(f.A,{placement:"right",title:(0,s.t)("TABLES"),trigger:"click",content:(0,i.Y)(i.FK,{children:t.map((e=>(0,i.Y)(Q,{children:e},e)))}),children:(0,i.FD)("span",{className:"count",children:["(+",t.length,")"]})})]}):r},accessor:k.H.SqlTables,Header:(0,s.t)("Tables"),size:"lg",disableSortBy:!0,id:k.H.SqlTables},{accessor:k.H.UserFirstName,Header:(0,s.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>(0,L.A)(e),id:k.H.UserFirstName},{accessor:k.H.User,hidden:!0,id:k.H.User},{accessor:k.H.Rows,Header:(0,s.t)("Rows"),size:"sm",id:k.H.Rows},{accessor:k.H.Sql,Header:(0,s.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,i.Y)("div",{tabIndex:0,role:"button",onClick:()=>D(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),D(e))},style:{cursor:"pointer"},children:(0,i.Y)(O,{language:"sql",customStyle:{cursor:"pointer",userSelect:"none"},children:(0,h.s4)(e.sql,4)})}),size:"xxl",id:k.H.Sql},{Header:(0,s.t)("Actions"),id:"actions",disableSortBy:!0,size:"sm",Cell:({row:{original:{id:e}}})=>(0,i.Y)(y.m,{title:(0,s.t)("Open query in SQL Lab"),placement:"bottom",children:(0,i.Y)(n.N_,{to:`/sqllab?queryId=${e}`,children:(0,i.Y)(q.F.Full,{iconSize:"l"})})})}]),[w]),I=(0,a.useMemo)((()=>[{Header:(0,s.t)("Database"),key:"database",id:"database",input:"select",operator:v.c0.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,h.u1)("query","database",(0,h.JF)((t=>e((0,s.t)("An error occurred while fetching database values: %s",t))))),paginate:!0},{Header:(0,s.t)("State"),key:"state",id:"status",input:"select",operator:v.c0.Equals,unfilteredLabel:"All",fetchSelects:(0,h.$C)("query","status",(0,h.JF)((t=>e((0,s.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,s.t)("User"),key:"user",id:"user",input:"select",operator:v.c0.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,h.u1)("query","user",(0,h.JF)((t=>e((0,s.t)("An error occurred while fetching user values: %s",t))))),paginate:!0},{Header:(0,s.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:v.c0.Between},{Header:(0,s.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:v.c0.Contains}]),[e]);return(0,i.FD)(i.FK,{children:[(0,i.Y)(b.A,{...T}),C&&(0,i.Y)(N,{onHide:()=>D(void 0),query:C,queries:m,fetchData:Y,openInSqlLab:e=>F.push(`/sqllab?queryId=${e}`),show:!0}),(0,i.Y)(_,{className:"query-history-list-view",columns:$,count:r,data:m,fetchData:g,filters:I,initialSort:z,loading:t,pageSize:25,highlightRowId:null==C?void 0:C.id,refreshData:()=>{},addDangerToast:e,addSuccessToast:P.WR})]})}))},63178:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(96540);function a({queries:e,fetchData:t,currentQueryId:r}){const a=e.findIndex((e=>e.id===r)),[o,n]=(0,i.useState)(a),[l,s]=(0,i.useState)(!1),[c,d]=(0,i.useState)(!1);function u(){s(0===o),d(o===e.length-1)}function h(r){const i=o+(r?-1:1);i>=0&&i<e.length&&(t(e[i].id),n(i),u())}return(0,i.useEffect)((()=>{u()})),{handleKeyPress:function(t){o>=0&&o<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),h(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:l,disableNext:c}}}}]);