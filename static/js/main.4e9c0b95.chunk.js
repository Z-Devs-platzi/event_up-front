(this["webpackJsonpz-front"]=this["webpackJsonpz-front"]||[]).push([[0],{40:function(e,n,t){e.exports=t.p+"static/media/landing_background.2784c49a.png"},41:function(e,n,t){e.exports=t.p+"static/media/event_up_logo.73f4c4c0.svg"},45:function(e,n,t){e.exports=t(73)},72:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(35),c=t.n(o),i=t(5),u=t(1),l=t(9),s=t.n(l),p=t(11),m=t(12),d=t(14),g=t(36),f=t.n(g).a.create({baseURL:"https://reqres.in/api/",timeout:1e4,mode:"cors",header:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0,"Content-Type":"application/json"}}),b=function(e,n){return function(t){var r=t.path,a=void 0===r?"":r,o=t.body,c=void 0===o?null:o,i=t.params;return f[n]("".concat(e,"/").concat(a),c,{params:i}).then((function(e){return e.data})).catch(v)}},v=function(e){var n=e.response.data;throw new Error(n.message)},h=b("users/login","post"),E=b("user","get"),y=b("users/signup","post"),x="__event_up_auth_provider_token__";function w(){return(w=Object(m.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({path:"1",body:null,params:{delay:2}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var n=e.authToken;if(n)return window.sessionStorage.setItem(x,n),n;throw new Error("No Auth Token")}function j(e,n){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(s.a.mark((function e(n,t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h({path:"",body:{email:n,password:t},params:{}});case 3:return O((r=e.sent).data),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function z(e){return S.apply(this,arguments)}function S(){return(S=Object(m.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y({path:"",body:Object(p.a)({},n),params:{}});case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var F=a.a.createContext(),_=function(e){var n=Object(u.g)(),t=Object(r.useState)({status:"initial",error:null,user:null}),o=Object(d.a)(t,2),c=o[0],i=o[1],l=function(){var e=Object(m.a)(s.a.mark((function e(t,r){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({status:"pending",error:null,user:null}),e.prev=1,e.next=4,j(t,r);case 4:(a=e.sent).hasOwnProperty("data")&&a.status?(i({status:"success",error:null,user:Object(p.a)({},a.data.user)}),n.push("/dashboard")):i({status:"error",error:null,user:null}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i({status:"error",error:e.t0,user:null});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({status:"pending",error:null,user:null}),e.prev=1,e.next=4,z(t);case 4:r=e.sent,i({status:"success",error:null,user:null}),console.log("%c Check your email","background-color: green; color:white;",r.data.email),n.push("/dashboard"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("%c Error on",e.t0),i({status:"error",error:e.t0,user:null});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=window.sessionStorage.getItem(x);if(e){var n=function(e){return w.apply(this,arguments)}(e);i({status:"success",error:null,user:n})}else i({status:"initial",error:null,user:null})}),[]),a.a.createElement(F.Provider,Object.assign({value:{data:c,login:l,logout:function(){window.sessionStorage.removeItem(x),i({status:"initial",error:null,user:null}),n.push("/")},register:g}},e))},C=function(){return a.a.useContext(F)},U=a.a.createContext(),T=function(e){return a.a.createElement(U.Provider,Object.assign({value:C().data.user},e))};var I=Object(u.h)((function(e){var n=e.children;return a.a.createElement(_,null,a.a.createElement(T,null,n))})),M=t(2),D=t(3);function P(){var e=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1em;\n  padding: 0.5rem 2rem;\n  background: ",";\n  border: ",";\n  color: var(--black);\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 0.5rem;\n  transition: background 0.3s ease-in-out;\n  &:hover {\n    background: ",";\n  }\n"]);return P=function(){return e},e}var A=D.c.button(P(),(function(e){return"primary"===e.buttonType?"var(--secondary-color)":"transparent"}),(function(e){return"primary"===e.buttonType?"1px solid var(--secondary-color)":"1px solid var(--black)"}),(function(e){return"primary"===e.buttonType?"var(--white)":"var(--secondary-color)"})),B=function(e){var n=e.children,t=e.buttonType,r=e.onClick;return a.a.createElement(A,{buttonType:t,onClick:r},n)};B.defaultProps={buttonType:"primary"};var N=B,q=t(40),R=t.n(q);function L(){var e=Object(M.a)(["\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 27px;\n  margin-bottom: 40px;\n  margin-top: 20px;\n"]);return L=function(){return e},e}function J(){var e=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  color: var(--light-grey-2);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(",");\n"]);return J=function(){return e},e}var W=D.c.section.attrs((function(e){return{img:e.img?e.img:R.a,size:e.size?e.size:"50"}}))(J(),(function(e){return e.img})),H=D.c.p(L());function $(){var e=Object(M.a)(["\n  background: var(--light-grey-1);\n  box-shadow: var(--shadow);\n  border-radius: 8px;\n  padding: 30px;\n"]);return $=function(){return e},e}function G(){var e=Object(M.a)(["\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n  justify-content: center;\n"]);return G=function(){return e},e}function K(){var e=Object(M.a)(["\n  :root {\n    --primary-color: #125E68;\n    --secondary-color: #FFD43B;\n    --black: #373737;\n    --white: #FFFFFF;\n    --grey: #808080;\n    --light-green: #DBE7E8;\n    --light-grey-1: #F9F9F9;\n    --light-grey-2: #CDCDCD;\n    --published: #3EE778;\n    --error: #FFCFC9;\n    --success: #C6FFD9;\n    --gradient-green: linear-gradient(var(--primary-color) 50%, #417E86);\n    --gradient-light-green: linear-gradient(#DBE7E8 40%, #E3ECED);\n    --shadow: 0 4px 8px rgba(55,55,55,.1);\n  }\n  html {\n    box-sizing: border-box;\n    font-family: 'Open Sans', sans-serif;\n    color: var(--black);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n  }\n  *, *::before, *::after {\n    box-sizing: inherit;\n  }\n  body,\n  div,\n  header,\n  section,\n  article,\n  aside,\n  nav,\n  ul,\n  ol,\n  li,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  ul {\n    list-style: none;\n  }\n  button {\n    background: transparent;\n    border: 0;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n  }\n\n"]);return K=function(){return e},e}var Q=Object(D.a)(K()),V=D.c.div(G(),(function(e){return e.direction?e.direction:"column"})),X=D.c.div($()),Y=t(41),Z=t.n(Y);function ee(){var e=Object(M.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: ",";\n  width: 250px;\n"]);return ee=function(){return e},e}var ne=D.c.div.attrs((function(e){return{img:e.img?e.img:Z.a,size:e.size?e.size:50}}))(ee(),(function(e){return e.img}),(function(e){return"".concat(e.size,"px")})),te=function(e){var n=e.imagePath,t=e.imageSize;return a.a.createElement(ne,{img:n,size:t})},re=function(e){var n=e.children;return a.a.createElement(W,null,a.a.createElement(V,null,a.a.createElement(te,null),a.a.createElement(H,null,"The place where you can create ",a.a.createElement("br",null),"and manage all your ",a.a.createElement("br",null)," organization events"),n))},ae=function(){return a.a.createElement(re,null,a.a.createElement(V,{direction:"row"},a.a.createElement(i.b,{to:"/signin"},a.a.createElement(N,{buttonType:"primary"},"Sign In")),a.a.createElement(i.b,{to:"/signup"},a.a.createElement(N,{buttonType:"primary"},"Sign Up"))))},oe=t(19),ce=t.n(oe),ie=(t(17),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return""},t=Object(r.useState)(""),a=Object(d.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)(e),u=Object(d.a)(i,2),l=u[0],s=u[1],p=Object(r.useCallback)((function(e){return c(n(e.target.value)),s(e.target.value)}),[n]);return{value:l,onChange:p,error:o}});function ue(){var e=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return ue=function(){return e},e}function le(){var e=Object(M.a)(["\n  display: block;\n  height: 20px;\n  color: var(--error);\n"]);return le=function(){return e},e}function se(){var e=Object(M.a)(["\n  color: var(--grey);\n"]);return se=function(){return e},e}function pe(){var e=Object(M.a)(["\n  width: 300px;\n  height: 35px;\n  outline: none;\n  margin-top: 5px;\n  padding: 6px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  background: var(--white);\n  border: 1px solid var(--grey);\n  border-radius: 8px;\n  &:hover,\n  &:active,\n  &:focus {\n    border-color: ",";\n    box-shadow: 0 0 4px ",";\n  }\n"]);return pe=function(){return e},e}var me=D.c.input.attrs((function(e){return{colorFocus:e.error?"var(--error)":e.colorFocus||"var(--secondary-color)"}}))(pe(),(function(e){return e.colorFocus}),(function(e){return e.colorFocus})),de=D.c.label(se()),ge=D.c.span(le()),fe=D.c.div(ue()),be=function(e){var n=e.label,t=e.id,r=e.type,o=e.logical,c=e.placeholder,i=e.errorMessage;return a.a.createElement(fe,null,a.a.createElement(de,{htmlFor:t},n),a.a.createElement(me,Object.assign({error:i,type:r,id:t},o,{placeholder:c})),a.a.createElement(ge,null,i))};be.defaultProps={label:"Input",placeholder:"",type:"text",errorMessage:""};var ve=be,he=t(42),Ee=t(43),ye=t.n(Ee);function xe(){var e=Object(M.a)(["\n  animation: "," 2s linear infinite;\n"]);return xe=function(){return e},e}function we(){var e=Object(M.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return we=function(){return e},e}var Oe=Object(D.d)(we());function je(){var e=Object(M.a)(["\n  ","\n  display: flex;\n  width: ",";\n  height: ",";\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  font-size: ",";\n"]);return je=function(){return e},e}var ke=D.c.div.attrs((function(e){return{size:e.size?e.size:"20",color:e.color?e.color:"var(--grey)"}}))(je(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.time,e.type,e.duration;return Object(D.b)(xe(),Oe)}(),(function(e){return"".concat(e.size,"px")}),(function(e){return"".concat(e.size,"px")}),(function(e){return e.color}),(function(e){return"".concat(e.size,"px")})),ze=function(e){var n=e.size,t=e.color;return a.a.createElement(ke,{color:t,size:n},a.a.createElement(he.Icon,{icon:ye.a}))},Se=function(e){var n=null;return e?/\S+@\S+\.\S+/.test(e)||(n="Email address is invalid"):n="Email address is required",n},Fe=function(e){var n=null;return e?e.length<6&&(n="Password need more caracters"):n="Password required",n},_e=function(e){var n=null;return e||(n="Input Required"),n},Ce=function(){var e=C(),n=e.login,t=e.data,r=ie("",Se),o=ie();return a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(r.value,ce()(o.value))}},a.a.createElement(X,null,a.a.createElement(V,null,a.a.createElement(ve,{errorMessage:r.error,label:"Email",logical:r,type:"email",id:"SI_email"}),a.a.createElement(ve,{label:"Password",logical:o,type:"password",id:"SI_password"}),a.a.createElement(N,{type:"submit"},"pending"===t.status?a.a.createElement(ze,null):"Sing In"),a.a.createElement("span",null,"Don\u2019t have an account? ",a.a.createElement(i.b,{to:"/signup"}," Sign Up ")))))))},Ue=function(){var e,n=C(),t=n.register,r=n.data,o=ie("",Se),c=ie("",Fe),u=ie("",(e=c,function(n){var t=null;return e.value!==n&&(t="This not Match !"),t})),l=ie(),s=ie("",_e),p=ie("",_e),m=ie("",_e);return a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o.error||c.error||u.error||t({email:o.value,password:ce()(c.value),organization:l.value,first_name:s.value,last_name:p.value,username:m.value})}},a.a.createElement(X,null,a.a.createElement(V,null,a.a.createElement(ve,{label:"Name",errorMessage:s.error,logical:s,type:"text",id:"SU_name"}),a.a.createElement(ve,{label:"Last Name",errorMessage:p.error,logical:p,type:"text",id:"SU_lastName"}),a.a.createElement(ve,{label:"User Name",errorMessage:m.error,logical:m,type:"text",id:"SU_Username"}),a.a.createElement(ve,{errorMessage:o.error,label:"Email",logical:o,type:"email",id:"SU_email"}),a.a.createElement(ve,{label:"Organization",logical:l,type:"text",id:"SU_orgs"}),a.a.createElement(ve,{label:"Password",errorMessage:c.error,logical:c,type:"password",id:"SU_password"}),a.a.createElement(ve,{label:"Repeat password",errorMessage:u.error,logical:u,type:"password",id:"SU_password_Repeat"}),a.a.createElement(N,{type:"submit"},"pending"===r.status?a.a.createElement(ze,null):"Sing Up"),a.a.createElement("span",null,"Already have an account? ",a.a.createElement(i.b,{to:"/signin"}," Sign In ")))))))},Te=Object(u.h)((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.b,{path:"/",exact:!0,component:ae}),a.a.createElement(u.b,{path:"/signin",exact:!0,component:Ce}),a.a.createElement(u.b,{path:"/signup",exact:!0,component:Ue}))})),Ie=function(){var e=C().logout,n=a.a.useContext(U);return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",null,a.a.createElement("h2",null,"HOOME ",n.name),a.a.createElement("button",{onClick:function(){return e()}},"LogOut")))},Me=t(44);var De=function(e){var n=e.component,t=e.authed,r=Object(Me.a)(e,["component","authed"]);return a.a.createElement(u.b,Object.assign({},r,{render:function(e){return!0===t?a.a.createElement(n,e):a.a.createElement(u.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},Pe=Object(u.h)((function(e){var n=e.authAndUser;return a.a.createElement(a.a.Fragment,null,a.a.createElement(De,{exact:!0,authed:n,path:"/dashboard",component:Ie}))})),Ae=function(){var e=C().data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Te,null),a.a.createElement(Pe,{authAndUser:e.user&&"success"===e.status}))},Be=(t(72),function(){return a.a.createElement(i.a,null,a.a.createElement(I,null,a.a.createElement(Q,null),a.a.createElement(u.d,null,a.a.createElement(Ae,null))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.4e9c0b95.chunk.js.map