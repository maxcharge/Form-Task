(this["webpackJsonpform-task"]=this["webpackJsonpform-task"]||[]).push([[0],{32:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),o=n(23),a=n.n(o),s=(n(32),n.p+"static/media/GreenBanner.354ca16a.png"),l=n(27),c={formContainer:{minHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 2px 5px 0 #009999",margin:"auto",marginTop:"20px",marginBottom:"20px",width:"80%",maxWidth:"300px",alignItems:"center",justifyItems:"center",padding:"10px",background:"linear-gradient(to right, #009999 0%, #99ffcc 100%)",borderRadius:"15px",backgroundColor:"red"},heading:{width:"100%",display:"flex",color:"#404040",justifyContent:"center",margin:"10px",fontWeight:"Bold"},formBox:{display:"flex",flexDirection:"column",minWidth:"200px",marginLeft:"10px",marginRight:"10px",height:"100px",marginBottom:"20px",padding:"10px",boxShadow:"0 5px 10px 0 rgba(0,0,0,0.2)",justifyContent:"center",justifyItems:"center",alignContent:"center",alignItems:"center"},inputBox:{border:"1px solid #404040",backgroundColor:"rgb(255, 75, 43, 0)",width:"auto",color:"#404040",display:"flex",borderRadius:"2px",fontSize:"14px",padding:"10px",margin:"10px",marginRight:"0px",marginLeft:"0px",outline:"none"},btn:{display:"flex",height:"30px",width:"50%",fontSize:"14px",fontWeight:"bold",borderRadius:"5px",border:"0.1px solid #99ffcc",backgroundColor:"rgb(255, 75, 43, 0)",boxShadow:"0 2px 5px 0 #009999",color:"#404040",alignContent:"center",justifyContent:"center",alignItems:"center",padding:"2px",outline:"none",margin:"auto",marginTop:"50px",marginBottom:"50px"},errors:{color:"#cc3300",margin:"5px",marginBottom:"20px"},text:{textAlign:"left",color:"#404040",margin:"10px",marginLeft:"0px",marginBottom:"5px",fontWeight:"Bold"},icon:{marginTop:"20px"}},d=n(0),m=n(26),p=n(3),x=n(2);var h=function(){var e=Object(p.f)(),t={name:"rohit",email:"rroo@gmail.com",password:"1234567890"};return Object(x.jsxs)("div",{style:c.formContainer,children:[Object(x.jsx)("div",{style:c.icon,children:Object(x.jsx)(d.b.Provider,{value:{size:"100px",color:"#404040"},children:Object(x.jsx)(m.a,{})})}),Object(x.jsx)("div",{style:c.formbox,children:Object(x.jsx)(l.a,{initialValues:{name:"",email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address",e.password?e.password.length<5&&(t.password="Minimum 5"):t.password="Required"):t.email="Required",e.name?e.name.length<5&&(t.name="Minimum 5"):t.name="Required",t},onSubmit:function(n,i){var r=i.setSubmitting,o=i.resetForm;setTimeout((function(){console.log(n),t.email===n.email&&t.password===n.password&&t.name===n.name?e.push("/home"):(alert("Wrong Data Enter Again name: rohit,email: rroo@gmail.com,password: 1234567890,"),o()),r(!1)}),1e3)},children:function(e){var t=e.values,n=e.errors,i=e.touched,r=e.handleChange,o=e.handleBlur,a=e.handleSubmit,s=e.isSubmitting;return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:a,children:[Object(x.jsx)("h5",{style:c.text,children:"Name"}),Object(x.jsx)("input",{style:c.inputBox,type:"name",name:"name",onChange:r,onBlur:o,value:t.name,placeholder:"Joh Doe"}),Object(x.jsx)("h6",{style:c.errors,children:n.name&&i.name&&n.name}),Object(x.jsx)("h5",{style:c.text,children:"Email"}),Object(x.jsx)("input",{style:c.inputBox,type:"email",name:"email",onChange:r,onBlur:o,value:t.email,placeholder:"example@domain.com"}),Object(x.jsx)("h6",{style:c.errors,children:n.email&&i.email&&n.email}),Object(x.jsx)("h5",{style:c.text,children:"Password"}),Object(x.jsx)("input",{style:c.inputBox,type:"password",name:"password",onChange:r,onBlur:o,value:t.password}),Object(x.jsx)("h6",{style:c.errors,children:n.password&&i.password&&n.password}),Object(x.jsx)("button",{type:"submit",disabled:s,style:c.btn,children:s?"Wait..":"Submit"})]})})}})})]})};var u=function(){return Object(x.jsx)("h1",{children:"Hello  World"})},g=n(19);var b=function(){return Object(x.jsx)("div",{className:"App",style:{backgroundImage:"url(".concat(s,")"),backgroundSize:"cover",position:"fixed",minHeight:"100%",minWidth:"100%",backgroundPosition:"center"},children:Object(x.jsx)(g.a,{children:Object(x.jsx)("div",{children:Object(x.jsxs)(p.c,{children:[Object(x.jsx)(p.a,{path:"/home",children:Object(x.jsx)(u,{})}),Object(x.jsx)(p.a,{path:"/",children:Object(x.jsx)(h,{})})]})})})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),o(e),a(e)}))};a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(b,{})}),document.getElementById("root")),j()}},[[41,1,2]]]);
//# sourceMappingURL=main.27fef6b8.chunk.js.map