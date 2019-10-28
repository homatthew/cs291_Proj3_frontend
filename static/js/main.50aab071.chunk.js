(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){},239:function(e,t,a){e.exports=a(419)},244:function(e,t,a){},332:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(51),o=a.n(r),i=(a(244),a(73)),c=a.n(i),l=a(134),u=a(23),h=a(24),d=a(26),m=a(25),p=a(27),v=(a(104),a(430)),g=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"UserItem"},s.a.createElement(v.a.Item,null,this.props.userName))}}]),t}(s.a.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"UserList"},s.a.createElement("h1",null,"User List"),s.a.createElement(v.a,null,Array.from(this.props.userList).map((function(e,t){return s.a.createElement(g,{key:t,userName:e})}))))}}]),t}(s.a.Component),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={create:"",type:"",user:""},a.dateFormat=function(e){console.log("TIME"+e);var t=new Date(1e3*e);return t.toLocaleDateString("en-US")+" "+t.toLocaleTimeString("en-US")},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({create:this.dateFormat(this.props.event.created),type:"Message"===this.props.type?"":this.props.type.toUpperCase()+":",user:this.props.event.hasOwnProperty("user")?" ("+this.props.event.user+")":"",message:this.props.event.hasOwnProperty("message")?" "+this.props.event.message:"",status:this.props.event.hasOwnProperty("status")?" "+this.props.event.status:""})}},{key:"render",value:function(){return s.a.createElement("div",{className:"UserItem"},s.a.createElement(v.a.Item,null,this.state.create+" "+this.state.type+this.state.user+this.state.message+this.state.status))}}]),t}(s.a.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(){this.messagesEnd.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"MessageList"},s.a.createElement("h1",null,"Messages"),s.a.createElement("div",{style:{maxHeight:"100%"}},s.a.createElement(v.a,null,this.props.messageList.map((function(e,t){return s.a.createElement(E,{key:t,type:e[0],event:JSON.parse(e[1].data)})})))),s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))}}]),t}(s.a.Component),y=(a(332),a(432)),b=a(433),O=a(427),S=a(428),L=a(431),j=a(44),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:"",server:"http://chat.cs291.com"},a.close=function(){""!==a.state.username&&""!==a.state.password?a.props.login(a.state.server,a.state.username,a.state.password)&&a.props.closeModal():alert("Please enter a valid username and password")},a.handleChangeServer=function(e){a.setState({server:e.target.value})},a.handleChangeUsername=function(e){a.setState({username:e.target.value})},a.handleChangePassword=function(e){a.setState({password:e.target.value})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement(S.a,{open:this.props.isVisible,onOpen:this.props.openModal,trigger:s.a.createElement(L.a,{color:this.props.connected?"green":"red",icon:!0},"Login ",s.a.createElement(j.a,{name:"check"}))},s.a.createElement(S.a.Header,null,"Login"),s.a.createElement(S.a.Content,null,s.a.createElement(O.a,null,s.a.createElement(O.a.Field,{required:!0},s.a.createElement("input",{placeholder:"Server Url",onChange:this.handleChangeServer,value:this.state.server})),s.a.createElement(O.a.Field,{required:!0},s.a.createElement("input",{placeholder:"Username",onChange:this.handleChangeUsername,value:this.state.username})),s.a.createElement(O.a.Field,{required:!0},s.a.createElement("input",{type:"password",placeholder:"Password",onChange:this.handleChangePassword,value:this.state.password})))),s.a.createElement(S.a.Actions,null,s.a.createElement(L.a,{icon:"check",content:"Login",onClick:this.close})))}}]),t}(n.Component),M=a(138),C=a.n(M),x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={userList:new Set,eventList:[],username:"",password:"",server:"",connection:null,showModal:!0,message:"",token:""},a.openModal=function(){a.setState({showModal:!0})},a.closeModal=function(){a.setState({showModal:!1})},a.login=function(){var e=Object(l.a)(c.a.mark((function e(t,n,s){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.server!==t||a.state.username!==n||a.state.password!==s){e.next=2;break}return e.abrupt("return",!0);case 2:return null!==a.state.connection&&a.state.connection.close(),a.setState({userList:new Set,eventList:[],username:"",password:"",server:"",connection:null,showModal:!0,message:"",token:""}),a.setState({server:t,username:n,password:s}),(r=new FormData).set("username",n),r.set("password",s),e.next=10,C.a.post(t+"/login",r,{headers:{}});case 10:if(201===(o=e.sent).status){e.next=15;break}return a.setState({token:"",connection:null}),alert("Issue connecting to server"),e.abrupt("return",!1);case 15:return a.setState({token:o.data.token}),a.getConnection(o.data.token),e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),a.addEvent=function(e,t){a.setState({eventList:a.state.eventList.concat([[e,t]])})},a.getConnection=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new EventSource(a.state.server+"/stream/"+t),a.setState({connection:n}),n.addEventListener("Disconnect",(function(e){a.state.connection.close(),alert("Disconnect: You have logged in from another location."),a.setState({eventList:[],userList:new Set,username:"",password:"",server:"",connection:null,showModal:!0,message:"",token:""}),a.openModal(),a.render()})),n.addEventListener("Join",(function(e){a.addEvent("Join",e),a.setState({userList:a.state.userList.add(JSON.parse(e.data).user)}),a.render()})),n.addEventListener("Message",(function(e){a.addEvent("Message",e)})),n.addEventListener("Part",(function(e){a.addEvent("Part",e);var t=JSON.parse(e.data);a.state.userList.delete(t.user),a.render()})),n.addEventListener("ServerStatus",(function(e){a.addEvent("ServerStatus",e),a.render()})),n.addEventListener("Users",(function(e){JSON.parse(e.data).users.forEach((function(e){a.setState({userList:a.state.userList.add(e)})})),a.render()}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.updateMessage=function(e){a.setState({message:e.target.value})},a.sendMessage=function(e){if(13===e.keyCode&&""!==a.state.message&&""!==a.state.token&&""!==a.state.server){var t=new FormData;t.append("message",a.state.message),C.a.post(a.state.server+"/message",t,{headers:{Authorization:"Bearer "+a.state.token}}),a.setState({message:""})}},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log(this.state.userList),s.a.createElement("div",{className:"App",style:{maxHeight:"100vh"}},s.a.createElement(y.a,{celled:!0,style:{maxHeight:"100vh"}},s.a.createElement(y.a,{columns:2,divided:!0,stretched:!0,style:{minHeight:"100vh",maxHeight:"100vh"}},s.a.createElement(y.a.Row,{style:{maxHeight:"100vh"}},s.a.createElement(y.a.Column,{width:3,style:{maxHeight:"100vh"}},s.a.createElement(y.a,{columns:1,padded:!0},s.a.createElement(y.a.Row,{style:{height:"10%"}},s.a.createElement(k,{openModal:this.openModal,closeModal:this.closeModal,login:this.login,isVisible:this.state.showModal,connected:null!=this.state.connection})),s.a.createElement(y.a.Row,{style:{height:"80%",paddingTop:"3"}},s.a.createElement(f,{userList:this.state.userList})))),s.a.createElement(y.a.Column,{width:13,style:{maxHeight:"100vh"}},s.a.createElement(y.a.Row,{stretched:!0,style:{height:"75vh"}},s.a.createElement(b.a,{style:{background:"gray",overflowY:"scroll",height:"75vh"}},s.a.createElement(w,{messageList:this.state.eventList}))),s.a.createElement(y.a.Row,{style:{height:"5vh"}},s.a.createElement(O.a,null,s.a.createElement(O.a.Field,null,s.a.createElement("input",{placeholder:"Send a message",value:this.state.message,onChange:this.updateMessage,onKeyDown:this.sendMessage})))))))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[239,1,2]]]);
//# sourceMappingURL=main.50aab071.chunk.js.map