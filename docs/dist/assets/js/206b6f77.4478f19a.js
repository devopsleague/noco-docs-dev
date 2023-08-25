"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3361],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={title:"Development Setup",description:"How to set-up your development environment"},l=void 0,a={unversionedId:"engineering/development-setup",id:"engineering/development-setup",title:"Development Setup",description:"How to set-up your development environment",source:"@site/docs/050.engineering/030.development-setup.md",sourceDirName:"050.engineering",slug:"/engineering/development-setup",permalink:"/engineering/development-setup",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/050.engineering/030.development-setup.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Development Setup",description:"How to set-up your development environment"},sidebar:"tutorialSidebar",previous:{title:"Repository structure",permalink:"/engineering/repository-structure"},next:{title:"Writing Unit Tests",permalink:"/engineering/unit-testing"}},c={},p=[{value:"Clone the repo",id:"clone-the-repo",level:2},{value:"Build SDK",id:"build-sdk",level:2},{value:"Build Backend",id:"build-backend",level:2},{value:"Build Frontend",id:"build-frontend",level:2},{value:"Enabling CI-CD for Draft PR",id:"enabling-ci-cd-for-draft-pr",level:2},{value:"Accessing CI-CD Failure Screenshots",id:"accessing-ci-cd-failure-screenshots",level:2}],s={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"clone-the-repo"},"Clone the repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/nocodb/nocodb\ncd nocodb/packages\n")),(0,o.kt)("h2",{id:"build-sdk"},"Build SDK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# build nocodb-sdk\ncd nocodb-sdk\nnpm install\nnpm run build\n")),(0,o.kt)("h2",{id:"build-backend"},"Build Backend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# build backend - runs on port 8080\ncd ../nocodb\nnpm install\nnpm run watch:run\n")),(0,o.kt)("h2",{id:"build-frontend"},"Build Frontend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# build frontend - runs on port 3000\ncd ../nc-gui\nnpm install\nnpm run dev \n")),(0,o.kt)("p",null,"Any changes made to frontend and backend will be automatically reflected in the browser."),(0,o.kt)("h2",{id:"enabling-ci-cd-for-draft-pr"},"Enabling CI-CD for Draft PR"),(0,o.kt)("p",null,"CI-CD will be triggered on moving a PR from draft state to ",(0,o.kt)("inlineCode",{parentName:"p"},"Ready for review")," state & on pushing changes to ",(0,o.kt)("inlineCode",{parentName:"p"},"Develop"),". To verify CI-CD before requesting for review, add label ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger-CI")," on Draft PR. "),(0,o.kt)("h2",{id:"accessing-ci-cd-failure-screenshots"},"Accessing CI-CD Failure Screenshots"),(0,o.kt)("p",null,"For Playwright tests, screenshots are captured on the tests. These will provide vital clues for debugging possible issues observed in CI-CD. To access screenshots, Open link associated with CI-CD run & click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Artifacts")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/192965070-dc04b952-70fb-4197-b4bd-ca7eda066e60.png",alt:"Screenshot 2022-09-29 at 12 43 37 PM"})))}u.isMDXComponent=!0}}]);