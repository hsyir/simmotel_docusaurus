"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[6472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(r),k=a,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||c;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<c;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const c={},l="Backup",o={unversionedId:"simotel/callcenter-docs/control-panel/backup",id:"simotel/callcenter-docs/control-panel/backup",title:"Backup",description:"\u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062a\u0647\u06cc\u0647 \u0641\u0627\u06cc\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u0648 \u0628\u0627\u0632\u06af\u0631\u062f\u0627\u0646\u06cc \u0622\u0646 \u0641\u0631\u0627\u0647\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0628\u0647 \u0628\u0631\u0631\u0633\u06cc \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0622\u0646 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645 control panel > backup.",source:"@site/docs/simotel/3- callcenter-docs/9-control-panel/1-backup.md",sourceDirName:"simotel/3- callcenter-docs/9-control-panel",slug:"/simotel/callcenter-docs/control-panel/backup",permalink:"/docs/simotel/callcenter-docs/control-panel/backup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"Docs",previous:{title:"System Logs",permalink:"/docs/simotel/callcenter-docs/maintenance/system_logs"},next:{title:"HA",permalink:"/docs/simotel/callcenter-docs/control-panel/ha"}},p={},u=[{value:"\u0628\u062e\u0634 Backup",id:"\u0628\u062e\u0634-backup",level:2},{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627\u06cc Backup",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-backup",level:3},{value:"\u0628\u062e\u0634 Restore",id:"\u0628\u062e\u0634-restore",level:2},{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627\u06cc Restore",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-restore",level:3},{value:"\u0628\u062e\u0634 Scheduled Backup Archive",id:"\u0628\u062e\u0634-scheduled-backup-archive",level:2},{value:"\u0628\u062e\u0634 Regular Backup Archive",id:"\u0628\u062e\u0634-regular-backup-archive",level:2}],i={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backup"},"Backup"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062a\u0647\u06cc\u0647 \u0641\u0627\u06cc\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u0648 \u0628\u0627\u0632\u06af\u0631\u062f\u0627\u0646\u06cc \u0622\u0646 \u0641\u0631\u0627\u0647\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0628\u0647 \u0628\u0631\u0631\u0633\u06cc \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0622\u0646 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645 ",(0,a.kt)("inlineCode",{parentName:"p"},"control panel > backup"),"."),(0,a.kt)("h2",{id:"\u0628\u062e\u0634-backup"},"\u0628\u062e\u0634 Backup"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0627\u0645\u06a9\u0627\u0646 \u062a\u0647\u06cc\u0647 \u0641\u0627\u06cc\u0644 \u0628\u06a9\u0627\u067e \u0641\u0631\u0627\u0647\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a\u060c\u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0633\u06cc\u0645\u0648\u062a\u0644 \u0642\u0627\u0628\u0644\u06cc\u062a \u0628\u06a9\u0627\u067e\u200c\u06af\u06cc\u0631\u06cc \u062f\u0631 \u0633\u0637\u0648\u062d \u0645\u062e\u062a\u0644\u0641 \u0641\u0631\u0627\u0647\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a."),(0,a.kt)("h3",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-backup"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627\u06cc Backup"),(0,a.kt)("p",null,"\u06f1. ",(0,a.kt)("strong",{parentName:"p"},"backup type"),": \u0633\u0637\u062d \u0628\u06a9\u0627\u067e \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,a.kt)("p",null,"\u06f2. ",(0,a.kt)("strong",{parentName:"p"},"backup"),": \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u0627\u06cc\u0646 \u062f\u06a9\u0645\u0647 \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0634\u0631\u0648\u0639 \u0628\u0647 \u062a\u0647\u06cc\u0647 \u0628\u06a9\u0627\u067e \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c\u0628\u0631\u0627\u06cc \u062f\u0627\u0646\u0644\u0648\u062f \u0627\u06cc\u0646 \u0628\u06a9\u0627\u067e \u0628\u0627\u06cc\u062f \u0628\u0647 \u0628\u062e\u0634 ",(0,a.kt)("inlineCode",{parentName:"p"},"Regular Backuup Archive")," \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."),(0,a.kt)("h2",{id:"\u0628\u062e\u0634-restore"},"\u0628\u062e\u0634 Restore"),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0648\u0638\u06cc\u0641\u0647 \u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0628\u06a9\u0627\u067e\u200c\u0647\u0627\u06cc \u062a\u0647\u06cc\u0647 \u0634\u062f\u0647 \u0627\u0632 \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0631\u200c\u0639\u0647\u062f\u0647 \u062f\u0627\u0631\u062f."),(0,a.kt)("h3",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-restore"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627\u06cc Restore"),(0,a.kt)("p",null,"\u06f1. ",(0,a.kt)("strong",{parentName:"p"},"Restore File"),": \u0645\u0633\u06cc\u0631 \u0641\u0627\u06cc\u0644 \u0628\u06a9\u0627\u067e\u06cc \u06a9\u0647 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f \u0628\u0627\u0632\u06af\u0631\u062f\u0627\u0646\u06cc \u06a9\u0646\u06cc\u062f."),(0,a.kt)("p",null,"\u06f2. ",(0,a.kt)("strong",{parentName:"p"},"Restore"),": \u067e\u0633 \u0627\u0632 \u0627\u0646\u062a\u062e\u0627\u0628 \u0641\u0627\u06cc\u0644 \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u0627\u06cc\u0646 \u06af\u0632\u06cc\u0646\u0647 \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06a9\u0627\u067e \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,a.kt)("h2",{id:"\u0628\u062e\u0634-scheduled-backup-archive"},"\u0628\u062e\u0634 Scheduled Backup Archive"),(0,a.kt)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u0642\u0627\u0628\u0644\u06cc\u062a\u200c\u0647\u0627\u06cc \u0633\u06cc\u0645\u0648\u062a\u0644 \u062a\u0647\u06cc\u0647 \u0641\u0627\u06cc\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u0628\u0635\u0648\u0631\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f\u060c\u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0628\u0635\u0648\u0631\u062a \u0631\u0648\u0632\u0627\u0646\u0647 \u0648 \u0647\u0641\u062a\u06af\u06cc \u0627\u0632 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0628\u06a9\u0627\u067e \u062a\u0647\u06cc\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f \u062a\u0627 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0633\u06cc\u0633\u062a\u0645 \u0628\u0647 \u0647\u0631 \u062f\u0644\u06cc\u0644\u06cc \u0628\u0627 \u0645\u0634\u06a9\u0644 \u0645\u0648\u0627\u062c\u0647 \u0634\u062f \u0627\u0645\u06a9\u0627\u0646 \u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u062d\u0627\u0644\u062a \u0642\u0628\u0644 \u0628\u0627\u0634\u062f."),(0,a.kt)("p",null,"\u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0631\u0627 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0634\u0645\u0627 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 \u0627\u06cc\u0646 \u0628\u06a9\u0627\u067e\u200c\u0647\u0627\u06cc \u062e\u0648\u062f\u06a9\u0627\u0631 \u0631\u0627 \u062f\u0631 \u062c\u0627\u06cc\u06cc \u0627\u0645\u0646 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646\u06cc\u062f\u060c\u0628\u0631\u0627\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0628\u0647 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../maintenance/settings/backup_drive/"},"\u0627\u06cc\u0646\u062c\u0627"))," \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."),(0,a.kt)("h2",{id:"\u0628\u062e\u0634-regular-backup-archive"},"\u0628\u062e\u0634 Regular Backup Archive"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0628\u06a9\u0627\u067e\u200c\u0647\u0627\u06cc \u06a9\u0647 \u0628\u0635\u0648\u0631\u062a \u062f\u0633\u062a\u06cc \u062a\u0647\u06cc\u0647 \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062f\u0647 \u0648 \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u0646\u062f."))}d.isMDXComponent=!0}}]);