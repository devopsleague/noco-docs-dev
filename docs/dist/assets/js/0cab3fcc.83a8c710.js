"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7892],{22284:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>s});var r=o(74848),i=o(28453);const t={title:"Create webhook",description:"Learn how to create a webhook in NocoDB.",tags:["Webhook","Create"],keywords:["NocoDB webhook","create webhook"]},d=void 0,a={id:"automation/webhook/create-webhook",title:"Create webhook",description:"Learn how to create a webhook in NocoDB.",source:"@site/docs/130.automation/020.webhook/020.create-webhook.md",sourceDirName:"130.automation/020.webhook",slug:"/automation/webhook/create-webhook",permalink:"/automation/webhook/create-webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/130.automation/020.webhook/020.create-webhook.md",tags:[{label:"Webhook",permalink:"/tags/webhook"},{label:"Create",permalink:"/tags/create"}],version:"current",sidebarPosition:20,frontMatter:{title:"Create webhook",description:"Learn how to create a webhook in NocoDB.",tags:["Webhook","Create"],keywords:["NocoDB webhook","create webhook"]},sidebar:"tutorialSidebar",previous:{title:"Webhook overview",permalink:"/automation/webhook/webhook-overview"},next:{title:"Actions on webhook",permalink:"/automation/webhook/actions-on-webhook"}},l={},s=[{value:"Create Webhook",id:"create-webhook",level:2},{value:"Accessing webhook page",id:"accessing-webhook-page",level:3},{value:"Configuring webhook",id:"configuring-webhook",level:3},{value:"Webhook with conditions",id:"webhook-with-conditions",level:3},{value:"Webhook Response Sample",id:"webhook-response-sample",level:3},{value:"Environment Variables",id:"environment-variables",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{TabItem:t,Tabs:d}=n;return t||b("TabItem",!0),d||b("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"create-webhook",children:"Create Webhook"}),"\n",(0,r.jsx)(n.h3,{id:"accessing-webhook-page",children:"Accessing webhook page"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Click on table for which webhook needs to be configured on the left sidebar"}),"\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsx)(n.code,{children:"Details"})," tab in topbar,"]}),"\n",(0,r.jsxs)(n.li,{children:["Click on ",(0,r.jsx)(n.code,{children:"Webhooks"})," tab"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Add New Webhook"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Accessing webhook",src:o(86114).A+"",width:"2872",height:"1584"})}),"\n",(0,r.jsx)(n.h3,{id:"configuring-webhook",children:"Configuring webhook"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Name of the webhook"}),"\n",(0,r.jsx)(n.li,{children:"Select the event for which webhook needs to be triggered"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Trigger"}),(0,r.jsx)(n.th,{children:"Details"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"After Insert"}),(0,r.jsx)(n.td,{children:"After a single record is inserted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"After Update"}),(0,r.jsx)(n.td,{children:"After a single record is updated"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"After Delete"}),(0,r.jsx)(n.td,{children:"After a single record is deleted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"After Bulk Insert"}),(0,r.jsx)(n.td,{children:"After bulk records are inserted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"After Bulk Update"}),(0,r.jsx)(n.td,{children:"After bulk records are updated"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"After Bulk Delete"}),(0,r.jsx)(n.td,{children:"After bulk records are deleted"})]})]})]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Method & URL: Configure the endpoint to which webhook needs to be triggered. Supported methods are GET, POST, DELETE, PUT, HEAD, PATCH"}),"\n",(0,r.jsx)(n.li,{children:"Headers & Parameters: Configure Request headers & parameters (optional)"}),"\n",(0,r.jsx)(n.li,{children:"Condition: Only records meeting the configured criteria will trigger webhook (optional)"}),"\n",(0,r.jsx)(n.li,{children:"Test webhook (with sample payload) to verify if parameter are configured appropriately (optional)"}),"\n",(0,r.jsx)(n.li,{children:"Save the webhook"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Configuring webhook",src:o(64921).A+"",width:"2298",height:"1622"})}),"\n",(0,r.jsx)(n.h3,{id:"webhook-with-conditions",children:"Webhook with conditions"}),"\n",(0,r.jsxs)(n.p,{children:["In case of webhook with conditions, only records meeting the configured criteria will trigger webhook. For example, trigger webhook only when ",(0,r.jsx)(n.code,{children:"Status"})," is ",(0,r.jsx)(n.code,{children:"Complete"}),". You can also configure multiple conditions using ",(0,r.jsx)(n.code,{children:"AND"})," or ",(0,r.jsx)(n.code,{children:"OR"})," operators. For example, trigger webhook only when ",(0,r.jsx)(n.code,{children:"Status"})," is ",(0,r.jsx)(n.code,{children:"Complete"})," and ",(0,r.jsx)(n.code,{children:"Priority"})," is ",(0,r.jsx)(n.code,{children:"High"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Webhook will be triggered only when the configured condition wasn't met before the record was updated. For example, if you have configured webhook with condition ",(0,r.jsx)(n.code,{children:"Status"})," ",(0,r.jsx)(n.code,{children:"is"})," ",(0,r.jsx)(n.code,{children:"Complete"})," and ",(0,r.jsx)(n.code,{children:"Priority"})," ",(0,r.jsx)(n.code,{children:"is"})," ",(0,r.jsx)(n.code,{children:"High"})," and you update the record with ",(0,r.jsx)(n.code,{children:"Status"})," ",(0,r.jsx)(n.code,{children:"Complete"})," and ",(0,r.jsx)(n.code,{children:"Priority"})," ",(0,r.jsx)(n.code,{children:"Low"})," to ",(0,r.jsx)(n.code,{children:"High"}),", webhook will be triggered. However, if you update any other fields of the record with ",(0,r.jsx)(n.code,{children:"Status"})," ",(0,r.jsx)(n.code,{children:"Complete"})," and ",(0,r.jsx)(n.code,{children:"Priority"})," ",(0,r.jsx)(n.code,{children:"High"}),", webhook won't be triggered."]}),"\n",(0,r.jsxs)(n.p,{children:["In summary, webhook will be triggered only when ",(0,r.jsx)(n.code,{children:"Condition(old-record) = false"})," and ",(0,r.jsx)(n.code,{children:"Condition(new-record) = true"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"webhook-response-sample",children:"Webhook Response Sample"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)(t,{value:"After Insert",label:"After Insert",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{\n  "type": "records.after.insert",\n  "id": "9dac1c54-b3be-49a1-a676-af388145fa8c",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_736wrpoas7tr0c",\n    "view_name": "Film",\n    "records": [\n      {\n        "FilmId": 1011,\n        "Title": "FOO",\n        "Language": {\n          "LanguageId": 1,\n          "Name": "English"\n        },\n      }\n    ]\n  }\n}\n'})})}),(0,r.jsx)(t,{value:"After Update",label:"After Update",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{\n  "type": "records.after.update",\n  "id": "6a6ebfe4-b0b5-434e-b5d6-5212adbf82fa",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_736wrpoas7tr0c",\n    "view_name": "Film",\n    "previous_records": [\n      {\n        "FilmId": 1,\n        "Title": "ACADEMY DINOSAUR",\n        "Description": "A Epic Drama of a Feminist in The Canadian Rockies",\n        "Actor List": [\n          {\n            "ActorId": 10,\n            "FirstName": "CHRISTIAN"\n          }\n        ],\n      }\n    ],\n    "records": [\n      {\n        "FilmId": 1,\n        "Title": "ACADEMY DINOSAUR (Edited)",\n        "Actor List": [\n          {\n            "ActorId": 10,\n            "FirstName": "CHRISTIAN"\n          }\n        ],\n      }\n    ]\n  }\n}\n'})})}),(0,r.jsx)(t,{value:"After Delete",label:"After Delete",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{\n  "type": "records.after.delete",\n  "id": "e593079f-70e5-4965-8944-5ff7aeed005c",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_736wrpoas7tr0c",\n    "view_name": "Film",\n    "records": [\n      {\n        "FilmId": 1010,\n        "Title": "ALL-EDITED",\n        "Language": {\n          "LanguageId": 1,\n          "Name": "English"\n        },\n      }\n    ]\n  }\n}\n'})})}),(0,r.jsx)(t,{value:"After Bulk Insert",label:"After Bulk Insert",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{\n  "type": "records.after.bulkInsert",\n  "id": "f8397b06-a399-4a3a-b6b0-6d1c0c2f7578",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_3fq2e9q8drkblw",\n    "view_name": "GridView",\n    "records_inserted": 2\n  }\n}\n'})})}),(0,r.jsx)(t,{value:"After Bulk Update",label:"After Bulk Update",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{\n  "type": "records.after.bulkUpdate",\n  "id": "e983cea5-8e38-438e-96a0-048751f6830b",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_3fq2e9q8drkblw",\n    "view_name": "Sheet-1",\n    "previous_records": [\n      [\n        {\n          "FilmId": 1005,\n          "Title": "Q",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          },\n        },\n        {\n          "FilmId": 1004,\n          "Title": "P",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          }\n        }\n      ]\n    ],\n    "records": [\n      [\n        {\n          "FilmId": 1005,\n          "Title": "Q-EDITED",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          }\n        },\n        {\n          "FilmId": 1004,\n          "Title": "P-EDITED",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          },\n        }\n      ]\n    ]\n  }\n}\n'})})}),(0,r.jsx)(t,{value:"After Bulk Delete",label:"After Bulk Delete",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{\n  "type": "records.after.bulkDelete",\n  "id": "e7f1f4e5-7052-4ca2-9355-241ceb836f43",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_3fq2e9q8drkblw",\n    "view_name": "Sheet-1",\n    "records": [\n      [\n        {\n          "FilmId": 1022,\n          "Title": "x",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          },\n        },\n        {\n          "FilmId": 1023,\n          "Title": "x",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          },\n        }\n      ]\n    ]\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsx)(n.p,{children:"In self-hosted version, you can configure the following environment variables to customize the webhook behavior."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NC_ALLOW_LOCAL_HOOKS: Allow localhost based links to be triggered. Default: false"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Find more about environment variables ",(0,r.jsx)(n.a,{href:"/getting-started/self-hosted/environment-variables",children:"here"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function b(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},64921:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/create-webhook-2-2076f7ac40122cd747a9e34943eb4694.png"},86114:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/create-webhook-1-be523f2a91b6829cd8d82915d07e92e4.png"},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>a});var r=o(96540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);