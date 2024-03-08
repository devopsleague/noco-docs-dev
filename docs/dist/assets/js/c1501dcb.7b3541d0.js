"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[1228],{9155:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>r});var s=n(74848),t=n(28453);const o={title:"Sync Schema",description:"Schema changes made to database from outside NocoDB GUI can be synced"},a=void 0,i={id:"setup-and-usages/sync-schema",title:"Sync Schema",description:"Schema changes made to database from outside NocoDB GUI can be synced",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/120.sync-schema.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/sync-schema",permalink:"/0.109.7/setup-and-usages/sync-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/versioned_docs/version-0.109.7/030.setup-and-usages/120.sync-schema.md",tags:[],version:"0.109.7",sidebarPosition:120,frontMatter:{title:"Sync Schema",description:"Schema changes made to database from outside NocoDB GUI can be synced"},sidebar:"tutorialSidebar",previous:{title:"Display Value",permalink:"/0.109.7/setup-and-usages/display-value"},next:{title:"Share Base",permalink:"/0.109.7/setup-and-usages/share-base"}},d={},r=[{value:"How to sync schema changes to NocoDB",id:"how-to-sync-schema-changes-to-nocodb",level:2},{value:"1. From the <code>Project menu</code>, click <code>Team &amp; Settings</code>",id:"1-from-the-project-menu-click-team--settings",level:3},{value:"2. Click <code>Data Source</code> under SETTINGS, click <code>Sync Metadata</code> on the target base",id:"2-click-data-source-under-settings-click-sync-metadata-on-the-target-base",level:3},{value:"3. Changes carried outside GUI, identified by NocoDB are listed under <code>Sync state</code>",id:"3-changes-carried-outside-gui-identified-by-nocodb-are-listed-under-sync-state",level:3},{value:"4. Click <code>Sync Now</code> to complete Schema sync procedure",id:"4-click-sync-now-to-complete-schema-sync-procedure",level:3},{value:"Notes",id:"notes",level:4}];function l(e){const c={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.h2,{id:"how-to-sync-schema-changes-to-nocodb",children:"How to sync schema changes to NocoDB"}),"\n",(0,s.jsx)(c.p,{children:"NocoDB allows you to sync schema changes if you have made changes outside NocoDB GUI. However, it has to be noted then you will have to bring your own schema migrations for moving from one environment to other."}),"\n",(0,s.jsx)(c.p,{children:"Below are the steps to sync schema changes."}),"\n",(0,s.jsxs)(c.h3,{id:"1-from-the-project-menu-click-team--settings",children:["1. From the ",(0,s.jsx)(c.code,{children:"Project menu"}),", click ",(0,s.jsx)(c.code,{children:"Team & Settings"})]}),"\n",(0,s.jsx)("img",{width:"322",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194856648-67936db0-ee4d-4060-be3d-af9f86ef8fc6.png"}),"\n",(0,s.jsxs)(c.h3,{id:"2-click-data-source-under-settings-click-sync-metadata-on-the-target-base",children:["2. Click ",(0,s.jsx)(c.code,{children:"Data Source"})," under SETTINGS, click ",(0,s.jsx)(c.code,{children:"Sync Metadata"})," on the target base"]}),"\n",(0,s.jsx)(c.p,{children:(0,s.jsx)(c.img,{src:"https://user-images.githubusercontent.com/35857179/219831352-e6692ba5-5c94-4331-94ce-5796e57f87a1.png",alt:"image"})}),"\n",(0,s.jsx)(c.p,{children:(0,s.jsx)(c.img,{src:"https://user-images.githubusercontent.com/35857179/219831634-bbb6f256-45fb-4224-9f82-bc1bed6082db.png",alt:"image"})}),"\n",(0,s.jsxs)(c.h3,{id:"3-changes-carried-outside-gui-identified-by-nocodb-are-listed-under-sync-state",children:["3. Changes carried outside GUI, identified by NocoDB are listed under ",(0,s.jsx)(c.code,{children:"Sync state"})]}),"\n",(0,s.jsxs)(c.ul,{children:["\n",(0,s.jsxs)(c.li,{children:["If changes made to the database are not visible, click ",(0,s.jsx)(c.code,{children:"Reload"})]}),"\n",(0,s.jsxs)(c.li,{children:["Identified schema changes are identified for each table in ",(0,s.jsx)(c.code,{children:"red"})]}),"\n",(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:"Sync now"})," button gets activated, if Schema changes are identified by NocoDB"]}),"\n"]}),"\n",(0,s.jsx)(c.p,{children:(0,s.jsx)(c.img,{src:"https://user-images.githubusercontent.com/35857179/219831855-bcac229c-41b6-4689-b7e1-c3cdfe23a0a1.png",alt:"image"})}),"\n",(0,s.jsxs)(c.h3,{id:"4-click-sync-now-to-complete-schema-sync-procedure",children:["4. Click ",(0,s.jsx)(c.code,{children:"Sync Now"})," to complete Schema sync procedure"]}),"\n",(0,s.jsx)(c.h4,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(c.ol,{children:["\n",(0,s.jsxs)(c.li,{children:["Column rename operation will be treated like ",(0,s.jsx)(c.code,{children:"column delete"})," & ",(0,s.jsx)(c.code,{children:"column create"})," operation."]}),"\n",(0,s.jsxs)(c.li,{children:["Only table schema changes identified will be listed under ",(0,s.jsx)(c.code,{children:"Sync state"}),". Any changes to records are automatically synchronized."]}),"\n"]})]})}function h(e={}){const{wrapper:c}={...(0,t.R)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,c,n)=>{n.d(c,{R:()=>a,x:()=>i});var s=n(96540);const t={},o=s.createContext(t);function a(e){const c=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:c},e.children)}}}]);