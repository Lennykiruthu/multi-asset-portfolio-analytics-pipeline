(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7094],{19049:(e,t,r)=>{var n=r(79920)("capitalize",r(14792),r(96493));n.placeholder=r(2874),e.exports=n},68793:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>$});var n,i=r(19049),o=r.n(i),l=r(2445),a=r(50290),c=r(17437),s=r(79378),u=r(74098),h=r(4651),d=r(42566),m=r(65729),p=r(8558),f=r(76576),g=r(88217),A=r(17355),y=r(96540),Y=r(32064);!function(e){e[e.AuthOID=0]="AuthOID",e[e.AuthDB=1]="AuthDB",e[e.AuthLDAP=2]="AuthLDAP",e[e.AuthOauth=4]="AuthOauth"}(n||(n={}));const b=(0,a.I4)(h.Z)`
  ${({theme:e})=>c.AH`
    max-width: 400px;
    width: 100%;
    margin-top: ${e.marginXL}px;
    color: ${e.colorBgContainer};
    background: ${e.colorBgBase};
    .ant-form-item-label label {
      color: ${e.colorPrimary};
    }
  `}
`,w=(0,a.I4)(d.o.Text)`
  ${({theme:e})=>c.AH`
    font-size: ${e.fontSizeSM}px;
  `}
`;function $(){const[e]=m.l.useForm(),[t,r]=(0,y.useState)(!1),i=(0,Y.Ay)(),a=(0,y.useMemo)((()=>{try{return new URLSearchParams(window.location.search).get("next")||""}catch(e){return""}}),[]),h=(0,y.useMemo)((()=>a?`/login/?next=${encodeURIComponent(a)}`:"/login/"),[a]),$=e=>{const t=`/login/${e}`;return a?`${t}${t.includes("?")?"&":"?"}next=${encodeURIComponent(a)}`:t},D=i.common.conf.AUTH_TYPE,x=i.common.conf.AUTH_PROVIDERS,I=i.common.conf.AUTH_USER_REGISTRATION,F=e=>{if(!e||"string"!=typeof e)return;const t=`${o()(e)}Outlined`,r=p.F[t];return r&&"function"==typeof r?(0,l.Y)(r,{}):void 0};return(0,l.Y)(f.s,{justify:"center",align:"center",css:c.AH`
        width: 100%;
        height: calc(100vh - 200px);
      `,children:(0,l.FD)(b,{title:(0,u.t)("Sign in"),padded:!0,children:[D===n.AuthOID&&(0,l.Y)(f.s,{justify:"center",vertical:!0,gap:"middle",children:(0,l.Y)(m.l,{layout:"vertical",requiredMark:"optional",form:e,children:x.map((e=>(0,l.Y)(m.l.Item,{children:(0,l.FD)(g.$,{href:$(e.name),block:!0,iconPosition:"start",icon:F(e.name),children:[(0,u.t)("Sign in with")," ",o()(e.name)]})})))})}),D===n.AuthOauth&&(0,l.Y)(f.s,{justify:"center",gap:0,vertical:!0,children:(0,l.Y)(m.l,{layout:"vertical",requiredMark:"optional",form:e,children:x.map((e=>(0,l.Y)(m.l.Item,{children:(0,l.FD)(g.$,{href:$(e.name),block:!0,iconPosition:"start",icon:F(e.name),children:[(0,u.t)("Sign in with")," ",o()(e.name)]})})))})}),(D===n.AuthDB||D===n.AuthLDAP)&&(0,l.FD)(f.s,{justify:"center",vertical:!0,gap:"middle",children:[(0,l.Y)(d.o.Text,{type:"secondary",children:(0,u.t)("Enter your login and password below:")}),(0,l.FD)(m.l,{layout:"vertical",requiredMark:"optional",form:e,onFinish:e=>{r(!0),s.A.postForm(h,e,"").finally((()=>{r(!1)}))},children:[(0,l.Y)(m.l.Item,{label:(0,l.Y)(w,{children:(0,u.t)("Username:")}),name:"username",rules:[{required:!0,message:(0,u.t)("Please enter your username")}],children:(0,l.Y)(A.A,{autoFocus:!0,prefix:(0,l.Y)(p.F.UserOutlined,{iconSize:"l"})})}),(0,l.Y)(m.l.Item,{label:(0,l.Y)(w,{children:(0,u.t)("Password:")}),name:"password",rules:[{required:!0,message:(0,u.t)("Please enter your password")}],children:(0,l.Y)(A.A.Password,{prefix:(0,l.Y)(p.F.KeyOutlined,{iconSize:"l"})})}),(0,l.Y)(m.l.Item,{label:null,children:(0,l.FD)(f.s,{css:c.AH`
                    width: 100%;
                  `,children:[(0,l.Y)(g.$,{block:!0,type:"primary",htmlType:"submit",loading:t,children:(0,u.t)("Sign in")}),I&&(0,l.Y)(g.$,{block:!0,type:"default",href:"/register/",children:(0,u.t)("Register")})]})})]})]})]})})}},96493:e=>{e.exports={cap:!1,curry:!1,fixed:!1,immutable:!1,rearg:!1}}}]);