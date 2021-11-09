(this["webpackJsonpbe-well-frontend"]=this["webpackJsonpbe-well-frontend"]||[]).push([[0],{113:function(e,t,a){},132:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(73),r=a.n(n),i=a(7),o=a(5),l=a(172),j=a(19),u=a(174),d=a(175),b=a(52),h=a(177),p=a(202),m=a(176),O=a(178),x=a(179),f=a(180),g=a(17),v=a(13),N=a(18),w=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"FOLLOW":return Object(N.a)(Object(N.a)({},e),{},{user:Object(N.a)(Object(N.a)({},e.user),{},{following:[].concat(Object(v.a)(e.user.following),[t.payload])})});case"UNFOLLOW":return Object(N.a)(Object(N.a)({},e),{},{user:Object(N.a)(Object(N.a)({},e.user),{},{following:e.user.following.filter((function(e){return e!==t.payload}))})});case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},y=a(1),k={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},I=Object(s.createContext)(k),C=function(e){var t=e.children,a=Object(s.useReducer)(w,k),c=Object(i.a)(a,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(y.jsx)(I.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})},S=a(79),F=a.n(S),L=Object(l.a)((function(e){return{toolbar:{display:"flex",justifyContent:"space-between"},logoLg:Object(o.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),logoSm:Object(o.a)({display:"block"},e.breakpoints.up("sm"),{display:"none"}),search:Object(o.a)({display:"flex",alignItems:"center",backgroundColor:Object(j.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.a)(e.palette.common.white,.25)},borderRadius:e.shape.borderRadius,width:"50%"},e.breakpoints.down("sm"),{display:function(e){return e.open?"flex":"none"},width:"70%"}),input:{color:"white",marginLeft:e.spacing(1)},cancel:Object(o.a)({},e.breakpoints.up("sm"),{display:"none"}),searchButton:Object(o.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),icons:{alignItems:"center",display:function(e){return e.open?"none":"flex"}},badge:{marginRight:e.spacing(2)}}})),B=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],n=L({open:a}),r=Object(s.useContext)(I),o=r.user,l=r.dispatch;return Object(y.jsx)(u.a,{style:{background:"#00ACC1"},position:"fixed",children:Object(y.jsxs)(d.a,{className:n.toolbar,children:[Object(y.jsx)(g.b,{to:"/",style:{textDecoration:"none"},children:Object(y.jsx)(b.a,{variant:"h6",className:n.logoLg,style:{color:"#FAFAFA"},children:"BeWell"})}),Object(y.jsx)(b.a,{variant:"h6",className:n.logoSm}),Object(y.jsx)("div",{className:n.search,children:Object(y.jsx)(m.a,{className:n.cancel,onClick:function(){return c(!1)}})}),Object(y.jsxs)("div",{className:n.icons,children:[Object(y.jsx)(g.b,{to:"/messenger",style:{color:"white"},children:Object(y.jsx)(h.a,{badgeContent:0,color:"secondary",className:n.badge,children:Object(y.jsx)(O.a,{})})}),Object(y.jsx)(g.b,{to:"/tracker",style:{color:"white"},children:Object(y.jsx)(h.a,{badgeContent:0,color:"secondary",className:n.badge,children:Object(y.jsx)(F.a,{})})}),Object(y.jsx)(h.a,{badgeContent:0,color:"secondary",className:n.badge,children:Object(y.jsx)(x.a,{})}),Object(y.jsx)(h.a,{badgeContent:0,color:"secondary",className:n.badge,children:Object(y.jsx)(f.a,{onClick:function(){l({type:"LOGOUT"})}})}),Object(y.jsx)(g.b,{to:"/profile/".concat(o.username),children:Object(y.jsx)(p.a,{src:o.profilePicture,alt:"user profile picture",className:"navbarImg"})})]})]})})},T=a(8),R=a.n(T),_=a(15),A=a(80),E=(a(113),a(181)),P=a(182),D=a(183),W=a(184),M=a(11),U=a.n(M);function G(e){Object(A.a)(e);var t=Object(s.useState)([]),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(s.useContext)(I).user;return Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("/users/friends/"+r._id);case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"leftbar",children:Object(y.jsxs)("div",{className:"leftbarWrapper",children:[Object(y.jsxs)("ul",{className:"leftbarList",children:[Object(y.jsxs)("li",{className:"leftbarListItem",children:[Object(y.jsx)(E.a,{className:"leftbarIcon"}),Object(y.jsx)("span",{className:"leftbarListItemText",children:"Feed"})]}),Object(y.jsxs)("li",{className:"leftbarListItem",children:[Object(y.jsx)(P.a,{className:"leftbarIcon"}),Object(y.jsx)("span",{className:"leftbarListItemText",children:" Messages"})]}),Object(y.jsxs)("li",{className:"leftbarListItem",children:[Object(y.jsx)(D.a,{className:"leftbarIcon"}),Object(y.jsx)("span",{className:"leftbarListItemText",children:"Groups"})]}),Object(y.jsxs)("li",{className:"leftbarListItem",children:[Object(y.jsx)(W.a,{className:"leftbarIcon"}),Object(y.jsx)("span",{className:"leftbarListItemText",children:"Bookmarks"})]}),Object(y.jsxs)("li",{className:"leftbarListItem",children:[Object(y.jsx)(f.a,{className:"leftbarIcon"}),Object(y.jsx)("span",{className:"leftbarListItemText",children:"Logout"})]})]}),Object(y.jsx)("hr",{className:"leftbarHr"}),Object(y.jsx)("h6",{className:"leftbarTitle",children:"People you follow"}),Object(y.jsx)("div",{className:"leftbarFollowings",children:c.map((function(e){return Object(y.jsxs)("div",{className:"leftbarFollowing",children:[Object(y.jsx)(g.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},children:Object(y.jsx)("img",{src:e.profilePicture,alt:"friends",className:"leftbarFollowingImg"})}),Object(y.jsx)("span",{className:"leftbarFollowingName",children:e.username})]})}))})]})})})}var H=a(86),q=a(203),z=a(185),V=a(186),J=a(187),K=a(188),Y=a(189),Z=a(190),Q=a(191),X=a(201),$=a(84),ee=a.n($),te=a(82),ae=a.n(te),se=a(83),ce=a.n(se),ne=a(81),re=a.n(ne),ie=a(31),oe=(a(132),a(192)),le=a(193),je=["expand"];function ue(e){var t=e.user,a=Object(s.useState)([]),n=Object(i.a)(a,2),r=n[0],j=n[1],u=Object(s.useContext)(I),d=u.user,h=u.dispatch,m=Object(s.useState)(d.following.includes(null===t||void 0===t?void 0:t._id)),O=Object(i.a)(m,2),x=O[0],f=O[1];Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(R.a.mark((function e(){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("/users/friends/"+t._id);case 3:a=e.sent,j(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var v=function(){var e=Object(_.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!x){e.next=7;break}return e.next=4,U.a.put("/users/".concat(t._id,"/unfollow"),{userId:d._id});case 4:h({type:"UNFOLLOW",payload:t._id}),e.next=10;break;case 7:return e.next=9,U.a.put("/users/".concat(t._id,"/follow"),{userId:d._id});case 9:h({type:"FOLLOW",payload:t._id});case 10:f(!x),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),w=Object(l.a)((function(e){var t;return{toolbar:e.mixins.toolbar,container:{paddingTop:e.spacing(10),position:"sticky",top:0},card:{marginBottom:e.spacing(5)},media:(t={height:250},Object(o.a)(t,e.breakpoints.down("sm"),{height:150}),Object(o.a)(t,"content",{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}),t)}})),k=Object(q.a)((function(e){e.expand;var t=Object(H.a)(e,je);return Object(y.jsx)(z.a,Object(N.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));function C(){var e=w(),t=c.a.useState(!1),a=Object(i.a)(t,2),s=a[0],n=a[1];return Object(y.jsxs)("main",{className:e.content,children:[Object(y.jsx)("div",{className:e.toolbar}),Object(y.jsx)(V.a,{className:e.container,style:{display:"flex",width:"400px"},children:Object(y.jsxs)(J.a,{className:e.card,children:[Object(y.jsx)(K.a,{avatar:Object(y.jsx)(p.a,{sx:{bgcolor:ie.a[500]},"aria-label":"recipe",children:Object(y.jsx)("img",{src:"https://media.discordapp.net/attachments/887887430475186176/902984461971517480/91011CB1-EDA8-4B78-B657-F81C6F673E35.png",alt:""})}),action:Object(y.jsx)(z.a,{"aria-label":"settings",children:Object(y.jsx)(re.a,{})}),title:"Recipe of the Week",subheader:"Shrimp and Chorizo Paella"}),Object(y.jsx)(Y.a,{className:e.media,component:"img",height:"194",image:"https://media.istockphoto.com/photos/spicy-homemade-cajun-jambalaya-picture-id537314539?b=1&k=20&m=537314539&s=170667a&w=0&h=VcDpFMQHmRShi5Ole1QIVw5I5MiT5rw9k4uxRd3o1Gk=",alt:"Paella dish"}),Object(y.jsx)(Z.a,{children:Object(y.jsx)(b.a,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),Object(y.jsxs)(Q.a,{disableSpacing:!0,children:[Object(y.jsx)(z.a,{"aria-label":"add to favorites",children:Object(y.jsx)(ae.a,{})}),Object(y.jsx)(z.a,{"aria-label":"share",children:Object(y.jsx)(ce.a,{})}),Object(y.jsx)(k,{expand:s,onClick:function(){n(!s)},"aria-expanded":s,"aria-label":"show more",children:Object(y.jsx)(ee.a,{})})]}),Object(y.jsx)(X.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(y.jsxs)(Z.a,{children:[Object(y.jsx)(b.a,{paragraph:!0,children:"Method:"}),Object(y.jsx)(b.a,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),Object(y.jsx)(b.a,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),Object(y.jsx)(b.a,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"}),Object(y.jsx)(b.a,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})})]})}var S=function(){return Object(y.jsxs)(y.Fragment,{children:[t.username!==d.username&&Object(y.jsxs)("button",{className:"rightbarFollowButton",onClick:v,children:[x?"Unfollow":"Follow",x?Object(y.jsx)(oe.a,{}):Object(y.jsx)(le.a,{})]}),Object(y.jsxs)("h4",{className:"rightbarTitle",children:[t.username,"'s information"]}),Object(y.jsxs)("div",{className:"rightbarInfo",children:[Object(y.jsxs)("div",{className:"rightbarInfoItem",children:[Object(y.jsx)("span",{className:"rightbarInfoKey",children:"City:"}),Object(y.jsx)("span",{className:"rightbarInfoValue",children:t.city})]}),Object(y.jsxs)("div",{className:"rightbarInfoItem",children:[Object(y.jsx)("span",{className:"rightbarInfoKey",children:"Country:"}),Object(y.jsx)("span",{className:"rightbarInfoValue",children:t.from})]}),Object(y.jsx)("div",{className:"rightbarInfoItem"})]}),Object(y.jsxs)("h4",{className:"rightbarTitle",children:[t.username," follows:"]}),Object(y.jsx)("div",{className:"rightbarFollowings",children:r.map((function(e){return Object(y.jsx)(g.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},children:Object(y.jsxs)("div",{className:"rightbarFollowing",children:[Object(y.jsx)("img",{src:e.profilePicture,alt:"user profile p",className:"rightbarFollowingImg"}),Object(y.jsx)("span",{className:"rightbarFollowingName",children:e.username})]})})}))})]})};return Object(y.jsx)("div",{className:"rightbar",children:Object(y.jsx)("div",{className:"rightbarWrapper",children:t?Object(y.jsx)(S,{}):Object(y.jsx)(C,{})})})}a(137);var de=a(194),be=a(195),he=(a(138),a(50)),pe=Object(l.a)((function(e){var t;return{toolbar:e.mixins.toolbar,card:{marginBottom:e.spacing(5)},media:(t={height:250},Object(o.a)(t,e.breakpoints.down("sm"),{height:150}),Object(o.a)(t,"content",{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}),t)}})),me=function(e){var t=e.post,a=Object(s.useState)(t.likes.length),c=Object(i.a)(a,2),n=c[0],r=c[1],o=Object(s.useState)(!1),l=Object(i.a)(o,2),j=l[0],u=l[1],d=Object(s.useState)({}),h=Object(i.a)(d,2),p=h[0],m=h[1],O=Object(s.useContext)(I).user;Object(s.useEffect)((function(){u(t.likes.includes(null===O||void 0===O?void 0:O._id))}),[O._id,t.likes]),Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(R.a.mark((function e(){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("/users?userId=".concat(t.userId));case 2:a=e.sent,m(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.userId]);var x=pe();return Object(y.jsxs)("main",{className:x.content,children:[Object(y.jsx)("div",{className:x.toolbar}),Object(y.jsxs)(J.a,{className:x.card,children:[Object(y.jsxs)(de.a,{children:[Object(y.jsx)(g.b,{to:"/profile/".concat(p.username),children:Object(y.jsx)("img",{className:"postProfileImg",src:p.profilePicture,alt:"profile pic"})}),Object(y.jsxs)(Z.a,{children:[Object(y.jsx)(b.a,{gutterBottom:!0,children:Object(y.jsx)("span",{className:"postUsername",children:p.username})}),Object(y.jsx)("span",{className:"postDate",children:Object(he.a)(t.createdAt)}),Object(y.jsx)("img",{className:"postImg",src:"http://localhost:8800/images/"+t.img,alt:""}),Object(y.jsx)(b.a,{className:"postText",children:t.desc})]})]}),Object(y.jsxs)(Q.a,{children:[Object(y.jsx)(be.a,{size:"small",onClick:function(){try{U.a.put("/posts/"+t._id+"/like",{userId:O._id})}catch(e){}r(j?n-1:n+1),u(!j)},style:{backgroundColor:"#80DEEA",color:"#fafafa"},children:"".concat(n,1===n?" Like":" Likes")}),Object(y.jsx)(b.a,{className:"postCommentText",children:t.comment>1?Object(y.jsxs)("span",{children:[t.comment," comments"]}):Object(y.jsxs)("span",{children:[t.comment," comment"]})})]})]})]})},Oe=(a(139),a(196)),xe=a(197),fe=a(198),ge=a(199),ve=Object(l.a)((function(e){var t;return{toolbar:e.mixins.toolbar,card:{marginBottom:e.spacing(5)},media:(t={height:250},Object(o.a)(t,e.breakpoints.down("sm"),{height:150}),Object(o.a)(t,"content",{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}),t)}}));var Ne=function(){var e=Object(s.useContext)(I).user,t=Object(s.useRef)(),a=Object(s.useState)(null),c=Object(i.a)(a,2),n=c[0],r=c[1],o=ve(),l=function(){var a=Object(_.a)(R.a.mark((function a(s){var c,r,i;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),c={userId:e._id,desc:t.current.value},!n){a.next=16;break}return r=new FormData,i=Date.now()+n.name,r.append("name",i),r.append("file",n),c.img=i,console.log(c),a.prev=9,a.next=12,U.a.post("/upload",r);case 12:a.next=16;break;case 14:a.prev=14,a.t0=a.catch(9);case 16:return a.prev=16,a.next=19,U.a.post("/posts",c);case 19:window.location.reload(),a.next=24;break;case 22:a.prev=22,a.t1=a.catch(16);case 24:case"end":return a.stop()}}),a,null,[[9,14],[16,22]])})));return function(e){return a.apply(this,arguments)}}();return Object(y.jsxs)("main",{className:o.content,children:[Object(y.jsx)("div",{className:o.toolbar}),Object(y.jsx)("div",{className:"share",children:Object(y.jsxs)("div",{className:"shareWrapper",children:[Object(y.jsxs)("div",{className:"shareTop",children:[Object(y.jsx)(g.b,{to:"/profile/".concat(e.username),children:Object(y.jsx)("img",{className:"shareProfileImg",src:e.profilePicture,alt:"Profile picture"})}),Object(y.jsx)("input",{placeholder:"What's on your mind "+e.username+"?",className:"shareInput",ref:t})]}),Object(y.jsx)("hr",{className:"shareHr"}),n&&Object(y.jsxs)("div",{className:"shareImgContainer",children:[Object(y.jsx)("img",{className:"shareImg",src:URL.createObjectURL(n),alt:""}),Object(y.jsx)(m.a,{className:"shareCancelImg",onClick:function(){return r(null)}})]}),Object(y.jsxs)("form",{className:"shareBottom",onSubmit:l,children:[Object(y.jsxs)("div",{className:"shareOptions",children:[Object(y.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(y.jsx)(Oe.a,{htmlColor:"#2eb8d1",className:"shareIcon"}),Object(y.jsx)("span",{className:"shareOptionText",children:"Photo"}),Object(y.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png, .jpeg, .jpg, .gif",onChange:function(e){return r(e.target.files[0])}})]}),Object(y.jsxs)("div",{className:"shareOption",children:[Object(y.jsx)(xe.a,{htmlColor:"#2eb8d1",className:"shareIcon"}),Object(y.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(y.jsxs)("div",{className:"shareOption",children:[Object(y.jsx)(fe.a,{htmlColor:"#2eb8d1",className:"shareIcon"}),Object(y.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(y.jsxs)("div",{className:"shareOption",children:[Object(y.jsx)(ge.a,{htmlColor:"#2eb8d1",className:"shareIcon"}),Object(y.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(y.jsx)("button",{className:"shareButton",type:"submit",children:"Share"})]})]})})]})};var we=function(e){var t=e.username,a=Object(s.useState)([]),c=Object(i.a)(a,2),n=c[0],r=c[1],o=Object(s.useContext)(I).user;return Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(R.a.mark((function e(){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,U.a.get("/posts/profile/"+t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,U.a.get("/posts/timeline/"+o._id);case 8:e.t0=e.sent;case 9:a=e.t0,r(a.data.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,o._id]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"feed",children:Object(y.jsxs)("div",{className:"feedWrapper",children:[(!t||t===o.username)&&Object(y.jsx)(Ne,{}),n.map((function(e){return Object(y.jsx)(me,{post:e},e._id)}))]})})})};a(140);var ye=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(B,{}),Object(y.jsxs)("div",{className:"homeContainer",children:[Object(y.jsx)(G,{}),Object(y.jsx)(we,{}),Object(y.jsx)(ue,{})]})]})},ke=(a(141),function(){var e=Object(_.a)(R.a.mark((function e(t,a){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"LOGIN_START"});try{U.a.post("auth/login",t).then((function(e){console.log(e.data),a({type:"LOGIN_SUCCESS",payload:e.data})}))}catch(s){a({type:"LOGIN_FAILURE",payload:s})}case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Ie=a(200);function Ce(){var e=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useContext)(I),c=a.isFetching,n=a.dispatch;return Object(y.jsx)("div",{className:"login",children:Object(y.jsxs)("div",{className:"loginWrapper",children:[Object(y.jsxs)("div",{className:"loginLeft",children:[Object(y.jsx)("h3",{className:"loginLogo",children:"BeWell"}),Object(y.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on BeWell."})]}),Object(y.jsx)("div",{className:"loginRight",children:Object(y.jsxs)("form",{className:"loginBox",onSubmit:function(a){a.preventDefault(),ke({email:e.current.value,password:t.current.value},n)},children:[Object(y.jsx)("input",{placeholder:"Email",type:"email",required:!0,className:"loginInput",ref:e}),Object(y.jsx)("input",{placeholder:"Password",type:"password",required:!0,minLength:"6",className:"loginInput",ref:t}),Object(y.jsx)("button",{className:"loginButton",type:"submit",disabled:c,children:c?Object(y.jsx)(Ie.a,{color:"white",size:"20px"}):"Log In"}),Object(y.jsx)("span",{className:"loginForgot",children:"Forgot Password?"}),Object(y.jsx)("button",{className:"loginRegisterButton",children:c?Object(y.jsx)(Ie.a,{color:"white",size:"20px"}):"Create a New Account"})]})})]})})}a(142);var Se=a(14);var Fe=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useRef)(),c=Object(s.useRef)(),n=Object(Se.g)(),r=function(){var s=Object(_.a)(R.a.mark((function s(r){var i;return R.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.preventDefault(),c.current.value===a.current.value){s.next=5;break}c.current.setCustomValidity("Passwords don't match!"),s.next=15;break;case 5:return i={username:e.current.value,email:t.current.value,password:a.current.value},s.prev=6,s.next=9,U.a.post("/auth/register",i);case 9:n.push("/login"),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(6),console.log(s.t0);case 15:case"end":return s.stop()}}),s,null,[[6,12]])})));return function(e){return s.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"login",children:Object(y.jsxs)("div",{className:"loginWrapper",children:[Object(y.jsxs)("div",{className:"loginLeft",children:[Object(y.jsx)("h3",{className:"loginLogo",children:"BeWell"}),Object(y.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on BeWell."})]}),Object(y.jsx)("div",{className:"loginRight",children:Object(y.jsxs)("form",{className:"loginBox",onSubmit:r,children:[Object(y.jsx)("input",{placeholder:"Username",required:!0,ref:e,className:"loginInput"}),Object(y.jsx)("input",{placeholder:"Email",required:!0,ref:t,className:"loginInput",type:"email"}),Object(y.jsx)("input",{placeholder:"Password",required:!0,ref:a,className:"loginInput",type:"password",minLength:"6"}),Object(y.jsx)("input",{placeholder:"Password Again",required:!0,ref:c,className:"loginInput",type:"password"}),Object(y.jsx)("button",{className:"loginButton",type:"submit",children:"Sign Up"}),Object(y.jsx)("button",{className:"loginRegisterButton",children:"Log into Account"})]})})]})})};a(143);function Le(){var e=Object(s.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(Se.h)().username;return Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("/users?username=".concat(n));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(B,{}),Object(y.jsxs)("div",{className:"profile",children:[Object(y.jsx)(G,{}),Object(y.jsxs)("div",{className:"profileRight",children:[Object(y.jsxs)("div",{className:"profileRightTop",children:[Object(y.jsxs)("div",{className:"profileCover",children:[Object(y.jsx)("img",{className:"profileCoverImg",src:a.coverPicture,alt:"cover pic"}),Object(y.jsx)("img",{className:"profileUserImg",src:a.profilePicture,alt:"user profile pic"})]}),Object(y.jsxs)("div",{className:"profileInfo",children:[Object(y.jsx)("h4",{className:"profileInfoName",children:a.username}),Object(y.jsx)("span",{className:"profileInfoDesc",children:a.desc})]})]}),Object(y.jsxs)("div",{className:"profileRightBottom",children:[Object(y.jsx)(we,{username:n}),Object(y.jsx)(ue,{user:a})]})]})]})]})}var Be=a(85),Te=a(88);var Re=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=t[1],n="#00ACC1",r="#B0BEC5",o={labels:["Not Complete","Complete"],datasets:[{label:"My First Dataset",data:[1,0],backgroundColor:[r,n],hoverOffset:4}]},l={labels:["Not Complete","Complete"],datasets:[{label:"My Second Dataset",data:[0,1],backgroundColor:[r,n],hoverOffset:4}]};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(B,{}),Object(y.jsxs)(Te.a,{style:{padding:20,height:"95vh",width:500,margin:"100px auto"},children:[Object(y.jsx)("h3",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Track Your Exercise"}),Object(y.jsx)(Be.a,{data:a?o:l}),Object(y.jsx)(be.a,{style:{background:"#B2EBF2",display:"flex",alignItems:"center",justifyContent:"center",margin:"40px auto"},onClick:function(){return c(!a)},children:"Click to Complete"})]})]})};a(144),a(145);var _e=function(e){var t=e.conversation,a=e.currentUser,c=Object(s.useState)(null),n=Object(i.a)(c,2),r=n[0],o=n[1];return Object(s.useEffect)((function(){var e=t.members.find((function(e){return e!==a._id})),s=function(){var t=Object(_.a)(R.a.mark((function t(){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U()("/users?userId="+e);case 3:a=t.sent,o(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();s()}),[a,t]),Object(y.jsxs)("div",{className:"conversation",children:[Object(y.jsx)("img",{className:"conversationImg",src:(null===r||void 0===r?void 0:r.profilePicture)?r.profilePicture:"https://media.istockphoto.com/photos/female-portrait-icon-as-avatar-or-profile-picture-picture-id477333976?b=1&k=20&m=477333976&s=170667a&w=0&h=0MKAqzspB2Tcx7Yf42nYI0Pda9qK1oZap25Mru21K40=",alt:"user profilePicture"}),Object(y.jsx)("span",{className:"conversationName",children:null===r||void 0===r?void 0:r.username})]})};a(146);var Ae=function(e){var t=e.message,a=e.own;return Object(y.jsxs)("div",{className:a?"message own":"message",children:[Object(y.jsx)("div",{className:"messageTop",children:Object(y.jsx)("p",{className:"messageText",children:t.text})}),Object(y.jsx)("div",{className:"messageBottom",children:Object(he.a)(t.createdAt)})]})};a(147);var Ee=function(){return Object(y.jsx)("div",{className:"chatOnline",children:Object(y.jsxs)("div",{className:"chatOnlineFriend",children:[Object(y.jsxs)("div",{className:"chatOnlineImgContainer",children:[Object(y.jsx)("img",{className:"chatOnlineImg",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",alt:""}),Object(y.jsx)("div",{className:"chatOnlineBadge"})]}),Object(y.jsx)("span",{className:"chatOnlineName",children:"Amy"})]})})},Pe=Object(l.a)((function(e){var t;return{toolbar:e.mixins.toolbar,card:{marginBottom:e.spacing(5)},media:(t={height:250},Object(o.a)(t,e.breakpoints.down("sm"),{height:150}),Object(o.a)(t,"content",{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}),t)}}));var De=function(){var e=Pe(),t=Object(s.useState)([]),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(null),o=Object(i.a)(r,2),l=o[0],j=o[1],u=Object(s.useState)([]),d=Object(i.a)(u,2),b=d[0],h=d[1],p=Object(s.useState)(""),m=Object(i.a)(p,2),O=m[0],x=m[1],f=Object(s.useState)(null),g=Object(i.a)(f,2),N=(g[0],g[1],Object(s.useState)([])),w=Object(i.a)(N,2),k=(w[0],w[1],Object(s.useRef)(),Object(s.useContext)(I).user),C=Object(s.useRef)();Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("/conversations/"+k._id);case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[k._id]),Object(s.useEffect)((function(){var e=function(){var e=Object(_.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("/messages/"+(null===l||void 0===l?void 0:l._id));case 3:t=e.sent,h(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(s.useEffect)((function(){var e;null===(e=C.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[b]);var S=function(){var e=Object(_.a)(R.a.mark((function e(t){var a,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={sender:k._id,text:O,conversationId:l._id},e.prev=2,e.next=5,U.a.post("/messages",a);case 5:s=e.sent,h([].concat(Object(v.a)(b),[s.data])),x(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(B,{}),Object(y.jsxs)("main",{className:e.content,children:[Object(y.jsx)("div",{className:e.toolbar}),Object(y.jsxs)("div",{className:"messenger",children:[Object(y.jsx)("div",{className:"chatMenu",children:Object(y.jsxs)("div",{className:"chatMenuWrapper",children:[Object(y.jsx)("input",{placeholder:"Search for friends",className:"chatMenuInput"}),c.map((function(e){return Object(y.jsx)("div",{onClick:function(){return j(e)},children:Object(y.jsx)(_e,{conversation:e,currentUser:k})})}))]})}),Object(y.jsx)("div",{className:"chatBox",children:Object(y.jsx)("div",{className:"chatBoxWrapper",children:l?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"chatBoxTop",children:b.map((function(e){return Object(y.jsx)("div",{ref:C,children:Object(y.jsx)(Ae,{message:e,own:e.sender===k._id})})}))}),Object(y.jsxs)("div",{className:"chatBoxBottom",children:[Object(y.jsx)("textarea",{className:"chatMessageInput",placeholder:"Send a message...",onChange:function(e){return x(e.target.value)},value:O}),Object(y.jsx)("button",{className:"chatSubmitButton",onClick:S,children:"Send"})]})]}):Object(y.jsx)("span",{className:"noConversationText",children:"Open a conversation to start a chat."})})}),Object(y.jsx)("div",{className:"chatOnline",children:Object(y.jsx)("div",{className:"chatOnlineWrapper",children:Object(y.jsx)(Ee,{})})})]})]})]})};var We=function(){var e=Object(s.useContext)(I).user;return Object(y.jsx)(g.a,{children:Object(y.jsxs)(Se.d,{children:[Object(y.jsx)(Se.b,{exact:!0,path:"/",children:e?Object(y.jsx)(ye,{}):Object(y.jsx)(Ce,{})}),Object(y.jsx)(Se.b,{path:"/login",children:e?Object(y.jsx)(Se.a,{to:"/"}):Object(y.jsx)(Ce,{})}),Object(y.jsx)(Se.b,{path:"/register",children:e?Object(y.jsx)(Se.a,{to:"/"}):Object(y.jsx)(Fe,{})}),Object(y.jsx)(Se.b,{path:"/messenger",children:e?Object(y.jsx)(De,{}):Object(y.jsx)(Se.a,{to:"/"})}),Object(y.jsx)(Se.b,{path:"/profile/:username",children:Object(y.jsx)(Le,{})}),Object(y.jsx)(Se.b,{path:"/tracker",children:Object(y.jsx)(Re,{})})]})})};a(148);r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(C,{children:Object(y.jsx)(We,{})})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.36628374.chunk.js.map