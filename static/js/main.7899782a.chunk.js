(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),l=(n(12),n(3)),i=n(4),u=n(6),s=n(5),b=(n(13),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={index:0},t.tabSelect=function(e){return t.setState({index:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.index,n=this.props.tabs;return c.a.createElement(c.a.Fragment,null,n.map((function(n,a){return c.a.createElement("button",{type:"button",className:a===e?"tab tab--active":"tab",key:n.title,onClick:function(){return t.tabSelect(a)}},n.title)})),c.a.createElement("div",{className:"tab__content"},n[e].content))}}]),n}(c.a.Component)),m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(b,{tabs:m}))};o.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7899782a.chunk.js.map