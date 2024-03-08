"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3409],{22264:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var d=t(74848),r=t(28453);const n={title:"Environment variables",description:"Environment Variables for NocoDB!",hide_table_of_contents:!0,tags:["Open Source"],keywords:["NocoDB environment variables","NocoDB env variables","NocoDB envs","NocoDB env"]},i=void 0,l={id:"getting-started/self-hosted/environment-variables",title:"Environment variables",description:"Environment Variables for NocoDB!",source:"@site/docs/020.getting-started/050.self-hosted/020.environment-variables.md",sourceDirName:"020.getting-started/050.self-hosted",slug:"/getting-started/self-hosted/environment-variables",permalink:"/getting-started/self-hosted/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/020.getting-started/050.self-hosted/020.environment-variables.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:20,frontMatter:{title:"Environment variables",description:"Environment Variables for NocoDB!",hide_table_of_contents:!0,tags:["Open Source"],keywords:["NocoDB environment variables","NocoDB env variables","NocoDB envs","NocoDB env"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/getting-started/self-hosted/installation"},next:{title:"Upgrading",permalink:"/getting-started/self-hosted/upgrading"}},c={},o=[];function a(e){const s={a:"a",code:"code",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["For production use-cases, it is ",(0,d.jsx)(s.strong,{children:"recommended"})," to configure"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"NC_DB"}),","]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"NC_AUTH_JWT_SECRET"}),","]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"NC_PUBLIC_URL"}),","]}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"NC_REDIS_URL"})}),"\n"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Comments"}),(0,d.jsx)(s.th,{children:"If absent"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_DB"}),(0,d.jsxs)(s.td,{children:["See our example database URLs ",(0,d.jsx)(s.a,{href:"https://github.com/nocodb/nocodb#docker",children:"here"}),"."]}),(0,d.jsxs)(s.td,{children:["A local SQLite will be created in root folder if ",(0,d.jsx)(s.code,{children:"NC_DB"})," is not provided"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_DB_JSON"}),(0,d.jsxs)(s.td,{children:["Can be used instead of ",(0,d.jsx)(s.code,{children:"NC_DB"})," and value should be valid knex connection JSON"]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_DB_JSON_FILE"}),(0,d.jsxs)(s.td,{children:["Can be used instead of ",(0,d.jsx)(s.code,{children:"NC_DB"})," and value should be a valid path to knex connection JSON"]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"DATABASE_URL"}),(0,d.jsxs)(s.td,{children:["Can be used instead of ",(0,d.jsx)(s.code,{children:"NC_DB"})," and value should be in JDBC URL format"]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"DATABASE_URL_FILE"}),(0,d.jsxs)(s.td,{children:["Can be used instead of ",(0,d.jsx)(s.code,{children:"DATABASE_URL"})," and value should be a valid path to file containing JDBC URL format."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_AUTH_JWT_SECRET"}),(0,d.jsx)(s.td,{children:"JWT secret used for auth and storing other secrets"}),(0,d.jsx)(s.td,{children:"A random secret will be generated"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"PORT"}),(0,d.jsx)(s.td,{children:"For setting app running port"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"8080"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"DB_QUERY_LIMIT_DEFAULT"}),(0,d.jsx)(s.td,{children:"Pagination limit"}),(0,d.jsx)(s.td,{children:"25"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"DB_QUERY_LIMIT_GROUP_BY_GROUP"}),(0,d.jsx)(s.td,{children:"Group per page limit"}),(0,d.jsx)(s.td,{children:"10"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"DB_QUERY_LIMIT_GROUP_BY_RECORD"}),(0,d.jsx)(s.td,{children:"Record per group  limit"}),(0,d.jsx)(s.td,{children:"10"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"DB_QUERY_LIMIT_MAX"}),(0,d.jsx)(s.td,{children:"Maximum allowed pagination limit"}),(0,d.jsx)(s.td,{children:"1000"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"DB_QUERY_LIMIT_MIN"}),(0,d.jsx)(s.td,{children:"Minimum allowed pagination limit"}),(0,d.jsx)(s.td,{children:"1"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_TOOL_DIR"}),(0,d.jsx)(s.td,{children:"App directory to keep metadata and app related files"}),(0,d.jsxs)(s.td,{children:["Defaults to current working directory. In docker maps to ",(0,d.jsx)(s.code,{children:"/usr/app/data/"})," for mounting volume."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_PUBLIC_URL"}),(0,d.jsx)(s.td,{children:"Used for sending Email invitations"}),(0,d.jsx)(s.td,{children:"Best guess from http request params"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_JWT_EXPIRES_IN"}),(0,d.jsx)(s.td,{children:"JWT token expiry time"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"10h"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_CONNECT_TO_EXTERNAL_DB_DISABLED"}),(0,d.jsx)(s.td,{children:"Disable Project creation with external database"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_INVITE_ONLY_SIGNUP"}),(0,d.jsxs)(s.td,{children:["Removed since version 0.99.0 and now it's recommended to use ",(0,d.jsx)(s.a,{href:"/account-settings/oss-specific-details#enable--disable-signup",children:"super admin settings menu"}),".   Allow users to signup only via invite URL, value should be any non-empty string."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NUXT_PUBLIC_NC_BACKEND_URL"}),(0,d.jsx)(s.td,{children:"Custom Backend URL"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"http://localhost:8080"})," will be used"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_REQUEST_BODY_SIZE"}),(0,d.jsxs)(s.td,{children:["Request body size ",(0,d.jsx)(s.a,{href:"https://expressjs.com/en/resources/middleware/body-parser.html#limit",children:"limit"})]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"1048576"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_EXPORT_MAX_TIMEOUT"}),(0,d.jsx)(s.td,{children:"After NC_EXPORT_MAX_TIMEOUT, CSV gets downloaded in batches"}),(0,d.jsx)(s.td,{children:"Default value 5000(in millisecond) will be used"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_DISABLE_TELE"}),(0,d.jsx)(s.td,{children:"Disable telemetry"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_DASHBOARD_URL"}),(0,d.jsx)(s.td,{children:"Custom dashboard URL path"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"/dashboard"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_GOOGLE_CLIENT_ID"}),(0,d.jsx)(s.td,{children:"Google client ID to enable Google authentication"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_GOOGLE_CLIENT_SECRET"}),(0,d.jsx)(s.td,{children:"Google client secret to enable Google authentication"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_MIGRATIONS_DISABLED"}),(0,d.jsx)(s.td,{children:"Disable NocoDB migration"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_MIN"}),(0,d.jsx)(s.td,{children:"If set to any non-empty string the default splash screen(initial welcome animation) and matrix screensaver will disable"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SENTRY_DSN"}),(0,d.jsx)(s.td,{children:"For Sentry monitoring"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_REDIS_URL"}),(0,d.jsxs)(s.td,{children:["Custom Redis URL. Example: ",(0,d.jsx)(s.code,{children:"redis://:authpassword@127.0.0.1:6380/4"})]}),(0,d.jsx)(s.td,{children:"Meta data will be stored in memory"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_DISABLE_ERR_REPORT"}),(0,d.jsx)(s.td,{children:"Disable error reporting"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_DISABLE_CACHE"}),(0,d.jsxs)(s.td,{children:["To be used only while debugging. On setting this to ",(0,d.jsx)(s.code,{children:"true"})," - meta data be fetched from db instead of redis/cache."]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"false"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"AWS_ACCESS_KEY_ID"}),(0,d.jsx)(s.td,{children:"For Litestream - S3 access key id"}),(0,d.jsxs)(s.td,{children:["If Litestream is configured and ",(0,d.jsx)(s.code,{children:"NC_DB"})," is not present. SQLite gets backed up to S3"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"AWS_SECRET_ACCESS_KEY"}),(0,d.jsx)(s.td,{children:"For Litestream - S3 secret access key"}),(0,d.jsxs)(s.td,{children:["If Litestream is configured and ",(0,d.jsx)(s.code,{children:"NC_DB"})," is not present. SQLite gets backed up to S3"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"AWS_BUCKET"}),(0,d.jsx)(s.td,{children:"For Litestream - S3 bucket"}),(0,d.jsxs)(s.td,{children:["If Litestream is configured and ",(0,d.jsx)(s.code,{children:"NC_DB"})," is not present. SQLite gets backed up to S3"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"AWS_BUCKET_PATH"}),(0,d.jsx)(s.td,{children:"For Litestream - S3 bucket path (like folder within S3 bucket)"}),(0,d.jsxs)(s.td,{children:["If Litestream is configured and ",(0,d.jsx)(s.code,{children:"NC_DB"})," is not present. SQLite gets backed up to S3"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SMTP_FROM"}),(0,d.jsx)(s.td,{children:"For SMTP plugin - Email sender address"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SMTP_HOST"}),(0,d.jsx)(s.td,{children:"For SMTP plugin - SMTP host value"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SMTP_PORT"}),(0,d.jsx)(s.td,{children:"For SMTP plugin - SMTP port value"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SMTP_USERNAME"}),(0,d.jsx)(s.td,{children:"For SMTP plugin (Optional) - SMTP username value for authentication"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SMTP_PASSWORD"}),(0,d.jsx)(s.td,{children:"For SMTP plugin (Optional) - SMTP password value for authentication"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SMTP_SECURE"}),(0,d.jsxs)(s.td,{children:["For SMTP plugin (Optional) - To enable secure set value as ",(0,d.jsx)(s.code,{children:"true"})," any other value treated as false"]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SMTP_IGNORE_TLS"}),(0,d.jsxs)(s.td,{children:["For SMTP plugin (Optional) - To ignore tls set value as ",(0,d.jsx)(s.code,{children:"true"})," any other value treated as false. For more info visit ",(0,d.jsx)(s.a,{href:"https://nodemailer.com/smtp/",children:"https://nodemailer.com/smtp/"})]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_S3_BUCKET_NAME"}),(0,d.jsx)(s.td,{children:"For S3 storage plugin - AWS S3 bucket name"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_S3_REGION"}),(0,d.jsx)(s.td,{children:"For S3 storage plugin - AWS S3 region"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_S3_ACCESS_KEY"}),(0,d.jsx)(s.td,{children:"For S3 storage plugin - AWS access key credential for accessing resource"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_S3_ACCESS_SECRET"}),(0,d.jsx)(s.td,{children:"For S3 storage plugin - AWS access secret credential for accessing resource"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_ADMIN_EMAIL"}),(0,d.jsx)(s.td,{children:"For updating/creating super admin with provided email and password"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_ATTACHMENT_FIELD_SIZE"}),(0,d.jsx)(s.td,{children:"For setting the attachment field size(in Bytes)"}),(0,d.jsx)(s.td,{children:"Defaults to 20MB"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_ADMIN_PASSWORD"}),(0,d.jsx)(s.td,{children:"For updating/creating super admin with provided email and password. Your password should have at least 8 letters with one uppercase, one number and one special letter(Allowed special chars $&+,:;=?@#|'.^*()%!_-\" )"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NODE_OPTIONS"}),(0,d.jsxs)(s.td,{children:["For passing Node.js ",(0,d.jsx)(s.a,{href:"https://nodejs.org/api/cli.html#node_optionsoptions",children:"options"})," to instance"]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_MINIMAL_DBS"}),(0,d.jsxs)(s.td,{children:["Create a new SQLite file for each project. All the db files are stored in ",(0,d.jsx)(s.code,{children:"nc_minimal_dbs"})," folder in current working directory. (This option restricts project creation on external sources)"]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_DISABLE_AUDIT"}),(0,d.jsx)(s.td,{children:"Disable Audit Log"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"false"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_AUTOMATION_LOG_LEVEL"}),(0,d.jsxs)(s.td,{children:["Possible Values: ",(0,d.jsx)(s.code,{children:"OFF"}),", ",(0,d.jsx)(s.code,{children:"ERROR"}),", ",(0,d.jsx)(s.code,{children:"ALL"}),". See ",(0,d.jsx)(s.a,{href:"/automation/webhook/create-webhook#call-log",children:"Webhooks"})," for details."]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"OFF"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SECURE_ATTACHMENTS"}),(0,d.jsxs)(s.td,{children:["Allow accessing attachments only through presigned urls. To enable set value as ",(0,d.jsx)(s.code,{children:"true"})," any other value treated as false. (\u26a0 this will make existing links inaccessible \u26a0)"]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"false"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_ATTACHMENT_EXPIRE_SECONDS"}),(0,d.jsx)(s.td,{children:"How many seconds before expiring presigned attachment urls. (Attachments will expire in at least set seconds and at most 10mins after set time)"}),(0,d.jsx)(s.td,{children:"7200 (2 hours)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_ALLOW_LOCAL_HOOKS"}),(0,d.jsxs)(s.td,{children:["To enable set value as ",(0,d.jsx)(s.code,{children:"true"})," any other value treated as false. (\u26a0 this will allow webhooks to call local links which can raise security issues \u26a0)"]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"false"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"NC_SANITIZE_COLUMN_NAME"}),(0,d.jsxs)(s.td,{children:["Sanitize the column name during column creation. To enable set value as ",(0,d.jsx)(s.code,{children:"true"})," any other value treated as false."]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"true"})})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var d=t(96540);const r={},n=d.createContext(r);function i(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);