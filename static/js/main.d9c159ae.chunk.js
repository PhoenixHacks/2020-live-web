(this["webpackJsonp2020-live-web"]=this["webpackJsonp2020-live-web"]||[]).push([[0],{101:function(e,t){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(24),r=a.n(o),l=a(6),s=a(7),c=a(9),m=a(8),d=a(10),u=a(60),p=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"",id:"maps"},i.a.createElement(u.a,{className:"map",alt:"IST Map",small:a(36),large:a(36)}))}}]),t}(i.a.Component),g=function(){return i.a.createElement("div",{id:"timeUnits"},i.a.createElement("div",null,i.a.createElement("svg",null,i.a.createElement("circle",null)),i.a.createElement("br",null),"d"),i.a.createElement("div",null,i.a.createElement("svg",null,i.a.createElement("circle",null)),i.a.createElement("br",null),"h"),i.a.createElement("div",null,i.a.createElement("svg",null,i.a.createElement("circle",null)),i.a.createElement("br",null),"m"),i.a.createElement("div",null,i.a.createElement("svg",null,i.a.createElement("circle",null)),i.a.createElement("br",null),"s"))},v=function(e){var t=e.timer;return i.a.createElement("h1",null,i.a.createElement("span",null,t.f_days),i.a.createElement("span",null,":"),i.a.createElement("span",null,t.f_hours),i.a.createElement("span",null,":"),i.a.createElement("span",null,t.f_minutes),i.a.createElement("span",null,":"),i.a.createElement("span",null,t.f_seconds))},h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={timer:"00:00:00:00"},a.componentDidMount=function(){return a.countdown()},a.countdown=function(){var e=new Date("Jan 26, 2020 12:00:00").getTime();return setInterval((function(){var t=(new Date).getTime(),n=!1,i=e-t,o=Math.floor(i/864e5),r=Math.floor(i%864e5/36e5),l=Math.floor(i%36e5/6e4),s=Math.floor(i%6e4/1e3);i<0&&clearInterval();var c=("0"+o).slice(-2),m=("0"+r).slice(-2),d=("0"+l).slice(-2),u=("0"+s).slice(-2);0===o&&(n=!0),n||(c=("0"+(o-1)).slice(-2));var p={f_days:c,f_hours:m,f_minutes:d,f_seconds:u};a.setState({isLive:n,timer:p})}),1e3)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLive,a=e.timer;return i.a.createElement("div",{id:"timer"},t?i.a.createElement("span",null,"ends in"):i.a.createElement("span",null,"starts in"),i.a.createElement(v,{timer:a}),i.a.createElement("hr",null),i.a.createElement(g,null))}}]),t}(i.a.Component),E=function(){return i.a.createElement("div",{id:"header"},i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:"https://phoenixhacks.com/img/fireball-phoenix-purple.svg",alt:"phoenixhacks logo"}),i.a.createElement("span",{className:"logo-text Blink"},i.a.createElement("span",{className:"capital"},"P"),"HOENIX",i.a.createElement("span",{className:"capital"},"H"),"ACKS",i.a.createElement("span",{className:"live"},"LIVE"))),i.a.createElement(h,null))},f=a(59),y=a(18),b=[{event:"Check-In",datetime:{start:"09:00am",end:"11:00am",day:"25"},tags:["logistics"],location:"IST - South Lobby",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Opening Ceremony",datetime:{start:"11:00am",end:"12:00pm",day:"25"},tags:["logistics"],location:"Aula Magna",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Hacking Begins",datetime:{start:"12:00pm",end:"12:00pm",day:"25"},tags:["logistics"],location:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Ice Breaker",datetime:{start:"12:00pm",end:"01:00pm",day:"25"},tags:["logistics"],location:"Commons",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Scavenger Hunt",datetime:{start:"12:00pm",end:"01:00pm",day:"25"},tags:["activity"],location:"Commons",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Lunch-Chick-Fil-A",datetime:{start:"01:00pm",end:"02:00pm",day:"25"},tags:["meal"],location:"IST-1014",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Embedded Systems (Section 1)",datetime:{start:"02:00pm",end:"02:45pm",day:"25"},tags:["workshop"],location:"IST-1012",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Introduction to Collaboration using Git and GitHub",datetime:{start:"03:00pm",end:"03:45pm",day:"25"},tags:["workshop"],location:"Aula Magna",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Embedded Systems (Section 2)",datetime:{start:"02:00pm",end:"02:45pm",day:"25"},tags:["workshop"],location:"IST-1014",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Arduino Workshop",datetime:{start:"05:00pm",end:"05:45pm",day:"25"},tags:["workshop"],location:"IST-1012",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Gaming with Azure",datetime:{start:"06:00pm",end:"06:30pm",day:"25"},tags:["workshop"],location:"Aula Magna",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Dinner-Dominos",datetime:{start:"07:00pm",end:"08:00pm",day:"25"},tags:["meal"],location:"IST-1014",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Interfacing APIs with Python",datetime:{start:"08:00pm",end:"09:00pm",day:"25"},tags:["workshop"],location:"Aula Magna",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"CTF Challenge",datetime:{start:"09:00pm",end:"10:00pm",day:"25"},tags:["activity"],location:"Aula Magna",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Cup Stacking",datetime:{start:"10:00pm",end:"11:00pm",day:"25"},tags:["activity"],location:"Commons",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Werewolf",datetime:{start:"11:00pm",end:"12:00am",day:"25"},tags:["activity"],location:"IST-1012",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Midnight Snack",datetime:{start:"12:00am",end:"01:00am",day:"26"},tags:["meal"],location:"IST-1014",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Smash Tournament",datetime:{start:"01:00am",end:"02:30am",day:"26"},tags:["activity"],location:"IST-1012",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Team Jeopardy",datetime:{start:"02:00am",end:"03:00am",day:"26"},tags:["activity"],location:"IST-1012",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Breakfast-Dunkin Donuts",datetime:{start:"08:00am",end:"09:00am",day:"26"},tags:["meal"],location:"IST-1014",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"DevPost Submissions Due",datetime:{start:"11:00am",end:"12:00pm",day:"26"},tags:["logistics","warning"],location:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Hacking Ends",datetime:{start:"12:00pm",end:"12:00pm",day:"26"},tags:["logistics","success"],location:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Lunch - Subway",datetime:{start:"12:00pm",end:"01:00pm",day:"26"},tags:["meal"],location:"IST-1014",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Demoing & Judging",datetime:{start:"01:00pm",end:"03:30pm",day:"26"},tags:["logistics"],location:"Commons",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Deliberations",datetime:{start:"03:30pm",end:"04:00pm",day:"26"},tags:["logistics"],location:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{event:"Closing Ceremony",datetime:{start:"04:00pm",end:"05:00pm",day:"26"},tags:["logistics"],location:"Aula Magna",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],k=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"tagFilter",value:function(e){return function(t){return t.tags.includes(e)}}},{key:"dayFilter",value:function(e){return function(t){return t.datetime.day===e}}},{key:"tableSection",value:function(e,t,a){return i.a.createElement("div",{id:"day"},i.a.createElement("h3",null,e),i.a.createElement("table",{className:"table table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",{className:""},i.a.createElement("th",{scope:"col",style:{width:"30%"}},"Time"),i.a.createElement("th",{scope:"col",style:{width:"50%"}},"Event/Activity"),i.a.createElement("th",{scope:"col",style:{width:"20%"}},"Location"))),i.a.createElement("tbody",null,a.filter(this.dayFilter(t)).map((function(e,t){return i.a.createElement("tr",{key:e.event},i.a.createElement("th",{scope:"row"},e.datetime.start,"-",e.datetime.end),i.a.createElement("td",null,e.event),i.a.createElement("td",null,e.location))})))))}},{key:"renderTab",value:function(e){return i.a.createElement("div",{id:"tab"},this.tableSection("Saturday, January 25","25",e),this.tableSection("Sunday, January 26","26",e))}},{key:"removeMeridiem",value:function(e){return e=(e=e.split("am").pop()).split("pm").pop()}},{key:"eventActive",value:function(e,t){var a=e.datetime,n=a.start,i=a.end,o=a.day;n=this.removeMeridiem(n),i=this.removeMeridiem(i);var r=new Date("Jan "+o+", 2020 "+n+":00").getTime(),l=new Date("Jan "+o+", 2020 "+i+":00").getTime();return t>r&&t<l}},{key:"render",value:function(){var e=b.filter(this.tagFilter("logistics")),t=b.filter(this.tagFilter("meal")),a=b.filter(this.tagFilter("workshop")),n=b.filter(this.tagFilter("activity"));return i.a.createElement("div",{id:"schedule"},i.a.createElement(f.a,{defaultActiveKey:"all-events",id:"uncontrolled-tab-example"},i.a.createElement(y.a,{eventKey:"all-events",title:"All Events"},this.renderTab(b)),i.a.createElement(y.a,{eventKey:"logistics",title:"Logistics"},this.renderTab(e)),i.a.createElement(y.a,{eventKey:"meals",title:"Meals"},this.renderTab(t)),i.a.createElement(y.a,{eventKey:"workshops",title:"Workshops"},this.renderTab(a)),i.a.createElement(y.a,{eventKey:"activities",title:"Activities"},this.renderTab(n))))}}]),t}(i.a.Component),w=a(12),L=a.n(w),S=a(57),T=a.n(S),O={API_URL:"http://localhost:3001"},j=a(58),q=a.n(j).a.create({baseURL:O.API_URL});var I={read:function(){var e,t;return L.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L.a.awrap(q.get("/announcements"));case 3:return e=a.sent,t=e.data,a.abrupt("return",t.data);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",a.t0);case 11:case"end":return a.stop()}}),null,null,[[0,8]])}},A=T()(O.API_URL,{path:"/announcements"}),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).read=function(){var e;return L.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.awrap(I.read());case 2:e=t.sent,a.setState({announcements:e});case 4:case"end":return t.stop()}}))},a.state={announcements:[]},A.on("announcements",(function(e){a.setState({announcements:e.reverse()})})),A.on("disconnect",(function(e){"io server disconnect"===e&&A.connect()})),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e;return L.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.awrap(I.read());case 2:e=t.sent,this.setState({announcements:e});case 4:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){return L.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.scrollToBottom();case 1:case"end":return e.stop()}}),null,this)}},{key:"scrollToBottom",value:function(e){var t=this.messageList.scrollHeight-this.messageList.clientHeight;this.messageList.scrollTop=t>0?t:0}},{key:"processTime",value:function(e){var t=(new Date).getDate(),a=new Date(e),n=a.getDate(),i=a.getHours(),o=("0"+a.getMinutes()).slice(-2);return(n=n===t?"Today":"Yesterday")+" at "+(i=0===i?"12:"+o+" AM":i<12?i+":"+o+" AM":i+":"+o+" PM")}},{key:"render",value:function(){var e=this,t=this.state.announcements;return i.a.createElement("div",{id:"announcements"},i.a.createElement("h2",null,"ANNOUNCEMENTS"),i.a.createElement("ul",{ref:function(t){e.messageList=t}},t.length>0?t.map((function(t){return i.a.createElement("li",{key:t.time},i.a.createElement("b",{style:{color:"#586165"}},e.processTime(t.time)),i.a.createElement("br",null),i.a.createElement("span",{style:{fontSize:"20px",color:"#ffffff"}},t.message),i.a.createElement("hr",null))})):i.a.createElement("p",{style:{color:"#586165"}},"No current announcements.")))}}]),t}(i.a.Component),M=a(28),C=function(e){var t=e.text,a=e.icon,n=e.link;return i.a.createElement("h5",null,i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},a,"\xa0",t))},D=function(){return i.a.createElement("div",{id:"links"},i.a.createElement(C,{text:"Discord",icon:i.a.createElement(M.a,null),link:"https://phoenixhacks.com/discord"}),i.a.createElement(C,{text:"DevPost",icon:i.a.createElement(M.c,null),link:"https://phoenixhacks2020.devpost.com"}),i.a.createElement(C,{text:"Media",icon:i.a.createElement(M.b,null),link:"https://phoenixhacks.com/media"}),i.a.createElement(C,{text:"FAQ",icon:i.a.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"}),link:"https://phoenixhacks.com#FAQ"}))},N=function(){return i.a.createElement("div",{id:"wifi"},i.a.createElement("h3",null,i.a.createElement("i",{className:"fa fa-wifi"})," WiFi"),i.a.createElement("h5",null,"Poly_Guest"),i.a.createElement("h5",null,"Login Page"))},_=function(){return i.a.createElement("div",{id:"resources"},i.a.createElement("h3",null,"RESOURCES"))},F=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"media"},i.a.createElement("div",{id:"info"},i.a.createElement(D,null),i.a.createElement(N,null)),i.a.createElement(x,null),i.a.createElement(_,null))}}]),t}(i.a.Component),P=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(E,null),i.a.createElement("div",{className:"container",id:"content"},i.a.createElement(F,null),i.a.createElement(k,null),i.a.createElement(p,null)))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(121),a(122);r.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e,t,a){e.exports=a.p+"static/media/IST.542e62bb.png"},61:function(e,t,a){e.exports=a(123)}},[[61,1,2]]]);
//# sourceMappingURL=main.d9c159ae.chunk.js.map