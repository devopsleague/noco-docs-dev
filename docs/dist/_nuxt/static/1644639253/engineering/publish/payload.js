__NUXT_JSONP__("/engineering/publish", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V){return {data:[{document:{slug:"publish",description:r,title:r,position:2000,category:"Engineering",menuTitle:r,toc:[{id:w,depth:h,text:"1. Merge develop to master"},{id:x,depth:h,text:y},{id:z,depth:h,text:A},{id:B,depth:h,text:C},{id:D,depth:h,text:E},{id:F,depth:h,text:G},{id:H,depth:h,text:I},{id:J,depth:h,text:K},{id:L,depth:h,text:M}],body:{type:"root",children:[{type:b,tag:N,props:{},children:[{type:a,value:"\n   This is exclusive to NocoDB team members only.\n"}]},{type:a,value:c},{type:b,tag:N,props:{types:"danger"},children:[{type:a,value:"\n   The version 0.84.8 will be used as an example. Please change it during the release.\n"}]},{type:a,value:c},{type:b,tag:i,props:{id:w},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#1-merge-develop-to-master",tabIndex:l},children:[{type:b,tag:f,props:{className:[m,n]},children:[]}]},{type:a,value:"1. Merge "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:" to "},{type:b,tag:d,props:{},children:[{type:a,value:p}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"When several features are included in "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:" branch and they are ready to be released, make a PR with the title "},{type:b,tag:d,props:{},children:[{type:a,value:"0.84.8 Pre-Release"}]},{type:a,value:" from "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:" branch to "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:" branch. At least one NocoDB team member approval is required."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:x},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#2-publish-frontend",tabIndex:l},children:[{type:b,tag:f,props:{className:[m,n]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Navigate to "},{type:b,tag:d,props:{},children:[{type:a,value:"packages\u002Fnc-gui"}]},{type:a,value:" and execute following command.\n"},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,O]},children:[{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{className:[P,Q]},children:[{type:a,value:R}]},{type:a,value:" run build:copy:jsdeliver\n"}]}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:z},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#3-install-frontend",tabIndex:l},children:[{type:b,tag:f,props:{className:[m,n]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"Install the latest published version of "},{type:b,tag:d,props:{},children:[{type:a,value:"nc-lib-gui"}]},{type:a,value:" in "},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:", package version can be extracted from result of step 1 or copy it from "},{type:b,tag:d,props:{},children:[{type:a,value:"packages\u002Fnc-lib-gui\u002Fpackage.json"}]},{type:a,value:". While installing, add "},{type:b,tag:d,props:{},children:[{type:a,value:"-E"}]},{type:a,value:" to install exact version of the package."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"Example: for latest published version "},{type:b,tag:d,props:{},children:[{type:a,value:"0.84.8"}]}]},{type:a,value:c},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,O]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"  "},{type:b,tag:f,props:{className:[P,Q]},children:[{type:a,value:R}]},{type:a,value:" i -E nc-lib-gui@0.84.8\n"}]}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:B},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#4-publish-backend",tabIndex:l},children:[{type:b,tag:f,props:{className:[m,n]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Bump package version in "},{type:b,tag:d,props:{},children:[{type:a,value:"packages\u002Fnocodb\u002Fpackage.json"}]},{type:a,value:" file."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Publish the npm package by running following npm command in "},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:" folder.\n"},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,"language-text"]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"npm run obfuscate:build:publish\n"}]}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:D},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#5-close-all-issues",tabIndex:l},children:[{type:b,tag:f,props:{className:[m,n]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Go to Issue page and close all issues with tags "},{type:b,tag:d,props:{},children:[{type:a,value:"Fixed"}]},{type:a,value:" or "},{type:b,tag:d,props:{},children:[{type:a,value:"Resolved"}]},{type:a,value:T}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:F},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#6-commit-release-changes",tabIndex:l},children:[{type:b,tag:f,props:{className:[m,n]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Commit those changes made by previous steps with the commit message "},{type:b,tag:d,props:{},children:[{type:a,value:"chore(publish): v0.84.8"}]},{type:a,value:T}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:H},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#7-prepare-release-notes",tabIndex:l},children:[{type:b,tag:f,props:{className:[m,n]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Populate release note by running following github action (on "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:" branch) - "},{type:b,tag:d,props:{},children:[{type:a,value:"Release : Draft Notes"}]},{type:a,value:". While running the action you have to provide 2 inputs:\n"},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:U,props:{},children:[{type:a,value:"Tag"}]},{type:a,value:" : Provide current package version"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:U,props:{},children:[{type:a,value:"Previous Tag"}]},{type:a,value:" : Provide previously released tag version"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:J},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#8-publish-docker--release",tabIndex:l},children:[{type:b,tag:f,props:{className:[m,n]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"Publish docker image by running "},{type:b,tag:d,props:{},children:[{type:a,value:"Release : Docker"}]},{type:a,value:" action in github (on "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:" branch), where you have to provide the package version\u002Ftag. It may take half an hour. Test it locally after it is done."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"Update the populated release (remove issues which is not related to release) draft and publish. In release note you can use "},{type:b,tag:d,props:{},children:[{type:a,value:"Auto-generate release notes"}]},{type:a,value:" button to populate release content from commits & PR."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:L},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#9-sync-the-changes-back-to-develop-branch",tabIndex:l},children:[{type:b,tag:f,props:{className:[m,n]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Pull the latest chagnes for both branches to your local"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Switch to "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:" branch"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Run "},{type:b,tag:d,props:{},children:[{type:a,value:"git merge master"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Push the diff to remote repository"}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fengineering",path:"\u002Fen\u002Fengineering\u002Fpublish",extension:".md",createdAt:V,updatedAt:V,to:"\u002Fengineering\u002Fpublish"},prev:{slug:"api-tokens",title:"API Tokens",to:"\u002Fdeveloper-resources\u002Fapi-tokens"},next:{slug:"translation",title:"i18n",to:"\u002Fengineering\u002Ftranslation"}}],fetch:{},mutations:[]}}("text","element","\n","code","li","span","ul",2,"h2","a","true",-1,"icon","icon-link","develop","master","p","Making a release","div","nuxt-content-highlight","pre","line-numbers","1-merge-develop-to-master","2-publish-frontend","2. Publish frontend","3-install-frontend","3. Install frontend","4-publish-backend","4. Publish backend","5-close-all-issues","5. Close all issues","6-commit-release-changes","6. Commit release changes","7-prepare-release-notes","7. Prepare release notes","8-publish-docker--release","8. Publish docker & release","9-sync-the-changes-back-to-develop-branch","9. Sync the changes back to develop branch","alert","language-bash","token","function","npm","packages\u002Fnocodb",".","strong","2022-02-12T04:13:22.860Z")));