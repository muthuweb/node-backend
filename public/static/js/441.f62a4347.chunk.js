"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[441],{441:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(683),r=n(165),s=n(861),c=n(439),i=n(791),l=n(243),o=n(184);function u(e){var t=e.updatePost,n=e.refreshPost,a=e.isActive,u=e.editData,d=(0,i.useState)(u.title),p=(0,c.Z)(d,2),h=p[0],m=p[1],f=(0,i.useState)(u.icon),v=(0,c.Z)(f,2),x=v[0],b=v[1],j=(0,i.useState)(u.url),g=(0,c.Z)(j,2),N=g[0],Z=g[1],y=(0,i.useState)(!1),w=(0,c.Z)(y,2),k=w[0],S=w[1],C=(0,i.useState)(),A=(0,c.Z)(C,2),L=A[0],D=A[1],P=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),(t=new FormData).append("title",h),t.append("icon",x),t.append("url",N),e.prev=5,e.next=8,l.Z.post("".concat("http://localhost:8000/api/muthu-dev","/social"),t).then((function(){return n()}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),D(e.t0.message+" please try again"||0);case 13:S(!1);case 14:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.patch("".concat("http://localhost:8000/api/muthu-dev","/social/").concat(t),{title:h,icon:x,url:N}).then((function(){return n()}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{className:"card",children:[(0,o.jsxs)("div",{className:"card-header d-flex align-items-center justify-content-between ps-3",children:["Add new Social",(0,o.jsx)("div",{className:"action-group",children:(0,o.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){a(!1)},children:(0,o.jsx)("i",{className:"bi bi-x-lg"})})})]}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t?F(u.id):P(),m(""),b(""),Z(""),a(!1)},children:[(0,o.jsx)("input",{type:"text",className:"form-control mb-3",placeholder:"Title",name:"title",value:h,onChange:function(e){return m(e.target.value)}}),(0,o.jsx)("input",{type:"text",className:"form-control mb-3",placeholder:"Icon html",name:"icon",value:x,onChange:function(e){return b(e.target.value)}}),(0,o.jsx)("input",{type:"url",className:"form-control mb-3",placeholder:"URL",name:"url",value:N,onChange:function(e){return Z(e.target.value)}}),(0,o.jsx)("button",{className:"btn btn-primary",type:"submit",disabled:!(h&&N&&x),children:"Add"})]}),k&&(0,o.jsx)("div",{className:"alert alert-primary mt-3",role:"alert",children:"Loading..."}),L&&(0,o.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:L})]})]})}function d(){var e=(0,i.useState)(!1),t=(0,c.Z)(e,2),n=t[0],d=t[1],p=(0,i.useState)(!1),h=(0,c.Z)(p,2),m=h[0],f=h[1],v=(0,i.useState)(!1),x=(0,c.Z)(v,2),b=x[0],j=x[1],g=(0,i.useState)(!1),N=(0,c.Z)(g,2),Z=N[0],y=N[1],w=(0,i.useState)(),k=(0,c.Z)(w,2),S=k[0],C=k[1],A=(0,i.useState)({title:"",icon:"",url:""}),L=(0,c.Z)(A,2),D=L[0],P=L[1],F=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,l.Z.get("".concat("http://localhost:8000/api/muthu-dev","/social")).then((function(e){return d(e.data)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),C(e.t0.message||"Something went wrong");case 9:y(!1);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.delete("".concat("http://localhost:8000/api/muthu-dev","/social/").concat(t));case 3:F(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){F()}),[]);return(0,o.jsx)(i.Fragment,{children:(0,o.jsxs)("div",{className:"card",id:"card",children:[(0,o.jsx)("div",{className:"card-header",children:"Social List"}),(0,o.jsxs)("div",{className:"card-body",children:[Z&&(0,o.jsx)("div",{className:"alert alert-primary mt-3",role:"alert",children:"Loading post ..."}),S&&(0,o.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:S}),n&&(0,o.jsx)("div",{className:"row",children:n.map((function(e){return(0,o.jsx)("div",{className:"col-4 mb-4",children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsxs)("div",{className:"card-header d-flex align-items-center justify-content-between ps-3",children:[e.title," ",(0,o.jsxs)("div",{className:"action-group",children:[(0,o.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){var t;t=(0,a.Z)({},e),P(t),f(!0),j(!0)},children:(0,o.jsx)("i",{className:"bi bi-pencil-square"})}),(0,o.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){I(e.id)},children:(0,o.jsx)("i",{className:"bi bi-x-lg"})})]})]}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:e.icon}}),e.description]})]})},e.id)}))}),b&&(0,o.jsx)(u,{editData:D,updatePost:m,isActive:function(e){j(e)},refreshPost:F}),!b&&!Z&&(0,o.jsx)("button",{className:"btn btn-info",onClick:function(){return j(!0)},children:"Add new"})]})]})})}function p(){return(0,o.jsx)("div",{className:"social-panel",children:(0,o.jsx)(d,{})})}}}]);
//# sourceMappingURL=441.f62a4347.chunk.js.map