"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1423],{81423:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Te});var o=t(2404),r=t.n(o),l=t(2445),i=t(7683),a=t(74098),s=t(58083),c=t(96540),u=t(38221),d=t.n(u),g=t(50669),h=t(80346),p=t(42877),m=t(17451),v=t(50329),f=t(68e3),C=t(97),x=t(2801),b=t(50290),w=t(17437);const y=b.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    width: 100%;\n\n    .three-dots-menu {\n      align-self: center;\n      margin-left: ${e.sizeUnit}px;\n      cursor: pointer;\n      padding: ${e.sizeUnit/2}px;\n      border-radius: ${e.borderRadius}px;\n      margin-top: ${.75*e.sizeUnit}px;\n    }\n  `}
`,$=b.I4.div`
  ${({theme:e})=>`\n    width: 100%;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 0 ${2*e.sizeUnit}px;\n    overflow: hidden;\n  `}
`,S=b.I4.span`
  ${({theme:e})=>`\n    font-weight: ${e.fontWeightStrong};\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    max-width: 100%;\n  `}
`,F=b.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    align-items: center;\n    margin-left: ${2*e.sizeUnit}px;\n  `}
`,k=b.I4.div`
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;

  padding: 3px 4px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 4px;

  ${({isFilterActive:e})=>e&&w.AH`
      background: linear-gradient(
        var(--ag-icon-button-active-background-color),
        var(--ag-icon-button-active-background-color)
      );
      ::after {
        background-color: var(--ag-accent-color);
        border-radius: 50%;
        content: '';
        height: 6px;
        position: absolute;
        right: 4px;
        width: 6px;
      }
    `}

  svg {
    ${({isFilterActive:e})=>e&&w.AH`
        clip-path: path('M8,0C8,4.415 11.585,8 16,8L16,16L0,16L0,0L8,0Z');
        color: var(--ag-icon-button-active-color);
      `}

    :hover {
      ${({isFilterActive:e})=>!e&&w.AH`
          background-color: var(--ag-icon-button-hover-background-color);
          box-shadow: 0 0 0 var(--ag-icon-button-background-spread)
            var(--ag-icon-button-hover-background-color);
          color: var(--ag-icon-button-hover-color);
          border-radius: var(--ag-icon-button-border-radius);
        `}
    }
  }
`,P=b.I4.div`
  ${({theme:e})=>`\n    min-width: ${45*e.sizeUnit}px;\n    padding: ${e.sizeUnit}px 0;\n\n    .menu-item {\n      padding: ${2*e.sizeUnit}px ${4*e.sizeUnit}px;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      gap: ${2*e.sizeUnit}px;\n\n      &:hover {\n        background-color: ${e.colorPrimaryBgHover};\n      }\n    }\n\n    .menu-divider {\n      height: 1px;\n      background-color: ${e.colorBorderSecondary};\n      margin: ${e.sizeUnit}px 0;\n    }\n  `}
`,z=b.I4.div`
  position: relative;
  display: inline-block;
`,A=b.I4.div`
  ${({theme:e})=>`\n      position: fixed;\n      box-shadow: var(--ag-menu-shadow);\n      border-radius: ${e.sizeUnit}px;\n      z-index: 99;\n      min-width: ${50*e.sizeUnit}px;\n      background: var(--ag-menu-background-color);\n      border: var(--ag-menu-border);\n      box-shadow: var(--ag-menu-shadow);\n      color: var(--ag-menu-text-color);\n\n    `}
`,M=b.I4.div`
  ${({theme:e})=>`\n    border: 1px solid ${e.colorBorderSecondary};\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding: ${2*e.sizeUnit}px ${4*e.sizeUnit}px;\n    border-top: 1px solid ${e.colorBorderSecondary};\n    font-size: ${e.fontSize}px;\n    color: ${e.colorTextBase};\n    transform: translateY(-${e.sizeUnit}px);\n    background: ${e.colorBgBase};\n  `}
`,N=b.I4.div`
  ${({theme:e})=>`\n    position: relative;\n    margin-left: ${2*e.sizeUnit}px;\n    display: inline-block;\n    min-width: ${17*e.sizeUnit}px;\n    overflow: hidden;\n  `}
`,Y=b.I4.span`
  ${({theme:e})=>`\n    margin: 0 ${6*e.sizeUnit}px;\n    span {\n      font-weight: ${e.fontWeightStrong};\n    }\n  `}
`,T=b.I4.span`
  ${({theme:e})=>`\n    span {\n      font-weight: ${e.fontWeightStrong};\n    }\n  `}
`,D=b.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    gap: ${3*e.sizeUnit}px;\n  `}
`,I=b.I4.div`
  ${({theme:e,disabled:n})=>`\n    cursor: ${n?"not-allowed":"pointer"};\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      height: ${3*e.sizeUnit}px;\n      width: ${3*e.sizeUnit}px;\n      fill: ${n?e.colorTextQuaternary:e.colorTextSecondary};\n    }\n  `}
`,B=(0,b.I4)(x.A)`
  ${({theme:e})=>`\n    width: ${30*e.sizeUnit}px;\n    margin-right: ${2*e.sizeUnit}px;\n  `}
`,U=b.I4.div`
  max-width: 242px;
  ${({theme:e})=>`\n    padding: 0 ${2*e.sizeUnit}px;\n    color: ${e.colorTextBase};\n    font-size: ${e.fontSizeSM}px;\n  `}
`,L=b.I4.span`
  ${({theme:e})=>`\n    color: ${e.colorTextLabel};\n  `}
`,R=b.I4.span`
  ${({theme:e})=>`\n    float: right;\n    font-size: ${e.fontSizeSM}px;\n  `}
`,E=b.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    align-items: center;\n    gap: ${e.sizeUnit}px;\n  `}
`,H=b.I4.div`
  ${({theme:e})=>`\n    font-weight: ${e.fontWeightStrong};\n  `}
`,O=b.I4.div`
  ${({theme:e,height:n})=>w.AH`
    height: ${n}px;

    --ag-background-color: ${e.colorBgBase};
    --ag-foreground-color: ${e.colorText};
    --ag-header-background-color: ${e.colorBgBase};
    --ag-header-foreground-color: ${e.colorText};

    .dt-is-filter {
      cursor: pointer;
      :hover {
        background-color: ${e.colorPrimaryBgHover};
      }
    }

    .dt-is-active-filter {
      background: ${e.colorPrimaryBg};
      :hover {
        background-color: ${e.colorPrimaryBgHover};
      }
    }

    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    .ag-container {
      border-radius: 0px;
      border: var(--ag-wrapper-border);
    }

    .ag-input-wrapper {
      ::before {
        z-index: 100;
      }
    }

    .filter-popover {
      z-index: 1 !important;
    }

    .search-container {
      display: flex;
      justify-content: flex-end;
      margin-bottom: ${4*e.sizeUnit}px;
    }

    .dropdown-controls-container {
      display: flex;
      justify-content: flex-end;
    }

    .time-comparison-dropdown {
      display: flex;
      padding-right: ${4*e.sizeUnit}px;
      padding-top: ${1.75*e.sizeUnit}px;
      height: fit-content;
    }

    .ag-header {
      font-size: ${e.fontSizeSM}px;
      font-weight: ${e.fontWeightStrong};
    }

    .ag-row {
      font-size: ${e.fontSizeSM}px;
    }

    .ag-spanned-row {
      font-size: ${e.fontSizeSM}px;
      font-weight: ${e.fontWeightStrong};
    }

    .ag-root-wrapper {
      border-radius: 0px;
    }
    .search-by-text-container {
      display: flex;
      align-items: center;
    }

    .search-by-text {
      margin-right: ${2*e.sizeUnit}px;
    }

    .ant-popover-inner {
      padding: 0px;
    }

    .input-container {
      margin-left: auto;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      overflow: visible;
    }

    .input-wrapper svg {
      pointer-events: none;
      transform: translate(${7*e.sizeUnit}px, ${e.sizeUnit/2}px);
      color: ${e.colorTextBase};
    }

    .input-wrapper input {
      color: ${e.colorText};
      font-size: ${e.fontSizeSM}px;
      padding: ${1.5*e.sizeUnit}px ${3*e.sizeUnit}px
        ${1.5*e.sizeUnit}px ${8*e.sizeUnit}px;
      line-height: 1.8;
      border-radius: ${e.borderRadius}px;
      border: 1px solid ${e.colorBorderSecondary};
      background-color: transparent;
      outline: none;

      &:focus {
        border-color: ${e.colorPrimary};
      }

      &::placeholder {
        color: ${e.colorTextQuaternary};
      }
    }
  `}
`,W=({currentPage:e=0,pageSize:n=10,totalRows:t=0,pageSizeOptions:o=[10,20,50,100,200],onServerPaginationChange:r=()=>{},onServerPageSizeChange:i=()=>{},sliceId:s})=>{const c=Math.ceil(t/n),u=e*n+1,d=Math.min((e+1)*n,t),g=o.map((e=>({value:e,label:e})));return(0,l.FD)(M,{children:[(0,l.Y)("span",{children:(0,a.t)("Page Size:")}),(0,l.Y)(N,{children:(0,l.Y)(x.A,{value:`${n}`,options:g,onChange:e=>{i(Number(e))},getPopupContainer:()=>document.getElementById(`chart-id-${s}`)})}),(0,l.FD)(Y,{children:[(0,l.Y)("span",{children:u})," ",(0,a.t)("to")," ",(0,l.Y)("span",{children:d})," ",(0,a.t)("of")," ",(0,l.Y)("span",{children:t})]}),(0,l.FD)(D,{children:[(0,l.Y)(I,{onClick:(h=0===e,()=>{h||r(0,n)}),disabled:0===e,children:(0,l.Y)(m.A,{})}),(0,l.Y)(I,{onClick:(t=>()=>{t||r(e-1,n)})(0===e),disabled:0===e,children:(0,l.Y)(v.A,{})}),(0,l.FD)(T,{children:[(0,a.t)("Page")," ",(0,l.Y)("span",{children:e+1})," ",(0,a.t)("of")," ",(0,l.Y)("span",{children:c})]}),(0,l.Y)(I,{onClick:(t=>()=>{t||r(e+1,n)})(!!(e>=c-1)),disabled:e>=c-1,children:(0,l.Y)(f.A,{})}),(0,l.Y)(I,{onClick:(e=>()=>{e||r(c-1,n)})(!!(e>=c-1)),disabled:e>=c-1,children:(0,l.Y)(C.A,{})})]})]});var h},G=function({value:e,onChange:n,searchOptions:t}){var o,r;return(0,l.Y)(B,{className:"search-select",value:e||(null!=(o=null==t||null==(r=t[0])?void 0:r.value)?o:""),options:t,onChange:n})},V=e=>{var n,t;return Array.isArray(e)&&e.length>0?[{colId:null==(n=e[0])?void 0:n.id,sort:null!=(t=e[0])&&t.desc?"desc":"asc"}]:[]};var j=t(34317);h.syG.registerModules([h.JKr,h.Q90]);const q=new Map,_=(0,c.memo)((({gridHeight:e,data:n=[],colDefsFromProps:t,includeSearch:o,allowRearrangeColumns:i,pagination:s,pageSize:u,serverPagination:h,rowCount:m,onServerPaginationChange:v,serverPaginationData:f,onServerPageSizeChange:C,searchOptions:x,onSearchColChange:b,onSearchChange:w,onSortChange:y,id:$,percentMetrics:S,serverPageLength:F,hasServerPageLengthChanged:k,handleCrossFilter:P,isActiveFilterValue:z,renderTimeComparisonDropdown:A,cleanedTotals:M,showTotals:N,width:Y})=>{const T=(0,c.useRef)(null),D=(0,c.useRef)(null),I=(0,c.useMemo)((()=>n),[n]),B=(0,c.useRef)(null),U=`search-${$}`,L={...h&&{sort:{sortModel:V((null==f?void 0:f.sortBy)||[])}}},R=(0,c.useMemo)((()=>({filter:!0,sortable:!0,resizable:!0,minWidth:100})),[]),E=(0,c.useMemo)((()=>({height:e,width:Y})),[e,Y]),[H,O]=(0,c.useState)(),[_,K]=(0,c.useState)((null==f?void 0:f.searchText)||""),Q=(0,c.useMemo)((()=>d()((e=>{w(e)}),500)),[w]);(0,c.useEffect)((()=>()=>{Q.cancel()}),[Q]),(0,c.useEffect)((()=>{var e;h&&q.get(U)&&document.activeElement!==D.current&&(null==(e=D.current)||e.focus())}),[_,h,U]);const J=(0,c.useCallback)((()=>{q.set(U,!0)}),[U]),X=(0,c.useCallback)((()=>{q.set(U,!1)}),[U]),Z=(0,c.useCallback)((({target:{value:e}})=>{h?(K(e),Q(e)):O(e)}),[h,Q,U]),ee=(0,c.useCallback)((e=>{var n,t;((e,n)=>{const t=(({colId:e,sortDir:n,percentMetrics:t,serverPagination:o,gridInitialState:r})=>{var l;if(t.includes(e))return!1;if(!o)return!1;const{colId:i="",sort:a}=(null==r||null==(l=r.sort)||null==(l=l.sortModel)?void 0:l[0])||{};return i!==e||a!==n})({colId:e,sortDir:n,percentMetrics:S,serverPagination:!!h,gridInitialState:L});t&&y(null!=n?[{id:e,key:e,desc:"desc"===n}]:[])})(null==e||null==(n=e.column)?void 0:n.colId,null==e||null==(t=e.column)?void 0:t.sort)}),[h,L,S,y]);return(0,c.useEffect)((()=>{k&&null!=f&&f.pageSize&&!r()(null==f?void 0:f.pageSize,F)&&C(F)}),[k]),(0,c.useEffect)((()=>{var e;null!=(e=T.current)&&e.api&&T.current.api.sizeColumnsToFit()}),[Y]),(0,l.FD)("div",{style:E,ref:B,children:[(0,l.FD)("div",{className:"dropdown-controls-container",children:[A&&(0,l.Y)("div",{className:"time-comparison-dropdown",children:A()}),o&&(0,l.FD)("div",{className:"search-container",children:[h&&(0,l.FD)("div",{className:"search-by-text-container",children:[(0,l.Y)("span",{className:"search-by-text",children:" Search by :"}),(0,l.Y)(G,{onChange:b,searchOptions:x,value:(null==f?void 0:f.searchColumn)||""})]}),(0,l.Y)("div",{className:"input-wrapper",children:(0,l.FD)("div",{className:"input-container",children:[(0,l.Y)(p.A,{}),(0,l.Y)("input",{ref:D,value:h?_:H||"",type:"text",id:"filter-text-box",placeholder:"Search",onInput:Z,onFocus:J,onBlur:X})]})})]})]}),(0,l.Y)(g.lQ,{ref:T,onGridReady:e=>{e.api.sizeColumnsToFit()},className:"ag-container",rowData:I,headerHeight:36,rowHeight:30,columnDefs:t,defaultColDef:R,onColumnGroupOpened:e=>e.api.sizeColumnsToFit(),rowSelection:"multiple",animateRows:!0,onCellClicked:P,initialState:L,suppressAggFuncInHeader:!0,enableCellTextSelection:!0,quickFilterText:h?"":H,suppressMovableColumns:!i,pagination:s,paginationPageSize:u,paginationPageSizeSelector:j.xp,suppressDragLeaveHidesColumns:!0,pinnedBottomRowData:N?[M]:void 0,localeText:{next:(0,a.t)("Next"),previous:(0,a.t)("Previous"),page:(0,a.t)("Page"),more:(0,a.t)("More"),to:(0,a.t)("to"),of:(0,a.t)("of"),first:(0,a.t)("First"),last:(0,a.t)("Last"),loadingOoo:(0,a.t)("Loading..."),selectAll:(0,a.t)("Select All"),searchOoo:(0,a.t)("Search..."),blanks:(0,a.t)("Blanks"),filterOoo:(0,a.t)("Filter"),applyFilter:(0,a.t)("Apply Filter"),equals:(0,a.t)("Equals"),notEqual:(0,a.t)("Not Equal"),lessThan:(0,a.t)("Less Than"),greaterThan:(0,a.t)("Greater Than"),lessThanOrEqual:(0,a.t)("Less Than or Equal"),greaterThanOrEqual:(0,a.t)("Greater Than or Equal"),inRange:(0,a.t)("In Range"),contains:(0,a.t)("Contains"),notContains:(0,a.t)("Not Contains"),startsWith:(0,a.t)("Starts With"),endsWith:(0,a.t)("Ends With"),andCondition:(0,a.t)("AND"),orCondition:(0,a.t)("OR"),group:(0,a.t)("Group"),columns:(0,a.t)("Columns"),filters:(0,a.t)("Filters"),valueColumns:(0,a.t)("Value Columns"),pivotMode:(0,a.t)("Pivot Mode"),groups:(0,a.t)("Groups"),values:(0,a.t)("Values"),pivots:(0,a.t)("Pivots"),toolPanelButton:(0,a.t)("Tool Panel"),pinColumn:(0,a.t)("Pin Column"),valueAggregation:(0,a.t)("Value Aggregation"),autosizeThiscolumn:(0,a.t)("Autosize This Column"),autosizeAllColumns:(0,a.t)("Autosize All Columns"),groupBy:(0,a.t)("Group By"),ungroupBy:(0,a.t)("Ungroup By"),resetColumns:(0,a.t)("Reset Columns"),expandAll:(0,a.t)("Expand All"),collapseAll:(0,a.t)("Collapse All"),toolPanel:(0,a.t)("Tool Panel"),export:(0,a.t)("Export"),csvExport:(0,a.t)("CSV Export"),excelExport:(0,a.t)("Excel Export"),excelXmlExport:(0,a.t)("Excel XML Export"),sum:(0,a.t)("Sum"),min:(0,a.t)("Min"),max:(0,a.t)("Max"),none:(0,a.t)("None"),count:(0,a.t)("Count"),average:(0,a.t)("Average"),copy:(0,a.t)("Copy"),copyWithHeaders:(0,a.t)("Copy with Headers"),paste:(0,a.t)("Paste"),sortAscending:(0,a.t)("Sort Ascending"),sortDescending:(0,a.t)("Sort Descending"),sortUnSort:(0,a.t)("Clear Sort")},context:{onColumnHeaderClicked:ee,initialSortState:V((null==f?void 0:f.sortBy)||[]),isActiveFilterValue:z}}),h&&(0,l.Y)(W,{currentPage:(null==f?void 0:f.currentPage)||0,pageSize:k?F:(null==f?void 0:f.pageSize)||10,totalRows:m||0,pageSizeOptions:[10,20,50,100,200],onServerPaginationChange:v,onServerPageSizeChange:C,sliceId:$})]})}));_.displayName="AgGridDataTable";const K=(0,c.memo)(_);var Q=t(90457),J=t(88603),X=t(26067),Z=t(13341),ee=t(14103);const ne=({comparisonColumns:e,selectedComparisonColumns:n,onSelectionChange:t})=>{const[o,r]=(0,c.useState)(!1),i=e[0].key;return(0,l.Y)(J.A,{placement:"bottomRight",open:o,onOpenChange:e=>{r(e)},menu:{multiple:!0,onClick:e=>{const{key:o}=e;o===i?t([i]):n.includes(i)?t([o]):t(n.includes(o)?n.filter((e=>e!==o)):[...n,o])},onBlur:()=>{3===n.length&&t([e[0].key])},selectedKeys:n,items:[{key:"all",label:(0,l.Y)(U,{children:(0,a.t)("Select columns that will be displayed in the table. You can multiselect columns.")}),type:"group",children:e.map((e=>({key:e.key,label:(0,l.FD)(l.FK,{children:[(0,l.Y)(L,{children:e.label}),(0,l.Y)(R,{children:n.includes(e.key)&&(0,l.Y)(X.A,{})})]})})))}]},trigger:["click"],children:(0,l.FD)("span",{children:[(0,l.Y)(Z.A,{})," ",(0,l.Y)(ee.A,{})]})})};var te=t(21671),oe=t(61573);const re=e=>{const n=e.data[e.colDef.field],t=e.colDef.valueFormatter;if(!n||!t)return null;const o=t({value:n}),r=parseFloat(String(o).replace("%","").trim());return Number.isNaN(r)?null:r},le=(e,n)=>{const t=new Date(n);if(t.setHours(0,0,0,0),Number.isNaN(null==t?void 0:t.getTime()))return-1;const o=t.getDate(),r=t.getMonth(),l=t.getFullYear(),i=e.getDate(),a=e.getMonth(),s=e.getFullYear();return l<s?-1:l>s?1:r<a?-1:r>a?1:o<i?-1:o>i?1:0},ie=e=>e.isMetric||e.isPercentMetric?j.QH.queryTotal:e.isNumeric?"sum":void 0;var ae=t(7566),se=t(29248),ce=t(95018);const ue=(0,a.t)("Show total aggregations of selected metrics. Note that row limit does not apply to the result.");var de=t(84140);const ge=b.I4.div`
  ${()=>"\n    font-weight: bold;\n  "}
`,he=b.I4.div`
  display: flex;
  background-color: ${({backgroundColor:e})=>e||"transparent"};
  justify-content: ${({align:e})=>e||"left"};
`,pe=b.I4.div`
  margin-right: 10px;
  color: ${({arrowColor:e})=>e||"inherit"};
`,me=b.I4.div`
  position: absolute;
  left: ${({offset:e})=>`${e}%`};
  top: 0;
  height: 100%;
  width: ${({percentage:e})=>`${e}%`};
  background-color: ${({background:e})=>e};
  z-index: 1;
`,ve=e=>{var n;const{value:t,valueFormatted:o,node:r,hasBasicColorFormatters:i,col:a,basicColorFormatters:s,valueRange:c,alignPositiveNegative:u,colorPositiveNegative:d}=e,g=(()=>{const e=(0,b.DP)();return(0,de.A)(e.colorBgContainer).isDark()})();if("bottom"===(null==r?void 0:r.rowPinned))return(0,l.Y)(ge,{children:null!=o?o:t});let h="",p="";var m,v;i&&null!=a&&a.metricName&&(h=null==s||null==(m=s[null==r?void 0:r.rowIndex])||null==(m=m[a.metricName])?void 0:m.mainArrow,p=null==s||null==(v=s[null==r?void 0:r.rowIndex])||null==(v=v[a.metricName])||null==(v=v.arrowColor)?void 0:v.toLowerCase());const f=(null==a||null==(n=a.config)?void 0:n.horizontalAlign)||(null!=a&&a.isNumeric?"right":"left");if(!c)return(0,l.FD)(he,{align:f,children:[h&&(0,l.Y)(pe,{arrowColor:p,children:h}),(0,l.Y)("div",{children:null!=o?o:t})]});const C=function({value:e,valueRange:n,alignPositiveNegative:t}){const[o,r]=n;if(t)return Math.abs(Math.round(e/r*100));const l=Math.abs(Math.max(r,0))+Math.abs(Math.min(o,0));return Math.round(Math.abs(e)/l*100)}({value:t,valueRange:c,alignPositiveNegative:u}),x=function({value:e,valueRange:n,alignPositiveNegative:t}){if(t)return 0;const[o,r]=n,l=Math.abs(Math.max(r,0)),i=Math.abs(Math.min(o,0)),a=l+i;return Math.round(Math.min(i+e,i)/a*100)}({value:t,valueRange:c,alignPositiveNegative:u}),w=function({value:e,colorPositiveNegative:n=!1,isDarkTheme:t=!1}){return n?`rgba(${e<0?150:0},${e>=0?150:0},0,0.2)`:t?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)"}({value:t,colorPositiveNegative:d,isDarkTheme:g});return(0,l.FD)("div",{children:[(0,l.Y)(me,{offset:x,percentage:C,background:w}),null!=o?o:t]})};var fe=t(31656),Ce=t(75163);const xe=()=>(0,l.FD)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,l.Y)("rect",{x:"3",y:"6",width:"18",height:"2",rx:"1"}),(0,l.Y)("rect",{x:"6",y:"11",width:"12",height:"2",rx:"1"}),(0,l.Y)("rect",{x:"9",y:"16",width:"6",height:"2",rx:"1"})]}),be=({size:e=14})=>(0,l.FD)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.Y)("circle",{cx:"8",cy:"3",r:"1.2"}),(0,l.Y)("circle",{cx:"8",cy:"8",r:"1.2"}),(0,l.Y)("circle",{cx:"8",cy:"13",r:"1.2"})]}),we=({content:e,children:n,isOpen:t,onClose:o})=>{const[r,i]=(0,c.useState)({top:0,left:0}),a=(0,c.useRef)(null),s=(0,c.useRef)(null);(0,c.useEffect)((()=>{const e=()=>{var e;const n=null==(e=a.current)?void 0:e.getBoundingClientRect();if(n){var t,o;const e=(null==(t=s.current)?void 0:t.offsetWidth)||200,r=window.innerWidth,l=n.left+10+160+e<=r;i({top:n.bottom+8,left:Math.max(0,n.right-((null==(o=s.current)?void 0:o.offsetWidth)||0)+(l?170:0))})}};return t&&(e(),document.addEventListener("mousedown",u),window.addEventListener("scroll",e),window.addEventListener("resize",e)),()=>{document.removeEventListener("mousedown",u),window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}),[t]);const u=e=>{var n;!s.current||s.current.contains(e.target)||null!=(n=a.current)&&n.contains(e.target)||o()};return(0,l.FD)(z,{children:[(0,c.cloneElement)(n,{ref:a}),t&&(0,l.Y)(A,{ref:s,style:{top:`${r.top}px`,left:`${r.left}px`},children:e})]})},ye=(e,n)=>{if(null==e||!e.length||!n)return null;const{colId:t,sort:o}=e[0];return t===n?"asc"===o?(0,l.Y)(fe.A,{}):"desc"===o?(0,l.Y)(Ce.A,{}):null:null},$e=({displayName:e,enableSorting:n,setSort:t,context:o,column:r,api:i})=>{var s;const{initialSortState:u,onColumnHeaderClicked:d}=o,g=null==r?void 0:r.getColId(),h=null==r?void 0:r.getColDef(),p=r.getUserProvidedColDef(),m=null==h||null==(s=h.context)?void 0:s.isPercentMetric,[v,f]=(0,c.useState)(!1),[C,x]=(0,c.useState)(!1),b=(0,c.useRef)(null),w=null==r?void 0:r.isFilterActive(),z=null==u?void 0:u[0],A=null==p?void 0:p.isMain,M=!A&&(null==p?void 0:p.timeComparisonKey),N=A?g.replace("Main","").trim():g,Y=()=>{d({column:{colId:N,sort:null}}),t(null,!1)},T=e=>{d({column:{colId:N,sort:e}}),t(e,!1)},D=(null==z?void 0:z.colId)===g?null==z?void 0:z.sort:null,I=!(M||D&&"desc"!==D),B=!(M||D&&"asc"!==D),U=(0,l.FD)(P,{children:[I&&(0,l.FD)("div",{onClick:()=>T("asc"),className:"menu-item",children:[(0,l.Y)(fe.A,{})," ",(0,a.t)("Sort Ascending")]}),B&&(0,l.FD)("div",{onClick:()=>T("desc"),className:"menu-item",children:[(0,l.Y)(Ce.A,{})," ",(0,a.t)("Sort Descending")]}),z&&(null==z?void 0:z.colId)===g&&(0,l.FD)("div",{onClick:Y,className:"menu-item",children:[(0,l.Y)("span",{style:{fontSize:16},children:"↻"})," ",(0,a.t)("Clear Sort")]})]});return(0,l.FD)(y,{children:[(0,l.FD)($,{onClick:()=>{if(!n||M)return;const e=(null==z?void 0:z.colId)!==g?"asc":"asc"===(null==z?void 0:z.sort)?"desc":null;e?T(e):Y()},className:"custom-header",children:[(0,l.Y)(S,{children:e}),(0,l.Y)(F,{children:ye(u,g)})]}),(0,l.Y)(we,{content:(0,l.Y)("div",{ref:b}),isOpen:v,onClose:()=>f(!1),children:(0,l.Y)(k,{className:"header-filter",onClick:async e=>{e.stopPropagation(),f(!v);const n=await i.getColumnFilterInstance(r),t=null==n?void 0:n.eGui;t&&b.current&&(b.current.innerHTML="",b.current.appendChild(t))},isFilterActive:w,children:(0,l.Y)(xe,{})})}),!m&&!M&&(0,l.Y)(we,{content:U,isOpen:C,onClose:()=>x(!1),children:(0,l.Y)("div",{className:"three-dots-menu",onClick:e=>{e.stopPropagation(),x(!C)},children:(0,l.Y)(be,{})})})]})};var Se=t(74842),Fe=t(64157);const ke=e=>{switch(e.dataType){case i.s.Numeric:return"number";case i.s.Temporal:return"date";case i.s.Boolean:return"boolean";default:return"text"}};function Pe(e){var n,t,o;let r;const l=!(null==e||!e.originalLabel),i=null==e||null==(n=e.key)?void 0:n.includes("Main"),a=!1!==(null==e||null==(t=e.config)?void 0:t.displayTypeIcon),s=!(null==e||null==(o=e.config)||!o.customColumnName);return r=l&&s?"displayTypeIcon"in e.config&&a&&!i?`${e.label} ${e.config.customColumnName}`:e.config.customColumnName:l&&i?e.originalLabel:l&&!a?"":null==e?void 0:e.label,r||""}const ze=({columns:e,data:n,serverPagination:t,isRawRecords:o,defaultAlignPN:r,showCellBars:s,colorPositiveNegative:u,totals:d,columnColorFormatters:g,allowRearrangeColumns:h,basicColorFormatters:p,isUsingTimeComparison:m,emitCrossFilters:v,alignPositiveNegative:f,slice_id:C})=>{const x=(0,c.useCallback)((c=>{var d,x;const{config:b,isMetric:w,isPercentMetric:y,isNumeric:$,key:S,dataType:F,originalLabel:k}=c,P=void 0===b.alignPositiveNegative?r:b.alignPositiveNegative,z=$&&Array.isArray(g)&&g.length>0,A=m&&Array.isArray(p)&&p.length>0,M=null==S?void 0:S.includes("Main"),N=M?S.replace("Main","").trim():S,Y=F===i.s.String||F===i.s.Temporal,T=!A&&!z&&s&&(null==(d=b.showCellBars)||d)&&(w||o||y)&&function(e,n,t){var o;if("number"==typeof(null==t||null==(o=t[0])?void 0:o[e])){const o=t.map((n=>n[e]));return n?[0,(0,te.A)(o.map(Math.abs))]:(0,oe.A)(o)}return null}(S,P||f,n),D=(e=>{switch(e.dataType){case i.s.Numeric:return"agNumberColumnFilter";case i.s.String:return"agTextColumnFilter";case i.s.Temporal:return"agDateColumnFilter";default:return!0}})(c);return{field:N,headerName:Pe(c),valueFormatter:e=>((e,n)=>{const{value:t,node:o}=e;return!(0,Se.A)(t)||""===t||t instanceof Fe.A&&null===t.input?-1===(null==o?void 0:o.level)?"":"N/A":(null==n.formatter?void 0:n.formatter(t))||t})(e,c),valueGetter:e=>((e,n)=>{var t,o;if(null!=e&&null!=(t=e.colDef)&&t.isMain){const n=`Main ${e.column.getColId()}`;return e.data[n]}return(0,Se.A)(null==(o=e.data)?void 0:o[e.column.getColId()])?e.data[e.column.getColId()]:n.isNumeric?void 0:""})(e,c),cellStyle:e=>(e=>{var n;const{value:t,colDef:o,rowIndex:r,hasBasicColorFormatters:l,basicColorFormatters:i,hasColumnColorFormatters:a,columnColorFormatters:s,col:c,node:u}=e;let d;var g;a&&s.filter((e=>{var n,t;return(null!=e&&null!=(n=e.column)&&n.includes("Main")?null==e||null==(t=e.column)?void 0:t.replace("Main","").trim():null==e?void 0:e.column)===o.field})).forEach((e=>{const n=!(!t&&0!==t)&&e.getColorFromValue(t);n&&(d=n)})),l&&null!=c&&c.metricName&&"bottom"!==(null==u?void 0:u.rowPinned)&&(d=null==i||null==(g=i[r])||null==(g=g[c.metricName])?void 0:g.backgroundColor);const h=(null==c||null==(n=c.config)?void 0:n.horizontalAlign)||(null!=c&&c.isNumeric?"right":"left");return{backgroundColor:d||"",textAlign:h}})({...e,hasColumnColorFormatters:z,columnColorFormatters:g,hasBasicColorFormatters:A,basicColorFormatters:p,col:c}),cellClass:e=>(e=>{var n;const{col:t,emitCrossFilters:o}=e,r=null==e||null==(n=e.context)?void 0:n.isActiveFilterValue;let l="";var i;return o&&(null!=t&&t.isMetric||(l+=" dt-is-filter"),null!=r&&r(null==t?void 0:t.key,null==e?void 0:e.value)&&(l+=" dt-is-active-filter"),null!=t&&null!=(i=t.config)&&i.truncateLongCells&&(l+=" dt-truncate-cell")),l})({...e,col:c,emitCrossFilters:v}),minWidth:null!=(x=null==b?void 0:b.columnWidth)?x:100,filter:D,...y&&{filterValueGetter:re},...F===i.s.Temporal&&{filterParams:{comparator:le}},cellDataType:ke(c),defaultAggFunc:ie(c),initialAggFunc:ie(c),...!(w||y)&&{allowedAggFuncs:["sum","min","max","count","avg","first","last"]},cellRenderer:e=>Y?(e=>{const{node:n,api:t,colDef:o,columns:r,allowRenderHtml:i,value:s,valueFormatted:c}=e;if("bottom"===(null==n?void 0:n.rowPinned)){const e=t.getAllGridColumns().filter((e=>e.isVisible())),n=!e[0].getAggFunc();if(e.length>1&&n&&r[0].key===(null==o?void 0:o.field))return(0,l.FD)(E,{children:[(0,l.Y)(H,{children:(0,a.t)("Summary")}),(0,l.Y)(ce.m,{overlay:ue,children:(0,l.Y)(se.A,{})})]});if(!s)return null}if(!("string"==typeof s||s instanceof Date))return null!=c?c:s;if("string"==typeof s){if(s.startsWith("http://")||s.startsWith("https://"))return(0,l.Y)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:s});if(i&&(0,ae.fE)(s))return(0,l.Y)("div",{dangerouslySetInnerHTML:{__html:(0,ae.pn)(s)}})}return(0,l.Y)("div",{children:null!=c?c:s})})(e):ve(e),cellRendererParams:{allowRenderHtml:!0,columns:e,hasBasicColorFormatters:A,col:c,basicColorFormatters:p,valueRange:T,alignPositiveNegative:P||f,colorPositiveNegative:u},context:{isMetric:w,isPercentMetric:y,isNumeric:$},lockPinned:!h,sortable:!t||!y,...t&&{headerComponent:$e,comparator:()=>0,headerComponentParams:{slice_id:C}},isMain:M,...!M&&k&&{columnGroupShow:"open"},...k&&{timeComparisonKey:k},wrapText:!(null!=b&&b.truncateLongCells),autoHeight:!(null!=b&&b.truncateLongCells)}}),[e,n,r,g,p,s,u,m,o,v,h,t,f]),b=JSON.stringify(e);return(0,c.useMemo)((()=>{const n=new Map;return e.reduce(((e,t)=>{const o=x(t);if(null!=t&&t.originalLabel)if(n.has(t.originalLabel))e[n.get(t.originalLabel)].children.push(o);else{const r={headerName:t.originalLabel,marryChildren:!0,openByDefault:!0,children:[o]};n.set(t.originalLabel,e.length),e.push(r)}else e.push(o);return e}),[])}),[b,x])};var Ae=t(31463),Me=t(90924);const Ne=({key:e,value:n,filters:t,timeGrain:o,isActiveFilterValue:r,timestampFormatter:l})=>{let i={...t||{}};i=t&&r(e,n)?{}:{[e]:[n]},Array.isArray(i[e])&&0===i[e].length&&delete i[e];const a=Object.keys(i),s=Object.values(i),c=[];return a.forEach((e=>{var n;const t=e===Ae.Tf,o=(0,Me.A)(null==(n=i)?void 0:n[e]);if(o.length){const e=o.map((e=>t?l(e):e));c.push(`${e.join(", ")}`)}})),{dataMask:{extraFormData:{filters:0===a.length?[]:a.map((e=>{var n;const t=(0,Me.A)(null==(n=i)?void 0:n[e]);return t.length?{col:e,op:"IN",val:t.map((e=>e instanceof Date?e.getTime():e)),grain:e===Ae.Tf?o:void 0}:{col:e,op:"IS NULL"}}))},filterState:{label:c.join(", "),value:s.length?s:null,filters:i&&Object.keys(i).length?i:null}},isCurrentValueSelected:r(e,n)}},Ye=(e,n)=>{let t=e;return n&&(t-=16),t-80};function Te(e){var n;const{height:t,columns:o,data:u,includeSearch:d,allowRearrangeColumns:g,pageSize:h,serverPagination:p,rowCount:m,setDataMask:v,serverPaginationData:f,slice_id:C,percentMetrics:x,hasServerPageLengthChanged:b,serverPageLength:w,emitCrossFilters:y,filters:$,timeGrain:S,isRawRecords:F,alignPositiveNegative:k,showCellBars:P,isUsingTimeComparison:z,colorPositiveNegative:A,totals:M,showTotals:N,columnColorFormatters:Y,basicColorFormatters:T,width:D}=e,[I,B]=(0,c.useState)([]);(0,c.useEffect)((()=>{const e=o.filter((e=>(null==e?void 0:e.dataType)===i.s.String)).map((e=>({value:e.key,label:e.label})));r()(e,I)||B(e||[])}),[o]);const U=[{key:"all",label:(0,a.t)("Display all")},{key:"#",label:"#"},{key:"△",label:"△"},{key:"%",label:"%"}],[L,R]=(0,c.useState)([null==U||null==(n=U[0])?void 0:n.key]),E=(0,c.useMemo)((()=>z?0===L.length||L.includes("all")?null==o?void 0:o.filter((e=>{var n;return!1!==(null==e||null==(n=e.config)?void 0:n.visible)})):o.filter((e=>!e.originalLabel||((null==e?void 0:e.label)||"").includes("Main")||L.includes(e.label))).filter((e=>{var n;return!1!==(null==e||null==(n=e.config)?void 0:n.visible)})):o),[o,L]),H=ze({columns:z?E:o,data:u,serverPagination:p,isRawRecords:F,defaultAlignPN:k,showCellBars:P,colorPositiveNegative:A,totals:M,columnColorFormatters:Y,allowRearrangeColumns:g,basicColorFormatters:T,isUsingTimeComparison:z,emitCrossFilters:y,alignPositiveNegative:k,slice_id:C}),W=Ye(t,d),G=(0,c.useCallback)((function(e,n){var t;return!!$&&(null==(t=$[e])?void 0:t.includes(n))}),[$]),V=(0,c.useCallback)((e=>(0,s.PT)(S)(e)),[S]),j=(0,c.useCallback)((e=>{var n,t;if(y&&e.column&&!(null!=(n=e.column.getColDef().context)&&n.isMetric||null!=(t=e.column.getColDef().context)&&t.isPercentMetric)){const n={key:e.column.getColId(),value:e.value,filters:$,timeGrain:S,isActiveFilterValue:G,timestampFormatter:V};v(Ne(n).dataMask)}}),[y,v,$,S]),q=(0,c.useCallback)(((e,n)=>{const t={...f,currentPage:e,pageSize:n};(0,Q.F)(v,t)}),[v]),_=(0,c.useCallback)((e=>{const n={...f,currentPage:0,pageSize:e};(0,Q.F)(v,n)}),[v]),J=(0,c.useCallback)((e=>{var n;const t={...f||{},searchColumn:(null==f?void 0:f.searchColumn)||(null==(n=I[0])?void 0:n.value),searchText:e,currentPage:0};(0,Q.F)(v,t)}),[v,I]),X=(0,c.useCallback)((e=>{if(!p)return;const n={...f,sortBy:e};(0,Q.F)(v,n)}),[v,p]);return(0,l.Y)(O,{height:t,children:(0,l.Y)(K,{gridHeight:W,data:u||[],colDefsFromProps:H,includeSearch:!!d,allowRearrangeColumns:!!g,pagination:!!h&&!p,pageSize:h||0,serverPagination:p,rowCount:m,onServerPaginationChange:q,onServerPageSizeChange:_,serverPaginationData:f,searchOptions:I,onSearchColChange:e=>{if(!r()(e,null==f?void 0:f.searchColumn)){const n={...f||{},searchColumn:e,searchText:""};(0,Q.F)(v,n)}},onSearchChange:J,onSortChange:X,id:C,handleCrossFilter:j,percentMetrics:x,serverPageLength:w,hasServerPageLengthChanged:b,isActiveFilterValue:G,renderTimeComparisonDropdown:z?()=>(0,l.Y)(ne,{comparisonColumns:U,selectedComparisonColumns:L,onSelectionChange:R}):()=>null,cleanedTotals:M||{},showTotals:N,width:D})})}}}]);