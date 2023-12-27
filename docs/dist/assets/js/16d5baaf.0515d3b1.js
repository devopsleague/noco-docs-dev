"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[65],{81980:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var l=i(85893),s=i(11151);const d={title:"Links",description:"This article explains how to create & work with a Links field.",tags:["Fields","Field types","Links based types","Links"],keywords:["Fields","Field types","Links based types","Links","Create links field"]},o=void 0,r={id:"fields/field-types/links-based/links",title:"Links",description:"This article explains how to create & work with a Links field.",source:"@site/docs/070.fields/040.field-types/040.links-based/010.links.md",sourceDirName:"070.fields/040.field-types/040.links-based",slug:"/fields/field-types/links-based/links",permalink:"/fields/field-types/links-based/links",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/040.links-based/010.links.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Links based types",permalink:"/tags/links-based-types"},{label:"Links",permalink:"/tags/links"}],version:"current",sidebarPosition:10,frontMatter:{title:"Links",description:"This article explains how to create & work with a Links field.",tags:["Fields","Field types","Links based types","Links"],keywords:["Fields","Field types","Links based types","Links","Create links field"]},sidebar:"tutorialSidebar",previous:{title:"Links based",permalink:"/category/links-based"},next:{title:"Lookup",permalink:"/fields/field-types/links-based/lookup"}},t={},c=[{value:"Create a link field",id:"create-a-link-field",level:2},{value:"Cell display",id:"cell-display",level:3},{value:"List linked records",id:"list-linked-records",level:3},{value:"Link new records",id:"link-new-records",level:3},{value:"Unlink records",id:"unlink-records",level:3},{value:"Related fields",id:"related-fields",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Links"})," field type is used to establish relationship between tables & create links to other records.\nNocoDB supports following types of relations:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Has-Many"})," - A record in one table can have multiple records in another table.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Example: A ",(0,l.jsx)(n.code,{children:"Country"})," can have multiple ",(0,l.jsx)(n.code,{children:"Cities"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Belongs-to"})," - Multiple records in one table can have a single record in another table.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Example: A ",(0,l.jsx)(n.code,{children:"City"})," ",(0,l.jsx)(n.code,{children:"Belongs-to"})," a ",(0,l.jsx)(n.code,{children:"Country"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Many-to-Many"})," - Multiple records in one table can have multiple records in another table.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Example: A ",(0,l.jsx)(n.code,{children:"Student"})," can have multiple ",(0,l.jsx)(n.code,{children:"Subjects"})," & a ",(0,l.jsx)(n.code,{children:"Subject"})," can have multiple ",(0,l.jsx)(n.code,{children:"Students"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Links can be created only between tables in the same database."}),"\n",(0,l.jsx)(n.li,{children:"Self-referencing links are supported. (Link to the same table)"}),"\n",(0,l.jsxs)(n.li,{children:["For every ",(0,l.jsx)(n.code,{children:"Has-Many"})," relation defined, NocoDB augments ",(0,l.jsx)(n.code,{children:"Belongs-to"})," relationship field in the adjacent table automatically"]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"create-a-link-field",children:"Create a link field"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Click on ",(0,l.jsx)(n.code,{children:"+"})," icon to the right of ",(0,l.jsx)(n.code,{children:"Fields header"})]}),"\n",(0,l.jsx)(n.li,{children:"On the dropdown modal, enter the field name (Optional)."}),"\n",(0,l.jsxs)(n.li,{children:["Select the field type as ",(0,l.jsx)(n.code,{children:"Links"})," from the dropdown."]}),"\n",(0,l.jsxs)(n.li,{children:["Select the relation type : Either ",(0,l.jsx)(n.code,{children:"Has-Many"})," or ",(0,l.jsx)(n.code,{children:"Many-to-Many"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Select the table to which the relation is to be established with."}),"\n",(0,l.jsxs)(n.li,{children:["Configure label to be used for display in the cell. Defaults to ",(0,l.jsx)(n.code,{children:"Link"}),", ",(0,l.jsx)(n.code,{children:"Links"})," (Optional)."]}),"\n",(0,l.jsxs)(n.li,{children:["Click on ",(0,l.jsx)(n.code,{children:"Save Field"})," button."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"image",src:i(42359).Z+"",width:"2872",height:"1546"})}),"\n",(0,l.jsx)(n.h3,{id:"cell-display",children:"Cell display"}),"\n",(0,l.jsx)(n.p,{children:"The cell will display number of links for a record to the related table."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"image",src:i(97802).Z+"",width:"1269",height:"512"})}),"\n",(0,l.jsxs)(n.p,{children:["Clicking on the link-text will open a ",(0,l.jsx)(n.code,{children:"Linked Records"})," modal with the list of links & associated additional information."]}),"\n",(0,l.jsx)(n.h3,{id:"list-linked-records",children:"List linked records"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"image",src:i(9763).Z+"",width:"1321",height:"868"})}),"\n",(0,l.jsx)(n.p,{children:"A brief note about the modal components:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["This modal is displaying linked records for ",(0,l.jsx)(n.code,{children:"PENELOPE"})]}),"\n",(0,l.jsxs)(n.li,{children:["Icon represents ",(0,l.jsx)(n.code,{children:"Many-to-Many"})," relation"]}),"\n",(0,l.jsxs)(n.li,{children:["Linked records belong to ",(0,l.jsx)(n.code,{children:"Film"})," table"]}),"\n",(0,l.jsx)(n.li,{children:"Search bar, to narrow down the list of linked records displayed"}),"\n",(0,l.jsx)(n.li,{children:"List (cards) of linked records"}),"\n",(0,l.jsxs)(n.li,{children:["To view additional information (expanded record), hover on the card & click on the ",(0,l.jsx)(n.code,{children:"<>"})," icon"]}),"\n",(0,l.jsx)(n.li,{children:"Indicates total records linked"}),"\n",(0,l.jsx)(n.li,{children:"Pagination bar"}),"\n",(0,l.jsxs)(n.li,{children:["Click on ",(0,l.jsx)(n.code,{children:"+ Link more Records"})," button to add new links : ",(0,l.jsx)(n.a,{href:"#link-new-records",children:"Read more"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"link-new-records",children:"Link new records"}),"\n",(0,l.jsx)(n.p,{children:"Modal to add new links can be opened by"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Clicking on ",(0,l.jsx)(n.code,{children:"+ Link more Records"})," button in the ",(0,l.jsx)(n.code,{children:"Linked Records"})," modal"]}),"\n",(0,l.jsxs)(n.li,{children:["Clicking on the ",(0,l.jsx)(n.code,{children:"+"})," icon in the cell (appears on clicking on the cell)"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"image",src:i(83107).Z+"",width:"791",height:"655"})}),"\n",(0,l.jsx)(n.p,{children:"A brief note about the modal components:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Links being created are for ",(0,l.jsx)(n.code,{children:"PENELOPE"})]}),"\n",(0,l.jsxs)(n.li,{children:["Icon represents ",(0,l.jsx)(n.code,{children:"Many-to-Many"})," relation"]}),"\n",(0,l.jsxs)(n.li,{children:["Linked records belong to ",(0,l.jsx)(n.code,{children:"Film"})," table"]}),"\n",(0,l.jsx)(n.li,{children:"Search bar, to narrow down the list of records displayed"}),"\n",(0,l.jsx)(n.li,{children:"Linked record card is displayed in blue color"}),"\n",(0,l.jsx)(n.li,{children:"Records available for link are displayed in white color; use expand icon on the cord to view additional information"}),"\n",(0,l.jsx)(n.li,{children:"Indicates total records linked (including the ones being linked)"}),"\n",(0,l.jsx)(n.li,{children:"Pagination bar"}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"Multiple records can be linked at once."})}),"\n",(0,l.jsx)(n.h3,{id:"unlink-records",children:"Unlink records"}),"\n",(0,l.jsxs)(n.p,{children:["To unlink a record, open the ",(0,l.jsx)(n.code,{children:"Linked Records"})," modal & click on the card of the record to be unlinked."]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"Multiple records can be unlinked at once."})}),"\n",(0,l.jsx)(n.h3,{id:"related-fields",children:"Related fields"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/fields/field-types/links-based/lookup",children:"Lookup"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/fields/field-types/links-based/rollup",children:"Rollup"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},83107:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/add-link-modal-fde55380d59bdd5d597bd38e3330dbbd.png"},9763:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/linked-record-modal-3e57fdb38dfa9be609959b9843ec65b4.png"},97802:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/links-cell-display-11ef22c835684c116f159598247e9b5d.png"},42359:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/links-66d99647e69bf8d24e49ec0bd0b72714.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var l=i(67294);const s={},d=l.createContext(s);function o(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);