"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1875],{10320:(e,t,i)=>{i.d(t,{Ay:()=>$});var n=i(9063),l=i.n(n),o=i(2445),r=i(96540),a=i(98250),s=i(50290),d=i(95018),c=i(90924),p=i(74098),u=i(8558),h=i(22802);const f=s.I4.div`
  font-weight: ${({theme:e})=>e.fontWeightStrong};
`,m=({text:e,header:t})=>{const i=(0,c.A)(e);return(0,o.FD)(o.FK,{children:[t&&(0,o.Y)(f,{children:t}),i.map((e=>(0,o.Y)("div",{children:e},e)))]})},w=16,x={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,owner:6,lastModified:7},g=s.I4.div`
  ${({theme:e,count:t})=>`\n    display: flex;\n    align-items: center;\n    padding: 8px 12px;\n    background-color: ${e.colorBgLayout};\n    color: ${e.colorTextTertiary};\n    font-size: ${e.fontSizeSM}px;\n    min-width: ${24+32*t-w}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 1;\n  `}
`,b=s.I4.div`
  ${({theme:e,collapsed:t,last:i,onClick:n})=>`\n    display: flex;\n    align-items: center;\n    max-width: ${174+(i?0:w)}px;\n    min-width: ${t?16+(i?0:w):94+(i?0:w)}px;\n    padding-right: ${i?0:w}px;\n    cursor: ${n?"pointer":"default"};\n    & .metadata-icon {\n      color: ${n&&t?e.colorPrimary:e.colorTextTertiary};\n      padding-right: ${t?0:8}px;\n      & .anticon {\n        line-height: 0;\n      }\n    }\n    & .metadata-text {\n      color: ${e.colorTextSecondary};\n      min-width: 70px;\n      overflow: hidden;\n      text-overflow: ${t?"unset":"ellipsis"};\n      white-space: nowrap;\n      text-decoration: ${n?"underline":"none"};\n      line-height: 1.4;\n    }\n  `}
`,v=s.I4.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,y=({barWidth:e,contentType:t,collapsed:i,last:n=!1,tooltipPlacement:l})=>{const{icon:a,title:s,tooltip:c=s}=(e=>{const{type:t}=e;switch(t){case h.Q.Dashboards:return{icon:u.F.FundProjectionScreenOutlined,title:e.title,tooltip:e.description?(0,o.Y)("div",{children:(0,o.Y)(m,{header:e.title,text:e.description})}):void 0};case h.Q.Description:return{icon:u.F.BookOutlined,title:e.value};case h.Q.LastModified:return{icon:u.F.EditOutlined,title:e.value,tooltip:(0,o.FD)("div",{children:[(0,o.Y)(m,{header:(0,p.t)("Last modified"),text:e.value}),(0,o.Y)(m,{header:(0,p.t)("Modified by"),text:e.modifiedBy})]})};case h.Q.Owner:return{icon:u.F.UserOutlined,title:e.createdBy,tooltip:(0,o.FD)("div",{children:[(0,o.Y)(m,{header:(0,p.t)("Created by"),text:e.createdBy}),!!e.owners&&(0,o.Y)(m,{header:(0,p.t)("Owners"),text:e.owners}),(0,o.Y)(m,{header:(0,p.t)("Created on"),text:e.createdOn})]})};case h.Q.Rows:return{icon:u.F.InsertRowBelowOutlined,title:e.title,tooltip:e.title};case h.Q.Sql:return{icon:u.F.ConsoleSqlOutlined,title:e.title,tooltip:e.title};case h.Q.Table:return{icon:u.F.InsertRowAboveOutlined,title:e.title,tooltip:e.title};case h.Q.Tags:return{icon:u.F.TagsOutlined,title:e.values.join(", "),tooltip:(0,o.Y)("div",{children:(0,o.Y)(m,{header:(0,p.t)("Tags"),text:e.values})})};default:throw Error(`Invalid type provided: ${t}`)}})(t),[f,w]=(0,r.useState)(!1),x=(0,r.useRef)(null),g=a,{type:y,onClick:$}=t;(0,r.useEffect)((()=>{w(!!x.current&&x.current.scrollWidth>x.current.clientWidth)}),[e,w,t]);const Y=(0,o.FD)(b,{collapsed:i,last:n,onClick:$?()=>$(y):void 0,role:$?"button":void 0,children:[(0,o.Y)(g,{iconSize:"l",className:"metadata-icon"}),!i&&(0,o.Y)("span",{ref:x,className:"metadata-text",children:s})]});return f||i||c&&c!==s?(0,o.Y)(d.m,{placement:l,title:(0,o.Y)(v,{children:c}),children:Y}):Y},$=({items:e,tooltipPlacement:t="top"})=>{const[i,n]=(0,r.useState)(),[s,d]=(0,r.useState)(!1),c=l()(e,((e,t)=>e.type===t.type)).sort(((e,t)=>x[e.type]-x[t.type])),p=c.length;if(p<2)throw Error("The minimum number of items for the metadata bar is 2.");if(p>6)throw Error("The maximum number of items for the metadata bar is 6.");const u=(0,r.useCallback)((e=>{const t=110*p-w;n(e),d(Boolean(e&&e<t))}),[p]),{ref:h}=(0,a.uZ)({onResize:u});return(0,o.Y)(g,{ref:h,count:p,children:c.map(((e,n)=>(0,o.Y)(y,{barWidth:i,contentType:e,collapsed:s,last:n===p-1,tooltipPlacement:t},n)))})}},22802:(e,t,i)=>{var n;i.d(t,{Q:()=>n}),function(e){e.Dashboards="dashboards",e.Description="description",e.LastModified="lastModified",e.Owner="owner",e.Rows="rows",e.Sql="sql",e.Table="table",e.Tags="tags"}(n||(n={}))},73306:(e,t,i)=>{i.d(t,{U:()=>$});var n=i(2445),l=i(17437),o=i(50290),r=i(74098),a=i(8558),s=i(40105),d=i(96540),c=i(98250),p=i(95018),u=i(17355);const h=e=>l.AH`
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
`,f=(0,d.memo)((({title:e,placeholder:t,onSave:i,canEdit:a,label:s})=>{const f=(0,o.DP)(),[m,w]=(0,d.useState)(!1),[x,g]=(0,d.useState)(!1),[b,v]=(0,d.useState)(e||""),{width:y,ref:$}=(0,c.uZ)(),{width:Y,ref:S}=(0,c.uZ)({refreshMode:"debounce"});(0,d.useEffect)((()=>{v(e)}),[e]),(0,d.useEffect)((()=>{if(m&&null!=$&&$.current&&$.current.setSelectionRange){const{length:e}=$.current.value;$.current.setSelectionRange(e,e),$.current.scrollLeft=$.current.scrollWidth}}),[m]),(0,d.useLayoutEffect)((()=>{null!=$&&$.current&&($.current.textContent=b||t)}),[b,t,$]),(0,d.useEffect)((()=>{var e;const t=null==(e=$.current)?void 0:e.input;t&&(t.scrollWidth>t.clientWidth?g(!0):g(!1))}),[y,Y]);const T=(0,d.useCallback)((()=>{a&&!m&&w(!0)}),[a,m]),k=(0,d.useCallback)((()=>{if(!a)return;const t=b.trim();v(t),e!==t&&i(t),w(!1)}),[a,b,i,e]),F=(0,d.useCallback)((e=>{a&&m&&v(e.target.value)}),[a,m]),z=(0,d.useCallback)((e=>{if(!a)return;e.preventDefault();const{activeElement:t}=document;t&&t instanceof HTMLElement&&t.blur()}),[a]);return(0,n.FD)("div",{css:h,ref:S,children:[(0,n.Y)(p.m,{id:"title-tooltip",title:x&&b&&!m?b:null,children:(0,n.Y)(u.A,{variant:"borderless","aria-label":null!=s?s:(0,r.t)("Title"),className:"dynamic-title-input",value:b,onChange:F,onBlur:k,onClick:T,onPressEnter:z,placeholder:t,css:l.AH`
              ${!a&&"&[disabled] {\n                  cursor: default;\n                }\n              "}
              font-size: ${f.fontSizeXL}px;
              transition: auto;
              ${y&&y>0&&l.AH`
                width: ${y}px;
              `}
            `,disabled:!a})}),(0,n.Y)("span",{ref:$,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})}));var m=i(28827),w=i(54569),x=i(88217);const g=e=>l.AH`
  width: ${8*e.sizeUnit}px;
  height: ${8*e.sizeUnit}px;
  padding: 0;
  border: 1px solid ${e.colorPrimary};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }
`,b=e=>l.AH`
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
`,v=e=>l.AH`
  display: flex;
  align-items: center;
  padding-left: ${2*e.sizeUnit}px;

  & .anticon-star {
    padding: 0 ${e.sizeUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,y=e=>l.AH`
  margin-left: ${2*e.sizeUnit}px;
`,$=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:i,showFaveStar:l,faveStarProps:d,titlePanelAdditionalItems:c,rightPanelAdditionalItems:p,additionalActionsMenu:u,menuDropdownProps:h,showMenuDropdown:$=!0,tooltipProps:Y})=>{const S=(0,o.DP)();return(0,n.FD)("div",{css:b,className:"header-with-actions",children:[(0,n.FD)("div",{className:"title-panel",children:[(0,n.Y)(f,{...e}),t&&(0,n.FD)("div",{css:v,children:[(null==i?void 0:i.certifiedBy)&&(0,n.Y)(w.T,{...i}),l&&(0,n.Y)(s.$,{...d}),c]})]}),(0,n.FD)("div",{className:"right-button-panel",children:[p,(0,n.Y)("div",{css:y,children:$&&(0,n.Y)(m.ms,{trigger:["click"],popupRender:()=>u,...h,children:(0,n.Y)(x.$,{css:g,buttonStyle:"tertiary","aria-label":(0,r.t)("Menu actions trigger"),tooltip:null==Y?void 0:Y.text,placement:null==Y?void 0:Y.placement,children:(0,n.Y)(a.F.EllipsisOutlined,{iconColor:S.colorPrimary,iconSize:"l"})})})})]})]})}}}]);