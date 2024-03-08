"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[435],{55678:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var t=i(74848),o=i(28453);const c={title:"Ping Identity",description:"Learn how to configure Ping Identity as an identity provider for NocoDB.",tags:["SSO","Ping Identity","SAML"],keywords:["SSO","Ping Identity","SAML","Authentication","Identity Provider"]},s=void 0,r={id:"account-settings/authentication/SAML-SSO/ping-identity",title:"Ping Identity",description:"Learn how to configure Ping Identity as an identity provider for NocoDB.",source:"@site/docs/140.account-settings/030.authentication/030.SAML-SSO/030.ping-identity.md",sourceDirName:"140.account-settings/030.authentication/030.SAML-SSO",slug:"/account-settings/authentication/SAML-SSO/ping-identity",permalink:"/account-settings/authentication/SAML-SSO/ping-identity",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/140.account-settings/030.authentication/030.SAML-SSO/030.ping-identity.md",tags:[{label:"SSO",permalink:"/tags/sso"},{label:"Ping Identity",permalink:"/tags/ping-identity"},{label:"SAML",permalink:"/tags/saml"}],version:"current",sidebarPosition:30,frontMatter:{title:"Ping Identity",description:"Learn how to configure Ping Identity as an identity provider for NocoDB.",tags:["SSO","Ping Identity","SAML"],keywords:["SSO","Ping Identity","SAML","Authentication","Identity Provider"]},sidebar:"tutorialSidebar",previous:{title:"Auth0",permalink:"/account-settings/authentication/SAML-SSO/auth0"},next:{title:"Azure AD (Entra)",permalink:"/account-settings/authentication/SAML-SSO/azure-ad"}},d={},a=[{value:"NocoDB, Retrieve <code>SAML SSO</code> Configuration details",id:"nocodb-retrieve-saml-sso-configuration-details",level:3},{value:"Ping Identity, Configure NocoDB as an Application",id:"ping-identity-configure-nocodb-as-an-application",level:3},{value:"NocoDB, Configure Ping Identity as an Identity Provider",id:"nocodb-configure-ping-identity-as-an-identity-provider",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For SSO Access - please reach ",(0,t.jsx)(n.a,{href:"https://calendly.com/nocodb",children:(0,t.jsx)(n.strong,{children:"out to sales team"})}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"This article briefs about the steps to configure Auth0 as Identity service provider for NocoDB"}),"\n",(0,t.jsxs)(n.h3,{id:"nocodb-retrieve-saml-sso-configuration-details",children:["NocoDB, Retrieve ",(0,t.jsx)(n.code,{children:"SAML SSO"})," Configuration details"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Account Settings"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Authentication (SSO)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"New Provider"})," button"]}),"\n",(0,t.jsxs)(n.li,{children:["On the Popup modal, Specify a ",(0,t.jsx)(n.code,{children:"Display name"})," for the provider; note that, this name will be used to display the provider on the login page"]}),"\n",(0,t.jsxs)(n.li,{children:["Retrieve ",(0,t.jsx)(n.code,{children:"Redirect URL"})," & ",(0,t.jsx)(n.code,{children:"Audience / Entity ID"}),"; these information will be required to be configured later with the Identity Provider"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(21861).A+"",width:"2420",height:"1306"}),"\n",(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(88546).A+"",width:"2162",height:"1446"}),"\n",(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(79051).A+"",width:"1366",height:"1614"})]}),"\n",(0,t.jsx)(n.h3,{id:"ping-identity-configure-nocodb-as-an-application",children:"Ping Identity, Configure NocoDB as an Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Access your ",(0,t.jsx)(n.a,{href:"https://www.pingidentity.com/en/account/sign-on.html",children:"PingOne account"})," and navigate to the homepage."]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"Add Environment"})," from the top right corner."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.code,{children:"Create Environment"})," screen,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Opt for ",(0,t.jsx)(n.code,{children:"Build your own solution"})]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.code,{children:"Select solution(s) for your Environment"})," section, select ",(0,t.jsx)(n.code,{children:"PingOne SSO"})," from ",(0,t.jsx)(n.code,{children:"Cloud Services"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Next"})]}),"\n",(0,t.jsx)(n.li,{children:"Provide a name and description for the environment,"}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Next"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Access the newly created environment and go to ",(0,t.jsx)(n.code,{children:"Connections"})," > ",(0,t.jsx)(n.code,{children:"Applications"})," from the sidebar."]}),"\n",(0,t.jsx)(n.li,{children:'Within the Applications homepage, initiate the creation of a new application by clicking the "+" icon.'}),"\n",(0,t.jsxs)(n.li,{children:['On the "Add Application" panel:',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Input the application name and description."}),"\n",(0,t.jsx)(n.li,{children:'Choose "SAML Application" as the Application Type and click "Configure."'}),"\n",(0,t.jsx)(n.li,{children:'Within the SAML Configuration panel, opt for "Manually Enter."'}),"\n",(0,t.jsxs)(n.li,{children:["Populate the ",(0,t.jsx)(n.code,{children:"ACS URLs"})," field with the ",(0,t.jsx)(n.code,{children:"Redirect URL"})," retrieved from step (2) above"]}),"\n",(0,t.jsxs)(n.li,{children:["Insert the ",(0,t.jsx)(n.code,{children:"Audience URI"})," retrieved above in step (2) in the ",(0,t.jsx)(n.code,{children:"Entity ID"})," field"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Save"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["In your application,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"Configurations"})," tab"]}),"\n",(0,t.jsxs)(n.li,{children:["Copy the ",(0,t.jsx)(n.code,{children:"IDP Metadata URL"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"On your application panel, activate user access to the application by toggling the switch in the top right corner."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"nocodb-configure-ping-identity-as-an-identity-provider",children:"NocoDB, Configure Ping Identity as an Identity Provider"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Account Settings"})," > ",(0,t.jsx)(n.code,{children:"Authentication"})," > ",(0,t.jsx)(n.code,{children:"SAML"})]}),"\n",(0,t.jsxs)(n.li,{children:["Insert ",(0,t.jsx)(n.code,{children:"Metadata URL"})," retrieved in step above; alternatively you can configure XML directly as well"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Save"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(12788).A+"",width:"1366",height:"1614"})}),"\n",(0,t.jsxs)(n.p,{children:["For Sign-in's, user should be able to now see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(95652).A+"",width:"1712",height:"1442"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Post sign-out, refresh page (for the first time) if you do not see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option"]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},88546:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-2-9ad2e18f3eb498cd699d0f627fb2bb65.png"},79051:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-3-3f208fb861d8e91cb30ecba18c9d7ae8.png"},12788:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-4-f2e6f8c1cb091f01fbc7c0901bf1fc84.png"},21861:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-1-aa9135167c7a7cfb680e4fa5e50c86a4.png"},95652:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-SignIn-1221ec860763be25257e0e80e24891ec.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(96540);const o={},c=t.createContext(o);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);