"use strict";(self.webpackChunkhowdy_site=self.webpackChunkhowdy_site||[]).push([[734],{2271:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(4848),r=t(8453);const a={sidebar_position:1},i="AWS KMS keys with SSM secure strings",o={id:"writing/aws/kms-ssm-encryption",title:"AWS KMS keys with SSM secure strings",description:"So today we learned a fun scenario with Secure Strings and how they are decrypted. So aws has what I guess are account managed keys, per service. So for ssm there is an aws managed key \u201caws/ssm\u201d which is the normal default for encrypting ssm secure strings. And since this is an account managed key when a resource tries to access that secure key (As long as it has the correct get parameter access) it should have no problem getting it.",source:"@site/docs/writing/aws/kms-ssm-encryption.md",sourceDirName:"writing/aws",slug:"/writing/aws/kms-ssm-encryption",permalink:"/docs/writing/aws/kms-ssm-encryption",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"writingSidebar",previous:{title:"AWS Learnings",permalink:"/docs/category/aws-learnings"}},c={},d=[];function h(e){const s={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"aws-kms-keys-with-ssm-secure-strings",children:"AWS KMS keys with SSM secure strings"})}),"\n",(0,n.jsx)(s.p,{children:"So today we learned a fun scenario with Secure Strings and how they are decrypted. So aws has what I guess are account managed keys, per service. So for ssm there is an aws managed key \u201caws/ssm\u201d which is the normal default for encrypting ssm secure strings. And since this is an account managed key when a resource tries to access that secure key (As long as it has the correct get parameter access) it should have no problem getting it."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk",children:"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk"}),"\n",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/kms/latest/developerguide/services-parameter-store.html",children:"https://docs.aws.amazon.com/kms/latest/developerguide/services-parameter-store.html"})]}),"\n",(0,n.jsx)(s.p,{children:"What was learned is for secure strings you can choose different kms keys to encrypt and decrypt. The catch is since you are no longer using the managed key the resource trying to access the secure sting also needs an IAM permission to allow decryption with that key."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",metastring:"title=''",children:'{\n  "Action": "kms:Decrypt",\n  "Resource": "arn:aws:kms:us-east-1:XXX:key/XXX",\n  "Effect": "Allow"\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Docusaurus logo",src:t(8916).A+"",width:"275",height:"270"})})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8916:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/kms-settings-6c5b9023f56d32b6e4aa89944b2a41ed.png"},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var n=t(6540);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);