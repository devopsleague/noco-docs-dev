"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=d(n),u=l,b=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:l,i[1]=r;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const o={title:"Table Operations",description:"Table Operations: Row, Column, Quick Import, Export & Import"},i=void 0,r={unversionedId:"setup-and-usages/table-operations",id:"setup-and-usages/table-operations",title:"Table Operations",description:"Table Operations: Row, Column, Quick Import, Export & Import",source:"@site/docs/030.setup-and-usages/020.table-operations.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/table-operations",permalink:"/setup-and-usages/table-operations",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/030.setup-and-usages/020.table-operations.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Table Operations",description:"Table Operations: Row, Column, Quick Import, Export & Import"},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/setup-and-usages/dashboard"},next:{title:"Column Operations",permalink:"/setup-and-usages/column-operations"}},c={},d=[{value:"Table",id:"table",level:2},{value:"Table Create",id:"table-create",level:3},{value:"Table Rename",id:"table-rename",level:3},{value:"Table Duplicate",id:"table-duplicate",level:3},{value:"Table Delete",id:"table-delete",level:3},{value:"Column",id:"column",level:2},{value:"Column Add",id:"column-add",level:3},{value:"Column create before OR after a specific column",id:"column-create-before-or-after-a-specific-column",level:4},{value:"Column Edit",id:"column-edit",level:3},{value:"Column Duplicate",id:"column-duplicate",level:3},{value:"Column Delete",id:"column-delete",level:3},{value:"Row",id:"row",level:2},{value:"Row Add (Using Form)",id:"row-add-using-form",level:3},{value:"Row Add (Using Table Row at bottom of page)",id:"row-add-using-table-row-at-bottom-of-page",level:3},{value:"Row Add (Pressing Enter Key from Previous Row)",id:"row-add-pressing-enter-key-from-previous-row",level:3},{value:"Row Edit",id:"row-edit",level:3},{value:"Row Delete",id:"row-delete",level:3},{value:"Quick Import",id:"quick-import",level:2},{value:"Import Airtable into an Existing Project",id:"import-airtable-into-an-existing-project",level:3},{value:"Import CSV data into an Existing Project",id:"import-csv-data-into-an-existing-project",level:3},{value:"Import Excel data into an Existing Project",id:"import-excel-data-into-an-existing-project",level:3},{value:"Export Data",id:"export-data",level:2},{value:"Import Data",id:"import-data",level:2}],p={toc:d},s="wrapper";function m(e){let{components:t,...o}=e;return(0,l.kt)(s,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Once you have created a new NocoDB project you can open it, In the browser, the URL would be like ",(0,l.kt)("inlineCode",{parentName:"p"},"example.com/#/default/<project_id>"),"."),(0,l.kt)("h2",{id:"table"},"Table"),(0,l.kt)("h3",{id:"table-create"},"Table Create"),(0,l.kt)("p",null,"On project dashboard, click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Add new table")," button"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/0b1d0b89-b3c6-4c3c-8208-4b6afce67d23",alt:"table-create-button"})),(0,l.kt)("p",null,"Provide a name for the table & click ",(0,l.kt)("inlineCode",{parentName:"p"},"Create Table")," button."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/fceb6c48-e0d6-428c-bb16-d2da4e38a81f",alt:"table-create-modal"})),(0,l.kt)("p",null,"After the successful submission, the table will be created and open on a new grid."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/96ffae6f-c18f-4b80-81eb-847cfb8116e2",alt:"new-table-landing-page"})),(0,l.kt)("p",null,"New table can also be created by using ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," button on project tile in left sidebar"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/5a4ce91b-f4bf-451c-8835-8e7144deec26",alt:"new-table-on-hover"})),(0,l.kt)("h3",{id:"table-rename"},"Table Rename"),(0,l.kt)("p",null,"Right click on Table name on left sidebar, (OR)\nClick on ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," to open ",(0,l.kt)("inlineCode",{parentName:"p"},"Table context menu"),", select ",(0,l.kt)("inlineCode",{parentName:"p"},"Rename"),".\nFeed in the changes to the table name & press ",(0,l.kt)("inlineCode",{parentName:"p"},"Enter")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/67cb7563-5a10-4d91-bc83-b31ff185d18d",alt:"table-context-menu"})),(0,l.kt)("h3",{id:"table-duplicate"},"Table Duplicate"),(0,l.kt)("p",null,"Right click on Table name on left sidebar, (OR)\nClick on ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," to open ",(0,l.kt)("inlineCode",{parentName:"p"},"Table context menu"),", select ",(0,l.kt)("inlineCode",{parentName:"p"},"Duplicate")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/67cb7563-5a10-4d91-bc83-b31ff185d18d",alt:"table-context-menu"})),(0,l.kt)("p",null,"Additionally, you can configure to duplicate"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Include Data")," : toggle this to include/exclude table records"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Include Views")," : toggle this to include/exclude table views")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/e668c382-530f-423c-9de7-f68896a6ba67",alt:"table-duplicate-modal"})),(0,l.kt)("h3",{id:"table-delete"},"Table Delete"),(0,l.kt)("p",null,"Right click on Table name on left sidebar, (OR)\nClick on ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," to open ",(0,l.kt)("inlineCode",{parentName:"p"},"Table context menu"),", select ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/67cb7563-5a10-4d91-bc83-b31ff185d18d",alt:"table-context-menu"})),(0,l.kt)("p",null,"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete Table")," to confirm"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/a0d11ca6-0aed-4eaf-a855-c49ff987d546",alt:"table-delete-confirmation-modal"})),(0,l.kt)("h2",{id:"column"},"Column"),(0,l.kt)("h3",{id:"column-add"},"Column Add"),(0,l.kt)("p",null,"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," button to the right of Columns header, type ",(0,l.kt)("inlineCode",{parentName:"p"},"Column name")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/d3350116-5047-4385-8eab-1fef4b3836ac",alt:"column-add"})),(0,l.kt)("p",null,"Select a ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," for the column from the dropdown. Depending on the column type, you might find additional options to configure.\nClick on ",(0,l.kt)("inlineCode",{parentName:"p"},"Save column")," to finish creating column."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/239bfbde-fd20-4f8e-966c-2c60507c195e",alt:"column-add-type"})),(0,l.kt)("h4",{id:"column-create-before-or-after-a-specific-column"},"Column create before OR after a specific column"),(0,l.kt)("p",null,"You can also use context menu of an existing column to either insert before or after a specific column.\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/d15b62b4-5302-4c75-bd5b-e60ae8b81a65",alt:"column-context-menu - insert after before"})),(0,l.kt)("h3",{id:"column-edit"},"Column Edit"),(0,l.kt)("p",null,"Double click on Column name in column header to open ",(0,l.kt)("inlineCode",{parentName:"p"},"Column edit")," modal\nYou can rename column & optionally change column-type."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/1a0f798e-6726-4810-9645-e531a88e495a",alt:"column-rename"})),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Changing column type might not be allowed in some scenarios & in some other, might lead to either loss or truncated data."),(0,l.kt)("li",{parentName:"ul"},"Column name is also possible using Column context menu as described below")),(0,l.kt)("h3",{id:"column-duplicate"},"Column Duplicate"),(0,l.kt)("p",null,"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"Column context menu")," (click ",(0,l.kt)("inlineCode",{parentName:"p"},"v")," on column header), select ",(0,l.kt)("inlineCode",{parentName:"p"},"Duplicate")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/8d1f36e6-5f6b-4f89-81d0-c0d3148bd056",alt:"column-duplicate"})),(0,l.kt)("p",null,"Note: Column duplicate only creates another column of same type & inserts it to the immediate right. Currently data in the column is not duplicated."),(0,l.kt)("h3",{id:"column-delete"},"Column Delete"),(0,l.kt)("p",null,"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"Column context menu")," (click ",(0,l.kt)("inlineCode",{parentName:"p"},"v")," on column header), select ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/2444124d-f12a-4bab-91ce-9b8c0625a263",alt:"column-delete"})),(0,l.kt)("p",null,"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete Column")," to confirm"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/5675b2ef-9d2c-40fe-900b-d5dd58d1655d",alt:"Column delete confirmation modal"})),(0,l.kt)("h2",{id:"row"},"Row"),(0,l.kt)("p",null,"For adding new values to the table we need new rows, new rows can be added in two methods."),(0,l.kt)("h3",{id:"row-add-using-form"},"Row Add (Using Form)"),(0,l.kt)("p",null,"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"New Record")," at the bottom of the grid (footbar), select ",(0,l.kt)("inlineCode",{parentName:"p"},"New Record - Form"),"\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/c6e9acff-4d54-440a-9888-e24529747cf9",alt:"new record-form"})),(0,l.kt)("p",null,"Populate columns in the Expnaded form popup; click ",(0,l.kt)("inlineCode",{parentName:"p"},"Save"),"\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/ec264f05-8b0b-4029-adc0-a88932d69c9f",alt:"expanded record form"})),(0,l.kt)("h3",{id:"row-add-using-table-row-at-bottom-of-page"},"Row Add (Using Table Row at bottom of page)"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/cf0b6ccb-f598-4874-bb87-8fe291bab14e",alt:"in grid insert"})),(0,l.kt)("p",null,"Click on any of the following options to insert a new record on the grid directly."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"+")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"New Record")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"New Record- Grid")),(0,l.kt)("li",{parentName:"ul"},"Right click on any cell, click ",(0,l.kt)("inlineCode",{parentName:"li"},"Insert new row")," from the cell context menu")),(0,l.kt)("p",null,"Note that, any record inserted in the grid will always be appended to the end of the table by default."),(0,l.kt)("h3",{id:"row-add-pressing-enter-key-from-previous-row"},"Row Add (Pressing Enter Key from Previous Row)"),(0,l.kt)("p",null,"When you finish editing a cell and press Enter, the cell in the next row with the same column will be highlighted."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/203271676-bab64ca4-e0e4-4deb-9a62-609a97158911.png",alt:"image"})),(0,l.kt)("h3",{id:"row-edit"},"Row Edit"),(0,l.kt)("p",null,"You can start editing by any of the following methods  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Double-click on cell to edit  "),(0,l.kt)("li",{parentName:"ul"},"Click on cell and start typing (this way it will clear the previous content)  "),(0,l.kt)("li",{parentName:"ul"},"Click on cell and press enter to start editing"),(0,l.kt)("li",{parentName:"ul"},"And it will automatically save on blur event or if inactive.  ")),(0,l.kt)("h3",{id:"row-delete"},"Row Delete"),(0,l.kt)("p",null,"Right-click on the row and then from the context menu select ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete Row")," option.\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/9eef834b-21cf-4828-90ec-3c2e86cd19db",alt:"delete row -1"})),(0,l.kt)("p",null,"Bulk delete is also possible by selecting multiple rows by using the checkbox in first column and then ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete Selected Rows")," options from the right click context menu.\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/f83c702a-fa75-42a5-86eb-22ed85c0dec1",alt:"delete row 2"})),(0,l.kt)("h2",{id:"quick-import"},"Quick Import"),(0,l.kt)("p",null,"You can use Quick Import when you have data from external sources such as Airtable, CSV file or Microsoft Excel to an existing project by either "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hover on ",(0,l.kt)("inlineCode",{parentName:"li"},"Project title")," in tree-view, click ",(0,l.kt)("inlineCode",{parentName:"li"},"...")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"Quick Import From")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"Airtable")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"CSV file")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Microsoft Excel")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"JSON file")),(0,l.kt)("li",{parentName:"ul"},"Drag and drop CSV, JSON or Excel file to import")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(4318).Z,width:"1081",height:"634"})),(0,l.kt)("h3",{id:"import-airtable-into-an-existing-project"},"Import Airtable into an Existing Project"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See ",(0,l.kt)("a",{parentName:"li",href:"/setup-and-usages/import-airtable-to-sql-database-within-a-minute-for-free"},"here"))),(0,l.kt)("h3",{id:"import-csv-data-into-an-existing-project"},"Import CSV data into an Existing Project"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hover on ",(0,l.kt)("inlineCode",{parentName:"li"},"Project title")," in tree-view, click ",(0,l.kt)("inlineCode",{parentName:"li"},"...")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"Quick Import From")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"CSV file")),(0,l.kt)("li",{parentName:"ul"},"Drag & drop or select files (at most 5 files) to upload or specify CSV file URL, and Click Import",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Auto-Select Field Types"),": If it is checked, column types will be detected. Otherwise, it will default to ",(0,l.kt)("inlineCode",{parentName:"li"},"SingleLineText"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Use First Row as Headers"),": If it is checked, the first row will be treated as header row."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Import Data"),": If it is checked, all data will be imported. Otherwise, only table will be created.\n",(0,l.kt)("img",{alt:"image",src:n(6663).Z,width:"1267",height:"721"})))),(0,l.kt)("li",{parentName:"ul"},"You can revise the table name by double-clicking it, column name and column type. By default, the first column will be chosen as ",(0,l.kt)("inlineCode",{parentName:"li"},"Display Value")," and cannot be deleted.\n",(0,l.kt)("img",{alt:"image",src:n(6365).Z,width:"1163",height:"703"})),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Import")," to start importing process. The table will be created and the data will be imported.\n",(0,l.kt)("img",{alt:"image",src:n(275).Z,width:"1267",height:"716"}))),(0,l.kt)("h3",{id:"import-excel-data-into-an-existing-project"},"Import Excel data into an Existing Project"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hover on ",(0,l.kt)("inlineCode",{parentName:"li"},"Project title")," in tree-view, click ",(0,l.kt)("inlineCode",{parentName:"li"},"...")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"Quick Import From")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"Excel file")),(0,l.kt)("li",{parentName:"ul"},"Drag & drop or select files (at most 5 files) to upload or specify CSV file URL, and Click Import",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Auto-Select Field Types"),": If it is checked, column types will be detected. Otherwise, it will default to ",(0,l.kt)("inlineCode",{parentName:"li"},"SingleLineText"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Use First Row as Headers"),": If it is checked, the first row will be treated as header row."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Import Data"),": If it is checked, all data will be imported. Otherwise, only table will be created.\n",(0,l.kt)("img",{alt:"image",src:n(8552).Z,width:"1267",height:"721"})))),(0,l.kt)("li",{parentName:"ul"},"You can revise the table name by double-clicking it, column name and column type. By default, the first column will be chosen as ",(0,l.kt)("inlineCode",{parentName:"li"},"Display Value")," and cannot be deleted.\n",(0,l.kt)("img",{alt:"image",src:n(8549).Z,width:"1163",height:"703"})),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Import")," to start importing process. The table will be created and the data will be imported.\n",(0,l.kt)("img",{alt:"image",src:n(6953).Z,width:"1267",height:"716"}))),(0,l.kt)("h2",{id:"export-data"},"Export Data"),(0,l.kt)("p",null,"You can export your data from a table as a CSV file by clicking the ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," menu in toolbar, and hover on ",(0,l.kt)("inlineCode",{parentName:"p"},"Download"),". Currently only CSV and XLSX formats are supported for export."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(1703).Z,width:"991",height:"386"})),(0,l.kt)("h2",{id:"import-data"},"Import Data"),(0,l.kt)("p",null,"You can export your data from a table as a CSV file by clicking the ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," menu in toolbar, and hover on ",(0,l.kt)("inlineCode",{parentName:"p"},"Upload"),". Currently only CSV and XLSX formats are supported for import."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(2237).Z,width:"990",height:"348"})))}m.isMDXComponent=!0},1703:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/export-5e8b93f238f6af17a2a078e670b86653.png"},6365:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-csv-2-d87ae04edcbec842b0037c72c5e37358.png"},275:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-csv-3-8b888c0a3396c448838fa6ed82bf655a.png"},6663:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-csv-7935064aa8ac1b2db76dcb1bb6b92e56.png"},8549:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-xls-2-3140a43fc8cf3bd7a70668aa9df98505.png"},6953:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-xls-3-8b888c0a3396c448838fa6ed82bf655a.png"},8552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-xls-64fb1f3bb9f017169a5c89d444b6d931.png"},2237:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-2440d544c472d6b4f5efcae0eb1a19dd.png"},4318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick-import-cd55bfaa39ac7f5c4192b1b4bd46d8ad.png"}}]);