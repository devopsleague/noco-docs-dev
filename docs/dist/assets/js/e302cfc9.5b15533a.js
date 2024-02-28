"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[2898],{96082:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=n(74848),a=n(28453);const t={title:"Table details overview",description:"Table details overview",tags:["Table details","Table","Overview"],keywords:["table details","table overview","table"]},l=void 0,o={id:"table-details/table-details-overview",title:"Table details overview",description:"Table details overview",source:"@site/docs/065.table-details/table-details-overview.md",sourceDirName:"065.table-details",slug:"/table-details/table-details-overview",permalink:"/table-details/table-details-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/065.table-details/table-details-overview.md",tags:[{label:"Table details",permalink:"/tags/table-details"},{label:"Table",permalink:"/tags/table"},{label:"Overview",permalink:"/tags/overview"}],version:"current",frontMatter:{title:"Table details overview",description:"Table details overview",tags:["Table details","Table","Overview"],keywords:["table details","table overview","table"]},sidebar:"tutorialSidebar",previous:{title:"Table details",permalink:"/category/table-details"},next:{title:"Fields",permalink:"/category/fields"}},r={},c=[{value:"Fields",id:"fields",level:2},{value:"Relations",id:"relations",level:2},{value:"API Snippet",id:"api-snippet",level:2},{value:"Sample snippets",id:"sample-snippets",level:3},{value:"Supported Snippet",id:"supported-snippet",level:2},{value:"Shell",id:"shell",level:3},{value:"Javascript",id:"javascript",level:3},{value:"Node",id:"node",level:3},{value:"NocoDB SDK",id:"nocodb-sdk",level:3},{value:"PHP",id:"php",level:3},{value:"Python",id:"python",level:3},{value:"Ruby",id:"ruby",level:3},{value:"Java",id:"java",level:3},{value:"C",id:"c",level:3},{value:"Webhook",id:"webhook",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{TabItem:t,Tabs:l}=i;return t||p("TabItem",!0),l||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Table Details"})," section houses various tools & utilities to manage & work with your table schema & data. This essentially is a place for 'Creators' to build & manage their tables quickly. ",(0,s.jsx)(i.code,{children:"Details"})," section is accessible using the ",(0,s.jsx)(i.code,{children:"Data-Details"})," toggle switcher in the top navbar."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image",src:n(16640).A+"",width:"2876",height:"208"})}),"\n",(0,s.jsx)(i.p,{children:"This section is divided into 4 parts:"}),"\n",(0,s.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(i.p,{children:["Fields is a multi-field table schema editor that allows you to add, edit, delete and reorder fields quickly & easily from one place. Additional details about multi-field editor can be found ",(0,s.jsx)(i.a,{href:"/fields/multi-fields-editor",children:"here"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image",src:n(17791).A+"",width:"2880",height:"1800"})}),"\n",(0,s.jsx)(i.h2,{id:"relations",children:"Relations"}),"\n",(0,s.jsx)(i.p,{children:"Relations are vital for managing data connections in a database. In a complex schema, it's essential to have a clear understanding of these connections because they:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Maintain data accuracy."}),"\n",(0,s.jsx)(i.li,{children:"Enhance query efficiency."}),"\n",(0,s.jsx)(i.li,{children:"Aid in logical schema design."}),"\n",(0,s.jsx)(i.li,{children:"Support data analysis."}),"\n",(0,s.jsx)(i.li,{children:"Enable proper application development."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Visualizing these relations through an Entity Relationship Diagram (ERD) simplifies their comprehension and management, especially as the database grows in complexity."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image",src:n(32810).A+"",width:"2880",height:"1800"})}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"You can drag drop the tables to rearrange them in the diagram. Note that, such reordering will not persist across sessions."})}),"\n",(0,s.jsx)(i.h2,{id:"api-snippet",children:"API Snippet"}),"\n",(0,s.jsx)(i.p,{children:"NocoDB provides programmatic access to your data via REST APIs. API snippets in NocoDB offer ready-made code examples in various programming languages, simplifying the process of integrating your data with external applications. These snippets save time and effort by providing a quick and easy reference for developers, enabling them to interact with your NocoDB database programmatically without the need to write code from scratch."}),"\n",(0,s.jsx)(i.p,{children:"A quick snippet for different scripts & languages is listed in this section."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image",src:n(85357).A+"",width:"2880",height:"1800"})}),"\n",(0,s.jsx)(i.h3,{id:"sample-snippets",children:"Sample snippets"}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)(t,{value:"Shell",label:"Shell",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"curl --request GET \\\n  --url 'http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=' \\\n  --header 'xc-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU'\n"})})}),(0,s.jsx)(t,{value:"Javascript",label:"Javascript",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"import axios from \"axios\";\n\nconst options = {\n  method: 'GET',\n  url: 'http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer',\n  params: {offset: '0', limit: '25', where: ''},\n  headers: {\n    'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU'\n  }\n};\n\naxios.request(options).then(function (response) {\n  console.log(response.data);\n}).catch(function (error) {\n  console.error(error);\n});\n"})})}),(0,s.jsx)(t,{value:"Node",label:"Node",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"var axios = require(\"axios\").default;\n\nvar options = {\n  method: 'GET',\n  url: 'http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer',\n  params: {offset: '0', limit: '25', where: ''},\n  headers: {\n    'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU'\n  }\n};\n\naxios.request(options).then(function (response) {\n  console.log(response.data);\n}).catch(function (error) {\n  console.error(error);\n});\n"})})}),(0,s.jsx)(t,{value:"NocoDB SDK",label:"NocoDB SDK",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'import { Api } from "nocodb-sdk";\nconst api = new Api({\n  baseURL: "http://localhost:8080",\n  headers: {\n    "xc-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU"\n  }\n})\n\napi.dbViewRow.list(\n  "noco",\n  "ExternalDB",\n  "Customer",\n  "Customer", {\n    "offset": 0,\n    "limit": 25,\n    "where": ""\n}).then(function (data) {\n  console.log(data);\n}).catch(function (error) {\n  console.error(error);\n});\n'})})}),(0,s.jsx)(t,{value:"PHP",label:"PHP",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_PORT => "8080",\n  CURLOPT_URL => "http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "xc-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'})})}),(0,s.jsx)(t,{value:"Python",label:"Python",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'import http.client\n\nconn = http.client.HTTPConnection("localhost:8080")\n\nheaders = { \'xc-auth\': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU" }\n\nconn.request("GET", "/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'})})}),(0,s.jsx)(t,{value:"Ruby",label:"Ruby",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"require 'uri'\nrequire 'net/http'\n\nurl = URI(\"http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=\")\n\nhttp = Net::HTTP.new(url.host, url.port)\n\nrequest = Net::HTTP::Get.new(url)\nrequest[\"xc-auth\"] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU'\n\nresponse = http.request(request)\nputs response.read_body\n"})})}),(0,s.jsx)(t,{value:"Java",label:"Java",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'HttpResponse<String> response = Unirest.get("http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=")\n  .header("xc-auth", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU")\n  .asString();\n'})})}),(0,s.jsx)(t,{value:"C",label:"C",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'CURL *hnd = curl_easy_init();\n\ncurl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");\ncurl_easy_setopt(hnd, CURLOPT_URL, "http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=");\n\nstruct curl_slist *headers = NULL;\nheaders = curl_slist_append(headers, "xc-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU");\ncurl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);\n\nCURLcode ret = curl_easy_perform(hnd);\n'})})})]}),"\n",(0,s.jsx)(i.h2,{id:"supported-snippet",children:"Supported Snippet"}),"\n",(0,s.jsx)(i.h3,{id:"shell",children:"Shell"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"cURL"}),"\n",(0,s.jsx)(i.li,{children:"wget"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"javascript",children:"Javascript"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Axios"}),"\n",(0,s.jsx)(i.li,{children:"Fetch"}),"\n",(0,s.jsx)(i.li,{children:"jQuery"}),"\n",(0,s.jsx)(i.li,{children:"XHR"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"node",children:"Node"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Axios"}),"\n",(0,s.jsx)(i.li,{children:"Fetch"}),"\n",(0,s.jsx)(i.li,{children:"Request"}),"\n",(0,s.jsx)(i.li,{children:"Native"}),"\n",(0,s.jsx)(i.li,{children:"Unirest"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"nocodb-sdk",children:"NocoDB SDK"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Javascript"}),"\n",(0,s.jsx)(i.li,{children:"Node"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"php",children:"PHP"}),"\n",(0,s.jsx)(i.h3,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"http.client"}),"\n",(0,s.jsx)(i.li,{children:"request"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"ruby",children:"Ruby"}),"\n",(0,s.jsx)(i.h3,{id:"java",children:"Java"}),"\n",(0,s.jsx)(i.h3,{id:"c",children:"C"}),"\n",(0,s.jsx)(i.h2,{id:"webhook",children:"Webhook"}),"\n",(0,s.jsx)(i.p,{children:"Webhooks are essential for real-time communication and automation between NocoDB and external systems. They serve several crucial purposes:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Instant Notifications:"})," Webhooks enable immediate notifications when there are changes in your NocoDB database. This real-time information can be crucial for timely responses to important events, such as new data entries, updates, or deletions."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Automation:"})," They facilitate the automation of processes by triggering actions in external systems based on database events. For example, you can automate tasks like sending emails, updating spreadsheets, or syncing data with other applications in response to changes in NocoDB."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Integration:"})," Webhooks allow you to seamlessly integrate NocoDB with other tools and services, enhancing the overall functionality of your database. This integration can streamline workflows, improve data consistency, and reduce manual data entry."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Bulk Operations:"})," NocoDB's support for webhooks in bulk endpoints makes it efficient to handle multiple records simultaneously. This is especially useful when dealing with large datasets or when you need to perform batch operations in external systems."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"In summary, webhooks in NocoDB empower you to create dynamic, responsive, and interconnected workflows by keeping external systems in sync with your database's activities."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image",src:n(95986).A+"",width:"2880",height:"1800"})}),"\n",(0,s.jsxs)(i.p,{children:["Note that, Webhooks currently are specific for associated table. Additional procedural details about webhooks can be found ",(0,s.jsx)(i.a,{href:"/automation/webhook/webhook-overview",children:"here"})]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85357:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/details-api-snippet-78906ef3b2248845b8955eed84a3031e.png"},17791:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/details-field-editor-6b80e39a53b09c20af27e53b9777ea9a.png"},32810:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/details-relations-0716794b3e749928f581e2a2f78931a3.png"},16640:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/details-tab-8aeca1f70ead223a641ead51b82e97f5.png"},95986:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/details-webhook-834a408cf5a6b9d711ac6ab63a1eaa4a.png"},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var s=n(96540);const a={},t=s.createContext(a);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);