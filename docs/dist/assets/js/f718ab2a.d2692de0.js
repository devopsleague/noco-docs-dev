"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4747],{93826:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var l=i(74848),n=i(28453);const d={title:"Rich text",description:"This article explains how to create & work with a Rich text field.",tags:["Fields","Field types","Text based types","Rich text"],keywords:["Fields","Field types","Text based types","Rich text","Create rich text field"]},s=void 0,c={id:"fields/field-types/text-based/rich-text",title:"Rich text",description:"This article explains how to create & work with a Rich text field.",source:"@site/docs/070.fields/040.field-types/010.text-based/025.rich-text.md",sourceDirName:"070.fields/040.field-types/010.text-based",slug:"/fields/field-types/text-based/rich-text",permalink:"/fields/field-types/text-based/rich-text",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/070.fields/040.field-types/010.text-based/025.rich-text.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Text based types",permalink:"/tags/text-based-types"},{label:"Rich text",permalink:"/tags/rich-text"}],version:"current",sidebarPosition:25,frontMatter:{title:"Rich text",description:"This article explains how to create & work with a Rich text field.",tags:["Fields","Field types","Text based types","Rich text"],keywords:["Fields","Field types","Text based types","Rich text","Create rich text field"]},sidebar:"tutorialSidebar",previous:{title:"Long text",permalink:"/fields/field-types/text-based/long-text"},next:{title:"Email",permalink:"/fields/field-types/text-based/email"}},r={},o=[{value:"Create a <code>Rich Text</code> field",id:"create-a-rich-text-field",level:2},{value:"Cell display",id:"cell-display",level:3},{value:"Formatting options",id:"formatting-options",level:2},{value:"Heading",id:"heading",level:3},{value:"Text formatting",id:"text-formatting",level:3},{value:"Quote block",id:"quote-block",level:3},{value:"Code block",id:"code-block",level:3},{value:"Link",id:"link",level:3},{value:"Bullet List",id:"bullet-list",level:3},{value:"Numbered List",id:"numbered-list",level:3},{value:"Task list",id:"task-list",level:3},{value:"Similar text based fields",id:"similar-text-based-fields",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Rich Text"})," field is text based field & is extension of ",(0,l.jsx)(t.code,{children:"Long text"})," that allows you to add formatting to the text. You can add text formatting like bold, italic, underline, strikethrough, horizontal rule, ordered list, unordered list, code, quote, etc."]}),"\n",(0,l.jsxs)(t.h2,{id:"create-a-rich-text-field",children:["Create a ",(0,l.jsx)(t.code,{children:"Rich Text"})," field"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Click on ",(0,l.jsx)(t.code,{children:"+"})," icon to the right of ",(0,l.jsx)(t.code,{children:"Fields header"})]}),"\n",(0,l.jsx)(t.li,{children:"On the dropdown modal, enter the field name (Optional)."}),"\n",(0,l.jsxs)(t.li,{children:["Select the field type as ",(0,l.jsx)(t.code,{children:"Long text"})," from the dropdown."]}),"\n",(0,l.jsxs)(t.li,{children:["Enable ",(0,l.jsx)(t.code,{children:"Rich Text"})," toggle field."]}),"\n",(0,l.jsx)(t.li,{children:"Set default value for the field (Optional)."}),"\n",(0,l.jsxs)(t.li,{children:["Click on ",(0,l.jsx)(t.code,{children:"Save Field"})," button."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"image",src:i(46247).A+"",width:"2300",height:"1412"})}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Specify default value without quotes."}),"\n",(0,l.jsxs)(t.li,{children:["Use ",(0,l.jsx)(t.code,{children:"Enter"})," key to add new line."]}),"\n"]})}),"\n",(0,l.jsx)(t.h3,{id:"cell-display",children:"Cell display"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Rich Text"})," field is displayed as a single line text field in the table view. Click on the expand icon in the cell to view the full text."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.img,{alt:"image",src:i(63561).A+"",width:"1390",height:"515"}),"\n",(0,l.jsx)(t.img,{alt:"image",src:i(50968).A+"",width:"885",height:"760"})]}),"\n",(0,l.jsx)(t.h2,{id:"formatting-options",children:"Formatting options"}),"\n",(0,l.jsx)(t.p,{children:"NocoDB supports markdown syntax for formatting the text. Following are the supported formatting options."}),"\n",(0,l.jsx)(t.h3,{id:"heading",children:"Heading"}),"\n",(0,l.jsxs)(t.p,{children:["To create a heading, prefix ",(0,l.jsx)(t.code,{children:"#"})," symbol preceding your heading text. The number of # symbols employed will dictate the heading's hierarchy level and typeface size. Three levels of headings are supported."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"# Heading 1\n## Heading 2\n### Heading 3\n"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"image",src:i(94302).A+"",width:"1594",height:"468"})}),"\n",(0,l.jsx)(t.h3,{id:"text-formatting",children:"Text formatting"}),"\n",(0,l.jsx)(t.p,{children:"You can emphasise text with bold, italic, strikethrough or underline formatting options. Table below shows syntax, keyboard shortcut, example & output for each formatting option."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Style"}),(0,l.jsx)(t.th,{children:"Syntax"}),(0,l.jsx)(t.th,{children:"Keyboard shortcut"}),(0,l.jsx)(t.th,{children:"Example"}),(0,l.jsx)(t.th,{children:"Output"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Bold"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"**bold text**"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"Ctrl/Cmd + B"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"**This is bold text**"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.strong,{children:"This is bold text"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Italic"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"*italicized text*"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"Ctrl/Cmd + I"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"*This is italicized text*"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.em,{children:"This is italicized text"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Strikethrough"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"~~strikethrough text~~"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"Ctrl/Cmd + Shift + X"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"~~This is strikethrough text~~"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.del,{children:"This is strikethrough text"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Underline"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"Ctrl/Cmd + U"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"This is underlined text"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)("u",{children:"This is underlined text"})})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"quote-block",children:"Quote block"}),"\n",(0,l.jsxs)(t.p,{children:["You can quote text with a ",(0,l.jsx)(t.code,{children:">"})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"normal text\n> quoted text\n"})}),"\n",(0,l.jsx)(t.p,{children:"normal text"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"quoted text"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"code-block",children:"Code block"}),"\n",(0,l.jsx)(t.p,{children:"Code block can be created by using (3 backticks) before & after the code."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"```\nThis is a code block\n```\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"This is a code block\n"})}),"\n",(0,l.jsx)(t.h3,{id:"link",children:"Link"}),"\n",(0,l.jsxs)(t.p,{children:["You can create an inline link by using ",(0,l.jsx)(t.code,{children:"Link"})," menu option in the rich text toolbar"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"image",src:i(53039).A+"",width:"2300",height:"934"})}),"\n",(0,l.jsx)(t.h3,{id:"bullet-list",children:"Bullet List"}),"\n",(0,l.jsxs)(t.p,{children:["You can create unordered list by using ",(0,l.jsx)(t.code,{children:"Bulleted list"})," menu option in the rich text toolbar or by preceding the text with ",(0,l.jsx)(t.code,{children:"-"})," ",(0,l.jsx)(t.code,{children:"+"})," or ",(0,l.jsx)(t.code,{children:"*"})," symbol."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"- Item 1\n- Item 2\n\n+ Item 1\n+ Item 2\n\n* Item 1\n* Item 2\n"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Item 1"}),"\n",(0,l.jsx)(t.li,{children:"Item 2"}),"\n"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Item 1"}),"\n",(0,l.jsx)(t.li,{children:"Item 2"}),"\n"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Item 1"}),"\n",(0,l.jsx)(t.li,{children:"Item 2"}),"\n"]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["You can create nested lists by using ",(0,l.jsx)(t.code,{children:"tab"})," key & ",(0,l.jsx)(t.code,{children:"shift + tab"})," key to indent & outdent the list items."]})}),"\n",(0,l.jsx)(t.h3,{id:"numbered-list",children:"Numbered List"}),"\n",(0,l.jsxs)(t.p,{children:["You can create ordered list by using ",(0,l.jsx)(t.code,{children:"Numbered list"})," menu option in the rich text toolbar or by preceding the text with ",(0,l.jsx)(t.code,{children:"1."})," symbol."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"1. Item 1\n2. Item 2\n"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Item 1"}),"\n",(0,l.jsx)(t.li,{children:"Item 2"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"task-list",children:"Task list"}),"\n",(0,l.jsxs)(t.p,{children:["You can create task lists by using ",(0,l.jsx)(t.code,{children:"Task list"})," menu option in the rich text toolbar or by preceding the text with ",(0,l.jsx)(t.code,{children:"[ ]"})," symbol. You can mark the task as completed by using ",(0,l.jsx)(t.code,{children:"[x]"})," symbol."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"[ ] Item 1\n[x] Item 2\n"})}),"\n",(0,l.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,l.jsxs)(t.li,{className:"task-list-item",children:[(0,l.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Item 1"]}),"\n",(0,l.jsxs)(t.li,{className:"task-list-item",children:[(0,l.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Item 2"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"similar-text-based-fields",children:"Similar text based fields"}),"\n",(0,l.jsx)(t.p,{children:"Following are the other text based fields available in NocoDB, custom-built for specific use cases."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/fields/field-types/text-based/single-line-text",children:"Single line text"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/fields/field-types/text-based/url",children:"URL"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/fields/field-types/text-based/email",children:"Email"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/fields/field-types/text-based/phonenumber",children:"Phone"})}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50968:(e,t,i)=>{i.d(t,{A:()=>l});const l=i.p+"assets/images/long-text-expand-2-09cce09ec85355082b79054a189abb37.png"},63561:(e,t,i)=>{i.d(t,{A:()=>l});const l=i.p+"assets/images/long-text-expand-d15b69ace110a10185959d52b19bce63.png"},94302:(e,t,i)=>{i.d(t,{A:()=>l});const l=i.p+"assets/images/richtext-heading-993c1575b91f0b03d17e53a7fb3f5d45.png"},53039:(e,t,i)=>{i.d(t,{A:()=>l});const l=i.p+"assets/images/richtext-links-eaeaf695ad2dfee7d75804758cbeb0e4.png"},46247:(e,t,i)=>{i.d(t,{A:()=>l});const l=i.p+"assets/images/richtext-fa2dd44b6fd13ec6e529edae4f156c9e.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var l=i(96540);const n={},d=l.createContext(n);function s(e){const t=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(d.Provider,{value:t},e.children)}}}]);