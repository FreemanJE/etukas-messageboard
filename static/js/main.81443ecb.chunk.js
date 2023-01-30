(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),a=s(37),c=s.n(a),i=(s(43),s(10)),j=s(3),l=(s(44),s(45),s(27),s(2));function o(){return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("h1",{children:"Welcome to my Chat Board"}),Object(l.jsx)("h4",{children:"Register or login to use the functions"})]})}var b=s(5),u=s(8),d=s(38),h=s.n(d).a.create();h.defaults.withCredentials=!0;var m=h;s(71);function x(){var e=Object(j.f)(),t=function(){var t=Object(u.a)(Object(b.a)().mark((function t(s){var r,n,a;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),r=new FormData(s.target),n={username:r.get("username"),firstname:r.get("firstname"),lastname:r.get("lastname"),password:r.get("password")},alert("You have entered the user details"),t.prev=4,t.next=7,m.post("/user/register",n);case 7:a=t.sent,console.log("response ",a),s.target.reset(),alert("Your registration was successful"),e("/login"),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0),alert("Registration failure. \n username exist already");case 18:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"register-container",children:[Object(l.jsx)("h1",{children:"Register"}),Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsxs)("label",{children:["User name",Object(l.jsx)("span",{children:Object(l.jsx)("input",{type:"text",autoComplete:"username",name:"username",required:!0})})]}),Object(l.jsxs)("label",{children:["First name",Object(l.jsx)("span",{children:Object(l.jsx)("input",{type:"text",autoComplete:"firstname",name:"firstname",required:!0})})]}),Object(l.jsxs)("label",{children:["Last name",Object(l.jsx)("span",{children:Object(l.jsx)("input",{type:"text",autoComplete:"lastname",name:"lastname",required:!0})})]}),Object(l.jsxs)("label",{children:["Password",Object(l.jsx)("span",{children:Object(l.jsx)("input",{type:"password",autoComplete:"new-password",name:"password",required:!0})})]}),Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Register"})]})]})}function O(){var e=Object(j.f)(),t=function(){var t=Object(u.a)(Object(b.a)().mark((function t(s){var r,n,a;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),r=new FormData(s.target),n={username:r.get("username"),password:r.get("password")},t.prev=3,t.next=6,m.post("/user/login",n);case 6:a=t.sent,console.log("response ",a),s.target.reset(),alert("Login was successful"),e("/profile"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),alert("Invalid username or password");case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsxs)("label",{children:["Username",Object(l.jsx)("input",{type:"text",className:"form-control",autoComplete:"username",name:"username",required:!0})]}),Object(l.jsxs)("label",{children:["Password",Object(l.jsx)("input",{type:"password",autoComplete:"current-password",name:"password",required:!0})]}),Object(l.jsx)("button",{className:"btn btn-primary ",children:"Login"})]})]})}function p(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"d-flex flex-column flex-md-row align-items-center justify-content-around\np-4 px-md-4 mb-3 bg-primary border-bottom shadow-lg",children:[Object(l.jsx)("h2",{className:"my-0 mr-md-auto text-white font-weight-normal",children:"Etukas Message Board"}),Object(l.jsxs)("nav",{className:"my-2 my-md-0 me-md-3",children:[Object(l.jsx)(i.b,{className:"p-2 text-white",to:"/",children:"Homepage"}),Object(l.jsx)(i.b,{className:"p-2 text-white",to:"/register",children:"Register"}),Object(l.jsx)(i.b,{className:"p-2 text-white",to:"/list",children:"Users List"}),Object(l.jsx)(i.b,{className:"p-2 text-white",to:"/login",children:"Create Message"}),Object(l.jsx)(i.b,{className:"p-2 text-white",to:"/viewMessages",children:"View Messages"}),Object(l.jsx)(i.b,{className:"p-2 text-white",to:"/profile",children:"Profile"}),Object(l.jsx)(i.b,{className:"btn btn-outline-dark text-white me-md-2",to:"/login",children:"Login"}),Object(l.jsx)(i.b,{className:"btn btn-outline-warning",to:"/logout",children:"Logout"})]})]})})}function f(){var e=function(){var e=Object(u.a)(Object(b.a)().mark((function e(){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/user/logout");case 2:alert("You are logged out");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){e()}),[]),Object(l.jsx)("div",{className:"home-container",children:Object(l.jsx)("h2",{children:" Logout"})})}var g=s(9),v=s(76),w=s(77);function N(){var e=Object(r.useState)(null),t=Object(g.a)(e,2),s=t[0],n=t[1],a=function(){var e=Object(u.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/user/profile");case 3:t=e.sent,n(t.data.profile),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("An error happened",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h4",{children:"You are welcome"})}),null!=s?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(v.a.div,{layout:!0,animate:{opacity:5},initial:{opacity:1},exit:{opacity:0},transition:{duration:110},children:Object(l.jsx)(w.a,{children:Object(l.jsxs)("div",{className:"profile-motion",children:[Object(l.jsxs)("h1",{children:[s.firstname," ",s.lastname]}),Object(l.jsxs)("h3",{children:["username: ",s.username]}),Object(l.jsxs)("h3",{children:["user id: ",s._id]}),Object(l.jsxs)("a",{href:"https://robohash.org",children:[" ","click me",Object(l.jsx)("img",{src:s.avatar,alt:""})]}),Object(l.jsx)(i.b,{className:"btn btn-outline-dark me-md-2 m-2 ",to:"/createMessage",children:"Create Message"})]})})})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"No user Profile found"}),Object(l.jsx)("p",{children:"Please login in \ud83d\udc68\u200d\ud83c\udfeb "})]})]})}s(72);function y(){var e=Object(r.useState)(null),t=Object(g.a)(e,2),s=t[0],n=t[1],a=function(){var e=Object(u.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/user/list");case 3:t=e.sent,n(t.data),console.log(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("An error happened",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),Object(l.jsxs)("div",{className:"userPage",children:[Object(l.jsx)("h2",{children:"Users List"}),Object(l.jsx)("div",{className:"userContainer",children:s&&s.map((function(e,t){var s=e.dates,r=e.username,n=e.firstname,a=e.lastname,c=e._id,i=e.avatar;return Object(l.jsxs)("div",{className:"eachUser",children:[Object(l.jsx)("h3",{children:"User Info"}),Object(l.jsxs)("p",{children:["\u27a1 ",Object(l.jsx)("b",{children:"Name: "})," ",n," ",a," "]}),Object(l.jsxs)("p",{children:["\ud83e\udd8f ",Object(l.jsx)("b",{children:"Username: "}),r,"  "]}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("b",{children:"User Id: "}),c,"  "]}),Object(l.jsxs)("p",{children:[" Date Created: ",s.registered]}),Object(l.jsx)("img",{src:i,alt:"avatar"})]},t)}))})]})}function C(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),s=t[0],n=t[1],a=function(){var e=Object(u.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/api/message");case 3:t=e.sent,n(t.data.messages),console.log(t.data.messages),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("An error happened",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),Object(l.jsxs)("div",{className:"userPage",children:[Object(l.jsx)("h2",{children:"All Messages from Users\ud83d\udcdc "}),Object(l.jsx)("div",{className:"userContainer",children:s&&s.map((function(e,t){var s=e.user_id,r=e.content,n=e.dates,a=e.category;return Object(l.jsxs)("div",{className:"eachUser eachMessage",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"user Id: "}),s," "]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Date Created: "}),n.created," "]}),Object(l.jsxs)("h4",{children:[" ",Object(l.jsx)("b",{children:"Content: "})," ",r," "]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Category: "})," ",a," "]})]},t)}))})]})}function k(e){var t=Object(r.useState)(""),s=Object(g.a)(t,2),n=(s[0],s[1],Object(r.useState)([])),a=Object(g.a)(n,2),c=a[0],i=a[1],j=function(){var t=Object(u.a)(Object(b.a)().mark((function t(s){var r,n;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),r=new FormData(s.target),{user_id:r.get("user_id")},t.prev=3,t.next=6,m.get("/api/message/view/user?user_id=".concat(e));case 6:n=t.sent,i(n.data.messages),console.log(n.data.messages),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.error("An error happened",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"userPage",children:[Object(l.jsx)("h2",{children:"All Messages from Users\ud83d\udcdc "}),Object(l.jsx)("h2",{children:" Still Forming"}),Object(l.jsxs)("form",{onSubmit:j,children:[Object(l.jsxs)("label",{children:["Enter user Id",Object(l.jsx)("input",{type:"text",className:"form-control",autoComplete:"username",name:"username",required:!0})]}),Object(l.jsx)("button",{className:"btn btn-primary ",children:"Login"})]}),Object(l.jsx)("div",{className:"userContainer",children:c&&c.map((function(e,t){var s=e.user_id,r=e.content,n=e.dates,a=e.category;return Object(l.jsxs)("div",{className:"eachUser eachMessage",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"user Id: "}),s," "]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Date Created: "}),n.created," "]}),Object(l.jsxs)("h4",{children:[" ",Object(l.jsx)("b",{children:"Content: "})," ",r," "]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Category: "})," ",a," "]})]},t)}))})]})}function M(){var e=Object(j.f)(),t=function(){var t=Object(u.a)(Object(b.a)().mark((function t(s){var r,n,a;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),r=new FormData(s.target),n={user_id:r.get("user_id"),content:r.get("content"),category:r.get("category")},alert("Message details entered"),t.prev=4,t.next=7,m.post("/api/message",n);case 7:a=t.sent,console.log("response ",a),s.target.reset(),alert("New Message created"),e("/viewMessages"),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0),alert("Message failure. \n Wrong format");case 18:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("h1",{children:"Create your new message"}),Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsxs)("label",{children:["user_id",Object(l.jsx)("input",{type:"id",autoComplete:"user_id",name:"user_id",required:!0})]}),Object(l.jsxs)("label",{children:["Content",Object(l.jsx)("textarea",{autoComplete:"content",name:"content",required:!0})]}),Object(l.jsxs)("label",{children:["Category",Object(l.jsx)("input",{type:"text",autoComplete:"category",name:"category",required:!0})]}),Object(l.jsx)("button",{className:"btn btn-primary ",type:"submit",children:"Create"})]})]})}function q(){return Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsx)("h4",{children:"Etukas @2022"}),Object(l.jsxs)("div",{className:"footer-icon",children:[Object(l.jsx)("a",{href:"https://github.com/FreemanJE",children:Object(l.jsx)("i",{className:"fa fa-google-plus-square"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/freeman-johnson-links/",children:Object(l.jsx)("i",{className:"fa fa-linkedin-square"})}),Object(l.jsx)("a",{href:" #",children:Object(l.jsx)("i",{className:"fa fa-facebook-square"})}),Object(l.jsx)("a",{href:" #",children:Object(l.jsx)("i",{className:"fa fa-twitter-square"})})]})]})}var U=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"container-bg",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(p,{}),Object(l.jsx)("div",{className:"info-bg",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",element:Object(l.jsx)(o,{})}),Object(l.jsx)(j.a,{path:"/register",element:Object(l.jsx)(x,{})}),Object(l.jsx)(j.a,{path:"/list",element:Object(l.jsx)(y,{})}),Object(l.jsx)(j.a,{path:"/createMessage",element:Object(l.jsx)(M,{})}),Object(l.jsx)(j.a,{path:"/viewMessages",element:Object(l.jsx)(C,{})}),Object(l.jsx)(j.a,{path:"/userMessage",element:Object(l.jsx)(k,{})}),Object(l.jsx)(j.a,{path:"/login",element:Object(l.jsx)(O,{})}),Object(l.jsx)(j.a,{path:"/logout",element:Object(l.jsx)(f,{})}),Object(l.jsx)(j.a,{path:"/profile",element:Object(l.jsx)(N,{})})]})})]})}),Object(l.jsx)(q,{})]})};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(U,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.81443ecb.chunk.js.map