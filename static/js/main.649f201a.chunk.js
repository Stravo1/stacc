(this.webpackJsonpstacc_test=this.webpackJsonpstacc_test||[]).push([[0],{292:function(e,t,n){},480:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(51),r=n.n(c),i=(n(292),n(19)),l=n(11),o=n.n(l),d=n(22),u=n(9),j=n(509),b=n(508),h=n(507),p=n(506),g=n(505),m=n(504),O=n(501),f=n(494),y=n(56),x=n(141),k=n(111),v=n(32),w=n(4);var S=function(e){var t=Object(s.useState)("daily"),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(u.f)();function l(t){e.setOpen(t)}return Object(s.useEffect)((function(){"/"===r.pathname||"/stacc"===r.pathname?c("daily"):c(r.pathname.slice(1))})),Object(w.jsx)(O.a,{size:"xs",placement:"left",open:e.open,onClose:function(){return l(!1)},dialogClassName:"sideNav",children:Object(w.jsx)(O.a.Body,{style:{padding:"0.5rem"},children:Object(w.jsx)("div",{className:"drawerBodyCustom",children:Object(w.jsxs)(f.a,{reversed:!0,activeKey:a,onSelect:function(e){c(e),l(!1)},style:{color:"red"},children:[Object(w.jsx)("div",{className:"sideNavList",children:" LISTS "}),Object(w.jsxs)("div",{className:"list",children:[Object(w.jsxs)(f.a.Item,{eventKey:"daily",as:y.b,to:"/daily",children:[Object(w.jsx)(x.a,{}),Object(w.jsx)("div",{className:"linkNavItem",children:"Daily"})]}),Object(w.jsxs)(f.a.Item,{eventKey:"weekly",as:y.b,to:"/weekly",children:[Object(w.jsx)(k.a,{}),Object(w.jsx)("div",{className:"linkNavItem",children:"Weekly"})]}),Object(w.jsxs)(f.a.Item,{eventKey:"monthly",as:y.b,to:"/monthly",children:[Object(w.jsx)(k.c,{}),Object(w.jsx)("div",{className:"linkNavItem",children:"Monthly"})]})]}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"sideNavOthers",children:"OTHERS "}),Object(w.jsxs)("div",{className:"others",children:[Object(w.jsxs)(f.a.Item,{eventKey:"settings",as:y.b,to:"/settings",children:[Object(w.jsx)(v.i,{}),Object(w.jsx)("div",{className:"linkNavItem",children:"Settings"})]}),Object(w.jsxs)(f.a.Item,{eventKey:"about",as:y.b,to:"/about",children:[Object(w.jsx)(v.g,{}),Object(w.jsx)("div",{className:"linkNavItem",children:"About"})]})]})]})})})})},I=n(40),T=function(e,t,n){var s="%20",a=s+"and"+s,c="https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&fields=files(id%2C%20name%2C%20size%2C%20createdTime%2C%20mimeType)&q="+(null!=e?"name"+s+"contains"+s+"'"+e+"'":"");return c+=null!=e&&(null!=n||null!=t)?a:"",c+=null!=n?"'"+n+"'"+s+"in"+s+"parents":"",c+=null!=t&&(null!=e||null!=n)?a:"",c+=null!=t?"mimeType"+"%3D"+"'"+t+"'":""},N=function(e){var t=new Headers;return t.append("Authorization","Bearer "+e),console.log(t),t},C=function(){var e=Object(d.a)(o.a.mark((function e(t,n,s){var a,c,r,i,l,d,u,j,b,h,p,g=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g.length>3&&void 0!==g[3]?g[3]:null,c=g.length>4&&void 0!==g[4]?g[4]:"appDataFolder",l=new Promise((function(e,t){r=e})),(d=new XMLHttpRequest).open(null==a?"POST":"PATCH",null==a?"https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart":"https://www.googleapis.com/upload/drive/v3/files/"+a+"?uploadType=multipart"),d.setRequestHeader("Authorization","Bearer "+t),d.onload=function(){200==this.status&&(i=JSON.parse(this.response)),r()},u=s,b={name:n,mimeType:j="application/json",parents:[c]},null!=a&&(delete b.parents,delete b.name),h=new Blob([u],{type:j}),(p=new FormData).append("metadata",new Blob([JSON.stringify(b)],{type:"application/json"})),p.append("file",h),d.send(p),e.next=19,l;case 19:return e.abrupt("return",i);case 20:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var s,a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"raw",c=new Promise((function(e,t){s=e})),(r=new XMLHttpRequest).open("GET","https://www.googleapis.com/drive/v3/files/"+n+"?alt=media",!0),r.setRequestHeader("Authorization","Bearer "+t),r.onload=function(){200===this.status&&(a=this.response,s())},r.send(),e.next=9,c;case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,s,a,c,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(T(null,"application/json","appDataFolder"),{method:"GET",headers:N(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:if(c=e.sent,(r=c.files.filter((function(e){return"installed.json"==e.name}))).length){e.next=24;break}return e.next=10,C(t,"installed.json",JSON.stringify({installed:JSON.stringify((new Date).getTime())}));case 10:return r=e.sent,e.next=13,C(t,"daily",localStorage.getItem("daily"));case 13:return n=e.sent,e.next=16,C(t,"weekly",localStorage.getItem("weekly"));case 16:return s=e.sent,e.next=19,C(t,"monthly",localStorage.getItem("monthly"));case 19:return a=e.sent,alert("New Install Complete"),e.abrupt("return",{daily:n.id,weekly:s.id,monthly:a.id});case 24:return console.log("already installed",r),e.next=27,A(t,c.files[0].id);case 27:return i=e.sent,console.log(JSON.parse(i)),e.abrupt("return",{daily:c.files.filter((function(e){return"daily"==e.name}))[0].id,weekly:c.files.filter((function(e){return"weekly"==e.name}))[0].id,monthly:c.files.filter((function(e){return"monthly"==e.name}))[0].id});case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=B,D=n(17),L=n(49),W=(n(438),Object(L.b)({name:"general",initialState:{loaded:0,signedIn:!1,accessToken:"",stacc:{daily:0,weekly:0,monthly:0},sync:{daily:0,weekly:0,monthly:0},id:{daily:0,weekly:0,monthly:0}},reducers:{changeLoaded:function(e,t){e.loaded=t.payload},changeSignInState:function(e,t){e.signedIn=t.payload,console.log(t.payload,"signinstate")},changeStaccLoaded:function(e,t){e.stacc[t.payload.list]=t.payload.value},changeStaccSyncStat:function(e,t){e.sync[t.payload.list]=t.payload.value},setIds:function(e,t){console.log(t.payload),e.id=t.payload},resetStacc:function(e){Object.keys(e.stacc).map((function(t){e.stacc[t]=0}))},setAccessToken:function(e,t){console.log(t.payload),e.accessToken=t.payload}}})),z=W.actions,J=z.changeLoaded,P=z.changeSignInState,R=z.changeStaccLoaded,H=z.changeStaccSyncStat,E=z.resetStacc,U=z.setAccessToken,K=z.setIds,G=W.reducer,M=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];var q=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.general.loaded})),n=Object(D.c)((function(e){return e.general.signedIn})),a=Object(D.c)((function(e){return e.general.accessToken})),c=Object(D.c)((function(e){return e.general.id}));Object(s.useEffect)((function(){if(!t){console.log;I.a.load("client:auth2",(function(){I.a.client.init({clientId:"25256502274-6b15ibif1usnm9rtbi4blennjrvrl5lm.apps.googleusercontent.com",discoveryDocs:M,scope:"https://www.googleapis.com/auth/drive.appdata"}).then(Object(d.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(I.a.auth2.getAuthInstance().isSignedIn.listen(function(){var t=Object(d.a)(o.a.mark((function t(n){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(n),e(P(n)),!n){t.next=9;break}return e(U(I.a.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token)),t.next=6,F(I.a.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token);case 6:s=t.sent,e(K(s)),e(E());case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e(P(I.a.auth2.getAuthInstance().isSignedIn.get())),console.log(n),!I.a.auth2.getAuthInstance().isSignedIn.get()){t.next=9;break}return e(U(I.a.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token)),t.next=7,F(I.a.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token);case 7:s=t.sent,e(K(s));case 9:case"end":return t.stop()}}),t)}))),(function(e){window.alert(JSON.stringify(e,null,2))}))})),e(J(1))}}));var r=Object(s.useState)(!1),l=Object(i.a)(r,2),O=l[0],f=l[1];function y(){return(y=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Please don't close the app while syncing. You'll be informed when the process is complete"),e.next=3,C(a,"daily",localStorage.getItem("daily"),c.daily);case 3:return e.next=5,C(a,"weekly",localStorage.getItem("weekly"),c.weekly);case 5:return e.next=7,C(a,"monthly",localStorage.getItem("monthly"),c.monthly);case 7:alert("Sync complete!");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(j.a,{children:[Object(w.jsx)(b.a,{style:{width:"100vw",position:"fixed",top:0,zIndex:999,background:"rgba(14, 18, 25)",paddingBottom:"1.5rem"},children:Object(w.jsx)(h.a,{fluid:!0,children:Object(w.jsxs)(p.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"},children:[Object(w.jsx)(g.a,{xs:8,sm:8,md:8,lg:8,style:{display:"flex",justifyContent:"start",paddingLeft:"1rem"},onClick:function(){return f(!0)},children:Object(w.jsx)(v.b,{fontSize:"1.5rem"})}),Object(w.jsx)(g.a,{xs:8,sm:8,md:8,lg:8,style:{display:"flex",justifyContent:"center"},children:Object(w.jsx)("h3",{style:{fontWeight:"bolder"},children:"stacc"})}),Object(w.jsx)(g.a,{xs:8,sm:8,md:8,lg:8,style:{display:"flex",justifyContent:"end",paddingRight:"1rem"},children:Object(w.jsx)(x.b,{className:"fade-in",onClick:function(){return function(){return y.apply(this,arguments)}()},style:n&&c.daily?{display:"unset"}:{display:"none"},fontSize:"1.5rem"})})]})})}),Object(w.jsx)(m.a,{style:{position:"relative",textAlign:"",top:"6.5rem",height:"80vh"},children:Object(w.jsx)(u.a,{})}),Object(w.jsx)(S,{open:O,setOpen:function(e){return f(e)}})]})})},_=n(500),V=n(495),X=n(274),Y=n(492),$=n(493),Q=n(502),Z=n(67),ee=[{label:"Basic",value:"basic",categories:"Importance"},{label:"Important",value:"important",categories:"Importance"},{label:"Urgent",value:"urgent",categories:"Importance"},{label:"Personal",value:"personal",categories:"Type"},{label:"Work",value:"work",categories:"Type"}],te=[{label:"Green",value:"green",hex:"#4ceed0",categories:"color"},{label:"Yellow",value:"yellow",hex:"#F2BF06",categories:"color"},{label:"Red",value:"red",hex:"#f4815d",categories:"color"},{label:"Blue",value:"blue",hex:"#00D5FC",categories:"color"},{label:"Violet",value:"violet",hex:"#BB99FF",categories:"color"}],ne={green:"#4ceed0",yellow:"#F2BF06",blue:"#00D5FC",red:"#f4815d",violet:"#BB99FF"},se={daily:"today's",weekly:"week's",monthly:"month's"},ae=n.p+"static/media/kitty.2e5e69a4.svg",ce=function(e){return{name:e,tasks:[{name:"Sample Task",desc:"Sample Description",progress:.5,tags:["basic"],subtasks:{"Sample Subtask 1":1,"Sample Subtask 2":0},color:"green",id:108}],time:0}},re=n(499),ie=n(510),le=n(276),oe=n(497),de=n(77),ue=n(275);var je=function(e){var t=oe.a.Paragraph,n=function(){return e.close()},s=Object(D.b)();return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(de.a,{dialogClassName:e.task.color+"Modal",full:!0,open:e.open,onClose:n,children:[Object(w.jsxs)(de.a.Body,{style:{color:"#3c3c3c"},children:[Object(w.jsxs)("div",{className:"modalDesc",children:[Object(w.jsx)("h5",{children:" Description: "}),Object(w.jsx)("div",{className:e.task.desc?"content":"noContent",children:e.task.desc?e.task.desc:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("br",{}),"Nothing here!",Object(w.jsx)(t,{color:"red",a:!0,rows:3,active:!0})]})})]}),Object(w.jsxs)("div",{className:"modalSubtasks",children:[Object(w.jsx)("h5",{children:" Subtasks: "}),Object(w.jsxs)("div",{className:Object.keys(e.task.subtasks).length?"content":"noContent",children:[Object.keys(e.task.subtasks).length?"":Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("br",{}),"Nothing here! ",Object(w.jsx)(t,{color:"red",a:!0,rows:3,active:!0})]}),Object.keys(e.task.subtasks).map((function(t){return Object(w.jsx)("div",{style:{color:"#3c3c3c",fontWeight:"bolder"},children:Object(w.jsxs)(ue.a,{checked:e.task.subtasks[t],onChange:function(a,c){console.log(a,c);var r={},i={};Object.assign(r,e.task),Object.assign(i,r.subtasks),i[t]=c,r.subtasks=i;var l=0;Object.keys(r.subtasks).map((function(e){return 1==r.subtasks[e]?l+=1:""}));var o=l/(Object.keys(r.subtasks).length?Object.keys(r.subtasks).length:1);if(1==o&&1!=e.task.progress){var d=window.confirm("Hey, you have completed all subtasks. Marks this task as complete?");r.progress=.99,d&&(r.progress=1,n()),setTimeout((function(){return s(e.edit(r))}),500)}else if(1!=o&&1==e.task.progress){d=window.confirm("Unchecking this subtask will make the task incomplete. Are you sure?");r.progress=1,d&&(r.progress=o,n(),setTimeout((function(){return s(e.edit(r))}),500))}else r.progress="calculate",s(e.edit(r))},children:[" ",t]})})}))]})]})]}),Object(w.jsx)(de.a.Footer,{children:Object(w.jsx)(Z.a,{onClick:n,appearance:"primary",children:"Ok"})})]})})};var be=function(e){var t=Object(s.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(D.b)();function l(t){var n={},s={};Object.assign(n,e.task),Object.assign(s,n.subtasks),Object.keys(s).map((function(e){return s[e]=t})),n.subtasks=s,Object.keys(s).length?n.progress="calculate":n.progress=t,r(e.edit(n))}return Object(w.jsxs)(g.a,{className:"fade-in",xs:24,sm:12,md:12,lg:8,style:{marginBottom:"1rem",borderRadius:"1rem"},children:[Object(w.jsxs)(re.a,{shaded:!0,style:{background:ne[e.task.color],height:"9rem"},children:[Object(w.jsx)("div",{className:"icons",style:{fontSize:"1.25rem",position:"absolute",right:"1rem"},onClick:function(){return e.handleOpen(e.task)},children:Object(w.jsx)(k.b,{})}),Object(w.jsx)(ie.a,{children:e.task.tags.map((function(t){return Object(w.jsxs)(le.a,{size:"md",color:e.task.color,style:{borderColor:"rgb(168, 85, 85)",borderWidth:"1.5px",color:"black",borderStyle:"solid",borderRadius:"1rem",fontWeight:"light"},onClick:function(){return c(!0)},children:[" ",Object(w.jsx)("div",{children:t[0].toUpperCase()+t.slice(1)})]})}))}),Object(w.jsx)("div",{onClick:function(){return c(!0)},style:{position:"absolute",paddingTop:"0.75rem",fontWeight:"bold",color:"#3c3c3c",fontSize:"larger"},children:e.task.name}),Object(w.jsxs)("div",{onClick:function(){return c(!0)},style:{position:"absolute",bottom:"0.75rem",width:"50vw",color:"#3c3c3c",fontSize:"small",lineHeight:"1.25rem",fontWeight:"400"},children:[Object(w.jsx)(v.h,{})," ",Object.keys(e.task.subtasks).length," subtasks.",Object(w.jsx)("br",{}),Object(w.jsx)(v.c,{})," ",(100*e.task.progress).toFixed(),"% completed"]}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"icons",style:{fontSize:"1rem",position:"absolute",right:"1.15rem",bottom:"2.5rem",display:""},onClick:function(){return e.handleDelete(e.task)},children:Object(w.jsx)(v.f,{})}),Object(w.jsx)("div",{className:"icons",style:{fontSize:"1.25rem",position:"absolute",right:"1rem",bottom:"0.5rem"},children:1==e.task.progress?Object(w.jsx)(v.e,{onClick:function(){return l(0)}}):Object(w.jsx)(v.d,{onClick:function(){return l(1)}})})]}),Object(w.jsx)(je,{edit:function(t){return e.edit(t)},task:e.task,open:a,close:function(){return c(!1)}})]})};var he=function(e){var t=Object(D.b)(),n=Object(s.useState)(!1),a=Object(i.a)(n,2),c=a[0],r=a[1],l=Object(s.useState)(""),u=Object(i.a)(l,2),j=u[0],b=u[1],h=Object(s.useState)("ongoing"),m=Object(i.a)(h,2),y=m[0],x=m[1],k=Object(s.useState)(""),S=Object(i.a)(k,2),I=S[0],T=S[1],N=Object(s.useState)(["basic","personal"]),B=Object(i.a)(N,2),F=B[0],L=B[1],W=Object(s.useState)({}),z=Object(i.a)(W,2),J=z[0],P=z[1],E=Object(s.useState)(""),U=Object(i.a)(E,2),K=U[0],G=U[1],M=Object(s.useState)(te[0].value),q=Object(i.a)(M,2),ne=q[0],re=q[1],ie=Object(s.useState)(0),le=Object(i.a)(ie,2),oe=le[0],de=le[1],ue=Object(D.c)((function(t){return t[e.title].tasks})),je=ue.filter((function(e){return 1!=e.progress})),he=ue.filter((function(e){return 1==e.progress})),pe=Object(D.c)((function(t){return t[e.title].time})),ge=Object(D.c)((function(t){return t.general.stacc[e.title]})),me=Object(D.c)((function(t){return t.general.sync[e.title]})),Oe=Object(D.c)((function(e){return e.general.accessToken})),fe=Object(D.c)((function(t){return t.general.id[e.title]}));function ye(n){var s=ue.indexOf(n);window.confirm("Are you sure?")&&(t(e.actions.delete(s)),localStorage.setItem(e.title,JSON.stringify(ue)))}function xe(){return ke.apply(this,arguments)}function ke(){return(ke=Object(d.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(Oe,e.title,localStorage.getItem(e.title),fe);case 2:n=t.sent,console.log(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log(e);var t=null!=e;b(t?"Edit":"Add"),T(t?e.name:""),L(t?e.tags:["basic","personal"]),P(t?e.subtasks:{}),G(t?e.desc:""),re(t?e.color:te[0].value),console.log(ne),de(t?e.id:0),r(!0)}return Object(D.c)((function(e){return e.general.signedIn})),Object(s.useEffect)(Object(d.a)(o.a.mark((function n(){var s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(ge?localStorage.setItem(e.title,JSON.stringify({tasks:ue,time:pe})):(localStorage.getItem(e.title)?(console.log("restored from cache"),t(e.actions.delete(0)),t(e.actions.set(JSON.parse(localStorage.getItem(e.title))))):(console.log("set localstorage for ",e.title,":",{tasks:ce(e.title).tasks,time:0}),localStorage.setItem(e.title,JSON.stringify({tasks:ce(e.title).tasks,time:0}))),t(R({list:e.title,value:1}))),me||0==fe){n.next=10;break}return console.log("Only once: "+e.title),n.next=5,A(Oe,fe);case 5:s=n.sent,console.log(s),JSON.parse(s).time>pe?window.confirm("There are newer "+e.title+" tasks available, replace current ones?")?(t(e.actions.set(JSON.parse(s))),localStorage.setItem(e.title,s)):xe():(console.log("uploading current"),xe()),t(H({list:e.title,value:1}));case 10:case"end":return n.stop()}}),n)})))),Object(w.jsxs)("div",{style:{height:"100vh"},children:[Object(w.jsxs)("div",{className:"staccHeader",style:{background:"rgba(14, 18, 25)",position:"sticky",top:"4rem",zIndex:"995",paddingBottom:"0.75rem"},children:[Object(w.jsx)("span",{style:{marginLeft:"1.5rem",fontSize:"larger"},children:"welcome back!"}),Object(w.jsxs)("h3",{style:{marginLeft:"1.5rem"},children:[se[e.title]," tasks:"]}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{style:{padding:"0 0.5rem"},children:Object(w.jsx)(p.a,{style:{width:"95vw"},children:Object(w.jsx)(g.a,{xs:24,sm:12,md:8,lg:8,children:Object(w.jsxs)(f.a,{justified:!0,activeKey:y,onSelect:function(e){x(e),r(!1)},style:{margn:"0.5rem"},className:"staccTabs",children:[Object(w.jsx)(f.a.Item,{eventKey:"ongoing",children:Object(w.jsx)("span",{children:"ongoing"})}),Object(w.jsx)(f.a.Item,{eventKey:"completed",children:Object(w.jsx)("span",{className:"staccTabs",children:"completed"})})]})})})})]}),Object(w.jsx)("br",{}),Object(w.jsxs)(p.a,{style:{margin:"1rem"},children:["completed"==y&&!he.length||"completed"!=y&&!je.length?Object(w.jsxs)("div",{style:{width:"90vw",display:"flex",justifyContent:"center"},children:[Object(w.jsx)("img",{style:{height:"35vh"},src:ae})," "]}):"",je.map((function(t){return Object(w.jsx)("div",{style:"ongoing"==y?{display:"unset"}:{display:"none"},children:Object(w.jsx)(be,{task:t,handleDelete:function(e){return ye(e)},handleOpen:function(e){return ve(e)},edit:function(t){return e.actions.edit(t)}})})})),he.map((function(t){return Object(w.jsx)("div",{style:"ongoing"!=y?{display:"unset"}:{display:"none"},children:Object(w.jsx)(be,{task:t,handleDelete:function(e){return ye(e)},handleOpen:function(e){return ve(e)},edit:function(t){return e.actions.edit(t)}})})}))]}),Object(w.jsx)("br",{}),Object(w.jsxs)(O.a,{size:"lg",placement:"bottom",open:c,onClose:function(){return r(!1)},children:[Object(w.jsxs)(O.a.Header,{children:[Object(w.jsxs)(O.a.Title,{children:[j," Task @"," ",e.title[0].toUpperCase()+e.title.slice(1)]}),Object(w.jsx)(O.a.Actions,{children:Object(w.jsx)(_.a,{placement:"leftStart",data:te,defaultValue:ne,style:{width:"6rem"},searchable:!1,placeholder:"Color",renderMenuItem:function(e,t){return Object(w.jsx)("div",{style:{color:t.hex},children:e})},renderValue:function(e,t){return Object(w.jsx)("div",{style:{color:t.hex},children:t.label})},onChange:function(e,t){re(e)}})})]}),Object(w.jsx)(O.a.Body,{children:Object(w.jsxs)(V.a,{children:[Object(w.jsxs)(V.a.Group,{controlId:"name",children:[Object(w.jsx)(V.a.ControlLabel,{children:"Task Name"}),Object(w.jsx)(X.a,{value:I,onChange:function(e,t){return T(e)}}),Object(w.jsx)(V.a.HelpText,{children:"Task name is required"})]}),Object(w.jsxs)(V.a.Group,{controlId:"tags",children:[Object(w.jsx)(V.a.ControlLabel,{children:"Tags"}),Object(w.jsx)(Y.a,{data:ee,defaultValue:F,style:{width:300},menuStyle:{width:250},groupBy:"categories",placeholder:"Add tags",onChange:function(e,t){L(e)}})]}),Object(w.jsxs)(V.a.Group,{controlId:"desc",children:[Object(w.jsx)(V.a.ControlLabel,{children:"Desciption"}),Object(w.jsx)(X.a,{as:"textarea",rows:3,placeholder:"Textarea",value:K,onChange:function(e,t){G(e)}})]}),Object(w.jsxs)(V.a.Group,{controlId:"subtasks",children:[Object(w.jsx)(V.a.ControlLabel,{children:"Subtasks"}),Object(w.jsx)("div",{children:Object(w.jsx)($.a,{trigger:["Enter","Comma"],value:Object.keys(J),style:{width:300},placeholder:"Add subtasks",onChange:function(e,t){var n={};Object.assign(n,J);var s=Object.keys(J);s.map((function(t){e.includes(t)||delete n[t]})),s=Object.keys(n),e.map((function(e){s.includes(e)||(n[e]=0)})),P(n)}})}),Object(w.jsx)(V.a.HelpText,{children:"Press enter to separate subtasks"})]}),Object(w.jsx)(V.a.Group,{children:Object(w.jsxs)(Q.a,{children:[Object(w.jsx)(Z.a,{appearance:"primary",onClick:function(){return"Add"==j?void(""!=I?(t(e.actions.add({name:I,desc:K,subtasks:J,tags:F,color:ne,id:(new Date).getTime(),progress:0})),r(!1),localStorage.setItem(e.title,JSON.stringify(ue))):alert("Please enter Task Name")):void(""!=I?(t(e.actions.edit({name:I,desc:K,subtasks:J,tags:F,color:ne,id:oe,progress:"calculate"})),localStorage.setItem(e.title,JSON.stringify(ue)),r(!1)):alert("Please enter Task Name"))},children:"Save"}),Object(w.jsx)(Z.a,{appearance:"default",onClick:function(){return r(!1)},children:"Cancel"})]})})]})})]}),Object(w.jsx)("div",{className:"footerAdd",children:Object(w.jsx)(Z.a,{onClick:function(){return ve()},style:{justifyContent:"center",background:"whitesmoke"},children:Object(w.jsxs)("div",{style:{fontWeight:"600",fontSize:"larger",padding:"0 0.25rem",color:"#3c3c3c"},children:[" ",Object(w.jsx)(v.a,{fontSize:"1rem",style:{position:"absolute",left:"0.25rem",margin:"3px 0.75rem"}}),Object(w.jsx)("span",{style:{paddingLeft:"1.25rem"},children:" Add Task "})," "]})})})]})},pe=n(273);var ge=function(e){var t=Object(D.c)((function(e){return e.general.signedIn}));return Object(w.jsx)("div",{style:{margin:"1.5rem"},children:Object(w.jsxs)("div",{style:{fontWeight:"500"},children:[Object(w.jsx)("h3",{children:"account settings:"}),Object(w.jsx)("br",{}),"signing in ensures you don't lose data when you switch or reset browsers. it also syncs accross devices :)",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),t?Object(w.jsx)(Z.a,{appearance:"primary",color:"red",onClick:function(){I.a.auth2.getAuthInstance().signOut()},children:Object(w.jsx)("span",{style:{fontWeight:"bolder"},children:"sign out"})}):Object(w.jsx)(Z.a,{appearance:"primary",color:"green",onClick:function(){I.a.auth2.getAuthInstance().signIn()},children:Object(w.jsx)("span",{style:{fontWeight:"bolder"},children:"sign in"})}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("h3",{children:"other settings:"}),Object(w.jsx)("br",{}),Object(w.jsx)(pe.a,{})," coming soon..."]})})},me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,511)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))},ye=n(257),xe=(n(479),{setTasks:function(e,t){e.tasks=t.payload.tasks,e.time=t.payload.time},addTask:function(e,t){e.tasks.unshift(t.payload),e.time=(new Date).getTime()},deleteTask:function(e,t){console.log(108,t.payload),e.tasks.splice(t.payload,1),e.time=(new Date).getTime()},editTask:function(e,t){e.tasks.map((function(n){if(n.id==t.payload.id){if("calculate"==t.payload.progress){var s=0;Object.keys(t.payload.subtasks).map((function(e){return 1==t.payload.subtasks[e]?s+=1:""})),t.payload.progress=s/(Object.keys(t.payload.subtasks).length?Object.keys(t.payload.subtasks).length:1)}e.tasks[e.tasks.indexOf(n)]=t.payload}})),e.time=(new Date).getTime()}}),ke=xe,ve=Object(L.b)({name:"daily",initialState:ce("daily"),reducers:ke}),we=ve.actions,Se=we.addTask,Ie=we.deleteTask,Te=we.editTask,Ne={set:we.setTasks,add:Se,edit:Te,delete:Ie},Ce=ve.reducer,Ae=Object(L.b)({name:"weekly",initialState:ce("weekly"),reducers:ke}),Be=Ae.actions,Fe=Be.addTask,De=Be.deleteTask,Le=Be.editTask,We={set:Be.setTasks,add:Fe,edit:Le,delete:De},ze=Ae.reducer,Je=Object(L.b)({name:"monthly",initialState:ce("monthly"),reducers:ke}),Pe=Je.actions,Re=Pe.addTask,He=Pe.deleteTask,Ee=Pe.editTask,Ue={set:Pe.setTasks,add:Re,edit:Ee,delete:He},Ke=Je.reducer,Ge=Object(L.a)({reducer:{general:G,daily:Ce,weekly:ze,monthly:Ke}}),Me=n(503);var qe=function(){return Object(w.jsx)("div",{style:{margin:"1rem"},children:Object(w.jsx)("div",{style:{},children:Object(w.jsxs)(Me.a,{shape:"bar",className:"custom-slider",autoplay:!0,autoplayInterval:2500,children:[Object(w.jsx)("span",{className:"carouselItem",children:"eeh"}),Object(w.jsx)("span",{className:"carouselItem",children:"just another simple beautiful task manager"}),Object(w.jsx)("span",{className:"carouselItem",children:"check in later"})]})})})},_e=n.p+"static/media/404.a6458711.svg";var Ve=function(){return Object(w.jsxs)("div",{style:{display:"grid",width:"90vw"},children:[Object(w.jsx)("img",{src:_e,style:{height:"33vh"}}),Object(w.jsx)("br",{}),Object(w.jsx)("h2",{style:{textAlign:"center"},children:"Not found!"})]})};r.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(y.a,{children:Object(w.jsx)(ye.a,{theme:"dark",children:Object(w.jsx)(u.d,{children:Object(w.jsxs)(u.b,{path:"/",element:Object(w.jsx)(D.a,{store:Ge,children:Object(w.jsx)(q,{})}),children:[Object(w.jsx)(u.b,{index:!0,element:Object(w.jsx)(he,{title:"daily",actions:Ne})}),Object(w.jsx)(u.b,{path:"stacc",element:Object(w.jsx)(he,{title:"daily",actions:Ne})}),Object(w.jsx)(u.b,{path:"daily",element:Object(w.jsx)(he,{title:"daily",actions:Ne})}),Object(w.jsx)(u.b,{path:"weekly",element:Object(w.jsx)(he,{title:"weekly",actions:We})}),Object(w.jsx)(u.b,{path:"monthly",element:Object(w.jsx)(he,{title:"monthly",actions:Ue})}),Object(w.jsx)(u.b,{path:"settings",element:Object(w.jsx)(ge,{})}),Object(w.jsx)(u.b,{path:"about",element:Object(w.jsx)(qe,{})}),Object(w.jsx)(u.b,{path:"*",element:Object(w.jsx)(Ve,{})})]})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/stacc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/stacc","/service-worker.js");me?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var s=n.headers.get("content-type");404===n.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Oe(t,e)}))}}(),fe()}},[[480,1,2]]]);
//# sourceMappingURL=main.649f201a.chunk.js.map