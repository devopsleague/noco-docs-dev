"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5259],{56788:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var t=i(74848),o=i(28453);const c={title:"Keycloak",description:"Learn how to configure Keycloak as an identity provider for NocoDB.",tags:["SSO","Keycloak","SAML"],keywords:["SSO","Keycloak","SAML","Authentication","Identity Provider"]},s=void 0,r={id:"account-settings/authentication/SAML-SSO/keycloak",title:"Keycloak",description:"Learn how to configure Keycloak as an identity provider for NocoDB.",source:"@site/docs/140.account-settings/030.authentication/030.SAML-SSO/050.keycloak.md",sourceDirName:"140.account-settings/030.authentication/030.SAML-SSO",slug:"/account-settings/authentication/SAML-SSO/keycloak",permalink:"/account-settings/authentication/SAML-SSO/keycloak",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/140.account-settings/030.authentication/030.SAML-SSO/050.keycloak.md",tags:[{label:"SSO",permalink:"/tags/sso"},{label:"Keycloak",permalink:"/tags/keycloak"},{label:"SAML",permalink:"/tags/saml"}],version:"current",sidebarPosition:50,frontMatter:{title:"Keycloak",description:"Learn how to configure Keycloak as an identity provider for NocoDB.",tags:["SSO","Keycloak","SAML"],keywords:["SSO","Keycloak","SAML","Authentication","Identity Provider"]},sidebar:"tutorialSidebar",previous:{title:"Azure AD (Entra)",permalink:"/account-settings/authentication/SAML-SSO/azure-ad"},next:{title:"OpenID Connect",permalink:"/category/openid-connect"}},d={},l=[{value:"NocoDB, Retrieve <code>SAML SSO</code> Configuration details",id:"nocodb-retrieve-saml-sso-configuration-details",level:3},{value:"Keycloak, Configure NocoDB as an Application",id:"keycloak-configure-nocodb-as-an-application",level:3},{value:"NocoDB, Configure Azure AD as an Identity Provider",id:"nocodb-configure-azure-ad-as-an-identity-provider",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For SSO Access - please reach ",(0,t.jsx)(n.a,{href:"https://calendly.com/nocodb",children:(0,t.jsx)(n.strong,{children:"out to sales team"})}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"This article briefs about the steps to configure Keycloak as Identity service provider for NocoDB"}),"\n",(0,t.jsxs)(n.h3,{id:"nocodb-retrieve-saml-sso-configuration-details",children:["NocoDB, Retrieve ",(0,t.jsx)(n.code,{children:"SAML SSO"})," Configuration details"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Account Settings"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Authentication (SSO)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"New Provider"})," button"]}),"\n",(0,t.jsxs)(n.li,{children:["On the Popup modal, Specify a ",(0,t.jsx)(n.code,{children:"Display name"})," for the provider; note that, this name will be used to display the provider on the login page"]}),"\n",(0,t.jsxs)(n.li,{children:["Retrieve ",(0,t.jsx)(n.code,{children:"Redirect URL"})," & ",(0,t.jsx)(n.code,{children:"Audience / Entity ID"}),"; these information will be required to be configured later with the Identity Provider"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(21861).A+"",width:"2420",height:"1306"}),"\n",(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(88546).A+"",width:"2162",height:"1446"}),"\n",(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(79051).A+"",width:"1366",height:"1614"})]}),"\n",(0,t.jsx)(n.h3,{id:"keycloak-configure-nocodb-as-an-application",children:"Keycloak, Configure NocoDB as an Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Access your Keycloak account","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["navigate to ",(0,t.jsx)(n.code,{children:"Clients"})," menu"]}),"\n",(0,t.jsxs)(n.li,{children:["select ",(0,t.jsx)(n.code,{children:"Clients list"})," tab > Click ",(0,t.jsx)(n.code,{children:"Create client"})," button."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.code,{children:"Create Client"})," modal, ",(0,t.jsx)(n.code,{children:"General Settings"})," tab:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"SAML"})," as the ",(0,t.jsx)(n.code,{children:"Client type"})]}),"\n",(0,t.jsxs)(n.li,{children:["Specify ",(0,t.jsx)(n.code,{children:"Audience/Entity ID"})," retrieved from NocoDB as the ",(0,t.jsx)(n.code,{children:"Client ID"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Next"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.code,{children:"Create Client"})," modal, ",(0,t.jsx)(n.code,{children:"Login Settings"})," tab,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Specify ",(0,t.jsx)(n.code,{children:"Redirect URL"})," retrieved from NocoDB as the ",(0,t.jsx)(n.code,{children:"Valid Redirect URIs"})]}),"\n",(0,t.jsxs)(n.li,{children:["Specify ",(0,t.jsx)(n.code,{children:"Redirect URL"})," retrieved from NocoDB as the ",(0,t.jsx)(n.code,{children:"Valid post logout redirect URIs"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Save"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.code,{children:"Client details"}),", ",(0,t.jsx)(n.code,{children:"Settings"})," tab,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["navigate to ",(0,t.jsx)(n.code,{children:"SAML Capabilities"})," section"]}),"\n",(0,t.jsxs)(n.li,{children:["Specify ",(0,t.jsx)(n.code,{children:"Name ID format"})," as ",(0,t.jsx)(n.code,{children:"email"})]}),"\n",(0,t.jsxs)(n.li,{children:["Enable ",(0,t.jsx)(n.code,{children:"Force Name ID Format"})," and ",(0,t.jsx)(n.code,{children:"Force POST Binding"})]}),"\n",(0,t.jsxs)(n.li,{children:["navigate to ",(0,t.jsx)(n.code,{children:"Signature and Encryption"})," section"]}),"\n",(0,t.jsxs)(n.li,{children:["Enable ",(0,t.jsx)(n.code,{children:"Sign Assertions"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Save"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.code,{children:"Client details"}),", ",(0,t.jsx)(n.code,{children:"Keys"})," tab,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Disable ",(0,t.jsx)(n.code,{children:"Signing keys config"})," > ",(0,t.jsx)(n.code,{children:"Client Signature Required"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.code,{children:"Realm Settings"})," > ",(0,t.jsx)(n.code,{children:"Endpoints"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Copy ",(0,t.jsx)(n.code,{children:"SAML 2.0 Identity Provider Metadata"})," URL"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"nocodb-configure-azure-ad-as-an-identity-provider",children:"NocoDB, Configure Azure AD as an Identity Provider"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Account Settings"})," > ",(0,t.jsx)(n.code,{children:"Authentication"})," > ",(0,t.jsx)(n.code,{children:"SAML"}),"Key"]}),"\n",(0,t.jsxs)(n.li,{children:["Insert ",(0,t.jsx)(n.code,{children:"Metadata URL"})," retrieved in step above; alternatively you can configure XML directly as well"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Save"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(12788).A+"",width:"1366",height:"1614"})}),"\n",(0,t.jsxs)(n.p,{children:["For Sign-in's, user should be able to now see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(95652).A+"",width:"1712",height:"1442"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Post sign-out, refresh page (for the first time) if you do not see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option"]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},88546:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-2-9ad2e18f3eb498cd699d0f627fb2bb65.png"},79051:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-3-3f208fb861d8e91cb30ecba18c9d7ae8.png"},12788:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-4-f2e6f8c1cb091f01fbc7c0901bf1fc84.png"},21861:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-1-aa9135167c7a7cfb680e4fa5e50c86a4.png"},95652:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-SignIn-1221ec860763be25257e0e80e24891ec.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(96540);const o={},c=t.createContext(o);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);