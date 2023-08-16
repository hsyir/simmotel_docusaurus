"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[39266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},l="Mail Server",o={unversionedId:"simotel/callcenter-docs/maintenance/settings/mail_server",id:"simotel/callcenter-docs/maintenance/settings/mail_server",title:"Mail Server",description:"\u0628\u0631\u0627\u06cc \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0642\u0627\u0628\u0644\u06cc\u062a \u0627\u0631\u0633\u0627\u0644 \u0627\u06cc\u0645\u06cc\u0644 \u062f\u0631 \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0633\u06cc\u0645\u0648\u062a\u0644 \u062c\u0647\u062a \u0627\u0631\u0633\u0627\u0644 \u0648\u06cc\u0633 \u0645\u06cc\u0644\u200c\u0647\u0627 \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u0631\u0648\u062a\u06a9\u0644 SMTP \u0628\u0647 \u0633\u0645\u062a \u0633\u0631\u0648\u0631 \u0627\u06cc\u0645\u06cc\u0644 \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u0646\u062f(smtp \u067e\u0631\u0648\u062a\u06a9\u0644\u06cc \u06a9\u0647 \u0633\u0631\u0648\u0631\u200c\u0647\u0627\u06cc \u0627\u06cc\u0645\u06cc\u0644 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0646 \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0631\u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f)\u060c\u0633\u06cc\u0645\u0648\u062a\u0644 \u0628\u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u0641\u0631\u0636 \u0627\u0632 \u0627\u06cc\u0646 \u067e\u0631\u0648\u062a\u06a9\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f.",source:"@site/docs/simotel/3- callcenter-docs/8-maintenance/6-settings/6-mail_server.md",sourceDirName:"simotel/3- callcenter-docs/8-maintenance/6-settings",slug:"/simotel/callcenter-docs/maintenance/settings/mail_server",permalink:"/docs/simotel/callcenter-docs/maintenance/settings/mail_server",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"Docs",previous:{title:"BackUp Drive",permalink:"/docs/simotel/callcenter-docs/maintenance/settings/backup_drive"},next:{title:"More Settings",permalink:"/docs/simotel/callcenter-docs/maintenance/settings/more_settings"}},s={},c=[{value:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u06cc\u0644\u200c\u0633\u0631\u0648\u0631 \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644",id:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a-\u0645\u06cc\u0644\u0633\u0631\u0648\u0631-\u062f\u0631-\u0633\u06cc\u0645\u0648\u062a\u0644",level:2},{value:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 Gmail \u062f\u0631 \u062d\u0633\u0627\u0628 \u06af\u0648\u06af\u0644",id:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a-\u0645\u0631\u0628\u0648\u0637-\u0628\u0647-gmail-\u062f\u0631-\u062d\u0633\u0627\u0628-\u06af\u0648\u06af\u0644",level:2},{value:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u0631\u0628\u0648\u0637 Voicemail \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644",id:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a-\u0645\u0631\u0628\u0648\u0637-voicemail-\u062f\u0631-\u0633\u06cc\u0645\u0648\u062a\u0644",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mail-server"},"Mail Server"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0642\u0627\u0628\u0644\u06cc\u062a \u0627\u0631\u0633\u0627\u0644 \u0627\u06cc\u0645\u06cc\u0644 \u062f\u0631 \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0633\u06cc\u0645\u0648\u062a\u0644 \u062c\u0647\u062a \u0627\u0631\u0633\u0627\u0644 \u0648\u06cc\u0633 \u0645\u06cc\u0644\u200c\u0647\u0627 \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u0631\u0648\u062a\u06a9\u0644 SMTP \u0628\u0647 \u0633\u0645\u062a \u0633\u0631\u0648\u0631 \u0627\u06cc\u0645\u06cc\u0644 \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u0646\u062f(smtp \u067e\u0631\u0648\u062a\u06a9\u0644\u06cc \u06a9\u0647 \u0633\u0631\u0648\u0631\u200c\u0647\u0627\u06cc \u0627\u06cc\u0645\u06cc\u0644 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0646 \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0631\u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f)\u060c\u0633\u06cc\u0645\u0648\u062a\u0644 \u0628\u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u0641\u0631\u0636 \u0627\u0632 \u0627\u06cc\u0646 \u067e\u0631\u0648\u062a\u06a9\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,a.kt)("admonition",{title:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u062f\u0631 \u0627\u06cc\u0646 \u0622\u0645\u0648\u0632\u0634 \u0627\u0632 \u0633\u0631\u0648\u06cc\u0633 \u0627\u06cc\u0645\u06cc\u0644 \u0634\u0631\u06a9\u062a \u06af\u0648\u06af\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u0648 \u0622\u0645\u0648\u0632\u0634 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u062f\u0631 \u0633\u0631\u0648\u06cc\u0633 Gmail \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.")),(0,a.kt)("h2",{id:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a-\u0645\u06cc\u0644\u0633\u0631\u0648\u0631-\u062f\u0631-\u0633\u06cc\u0645\u0648\u062a\u0644"},"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u06cc\u0644\u200c\u0633\u0631\u0648\u0631 \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644"),(0,a.kt)("p",null,"\u06f1. \u0627\u0628\u062a\u062f\u0627 \u0648\u0627\u0631\u062f \u0628\u062e\u0634 ",(0,a.kt)("inlineCode",{parentName:"p"},"maintenance > setting > mail server")," \u0645\u06cc\u200c\u0634\u0648\u06cc\u0645."),(0,a.kt)("p",null,"\u06f2. \u067e\u0633 \u0627\u0632 \u0622\u0646 \u0645\u0634\u062e\u0635\u0627\u062a \u0628\u0627\u06cc\u062f \u0645\u0634\u0627\u0628\u0647 \u0639\u06a9\u0633 \u067e\u0627\u06cc\u06cc\u0646 \u067e\u0631 \u0634\u0648\u062f \u062a\u0627 \u0633\u0631\u0648\u0631 \u0627\u06cc\u0645\u06cc\u0644 \u0645\u062f \u0646\u0638\u0631 \u0648 \u062d\u0633\u0627\u0628\u06cc \u06a9\u0647 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0631\u0633\u0627\u0644 \u0627\u0632 \u0622\u0646 \u0631\u0627 \u062f\u0627\u0631\u06cc\u0645 \u0645\u0634\u062e\u0635 \u0634\u0648\u062f(\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u0628\u0627 \u06a9\u06cc\u0641\u06cc\u062a \u0628\u0647\u062a\u0631 Sidebar \u0631\u0627 \u0628\u0628\u0646\u062f\u06cc\u062f)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1",src:n(71072).Z,width:"1053",height:"499"})),(0,a.kt)("h2",{id:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a-\u0645\u0631\u0628\u0648\u0637-\u0628\u0647-gmail-\u062f\u0631-\u062d\u0633\u0627\u0628-\u06af\u0648\u06af\u0644"},"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 Gmail \u062f\u0631 \u062d\u0633\u0627\u0628 \u06af\u0648\u06af\u0644"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u0628\u062a\u062f\u0627 \u0648\u0627\u0631\u062f \u062d\u0633\u0627\u0628 \u06af\u0648\u06af\u0644 \u062e\u0648\u062f \u0634\u0648\u06cc\u062f \u067e\u0633 \u0627\u0632 \u0622\u0646 \u062f\u0631 \u0628\u062e\u0634 \u0627\u0645\u0646\u06cc\u062a \u0646\u06cc\u0627\u0632 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u0627\u062d\u0631\u0627\u0632\u0647\u0648\u06cc\u062a \u062f\u0648 \u0645\u0631\u062d\u0644\u0647\u200c\u0627\u06cc")," \u063a\u06cc\u0631 \u0641\u0639\u0627\u0644 \u0648 \u0642\u0627\u0628\u0644\u06cc\u062a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0647\u0627\u06cc\u06cc \u0628\u0627 \u0627\u0645\u0646\u06cc\u062a \u06a9\u0645\u062a\u0631")," \u0641\u0639\u0627\u0644 \u0628\u0627\u0634\u062f."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"2",src:n(22434).Z,width:"1161",height:"354"})),(0,a.kt)("h2",{id:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a-\u0645\u0631\u0628\u0648\u0637-voicemail-\u062f\u0631-\u0633\u06cc\u0645\u0648\u062a\u0644"},"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u0631\u0628\u0648\u0637 Voicemail \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644"),(0,a.kt)("p",null,"\u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u0628\u0627 \u0627\u0641\u0632\u0648\u062f\u0646 Voicemail \u0628\u0647 \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0633\u06cc\u0645\u0648\u062a\u0644 \u0648 \u0627\u0641\u0632\u0648\u062f\u0646 \u0622\u062f\u0631\u0633 \u0627\u06cc\u0645\u06cc\u0644 \u0648 \u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 \u0622\u0646 \u060c \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0635\u0646\u062f\u0648\u0642 \u0635\u0648\u062a\u06cc \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0628\u0647 \u0627\u06cc\u0645\u06cc\u0644 \u0645\u062f \u0646\u0638\u0631 \u0645\u0627 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0633\u0631\u0648\u0631 \u0627\u06cc\u0645\u06cc\u0644 \u06a9\u0647 \u062f\u0631 \u0628\u062e\u0634 \u0627\u0648\u0644 \u062a\u0639\u06cc\u06cc\u0646 \u0634\u062f\u0647 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"3",src:n(71600).Z,width:"543",height:"624"})),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u0646\u062f\u0647 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u0647 \u0627\u06cc\u0645\u06cc\u0644 vahidsadrnia \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0646\u0645\u0648\u0646\u0647 \u0627\u0632 \u067e\u06cc\u0627\u0645 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc \u062f\u0631 Inbox"),"\n",(0,a.kt)("img",{alt:"4",src:n(23345).Z,width:"1302",height:"202"})),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0628\u0631\u0631\u0633\u06cc \u0648\u0636\u0639\u06cc\u062a \u0627\u0631\u0633\u0627\u0644 \u0627\u06cc\u0645\u06cc\u0644 \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u06af\u0632\u0627\u0631\u0634\u0627\u062a simotel.log \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u06af\u06cc\u0631\u062f."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"5",src:n(13546).Z,width:"1350",height:"722"})),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u062f\u0631 \u0645\u0648\u0631\u062f \u0633\u0631\u0648\u06cc\u0633 \u06af\u0648\u06af\u0644 \u0628\u0647 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.hostinger.com/tutorials/how-to-use-free-google-smtp-server"},"\u0627\u06cc\u0646\u062c\u0627"))," \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."))}d.isMDXComponent=!0},71072:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1-119365bc00a13c3fe7af46663f738a6c.jpg"},22434:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2-4c573781b54b5b2311f72c3790ea378c.jpg"},71600:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3-55029783d9f4bd6b1526e057839a67bd.jpg"},23345:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/4-c4f930ddc8dcaba301d9b46d9fe4a699.jpg"},13546:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/5-ea99856c1dbafffd6fa92af4bbdf5f4d.jpg"}}]);