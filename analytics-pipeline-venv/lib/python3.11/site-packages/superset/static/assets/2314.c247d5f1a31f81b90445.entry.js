"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2314],{15607:(e,t,i)=>{i.d(t,{A:()=>w});var l=i(33031),r=i.n(l),n=i(2445),o=i(96540),a=i(74098),s=i(50290),c=i(17437),d=i(14240),h=i(45776),p=i(14503),u=i(18865),f=i(95018),m=i(2801),b=i(8558),g=i(78752);function F(e){const{id:t,label:i,colors:l}=e,[r,a]=(0,o.useState)(!1),s=(0,o.useRef)(null),d=(0,o.useRef)(null),h=()=>l.map(((e,i)=>(0,n.Y)("span",{css:t=>c.AH`
          padding-left: ${t.sizeUnit/2}px;
          :before {
            content: '';
            display: inline-block;
            background-color: ${e};
            border: 1px solid ${"white"===e?"black":e};
            width: 9px;
            height: 10px;
          }
        `},`${t}-${i}`)));return(0,n.Y)(f.m,{"data-testid":"tooltip",overlayClassName:"color-scheme-tooltip",title:()=>(0,n.FD)(n.FK,{children:[(0,n.Y)("span",{children:i}),(0,n.Y)("div",{children:h()})]}),open:r,children:(0,n.FD)("span",{className:"color-scheme-option",onMouseEnter:()=>{const e=s.current,t=d.current;e&&t&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight||t.scrollWidth>t.offsetWidth||t.scrollHeight>t.offsetHeight)&&a(!0)},onMouseLeave:()=>{a(!1)},css:c.AH`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `,children:[(0,n.Y)("span",{className:"color-scheme-label",ref:s,css:e=>c.AH`
            min-width: 125px;
            padding-right: ${2*e.sizeUnit}px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `,children:i}),(0,n.Y)("span",{ref:d,css:e=>c.AH`
            flex: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-right: ${e.sizeUnit}px;
          `,children:h()})]})},t)}const v=(0,a.t)("The colors of this chart might be overridden by custom label colors of the related dashboard.\n    Check the JSON metadata in the Advanced settings."),x=(0,a.t)("The color scheme is determined by the related dashboard.\n        Edit the color scheme in the dashboard properties."),C=(0,a.t)("You are viewing this chart in a dashboard context with labels shared across multiple charts.\n        The color scheme selection is disabled."),y=(0,a.t)("You are viewing this chart in the context of a dashboard that is directly affecting its colors.\n        To edit the color scheme, open this chart outside of the dashboard."),S=({label:e,dashboardId:t,hasSharedLabelsColor:i,hasCustomLabelsColor:l,hasDashboardColorScheme:r})=>{const o=(0,s.DP)();if(i||l||r){const a=l&&!i?v:t&&r?x:C;return(0,n.FD)(n.FK,{children:[e," ",(0,n.Y)(f.m,{title:a,children:(0,n.Y)(b.F.WarningOutlined,{iconColor:o.colorWarning,css:c.AH`
              vertical-align: baseline;
            `,iconSize:"s"})})]})}return(0,n.Y)(n.FK,{children:e})},w=({hasCustomLabelsColor:e=!1,hasDashboardColorScheme:t=!1,mapLabelsColors:i={},sharedLabelsColors:l=[],dashboardId:b,colorNamespace:v,chartId:x,label:C=(0,a.t)("Color scheme"),onChange:w=()=>{},value:Y,clearable:k=!1,defaultScheme:$,choices:A=[],schemes:T={},isLinear:z,...N})=>{var D;const I=l.length,O=(0,d.Ay)(),E=x&&(null==(D=O.chartsLabelsMap.get(x))?void 0:D.labels)||[],U=!!(b&&I>0&&E.some((e=>l.includes(e)))),M=b&&t,L=M||U,j=(0,s.DP)(),_=(0,o.useMemo)((()=>{if(L)return"dashboard";let e=Y||$;if("SUPERSET_DEFAULT"===e){var t;const i="function"==typeof T?T():T;e=null==i||null==(t=i.SUPERSET_DEFAULT)?void 0:t.id}return e}),[$,T,L,Y]),R=(0,o.useMemo)((()=>{if(L)return[{value:"dashboard",label:(0,n.Y)(f.m,{title:y,children:(0,a.t)("Dashboard scheme")})}];const e="function"==typeof T?T():T,t="function"==typeof A?A():A,i=[],l=t.filter((e=>{const t=e[0],l="SUPERSET_DEFAULT"!==t&&!i.includes(t);return i.push(t),l})).reduce(((t,[i])=>{var l;const r=e[i];let o=[];r&&(o=z?r.getColors(10):r.colors);const a={label:(0,n.Y)(F,{id:r.id,label:r.label,colors:o}),value:i,searchText:r.label};return t[null!=(l=r.group)?l:h.w.Other].options.push(a),t}),{[h.w.Custom]:{title:h.w.Custom,label:(0,a.t)("Custom color palettes"),options:[]},[h.w.Featured]:{title:h.w.Featured,label:(0,a.t)("Featured color palettes"),options:[]},[h.w.Other]:{title:h.w.Other,label:(0,a.t)("Other color palettes"),options:[]}}),o=Object.values(l).filter((e=>e.options.length>0)).map((e=>({...e,options:r()(e.options,(e=>e.label))})));return 1===o.length&&o[0].title===h.w.Other?o[0].options.map((e=>({value:e.value,label:e.customLabel||e.label}))):o.map((e=>({label:e.label,options:e.options.map((e=>({value:e.value,label:e.customLabel||e.label,searchText:e.searchText})))})))}),[A,M,U,z,T]);return(0,n.FD)(n.FK,{children:[(0,n.Y)(u.A,{...N,label:(0,n.Y)(S,{label:C,dashboardId:b,hasCustomLabelsColor:e,hasDashboardColorScheme:t,hasSharedLabelsColor:U})}),(0,n.Y)(m.A,{css:c.AH`
          width: 100%;
          & .ant-select-item.ant-select-item-group {
            padding-left: ${j.sizeUnit}px;
            font-size: ${j.fontSize}px;
          }
          & .ant-select-item-option-grouped {
            padding-left: ${3*j.sizeUnit}px;
          }
        `,"aria-label":(0,a.t)("Select color scheme"),allowClear:k,disabled:M||U,onChange:e=>{if(x&&(O.setOwnColorScheme(x,e),b)){const e=(0,g.Z6)(v),t=p.getNamespace(e),r=new Set(l),n=Object.keys(i).filter((e=>!r.has(e)));t.resetColorsForLabels(n)}w(e)},placeholder:(0,a.t)("Select scheme"),value:_,showSearch:!0,getPopupContainer:e=>e.parentNode,options:R,optionFilterProps:["label","value","searchText"]})]})}},18315:(e,t,i)=>{i.d(t,{FA:()=>c,Ik:()=>p,dH:()=>h,iQ:()=>s,un:()=>d});var l=i(79378),r=i(58561),n=i.n(r),o=i(47068);const a=Object.freeze(["dashboard","chart","saved_query"]),s=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"});function c(e,t,i){l.A.get({endpoint:`/api/v1/tag/${e}`}).then((({json:e})=>t(e.result))).catch((e=>i(e)))}function d({objectType:e,objectId:t},i,r){if(void 0===e||void 0===t)throw new Error("Need to specify objectType and objectId");if(!a.includes(e))throw new Error(`objectType ${e} is invalid`);l.A.get({endpoint:`/api/v1/${e}/${t}`}).then((({json:e})=>i(e.result.tags.filter((e=>e.type===o.U.Custom))))).catch((e=>r(e)))}function h(e,t,i){const r=e.map((e=>e.name));l.A.delete({endpoint:`/api/v1/tag/?q=${n().encode(r)}`}).then((({json:e})=>e.message?t(e.message):t("Successfully Deleted Tag"))).catch((e=>{const t=e.message;return i(t||"Error Deleting Tag")}))}function p({tagIds:e=[],types:t},i,r){let n=`/api/v1/tag/get_objects/?tagIds=${e}`;t&&(n+=`&types=${t}`),l.A.get({endpoint:n}).then((({json:e})=>i(e.result))).catch((e=>r(e)))}},18865:(e,t,i)=>{i.d(t,{A:()=>p});var l=i(2445),r=i(17437),n=i(50290),o=i(74098),a=i(95018),s=i(5250),c=i(23195),d=i(8558);const h=r.AH`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,p=({name:e,label:t,description:i,validationErrors:p=[],renderTrigger:u=!1,rightNode:f,leftNode:m,onClick:b,hovered:g=!1,tooltipOnClick:F=()=>{},warning:v,danger:x})=>{const C=(0,n.DP)();return t?(0,l.FD)("div",{className:"ControlHeader",children:[(0,l.Y)("div",{className:"pull-left",children:(0,l.FD)(c.l,{css:e=>r.AH`
            margin-bottom: ${.5*e.sizeUnit}px;
            position: relative;
            font-size: ${e.fontSizeSM}px;
          `,htmlFor:e,children:[m&&(0,l.FD)("span",{children:[m," "]}),(0,l.Y)("span",{role:"button",tabIndex:0,onClick:b,style:{cursor:b?"pointer":""},children:t})," ",v&&(0,l.FD)("span",{children:[(0,l.Y)(a.m,{id:"error-tooltip",placement:"top",title:v,children:(0,l.Y)(d.F.WarningOutlined,{iconColor:C.colorWarning,css:r.AH`
                    vertical-align: baseline;
                  `,iconSize:"s"})})," "]}),x&&(0,l.FD)("span",{children:[(0,l.Y)(a.m,{id:"error-tooltip",placement:"top",title:x,children:(0,l.Y)(d.F.CloseCircleOutlined,{iconColor:C.colorErrorText,iconSize:"s"})})," "]}),(null==p?void 0:p.length)>0&&(0,l.FD)("span",{css:r.AH`
                cursor: pointer;
              `,children:[(0,l.Y)(a.m,{id:"error-tooltip",placement:"top",title:null==p?void 0:p.join(" "),children:(0,l.Y)(d.F.ExclamationCircleOutlined,{iconColor:C.colorError})})," "]}),g?(0,l.FD)("span",{css:()=>r.AH`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${C.sizeUnit}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `,children:[i&&(0,l.FD)("span",{children:[(0,l.Y)(a.m,{id:"description-tooltip",title:i,placement:"top",children:(0,l.Y)(d.F.InfoCircleOutlined,{css:h,onClick:F})})," "]}),u&&(0,l.FD)("span",{children:[(0,l.Y)(s.I,{label:(0,o.t)("bolt"),tooltip:(0,o.t)("Changing this control takes effect instantly"),placement:"top",type:"notice"})," "]})]}):null]})}),f&&(0,l.Y)("div",{className:"pull-right",children:f}),(0,l.Y)("div",{className:"clearfix"})]}):null}},23314:(e,t,i)=>{i.d(t,{A:()=>B});var l=i(90179),r=i.n(l),n=i(2445),o=i(96540),a=i(75086),s=i.n(a),c=i(52167),d=i(65729),h=i(97163),p=i(47152),u=i(16370),f=i(42566),m=i(82384),b=i(49965),g=i(88217),F=i(17355),v=i(8558),x=i(45207),C=i(58561),y=i.n(C),S=i(50290),w=i(74098),Y=i(96548),k=i(59744),$=i(79378),A=i(90924),T=i(99106),z=i(17437),N=i(15607);const D=({colorScheme:e,hasCustomLabelsColor:t=!1,hovered:i=!1,onChange:l=()=>{}})=>{const[r,a]=(0,o.useState)([]),[s,c]=(0,o.useState)({});return(0,o.useEffect)((()=>{const e=(0,Y.A)();a(e.keys().map((e=>[e,e]))),c(e.getMap())}),[]),(0,n.Y)(N.A,{description:(0,w.t)("Any color palette selected here will override the colors applied to this dashboard's individual charts"),name:"color_scheme",onChange:l,value:null!=e?e:"",choices:r,clearable:!0,hovered:i,schemes:s,hasCustomLabelsColor:t})};var I=i(54752),O=i(64457),E=i(18315),U=i(57771),M=i(78752),L=i(58486),j=i(61225),_=i(91448),R=i(37203),H=i(51692);const P=(0,S.I4)(c.iN)`
  /* Border is already applied by AceEditor itself */
`,B=(0,O.Ay)((({addSuccessToast:e,addDangerToast:t,colorScheme:i,dashboardId:l,dashboardInfo:a,dashboardTitle:C,onHide:S=()=>{},onlyApply:N=!1,onSubmit:O=()=>{},show:B=!1})=>{const q=(0,j.wA)(),[K]=d.l.useForm(),[V,W]=(0,o.useState)(!1),[J,Z]=(0,o.useState)(!1),[G,Q]=(0,o.useState)(i),[X,ee]=(0,o.useState)(""),[te,ie]=(0,o.useState)(),le=(0,x.p)(X,{errorPrefix:"Invalid JSON metadata"}),[re,ne]=(0,o.useState)([]),[oe,ae]=(0,o.useState)([]),se=N?(0,w.t)("Apply"):(0,w.t)("Save"),[ce,de]=(0,o.useState)([]),he=(0,Y.A)(),pe=(0,o.useRef)({}),ue=(0,o.useMemo)((()=>ce.map((e=>({value:e.id,label:e.name})))),[ce.length]),fe=async e=>{const{error:t,statusText:i,message:l}=await(0,k.h4)(e);let r=t||i||(0,w.t)("An error has occurred");"object"==typeof l&&"json_metadata"in l?r=l.json_metadata:"string"==typeof l&&(r=l,"Forbidden"===l&&(r=(0,w.t)("You do not have permission to edit this dashboard"))),h.aF.error({title:(0,w.t)("Error"),content:r,okButtonProps:{danger:!0,className:"btn-danger"}})},me=(0,o.useCallback)(((e="owners",t="",i,l)=>{const r=y().encode({filter:t,page:i,page_size:l});return $.A.get({endpoint:`/api/v1/dashboard/related/${e}?q=${r}`}).then((e=>({data:e.json.result.filter((e=>void 0===e.extra.active||e.extra.active)).map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),be=(0,o.useCallback)((e=>{const{id:t,dashboard_title:i,slug:l,certified_by:n,certification_details:o,owners:a,roles:c,metadata:d,is_managed_externally:h}=e,p={id:t,title:i,slug:l||"",certifiedBy:n||"",certificationDetails:o||"",isManagedExternally:h||!1,metadata:d};K.setFieldsValue(p),ie(p),ne(a),ae(c),Q(d.color_scheme);const u=r()(d,["positions","shared_label_colors","map_label_colors","color_scheme_domain"]);ee(u?s()(u):""),pe.current=d}),[K]),ge=(0,o.useCallback)((()=>{W(!0),$.A.get({endpoint:`/api/v1/dashboard/${l}`}).then((e=>{var t;const i=e.json.result,l=null!=(t=i.json_metadata)&&t.length?JSON.parse(i.json_metadata):{};be({...i,metadata:l}),W(!1)}),fe)}),[l,be]),Fe=()=>{try{return null!=X&&X.length?JSON.parse(X):{}}catch(e){return{}}},ve=e=>{const t=(0,A.A)(e).map((e=>({id:e.value,full_name:e.label})));ne(t)},xe=e=>{const t=(0,A.A)(e).map((e=>({id:e.value,name:e.label})));ae(t)},Ce=()=>(re||[]).map((e=>({value:e.id,label:(0,L.A)(e)}))),ye=()=>S(),Se=(e="",{updateMetadata:t=!0}={})=>{const i=he.keys(),l=Fe();if(e&&!i.includes(e))throw h.aF.error({title:(0,w.t)("Error"),content:(0,w.t)("A valid color scheme is required"),okButtonProps:{danger:!0,className:"btn-danger"}}),S(),new Error("A valid color scheme is required");l.color_scheme=e,l.label_colors=l.label_colors||{},Q(e),q((0,_.r7)(e)),t&&ee(s()(l))};return(0,o.useEffect)((()=>{B&&(a?be(a):ge()),c.iN.preload()}),[a,ge,be,B]),(0,o.useEffect)((()=>{C&&te&&te.title!==C&&K.setFieldsValue({...te,title:C})}),[te,C,K]),(0,o.useEffect)((()=>{if((0,T.G7)(T.TO.TaggingSystem))try{(0,E.un)({objectType:E.iQ.DASHBOARD,objectId:l,includeTypes:!1},(e=>de(e)),(e=>{t(`Error fetching tags: ${e.text}`)}))}catch(e){fe(e)}}),[l]),(0,n.Y)(h.aF,{show:B,onHide:ye,title:(0,n.Y)(H.r,{isEditMode:!0,title:(0,w.t)("Dashboard properties")}),footer:(0,n.FD)(n.FK,{children:[(0,n.Y)(g.$,{htmlType:"button",buttonSize:"small",buttonStyle:"secondary",onClick:ye,cta:!0,children:(0,w.t)("Cancel")}),(0,n.Y)(g.$,{onClick:K.submit,buttonSize:"small",buttonStyle:"primary",cta:!0,disabled:null==te?void 0:te.isManagedExternally,tooltip:null!=te&&te.isManagedExternally?(0,w.t)("This dashboard is managed externally, and can't be edited in Superset"):"",children:se})]}),responsive:!0,children:(0,n.FD)(d.l,{form:K,onFinish:()=>{var r,n,o,a;const{title:c,slug:d,certifiedBy:h,certificationDetails:p}=K.getFieldsValue();let u,f=X;try{if(!f.startsWith("{")||!f.endsWith("}"))throw new Error;u=JSON.parse(f)}catch(e){return void t((0,w.t)("JSON metadata is invalid!"))}const m=(0,M.Z6)(null==(r=u)?void 0:r.color_namespace),b=(null==(n=u)?void 0:n.color_scheme)||G,g=b!==pe.current.color_scheme,F=!(0,R.r$)(pe.current.label_colors||{},(null==(o=u)?void 0:o.label_colors)||{}),v=Object.keys((null==(a=u)?void 0:a.label_colors)||{}),x=Object.keys(pe.current.label_colors||{}),C=v.length>0?v:x,y=!!(F&&C.length>0)&&C,Y=Fe().label_colors||{},k={...pe.current,label_colors:Y,color_scheme:b};pe.current=k,(0,M.D2)(k,g||y),q((0,_.Qn)({...k,map_label_colors:(0,M.xV)(Y)})),Se(b,{updateMetadata:!1}),f=s()(u);const A={},z={};(0,T.G7)(T.TO.DashboardRbac)&&(A.roles=oe,z.roles=(oe||[]).map((e=>e.id))),(0,T.G7)(T.TO.TaggingSystem)&&(A.tags=ce,z.tags=ce.map((e=>e.id)));const D={id:l,title:c,slug:d,jsonMetadata:f,owners:re,colorScheme:i,colorNamespace:m,certifiedBy:h,certificationDetails:p,...A};N?(O(D),S(),e((0,w.t)("Dashboard properties updated"))):$.A.put({endpoint:`/api/v1/dashboard/${l}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({dashboard_title:c,slug:d||null,json_metadata:f||null,owners:(re||[]).map((e=>e.id)),certified_by:h||null,certification_details:h&&p?p:null,...z})}).then((()=>{O(D),S(),e((0,w.t)("The dashboard has been saved"))}),fe)},layout:"vertical",initialValues:te,children:[(0,n.Y)(p.A,{children:(0,n.Y)(u.A,{xs:24,md:24,children:(0,n.Y)(f.o.Title,{level:4,children:(0,w.t)("Basic information")})})}),(0,n.FD)(p.A,{gutter:16,children:[(0,n.Y)(u.A,{xs:24,md:12,children:(0,n.Y)(m.e,{label:(0,w.t)("Name"),name:"title",extra:(0,w.t)("A readable URL for your dashboard"),children:(0,n.Y)(F.A,{type:"text",disabled:V})})}),(0,n.Y)(u.A,{xs:24,md:12,children:(0,n.Y)(m.e,{label:(0,w.t)("URL slug"),name:"slug",children:(0,n.Y)(F.A,{type:"text",disabled:V})})})]}),(0,T.G7)(T.TO.DashboardRbac)?(()=>{const e=Fe(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,n.FD)(n.FK,{children:[(0,n.Y)(p.A,{children:(0,n.Y)(u.A,{xs:24,md:24,children:(0,n.Y)(f.o.Title,{level:4,style:{marginTop:"1em"},children:(0,w.t)("Access")})})}),(0,n.FD)(p.A,{gutter:16,children:[(0,n.Y)(u.A,{xs:24,md:12,children:(0,n.Y)(m.e,{label:(0,w.t)("Owners"),extra:(0,w.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."),children:(0,n.Y)(b.A,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,w.t)("Owners"),disabled:V,mode:"multiple",onChange:ve,options:(e,t,i)=>me("owners",e,t,i),value:Ce()})})}),(0,n.Y)(u.A,{xs:24,md:12,children:(0,n.Y)(m.e,{label:(0,w.t)("Roles"),extra:"Roles is a list which defines access to the dashboard. Granting a role access to a dashboard will bypass dataset level checks. If no roles are defined, regular access permissions apply.",children:(0,n.Y)(b.A,{allowClear:!0,ariaLabel:(0,w.t)("Roles"),disabled:V,mode:"multiple",onChange:xe,options:(e,t,i)=>me("roles",e,t,i),value:(oe||[]).map((e=>({value:e.id,label:`${e.name}`})))})})})]}),(0,n.Y)(p.A,{children:(0,n.Y)(u.A,{xs:24,md:12,children:(0,n.Y)(D,{hasCustomLabelsColor:t,onChange:Se,colorScheme:G})})})]})})():(()=>{const e=Fe(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,n.FD)(p.A,{gutter:16,children:[(0,n.FD)(u.A,{xs:24,md:12,children:[(0,n.Y)(f.o.Title,{level:4,style:{marginTop:"1em"},children:(0,w.t)("Access")}),(0,n.Y)(m.e,{label:(0,w.t)("Owners"),extra:(0,w.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."),children:(0,n.Y)(b.A,{allowClear:!0,ariaLabel:(0,w.t)("Owners"),disabled:V,mode:"multiple",onChange:ve,options:(e,t,i)=>me("owners",e,t,i),value:Ce()})})]}),(0,n.FD)(u.A,{xs:24,md:12,children:[(0,n.Y)(f.o.Title,{level:4,style:{marginTop:"1em"},children:(0,w.t)("Colors")}),(0,n.Y)(D,{hasCustomLabelsColor:t,onChange:Se,colorScheme:G})]})]})})(),(0,n.Y)(p.A,{children:(0,n.Y)(u.A,{xs:24,md:24,children:(0,n.Y)(f.o.Title,{level:4,children:(0,w.t)("Certification")})})}),(0,n.FD)(p.A,{gutter:16,children:[(0,n.Y)(u.A,{xs:24,md:12,children:(0,n.Y)(m.e,{label:(0,w.t)("Certified by"),name:"certifiedBy",extra:(0,w.t)("Person or group that has certified this dashboard."),children:(0,n.Y)(F.A,{type:"text",disabled:V})})}),(0,n.Y)(u.A,{xs:24,md:12,children:(0,n.Y)(m.e,{label:(0,w.t)("Certification details"),name:"certificationDetails",extra:(0,w.t)("Any additional detail to show in the certification tooltip."),children:(0,n.Y)(F.A,{type:"text",disabled:V})})})]}),(0,T.G7)(T.TO.TaggingSystem)?(0,n.Y)(p.A,{gutter:16,children:(0,n.Y)(u.A,{xs:24,md:12,children:(0,n.Y)(f.o.Title,{level:4,css:{marginTop:"1em"},children:(0,w.t)("Tags")})})}):null,(0,T.G7)(T.TO.TaggingSystem)?(0,n.Y)(p.A,{gutter:16,children:(0,n.Y)(u.A,{xs:24,md:12,children:(0,n.Y)(m.e,{extra:(0,w.t)("A list of tags that have been applied to this chart."),children:(0,n.Y)(b.A,{ariaLabel:"Tags",mode:"multiple",value:ue,options:U.m,onChange:e=>{const t=(0,A.A)(e).map((e=>({id:e.value,name:e.label})));de(t)},onClear:()=>{de([])},allowClear:!0})})})}):null,(0,n.Y)(p.A,{children:(0,n.FD)(u.A,{xs:24,md:24,children:[(0,n.Y)(f.o.Title,{level:4,style:{marginTop:"1em"},children:(0,n.FD)(g.$,{buttonStyle:"link",onClick:()=>Z(!J),css:z.AH`
                  padding: 0;
                `,children:[(0,w.t)("Advanced"),J?(0,n.Y)(v.F.UpOutlined,{}):(0,n.Y)(v.F.DownOutlined,{})]})}),J&&(0,n.Y)(n.FK,{children:(0,n.Y)(m.e,{label:(0,w.t)("JSON metadata"),extra:(0,n.FD)("div",{children:[(0,w.t)("This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters."),N&&(0,n.FD)(n.FK,{children:[" ",(0,w.t)('Please DO NOT overwrite the "filter_scopes" key.')," ",(0,n.Y)(I.A,{triggerNode:(0,n.Y)("span",{className:"alert-link",children:(0,w.t)('Use "%(menuName)s" menu instead.',{menuName:(0,w.t)("Set filter mapping")})})})]})]}),children:(0,n.Y)(P,{showLoadingForImport:!0,name:"json_metadata",value:X,onChange:ee,tabSize:2,width:"100%",height:"200px",wrapEnabled:!0,annotations:le})})})]})})]})})}))},39046:(e,t,i)=>{i.d(t,{$:()=>s});var l=i(2445),r=i(96540),n=i(50290),o=i(75574);const a=n.I4.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function s({src:e,fallback:t,isLoading:i,position:n,...s}){const[c,d]=(0,r.useState)(t);return(0,r.useEffect)((()=>(e&&fetch(e).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=URL.createObjectURL(e);d(t)}})).catch((e=>{o.A.error(e),d(t)})),()=>{d(t)})),[e,t]),(0,l.Y)(a,{src:i?t:c,...s,position:n})}},40105:(e,t,i)=>{i.d(t,{$:()=>h});var l=i(2445),r=i(96540),n=i(50290),o=i(17437),a=i(74098),s=i(8558),c=i(95018);const d=n.I4.a`
  ${({theme:e})=>o.AH`
    font-size: ${e.fontSizeXL}px;
    display: flex;
    padding: 0 0 0 ${2*e.sizeUnit}px;
  `};
`,h=({itemId:e,isStarred:t,showTooltip:i,saveFaveStar:o,fetchFaveStar:h})=>{const p=(0,n.DP)();(0,r.useEffect)((()=>{null==h||h(e)}),[h,e]);const u=(0,r.useCallback)((i=>{i.preventDefault(),o(e,!!t)}),[t,e,o]),f=(0,l.Y)(d,{href:"#",onClick:u,className:"fave-unfave-icon",role:"button",children:t?(0,l.Y)(s.F.StarFilled,{"aria-label":"starred",iconSize:"l",iconColor:p.colorWarning,name:"favorite-selected"}):(0,l.Y)(s.F.StarOutlined,{"aria-label":"unstarred",iconSize:"l",iconColor:p.colorTextTertiary,name:"favorite-unselected"})});return i?(0,l.Y)(c.m,{id:"fave-unfave-tooltip",title:(0,a.t)("Click to favorite/unfavorite"),children:f}):f}},40815:(e,t,i)=>{i.d(t,{x:()=>s});var l=i(2445),r=i(8558),n=i(50290),o=i(74098),a=i(27509);const s=({isPublished:e,onClick:t})=>{const i=(0,n.DP)(),s=e?(0,o.t)("Published"):(0,o.t)("Draft"),c=e?(0,l.Y)(r.F.CheckCircleOutlined,{iconSize:"s",iconColor:i.colorSuccess}):(0,l.Y)(r.F.MinusCircleOutlined,{iconSize:"s",iconColor:i.colorPrimary}),d=e?"success":"primary";return(0,l.Y)(a.JU,{type:d,icon:c,onClick:t,style:{color:e?i.colorSuccessText:i.colorPrimaryText},children:s})}},47068:(e,t,i)=>{var l;i.d(t,{U:()=>l}),function(e){e[e.Custom=1]="Custom",e[e.Type=2]="Type",e[e.Owner=3]="Owner",e[e.FavoritedBy=4]="FavoritedBy"}(l||(l={}))},54569:(e,t,i)=>{i.d(t,{T:()=>s});var l=i(2445),r=i(50290),n=i(74098),o=i(8558),a=i(95018);function s({certifiedBy:e,details:t,size:i="l"}){const s=(0,r.DP)();return(0,l.Y)(a.m,{id:"certified-details-tooltip",title:(0,l.FD)(l.FK,{children:[e&&(0,l.Y)("div",{children:(0,l.Y)("strong",{children:(0,n.t)("Certified by %s",e)})}),(0,l.Y)("div",{children:t})]}),children:(0,l.Y)(o.F.Certified,{iconColor:s.colorPrimary,iconSize:i})})}},54752:(e,t,i)=>{i.d(t,{A:()=>be});var l=i(2445),r=i(96540),n=i(50290),o=i(41876),a=i(61225),s=i(82960),c=i(85179),d=i(91448),h=i(5556),p=i.n(h),u=i(46942),f=i.n(u),m=i(17355),b=i(88217),g=i(17437),F=i(74098),v=i(62193),x=i.n(v),C=i(91003),y=i(29624);const S=[y.B8,y.tq];function w({currentNode:e={},components:t={},filterFields:i=[],selectedChartId:l}){if(!e)return null;const{type:r}=e;if(y.oT===r&&e&&e.meta&&e.meta.chartId)return{value:e.meta.chartId,label:e.meta.sliceName||`${r} ${e.meta.chartId}`,type:r,showCheckbox:l!==e.meta.chartId,children:[]};let n=[];if(e.children&&e.children.length&&e.children.forEach((e=>{const r=w({currentNode:t[e],components:t,filterFields:i,selectedChartId:l}),o=t[e].type;S.includes(o)?n.push(r):n=n.concat(r)})),S.includes(r)){let t=null;return t=r===y.tq?(0,F.t)("All charts"):e.meta&&e.meta.text?e.meta.text:`${r} ${e.id}`,{value:e.id,label:t,type:r,children:n}}return n}function Y({components:e={},filterFields:t=[],selectedChartId:i}){return x()(e)?[]:[{...w({currentNode:e[C.wv],components:e,filterFields:t,selectedChartId:i})}]}function k(e=[],t=-1){const i=[],l=(e,r)=>{e&&e.children&&(-1===t||r<t)&&(i.push(e.value),e.children.forEach((e=>l(e,r+1))))};return e.length>0&&e.forEach((e=>{l(e,0)})),i}var $=i(91518);function A({activeFilterField:e,checkedFilterFields:t}){return(0,$.J)(e?[e]:t)}var T=i(65091);function z({activeFilterField:e,checkedFilterFields:t}){if(e)return(0,T.w)(e).chartId;if(t.length){const{chartId:e}=(0,T.w)(t[0]);return t.some((t=>(0,T.w)(t).chartId!==e))?null:e}return null}function N({checkedFilterFields:e=[],activeFilterField:t,filterScopeMap:i={},layout:l={}}){const r=A({checkedFilterFields:e,activeFilterField:t}),n=t?[t]:e,o=Y({components:l,filterFields:n,selectedChartId:z({checkedFilterFields:e,activeFilterField:t})}),a=new Set;n.forEach((e=>{(i[e].checked||[]).forEach((t=>{a.add(`${t}:${e}`)}))}));const s=[...a],c=i[r]?i[r].expanded:k(o,1);return{[r]:{nodes:o,nodesFiltered:[...o],checked:s,expanded:c}}}var D=i(47307),I=i.n(D),O=i(89143),E=i.n(O),U=i(8209),M=i.n(U),L=i(89899),j=i.n(L);function _({tabScopes:e,parentNodeValue:t,forceAggregate:i=!1,hasChartSiblings:l=!1,tabChildren:r=[],immuneChartSiblings:n=[]}){if(i||!l&&Object.entries(e).every((([e,{scope:t}])=>t&&t.length&&e===t[0]))){const i=function({tabs:e=[],tabsInScope:t=[]}){const i=[];return e.forEach((({value:e,children:l})=>{l&&!t.includes(e)&&l.forEach((({value:e,children:l})=>{l&&!t.includes(e)&&i.push(...l.filter((({type:e})=>e===y.oT)))}))})),i.map((({value:e})=>e))}({tabs:r,tabsInScope:I()(e,(({scope:e})=>e))}),l=I()(Object.values(e),(({immune:e})=>e));return{scope:[t],immune:[...new Set([...i,...l])]}}const o=Object.values(e).filter((({scope:e})=>e&&e.length));return{scope:I()(o,(({scope:e})=>e)),immune:o.length?I()(o,(({immune:e})=>e)):I()(Object.values(e),(({immune:e})=>e)).concat(n)}}function R({currentNode:e={},filterId:t,checkedChartIds:i=[]}){if(!e)return{};const{value:l,children:r}=e,n=r.filter((({type:e})=>e===y.oT)),o=r.filter((({type:e})=>e===y.B8)),a=n.filter((({value:e})=>t!==e&&!i.includes(e))).map((({value:e})=>e)),s=j()(M()((e=>e.value)),E()((e=>R({currentNode:e,filterId:t,checkedChartIds:i}))))(o);if(!x()(n)&&n.some((({value:e})=>i.includes(e)))){if(x()(o))return{scope:[l],immune:a};const{scope:e,immune:t}=_({tabScopes:s,parentNodeValue:l,forceAggregate:!0,tabChildren:o});return{scope:e,immune:a.concat(t)}}return o.length?_({tabScopes:s,parentNodeValue:l,hasChartSiblings:!x()(n),tabChildren:o,immuneChartSiblings:a}):{scope:[],immune:a}}function H({filterKey:e,nodes:t=[],checkedChartIds:i=[]}){if(t.length){const{chartId:l}=(0,T.w)(e);return R({currentNode:t[0],filterId:l,checkedChartIds:i})}return{}}var P=i(15830),B=i(68064),q=i(38491),K=i.n(q),V=i(8558);const W=(0,n.I4)(V.F.BarChartOutlined)`
  ${({theme:e})=>`\n    position: relative;\n    top: ${e.sizeUnit-1}px;\n    color: ${e.colorPrimary};\n    margin-right: ${2*e.sizeUnit}px;\n  `}
`;function J({currentNode:e={},selectedChartId:t}){if(!e)return null;const{label:i,value:r,type:n,children:o}=e;if(o&&o.length){const a=o.map((e=>J({currentNode:e,selectedChartId:t})));return{...e,label:(0,l.FD)("span",{className:f()(`filter-scope-type ${n.toLowerCase()}`,{"selected-filter":t===r}),children:[n===y.oT&&(0,l.Y)(W,{}),i]}),children:a}}return{...e,label:(0,l.Y)("span",{className:f()(`filter-scope-type ${n.toLowerCase()}`,{"selected-filter":t===r}),children:i})}}function Z({nodes:e,selectedChartId:t}){return e?e.map((e=>J({currentNode:e,selectedChartId:t}))):[]}const G={check:(0,l.Y)((()=>{const e=(0,n.DP)();return(0,l.FD)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.Y)("path",{d:"M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z",fill:e.colorPrimary}),(0,l.Y)("path",{d:"M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z",fill:"white"})]})}),{}),uncheck:(0,l.Y)((()=>{const e=(0,n.DP)();return(0,l.FD)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.Y)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colorFillSecondary}),(0,l.Y)("path",{d:"M16 2V16H2V2H16V2Z",fill:"white"})]})}),{}),halfCheck:(0,l.Y)((()=>{const e=(0,n.DP)();return(0,l.FD)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.Y)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colorFill}),(0,l.Y)("path",{d:"M14 10H4V8H14V10Z",fill:"white"})]})}),{}),expandClose:(0,l.Y)("span",{className:"rct-icon rct-icon-expand-close"}),expandOpen:(0,l.Y)("span",{className:"rct-icon rct-icon-expand-open"}),expandAll:(0,l.Y)("span",{className:"rct-icon rct-icon-expand-all",children:(0,F.t)("Expand all")}),collapseAll:(0,l.Y)("span",{className:"rct-icon rct-icon-collapse-all",children:(0,F.t)("Collapse all")}),parentClose:(0,l.Y)("span",{className:"rct-icon rct-icon-parent-close"}),parentOpen:(0,l.Y)("span",{className:"rct-icon rct-icon-parent-open"}),leaf:(0,l.Y)("span",{className:"rct-icon rct-icon-leaf"})},Q={nodes:p().arrayOf(B.QU).isRequired,checked:p().arrayOf(p().oneOfType([p().number,p().string])).isRequired,expanded:p().arrayOf(p().oneOfType([p().number,p().string])).isRequired,onCheck:p().func.isRequired,onExpand:p().func.isRequired,selectedChartId:p().number},X=()=>{};function ee({nodes:e=[],checked:t=[],expanded:i=[],onCheck:r,onExpand:n,selectedChartId:o}){return(0,l.Y)(K(),{showExpandAll:!0,expandOnClick:!0,showNodeIcon:!1,nodes:Z({nodes:e,selectedChartId:o}),checked:t,expanded:i,onCheck:r,onExpand:n,onClick:X,icons:G})}ee.propTypes=Q,ee.defaultProps={selectedChartId:null};var te=i(23195);const ie={label:p().string.isRequired,isSelected:p().bool.isRequired};function le({label:e,isSelected:t}){return(0,l.Y)("span",{className:f()("filter-field-item filter-container",{"is-selected":t}),children:(0,l.Y)(te.l,{htmlFor:e,children:e})})}function re({nodes:e,activeKey:t}){if(!e)return[];const i=e[0],r=i.children.map((e=>({...e,children:e.children.map((e=>{const{label:i,value:r}=e;return{...e,label:(0,l.Y)(le,{isSelected:r===t,label:i})}}))})));return[{...i,label:(0,l.Y)("span",{className:"root",children:i.label}),children:r}]}le.propTypes=ie;const ne={activeKey:p().string,nodes:p().arrayOf(B.QU).isRequired,checked:p().arrayOf(p().oneOfType([p().number,p().string])).isRequired,expanded:p().arrayOf(p().oneOfType([p().number,p().string])).isRequired,onCheck:p().func.isRequired,onExpand:p().func.isRequired,onClick:p().func.isRequired};function oe({activeKey:e,nodes:t=[],checked:i=[],expanded:r=[],onClick:n,onCheck:o,onExpand:a}){return(0,l.Y)(K(),{showExpandAll:!0,showNodeIcon:!1,expandOnClick:!0,nodes:re({nodes:t,activeKey:e}),checked:i,expanded:r,onClick:n,onCheck:o,onExpand:a,icons:G})}oe.propTypes=ne,oe.defaultProps={activeKey:null};const ae={dashboardFilters:p().objectOf(B.d2).isRequired,layout:p().object.isRequired,updateDashboardFiltersScope:p().func.isRequired,setUnsavedChanges:p().func.isRequired,onCloseModal:p().func.isRequired},se=n.I4.div`
  ${({theme:e})=>g.AH`
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-right: ${-6*e.sizeUnit}px;
    font-size: ${e.fontSize}px;

    & .nav.nav-tabs {
      border: none;
    }

    & .filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.sizeUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }

    & .warning-message {
      padding: ${6*e.sizeUnit}px;
    }
  `}
`,ce=n.I4.div`
  ${({theme:e})=>g.AH`
    &.filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.sizeUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }
  `}
`,de=n.I4.div`
  ${({theme:e})=>g.AH`
    height: ${16*e.sizeUnit}px;
    border-bottom: 1px solid ${e.colorSplit};
    padding-left: ${6*e.sizeUnit}px;
    margin-left: ${-6*e.sizeUnit}px;

    h4 {
      margin-top: 0;
    }

    .selected-fields {
      margin: ${3*e.sizeUnit}px 0 ${4*e.sizeUnit}px;
      visibility: hidden;

      &.multi-edit-mode {
        visibility: visible;
      }

      .selected-scopes {
        padding-left: ${e.sizeUnit}px;
      }
    }
  `}
`,he=n.I4.div`
  ${({theme:e})=>g.AH`
    &.filters-scope-selector {
      display: flex;
      flex-direction: row;
      position: relative;
      height: 100%;

      a,
      a:active,
      a:hover {
        color: inherit;
        text-decoration: none;
      }

      .react-checkbox-tree .rct-icon.rct-icon-expand-all,
      .react-checkbox-tree .rct-icon.rct-icon-collapse-all {
        font-family: ${e.fontFamily};
        font-size: ${e.fontSize}px;
        color: ${e.colorPrimary};

        &::before {
          content: '';
        }

        &:hover {
          text-decoration: underline;
        }

        &:focus {
          outline: none;
        }
      }

      .filter-field-pane {
        position: relative;
        width: 40%;
        padding: ${4*e.sizeUnit}px;
        padding-left: 0;
        border-right: 1px solid ${e.colorBorder};

        .filter-container label {
          font-weight: ${e.fontWeightNormal};
          margin: 0 0 0 ${4*e.sizeUnit}px;
          word-break: break-all;
        }

        .filter-field-item {
          height: ${9*e.sizeUnit}px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${6*e.sizeUnit}px;
          margin-left: ${-6*e.sizeUnit}px;

          &.is-selected {
            border: 1px solid ${e.colorBorder};
            border-radius: ${e.borderRadius}px;
            background-color: ${e.colorBgContainer};
            margin-left: ${-6*e.sizeUnit}px;
          }
        }

        .react-checkbox-tree {
          .rct-title .root {
            font-weight: ${e.fontWeightStrong};
          }

          .rct-text {
            height: ${10*e.sizeUnit}px;
          }
        }
      }

      .filter-scope-pane {
        position: relative;
        flex: 1;
        padding: ${4*e.sizeUnit}px;
        padding-right: ${6*e.sizeUnit}px;
      }

      .react-checkbox-tree {
        flex-direction: column;
        color: ${e.colorText};
        font-size: ${e.fontSize}px;

        .filter-scope-type {
          padding: ${2*e.sizeUnit}px 0;
          display: flex;
          align-items: center;

          &.chart {
            font-weight: ${e.fontWeightNormal};
          }

          &.selected-filter {
            padding-left: ${7*e.sizeUnit}px;
            position: relative;
            color: ${e.colorBgContainerTextActive};

            &::before {
              content: ' ';
              position: absolute;
              left: 0;
              top: 50%;
              width: ${4*e.sizeUnit}px;
              height: ${4*e.sizeUnit}px;
              border-radius: ${e.borderRadius}px;
              margin-top: ${-2*e.sizeUnit}px;
              box-shadow: inset 0 0 0 2px ${e.colorBorder};
              background: ${e.colorFill};
            }
          }

          &.root {
            font-weight: ${e.fontWeightStrong};
          }
        }

        .rct-checkbox {
          svg {
            position: relative;
            top: 3px;
            width: ${4.5*e.sizeUnit}px;
          }
        }

        .rct-node-leaf {
          .rct-bare-label {
            &::before {
              padding-left: ${e.sizeUnit}px;
            }
          }
        }

        .rct-options {
          text-align: left;
          margin-left: 0;
          margin-bottom: ${2*e.sizeUnit}px;
        }

        .rct-text {
          margin: 0;
          display: flex;
        }

        .rct-title {
          display: block;
        }

        // disable style from react-checkbox-trees.css
        .rct-node-clickable:hover,
        .rct-node-clickable:focus,
        label:hover,
        label:active {
          background: none !important;
        }
      }

      .multi-edit-mode {
        .filter-field-item {
          padding: 0 ${4*e.sizeUnit}px 0 ${12*e.sizeUnit}px;
          margin-left: ${-12*e.sizeUnit}px;

          &.is-selected {
            margin-left: ${-13*e.sizeUnit}px;
          }
        }
      }

      .scope-search {
        position: absolute;
        right: ${4*e.sizeUnit}px;
        top: ${4*e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
        border: 1px solid ${e.colorBorder};
        padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
        font-size: ${e.fontSize}px;
        outline: none;

        &:focus {
          border: 1px solid ${e.colorPrimary};
        }
      }
    }
  `}
`,pe=n.I4.div`
  ${({theme:e})=>`\n    height: ${16*e.sizeUnit}px;\n\n    border-top: ${e.sizeUnit/4}px solid ${e.colorPrimaryBg};\n    padding: ${6*e.sizeUnit}px;\n    margin: 0 0 0 ${6*-e.sizeUnit}px;\n    text-align: right;\n\n    .btn {\n      margin-right: ${4*e.sizeUnit}px;\n\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  `}
`;class ue extends r.PureComponent{constructor(e){super(e);const{dashboardFilters:t,layout:i}=e;if(Object.keys(t).length>0){const e=function({dashboardFilters:e={}}){const t=Object.values(e).map((e=>{const{chartId:t,filterName:i,columns:l,labels:r}=e,n=Object.keys(l).map((e=>({value:(0,T.s)({chartId:t,column:e}),label:r[e]||e})));return{value:t,label:i,children:n,showCheckbox:!0}}));return[{value:C.zf,type:y.tq,label:(0,F.t)("All filters"),children:t}]}({dashboardFilters:t}),l=e[0].children;this.allfilterFields=[],l.forEach((({children:e})=>{e.forEach((e=>{this.allfilterFields.push(e.value)}))})),this.defaultFilterKey=l[0].children[0].value;const r=Object.values(t).reduce(((e,{chartId:l,columns:r})=>({...e,...Object.keys(r).reduce(((e,r)=>{const n=(0,T.s)({chartId:l,column:r}),o=Y({components:i,filterFields:[n],selectedChartId:l}),a=k(o,1),s=((0,P._i)({filterScope:t[l].scopes[r]})||[]).filter((e=>e!==l));return{...e,[n]:{nodes:o,nodesFiltered:[...o],checked:s,expanded:a}}}),{})})),{}),{chartId:n}=(0,T.w)(this.defaultFilterKey),o=[],a=this.defaultFilterKey,s=[C.zf].concat(n),c=N({checkedFilterFields:o,activeFilterField:a,filterScopeMap:r,layout:i});this.state={showSelector:!0,activeFilterField:a,searchText:"",filterScopeMap:{...r,...c},filterFieldNodes:e,checkedFilterFields:o,expandedFilterIds:s}}else this.state={showSelector:!1};this.filterNodes=this.filterNodes.bind(this),this.onChangeFilterField=this.onChangeFilterField.bind(this),this.onCheckFilterScope=this.onCheckFilterScope.bind(this),this.onExpandFilterScope=this.onExpandFilterScope.bind(this),this.onSearchInputChange=this.onSearchInputChange.bind(this),this.onCheckFilterField=this.onCheckFilterField.bind(this),this.onExpandFilterField=this.onExpandFilterField.bind(this),this.onClose=this.onClose.bind(this),this.onSave=this.onSave.bind(this)}onCheckFilterScope(e=[]){const{activeFilterField:t,filterScopeMap:i,checkedFilterFields:l}=this.state,r=A({activeFilterField:t,checkedFilterFields:l}),n=t?[t]:l,o={...i[r],checked:e},a=function({checked:e=[],filterFields:t=[],filterScopeMap:i={}}){const l=e.reduce(((e,t)=>{const[i,l]=t.split(":");return{...e,[l]:(e[l]||[]).concat(parseInt(i,10))}}),{});return t.reduce(((e,t)=>({...e,[t]:{...i[t],checked:l[t]||[]}})),{})}({checked:e,filterFields:n,filterScopeMap:i});this.setState((()=>({filterScopeMap:{...i,...a,[r]:o}})))}onExpandFilterScope(e=[]){const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=this.state,r=A({activeFilterField:t,checkedFilterFields:i}),n={...l[r],expanded:e};this.setState((()=>({filterScopeMap:{...l,[r]:n}})))}onCheckFilterField(e=[]){const{layout:t}=this.props,{filterScopeMap:i}=this.state,l=N({checkedFilterFields:e,activeFilterField:null,filterScopeMap:i,layout:t});this.setState((()=>({activeFilterField:null,checkedFilterFields:e,filterScopeMap:{...i,...l}})))}onExpandFilterField(e=[]){this.setState((()=>({expandedFilterIds:e})))}onChangeFilterField(e={}){const{layout:t}=this.props,i=e.value,{activeFilterField:l,checkedFilterFields:r,filterScopeMap:n}=this.state;if(i===l){const e=N({checkedFilterFields:r,activeFilterField:null,filterScopeMap:n,layout:t});this.setState({activeFilterField:null,filterScopeMap:{...n,...e}})}else if(this.allfilterFields.includes(i)){const e=N({checkedFilterFields:r,activeFilterField:i,filterScopeMap:n,layout:t});this.setState({activeFilterField:i,filterScopeMap:{...n,...e}})}}onSearchInputChange(e){this.setState({searchText:e.target.value},this.filterTree)}onClose(){this.props.onCloseModal()}onSave(){const{filterScopeMap:e}=this.state,t=this.allfilterFields.reduce(((t,i)=>{const{nodes:l}=e[i],r=e[i].checked;return{...t,[i]:H({filterKey:i,nodes:l,checkedChartIds:r})}}),{});this.props.updateDashboardFiltersScope(t),this.props.setUnsavedChanges(!0),this.props.onCloseModal()}filterTree(){if(this.state.searchText){const e=e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=e,r=A({activeFilterField:t,checkedFilterFields:i}),n=l[r].nodes.reduce(this.filterNodes,[]),o=k([...n]),a={...l[r],nodesFiltered:n,expanded:o};return{filterScopeMap:{...l,[r]:a}}};this.setState(e)}else this.setState((e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=e,r=A({activeFilterField:t,checkedFilterFields:i}),n={...l[r],nodesFiltered:l[r].nodes};return{filterScopeMap:{...l,[r]:n}}}))}filterNodes(e=[],t={}){const{searchText:i}=this.state,l=(t.children||[]).reduce(this.filterNodes,[]);return(t.label.toLocaleLowerCase().indexOf(i.toLocaleLowerCase())>-1||l.length)&&e.push({...t,children:l}),e}renderFilterFieldList(){const{activeFilterField:e,filterFieldNodes:t,checkedFilterFields:i,expandedFilterIds:r}=this.state;return(0,l.Y)(oe,{activeKey:e,nodes:t,checked:i,expanded:r,onClick:this.onChangeFilterField,onCheck:this.onCheckFilterField,onExpand:this.onExpandFilterField})}renderFilterScopeTree(){const{filterScopeMap:e,activeFilterField:t,checkedFilterFields:i,searchText:r}=this.state,n=A({activeFilterField:t,checkedFilterFields:i}),o=z({activeFilterField:t,checkedFilterFields:i});return(0,l.FD)(l.FK,{children:[(0,l.Y)(m.A,{className:"filter-text scope-search multi-edit-mode",placeholder:(0,F.t)("Search..."),type:"text",value:r,onChange:this.onSearchInputChange}),(0,l.Y)(ee,{nodes:e[n].nodesFiltered,checked:e[n].checked,expanded:e[n].expanded,onCheck:this.onCheckFilterScope,onExpand:this.onExpandFilterScope,selectedChartId:o})]})}renderEditingFiltersName(){const{dashboardFilters:e}=this.props,{activeFilterField:t,checkedFilterFields:i}=this.state,r=[].concat(t||i).map((t=>{const{chartId:i,column:l}=(0,T.w)(t);return e[i].labels[l]||l}));return(0,l.FD)("div",{className:"selected-fields multi-edit-mode",children:[0===r.length&&(0,F.t)("No filter is selected."),1===r.length&&(0,F.t)("Editing 1 filter:"),r.length>1&&(0,F.t)("Batch editing %d filters:",r.length),(0,l.Y)("span",{className:"selected-scopes",children:r.join(", ")})]})}render(){const{showSelector:e}=this.state;return(0,l.FD)(se,{children:[(0,l.FD)(de,{children:[(0,l.Y)("h4",{children:(0,F.t)("Configure filter scopes")}),e&&this.renderEditingFiltersName()]}),(0,l.Y)(ce,{className:"filter-scope-body",children:e?(0,l.FD)(he,{className:"filters-scope-selector",children:[(0,l.Y)("div",{className:f()("filter-field-pane multi-edit-mode"),children:this.renderFilterFieldList()}),(0,l.Y)("div",{className:"filter-scope-pane multi-edit-mode",children:this.renderFilterScopeTree()})]}):(0,l.Y)("div",{className:"warning-message",children:(0,F.t)("There are no filters in this dashboard.")})}),(0,l.FD)(pe,{children:[(0,l.Y)(b.$,{buttonSize:"small",onClick:this.onClose,children:(0,F.t)("Close")}),e&&(0,l.Y)(b.$,{buttonSize:"small",buttonStyle:"primary",onClick:this.onSave,children:(0,F.t)("Save")})]})]})}}ue.propTypes=ae;const fe=(0,a.Ng)((function({dashboardLayout:e,dashboardFilters:t}){return{dashboardFilters:t,layout:e.present}}),(function(e){return(0,s.zH)({updateDashboardFiltersScope:c.B8,setUnsavedChanges:d.MR},e)}))(ue),me=n.I4.div((({theme:{sizeUnit:e}})=>({padding:2*e,paddingBottom:3*e})));class be extends r.PureComponent{constructor(e){super(e),this.modal=void 0,this.modal=(0,r.createRef)(),this.handleCloseModal=this.handleCloseModal.bind(this)}handleCloseModal(){var e;null==this||null==(e=this.modal)||null==(e=e.current)||null==e.close||e.close()}render(){const e={onCloseModal:this.handleCloseModal};return(0,l.Y)(o.g,{ref:this.modal,triggerNode:this.props.triggerNode,modalBody:(0,l.Y)(me,{children:(0,l.Y)(fe,{...e})}),width:"80%"})}}},55204:(e,t,i)=>{i.d(t,{Ay:()=>f,Fq:()=>u});var l=i(2445),r=i(96540),n=i(45738),o=i(10286),a=i(77457),s=i(50290),c=i(54603);const d=new Set,h={sql:()=>i.e(8360).then(i.bind(i,78360)),htmlbars:()=>i.e(9633).then(i.bind(i,69633)),markdown:()=>i.e(8143).then(i.bind(i,8143)),json:()=>i.e(9172).then(i.bind(i,69172))},p=async e=>{if(!d.has(e))try{const t=await h[e]();n.A.registerLanguage(e,t.default),d.add(e)}catch(t){console.warn(`Failed to load language ${e}:`,t)}},u=async e=>{const t=e.filter((e=>!d.has(e))).map(p);await Promise.all(t)},f=({children:e,language:t="sql",customStyle:i={},showLineNumbers:h=!1,wrapLines:u=!0,style:f})=>{const m=(0,s.DP)(),[b,g]=(0,r.useState)(d.has(t));(0,r.useEffect)((()=>{(async()=>{d.has(t)||(await p(t),g(!0))})()}),[t]);const F=(0,c.Mw)(m),v=f||(F?a.A:o.A),x={background:m.colorBgElevated,padding:4*m.sizeUnit,border:0,borderRadius:m.borderRadius,...i};return b?(0,l.Y)(n.A,{language:t,style:v,customStyle:x,showLineNumbers:h,wrapLines:u,children:e}):(0,l.Y)("pre",{style:{...x,fontFamily:"monospace",whiteSpace:"pre-wrap",margin:0},children:e})}},80415:(e,t,i)=>{i.d(t,{u:()=>r});var l=i(32064);function r(e){return`${(0,l.KX)()}${e.startsWith("/")?e:`/${e}`}`}},94551:(e,t,i)=>{i.d(t,{T:()=>h});var l=i(2445),r=i(50290),n=i(74098),o=i(96540),a=i(23195),s=i(17355),c=i(97163);const d=r.I4.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colorTextLabel};
  }
`;function h({description:e,onConfirm:t,onHide:i,open:r,title:h,name:p}){const[u,f]=(0,o.useState)(!0),[m,b]=(0,o.useState)(""),g=(0,o.useRef)(null);(0,o.useEffect)((()=>{r&&g.current&&g.current.focus()}),[r]);const F=()=>{b(""),t()};return(0,l.FD)(c.aF,{disablePrimaryButton:u,onHide:()=>{b(""),i()},onHandledPrimaryAction:F,primaryButtonName:(0,n.t)("Delete"),primaryButtonStyle:"danger",show:r,name:p,title:h,centered:!0,children:[e,(0,l.FD)(d,{children:[(0,l.Y)(a.l,{htmlFor:"delete",children:(0,n.t)('Type "%s" to confirm',(0,n.t)("DELETE"))}),(0,l.Y)(s.A,{type:"text",id:"delete",autoComplete:"off",value:m,onChange:e=>{var t;const i=null!=(t=e.target.value)?t:"";f(i.toUpperCase()!==(0,n.t)("DELETE")),b(i)},onPressEnter:()=>{u||F()},ref:g})]})]})}}}]);