"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7188],{24359:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>w,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=n(74848),o=n(28453);const s={title:"View overview",description:"Understanding Views in NocoDB!",tags:["Views","Overview"],keywords:["NocoDB view","Overview"]},r=void 0,a={id:"views/views-overview",title:"View overview",description:"Understanding Views in NocoDB!",source:"@site/docs/090.views/010.views-overview.md",sourceDirName:"090.views",slug:"/views/views-overview",permalink:"/views/views-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/090.views/010.views-overview.md",tags:[{label:"Views",permalink:"/tags/views"},{label:"Overview",permalink:"/tags/overview"}],version:"current",sidebarPosition:10,frontMatter:{title:"View overview",description:"Understanding Views in NocoDB!",tags:["Views","Overview"],keywords:["NocoDB view","Overview"]},sidebar:"tutorialSidebar",previous:{title:"Views",permalink:"/category/views"},next:{title:"Create view",permalink:"/views/create-view"}},l={},d=[{value:"View Types Supported",id:"view-types-supported",level:2},{value:"View Permission Types",id:"view-permission-types",level:2},{value:"Collaborative Views (default)",id:"collaborative-views-default",level:3},{value:"Locked Views",id:"locked-views",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Views within NocoDB not only allow you to tailor the visual presentation to your liking but also provide independent\ncontrol over sorting and filtering of records within each view. Each view maintains its unique configuration for\nfilters, data display, and enabled fields, ensuring that modifications of these configuration does not impact any other view.\nThis feature empowers users to efficiently personalize their data visualization while\nmaintaining the integrity of other views."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"View represents data from a table. Any updates to records in a view will be reflected in all other views of the same table."})}),"\n",(0,t.jsx)(i.h2,{id:"view-types-supported",children:"View Types Supported"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"view-types/grid",children:"Grid View"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"view-types/form",children:"Form View"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"view-types/gallery",children:"Gallery View"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"view-types/kanban",children:"Kanban View"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"view-types/calendar",children:"Calendar View"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"view-permission-types",children:"View Permission Types"}),"\n",(0,t.jsxs)(i.p,{children:["We can apply permission to each View. By default, views are ",(0,t.jsx)(i.code,{children:"Collaborative"}),". To see or change the view type, expand ",(0,t.jsx)(i.code,{children:"view-tool-bar-menu"})," as shown below."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"locked view",src:n(4655).A+"",width:"2320",height:"864"})}),"\n",(0,t.jsx)(i.h3,{id:"collaborative-views-default",children:"Collaborative Views (default)"}),"\n",(0,t.jsx)(i.p,{children:'By default, views are set to "Collaborative," allowing members with edit permissions or higher to modify view configurations. In this mode, all members can read and write data to the view. This is the default mode for all views.'}),"\n",(0,t.jsx)(i.h3,{id:"locked-views",children:"Locked Views"}),"\n",(0,t.jsx)(i.p,{children:'With "Locked Views," no one can edit the view configurations until they are unlocked. In this mode, all members are restricted to reading data from the view and are unable to make any changes to its settings or content. This mode is useful when you want to share a view with others but don\'t want them to make any changes to it.'})]})}function w(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4655:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/locked-view-98e409b4c0859f73d2d59b6e418d338b.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);