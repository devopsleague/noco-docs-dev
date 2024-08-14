"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[263],{22173:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var n=o(74848),i=o(28453);const s={title:"Button",description:"This article explains how to create & work with a Button field.",tags:["Fields","Field types","Custom types","Button"],keywords:["Fields","Field types","Custom types","Button","Create button field"]},l=void 0,d={id:"fields/field-types/custom-types/button",title:"Button",description:"This article explains how to create & work with a Button field.",source:"@site/docs/070.fields/040.field-types/050.custom-types/020.button.md",sourceDirName:"070.fields/040.field-types/050.custom-types",slug:"/fields/field-types/custom-types/button",permalink:"/fields/field-types/custom-types/button",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/070.fields/040.field-types/050.custom-types/020.button.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Custom types",permalink:"/tags/custom-types"},{label:"Button",permalink:"/tags/button"}],version:"current",sidebarPosition:20,frontMatter:{title:"Button",description:"This article explains how to create & work with a Button field.",tags:["Fields","Field types","Custom types","Button"],keywords:["Fields","Field types","Custom types","Button","Create button field"]},sidebar:"tutorialSidebar",previous:{title:"Attachment",permalink:"/fields/field-types/custom-types/attachment"},next:{title:"QR code",permalink:"/fields/field-types/custom-types/QR-code"}},c={},r=[{value:"Create a Button Field",id:"create-a-button-field",level:2},{value:"Button URL",id:"button-url",level:3},{value:"Button Webhook",id:"button-webhook",level:3},{value:"Edit Webhook",id:"edit-webhook",level:4}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Button"})," Field allows users to create interactive buttons within their tables. These buttons can trigger specific actions, making workflows more dynamic and efficient. With the Button Field, you can navigate to external URLs, run custom webhooks, or even run custom scripts (coming soon!) with a single click."]}),"\n",(0,n.jsx)(t.p,{children:"NocoDB currently supports two types of actions for the Button Field:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Open URL"}),": Opens a new tab with a URL generated by a formula within the button field. The URL can be static or dynamic based on the current record's data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Run Webhook"}),": Trigger a webhook with the configured URL & custom payload. Payload can include data from the current record."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-a-button-field",children:"Create a Button Field"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.code,{children:"+"})," icon to the right of the ",(0,n.jsx)(t.code,{children:"Fields"})," header."]}),"\n",(0,n.jsx)(t.li,{children:"In the dropdown modal, enter the field name (optional)."}),"\n",(0,n.jsxs)(t.li,{children:["Select the field type as ",(0,n.jsx)(t.code,{children:"Button"})," from the dropdown."]}),"\n",(0,n.jsxs)(t.li,{children:["Configure the button ",(0,n.jsx)(t.strong,{children:"appearance"})," settings as needed. This includes the button text, color, and icon."]}),"\n",(0,n.jsx)(t.li,{children:"Select the action type from the dropdown."}),"\n",(0,n.jsxs)(t.li,{children:["Configure the button ",(0,n.jsx)(t.strong,{children:"action"})," settings as needed. This depends on the action you want the button to perform","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Open URL"}),": Use the formula editor to create dynamic URLs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Run Webhook"}),": Select a webhook from the dropdown OR create a new webhook by clicking on the ",(0,n.jsx)(t.code,{children:"+"})," icon."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.code,{children:"Save Field"})," button."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"button-url",children:"Button URL"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:o(29776).A+"",width:"1830",height:"1534"})}),"\n",(0,n.jsx)(t.h3,{id:"button-webhook",children:"Button Webhook"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:o(67600).A+"",width:"1748",height:"1346"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:['For "Run Webhook" action, a webhook of specific trigger type must be created in the ',(0,n.jsx)(t.code,{children:"Webhooks"})," section. You can use the same webhook for multiple Button fields."]}),"\n",(0,n.jsx)(t.li,{children:'"Run Webhook" action will be disabled in shared views and shared base.'}),"\n"]})}),"\n",(0,n.jsx)(t.h4,{id:"edit-webhook",children:"Edit Webhook"}),"\n",(0,n.jsxs)(t.p,{children:["To edit a webhook, click on the ",(0,n.jsx)(t.code,{children:"Edit"})," icon next to the webhook name in the Button field settings. This will open the webhook settings modal, where you can edit the webhook URL, method, headers, and payload. Click on the ",(0,n.jsx)(t.code,{children:"Save changes"})," button to save the changes."]}),"\n",(0,n.jsx)("img",{src:"/img/v2/fields/types/button-webhook-edit.png",width:"350"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:o(92326).A+"",width:"2880",height:"1800"})}),"\n",(0,n.jsxs)(t.p,{children:["Created webhook can be accessed by using the ",(0,n.jsx)(t.a,{href:"/category/webhook",children:"Webhook"})," section in details tab. For more details, refer to the following articles:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/automation/webhook/create-webhook#create-webhook",children:"Create webhook"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/automation/webhook/actions-on-webhook#edit-webhook",children:"Edit webhook"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/automation/webhook/actions-on-webhook#delete-webhook",children:"Delete webhook"})}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Deleting a webhook will remove it from all Button fields that are using it."}),"\n",(0,n.jsx)(t.li,{children:"Deleting a Button field will not delete the webhook associated with it."}),"\n",(0,n.jsx)(t.li,{children:"Same Webhook can be used across multiple Button fields."}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},29776:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/button-url-25c2124e1e7b2b07546ed1663958784a.png"},92326:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/button-webhook-edit-2-cffa4301c5f5ec66673595ac4cf32f68.png"},67600:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/button-webhook-4df33807af242c3c21f99f32de6418ca.png"},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>d});var n=o(96540);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);