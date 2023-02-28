(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{179:function(e,t,n){e.exports=n(311)},186:function(e,t,n){},197:function(e,t){},199:function(e,t){},209:function(e,t){},211:function(e,t){},236:function(e,t){},238:function(e,t){},239:function(e,t){},244:function(e,t){},246:function(e,t){},252:function(e,t){},254:function(e,t){},273:function(e,t){},285:function(e,t){},288:function(e,t){},311:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(55),i=n.n(o),c=(n(186),n(6)),u=n(8),s=n(23),l=n(4),f=n(12),d=function(e){if(!e.ok)throw e;return e},h=function(){return new Promise((function(e,t){try{e({token:window.localStorage.getItem("tinyThoughtsJWT")})}catch(n){t()}}))},p=function(){return fetch("/api/posts").then(d).then((function(e){return e.json()}))},m={SIGNIN_SUCCESS:"SIGNIN_SUCCESS",SIGNUP_SUCCESS:"SIGNUP_SUCCESS",INIT_SUCCESS:"INIT_SUCCESS",INIT_FAILURE:"INIT_FAILURE",SIGNUP_FAILURE:"SIGNUP_FAILURE",SIGNOUT_SUCCESS:"SIGNOUT_SUCCESS",SIGNOUT_FAILURE:"SIGNOUT_FAILURE",GET_POSTS_SUCCESS:"GET_POSTS_SUCCESS",DELETE_POSTS_SUCCESS:"DELETE_POSTS_SUCCESS",GET_CATEGORIES_SUCCESS:"GET_CATEGORIES_SUCCESS",ADD_POST_SUCCESS:"ADD_POST_SUCCESS",GET_POSTS_FAILURE:"GET_POSTS_FAILURE",GET_CATEGORIES_FAILURE:"GET_CATEGORIES_FAILURE",SIGNIN_FAILURE:"SIGNIN_FAILURE",ADD_POST_FAILURE:"ADD_POST_FAILURE",DELETE_POST_FAILURE:"DELETE_POST_FAILURE",SET_ERROR_MESSAGE:"SET_ERROR_MESSAGE"},E=function(e,t,n,r){return function(a){(function(e,t){return new Promise((function(n,r){return fetch("/api/signin",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(d).then((function(e){return e.json()})).then((function(e){var t=e.token,r=e.user;window.localStorage.setItem("tinyThoughtsJWT",t),window.localStorage.setItem("tinyThoughtsUser",JSON.stringify(r)),n(r)})).catch((function(e){e.json().then((function(e){var t=e.error;return r(t)}))}))}))})(e,t).then((function(e){if(e){a({type:m.SIGNIN_SUCCESS,user:e});var t=(r.state||{from:{pathname:"/"}}).from;n.replace(t)}else a({type:m.SIGNIN_FAILURE,error:"Signin failed"})})).catch((function(e){a({type:m.SIGNIN_FAILURE,error:e})}))}},S=function(e,t,n,r){return function(a){(function(e,t,n){return new Promise((function(r,a){return fetch("/api/signup",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:n,dateJoined:new Date})}).then(d).then((function(e){return e.json()})).then((function(e){var t=e.token,n=e.user;window.localStorage.setItem("tinyThoughtsJWT",t),window.localStorage.setItem("tinyThoughtsUser",JSON.stringify(n)),r(n)})).catch((function(e){e.json().then((function(e){var t=e.error;return a(t)}))}))}))})(e,t,n).then((function(e){a({type:m.SIGNUP_SUCCESS,user:e}),r.push("/")})).catch((function(e){a({type:m.SIGNUP_FAILURE,error:e})}))}},g=function(){return function(e){new Promise((function(e,t){try{window.localStorage.removeItem("tinyThoughtsJWT"),window.localStorage.removeItem("tinyThoughtsUser"),e(!0)}catch(n){t(!1)}})).then((function(){return e({type:m.SIGNOUT_SUCCESS})})).catch((function(){return e({type:m.SIGNOUT_FAILURE,error:"Signout failed"})}))}},v=function(){return function(e){new Promise((function(e,t){try{var n=window.localStorage.getItem("tinyThoughtsJWT"),r=JSON.parse(window.localStorage.getItem("tinyThoughtsUser"));if(n)return fetch("/api/verify",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n})}).then(d).then((function(e){return e.json()})).then((function(){return e(r)})).catch((function(){window.localStorage.removeItem("tinyThoughtsJWT"),window.localStorage.removeItem("tinyThoughtsUser"),t("User state could not be initialized")}))}catch(a){e({})}})).then((function(t){return e({type:m.INIT_SUCCESS,user:t})})).catch((function(t){return e({type:m.INIT_FAILURE,error:t})}))}},b=function(e){return function(t){(function(e){return fetch("/api/posts/author/".concat(e)).then(d).then((function(e){return e.json()}))})(e).then((function(e){return t({type:m.GET_POSTS_SUCCESS,posts:e})})).catch((function(e){return t({type:m.GET_POSTS_FAILURE,error:e})}))}},y=function(e){return function(t){(function(e){return fetch("/api/posts/category/".concat(e)).then(d).then((function(e){return e.json()}))})(e).then((function(e){return t({type:m.GET_POSTS_SUCCESS,posts:e})})).catch((function(e){return t({type:m.GET_POSTS_FAILURE,error:e})}))}},O=function(){return function(e){fetch("/api/categories").then(d).then((function(e){return e.json()})).then((function(t){return e({type:m.GET_CATEGORIES_SUCCESS,categories:t})})).catch((function(t){return e({type:m.GET_CATEGORIES_FAILURE,error:t})}))}},I=function(e,t){return function(n){(function(e){return h().then((function(t){var n=t.token;return fetch("/api/posts",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",authorization:"Bearer ".concat(n)},cache:"no-cache",body:JSON.stringify(e)})})).then(d).then((function(e){return e.json()})).then((function(e){var t=e.id;return fetch("/api/posts/".concat(t))})).then(d).then((function(e){return e.json()}))})(e).then((function(e){var r=e.author,a=e.title,o=e.content,i=e.categories,c=e.timestamp;n({type:m.ADD_POST_SUCCESS,post:{author:r,title:a,categories:i,content:o,timestamp:c}}),t.push("/")})).catch((function(e){n({type:m.ADD_POST_FAILURE,error:e})}))}},w=function(e){return function(t){(function(e){return h().then((function(t){var n=t.token;return fetch("/api/posts/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json",authorization:"Bearer ".concat(n)},cache:"no-cache"})})).then(d).then((function(e){return e.json()})).then((function(){return p()}))})(e).then((function(e){return t({type:m.DELETE_POSTS_SUCCESS,posts:e})})).catch((function(e){t({type:m.DELETE_POST_FAILURE,error:e})}))}},T=function(e){return function(t){t({type:m.SET_ERROR_MESSAGE,error:e})}},_=function(e){var t=e.type,n=e.label,o=e.value,i=e.name,c=e.maxLength,u=e.onInput,s=Object(r.useState)(!0),l=Object(f.a)(s,2),d=l[0],h=l[1],p=Object(r.useState)(!1),m=Object(f.a)(p,2),E=m[0],S=m[1];return a.a.createElement("div",{className:"input-box ".concat(E&&!d&&"hasError")},a.a.createElement("span",{className:"label"},n),a.a.createElement("input",{maxLength:c,required:!0,type:t,value:o,name:i,onChange:function(e){h(e.target.validity.valid),u(e)},onBlur:function(e){S(!0)}}))},N=function(e){var t=e.label,n=e.value,r=e.options,o=e.onChange;return a.a.createElement("div",{className:"select-list"},a.a.createElement("span",{className:"label"},t),a.a.createElement("select",{defaultValue:n,onChange:function(e){o(e.target.value)}},a.a.createElement("option",null,"Select"),r&&r.map((function(e){var t=e.id,n=e.title;return a.a.createElement("option",{key:t,value:t},n)}))))},j=function(e){var t=e.label,n=e.name,o=e.value,i=e.onUpdate,c=e.maxLength,u=void 0===c?200:c,s=Object(r.useState)(!0),l=Object(f.a)(s,2),d=l[0],h=l[1],p=Object(r.useState)(!1),m=Object(f.a)(p,2),E=m[0],S=m[1];return a.a.createElement("div",{className:"text-box ".concat(E&&!d&&"hasError")},a.a.createElement("span",{className:"label"},t),a.a.createElement("textarea",{maxLength:u,required:!0,name:n,value:o,onChange:function(e){h(e.target.validity.valid);var t=e.target,n={name:t.name,value:t.value.replace(/(?:\\r)/g,"\\n\\n")};i({target:n})},onBlur:function(e){S(!0)}}))},C=Object(r.memo)((function(e){var t=Object(r.useState)({}),n=Object(f.a)(t,2),o=n[0],i=n[1],c=o.title,d=void 0===c?"":c,h=o.content,p=void 0===h?"":h,m=o.categoriesId,E=void 0===m?"":m,S=Object(u.g)(),g=e.categories,v=void 0===g?[]:g,b=function(e){i(Object(l.a)(Object(l.a)({},o),{},Object(s.a)({},e.target.name,e.target.value)))};return a.a.createElement("div",{className:"add-post"},a.a.createElement("h2",null,"New Post"),a.a.createElement("div",{className:"add-post-form"},a.a.createElement(_,{type:"text",label:"Title",value:d,name:"title",onInput:b}),a.a.createElement(j,{label:"Type in your thoughts in 200 words or less",value:p,onUpdate:b,name:"content"}),a.a.createElement("span",{className:"char-count"},p.length," of 200 Characters"),a.a.createElement(N,{label:"Select a category",options:v,name:"categoriesId",onChange:function(e){i(Object(l.a)(Object(l.a)({},o),{},{categoriesId:e}))},value:E}),a.a.createElement("button",{id:"add-post-btn",onClick:function(t){if(d)if(p)if(E){var n={authorId:parseInt(e.author.id,10),title:o.title,content:o.content,categoriesId:o.categoriesId,timestamp:new Date};e.addPost(n,S)}else e.setError("Please select a category");else e.setError("Please enter content");else e.setError("Please enter title")}},"+ Add")))})),U=Object(c.b)((function(e){return{categories:e.posts.categories,author:e.users}}),(function(){return function(e){return{addPost:function(t,n){return e(I(t,n))},setError:function(t){return e(T(t))}}}}))(C),L=Object(c.b)((function(e){return{error:e.errors}}))((function(e){var t=e.error,n=Object(r.useState)(""),o=Object(f.a)(n,2),i=o[0],c=o[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){c("")}),5e3);return t.message&&c(t.message),function(){return clearTimeout(e)}}),[t]),i?a.a.createElement("div",{className:"error-popup"},i):a.a.createElement(a.a.Fragment,null)})),P=n(9),R=Object(r.memo)((function(e){var t=e.user;return a.a.createElement("div",{className:"account-nav"},(null===t||void 0===t?void 0:t.id)&&(null===t||void 0===t?void 0:t.name)&&a.a.createElement("h4",null,null===t||void 0===t?void 0:t.name),a.a.createElement("ul",null,(null===t||void 0===t?void 0:t.id)?a.a.createElement(a.a.Fragment,null,a.a.createElement("li",{onClick:e.logout},"Signout")):a.a.createElement(a.a.Fragment,null,a.a.createElement(P.b,{to:"/signin"},a.a.createElement("li",null,"Signin")),a.a.createElement(P.b,{to:"/signup"},a.a.createElement("li",null,"Signup")))))})),x=Object(c.b)((function(e){return{user:e.users}}),(function(e){return{logout:function(){return e(g())}}}))(R),G=function(e){e.user;return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"app-title"},"TinyThoughts"),a.a.createElement("div",{className:"app-nav"},a.a.createElement("ul",null,a.a.createElement(P.b,{to:"/"},a.a.createElement("li",null,"Home")),a.a.createElement(P.b,{to:"/add"},a.a.createElement("li",null,"New Post")))),a.a.createElement(x,null))},A=function(e){var t=e.categories;return a.a.createElement("ul",{className:"sidebar"},t&&t.map((function(e){return a.a.createElement(P.b,{key:e.id,to:"/category/".concat(e.id)},a.a.createElement("li",null,e.title))})),a.a.createElement(P.b,{to:"/"},a.a.createElement("li",null,"All Posts")))},F=n(166),k=n.n(F),D=function(e){var t=e.onConfirm,n=Object(r.useState)(!1),o=Object(f.a)(n,2),i=o[0],c=o[1];return a.a.createElement("div",{className:"delete-post-btn"},i?a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:function(){return t(!0)}},"Yes"),a.a.createElement("button",{onClick:function(){return c(!1)}},"No")):a.a.createElement("button",{onClick:function(){return c(!0)}},"Delete"))},J=Object(r.memo)((function(e){var t,n=e.user,r=void 0===n?{}:n,o=e.post,i=void 0===o?{}:o,c=k()(i.timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a");return a.a.createElement("div",{className:"post"},a.a.createElement("h1",null,i.title),(null===r||void 0===r?void 0:r.id)&&(null===r||void 0===r?void 0:r.id)===(null===i||void 0===i||null===(t=i.author)||void 0===t?void 0:t.id)&&a.a.createElement(D,{onConfirm:function(){e.deletePost(i.id)}}),a.a.createElement("h3",null,"by"," ",i.author&&a.a.createElement(P.b,{to:"/author/".concat(i.author.id)},i.author.name),"|",i.categories&&a.a.createElement(P.b,{to:"/category/".concat(i.categories.id)},i.categories.title),"| Posted on ",c),a.a.createElement("p",null,i.content))})),B=Object(c.b)((function(e){return{user:e.users}}),(function(e){return{deletePost:function(t){return e(w(t))}}}))(J),M=Object(r.memo)((function(e){var t=e.type,n=e.posts,o=e.categories,i=Object(u.i)(),s=Object(c.c)();return Object(r.useEffect)((function(){var e=i.categoryId,n=i.authorId;s("author"===t?b(n):"category"===t?y(e):function(e){p().then((function(t){return e({type:m.GET_POSTS_SUCCESS,posts:t})})).catch((function(t){return e({type:m.GET_POSTS_FAILURE,error:t})}))})}),[t,i,s]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"main"},a.a.createElement(A,{categories:o}),a.a.createElement("div",{className:"content"},n&&0===n.length&&a.a.createElement("div",{className:"post",style:{textAlign:"center"}},a.a.createElement("h1",null,"No posts to dispay")),n&&n.map((function(e){return a.a.createElement(B,{key:e.id,post:e})})))))})),q=Object(c.b)((function(e){return{categories:e.posts.categories,posts:e.posts.posts}}))(M),W=Object(c.b)((function(e){return{user:e.users}}))((function(e){var t=e.user,n=e.children,r=Object(u.h)();return t.id?a.a.createElement(a.a.Fragment,null,n):a.a.createElement(u.a,{to:{pathname:"/signin",state:{from:r}}})})),Y=Object(c.b)((function(e){return{error:e.error}}),(function(e){return{signIn:function(t,n,r,a){return e(E(t,n,r,a))}}}))((function(e){var t=Object(r.useState)({}),n=Object(f.a)(t,2),o=n[0],i=n[1],c=Object(u.h)(),d=Object(u.g)(),h=o.email,p=void 0===h?"":h,m=o.password,E=void 0===m?"":m,S=function(e){var t=e.target,n=t.name,r=t.value;i((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(s.a)({},n,r))}))};return a.a.createElement("div",{className:"sign-in"},a.a.createElement("h2",null,"Signin"),a.a.createElement("div",{className:"signin-form"},a.a.createElement(_,{maxLength:"100",required:!0,type:"email",label:"E-Mail",value:p,name:"email",onInput:S}),a.a.createElement(_,{maxLength:"30",required:!0,type:"password",label:"Password",value:E,name:"password",onInput:S}),a.a.createElement("button",{onClick:function(t){t.preventDefault(),e.signIn(p,E,d,c)}},"Go!")))})),z=Object(c.b)((function(){return{}}),(function(e){return{signUp:function(t,n,r,a){return e(S(t,n,r,a))},setError:function(t){return e(T(t))}}}))((function(e){var t=Object(r.useState)({}),n=Object(f.a)(t,2),o=n[0],i=n[1],c=Object(u.g)(),d=o.name,h=void 0===d?"":d,p=o.email,m=void 0===p?"":p,E=o.password,S=void 0===E?"":E,g=o.repassword,v=void 0===g?"":g,b=function(e){i(Object(l.a)(Object(l.a)({},o),{},Object(s.a)({},e.target.name,e.target.value)))};return a.a.createElement("div",{className:"sign-up"},a.a.createElement("h2",null,"Signup"),a.a.createElement("div",{className:"signup-form"},a.a.createElement(_,{type:"text",label:"Name",value:h,name:"name",onInput:b}),a.a.createElement(_,{type:"email",label:"E-Mail",value:m,name:"email",onInput:b}),a.a.createElement(_,{type:"password",label:"Password",value:S,name:"password",onInput:b}),a.a.createElement(_,{type:"password",label:"Retype Password",value:v,name:"repassword",onInput:b}),a.a.createElement("button",{onClick:function(t){t.preventDefault(),h?m?S?S!==v?e.setError("Password and Retyped Password didn't match"):e.signUp(h,m,S,c):e.setError("Please provide password"):e.setError("Please provide email"):e.setError("Please provide name")}},"Done!")))})),Z=Object(r.memo)((function(e){var t=e.user,n=e.children;return t.id?a.a.createElement(u.a,{to:"/"}):a.a.createElement(a.a.Fragment,null,n)})),H=Object(c.b)((function(e){return{user:e.users}}))(Z),V=Object(c.b)((function(e){return{}}),(function(e){return{initUserState:function(){return e(v())},fetchCategories:function(){return e(O())}}}))((function(e){return Object(r.useEffect)((function(){e.initUserState(),e.fetchCategories()})),a.a.createElement("div",{className:"app"},a.a.createElement(G,null),a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:"/author/:authorId"},a.a.createElement(q,{type:"author"})),a.a.createElement(u.b,{exact:!0,path:"/category/:categoryId"},a.a.createElement(q,{type:"category"})),a.a.createElement(u.b,{exact:!0,path:"/signin"},a.a.createElement(H,null,a.a.createElement(Y,null))),a.a.createElement(u.b,{exact:!0,path:"/signup"},a.a.createElement(H,null,a.a.createElement(z,null))),a.a.createElement(u.b,{exact:!0,path:"/add"},a.a.createElement(W,null,a.a.createElement(U,null))),a.a.createElement(u.b,{exact:!0,path:"/",component:q})),a.a.createElement(L,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=n(28),Q=n(167),K=n(177),X={posts:[],categories:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.GET_POSTS_SUCCESS:case m.DELETE_POSTS_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{posts:t.posts});case m.GET_CATEGORIES_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{categories:t.categories});case m.ADD_POST_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{posts:[t.post].concat(Object(K.a)(e.posts))});default:return e}},te={},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SIGNIN_SUCCESS:case m.SIGNUP_SUCCESS:case m.INIT_SUCCESS:return Object(l.a)({},t.user);case m.INIT_FAILURE:case m.SIGNUP_FAILURE:case m.SIGNOUT_SUCCESS:return{};default:return e}},re={error:!1,message:""},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.GET_POSTS_FAILURE:case m.GET_CATEGORIES_FAILURE:case m.SIGNIN_FAILURE:case m.SIGNUP_FAILURE:case m.INIT_FAILURE:case m.ADD_POST_FAILURE:case m.DELETE_POST_FAILURE:case m.SET_ERROR_MESSAGE:return{error:!0,message:t.error};case m.GET_POSTS_SUCCESS:case m.GET_CATEGORIES_SUCCESS:case m.SIGNIN_SUCCESS:case m.INIT_SUCCESS:case m.ADD_POST_SUCCESS:case m.DELETE_POST_SUCCESS:case m.RESET_ERROR:return{error:!1,message:""};default:return e}},oe=Object($.c)({posts:ee,users:ne,errors:ae}),ie=Object($.d)(oe,Object($.a)(Q.a)),ce=n(178),ue=n(36),se=n(18),le=n(95),fe=n(96),de=n.n(fe),he=n(57),pe=n.n(he),me=["email","password"];function Ee(){Ee=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(j){u=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),c=new T(a||[]);return r(i,"_invoke",{value:y(e,n,c)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var f={};function d(){}function h(){}function p(){}var m={};u(m,o,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(_([])));S&&S!==t&&n.call(S,o)&&(m=S);var g=p.prototype=d.prototype=Object.create(m);function v(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,c){var u=l(e[a],e,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function y(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function O(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=l(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=p,r(g,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=u(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(b.prototype),u(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(g),u(g,c,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=_,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var Se=Object({NODE_ENV:"production",PUBLIC_URL:""}).PRIVATE_KEY||"ChocolateDoughnuts",ge="TinyThoughts_DataPersistence",ve=function(e){return new Promise((function(t,n){pe.a.sign(e,Se,(function(e,r){return e?n(e):t(r)}))}))},be=function(e){return new Promise((function(t,n){pe.a.verify(e,Se,(function(e){return e?n():t({success:!0})}))}))},ye=function(){var e=Object(ue.a)(Ee().mark((function e(t,n,r){var a,o;return Ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=n.requestHeaders).authorization){e.next=3;break}return e.abrupt("return",new se.b(401,{"content-type":"application/json"},{error:"Missing authorization header in request"}));case 3:return o=a.authorization.split(" ")[1],e.next=6,be(o);case 6:if(e.sent){e.next=9;break}return e.abrupt("return",new se.b(401,{"content-type":"application/json"},{error:"Unauthorized"}));case 9:return e.abrupt("return",r(t,n));case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Oe=function(e){window.localStorage.setItem(ge,JSON.stringify({db:e,timestamp:(new Date).getTime()}))},Ie=function(e){if(!window.localStorage[ge])return{db:le};var t=JSON.parse(window.localStorage.getItem(ge));return((new Date).getTime()-t.timestamp)/6e4>e?(window.localStorage.removeItem(ge),{db:le}):t};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tte:20};new se.c({seeds:function(t){t.db.loadData(Ie(e.tte).db)},models:{posts:se.a.extend(),author:se.a.extend(),categories:se.a.extend()},routes:function(){this.namespace="api",this.get("/categories",(function(e,t){return e.db.categories})),this.get("/posts",(function(e,t){return e.db.posts.sort((function(e,t){return Number(t.id)-Number(e.id)})).map((function(t){return Object(l.a)(Object(l.a)({},t),{},{author:e.db.authors.filter((function(e){return Number(e.id)===Number(t.authorId)}))[0],categories:e.db.categories.filter((function(e){return Number(e.id)===Number(t.categoriesId)}))[0]})}))})),this.get("/posts/:id",(function(e,t){var n=t.params.id,r=e.db.posts.filter((function(e){return Number(e.id)===Number(n)}))[0];return Object(l.a)(Object(l.a)({},r),{},{author:e.db.authors.filter((function(e){return Number(e.id)===Number(r.authorId)}))[0],categories:e.db.categories.filter((function(e){return Number(e.id)===Number(r.categoriesId)}))[0]})})),this.get("/posts/category/:id",(function(e,t){var n=t.params.id;return e.db.posts.where({categoriesId:n}).map((function(t){return Object(l.a)(Object(l.a)({},t),{},{author:e.db.authors.filter((function(e){return Number(e.id)===Number(t.authorId)}))[0],categories:e.db.categories.filter((function(e){return Number(e.id)===Number(t.categoriesId)}))[0]})}))})),this.get("/posts/author/:id",(function(e,t){var n=t.params.id;return e.db.posts.where({authorId:n}).map((function(t){return Object(l.a)(Object(l.a)({},t),{},{author:e.db.authors.filter((function(e){return Number(e.id)===Number(t.authorId)}))[0],categories:e.db.categories.filter((function(e){return Number(e.id)===Number(t.categoriesId)}))[0]})}))})),this.post("/posts",(function(e,t){return ye(e,t,function(){var e=Object(ue.a)(Ee().mark((function e(t,n){var r,a;return Ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(n.requestBody),a=t.db.posts.insert(r),Oe(t.db.dump()),e.abrupt("return",{id:a.id});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())})),this.delete("/posts/:id",(function(e,t){return ye(e,t,(function(e,t){var n=t.params.id;return e.db.posts.remove({id:n}),Oe(e.db.dump()),{message:!0}}))})),this.post("/verify",function(){var e=Object(ue.a)(Ee().mark((function e(t,n){var r,a,o;return Ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(n.requestBody),a=r.token,o=pe.a.decode(a),e.next=4,t.db.authors.findBy({email:o.email});case 4:if(e.sent){e.next=7;break}return e.abrupt("return",new se.b(401,{"content-type":"application/json"},{error:"Unauthorized"}));case 7:return e.next=9,be(a);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),this.post("/signup",function(){var e=Object(ue.a)(Ee().mark((function e(t,n){var r,a,o,i,c,u,s,f;return Ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(JSON.stringify(Object.keys(JSON.parse(n.requestBody)))===JSON.stringify(["name","email","password","dateJoined"])){e.next=2;break}return e.abrupt("return",new se.b(401,{"content-type":"application/json"},{error:"Data missing in request"}));case 2:if(r=JSON.parse(n.requestBody),a=r.email,o=r.password,i=Object(ce.a)(r,me),!t.db.authors.findBy({email:a})){e.next=6;break}return e.abrupt("return",new se.b(401,{"content-type":"application/json"},{error:"User already exists"}));case 6:return c=de.a.hashSync(o,10),u=Object(l.a)({password:c,email:a},i),s=t.db.authors.insert(u),Oe(t.db.dump()),e.next=12,ve({id:s.id,name:s.name,email:s.email});case 12:return f=e.sent,e.abrupt("return",{token:f,user:{id:s.id,name:s.name}});case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),this.post("/signin",function(){var e=Object(ue.a)(Ee().mark((function e(t,n){var r,a,o;return Ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=JSON.parse(n.requestBody)).email||!r.password){e.next=16;break}if(!(a=t.db.authors.findBy({email:r.email}))){e.next=15;break}return e.next=6,de.a.compare(r.password,a.password);case 6:if(e.sent){e.next=9;break}return e.abrupt("return",new se.b(401,{"content-type":"application/json"},{error:"Incorrect password"}));case 9:return e.next=11,ve({id:a.id,name:a.name,email:a.email,dateJoined:a.dateJoined});case 11:return o=e.sent,e.abrupt("return",{token:o,user:{id:a.id,name:a.name}});case 15:return e.abrupt("return",new se.b(401,{"content-type":"application/json"},{error:"Incorrect password"}));case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}})}({tte:20}),i.a.render(a.a.createElement(c.a,{store:ie},a.a.createElement(P.a,null,a.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e){e.exports=JSON.parse('{"posts":[{"authorId":1,"title":"Thoughts on JavaScript","categoriesId":"1","content":"I love a hot cuppa Java with my donuts. Particularly when I\'m reading the script for my new movie. Java and Script, mmmm, delicious!","timestamp":"2019-11-28T11:01:45.948Z","id":1},{"authorId":1,"title":"Why React??","categoriesId":"2","content":"Why do you have to React to everything? I mean all I said was that the reactor was gonna blow. What\'s the fuss about?","timestamp":"2019-11-28T11:04:06.440Z","id":2},{"authorId":1,"title":"Java, eh?","categoriesId":"9","content":"Doh!","timestamp":"2019-11-28T11:04:43.915Z","id":3},{"authorId":1,"title":"This was funny","categoriesId":"3","content":"So, I saw this video on Youtube and this guy was teaching something called \\"Naahd Daaht Jee Esss\\". I mean, if you have to teach French, do it properly!","timestamp":"2019-11-28T11:06:09.350Z","id":4},{"authorId":1,"title":"React Hooks","categoriesId":"2","content":"So React has introduced a superb new way to empower function components with state, side effects and other things. ","timestamp":"2020-03-30T10:32:26.418Z","id":5}],"authors":[{"password":"$2b$10$/MR28AAVtvOL4eQkMimtvezwTzOve4BSDxNtd9ST9rYYjnhfp9Ayi","email":"homer@springfield.com","name":"Homer Simpson","dateJoined":"2019-11-28T10:59:49.437Z","id":1}],"categories":[{"id":1,"title":"JavaScript"},{"id":2,"title":"React"},{"id":3,"title":"Node.js"},{"id":4,"title":"React Router"},{"id":5,"title":"Redux"},{"id":6,"title":"GraphQL"},{"id":7,"title":"HTML5"},{"id":8,"title":"CSS3"},{"id":9,"title":"Java"},{"id":10,"title":"Python"},{"id":11,"title":"Movies"}]}')}},[[179,1,2]]]);
//# sourceMappingURL=main.07a612a0.chunk.js.map