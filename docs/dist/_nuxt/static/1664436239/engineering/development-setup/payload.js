__NUXT_JSONP__("/engineering/development-setup", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA){return {data:[{document:{slug:"development-setup",description:"How to set-up your development environment",title:V,position:3200,category:"Engineering",menuTitle:V,toc:[{id:W,depth:w,text:X},{id:Y,depth:w,text:Z},{id:_,depth:w,text:$},{id:aa,depth:w,text:ab},{id:ac,depth:w,text:ad},{id:ae,depth:z,text:af},{id:ag,depth:z,text:ah},{id:ai,depth:z,text:aj},{id:ak,depth:z,text:al},{id:am,depth:z,text:an},{id:ao,depth:w,text:ap},{id:aq,depth:w,text:ar}],body:{type:"root",children:[{type:b,tag:x,props:{id:W},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#clone-the-repo",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:X}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,M]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"git clone https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\ncd nocodb\u002Fpackages\n"}]}]}]},{type:a,value:e},{type:b,tag:x,props:{id:Y},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#build-sdk",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:Z}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,M]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"# build nocodb-sdk\ncd nocodb-sdk\nnpm install\nnpm run build\n"}]}]}]},{type:a,value:e},{type:b,tag:x,props:{id:_},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#build-backend",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:$}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,M]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"# build backend - runs on port 8080\ncd ..\u002Fnocodb\nnpm install\nnpm run watch:run\n"}]}]}]},{type:a,value:e},{type:b,tag:x,props:{id:aa},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#build-frontend",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:ab}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,M]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"# build frontend - runs on port 3000\ncd ..\u002Fnc-gui\nnpm install\nnpm run dev \n"}]}]}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:"Any changes made to frontend and backend will be automatically reflected in the browser."}]},{type:a,value:e},{type:b,tag:x,props:{id:ac},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#cypress---e2e-tests",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:ad}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:"Cypress tests are divided into 4 suites"}]},{type:a,value:e},{type:b,tag:as,props:{},children:[{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"SQLite tests"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"Postgres tests"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"MySQL tests"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"Quick import tests"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:"First 3 suites, each have 4 test category"}]},{type:a,value:e},{type:b,tag:as,props:{},children:[{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"Table operations (create, delete, rename, add column, delete column, rename column)"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"Views (Grid, Gallery, Form)"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"Roles (user profiles, access control & preview)"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"Miscellaneous (Import, i18n, etc)"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:A,props:{id:ae},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#mysql-tests-extdb-project",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:af}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,B]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" restTableOps.js\n- Views "},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" restViews.js\n- Roles "},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" restRoles.js\n- Miscellaneous "},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" restMisc.js\n"}]}]}]},{type:a,value:e},{type:b,tag:A,props:{id:ag},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#sqlite-tests-xcdb-project",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:ah}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,B]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:" run start:xcdb-api:cache\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" xcdb-restTableOps.js\n- Views "},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" xcdb-restViews.js\n- Roles "},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" xcdb-restRoles.js\n- Miscellaneous "},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" xcdb-restMisc.js\n"}]}]}]},{type:a,value:e},{type:b,tag:A,props:{id:ai},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#pg-tests-extdb-project",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:aj}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,B]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:at}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" pg-restTableOps.js\n- Views "},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" pg-restViews.js\n- Roles "},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" pg-restRoles.js\n- Miscellaneous "},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:q}]},{type:a,value:" pg-restMisc.js\n"}]}]}]},{type:a,value:e},{type:b,tag:A,props:{id:ak},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#quick-import-tests-sqlite-project",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:al}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,B]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:av}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aw}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ay}]},{type:a,value:az}]}]}]},{type:a,value:e},{type:b,tag:A,props:{id:am},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#quick-import-tests-pg",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:an}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,B]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:at}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:av}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aw}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ay}]},{type:a,value:az}]}]}]},{type:a,value:e},{type:b,tag:x,props:{id:ao},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#enabling-ci-cd-for-draft-pr",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:ap}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:"CI-CD will be triggered on moving a PR from draft state to "},{type:b,tag:i,props:{},children:[{type:a,value:"Ready for review"}]},{type:a,value:" state & on pushing changes to "},{type:b,tag:i,props:{},children:[{type:a,value:"Develop"}]},{type:a,value:". To verify CI-CD before requesting for review, add label "},{type:b,tag:i,props:{},children:[{type:a,value:"trigger-CI"}]},{type:a,value:" on Draft PR."}]},{type:a,value:e},{type:b,tag:x,props:{id:aq},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#accessing-ci-cd-failure-screenshots",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:ar}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:"For Cypress tests, screenshots are captured on test failure. These will provide vital clues for debugging possible issues observed in CI-CD. To access screenshots, Open link associated with CI-CD run & click on "},{type:b,tag:i,props:{},children:[{type:a,value:"Artifacts"}]}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:"img",props:{alt:"Screenshot 2022-09-29 at 12 43 37 PM",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F86527202\u002F192965070-dc04b952-70fb-4197-b4bd-ca7eda066e60.png"},children:[]}]}]},dir:"\u002Fen\u002Fengineering",path:"\u002Fen\u002Fengineering\u002Fdevelopment-setup",extension:".md",createdAt:aA,updatedAt:aA,to:"\u002Fengineering\u002Fdevelopment-setup"},prev:{slug:"repository-structure",title:"Repository structure",to:"\u002Fengineering\u002Frepository-structure"},next:{slug:"testing",title:"Writing Tests",to:"\u002Fengineering\u002Ftesting"}}],fetch:{},mutations:[]}}("text","element","span","token","\n","comment","function","npm","code","a","true",-1,"icon","icon-link","builtin","class-name",":","div","nuxt-content-highlight","pre","line-numbers","li",2,"h2","p",3,"h3","language-shell","# install dependencies(cypress)"," ","install","docker-compose","# Run backend api using following command","# Run frontend web UI using following command"," run start:web\n\n","# wait until both 3000 and 8080 ports are available","# or run following command to run it with GUI"," run cypress:open\n\n","language-text"," run start:api:cache\n","# start MySQL database using docker compose"," -f .\u002Fscripts\u002Fdocker-compose-cypress.yml up\n\n","# run one of 4 test scripts","\n- Table operations ","operator","&"," access control ","Development setup","clone-the-repo","Clone the repo","build-sdk","Build SDK","build-backend","Build Backend","build-frontend","Build Frontend","cypress---e2e-tests","Cypress - e2e tests","mysql-tests-extdb-project","MySQL tests (ExtDB project)","sqlite-tests-xcdb-project","SQLite tests (XCDB project)","pg-tests-extdb-project","PG tests (ExtDB project)","quick-import-tests-sqlite-project","Quick import tests (SQLite project)","quick-import-tests-pg","Quick import tests (PG)","enabling-ci-cd-for-draft-pr","Enabling CI-CD for draft PR","accessing-ci-cd-failure-screenshots","Accessing CI-CD failure screenshots","ul","# start PG database using docker compose"," -f .\u002Fscripts\u002Fcypress\u002Fdocker-compose-pg.yml up -d\n\n","# copy existing xcdb (v0.91.7) database to .\u002Fpackages\u002Fnocodb\u002F","cp"," .\u002Fscripts\u002Fcypress\u002Ffixtures\u002FquickTest\u002Fnoco_0_91_7.db .\u002Fpackages\u002Fnocodb\u002Fnoco.db\n\n","# run test script","\n- quickTest.js\n","2022-09-29T07:22:39.407Z")));