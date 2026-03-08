"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9019],{67053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(2445),i=n(96540),o=n(58561),l=n.n(o),r=n(74098),d=n(79378),s=n(61574),c=n(71519),u=n(86784),h=n(71323),m=n(64457),p=n(20237),y=n(42566),g=n(94551),b=n(38961),f=n(89232),A=n(50290),x=n(51692),S=n(97163),w=n(17355);const v=A.I4.div`
  margin: ${({theme:e})=>2*e.sizeUnit}px auto
    ${({theme:e})=>4*e.sizeUnit}px auto;
`,D=A.I4.div`
  margin-bottom: ${({theme:e})=>10*e.sizeUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.sizeUnit/2}px;
    color: ${({theme:e})=>e.colorError};
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.sizeUnit}px
      ${({theme:e})=>2*e.sizeUnit}px;
    border: 1px solid ${({theme:e})=>e.colorBorder};
    border-radius: ${({theme:e})=>e.borderRadius}px;
    width: 50%;
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    width: 100%;
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colorTextPlaceholder};
  }
`,_=(0,m.Ay)((({addDangerToast:e,addSuccessToast:t,onLayerAdd:n,onHide:o,show:l,layer:d=null})=>{const[s,c]=(0,i.useState)(!0),[h,m]=(0,i.useState)(),[p,g]=(0,i.useState)(!0),b=null!==d,{state:{loading:f,resource:A},fetchResource:_,createResource:k,updateResource:C}=(0,u.fn)("annotation_layer",(0,r.t)("annotation_layer"),e),Y=()=>{m({name:"",descr:""})},T=()=>{g(!0),Y(),o()},z=e=>{const{target:t}=e,n={...h,name:h?h.name:"",descr:h?h.descr:""};n[t.name]=t.value,m(n)};return(0,i.useEffect)((()=>{if(b&&(null==h||!h.id||d&&d.id!==h.id||p&&l)){if(l&&d&&null!==d.id&&!f){const e=d.id||0;_(e)}}else!b&&(!h||h.id||p&&l)&&Y()}),[d,l]),(0,i.useEffect)((()=>{A&&m(A)}),[A]),(0,i.useEffect)((()=>{var e;null!=h&&null!=(e=h.name)&&e.length?c(!1):c(!0)}),[h?h.name:"",h?h.descr:""]),p&&l&&g(!1),(0,a.FD)(S.aF,{disablePrimaryButton:s,onHandledPrimaryAction:()=>{if(b){if(null!=h&&h.id){const e=h.id;delete h.id,delete h.created_by,C(e,h).then((e=>{e&&(T(),t((0,r.t)("Annotation template updated")))}))}}else h&&k(h).then((e=>{e&&(n&&n(e),T(),t((0,r.t)("Annotation template created")))}))},onHide:T,primaryButtonName:b?(0,r.t)("Save"):(0,r.t)("Add"),show:l,width:"55%",name:b?(0,r.t)("Edit annotation layer properties"):(0,r.t)("Add annotation layer"),title:(0,a.Y)(x.r,{isEditMode:b,title:b?(0,r.t)("Edit annotation layer properties"):(0,r.t)("Add annotation layer")}),children:[(0,a.Y)(v,{children:(0,a.Y)(y.o.Title,{level:4,children:(0,r.t)("Basic information")})}),(0,a.FD)(D,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,r.t)("Annotation layer name"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)(w.A,{name:"name",onChange:z,type:"text",value:null==h?void 0:h.name})]}),(0,a.FD)(D,{children:[(0,a.Y)("div",{className:"control-label",children:(0,r.t)("description")}),(0,a.Y)(w.A.TextArea,{name:"descr",value:null==h?void 0:h.descr,placeholder:(0,r.t)("Description (this can be seen in the list)"),onChange:z})]})]})}));var k=n(79605),C=n(8558),Y=n(56879),T=n(66124);const z=(0,m.Ay)((function({addDangerToast:e,addSuccessToast:t,user:n}){const{state:{loading:o,resourceCount:m,resourceCollection:A,bulkSelectEnabled:x},hasPerm:S,fetchData:w,refreshData:v,toggleBulkSelect:D}=(0,u.RU)("annotation_layer",(0,r.t)("Annotation layers"),e),[z,$]=(0,i.useState)(!1),[H,F]=(0,i.useState)(null),[E,B]=(0,i.useState)(null),N=S("can_write"),U=S("can_write"),P=S("can_write");function L(e){F(e),$(!0)}const O=[{id:"name",desc:!0}],R=(0,i.useMemo)((()=>[{accessor:"name",Header:(0,r.t)("Name"),Cell:({row:{original:{id:e,name:t}}})=>{let n=!0;try{(0,s.W6)()}catch(e){n=!1}return n?(0,a.Y)(c.N_,{to:`/annotationlayer/${e}/annotation`,children:t}):(0,a.Y)(y.o.Link,{href:`/annotationlayer/${e}/annotation`,children:t})},size:"xxl",id:"name"},{accessor:"descr",Header:(0,r.t)("Description"),size:"xl",id:"descr"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,a.Y)(f.UW,{date:e,user:t}),Header:(0,r.t)("Last modified"),accessor:"changed_on",size:"xl",id:"changed_on"},{Cell:({row:{original:e}})=>{const t=[U?{label:"edit-action",tooltip:(0,r.t)("Edit template"),placement:"bottom",icon:"EditOutlined",onClick:()=>L(e)}:null,P?{label:"delete-action",tooltip:(0,r.t)("Delete template"),placement:"bottom",icon:"DeleteOutlined",onClick:()=>B(e)}:null].filter((e=>!!e));return(0,a.Y)(f.kv,{actions:t})},Header:(0,r.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!U&&!P,size:"xl"},{accessor:k.H.ChangedBy,hidden:!0,id:k.H.ChangedBy}]),[P,N]),M=[];P&&M.push({name:(0,r.t)("Bulk select"),onClick:D,buttonStyle:"secondary"}),N&&M.push({icon:(0,a.Y)(C.F.PlusOutlined,{iconSize:"m"}),name:(0,r.t)("Annotation layer"),buttonStyle:"primary",onClick:()=>{L(null)}});const q=(0,i.useMemo)((()=>[{Header:(0,r.t)("Name"),key:"search",id:"name",input:"search",operator:f.c0.Contains},{Header:(0,r.t)("Changed by"),key:"changed_by",id:"changed_by",input:"select",operator:f.c0.RelationOneMany,unfilteredLabel:(0,r.t)("All"),fetchSelects:(0,h.u1)("annotation_layer","changed_by",(0,h.JF)((e=>(0,r.t)("An error occurred while fetching dataset datasource values: %s",e))),n),paginate:!0,dropdownStyle:{minWidth:T.f8}}]),[]),I={title:(0,r.t)("No annotation layers yet"),image:"filter-results.svg",buttonAction:()=>L(null),buttonText:(0,r.t)("Annotation layer"),buttonIcon:(0,a.Y)(C.F.PlusOutlined,{iconSize:"m"})};return(0,a.FD)(a.FK,{children:[(0,a.Y)(p.A,{name:(0,r.t)("Annotation layers"),buttons:M}),(0,a.Y)(_,{addDangerToast:e,layer:H,onLayerAdd:e=>{(0,Y.V)(`/annotationlayer/${e}/annotation`)},onHide:()=>{v(),$(!1)},show:z}),E&&(0,a.Y)(g.T,{description:(0,r.t)("This action will permanently delete the layer."),onConfirm:()=>{E&&(({id:n,name:a})=>{d.A.delete({endpoint:`/api/v1/annotation_layer/${n}`}).then((()=>{v(),B(null),t((0,r.t)("Deleted: %s",a))}),(0,h.JF)((t=>e((0,r.t)("There was an issue deleting %s: %s",a,t)))))})(E)},onHide:()=>B(null),open:!0,title:(0,r.t)("Delete Layer?")}),(0,a.Y)(b.h,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected layers?"),onConfirm:n=>{d.A.delete({endpoint:`/api/v1/annotation_layer/?q=${l().encode(n.map((({id:e})=>e)))}`}).then((({json:e={}})=>{v(),t(e.message)}),(0,h.JF)((t=>e((0,r.t)("There was an issue deleting the selected layers: %s",t)))))},children:n=>{const i=P?[{key:"delete",name:(0,r.t)("Delete"),onSelect:n,type:"danger"}]:[];return(0,a.Y)(f.uO,{className:"annotation-layers-list-view",columns:R,count:m,data:A,fetchData:w,filters:q,initialSort:O,loading:o,pageSize:25,bulkActions:i,bulkSelectEnabled:x,disableBulkSelect:D,addDangerToast:e,addSuccessToast:t,emptyState:I,refreshData:v})}})]})}))}}]);