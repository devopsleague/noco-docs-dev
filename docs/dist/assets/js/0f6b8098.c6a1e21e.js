"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4858],{64440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var i=n(74848),s=n(28453);const o={title:"Table Operations",description:"Table Operations: Row, Column, Quick Import, Export & Import"},l=void 0,a={id:"setup-and-usages/table-operations",title:"Table Operations",description:"Table Operations: Row, Column, Quick Import, Export & Import",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/020.table-operations.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/table-operations",permalink:"/0.109.7/setup-and-usages/table-operations",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/versioned_docs/version-0.109.7/030.setup-and-usages/020.table-operations.md",tags:[],version:"0.109.7",sidebarPosition:20,frontMatter:{title:"Table Operations",description:"Table Operations: Row, Column, Quick Import, Export & Import"},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/0.109.7/setup-and-usages/dashboard"},next:{title:"Column Operations",permalink:"/0.109.7/setup-and-usages/column-operations"}},c={},r=[{value:"Table",id:"table",level:2},{value:"Table Create",id:"table-create",level:3},{value:"Table Rename",id:"table-rename",level:3},{value:"Table Delete",id:"table-delete",level:3},{value:"Column",id:"column",level:2},{value:"Column Add",id:"column-add",level:3},{value:"Column Edit",id:"column-edit",level:3},{value:"Column Delete",id:"column-delete",level:3},{value:"Row",id:"row",level:2},{value:"Row Add (Using Form)",id:"row-add-using-form",level:3},{value:"Row Add (Using Table Row at bottom of page)",id:"row-add-using-table-row-at-bottom-of-page",level:3},{value:"Row Add (Pressing Enter Key from Previous Row)",id:"row-add-pressing-enter-key-from-previous-row",level:3},{value:"Row Edit",id:"row-edit",level:3},{value:"Row Delete",id:"row-delete",level:3},{value:"Quick Import",id:"quick-import",level:2},{value:"Import Airtable into an Existing Project",id:"import-airtable-into-an-existing-project",level:3},{value:"Import CSV data into an Existing Project",id:"import-csv-data-into-an-existing-project",level:3},{value:"Import Excel data into an Existing Project",id:"import-excel-data-into-an-existing-project",level:3},{value:"Export Data",id:"export-data",level:2},{value:"Import Data",id:"import-data",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Once you have created a new NocoDB project you can open it, In the browser, the URL would be like ",(0,i.jsx)(t.code,{children:"example.com/#/default/<project_id>"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"table",children:"Table"}),"\n",(0,i.jsx)(t.h3,{id:"table-create",children:"Table Create"}),"\n",(0,i.jsxs)(t.p,{children:["On project dashboard, click on ",(0,i.jsx)(t.code,{children:"Add new table"})," button"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/nocodb/nocodb/assets/86527202/0b1d0b89-b3c6-4c3c-8208-4b6afce67d23",alt:"table-create-button"})}),"\n",(0,i.jsxs)(t.p,{children:["Provide a name for the table & click ",(0,i.jsx)(t.code,{children:"Create Table"})," button."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/nocodb/nocodb/assets/86527202/fceb6c48-e0d6-428c-bb16-d2da4e38a81f",alt:"table-create-modal"})}),"\n",(0,i.jsx)(t.p,{children:"After the successful submission, the table will be created and open on a new grid."}),"\n",(0,i.jsx)("img",{width:"1504",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795081-f41ebd4d-7fa9-4f65-a66f-3d2375925106.png"}),"\n",(0,i.jsx)(t.h3,{id:"table-rename",children:"Table Rename"}),"\n",(0,i.jsxs)(t.p,{children:["Right click on Table name on left hand project-tree menu, select ",(0,i.jsx)(t.code,{children:"Rename"})]}),"\n",(0,i.jsx)("img",{width:"606",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795096-82b007fb-f57a-4141-938e-be502b1fb2cd.png"}),"\n",(0,i.jsxs)(t.p,{children:["In modal popup, enter new table name and click ",(0,i.jsx)(t.code,{children:"Submit"})," button"]}),"\n",(0,i.jsx)("img",{width:"1506",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795119-4aeb05e1-16d5-4b4f-bf6c-81752234d946.png"}),"\n",(0,i.jsx)(t.h3,{id:"table-delete",children:"Table Delete"}),"\n",(0,i.jsxs)(t.p,{children:["Right click on Table name on left hand project-tree menu, select ",(0,i.jsx)(t.code,{children:"Delete"})]}),"\n",(0,i.jsx)("img",{width:"641",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795140-4fe71896-0802-45dd-9c93-64e51925be57.png"}),"\n",(0,i.jsx)(t.p,{children:"Click Yes to confirm the table deletion"}),"\n",(0,i.jsx)("img",{width:"1507",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795152-9bdbf8df-846e-42f3-89d0-c68bce022cc1.png"}),"\n",(0,i.jsx)(t.h2,{id:"column",children:"Column"}),"\n",(0,i.jsx)(t.h3,{id:"column-add",children:"Column Add"}),"\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.code,{children:"+"})," icon on the right corner of the table."]}),"\n",(0,i.jsx)("img",{width:"352",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189053971-a3d29b3b-1177-49fe-8178-8868528fe3e7.png"}),"\n",(0,i.jsxs)(t.p,{children:["After the click, it will show a menu and you can enter the column name and choose the column type.  (See ",(0,i.jsx)(t.a,{href:"./column-types",children:"Column Types"})," for the full list)."]}),"\n",(0,i.jsx)("img",{width:"459",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189073266-a0f19e2e-5dd2-4343-8c74-4ef709da272c.png"}),"\n",(0,i.jsxs)(t.p,{children:["You can also click ",(0,i.jsx)(t.code,{children:"Show more"})," for additional menu options."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/222749857-0e793db2-a5d2-4b54-8d23-2a0cbbec8f5d.png",alt:"Screenshot 2023-03-03 at 8 13 07 PM"})}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.code,{children:"Save"})," button to create the new column."]}),"\n",(0,i.jsx)("img",{width:"1509",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795274-08483315-5538-4685-8c08-261a9c2dfe14.png"}),"\n",(0,i.jsx)(t.h3,{id:"column-edit",children:"Column Edit"}),"\n",(0,i.jsxs)(t.p,{children:["To edit column properties, click the down arrow, select ",(0,i.jsx)(t.code,{children:"Edit"})," from the menu."]}),"\n",(0,i.jsx)("img",{width:"230",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189077129-dfb7a815-3fc7-41ea-b72c-e57f3c30a7f4.png"}),"\n",(0,i.jsxs)(t.p,{children:["You will be able to edit column name & associated datatype using pop-up modal.  You can also click ",(0,i.jsx)(t.code,{children:"Show more"})," for additional menu options."]}),"\n",(0,i.jsx)("img",{width:"497",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189077270-7acdc818-3747-4307-93fb-e970cb7936f9.png"}),"\n",(0,i.jsxs)(t.p,{children:["Prior to v0.104.3, Advanced menu by default displayed developer specific database configuration options. To avoid unintended tweaks from user, these are now hidden under an easter egg menu. To enable, double click on ",(0,i.jsx)(t.code,{children:"show all"}),"/",(0,i.jsx)(t.code,{children:"hide all"})," button in column edit modal."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/223024810-85dac1c6-87ef-4193-90cb-3a05be8ccc1d.png",alt:"Screenshot 2023-03-06 at 10 45 26 AM"})}),"\n",(0,i.jsx)(t.h3,{id:"column-delete",children:"Column Delete"}),"\n",(0,i.jsxs)(t.p,{children:["To delete a column, click the down arrow, select ",(0,i.jsx)(t.code,{children:"Delete"})," from the menu."]}),"\n",(0,i.jsx)("img",{width:"256",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189077566-c9376e4e-9ee8-4ffa-b437-1240894a30cd.png"}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.code,{children:"Yes"})," to confirm the column deletion."]}),"\n",(0,i.jsx)("img",{width:"1507",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795311-c2a5587e-d92f-4b88-a8a3-e20ac13c694b.png"}),"\n",(0,i.jsx)(t.h2,{id:"row",children:"Row"}),"\n",(0,i.jsx)(t.p,{children:"For adding new values to the table we need new rows, new rows can be added in two methods."}),"\n",(0,i.jsx)(t.h3,{id:"row-add-using-form",children:"Row Add (Using Form)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.code,{children:"+"})," icon in the toolbar of the table tab.","\n",(0,i.jsx)("img",{width:"1038",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189079143-8f3e3dd6-9b62-4fb0-9a78-a57545026d11.png"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Then you can enter the values and click ",(0,i.jsx)(t.code,{children:"Save row"}),".","\n",(0,i.jsx)("img",{width:"1506",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795353-2d90316f-a5e4-41af-8931-20b3c6ed08dc.png"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["After saving it will be there on your table.","\n",(0,i.jsx)("img",{width:"620",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795402-d7c26ced-a009-43d9-a4a4-e3c2653225f0.png"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"row-add-using-table-row-at-bottom-of-page",children:"Row Add (Using Table Row at bottom of page)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Click the bottom row of the table ",(0,i.jsx)(t.code,{children:"+ Add new row"}),".","\n",(0,i.jsx)("img",{width:"545",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189079815-9a7ea5e3-4eb7-452e-99a8-78c271f2ad1f.png"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["A new empty row will be created","\n",(0,i.jsx)("img",{width:"567",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189080009-3aeb70b4-92b0-4702-acb9-e5e52e31855e.png"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"row-add-pressing-enter-key-from-previous-row",children:"Row Add (Pressing Enter Key from Previous Row)"}),"\n",(0,i.jsx)(t.p,{children:"When you finish editing a cell and press Enter, the cell in the next row with the same column will be highlighted."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/35857179/203271676-bab64ca4-e0e4-4deb-9a62-609a97158911.png",alt:"image"})}),"\n",(0,i.jsx)(t.h3,{id:"row-edit",children:"Row Edit"}),"\n",(0,i.jsx)(t.p,{children:"You can start editing by any of the following methods"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Double click on cell to edit"}),"\n",(0,i.jsx)(t.li,{children:"Click on cell and start typing (this way it will clear the previous content)"}),"\n",(0,i.jsx)(t.li,{children:"Click on cell and press enter to start editing"}),"\n",(0,i.jsx)(t.li,{children:"And it will automatically save on blur event or if inactive."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"row-delete",children:"Row Delete"}),"\n",(0,i.jsxs)(t.p,{children:["Right-click on anywhere in the row and then from the context menu select ",(0,i.jsx)(t.code,{children:"Delete Row"})," option."]}),"\n",(0,i.jsxs)(t.p,{children:["Bulk delete is also possible by selecting multiple rows by using the checkbox in first column and then ",(0,i.jsx)(t.code,{children:"Delete Selected Rows"})," options from the right click context menu."]}),"\n",(0,i.jsx)("img",{width:"568",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189081764-9f13c286-e02a-40d0-93ea-4b1362d96827.png"}),"\n",(0,i.jsx)(t.h2,{id:"quick-import",children:"Quick Import"}),"\n",(0,i.jsx)(t.p,{children:"You can use Quick Import when you have data from external sources such as Airtable, CSV file or Microsoft Excel to an existing project by either"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Hover ",(0,i.jsx)(t.code,{children:"Add new table"})," button in table menu, click three dots, use Quick Import to create"]}),"\n",(0,i.jsx)(t.li,{children:"Drag and drop CSV, JSON or Excel file to import"}),"\n"]}),"\n",(0,i.jsx)("img",{width:"1505",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795025-afd81191-4743-435b-b802-88367d2663f9.png"}),"\n",(0,i.jsx)(t.h3,{id:"import-airtable-into-an-existing-project",children:"Import Airtable into an Existing Project"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["See ",(0,i.jsx)(t.a,{href:"/0.109.7/setup-and-usages/import-airtable-to-sql-database-within-a-minute-for-free",children:"here"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"import-csv-data-into-an-existing-project",children:"Import CSV data into an Existing Project"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Hover ",(0,i.jsx)(t.code,{children:"Add new table"})," button in table menu, click three dots, and click ",(0,i.jsx)(t.code,{children:"CSV file"})]}),"\n",(0,i.jsxs)(t.li,{children:["Drag & drop or select files (at most 5 files) to upload or specify CSV file URL, and Click Import","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Auto-Select Field Types"}),": If it is checked, column types will be detected. Otherwise, it will default to ",(0,i.jsx)(t.code,{children:"SingleLineText"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Use First Row as Headers"}),": If it is checked, the first row will be treated as header row."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Import Data"}),": If it is checked, all data will be imported. Otherwise, only table will be created.\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/35857179/197454479-1ed18dce-1d0b-4ee3-88b3-9b6a132dea2a.png",alt:"image"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You can revise the table name by double-clicking it, column name and column type. By default, the first column will be chosen as ",(0,i.jsx)("a",{href:"/0.109.7/setup-and-usages/display-value",target:"_blank",children:"Display Value"})," and cannot be deleted.\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/35857179/197454633-5b30323e-2b13-4c55-843a-948c093d373e.png",alt:"image"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.code,{children:"Import"})," to start importing process. The table will be created and the data will be imported.\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/35857179/197455547-2d93df5e-a7f0-4c88-af53-990067625967.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"import-excel-data-into-an-existing-project",children:"Import Excel data into an Existing Project"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Hover ",(0,i.jsx)(t.code,{children:"Add new table"})," button in table menu, click three dots, and click ",(0,i.jsx)(t.code,{children:"Microsoft Excel"})]}),"\n",(0,i.jsxs)(t.li,{children:["Drag & drop or select file (at most 1 file) to upload or specify Excel file URL and Click Import.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Auto-Select Field Types"}),": If it is checked, column types will be detected. Otherwise, it will default to ",(0,i.jsx)(t.code,{children:"SingleLineText"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Use First Row as Headers"}),": If it is checked, the first row will be treated as header row."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Import Data"}),": If it is checked, all data will be imported. Otherwise, only table will be created.\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/35857179/197455788-8dd8a7d1-38f3-48c3-a05e-6ab0cf25045c.png",alt:"image"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You can revise the table name, column name and column type. By default, the first column will be chosen as ",(0,i.jsx)("a",{href:"/0.109.7/setup-and-usages/display-value",target:"_blank",children:"Display Value"})," and cannot be deleted."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"If your Excel file contains multiple sheets, each sheet will be stored in a separate table."})}),"\n",(0,i.jsx)("img",{width:"1449",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795771-77963196-8e10-4f45-b605-eb1089d6bc9b.png"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.code,{children:"Import"})," to start importing process. The table(s) will be created and the data will be imported to the corresponding table(s)."]}),"\n",(0,i.jsx)("img",{width:"1508",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795789-80366467-9778-464b-bce0-a5c0dfe97522.png"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"export-data",children:"Export Data"}),"\n",(0,i.jsxs)(t.p,{children:["You can export your data from a table as a CSV file by clicking the down arrow next to Table name and hover on ",(0,i.jsx)(t.code,{children:"Download"}),". Currently only CSV and XLSX formats are supported for export."]}),"\n",(0,i.jsx)("img",{width:"660",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795866-a2db2a9b-d8e3-43f2-aec5-085e1932a0a5.png"}),"\n",(0,i.jsx)(t.h2,{id:"import-data",children:"Import Data"}),"\n",(0,i.jsxs)(t.p,{children:["You can import your data in CSV format to a table by clicking the down arrow next to Table name and hover on ",(0,i.jsx)(t.code,{children:"Upload"}),". Currently only CSV format is supported for upload."]}),"\n",(0,i.jsx)("img",{width:"668",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194795880-60bf2003-0bef-45cd-aafa-1b97adb75d42.png"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);