"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5745],{31231:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var i=l(74848),s=l(28453);const d={title:"Rollup",description:"This article explains how to create & work with a Rollup field.",tags:["Fields","Field types","Links based types","Rollup"],keywords:["Fields","Field types","Links based types","Rollup","Create rollup field"]},n=void 0,r={id:"fields/field-types/links-based/rollup",title:"Rollup",description:"This article explains how to create & work with a Rollup field.",source:"@site/docs/070.fields/040.field-types/040.links-based/030.rollup.md",sourceDirName:"070.fields/040.field-types/040.links-based",slug:"/fields/field-types/links-based/rollup",permalink:"/fields/field-types/links-based/rollup",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/040.links-based/030.rollup.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Links based types",permalink:"/tags/links-based-types"},{label:"Rollup",permalink:"/tags/rollup"}],version:"current",sidebarPosition:30,frontMatter:{title:"Rollup",description:"This article explains how to create & work with a Rollup field.",tags:["Fields","Field types","Links based types","Rollup"],keywords:["Fields","Field types","Links based types","Rollup","Create rollup field"]},sidebar:"tutorialSidebar",previous:{title:"Lookup",permalink:"/fields/field-types/links-based/lookup"},next:{title:"Custom types",permalink:"/category/custom-types"}},a={},o=[{value:"Create a Rollup Field",id:"create-a-rollup-field",level:2},{value:"Aggregation Functions",id:"aggregation-functions",level:3},{value:"Similar links-based fields",id:"similar-links-based-fields",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Rollup"})," fields are used to aggregate data from fields in the related table. Often used to calculate totals, averages, and other aggregate data."]}),"\n",(0,i.jsx)(t.h2,{id:"create-a-rollup-field",children:"Create a Rollup Field"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"+"})," icon to the right of ",(0,i.jsx)(t.code,{children:"Fields header"})]}),"\n",(0,i.jsx)(t.li,{children:"On the dropdown modal, enter the field name (Optional)."}),"\n",(0,i.jsxs)(t.li,{children:["Select the field type as ",(0,i.jsx)(t.code,{children:"Lookup"})," from the dropdown."]}),"\n",(0,i.jsx)(t.li,{children:"Select the link field from the dropdown. This is the field that links the current table to the related table."}),"\n",(0,i.jsx)(t.li,{children:"Select the field for display from the dropdown. This is the field that will be displayed in the current table."}),"\n",(0,i.jsx)(t.li,{children:"Select the aggregation function from the dropdown. This is the function that will be used to aggregate the data."}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"Save Field"})," button."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image",src:l(10558).A+"",width:"2880",height:"1480"})}),"\n",(0,i.jsx)(t.h3,{id:"aggregation-functions",children:"Aggregation Functions"}),"\n",(0,i.jsx)(t.p,{children:"Here's a table with brief descriptions for each of the aggregation functions supported by NocoDB:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Aggregation Function"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Count"}),(0,i.jsx)(t.td,{children:"Counts the number of records in a dataset."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Minimum"}),(0,i.jsx)(t.td,{children:"Retrieves the minimum value from a dataset."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Maximum"}),(0,i.jsx)(t.td,{children:"Retrieves the maximum value from a dataset."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Average"}),(0,i.jsx)(t.td,{children:"Calculates the average value in a dataset."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Sum"}),(0,i.jsx)(t.td,{children:"Adds up all the values in a dataset."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Count Distinct"}),(0,i.jsx)(t.td,{children:"Counts the number of distinct values in a dataset."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Sum Distinct"}),(0,i.jsx)(t.td,{children:"Adds up all the distinct values in a dataset."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Average Distinct"}),(0,i.jsx)(t.td,{children:"Calculates the average of distinct values in a dataset."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"similar-links-based-fields",children:"Similar links-based fields"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/fields/field-types/links-based/links",children:"Links"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/fields/field-types/links-based/lookup",children:"Lookup"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},10558:(e,t,l)=>{l.d(t,{A:()=>i});const i=l.p+"assets/images/rollup-bf68cdbc91743484a43f978f74ce18ef.png"},28453:(e,t,l)=>{l.d(t,{R:()=>n,x:()=>r});var i=l(96540);const s={},d=i.createContext(s);function n(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);