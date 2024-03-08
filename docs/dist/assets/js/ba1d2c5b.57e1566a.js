"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9411],{13465:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=i(74848),t=i(28453);const a={title:"Import Airtable to NocoDB",description:"A complete import of your Airtable to any MySQL or Postgres databases within minutes",tags:["Bases","Import"],keywords:["NocoDB","Airtable","Import Airtable","Airtable to NocoDB","Airtable to MySQL","Airtable to Postgres"]},n=void 0,o={id:"bases/import-base-from-airtable",title:"Import Airtable to NocoDB",description:"A complete import of your Airtable to any MySQL or Postgres databases within minutes",source:"@site/docs/040.bases/040.import-base-from-airtable.md",sourceDirName:"040.bases",slug:"/bases/import-base-from-airtable",permalink:"/bases/import-base-from-airtable",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/040.bases/040.import-base-from-airtable.md",tags:[{label:"Bases",permalink:"/tags/bases"},{label:"Import",permalink:"/tags/import"}],version:"current",sidebarPosition:40,frontMatter:{title:"Import Airtable to NocoDB",description:"A complete import of your Airtable to any MySQL or Postgres databases within minutes",tags:["Bases","Import"],keywords:["NocoDB","Airtable","Import Airtable","Airtable to NocoDB","Airtable to MySQL","Airtable to Postgres"]},sidebar:"tutorialSidebar",previous:{title:"Create base",permalink:"/bases/create-base"},next:{title:"Base collaboration",permalink:"/bases/base-collaboration"}},l={},c=[{value:"Configuration options",id:"configuration-options",level:3},{value:"Get Airtable Credentials",id:"get-airtable-credentials",level:2},{value:"Create Personal Access Token",id:"create-personal-access-token",level:3},{value:"Retrieve API Key",id:"retrieve-api-key",level:3},{value:"Retrieve Share Base ID / URL",id:"retrieve-share-base-id--url",level:3},{value:"Related articles",id:"related-articles",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"NocoDB offers a streamlined process for seamlessly transferring your Airtable database to various database management systems, including MySQL, Postgres and SQLite, in just a matter of minutes. This feature is particularly useful for users who wish to migrate their Airtable database to a more robust and scalable database management system."}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Import from Airtable is in beta version. See ",(0,r.jsx)(s.a,{href:"https://github.com/nocodb/nocodb/discussions/2122",children:"Importing Airtable To NocoDB"})," for the migration notes."]})}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"To proceed, you must have valid Airtable Credentials. Ensure you have access to the following information from your Airtable account:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"#retrieve-api-key",children:"API key"})," or ",(0,r.jsx)(s.a,{href:"#create-personal-access-token",children:"Personal Access Token"})]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#retrieve-share-base-id--url",children:"Shared Base ID / URL"})}),"\n"]})]}),"\n",(0,r.jsxs)(s.p,{children:["Open the ",(0,r.jsx)(s.code,{children:"Quick Import- AIRTABLE"})," modal begin the import process"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Hover over the base name in the left sidebar, click on the ",(0,r.jsx)(s.code,{children:"..."})," icon to open base context menu"]}),"\n",(0,r.jsxs)(s.li,{children:["Select ",(0,r.jsx)(s.code,{children:"Import Data"})," from the base context menu"]}),"\n",(0,r.jsxs)(s.li,{children:["Select ",(0,r.jsx)(s.code,{children:"Airtable"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"import data",src:i(87296).A+"",width:"2880",height:"1800"})}),"\n",(0,r.jsxs)(s.p,{children:["Alternatively, you can also open the ",(0,r.jsx)(s.code,{children:"Quick Import- AIRTABLE"})," modal from the ",(0,r.jsx)(s.code,{children:"Base dashboard"})]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Go to your Base dashboard, click on ",(0,r.jsx)(s.code,{children:"Import Data"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Select ",(0,r.jsx)(s.code,{children:"Airtable"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"import data",src:i(70871).A+"",width:"2878",height:"1208"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"import data",src:i(46940).A+"",width:"2878",height:"1800"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Continue with the following steps on ",(0,r.jsx)(s.code,{children:"Quick Import- AIRTABLE"})," modal to complete the import process:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Input ",(0,r.jsx)(s.a,{href:"#retrieve-api-key",children:"API key"})," / ",(0,r.jsx)(s.a,{href:"#create-personal-access-token",children:"Personal Access Token"})]}),"\n",(0,r.jsxs)(s.li,{children:["Input ",(0,r.jsx)(s.a,{href:"#retrieve-share-base-id--url",children:"shared Base ID / URL"})]}),"\n",(0,r.jsxs)(s.li,{children:["Configure ",(0,r.jsx)(s.a,{href:"#configuration-options",children:"Airtable import options"}),"  (Optional)"]}),"\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.code,{children:"Import"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"import data",src:i(68507).A+"",width:"2880",height:"1800"})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Wait until ",(0,r.jsx)(s.code,{children:"Go To Dashboard"})," button is activated on the modal. Import details are captured in log window."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"import data",src:i(63314).A+"",width:"2880",height:"1800"})}),"\n",(0,r.jsx)(s.h3,{id:"configuration-options",children:"Configuration options"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Import Data"}),": If you disable this option, only tables and views will be created (schema), excluding actual data records."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Import Secondary Views"}),": If you disable this option, only the primary grid view for each table will be imported, omitting any secondary views."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Import Rollup Fields"}),": If you disable this option, you can skip the import of Rollup fields."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Import Lookup Fields"}),": If you disable this option, you can skip the import of Lookup fields."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Import Attachments Fields"}),": If you disable this option, you can skip the import of Attachment fields, which typically store file attachments associated with records."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Import Formula Fields"}),": Please be aware that import of formula fields from Airtable is currently not supported."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"get-airtable-credentials",children:"Get Airtable Credentials"}),"\n",(0,r.jsx)(s.h3,{id:"create-personal-access-token",children:"Create Personal Access Token"}),"\n",(0,r.jsx)(s.p,{children:"Here are the steps to generate an Airtable Personal Access Token:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Visit the ",(0,r.jsx)(s.a,{href:"https://airtable.com/create/tokens",children:"Airtable Create Tokens"}),' page and click the "Create token" button.']}),"\n",(0,r.jsxs)(s.li,{children:["Provide a meaningful name for your token in the ",(0,r.jsx)(s.code,{children:"Token name"})," field."]}),"\n",(0,r.jsxs)(s.li,{children:["Choose the necessary access scopes, with a minimum requirement of ",(0,r.jsx)(s.code,{children:"data.records:read"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Select the specific Base you wish to access with this token."}),"\n",(0,r.jsxs)(s.li,{children:["Confirm your choices by clicking the ",(0,r.jsx)(s.code,{children:"Create token"})," button."]}),"\n",(0,r.jsxs)(s.li,{children:["Copy the newly generated ",(0,r.jsx)(s.code,{children:"Personal Access Token"})," for your use."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For detailed information, you can refer to the ",(0,r.jsx)(s.a,{href:"https://airtable.com/developers/web/guides/personal-access-tokens",children:"Airtable Personal Access Token guide"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image",src:i(43409).A+"",width:"2876",height:"1576"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image",src:i(67162).A+"",width:"2876",height:"1576"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image",src:i(56995).A+"",width:"2876",height:"1576"})}),"\n",(0,r.jsx)(s.h3,{id:"retrieve-api-key",children:"Retrieve API Key"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Copy your Airtable API Key from ",(0,r.jsx)(s.a,{href:"https://airtable.com/create/apikey",children:"Airtable create API key"})," page\n",(0,r.jsx)(s.img,{alt:"API Key",src:i(57919).A+"",width:"2878",height:"996"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"retrieve-share-base-id--url",children:"Retrieve Share Base ID / URL"}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"https://support.airtable.com/hc/en-us/articles/205752117-Creating-a-base-share-link-or-a-view-share-link#basesharelink",children:"here"})," for detailed procedures."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Open ",(0,r.jsx)(s.code,{children:"Share"})," menu in your Project / Base"]}),"\n",(0,r.jsxs)(s.li,{children:["Open tab ",(0,r.jsx)(s.code,{children:"Share Publicly"})]}),"\n",(0,r.jsxs)(s.li,{children:["Enable ",(0,r.jsx)(s.code,{children:"Turn on full base access"})]}),"\n",(0,r.jsx)(s.li,{children:"Copy generated shared base URL"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Shared base",src:i(89148).A+"",width:"2876",height:"1422"})}),"\n",(0,r.jsx)(s.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/bases/base-overview",children:"Base overview"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/bases/create-base",children:"Create an empty base"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/bases/import-base-from-airtable",children:"Import base from Airtable"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/bases/base-collaboration",children:"Invite team members to work on a base"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/bases/share-base",children:"Share base publicly"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/bases/actions-on-base#rename-base",children:"Rename base"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/bases/actions-on-base#duplicate-base",children:"Duplicate base"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/bases/actions-on-base#star-base",children:"Bookmark base"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/bases/actions-on-base#delete-base",children:"Delete base"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},57919:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/airtable-api-key-877ce3d40ba4f18389ceede7c4fa50bb.png"},89148:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/airtable-share-base-c48341713680e60f512768432df19fec.png"},87296:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/base-import-airtable-1-3370c224db06eadddda7dd6224076af1.png"},68507:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/base-import-airtable-2-a758f2600b298ba29594cfb8da91e1a2.png"},63314:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/base-import-airtable-3-ff5f7ad98f229f0fcd630c0eea1432d6.png"},70871:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/base-import-from-dashboard-1-0ccc1e3e8508c11049dd45647d6c0f91.png"},46940:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/base-import-from-dashboard-2-d10a91e0ec28bbe4c620cdc5d4e871d6.png"},43409:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/pat-1-b1eb986ad72a1c426ccd1ad338b26ecc.png"},67162:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/pat-2-a3fcb811ed325a6d621f45e17e3aee2f.png"},56995:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/pat-3-fd78b26e00f9f01f395a073e54c465f6.png"},28453:(e,s,i)=>{i.d(s,{R:()=>n,x:()=>o});var r=i(96540);const t={},a=r.createContext(t);function n(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);