(this["webpackJsonppindureta-front"]=this["webpackJsonppindureta-front"]||[]).push([[0],{120:function(e,t,a){e.exports=a(155)},154:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(18),i=a.n(o),u=a(26),s=a(14),m=a(89),d=a.n(m),p="pindureta",f="@".concat(p,":flashMessage"),b=d.a.create({baseURL:"https://pindureta-api.guizo.dev.br"});function E(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/auth/login",{email:t.email,password:t.password});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/products",{headers:{Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t,a){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(i.a.mark((function e(t,a,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/orders",{items:Object.values(a),value:n},{headers:{Authorization:"Bearer ".concat(t)}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=Object(n.createContext)({}),C=function(e){var t=e.children,a=Object(n.useState)((function(){var e=localStorage.getItem("@".concat(p,":user")),t=localStorage.getItem("@".concat(p,":userToken"));return e&&t?{user:JSON.parse(e),token:t}:{}})),l=Object(s.a)(a,2),c=l[0],o=l[1],m=Object(n.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:a=e.sent,n=a.user,r=a.token,localStorage.setItem("@".concat(p,":user"),JSON.stringify(n)),localStorage.setItem("@".concat(p,":userToken"),r),o({user:n,token:r});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),d=Object(n.useCallback)((function(){Object.entries(localStorage).map((function(e){return e[0]})).filter((function(e){return e.startsWith("@".concat(p,":"))&&e!==f})).map((function(e){return localStorage.removeItem(e)})),window.location.href="/login"}),[]);return r.a.createElement(y.Provider,{value:{data:c,login:m,logout:d}},t)},h=a(35),x=a(8),w=Object(n.createContext)({}),k=function(e){var t=e.children,a=Object(n.useState)([]),l=Object(s.a)(a,2),c=l[0],o=l[1],i=Object(n.useCallback)((function(e){return c.find((function(t){return t._id===e}))}),[c]);return r.a.createElement(w.Provider,{value:{products:c,setProducts:o,getProduct:i}},t)},S=Object(n.createContext)({}),I=function(e){var t=e.children,a=Object(n.useContext)(w).getProduct,l=Object(n.useState)((function(){var e=localStorage.getItem("@".concat(p,":order"));return e?JSON.parse(e):{}})),c=Object(s.a)(l,2),o=c[0],i=c[1];Object(n.useEffect)((function(){localStorage.setItem("@".concat(p,":order"),JSON.stringify(o))}),[o]);var u=Object(n.useCallback)((function(e){var t=o[e];return t?t.quantity:0}),[o]),m=Object(n.useCallback)((function(e){delete o[e],i(Object(x.a)({},o))}),[o]),d=Object(n.useCallback)((function(e){var t=o[e];if(t)i(Object(x.a)(Object(x.a)({},o),{},Object(h.a)({},e,Object(x.a)(Object(x.a)({},t),{},{quantity:t.quantity+1,total:t.total+t.price}))));else{var n=a(e);if(!n)throw Error("Invalid product id");i(Object(x.a)(Object(x.a)({},o),{},Object(h.a)({},e,Object(x.a)(Object(x.a)({},n),{},{quantity:1,total:n.price}))))}}),[o,a]),f=Object(n.useCallback)((function(e){var t=o[e];t&&(t.quantity>1?i(Object(x.a)(Object(x.a)({},o),{},Object(h.a)({},e,Object(x.a)(Object(x.a)({},t),{},{quantity:t.quantity-1,total:t.total-t.price})))):m(e))}),[o,m]),b=Object(n.useCallback)((function(){i({}),localStorage.removeItem("@".concat(p,":order"))}),[]),E=Object(n.useCallback)((function(e){return Boolean(o[e])}),[o]),v=Object(n.useCallback)((function(){return Object.values(o).reduce((function(e,t){return e+t.total}),0)}),[o]);return r.a.createElement(S.Provider,{value:{getQuantityRow:u,increaseQuantity:d,decreaseQuantity:f,removeItem:m,getTotal:v,clear:b,hasProduct:E,order:o}},t)},P={clearCard:!1,payNow:!1,finish:!1,logout:!1,orderTableMore:!1},N=Object(n.createContext)({}),z=function(e){var t=e.children,a=Object(n.useState)(P),l=Object(s.a)(a,2),c=l[0],o=l[1],i=Object(n.useCallback)((function(e){o(Object(x.a)(Object(x.a)({},c),{},Object(h.a)({},e,!0)))}),[c]),u=Object(n.useCallback)((function(e){o(Object(x.a)(Object(x.a)({},c),{},Object(h.a)({},e,!1)))}),[c]);return r.a.createElement(N.Provider,{value:{isOpen:c,open:i,close:u}},t)},T=a(13),q=a(185),F=a(187),B=a(106),W=a(189),L=a(190),_=a(206),J=a(205),R=a(191),$=a(192),A=a(37);function M(e){var t={};return e.inner.forEach((function(e){t[e.path]=e.message})),t}var Q=a(28);function D(e){localStorage.setItem(f,JSON.stringify(e))}var G=Object(q.a)({card:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"300px"},cardContent:{padding:"1.5rem"},"@media (max-width: 480px)":{card:{width:"calc(100% - 8px)"},cardContent:{padding:"1rem","&:last-child":{paddingBottom:"1rem"}}}}),H=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),m=o[0],d=o[1],p=Object(n.useState)(null),b=Object(s.a)(p,2),E=b[0],v=b[1],g=G(),O=Object(n.useContext)(y).login;function j(){return(j=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=A.c().shape({email:A.d().required().email(),password:A.d().required()}),e.next=4,t.validate({email:a,password:m},{abortEarly:!1});case 4:return e.next=6,O({email:a,password:m});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0 instanceof A.a&&(n=M(e.t0),v(n)),Q.a.error("Login failed");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=localStorage.getItem(f);if(e){var t=JSON.parse(e),a=t.level,n=t.message;Object(Q.a)(n,{type:a}),localStorage.removeItem(f)}}),[]),r.a.createElement(F.a,null,r.a.createElement(B.a,{variant:"h5",component:"h5",align:"center"},"Pindureta"),r.a.createElement(W.a,{className:g.card,variant:"outlined"},r.a.createElement(L.a,{className:g.cardContent},r.a.createElement(_.a,null,r.a.createElement(J.a,{label:"E-mail",type:"email",variant:"outlined",value:a,onChange:function(e){return t=e.target.value,(null===E||void 0===E?void 0:E.email)&&v(Object(x.a)(Object(x.a)({},E),{},{email:""})),void l(t);var t},error:Boolean(null===E||void 0===E?void 0:E.email),fullWidth:!0}),(null===E||void 0===E?void 0:E.email)&&r.a.createElement(R.a,{error:!0},E.email)),r.a.createElement(_.a,{mt:2},r.a.createElement(J.a,{label:"Password",type:"password",variant:"outlined",value:m,onChange:function(e){return t=e.target.value,(null===E||void 0===E?void 0:E.password)&&v(Object(x.a)(Object(x.a)({},E),{},{password:""})),void d(t);var t},error:Boolean(null===E||void 0===E?void 0:E.password),fullWidth:!0}),(null===E||void 0===E?void 0:E.password)&&r.a.createElement(R.a,{error:!0},E.password)),r.a.createElement(_.a,{mt:2,textAlign:"center"},r.a.createElement($.a,{type:"button",variant:"contained",color:"primary",onClick:function(){return function(){return j.apply(this,arguments)}()}},"Login")))))},U=a(157),V=a(210),Y=a(56),K=a.n(Y),X=a(39),Z=a(97),ee=a.n(Z),te=function(e){var t=e.disabled;return r.a.createElement($.a,{type:"button",variant:"contained",color:"primary",size:"large",disabled:t},r.a.createElement(ee.a,null),r.a.createElement(V.a,{xsDown:!0},r.a.createElement(_.a,{ml:.5},"Go to Cart")))},ae=a(211),ne=a(193),re=a(194),le=function(){var e=Object(n.useContext)(S).clear,t=Object(n.useContext)(N),a=t.close,l=t.isOpen;return r.a.createElement(ae.a,{open:l.clearCard,onClose:function(){return a("clearCard")},"aria-labelledby":"form-dialog-title"},r.a.createElement(ne.a,null,"Clear cart?"),r.a.createElement(re.a,null,r.a.createElement($.a,{onClick:function(){return a("clearCard")},variant:"contained",color:"secondary"},"Cancel"),r.a.createElement(_.a,{mx:1}),r.a.createElement($.a,{onClick:function(){e(),a("clearCard")},variant:"contained",color:"primary"},"Confirm")))},ce=Object(q.a)({paper:{position:"fixed",boxSizing:"border-box",bottom:0,left:0,width:"100%",backgroundColor:"#bdbdbd",padding:"0.5rem 2rem"},"@media(max-width:480px)":{paper:{padding:"0.5rem"}}}),oe=function(){var e=Object(n.useContext)(S).getTotal,t=Object(n.useContext)(N).open,a=ce();return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{className:a.paper,square:!0},r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"no-wrap"},r.a.createElement($.a,{type:"button",variant:"contained",color:"secondary",size:"large",onClick:function(){return t("clearCard")}},r.a.createElement(K.a,null),r.a.createElement(V.a,{xsDown:!0},r.a.createElement(_.a,{ml:.5},"Clear Cart"))),r.a.createElement(_.a,null,r.a.createElement(B.a,{component:"span",style:{marginRight:"1rem"}},r.a.createElement(V.a,{xsDown:!0},r.a.createElement("b",null,"Total:")," "),"$",e()),e()>0?r.a.createElement(X.b,{to:"/cart"},r.a.createElement(te,null)):r.a.createElement(te,{disabled:!0})))),r.a.createElement(le,null))},ie=function(){var e=Object(n.useContext)(N),t=e.close,a=e.isOpen,l=Object(n.useContext)(y).logout;return r.a.createElement(ae.a,{open:a.logout,onClose:function(){return t("logout")},"aria-labelledby":"form-dialog-title"},r.a.createElement(ne.a,null,"Logout?"),r.a.createElement(re.a,null,r.a.createElement($.a,{onClick:function(){return t("logout")},variant:"contained",color:"secondary"},"Cancel"),r.a.createElement(_.a,{mx:1}),r.a.createElement($.a,{onClick:function(){l(),t("logout")},variant:"contained",color:"primary"},"Confirm")))},ue=a(98),se=a.n(ue),me=function(){var e=Object(n.useContext)(N).open;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{type:"button",variant:"outlined",color:"secondary",onClick:function(){return e("logout")}},r.a.createElement(se.a,null),r.a.createElement(_.a,{ml:.5},"Logout")),r.a.createElement(ie,null))},de=a(209),pe=a(196),fe=a(100),be=a.n(fe),Ee=a(99),ve=a.n(Ee),ge=a(195),Oe=function(e){var t=e.productId,a=Object(n.useContext)(S),l=a.getQuantityRow,c=a.increaseQuantity,o=a.decreaseQuantity;return r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(ge.a,{onClick:function(){return o(t)},"aria-label":"decrease quantity"},r.a.createElement(ve.a,{fontSize:"large"})),r.a.createElement(_.a,{mx:.5},r.a.createElement(B.a,null,l(t))),r.a.createElement(ge.a,{onClick:function(){return c(t)},"aria-label":"increase quantify"},r.a.createElement(be.a,{fontSize:"large"})))},je=function(e){var t=e.products,a=Object(n.useContext)(S).hasProduct;return r.a.createElement(_.a,{style:{marginBottom:"70px"}},r.a.createElement(pe.a,{container:!0,spacing:2},t&&t.map((function(e,t){return r.a.createElement(pe.a,{item:!0,xs:12,sm:6,md:4,key:t},r.a.createElement(U.a,{elevation:3,style:a(e._id)?{backgroundColor:"#90ee90"}:{}},r.a.createElement(_.a,{p:3,textAlign:"center"},r.a.createElement(B.a,{variant:"h6",component:"h6",noWrap:!0},e.name),r.a.createElement(_.a,{my:2},r.a.createElement(B.a,null,"$",e.price)),r.a.createElement(_.a,null,r.a.createElement(Oe,{productId:e._id})))))}))))},ye=function(){var e=Object(n.useContext)(w),t=e.products,a=e.setProducts,l=Object(n.useContext)(y),c=l.data,o=l.logout;return Object(n.useEffect)((function(){(function(e){return g.apply(this,arguments)})(c.token).then((function(e){a(e)})).catch((function(e){403===e.response.status&&o(),Q.a.error("Error fetching products list")}))}),[a,c.token,o]),r.a.createElement(F.a,null,r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"space-between",mb:3},r.a.createElement(B.a,{variant:"h5",component:"h5"},"Products"),r.a.createElement(me,null)),t.length>0?r.a.createElement(je,{products:t}):r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(de.a,{severity:"warning"},"No products available")),r.a.createElement(oe,null))},Ce=a(197),he=a(198),xe=function(){var e=Object(n.useContext)(y),t=e.logout,a=e.data,l=Object(n.useContext)(N),c=l.isOpen,o=l.open,m=l.close,d=Object(n.useContext)(S),p=d.order,f=d.getTotal,b=Object(n.useState)(f()),E=Object(s.a)(b,2),v=E[0],g=E[1],j=Object(n.useState)(null),C=Object(s.a)(j,2),h=C[0],w=C[1],k=function(){var e=Object(u.a)(i.a.mark((function e(){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=A.c().shape({value:A.b().required().min(0)}),e.next=4,n.validate({value:v},{abortEarly:!1});case 4:return e.next=6,O(a.token,p,v);case 6:m("payNow"),o("finish"),e.next=18;break;case 10:if(e.prev=10,e.t0=e.catch(0),e.t0 instanceof A.a&&(r=M(e.t0),w(r)),403!==e.t0.response.status){e.next=17;break}return D({level:"error",message:"Session expired"}),t(),e.abrupt("return");case 17:Q.a.error("Payment failed");case 18:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(ae.a,{open:c.payNow,onClose:function(){return m("payNow")},"aria-labelledby":"form-dialog-title"},r.a.createElement(ne.a,{id:"form-dialog-title"},"Pay Now"),r.a.createElement(Ce.a,null,r.a.createElement(he.a,null,"Inform the value you are paying now"),r.a.createElement(_.a,{my:1},r.a.createElement(B.a,null,"Total: $",f())),r.a.createElement(_.a,{mb:1},r.a.createElement(J.a,{margin:"dense",label:"Value",type:"number",InputProps:{inputProps:{min:0}},value:v,onChange:function(e){return function(e){(null===h||void 0===h?void 0:h.total)&&w(Object(x.a)(Object(x.a)({},h),{},{value:""})),g(e)}(parseInt(e.target.value))},error:Boolean(null===h||void 0===h?void 0:h.total),autoFocus:!0,fullWidth:!0}),(null===h||void 0===h?void 0:h.total)&&r.a.createElement(R.a,{error:!0},h.total))),r.a.createElement(re.a,null,r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},r.a.createElement($.a,{onClick:function(){return m("payNow")},variant:"contained",color:"secondary"},"Cancel"),r.a.createElement(_.a,{mx:1}),r.a.createElement($.a,{onClick:k,variant:"contained",color:"primary"},"Pay"))))},we=a(101),ke=a.n(we),Se=function(){var e=Object(n.useContext)(S).clear,t=Object(n.useContext)(N),a=t.isOpen,l=t.close,c=Object(n.useContext)(y).logout,o=Object(n.useState)(5),i=Object(s.a)(o,2),u=i[0],m=i[1],d=function(){c(),l("finish")},p=Object(n.useRef)(u);p.current=u;return r.a.createElement(ae.a,{onEntered:function(){return function(){var e=setInterval((function(){p.current>0?m(p.current-1):(clearInterval(e),d())}),1e3)}()},open:a.finish,onClose:d,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ce.a,null,r.a.createElement(_.a,{mb:2,display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(ke.a,{fontSize:"large",style:{color:"#4CAF50"}}),r.a.createElement(B.a,null,"Order received")),r.a.createElement(_.a,{my:1},r.a.createElement(B.a,null,"You'll be logged out in ",u,"s"))),r.a.createElement(re.a,null,r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},r.a.createElement($.a,{onClick:function(){e(),window.location.href="/"},variant:"contained",color:"secondary"},"Continue"),r.a.createElement(_.a,{mx:1}),r.a.createElement($.a,{onClick:d,variant:"contained",color:"primary"},"Finish"))))},Ie=function(){var e=Object(n.useContext)(N).open,t=Object(n.useContext)(S).order,a=Object(n.useContext)(y),l=a.data,c=a.logout,o=function(){var a=Object(u.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O(l.token,t);case 3:e("finish"),a.next=13;break;case 6:if(a.prev=6,a.t0=a.catch(0),403!==a.t0.response.status){a.next=12;break}return D({level:"error",message:"Session expired"}),c(),a.abrupt("return");case 12:Q.a.error("Payment failed");case 13:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"center",mt:5},r.a.createElement($.a,{type:"button",variant:"contained",size:"large",color:"primary",style:{marginRight:"2rem"},onClick:function(){return e("payNow")}},"Pay",r.a.createElement("br",null),"Now"),r.a.createElement($.a,{variant:"contained",size:"large",color:"secondary",onClick:function(){return o()}},"Pay",r.a.createElement("br",null),"Later")),r.a.createElement(xe,null),r.a.createElement(Se,null))},Pe=a(103),Ne=a.n(Pe),ze=a(199),Te=a(200),qe=a(201),Fe=a(202),Be=a(203),We=a(204),Le=a(102),_e=a.n(Le),Je=function(e){var t=e.product,a="orderTableMore",l=Object(n.useContext)(N),c=l.isOpen,o=l.close,i=Object(n.useContext)(S).removeItem;return r.a.createElement(ae.a,{open:c[a],onClose:function(){return o(a)},"aria-labelledby":"form-dialog-title"},r.a.createElement(Ce.a,{style:{paddingTop:"8px"}},r.a.createElement(_.a,{textAlign:"center"},r.a.createElement(B.a,null,t.name)),r.a.createElement(Oe,{productId:t._id}),r.a.createElement($.a,{onClick:function(){i(t._id),o(a)},variant:"contained",color:"default",size:"small",fullWidth:!0},r.a.createElement(K.a,{fontSize:"large"}),r.a.createElement(_.a,{ml:.5},"Remove"))),r.a.createElement(re.a,null,r.a.createElement($.a,{onClick:function(){return o(a)},variant:"contained",color:"secondary",fullWidth:!0},"Close")))};function Re(){return window.innerWidth}var $e=function(){var e=Object(n.useContext)(S),t=e.order,a=e.removeItem,l=Object(n.useContext)(N).open,c=Object(n.useState)({}),o=Object(s.a)(c,2),i=o[0],u=o[1],m=function(){var e=Object(n.useState)(Re()),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(Re())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:a,isMobile:a<480}}().isMobile;return r.a.createElement(ze.a,{component:U.a},m?r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.a,{"aria-label":"simple table"},r.a.createElement(qe.a,null,r.a.createElement(Fe.a,null,r.a.createElement(Be.a,null,"Product"),r.a.createElement(Be.a,{align:"center"},r.a.createElement(B.a,null,"Total")),r.a.createElement(Be.a,null))),r.a.createElement(We.a,null,Object.values(t).map((function(e){return r.a.createElement(Fe.a,{key:e._id},r.a.createElement(Be.a,{component:"th",scope:"row"},r.a.createElement(B.a,null,e.name)),r.a.createElement(Be.a,{align:"center"},r.a.createElement(B.a,null,"$",e.price," x ",e.quantity," = $",e.total)),r.a.createElement(Be.a,{align:"right"},r.a.createElement(ge.a,{"aria-label":"more",onClick:function(){return u(e),void l("orderTableMore")}},r.a.createElement(_e.a,null))))})))),r.a.createElement(Je,{product:i})):r.a.createElement(Te.a,{"aria-label":"simple table"},r.a.createElement(qe.a,null,r.a.createElement(Fe.a,null,r.a.createElement(Be.a,null,"Product"),r.a.createElement(Be.a,{align:"center"},r.a.createElement(B.a,{noWrap:!0},"Price ($)")),r.a.createElement(Be.a,{align:"center"},"Quantity"),r.a.createElement(Be.a,{align:"center"},r.a.createElement(B.a,{noWrap:!0},"Total ($)")))),r.a.createElement(We.a,null,Object.values(t).map((function(e){return r.a.createElement(Fe.a,{key:e._id},r.a.createElement(Be.a,{component:"th",scope:"row"},r.a.createElement(_.a,{display:"flex",alignItems:"center"},r.a.createElement(ge.a,{onClick:function(){return a(e._id)},"aria-label":"remove"},r.a.createElement(K.a,{fontSize:"large"})),r.a.createElement(_.a,{ml:.5},e.name))),r.a.createElement(Be.a,{align:"center"},e.price),r.a.createElement(Be.a,{align:"center"},r.a.createElement(Oe,{productId:e._id})),r.a.createElement(Be.a,{align:"center"},e.total))})))))},Ae=function(){var e=Object(n.useContext)(S).getTotal;return r.a.createElement(F.a,null,r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"space-between",mb:1},r.a.createElement(B.a,{variant:"h5",component:"h5"},"Cart"),r.a.createElement(me,null)),r.a.createElement(_.a,{mb:3},r.a.createElement(X.b,{to:"/"},r.a.createElement($.a,{type:"button",variant:"contained",size:"medium"},r.a.createElement(_.a,{mr:.5,display:"flex",alignItems:"center"},r.a.createElement(Ne.a,null)),"Return to list"))),e()>0?r.a.createElement(r.a.Fragment,null,r.a.createElement($e,null),r.a.createElement(_.a,{my:2,textAlign:"right"},r.a.createElement(B.a,{variant:"h5",component:"h5"},"Total: $",e())),r.a.createElement(Ie,null)):r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(de.a,{severity:"warning"},"Empty card")))},Me=a(104),Qe=function(e){var t=e.isPrivate,a=void 0!==t&&t,l=e.component,c=Object(Me.a)(e,["isPrivate","component"]),o=Object(n.useContext)(y).data;return r.a.createElement(T.b,Object.assign({},c,{render:function(e){var t=e.location;return a===Boolean(o.user)?r.a.createElement(l,null):r.a.createElement(T.a,{to:{pathname:a?"/login":"/",state:{from:t}}})}}))},De=function(){return r.a.createElement(T.d,null,r.a.createElement(Qe,{path:"/login",exact:!0,component:H}),r.a.createElement(Qe,{path:"/",exact:!0,component:ye,isPrivate:!0}),r.a.createElement(Qe,{path:"/cart",exact:!0,component:Ae,isPrivate:!0}))},Ge=(a(153),a(207));a(154);Q.a.configure({position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});var He=function(){return r.a.createElement(X.a,null,r.a.createElement(C,null,r.a.createElement(k,null,r.a.createElement(I,null,r.a.createElement(z,null,r.a.createElement(Ge.b,{injectFirst:!0},r.a.createElement(De,null)))))))},Ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,213)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(He,null)),document.getElementById("root")),Ue()}},[[120,1,2]]]);
//# sourceMappingURL=main.03a20889.chunk.js.map