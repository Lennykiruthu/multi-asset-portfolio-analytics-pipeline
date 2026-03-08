"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5659],{81261:(e,t,l)=>{l.r(t),l.d(t,{default:()=>$});var a=l(2445),i=l(74098),n=l(79378),r=l(96540),o=l(38961),s=l(95018),d=l(89232),u=l(8558),c=l(64457),h=l(20237),p=l(58561),m=l.n(p),g=l(86784),f=l(17437),b=l(50290),y=l(51692),v=l(97163),w=l(17355),x=l(32202),_=l(5250),k=l(2801),Y=l(49965);const F=[{label:(0,i.t)("Regular"),value:"Regular"},{label:(0,i.t)("Base"),value:"Base"}];var S;!function(e){e.Regular="Regular",e.Base="Base"}(S||(S={}));const T=f.AH`
  margin: 0;

  .ant-input {
    margin: 0;
  }
`,D=(0,b.I4)(v.aF)`
  max-width: 1200px;
  min-width: min-content;
  width: 100%;
  .ant-modal-footer {
    white-space: nowrap;
  }
`,R=b.I4.div`
  ${({theme:e})=>f.AH`
    display: flex;
    flex-direction: column;
    padding: ${3*e.sizeUnit}px ${4*e.sizeUnit}px
      ${2*e.sizeUnit}px;

    label,
    .control-label {
      display: flex;
      font-size: ${e.fontSizeSM}px;
      color: ${e.colorTextLabel};
      align-items: center;
    }

    .info-solid-small {
      vertical-align: middle;
      padding-bottom: ${e.sizeUnit/2}px;
    }
  `}
`,z=b.I4.div`
  ${({theme:e})=>f.AH`
    display: flex;
    flex-direction: column;
    margin: ${e.sizeUnit}px;
    margin-bottom: ${4*e.sizeUnit}px;

    .input-container {
      display: flex;
      align-items: center;

      > div {
        width: 100%;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    .required {
      margin-left: ${e.sizeUnit/2}px;
      color: ${e.colorErrorText};
    }
  `}
`,A=(0,b.I4)(w.A.TextArea)`
  resize: none;
  margin-top: ${({theme:e})=>e.sizeUnit}px;
`,C={name:"",filter_type:S.Regular,tables:[],roles:[],clause:"",group_key:"",description:""},N=function(e){const{rule:t,addDangerToast:l,addSuccessToast:o,onHide:s,show:d}=e,[u,c]=(0,r.useState)({...C}),[h,p]=(0,r.useState)(!0),f=null!==t,{state:{loading:b,resource:v,error:w},fetchResource:N,createResource:E,updateResource:H,clearError:$}=(0,g.fn)("rowlevelsecurity",(0,i.t)("rowlevelsecurity"),l),M=(e,t)=>{c((l=>({...l,[e]:t})))},B=(0,r.useCallback)((()=>{var e,t;if(!v)return null;const l=[],a=[];return null==(e=v.tables)||e.forEach((e=>{l.push({key:e.id,label:e.schema?`${e.schema}.${e.table_name}`:e.table_name,value:e.id})})),null==(t=v.roles)||t.forEach((e=>{a.push({key:e.id,label:e.name,value:e.id})})),{tables:l,roles:a}}),[null==v?void 0:v.tables,null==v?void 0:v.roles]);(0,r.useEffect)((()=>{f?null===(null==t?void 0:t.id)||b||w||N(t.id):c({...C})}),[t]),(0,r.useEffect)((()=>{if(v){c({...v,id:null==t?void 0:t.id});const e=B();M("tables",(null==e?void 0:e.tables)||[]),M("roles",(null==e?void 0:e.roles)||[])}}),[v]);const q=u||{};(0,r.useEffect)((()=>{var e;null!=u&&u.name&&null!=u&&u.clause&&null!=(e=u.tables)&&e.length?p(!1):p(!0)}),[q.name,q.clause,null==q?void 0:q.tables]);const I=e=>{M(e.name,e.value)},L=()=>{$(),c({...C}),s()},U=(0,r.useMemo)((()=>(e="",t,l)=>{const a=m().encode({filter:e,page:t,page_size:l});return n.A.get({endpoint:`/api/v1/rowlevelsecurity/related/tables?q=${a}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]),O=(0,r.useMemo)((()=>(e="",t,l)=>{const a=m().encode({filter:e,page:t,page_size:l});return n.A.get({endpoint:`/api/v1/rowlevelsecurity/related/roles?q=${a}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]);return(0,a.Y)(D,{className:"no-content-padding",responsive:!0,show:d,onHide:L,primaryButtonName:f?(0,i.t)("Save"):(0,i.t)("Add"),disablePrimaryButton:h,onHandledPrimaryAction:()=>{var e,t;const l=[],a=[];null==(e=u.tables)||e.forEach((e=>l.push(e.key))),null==(t=u.roles)||t.forEach((e=>a.push(e.key)));const n={...u,tables:l,roles:a};if(f&&u.id){const e=u.id;delete n.id,H(e,n).then((e=>{e&&(o("Rule updated"),L())}))}else u&&E(n).then((e=>{e&&(o((0,i.t)("Rule added")),L())}))},width:"30%",maxWidth:"1450px",title:(0,a.Y)(y.r,{isEditMode:f,title:f?(0,i.t)("Edit Rule"):(0,i.t)("Add Rule")}),children:(0,a.Y)(R,{children:(0,a.FD)("div",{className:"main-section",children:[(0,a.Y)(z,{children:(0,a.Y)(x.M,{id:"name",name:"name",className:"labeled-input",value:u?u.name:"",required:!0,validationMethods:{onChange:({target:e})=>I(e)},css:T,label:(0,i.t)("Rule Name"),tooltipText:(0,i.t)("The name of the rule must be unique"),hasTooltip:!0})}),(0,a.FD)(z,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Filter Type")," ",(0,a.Y)(_.I,{tooltip:(0,i.t)("Regular filters add where clauses to queries if a user belongs to a role referenced in the filter, base filters apply filters to all queries except the roles defined in the filter, and can be used to define what users can see if no RLS filters within a filter group apply to them.")})]}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(k.A,{name:"filter_type",ariaLabel:(0,i.t)("Filter Type"),placeholder:(0,i.t)("Filter Type"),onChange:e=>{M("filter_type",e)},value:null==u?void 0:u.filter_type,options:F})})]}),(0,a.FD)(z,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Datasets")," ",(0,a.Y)("span",{className:"required",children:"*"}),(0,a.Y)(_.I,{tooltip:(0,i.t)("These are the datasets this filter will be applied to.")})]}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(Y.A,{ariaLabel:(0,i.t)("Tables"),mode:"multiple",onChange:e=>{M("tables",e||[])},value:(null==u?void 0:u.tables)||[],options:U})})]}),(0,a.FD)(z,{children:[(0,a.FD)("div",{className:"control-label",children:[u.filter_type===S.Base?(0,i.t)("Excluded roles"):(0,i.t)("Roles")," ",(0,a.Y)(_.I,{tooltip:(0,i.t)("For regular filters, these are the roles this filter will be applied to. For base filters, these are the roles that the filter DOES NOT apply to, e.g. Admin if admin should see all data.")})]}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(Y.A,{ariaLabel:(0,i.t)("Roles"),mode:"multiple",onChange:e=>{M("roles",e||[])},value:(null==u?void 0:u.roles)||[],options:O})})]}),(0,a.Y)(z,{children:(0,a.Y)(x.M,{id:"group_key",name:"group_key",value:u?u.group_key:"",validationMethods:{onChange:({target:e})=>I(e)},css:T,label:(0,i.t)("Group Key"),hasTooltip:!0,tooltipText:(0,i.t)("Filters with the same group key will be ORed together within the group, while different filter groups will be ANDed together. Undefined group keys are treated as unique groups, i.e. are not grouped together. For example, if a table has three filters, of which two are for departments Finance and Marketing (group key = 'department'), and one refers to the region Europe (group key = 'region'), the filter clause would apply the filter (department = 'Finance' OR department = 'Marketing') AND (region = 'Europe').")})}),(0,a.Y)(z,{children:(0,a.Y)(x.M,{id:"clause",name:"clause",value:u?u.clause:"",required:!0,validationMethods:{onChange:({target:e})=>I(e)},css:T,label:(0,i.t)("Clause"),hasTooltip:!0,tooltipText:(0,i.t)("This is the condition that will be added to the WHERE clause. For example, to only return rows for a particular client, you might define a regular filter with the clause `client_id = 9`. To display no rows unless a user belongs to a RLS filter role, a base filter can be created with the clause `1 = 0` (always false).")})}),(0,a.FD)(z,{children:[(0,a.Y)("div",{className:"control-label",children:(0,i.t)("Description")}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(A,{rows:4,name:"description",value:u?u.description:"",onChange:e=>I(e.target)})})]})]})})})};var E=l(71323),H=l(79605);const $=(0,c.Ay)((function(e){const{addDangerToast:t,addSuccessToast:l,user:c}=e,[p,f]=(0,r.useState)(!1),[b,y]=(0,r.useState)(null),{state:{loading:v,resourceCount:w,resourceCollection:x,bulkSelectEnabled:_},hasPerm:k,fetchData:Y,refreshData:F,toggleBulkSelect:S}=(0,g.RU)("rowlevelsecurity",(0,i.t)("Row Level Security"),t,!0,void 0,void 0,!0);function T(e){y(e),f(!0)}function D(){y(null),f(!1),F()}const R=k("can_write"),z=k("can_write"),A=k("can_export"),C=(0,r.useMemo)((()=>[{accessor:"name",Header:(0,i.t)("Name"),size:"xxl",id:"name"},{accessor:"filter_type",Header:(0,i.t)("Filter Type"),size:"lg",id:"filter_type"},{accessor:"group_key",Header:(0,i.t)("Group Key"),size:"lg",id:"group_key"},{accessor:"clause",Header:(0,i.t)("Clause"),size:"xl",id:"clause"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,a.Y)(d.UW,{date:e,user:t}),Header:(0,i.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",id:"changed_on_delta_humanized"},{Cell:({row:{original:e}})=>(0,a.FD)("div",{className:"actions",children:[R&&(0,a.Y)(o.h,{title:(0,i.t)("Please confirm"),description:(0,a.FD)(a.FK,{children:[(0,i.t)("Are you sure you want to delete")," ",(0,a.Y)("b",{children:e.name})]}),onConfirm:()=>function({id:e,name:t},l,a,r){return n.A.delete({endpoint:`/api/v1/rowlevelsecurity/${e}`}).then((()=>{l(),a((0,i.t)("Deleted %s",t))}),(0,E.JF)((e=>r((0,i.t)("There was an issue deleting %s: %s",t,e)))))}(e,F,l,t),children:e=>(0,a.Y)(s.m,{id:"delete-action-tooltip",title:(0,i.t)("Delete"),placement:"bottom",children:(0,a.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e,children:(0,a.Y)(u.F.DeleteOutlined,{iconSize:"l"})})})}),z&&(0,a.Y)(s.m,{id:"edit-action-tooltip",title:(0,i.t)("Edit"),placement:"bottom",children:(0,a.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>T(e),children:(0,a.Y)(u.F.EditOutlined,{iconSize:"l"})})})]}),Header:(0,i.t)("Actions"),id:"actions",hidden:!z&&!R&&!A,disableSortBy:!0,size:"lg"},{accessor:H.H.ChangedBy,hidden:!0,id:H.H.ChangedBy}]),[c.userId,z,R,A,k,F,t,l]),$={title:(0,i.t)("No Rules yet"),image:"filter-results.svg",buttonAction:()=>T(null),buttonIcon:z?(0,a.Y)(u.F.PlusOutlined,{iconSize:"m"}):void 0,buttonText:z?(0,i.t)("Rule"):null},M=(0,r.useMemo)((()=>[{Header:(0,i.t)("Name"),key:"search",id:"name",input:"search",operator:d.c0.StartsWith},{Header:(0,i.t)("Filter Type"),key:"filter_type",id:"filter_type",input:"select",operator:d.c0.Equals,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Regular"),value:"Regular"},{label:(0,i.t)("Base"),value:"Base"}]},{Header:(0,i.t)("Group Key"),key:"search",id:"group_key",input:"search",operator:d.c0.StartsWith},{Header:(0,i.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:d.c0.RelationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,E.u1)("rowlevelsecurity","changed_by",(0,E.JF)((e=>(0,i.t)("An error occurred while fetching dataset datasource values: %s",e))),c),paginate:!0}]),[c]),B=[{id:"changed_on_delta_humanized",desc:!0}],q=[];return R&&(q.push({name:(0,i.t)("Bulk select"),buttonStyle:"secondary",onClick:S}),q.push({name:(0,i.t)("Rule"),icon:(0,a.Y)(u.F.PlusOutlined,{iconSize:"m"}),buttonStyle:"primary",onClick:()=>T(null)})),(0,a.FD)(a.FK,{children:[(0,a.Y)(h.A,{name:(0,i.t)("Row Level Security"),buttons:q}),(0,a.Y)(o.h,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected rules?"),onConfirm:function(e){const a=e.map((({id:e})=>e));return n.A.delete({endpoint:`/api/v1/rowlevelsecurity/?q=${m().encode(a)}`}).then((()=>{F(),l((0,i.t)("Deleted"))}),(0,E.JF)((e=>t((0,i.t)("There was an issue deleting rules: %s",e)))))},children:e=>{const n=[];return R&&n.push({key:"delete",name:(0,i.t)("Delete"),type:"danger",onSelect:e}),(0,a.FD)(a.FK,{children:[(0,a.Y)(N,{rule:b,addDangerToast:t,onHide:D,addSuccessToast:l,show:p}),(0,a.Y)(d.uO,{className:"rls-list-view",bulkActions:n,bulkSelectEnabled:_,disableBulkSelect:S,columns:C,count:w,data:x,emptyState:$,fetchData:Y,filters:M,initialSort:B,loading:v,addDangerToast:t,addSuccessToast:l,refreshData:()=>{},pageSize:25})]})}})]})}))}}]);