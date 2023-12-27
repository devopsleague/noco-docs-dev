"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9069],{54493:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var a=o(85893),d=o(11151);const c={title:"Upgrading",description:"Upgrading NocoDB : Docker, Node and Homebrew!",tags:["Open Source"],keywords:["NocoDB upgrade","upgrade NocoDB","upgrade nocodb"]},t=void 0,r={id:"getting-started/self-hosted/upgrading",title:"Upgrading",description:"Upgrading NocoDB : Docker, Node and Homebrew!",source:"@site/docs/020.getting-started/050.self-hosted/030.upgrading.md",sourceDirName:"020.getting-started/050.self-hosted",slug:"/getting-started/self-hosted/upgrading",permalink:"/getting-started/self-hosted/upgrading",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/020.getting-started/050.self-hosted/030.upgrading.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:30,frontMatter:{title:"Upgrading",description:"Upgrading NocoDB : Docker, Node and Homebrew!",tags:["Open Source"],keywords:["NocoDB upgrade","upgrade NocoDB","upgrade nocodb"]},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/getting-started/self-hosted/environment-variables"},next:{title:"Workspaces \u2601",permalink:"/category/workspaces-"}},s={},l=[{value:"Docker",id:"docker",level:2},{value:"Find, Stop &amp; Delete NocoDB Docker Container",id:"find-stop--delete-nocodb-docker-container",level:3},{value:"Find &amp; Remove NocoDB Docker Image",id:"find--remove-nocodb-docker-image",level:3},{value:"Pull the latest NocoDB image with same environment variables",id:"pull-the-latest-nocodb-image-with-same-environment-variables",level:3},{value:"Example: Docker Upgrade",id:"example-docker-upgrade",level:3},{value:"Node",id:"node",level:2},{value:"Uninstall NocoDB package",id:"uninstall-nocodb-package",level:4},{value:"Install NocoDB package",id:"install-nocodb-package",level:4},{value:"Homebrew",id:"homebrew",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["By default, if ",(0,a.jsx)(n.code,{children:"NC_DB"})," is not specified upon ",(0,a.jsx)(n.a,{href:"/getting-started/self-hosted/installation",children:"installation"}),", then SQLite will be used to store metadata. We suggest users to separate the metadata and user data in different databases as pictured in our ",(0,a.jsx)(n.a,{href:"/engineering/architecture",children:"architecture"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,a.jsx)(n.h3,{id:"find-stop--delete-nocodb-docker-container",children:"Find, Stop & Delete NocoDB Docker Container"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# find NocoDB container ID\ndocker ps\n# stop NocoDB container\ndocker stop <YOUR_CONTAINER_ID>\n# delete NocoDB container\ndocker rm <YOUR_CONTAINER_ID>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note: Deleting your docker container without setting ",(0,a.jsx)(n.code,{children:"NC_DB"})," or mounting to a persistent volume for a default SQLite database will result in losing your data. See examples below."]}),"\n",(0,a.jsx)(n.h3,{id:"find--remove-nocodb-docker-image",children:"Find & Remove NocoDB Docker Image"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# find NocoDB image\ndocker images\n# delete NocoDB image\ndocker rmi <YOUR_IMAGE_ID>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"pull-the-latest-nocodb-image-with-same-environment-variables",children:"Pull the latest NocoDB image with same environment variables"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run -d -p 8080:8080 \\\n    -e NC_DB="<YOUR_NC_DB_URL>" \\\n    -e NC_AUTH_JWT_SECRET="<YOUR_NC_AUTH_JWT_SECRET_IF_GIVEN>" \\\n    nocodb/nocodb:latest\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Updating NocoDB docker container is similar to updating ",(0,a.jsx)(n.a,{href:"https://www.whitesourcesoftware.com/free-developer-tools/blog/update-docker-images/",children:"any other docker containers"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"example-docker-upgrade",children:"Example: Docker Upgrade"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Previous docker run\n#\nterminal % docker run -d --name myNocoDB \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\n-e NC_DB="pg://host.docker.internal:5432?u=postgres&p=password&d=d1" \\\n-e NC_AUTH_JWT_SECRET="569a1821-0a93-45e8-87ab-eb857f20a010" \\\nnocodb/nocodb:0.111.0\nUnable to find image \'nocodb/nocodb:0.111.0\' locally\n0.111.0: Pulling from nocodb/nocodb\nad3fa0ea069c: Pull complete \ne43b9156e769: Pull complete \nc1bee0da1504: Pull complete \nadf78ab024d9: Pull complete \ncd8000d2c16a: Pull complete \nDigest: sha256:93b6e1ba2c0b90a26b205f9c7d44053aa6d8fa037eff9eb4155ca017f6c9bed4\nStatus: Downloaded newer image for nocodb/nocodb:0.111.0\nafdc8edd1005c93e1df8f90d02e46430ea7b5c5610a2bf9ba105238d6c4d927b\n\n\n# Find, stop and delete NocoDB docker container\n#\nterminal % docker ps\nCONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS                 PORTS                    NAMES\nafdc8edd1005   nocodb/nocodb:0.111.0   "/usr/bin/dumb-init \u2026"   18 seconds ago   Up 18 seconds          0.0.0.0:8080->8080/tcp   myNocoDB\n0202041b3607   postgres:14.7           "docker-entrypoint.s\u2026"   2 days ago       Up 8 hours (healthy)   0.0.0.0:5432->5432/tcp   scripts_pg147_1\n\nterminal % docker stop afdc8edd1005\nafdc8edd1005\n\nterminal % docker rm afdc8edd1005\nafdc8edd1005\n\n\n# Find and remove NocoDB docker image\n#\nterminal % docker images\nREPOSITORY      TAG       IMAGE ID       CREATED        SIZE\nnocodb/nocodb   0.111.0   34609411e87c   5 weeks ago    132MB\nmysql           8.0       6a0560a40914   7 weeks ago    599MB\npostgres        14.7      2075a95c7b3b   4 months ago   358MB\n\nterminal % docker rmi 34609411e87c\nUntagged: nocodb/nocodb:0.111.0\nUntagged: nocodb/nocodb@sha256:93b6e1ba2c0b90a26b205f9c7d44053aa6d8fa037eff9eb4155ca017f6c9bed4\nDeleted: sha256:3bfxxxx38e682742cbxxxx535b3503af45e931fb9bd15f46eca7d33cf4c54d72\nDeleted: sha256:952152b5da42ae057c6688a04xxxx72e1a2f91825956f5c7e35f91d5b285d4d8\nDeleted: sha256:3155197577xxxx673675ed1bce761714a24d7803f70a905740f7d4c248cxxxxx\n\n\n# Pull & run the latest NocoDB image with same environment variables as before\n#\nterminal % docker run -d --name myNocoDB \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\n-e NC_DB="pg://host.docker.internal:5432?u=postgres&p=password&d=d1" \\\n-e NC_AUTH_JWT_SECRET="569a1821-0a93-45e8-87ab-eb857f20a010" \\\nnocodb/nocodb:latest\nUnable to find image \'nocodb/nocodb:latest\' locally\nlatest: Pulling from nocodb/nocodb\nad3fa0ea069c: Pull complete \ne43b9156e769: Pull complete \nc1bee0da1504: Pull complete \nadf78ab024d9: Pull complete \n28ce4fc94e48: Pull complete \nDigest: sha256:5c6df5ff0eb1278e1dbfe684af630a743ca73dfec8c30cab3bae9c1d0d640287\nStatus: Downloaded newer image for nocodb/nocodb:latest\nae793a04b75f2f3ee78abbaef09891396a884ec83320151a266326195649a058\n\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"node",children:"Node"}),"\n",(0,a.jsx)(n.p,{children:"Updating docker container is similar to updating a npm package."}),"\n",(0,a.jsx)(n.p,{children:"From your root folder"}),"\n",(0,a.jsx)(n.h4,{id:"uninstall-nocodb-package",children:"Uninstall NocoDB package"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm uninstall nocodb\n"})}),"\n",(0,a.jsx)(n.h4,{id:"install-nocodb-package",children:"Install NocoDB package"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save nocodb\n"})}),"\n",(0,a.jsx)(n.h2,{id:"homebrew",children:"Homebrew"}),"\n",(0,a.jsx)(n.p,{children:"Run following commands to upgrade Homebrew Nocodb version."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Update the local homebrew formulas\nbrew update\n# Upgrade nocodb package\nbrew upgrade nocodb\n"})})]})}function p(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>t});var a=o(67294);const d={},c=a.createContext(d);function t(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);