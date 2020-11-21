(this["webpackJsonplegal-aid"]=this["webpackJsonplegal-aid"]||[]).push([[0],{64:function(e,t,a){e.exports=a(95)},69:function(e,t,a){},70:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),i=a.n(r),s=(a(69),a(20),a(7)),o=a(8),c=a(13),u=a(12),m=(a(70),a(2)),d=a(21),h=a(6),g=a.n(h),p=(a(27),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).register=function(){return n.props.history.push("/register")},n.onChangeEmail=n.onChangeEmail.bind(Object(m.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(m.a)(n)),n.onSubmit=n.onSubmit.bind(Object(m.a)(n)),n.state={email:"",password:"",errorMessage:null,loading:!1},n}return Object(o.a)(a,[{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;this.setState({loading:!0}),e.preventDefault(),console.log("Form submitted:"),console.log("email: ".concat(this.state.email)),console.log("password: ".concat(this.state.password));var a={email:this.state.email,password:this.state.password};g.a.auth().signInWithEmailAndPassword(a.email,a.password).then((function(e){var n=a.email.replace(/[^0-9a-z]/gi,"-");g.a.database().ref("users/"+n+"/admin").once("value",(function(e){e.exists()?"admin"===e.val()?(t.props.history.push("/admin"),t.setState({loading:!1})):(t.props.history.push("/home"),t.setState({loading:!1})):t.props.history.push("/home")}))})).catch((function(e){t.setState({loading:!1}),t.setState({errorMessage:e.message})})),this.setState({email:"",password:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"submit-form"},l.a.createElement("div",{style:{marginTop:10,alignItems:"center",justifyContent:"center"}},this.state.loading?"Loading...":null,"\n",l.a.createElement("h3",null,"Login"),l.a.createElement("p",{style:{color:"red"}}," ",this.state.errorMessage),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.email,onChange:this.onChangeEmail})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.onChangePassword})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-primary"}))),l.a.createElement(d.a,{variant:"link",onClick:this.register.bind(this)},"No account? Register"))),l.a.createElement("div",{className:"col-md-3"}))}}]),a}(n.Component)),b=(a(47),a(73),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).login=function(){return n.props.history.push("/Legal")},n.onChangeUsername=n.onChangeUsername.bind(Object(m.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(m.a)(n)),n.onChangeTellphone=n.onChangeTellphone.bind(Object(m.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(m.a)(n)),n.onSubmit=n.onSubmit.bind(Object(m.a)(n)),n.state={displayName:"",email:"",tellphone:"",password:"",loading:!1,errorMessage:null},n}return Object(o.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({displayName:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeTellphone",value:function(e){this.setState({tellphone:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;this.setState({loading:!0}),e.preventDefault(),console.log("Form submitted:"),console.log("displayName: ".concat(this.state.displayName)),console.log("email: ".concat(this.state.email)),console.log("tellphone: ".concat(this.state.tellphone)),console.log("password: ".concat(this.state.password)),g.a.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){return t.props.history.push("/Legal"),e.user.updateProfile({displayName:t.state.displayName,phoneNumber:t.state.tellphone})})).catch((function(e){console.log(e),t.setState({errorMessage:e.message})})),this.setState({displayName:"",email:"",tellphone:"",password:"",loading:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"submit-form"},this.state.loading?"Loading...":null,l.a.createElement("h3",null,"Register"),l.a.createElement("p",{style:{color:"red"}},this.state.errorMessage),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Usename: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.displayName,onChange:this.onChangeUsername})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.email,onChange:this.onChangeEmail})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone Number: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.tellphone,onChange:this.onChangeTellphone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.onChangePassword})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Register",className:"btn btn-primary"}))),l.a.createElement(d.a,{variant:"link",onClick:this.login.bind(this)},"Back to Login")))}}]),a}(n.Component)),v=new(function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return g.a.database().ref("/LegalAid")}},{key:"getUser",value:function(){var e=g.a.auth().currentUser;this.setState({currentUser:e})}},{key:"create",value:function(e){return g.a.database().ref("/LegalAid").push(e)}},{key:"update",value:function(e,t){return g.a.database().ref("/LegalAid").child(e).update(t)}},{key:"delete",value:function(e){return g.a.database().ref("/LegalAid").child(e).remove()}},{key:"deleteAll",value:function(){return g.a.database().ref("/LegalAid").remove()}}]),e}()),f=a(99),E=a(62),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).searchFilterFunction=function(e){console.log(e);var t=e,a=n.state.tutorials.filter((function(e){return String(e.District).includes(t)}));n.setState({tutorials:a})},n.all=function(){v.getAll().on("value",n.onDataChange)},n.refreshList=n.refreshList.bind(Object(m.a)(n)),n.Logout=n.Logout.bind(Object(m.a)(n)),n.setActiveTutorial=n.setActiveTutorial.bind(Object(m.a)(n)),n.removeAllTutorials=n.removeAllTutorials.bind(Object(m.a)(n)),n.onDataChange=n.onDataChange.bind(Object(m.a)(n)),n.search=n.search.bind(Object(m.a)(n)),n.onSubmit=n.onSubmit.bind(Object(m.a)(n)),n.state={tutorials:[],data:[],currentTutorial:null,currentIndex:-1,admin:!1,user:!1,email:"",loading:!1,search:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){v.getAll().on("value",this.onDataChange)}},{key:"componentWillUnmount",value:function(){v.getAll().off("value",this.onDataChange)}},{key:"onDataChange",value:function(e){var t=[];e.forEach((function(e){var a=e.key,n=e.val();t.push({key:a,Name:n.Name,Email:n.Email,Tellphone:n.Tellphone,District:n.District,Address:n.Address,Description:n.Description})})),this.setState({tutorials:t}),this.arrayholder=t}},{key:"refreshList",value:function(){this.setState({currentTutorial:null,currentIndex:-1})}},{key:"setActiveTutorial",value:function(e,t){this.setState({currentTutorial:e,currentIndex:t})}},{key:"removeAllTutorials",value:function(){var e=this;v.deleteAll().then((function(){e.refreshList()})).catch((function(e){console.log(e)}))}},{key:"search",value:function(e){this.setState({search:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("email: ".concat(this.state.search));var t=this.state.search,a=this.state.tutorials.filter((function(e){return String(e.approvalVariable).includes(t)}));console.log(this.state.tutorials),this.setState({tutorials:a})}},{key:"Logout",value:function(){g.a.auth().signOut(),this.props.history.push("/Legal")}},{key:"render",value:function(){var e=this,t=this.state,a=t.tutorials,n=t.currentIndex;return l.a.createElement("div",{className:"container",style:{backgroundColor:"#DCDCDC"}},l.a.createElement("h4",null,"Legal Aid List"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement(f.a,{id:"dropdown-basic-button",title:"Select Discrit"},l.a.createElement(E.a.Item,null," ",l.a.createElement("div",null,l.a.createElement(d.a,{style:{backgroundColor:"#000080",padding:10},onClick:this.all.bind(this)},"All"))),l.a.createElement(E.a.Item,null,a&&a.map((function(t,a){return l.a.createElement("div",{className:"d-flex justify-content-around",key:a,style:{borderBottomColor:"orange",padding:10}},l.a.createElement(d.a,{style:{backgroundColor:"#000080",padding:10},key:a,onClick:e.searchFilterFunction.bind(e,t.District)},t.District))}))))),l.a.createElement("div",{className:"col-sm-4"}),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",style:{display:"flex",justifyContent:"flex-end",float:"right"},onClick:this.Logout},"Logout"))),"\n",l.a.createElement("div",null),l.a.createElement("div",{className:"row",style:{marginTop:20}},a&&a.map((function(t,a){return l.a.createElement("div",{className:"list-group-item "+(a===n?"active":""),onClick:function(){return e.setActiveTutorial(t,a)},key:a,style:{shadowColor:"black",shadowOffset:{width:0,height:2},shadowRadius:6,shadowOpacity:.26,elevation:8,padding:20,borderRadius:10,alignItems:"flex-start",marginBottom:10,marginLeft:10,marginRight:10}},l.a.createElement("p",null,l.a.createElement("strong",null," Name:"),"   ",t.Name),l.a.createElement("p",null,l.a.createElement("strong",null,"Address:"),"   ",t.Address),l.a.createElement("p",null,l.a.createElement("strong",null,"District:"),"   ",t.District),l.a.createElement("p",null,l.a.createElement("strong",null,"Email:"),"   ",t.Email),l.a.createElement("p",null,l.a.createElement("strong",null," Tellphone:"),"   ",t.Tellphone),l.a.createElement("p",null,l.a.createElement("strong",null," Description:"),"   ",t.Description))}))))}}]),a}(n.Component),C=a(11),N=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChangeName=n.onChangeName.bind(Object(m.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(m.a)(n)),n.onChangeTellphone=n.onChangeTellphone.bind(Object(m.a)(n)),n.onChangeAddress=n.onChangeAddress.bind(Object(m.a)(n)),n.onChangeDistrict=n.onChangeDistrict.bind(Object(m.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(m.a)(n)),n.updatePublished=n.updatePublished.bind(Object(m.a)(n)),n.updateTutorial=n.updateTutorial.bind(Object(m.a)(n)),n.deleteTutorial=n.deleteTutorial.bind(Object(m.a)(n)),n.state={currentTutorial:{key:null,Description:"",Email:"",Name:"",Logo:"",District:"",Address:"",Tellphone:"",confirm_agreement:!1,published:!1},message:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({currentTutorial:this.props.tutorial})}},{key:"onChangeName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTutorial:Object(C.a)(Object(C.a)({},e.currentTutorial),{},{Name:t})}}))}},{key:"onChangeEmail",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTutorial:Object(C.a)(Object(C.a)({},e.currentTutorial),{},{Email:t})}}))}},{key:"onChangeTellphone",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTutorial:Object(C.a)(Object(C.a)({},e.currentTutorial),{},{Tellphone:t})}}))}},{key:"onChangeDistrict",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTutorial:Object(C.a)(Object(C.a)({},e.currentTutorial),{},{District:t})}}))}},{key:"onChangeAddress",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTutorial:Object(C.a)(Object(C.a)({},e.currentTutorial),{},{Address:t})}}))}},{key:"onChangeDescription",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTutorial:Object(C.a)(Object(C.a)({},e.currentTutorial),{},{Description:t})}}))}},{key:"updatePublished",value:function(e){var t=this;v.update(this.state.currentTutorial.key,{published:e}).then((function(){t.setState((function(t){return{currentTutorial:Object(C.a)(Object(C.a)({},t.currentTutorial),{},{published:e}),message:"The status was updated successfully!"}}))})).catch((function(e){console.log(e)}))}},{key:"updateTutorial",value:function(){var e=this,t={Name:this.state.currentTutorial.Name,Email:this.state.currentTutorial.Email,Tellphone:this.state.currentTutorial.Tellphone,District:this.state.currentTutorial.District,Address:this.state.currentTutorial.Address,Description:this.state.currentTutorial.Description};v.update(this.state.currentTutorial.key,t).then((function(){e.setState({message:"updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteTutorial",value:function(){var e=this;v.delete(this.state.currentTutorial.key).then((function(){e.props.refreshList()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.currentTutorial;return l.a.createElement("div",null,l.a.createElement("h4",null,"Legal Aid"),e?l.a.createElement("div",{className:"edit-form"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Name"},"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"Name",value:e.Name,onChange:this.onChangeName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Email"},"Email"),l.a.createElement("input",{type:"text",className:"form-control",id:"Email",value:e.Email,onChange:this.onChangeEmail})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Tellphone"},"Phone Number"),l.a.createElement("input",{type:"text",className:"form-control",id:"Tellphone",value:e.Tellphone,onChange:this.onChangeTellphone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"District"},"District"),l.a.createElement("input",{type:"text",className:"form-control",id:"District",value:e.District,onChange:this.onChangeDistrict})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Address"},"Address"),l.a.createElement("input",{type:"text",className:"form-control",id:"Address",value:e.Address,onChange:this.onChangeAddress})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Description"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"Description",value:e.Description,onChange:this.onChangeDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("strong",null,"Status:")),e.published?"Published":"Pending")),l.a.createElement("button",{className:"badge badge-danger mr-2",onClick:this.deleteTutorial},"Delete"),l.a.createElement("button",{type:"submit",className:"badge badge-success",onClick:this.updateTutorial},"Update"),l.a.createElement("p",null,this.state.message)):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click Legal Aid...")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.tutorial;return t.currentTutorial.key!==a.key?{currentTutorial:a,message:""}:t.currentTutorial}}]),a}(n.Component),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).searchFilterFunction=function(e){console.log(e);var t=e,a=n.state.tutorials.filter((function(e){return String(e.District).includes(t)}));n.setState({tutorials:a}),console.log(n.state.tutorials)},n.all=function(){v.getAll().on("value",n.onDataChange)},n.refreshList=n.refreshList.bind(Object(m.a)(n)),n.setActiveTutorial=n.setActiveTutorial.bind(Object(m.a)(n)),n.removeAllTutorials=n.removeAllTutorials.bind(Object(m.a)(n)),n.Logout=n.Logout.bind(Object(m.a)(n)),n.addLegalAid=n.addLegalAid.bind(Object(m.a)(n)),n.onDataChange=n.onDataChange.bind(Object(m.a)(n)),n.state={tutorials:[],data:[],currentTutorial:null,currentIndex:-1,admin:!1,user:!1,email:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){v.getAll().on("value",this.onDataChange)}},{key:"componentWillUnmount",value:function(){v.getAll().off("value",this.onDataChange)}},{key:"onDataChange",value:function(e){var t=[];e.forEach((function(e){var a=e.key,n=e.val();t.push({key:a,Name:n.Name,Email:n.Email,Tellphone:n.Tellphone,District:n.District,Address:n.Address,Description:n.Description})})),this.setState({tutorials:t}),this.arrayholder=t}},{key:"refreshList",value:function(){this.setState({currentTutorial:null,currentIndex:-1})}},{key:"setActiveTutorial",value:function(e,t){this.setState({currentTutorial:e,currentIndex:t})}},{key:"removeAllTutorials",value:function(){var e=this;v.deleteAll().then((function(){e.refreshList()})).catch((function(e){console.log(e)}))}},{key:"Logout",value:function(){g.a.auth().signOut(),this.props.history.push("/Legal")}},{key:"addLegalAid",value:function(){this.props.history.push("/addLegalAid")}},{key:"render",value:function(){var e=this,t=this.state,a=t.tutorials,n=t.currentTutorial,r=t.currentIndex;return l.a.createElement("div",{className:"container",style:{backgroundColor:"#DCDCDC"}},l.a.createElement("h4",null,"Legal Aid List"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement(f.a,{id:"dropdown-basic-button",title:"Select Discrit"},l.a.createElement(E.a.Item,null," ",l.a.createElement("div",null,l.a.createElement(d.a,{style:{backgroundColor:"#000080",padding:10},onClick:this.all.bind(this)},"All"))),l.a.createElement(E.a.Item,null,a&&a.map((function(t,a){return l.a.createElement("div",{className:"d-flex justify-content-around",key:a,style:{borderBottomColor:"orange",padding:10}},l.a.createElement(d.a,{style:{backgroundColor:"#000080",padding:10},key:a,onClick:e.searchFilterFunction.bind(e,t.District)},t.District))}))))),l.a.createElement("div",{className:"col-sm-4"}),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",style:{display:"flex",justifyContent:"flex-end",float:"right"},onClick:this.Logout},"Logout"),l.a.createElement("button",{className:"m-3 btn btn-sm btn-success",style:{display:"flex",justifyContent:"flex-end",float:"right"},onClick:this.addLegalAid},"Add Legal Aid"))),"\n",l.a.createElement("div",null),l.a.createElement("div",{className:"list row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("ul",{className:"list-group"},a&&a.map((function(t,a){return l.a.createElement("li",{className:"list-group-item "+(a===r?"active":""),onClick:function(){return e.setActiveTutorial(t,a)},key:a,style:{shadowColor:"black",shadowOffset:{width:0,height:2},shadowRadius:6,shadowOpacity:.26,elevation:8,padding:20,borderRadius:10,alignItems:"flex-start",marginBottom:10,marginLeft:10,marginRight:10}},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null," Name:"),"   ",t.Name),l.a.createElement("p",null,l.a.createElement("strong",null,"Address:"),"   ",t.Address),l.a.createElement("p",null,l.a.createElement("strong",null,"District:"),"   ",t.District),l.a.createElement("p",null,l.a.createElement("strong",null,"Email:"),"   ",t.Email),l.a.createElement("p",null,l.a.createElement("strong",null," Tellphone:"),"   ",t.Tellphone),l.a.createElement("p",null,l.a.createElement("strong",null," Description:"),"   ",t.Description)))}))),l.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllTutorials},"Remove All")),l.a.createElement("div",{className:"col-md-5"},n?l.a.createElement(N,{tutorial:n,refreshList:this.refreshList}):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click Legal Aid.."))),l.a.createElement("div",{className:"col-md-2"})))}}]),a}(n.Component),T=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChangeName=n.onChangeName.bind(Object(m.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(m.a)(n)),n.onChangeTellphone=n.onChangeTellphone.bind(Object(m.a)(n)),n.onChangeAddress=n.onChangeAddress.bind(Object(m.a)(n)),n.onChangeDistrict=n.onChangeDistrict.bind(Object(m.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(m.a)(n)),n.saveTutorial=n.saveTutorial.bind(Object(m.a)(n)),n.newTutorial=n.newTutorial.bind(Object(m.a)(n)),n.back=n.back.bind(Object(m.a)(n)),n.state={Description:"",Email:"",Name:"",Logo:"",District:"",Address:"",Tellphone:"",confirm_agreement:!1,loading:!1,disabled:!1,currentUser:null,ImageSource:null,stimage:null,stuploading:!1,sttransferred:0,photos:"",published:!1,submitted:!1},n}return Object(o.a)(a,[{key:"onChangeName",value:function(e){this.setState({Name:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({Email:e.target.value})}},{key:"onChangeTellphone",value:function(e){this.setState({Tellphone:e.target.value})}},{key:"onChangeAddress",value:function(e){this.setState({Address:e.target.value})}},{key:"onChangeDistrict",value:function(e){this.setState({District:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({Description:e.target.value})}},{key:"saveTutorial",value:function(){var e=this,t={Name:this.state.Name,Email:this.state.Email,Tellphone:this.state.Tellphone,Address:this.state.Address,District:this.state.District,Description:this.state.Description,published:!1};v.create(t).then((function(){console.log("Added new Legal Aid successfully!"),e.setState({submitted:!0})})).catch((function(e){console.log(e)}))}},{key:"newTutorial",value:function(){this.setState({Description:"",Email:"",Name:"",Logo:"",District:"",Address:"",Tellphone:"",confirm_agreement:!1,published:!1,submitted:!1})}},{key:"back",value:function(){this.props.history.push("/admin")}},{key:"render",value:function(){return l.a.createElement("div",{className:"submit-form",style:{marginTop:30}},l.a.createElement("h3",null,"Add Legal Aid"),this.state.submitted?l.a.createElement("div",null,l.a.createElement("h4",null,"You submitted successfully!"),l.a.createElement("button",{className:"btn btn-success",onClick:this.newTutorial},"Add"),l.a.createElement("button",{className:"btn btn-info",onClick:this.back},"Back")):l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",required:!0,value:this.state.name,onChange:this.onChangeName,name:"name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Email"},"Email"),l.a.createElement("input",{type:"email",className:"form-control",id:"Email",required:!0,value:this.state.Email,onChange:this.onChangeEmail,name:"Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Tellphone"},"Phone Number"),l.a.createElement("input",{type:"text",className:"form-control",id:"Tellphone",required:!0,value:this.state.Tellphone,onChange:this.onChangeTellphone,name:"Tellphone"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"District"},"District"),l.a.createElement("input",{type:"text",className:"form-control",id:"District",required:!0,value:this.state.District,onChange:this.onChangeDistrict,name:"District"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Address"},"Address"),l.a.createElement("input",{type:"text",className:"form-control",id:"Address",required:!0,value:this.state.Address,onChange:this.onChangeAddress,name:"Address"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Description"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"Description",required:!0,value:this.state.Description,onChange:this.onChangeDescription,name:"Description"})),l.a.createElement("button",{className:"m-3 btn btn-sm btn-info",style:{display:"flex",justifyContent:"flex-end",float:"right"},onClick:this.back},"Back"),l.a.createElement("button",{onClick:this.saveTutorial,className:"btn btn-success"},"Add")))}}]),a}(n.Component),D=a(28),A=a(5);g.a.initializeApp({apiKey:"AIzaSyBJk7uMiqeA2y58nPOlcknqoXsoTRvWwrY",authDomain:"legal-aid-1b91e.firebaseapp.com",databaseURL:"https://legal-aid-1b91e.firebaseio.com",projectId:"legal-aid-1b91e",storageBucket:"legal-aid-1b91e.appspot.com",messagingSenderId:"378154352179",appId:"1:378154352179:web:d4881953b13bc22832ed46",measurementId:"G-6527YCQVLM"});var j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container mt-3"},l.a.createElement("h2",null,"Legal Aid"),l.a.createElement(D.a,null,l.a.createElement(A.c,null,l.a.createElement(A.a,{exact:!0,path:"/Legal",component:p}),l.a.createElement(A.a,{path:"/register",component:b}),l.a.createElement(A.a,{path:"/home",component:y}),l.a.createElement(A.a,{path:"/admin",component:k}),l.a.createElement(A.a,{path:"/addLegalAid",component:T})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.ffd2ed48.chunk.js.map