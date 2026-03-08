"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7788],{37788:(e,t,i)=>{i.d(t,{Ay:()=>W,rE:()=>$});var n,l=i(2445),r=i(96540),a=i(25929),o=i(46942),s=i.n(o),d=i(74098),c=i(50290),m=i(17437),p=i(81115),u=i(43303),h=i(17355),g=i(95018),x=i(27509),b=i(8558),v=i(92026),f=i(89232),z=i(13130);!function(e){e.AllCharts="ALL_CHARTS",e.Featured="FEATURED",e.Category="CATEGORY",e.Tags="TAGS"}(n||(n={}));const $=1090,y=(0,d.t)("Other"),C=(0,d.t)("All charts"),U=(0,d.t)("Featured"),Y=[U,(0,d.t)("ECharts"),(0,d.t)("Advanced-Analytics")],k=c.I4.div`
  ${({isSelectedVizMetadata:e})=>`\n    display: grid;\n    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};\n    // em is used here because the sidebar should be sized to fit the longest standard tag\n    grid-template-columns: minmax(14em, auto) 5fr;\n    grid-template-areas:\n      'sidebar search'\n      'sidebar main'\n      'details details';\n    height: 70vh;\n    overflow: auto;\n  `}
`,S=c.I4.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  font-size: ${({theme:e})=>e.fontSizeLG}px;
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  line-height: ${({theme:e})=>6*e.sizeUnit}px;
`,w=c.I4.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colorBorder};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({theme:e})=>e.fontSizeSM}px;
      color: ${({theme:e})=>e.colorText};
      padding-left: ${({theme:e})=>2*e.sizeUnit}px;
      padding-bottom: ${({theme:e})=>e.sizeUnit}px;
    }

    .ant-collapse-content .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 ${({theme:e})=>2*e.sizeUnit}px;
    }
  }
`,A=c.I4.div`
  grid-area: main;
  overflow-y: auto;
`,F=c.I4.div`
  ${({theme:e})=>`\n    grid-area: search;\n    margin-top: ${3*e.sizeUnit}px;\n    margin-bottom: ${e.sizeUnit}px;\n    margin-left: ${3*e.sizeUnit}px;\n    margin-right: ${3*e.sizeUnit}px;\n    .ant-input-affix-wrapper {\n      padding-left: ${2*e.sizeUnit}px;\n    }\n  `}
`,I=c.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colorIcon};
`,M=c.I4.button`
  ${({theme:e})=>`\n    all: unset; // remove default button styles\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    margin: ${e.sizeUnit}px 0;\n    padding: 0 ${e.sizeUnit}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 2em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n    color: ${e.colorText};\n\n    &:focus {\n      outline: initial;\n    }\n\n    &.selected {\n      background-color: ${e.colorPrimary};\n      color: ${e.colorTextLightSolid};\n\n      svg {\n        color: ${e.colorTextLightSolid};\n      }\n\n      &:hover {\n        .cancel {\n          visibility: visible;\n        }\n      }\n    }\n\n    & > span[role="img"] {\n      margin-right: ${2*e.sizeUnit}px;\n    }\n\n    .cancel {\n      visibility: hidden;\n    }\n  `}
`,T=c.I4.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({theme:e})=>24*e.sizeUnit}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({theme:e})=>2*e.sizeUnit}px;
  justify-items: center;
  // for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery.
  padding: ${({theme:e})=>2*e.sizeUnit}px;
`,E=e=>m.AH`
  grid-area: details;
  border-top: 1px solid ${e.colorBorder};
`,D=e=>m.AH`
  padding: ${4*e.sizeUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`,O=c.I4.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.sizeUnit}px;
  padding-right: ${({theme:e})=>14*e.sizeUnit}px;
  padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
`,H=c.I4.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.sizeUnit}px;
  margin: 0;
`,N=c.I4.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({theme:e})=>4*e.sizeUnit}px;

  img {
    height: 100%;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    border: 1px solid ${({theme:e})=>e.colorBorder};
  }
`,B=e=>m.AH`
  cursor: pointer;
  width: ${24*e.sizeUnit}px;
  position: relative;

  img {
    min-width: ${24*e.sizeUnit}px;
    min-height: ${24*e.sizeUnit}px;
    border: 1px solid ${e.colorBorder};
    border-radius: ${e.borderRadius}px;
    transition: border-color ${e.motionDurationMid};
  }

  &.selected img {
    border: 2px solid ${e.colorPrimaryBorder};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${e.colorBorder};
  }

  .viztype-label {
    margin-top: ${2*e.sizeUnit}px;
    text-align: center;
  }
`,R=c.I4.div`
  ${({theme:e})=>`\n    border: 1px solid ${e.colorPrimaryText};\n    box-sizing: border-box;\n    border-radius: ${e.borderRadius}px;\n    background: ${e.colorBgContainer};\n    line-height: ${2.5*e.sizeUnit}px;\n    color: ${e.colorPrimaryText};\n    font-size: ${e.fontSizeSM}px;\n    font-weight: ${e.fontWeightStrong};\n    text-align: center;\n    padding: ${.5*e.sizeUnit}px ${e.sizeUnit}px;\n    cursor: pointer;\n\n    div {\n      transform: scale(0.83,0.83);\n    }\n  `}
`,j=c.I4.div`
  position: absolute;
  right: ${({theme:e})=>e.sizeUnit}px;
  top: ${({theme:e})=>19*e.sizeUnit}px;
`,L=c.I4.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.sizeUnit}px;
`,P=({entry:e,selectedViz:t,setSelectedViz:i,onDoubleClick:n})=>{const r=(0,c.DP)(),{key:a,value:o}=e,s=t===e.key;return(0,l.FD)("div",{role:"button",css:B(r),tabIndex:0,className:s?"selected":"",onClick:()=>i(a),onDoubleClick:n,children:[(0,l.Y)("img",{alt:o.name,width:"100%",className:"viztype-selector "+(s?"selected":""),src:o.thumbnail}),(0,l.Y)("div",{className:"viztype-label",children:o.name}),o.label&&(0,l.Y)(j,{children:(0,l.Y)(R,{children:(0,l.Y)("div",{children:(0,d.t)(o.label)})})})]})},V=({vizEntries:e,...t})=>(0,l.Y)(T,{children:e.map((e=>(0,l.Y)(P,{...t,entry:e},e.key)))}),G=({selector:e,sectionId:t,icon:i,isSelected:n,onClick:a,className:o})=>{const c=(0,r.useRef)(null);return(0,r.useEffect)((()=>{n&&queueMicrotask((()=>(0,z.A)(c.current,{behavior:"smooth",scrollMode:"if-needed"})))}),[]),(0,l.FD)(M,{"aria-label":e,"aria-selected":n,ref:c,name:e,className:s()(o,n&&"selected"),onClick:()=>a(e,t),tabIndex:0,role:"tab",children:[i,(0,d.t)(e)]},e)},K=(e,t)=>t===e.category||t===y&&null==e.category||(e.tags||[]).indexOf(t)>-1;function W(e){var t,i;const{selectedViz:o,onChange:s,onDoubleClick:c,className:z,denyList:$}=e,{mountedPluginMetadata:M}=(0,f.Q)(),T=(0,r.useRef)(),[B,j]=(0,r.useState)(""),[P,W]=(0,r.useState)(!0),q=P&&!!B,J=o?M[o]:null,Q=(0,r.useMemo)((()=>Object.entries(M).map((([e,t])=>({key:e,value:t}))).filter((({key:e})=>!$.includes(e))).filter((({value:e})=>(0,v.px)(e.behaviors||[])&&!e.deprecated)).sort(((e,t)=>e.value.name.localeCompare(t.value.name)))),[M,$]),_=(0,r.useMemo)((()=>{const e={};return Q.forEach((t=>{const i=t.value.category||y;e[i]||(e[i]=[]),e[i].push(t)})),e}),[Q]),X=(0,r.useMemo)((()=>Object.keys(_).sort(((e,t)=>e===y?1:t===y?-1:e.localeCompare(t)))),[_]),Z=(0,r.useMemo)((()=>{const e={};return Q.forEach((t=>{(t.value.tags||[]).forEach((i=>{e[i]||(e[i]=[]),e[i].push(t)}))})),e}),[Q]),ee=(0,r.useMemo)((()=>Object.keys(Z).sort(((e,t)=>e.localeCompare(t))).filter((e=>-1===Y.indexOf(e)))),[Z]),te=(0,r.useMemo)((()=>Q.sort(((e,t)=>e.value.name.localeCompare(t.value.name)))),[Q]),[ie,ne]=(0,r.useState)((()=>(null==J?void 0:J.category)||U)),[le,re]=(0,r.useState)((()=>null!=J&&J.category?n.Category:n.Featured)),ae=(0,r.useMemo)((()=>new a.A(Q,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]})),[Q]),oe=(0,r.useMemo)((()=>""===B.trim()?[]:ae.search(B).map((e=>e.item)).sort(((e,t)=>{var i,n;const l=null==(i=e.value)?void 0:i.label,r=null==(n=t.value)?void 0:n.label,a=l&&p.l7[l]?p.l7[l].weight:0;return(r&&p.l7[r]?p.l7[r].weight:0)-a}))),[B,ae]),se=(0,r.useCallback)((()=>{W(!0)}),[]);(0,r.useEffect)((()=>{T.current&&T.current.focus()}),[]);const de=(0,r.useCallback)((e=>j(e.target.value)),[]),ce=(0,r.useCallback)((()=>{W(!1),j(""),T.current.blur()}),[]),me=(0,r.useCallback)(((e,t)=>{P&&ce(),ne(e),re(t);const i=J&&K(J,e);e===ie||i||s(null)}),[ce,P,ie,J,s]),pe=(0,r.useMemo)((()=>({[n.Category]:{title:(0,d.t)("Category"),icon:(0,l.Y)(b.F.Category,{iconSize:"m"}),selectors:X},[n.Tags]:{title:(0,d.t)("Tags"),icon:(0,l.Y)(b.F.NumberOutlined,{iconSize:"m"}),selectors:ee}})),[X,ee]);return(0,l.FD)(k,{className:z,isSelectedVizMetadata:Boolean(J),children:[(0,l.FD)(w,{"aria-label":(0,d.t)("Choose chart type"),role:"tablist",children:[(0,l.Y)(G,{css:({sizeUnit:e})=>m.AH`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:n.AllCharts,selector:C,icon:(0,l.Y)(b.F.Ballot,{iconSize:"m"}),isSelected:!q&&C===ie&&n.AllCharts===le,onClick:me}),(0,l.Y)(G,{css:({sizeUnit:e})=>m.AH`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:n.Featured,selector:U,icon:(0,l.Y)(b.F.FireOutlined,{iconSize:"m"}),isSelected:!q&&U===ie&&n.Featured===le,onClick:me}),(0,l.Y)(u.S,{expandIconPosition:"end",ghost:!0,defaultActiveKey:n.Category,items:Object.keys(pe).map((e=>{const t=pe[e];return{key:e,label:(0,l.Y)("span",{className:"header",children:t.title}),children:(0,l.Y)(l.FK,{children:t.selectors.map((i=>(0,l.Y)(G,{selector:i,sectionId:e,icon:t.icon,isSelected:!q&&i===ie&&e===le,onClick:me},i)))})}}))})]}),(0,l.Y)(F,{children:(0,l.Y)(h.A,{type:"text",ref:T,value:B,placeholder:(0,d.t)("Search all charts"),onChange:de,onFocus:se,prefix:(0,l.Y)(I,{children:(0,l.Y)(b.F.SearchOutlined,{iconSize:"m"})}),suffix:(0,l.Y)(I,{children:B&&(0,l.Y)(b.F.CloseOutlined,{iconSize:"m",onClick:ce})})})}),(0,l.Y)(A,{children:(0,l.Y)(V,{vizEntries:q?oe:ie===C&&le===n.AllCharts?te:ie===U&&le===n.Featured&&Z[U]?Z[U]:le===n.Category&&_[ie]?_[ie]:le===n.Tags&&Z[ie]?Z[ie]:[],selectedViz:o,setSelectedViz:s,onDoubleClick:c})}),J?(0,l.Y)("div",{css:e=>[E(e),D(e)],children:(0,l.FD)(l.FK,{children:[(0,l.FD)(S,{css:m.AH`
                grid-area: viz-name;
                position: relative;
              `,children:[null==J?void 0:J.name,(null==J?void 0:J.label)&&(0,l.Y)(g.m,{id:"viz-badge-tooltip",placement:"top",title:null!=(t=J.labelExplanation)?t:p.HE[J.label],children:(0,l.Y)(L,{children:(0,l.Y)(R,{children:(0,l.Y)("div",{children:(0,d.t)(J.label)})})})})]}),(0,l.Y)(O,{children:null==J?void 0:J.tags.map((e=>(0,l.Y)(x.JU,{css:({sizeUnit:e})=>m.AH`
                    margin-bottom: ${2*e}px;
                  `,children:e},e)))}),(0,l.Y)(H,{children:(0,d.t)((null==J?void 0:J.description)||"No description available.")}),(0,l.Y)(S,{css:m.AH`
                grid-area: examples-header;
              `,children:(0,d.t)("Examples")}),(0,l.Y)(N,{children:(null!=J&&null!=(i=J.exampleGallery)&&i.length?J.exampleGallery:[{url:null==J?void 0:J.thumbnail,caption:null==J?void 0:J.name}]).map((e=>(0,l.Y)("img",{src:e.url,alt:e.caption,title:e.caption},e.url)))})]})}):null]})}}}]);