"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(k,r(r({ref:t},s),{},{components:n})):o.createElement(k,r({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),l=(n(7294),n(3905));const a={title:"Lookup",description:"Understanding Lookup Column!"},r=void 0,i={unversionedId:"setup-and-usages/lookup",id:"version-0.109.7/setup-and-usages/lookup",title:"Lookup",description:"Understanding Lookup Column!",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/070.lookup.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/lookup",permalink:"/0.109.7/setup-and-usages/lookup",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/030.setup-and-usages/070.lookup.md",tags:[],version:"0.109.7",sidebarPosition:70,frontMatter:{title:"Lookup",description:"Understanding Lookup Column!"},sidebar:"tutorialSidebar",previous:{title:"Link To Another Record",permalink:"/0.109.7/setup-and-usages/link-to-another-record"},next:{title:"Rollup",permalink:"/0.109.7/setup-and-usages/rollup"}},u={},c=[{value:"Lookup",id:"lookup",level:2},{value:"Example organization structure",id:"example-organization-structure",level:3},{value:"Configuring a lookup column",id:"configuring-a-lookup-column",level:3},{value:"1. Add new column : Click on &#39;+&#39; icon to the left of column headers in Employee table",id:"1-add-new-column--click-on--icon-to-the-left-of-column-headers-in-employee-table",level:4},{value:"2. Feed column name",id:"2-feed-column-name",level:4},{value:"3. Select column type as &#39;Lookup&#39;",id:"3-select-column-type-as-lookup",level:4},{value:"4. Choose child table",id:"4-choose-child-table",level:4},{value:"5. Select child column",id:"5-select-child-column",level:4},{value:"6. Click on &#39;Save&#39;",id:"6-click-on-save",level:4},{value:"Additional notes",id:"additional-notes",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lookup"},"Lookup"),(0,l.kt)("h3",{id:"example-organization-structure"},"Example organization structure"),(0,l.kt)("p",null,"Consider an organization with"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"5 departments (company departments), each department has a team name & associated team code. Each ",(0,l.kt)("inlineCode",{parentName:"li"},"Team")," ",(0,l.kt)("strong",{parentName:"li"},"has many")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Employees")," - relationship has been defined using ",(0,l.kt)("inlineCode",{parentName:"li"},"LinkToAnotherRecord")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Links"),"column"),(0,l.kt)("li",{parentName:"ul"},"5 employees working at different departments")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/189295738-a4197818-f7d7-4769-acad-13b6d05afe7e.png",alt:"Screenshot 2022-09-09 at 12 57 32 PM"})),(0,l.kt)("p",null,"Now, let's explore procedure to retrieve team-code information in Employee table using ",(0,l.kt)("strong",{parentName:"p"},"LOOKUP")," columns"),(0,l.kt)("h3",{id:"configuring-a-lookup-column"},"Configuring a lookup column"),(0,l.kt)("h4",{id:"1-add-new-column--click-on--icon-to-the-left-of-column-headers-in-employee-table"},"1. Add new column : Click on '+' icon to the left of column headers in Employee table"),(0,l.kt)("h4",{id:"2-feed-column-name"},"2. Feed column name"),(0,l.kt)("h4",{id:"3-select-column-type-as-lookup"},"3. Select column type as 'Lookup'"),(0,l.kt)("h4",{id:"4-choose-child-table"},"4. Choose child table"),(0,l.kt)("h4",{id:"5-select-child-column"},"5. Select child column"),(0,l.kt)("h4",{id:"6-click-on-save"},"6. Click on 'Save'"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/189291720-642a6a96-0b3d-4eaa-886a-20d33a967644.png",alt:"Screenshot 2022-09-09 at 12 21 13 PM"})),(0,l.kt)("p",null,"Required information is now populated in the newly created column"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/189291679-09503e32-9146-41fa-b28c-d900f2dc35a4.png",alt:"Screenshot 2022-09-09 at 12 26 06 PM"})),(0,l.kt)("h2",{id:"additional-notes"},"Additional notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nested 'Lookup' supported: a Lookup field can have its child column datatype as Lookup (or Rollup).")))}d.isMDXComponent=!0}}]);