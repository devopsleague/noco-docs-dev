"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[2558],{54652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var l=n(74848),s=n(28453);const i={title:"Team & Auth",description:"Breakdown of roles & permissions for team user management"},r=void 0,d={id:"setup-and-usages/team-and-auth",title:"Team & Auth",description:"Breakdown of roles & permissions for team user management",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/230.team-and-auth.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/team-and-auth",permalink:"/0.109.7/setup-and-usages/team-and-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/versioned_docs/version-0.109.7/030.setup-and-usages/230.team-and-auth.md",tags:[],version:"0.109.7",sidebarPosition:230,frontMatter:{title:"Team & Auth",description:"Breakdown of roles & permissions for team user management"},sidebar:"tutorialSidebar",previous:{title:"Links",permalink:"/0.109.7/setup-and-usages/links"},next:{title:"Data Sources",permalink:"/0.109.7/setup-and-usages/meta-management"}},c={},x=[{value:"Accessing Team &amp; Auth",id:"accessing-team--auth",level:2},{value:"User Management",id:"user-management",level:2},{value:"How to Add a User",id:"how-to-add-a-user",level:3},{value:"How to Update user permissions",id:"how-to-update-user-permissions",level:3},{value:"User Role Permissions",id:"user-role-permissions",level:3},{value:"Advanced Options &amp; Configurations",id:"advanced-options--configurations",level:3},{value:"Schema Options",id:"schema-options",level:3},{value:"Record Options",id:"record-options",level:3},{value:"Comments",id:"comments",level:3},{value:"Views",id:"views",level:3},{value:"Project Generals",id:"project-generals",level:3},{value:"API Tokens Management",id:"api-tokens-management",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"accessing-team--auth",children:"Accessing Team & Auth"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Click on ",(0,l.jsx)(t.code,{children:"Team & Settings"})," from the ",(0,l.jsx)(t.code,{children:"Project Menu"})]}),"\n",(0,l.jsxs)(t.li,{children:["Access ",(0,l.jsx)(t.code,{children:"Team & Auth"})," under ",(0,l.jsx)(t.code,{children:"Settings"})]}),"\n"]}),"\n",(0,l.jsx)("img",{width:"322",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194856648-67936db0-ee4d-4060-be3d-af9f86ef8fc6.png"}),"\n",(0,l.jsx)(t.h2,{id:"user-management",children:"User Management"}),"\n",(0,l.jsx)(t.h3,{id:"how-to-add-a-user",children:"How to Add a User"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Go to ",(0,l.jsx)(t.code,{children:"Team & Auth"}),", click on ",(0,l.jsx)(t.code,{children:"Invite Team"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/35857179/219830800-481f372f-86b1-4e2f-865d-3fb7c10663f7.png",alt:"image"})}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsxs)(t.li,{children:["Enter the user's ",(0,l.jsx)(t.code,{children:"E-mail"}),". Select ",(0,l.jsx)(t.code,{children:"User Role"}),", and Click ",(0,l.jsx)(t.code,{children:"Invite"}),"."]}),"\n"]}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"You can add multiple comma (,) seperated emails"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/189817152-83fca866-7713-49ee-8068-d3eba1311353.png",alt:"Screenshot 2022-09-13 at 10 54 39 AM"})}),"\n",(0,l.jsx)(t.p,{children:"If you do not have an SMTP sender configured, make sure to copy the invite link and manually send it to your collaborator."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/189817156-f3dab634-dc25-4f9b-8126-865187aae254.png",alt:"Screenshot 2022-09-13 at 10 54 22 AM"})}),"\n",(0,l.jsx)(t.h3,{id:"how-to-update-user-permissions",children:"How to Update user permissions"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Use ",(0,l.jsx)(t.code,{children:"Edit"})," ","<","1",">"," menu to assign a different role to existing user"]}),"\n",(0,l.jsxs)(t.li,{children:["Use ",(0,l.jsx)(t.code,{children:"Delete"})," ","<","2",">"," menu to remove a user from accessing current project"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/35857179/219830858-be7a4656-9f3b-440c-9a79-165f919223d7.png",alt:"image"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"user-role-permissions",children:"User Role Permissions"}),"\n",(0,l.jsx)(t.h3,{id:"advanced-options--configurations",children:"Advanced Options & Configurations"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Owner \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Creator \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Editor \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Viewer \xa0 \xa0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Audit"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"App Store"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Team & Auth"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Metadata"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"New user: Add Owner"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"New user: Add Creator"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"New user: Add Editor"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"New user: Add Commenter"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"New user: Add Viewer"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"View existing users"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preview mode"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"schema-options",children:"Schema Options"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Owner \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Creator \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Editor \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Viewer \xa0 \xa0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Add table"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Delete table"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Modify table"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Add column"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Delete column"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Modify column"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"record-options",children:"Record Options"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Owner \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Creator \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Editor \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Viewer \xa0 \xa0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Add row"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Delete row"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Modify row/ cell"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Expand row"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Right click on cell (add/edit row)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"View table data (cell) contents"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"comments",children:"Comments"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Owner \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Creator \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Editor \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Viewer \xa0 \xa0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"View comments from others"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Add comments"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"views",children:"Views"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Owner \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Creator \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Editor \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Viewer \xa0 \xa0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Create new view"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Share view"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"project-generals",children:"Project Generals"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Owner \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Creator \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Editor \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Commenter"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0 \xa0 Viewer \xa0 \xa0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Created views access"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Filter fields/ Column"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Filter fields/ Query"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Sort fields"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Theme"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Auth token"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Info"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Swagger API"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"api-tokens-management",children:"API Tokens Management"}),"\n",(0,l.jsxs)(t.p,{children:["NocoDB allows creating API tokens which allow it to be integrated seamlessly with 3rd party apps. API Token is a Nano ID with a length of 40. If you are passing API Token, make sure that the header is called ",(0,l.jsx)(t.code,{children:"xc-token"}),"."]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Open ",(0,l.jsx)(t.code,{children:"Project Menu"}),", click on ",(0,l.jsx)(t.code,{children:"Team & Settings"})]}),"\n"]}),"\n",(0,l.jsx)("img",{width:"322",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194856648-67936db0-ee4d-4060-be3d-af9f86ef8fc6.png"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Click ",(0,l.jsx)(t.code,{children:"API Tokens Management"})," tab under ",(0,l.jsx)(t.code,{children:"Team & Auth"})," section"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Click Add New Token"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/35857179/219835108-037127bd-4bf6-4d96-b691-139bd141631c.png",alt:"image"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Type an recognizable name for your token and click ",(0,l.jsx)(t.code,{children:"Generate"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/190062801-db3fab83-7974-4dfe-9c83-bf0d8a7dba1e.png",alt:"Screenshot 2022-09-14 at 10 20 10 AM"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Copy API token to your clipboard; use action menu to the right of token list"}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var l=n(96540);const s={},i=l.createContext(s);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);