(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(6),l=a.n(o),i=a(1),s=a(2),r=a(4),m=a(3),u=(a(12),function(t){Object(r.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.stopInterval=setInterval((function(){var e=new Date;console.log(e.toLocaleTimeString()),t.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(t){console.log("Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.stopInterval)}},{key:"render",value:function(){var t=this.props.name,e=this.state.time;return c.a.createElement("div",{className:"clock"},c.a.createElement("h1",null,"React clock"),c.a.createElement("p",{className:"clock__name"},"The clock name is:"," ".concat(t)),c.a.createElement("p",{className:"clock__current"},"Current time:"," ".concat(e)))}}]),a}(c.a.Component)),k=(a(13),function(t){Object(r.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isClockVisible:!0,clockName:0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setName=function(){t.setState({clockName:Math.round(10*Math.random())})},t}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"state"},this.state.isClockVisible&&c.a.createElement(u,{visible:this.state.isClockVisible,name:this.state.clockName}),c.a.createElement("div",null,c.a.createElement("button",{className:"state__button",type:"button",onClick:this.showClock},"Show clock"),c.a.createElement("button",{className:"state__button",type:"button",onClick:this.hideClock},"Hide clock"),c.a.createElement("button",{className:"state__button",type:"button",onClick:this.setName},"Set random name")))}}]),a}(c.a.Component));l.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a36f57bb.chunk.js.map