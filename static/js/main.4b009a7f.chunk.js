(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(6),l=a.n(o),s=a(1),i=a(2),r=a(4),m=a(3),u=(a(12),function(t){Object(r.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){var e=new Date;t.setState({time:(new Date).toLocaleTimeString()}),console.log(e.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.name,e=this.state.time;return c.a.createElement("div",{className:"clock"},c.a.createElement("h1",null,"React clock"),c.a.createElement("p",{className:"clock__name"},"The clock name is:"," ".concat(t)),c.a.createElement("p",{className:"clock__current"},"Current time:"," ".concat(e)))}}]),a}(c.a.Component)),k=(a(13),function(t){Object(r.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isClockVisible:!0,clockName:0},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setName=function(){t.setState({clockName:Math.round(10*Math.random())}),console.log("Clock was renamed from oldName to ".concat(t.state.clockName))},t.showClock=function(){t.setState({isClockVisible:!0})},t}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"state"},this.state.isClockVisible&&c.a.createElement(u,{name:this.state.clockName,showClock:this.showClock}),c.a.createElement("div",{className:"state__button-set"},c.a.createElement("button",{className:"state__button",type:"button",onClick:this.showClock},"Show clock"),c.a.createElement("button",{className:"state__button",type:"button",onClick:this.hideClock},"Hide clock"),c.a.createElement("button",{className:"state__button state__button--name",type:"button",onClick:this.setName},"Set random name")))}}]),a}(c.a.Component));l.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.4b009a7f.chunk.js.map