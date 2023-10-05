"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[2550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Dashboard",description:"Accessing the Dashboard!"},i=void 0,s={unversionedId:"setup-and-usages/dashboard",id:"version-0.109.7/setup-and-usages/dashboard",title:"Dashboard",description:"Accessing the Dashboard!",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/010.dashboard.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/dashboard",permalink:"/0.109.7/setup-and-usages/dashboard",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/030.setup-and-usages/010.dashboard.md",tags:[],version:"0.109.7",sidebarPosition:10,frontMatter:{title:"Dashboard",description:"Accessing the Dashboard!"},sidebar:"tutorialSidebar",previous:{title:"Demos",permalink:"/0.109.7/getting-started/demos"},next:{title:"Table Operations",permalink:"/0.109.7/setup-and-usages/table-operations"}},c={},p=[{value:"Setup Your First Super Admin",id:"setup-your-first-super-admin",level:2},{value:"Initialize Your First Project",id:"initialize-your-first-project",level:2},{value:"Connecting to External Database",id:"connecting-to-external-database",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setup-your-first-super-admin"},"Setup Your First Super Admin"),(0,r.kt)("p",null,"Once you have started NocoDB, you can visit the dashboard via ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com"),". You will be redirected to ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com/#/signup"),". "),(0,r.kt)("p",null,"Enter your work email and your password."),(0,r.kt)("img",{width:"1492",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194793294-fa027496-c3c3-44eb-a613-2ba3e3bd26c1.png"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your password has at least 8 letters. No other constraints on case, numbers or special characters.")),(0,r.kt)("h2",{id:"initialize-your-first-project"},"Initialize Your First Project"),(0,r.kt)("p",null,"Once you have logged into NocoDB, you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"My Projects"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/209932699-743ffea2-986f-443f-8198-f56b597de706.png",alt:"Screenshot 2022-12-29 at 2 54 43 PM"})),(0,r.kt)("p",null,"To create a new project, you can click ",(0,r.kt)("inlineCode",{parentName:"p"},"New Project"),". "),(0,r.kt)("p",null,"You need to specify the project name. The data will be stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"NC_DB"),". If it is not specified, a local SQLite will be created and used."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"NC_DB is an environment variable used to store the meta data in the given database.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/209932936-8fe7334c-1a94-4073-ba19-478efb620808.png",alt:"Screenshot 2022-12-29 at 2 54 57 PM"})),(0,r.kt)("h3",{id:"connecting-to-external-database"},"Connecting to External Database"),(0,r.kt)("p",null,"Click on three-dot menu adjacent to ",(0,r.kt)("inlineCode",{parentName:"p"},"BASES"),". Pick required database option from the menu ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect to new datasource"),". "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are running NocoDB on Docker and your local DB is running on your host machine, your Host Address would be host.docker.internal instead of localhost.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/209933294-9327ff16-21db-4aca-bf16-8cea8a1eb415.png",alt:"Screenshot 2022-12-29 at 2 55 39 PM"})),(0,r.kt)("p",null,"Above menu is also accessible from ",(0,r.kt)("inlineCode",{parentName:"p"},"Team & Settings")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Sources"),". Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"New")," button to add existing database. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/219841162-6456c5cf-fd26-4a88-8de6-e8742c043607.png",alt:"image"})),(0,r.kt)("p",null,"You need to specify the project name, API type, and other database parameters."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/219841283-1a42f9f6-4677-4e25-8ca9-a060753d1e1e.png",alt:"image"})),(0,r.kt)("p",null,"Currently it supports MySQL, Postgres, MSSQL and SQLite."),(0,r.kt)("p",null,"You can also configure associated SSL & advanced parameters."),(0,r.kt)("img",{width:"689",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189047293-05176c44-e162-495a-a7cd-e02377c1f42c.png"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'You can click Edit Connection JSON and modify SSL settings in "ssl".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client": "pg",\n  "connection": {\n    "host": "<YOUR_HOST>",\n    "port": "5432",\n    "user": "<YOUR_DB_USER>",\n    "password": "<YOUR_DB_PASSWORD>",\n    "database": "<YOUR_DB_NAME>",\n    "ssl": {\n      "require": true,\n      "rejectUnauthorized": false,\n      "sslMode": "no-verify"\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'You can click Edit Connection JSON and specify the schema you want to use in "searchPath".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client": "pg",\n  "connection": {\n    ...\n  },\n  "searchPath": [ "<YOUR_TARGET_SCHEMA>" ]\n}\n')),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Database Connection")," to see if the connection can be established or not. NocoDB creates a new ",(0,r.kt)("strong",{parentName:"p"},"empty database")," with specified parameters if the database doesn't exist."),(0,r.kt)("img",{width:"505",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194793513-feabf14f-1f62-4896-b06d-88548251511a.png"}))}d.isMDXComponent=!0}}]);