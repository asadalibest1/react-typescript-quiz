(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),r=a.n(o);a(16),a(17),a(18);function l(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"main-header"},"Quizzer"))}a(19);var i=a(3),u=a(1),s={getData:[],category:0,categoryName:"",difficulty:"",amount:10,pageNum:1,totalNum:0},m=Object(n.createContext)(s),d=function(e,t){switch(t.type){case"GET_DATA":return Object(u.a)({},e,{getData:t.payload});case"ADD_CAT":return Object(u.a)({},e,{category:t.payload});case"ADD_CAT_NAME":return Object(u.a)({},e,{categoryName:t.payload});case"ADD_DIFF":return Object(u.a)({},e,{difficulty:t.payload});case"ADD_AMOUNT":return Object(u.a)({},e,{amount:t.payload});case"CHANGE_PAGE":return Object(u.a)({},e,{pageNum:t.payload});case"ADD_TOTALNUM":return Object(u.a)({},e,{totalNum:t.payload});default:return e}},f=function(e){var t=e.children,a=c.a.useReducer(d,s),n=Object(i.a)(a,2),o=n[0],r=n[1],l={data:o,setData:function(e){r({type:"GET_DATA",payload:e})},AddCategory:function(e){r({type:"ADD_CAT",payload:e})},AddCategoryName:function(e){r({type:"ADD_CAT_NAME",payload:e})},AddDifficulty:function(e){r({type:"ADD_DIFF",payload:e})},AddAmount:function(e){r({type:"ADD_AMOUNT",payload:e})},changePage:function(e){r({type:"CHANGE_PAGE",payload:e})},AddTotalNum:function(e){r({type:"ADD_TOTALNUM",payload:e})}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.Provider,{value:l},t))};function p(){c.a.useEffect((function(){!function(){var e=document.querySelector(".paper");e.animate([{opacity:"1"}],{duration:900,iterations:1}).onfinish=function(){return e.style.opacity="1"}}()}),[]);var e=c.a.useContext(m),t=e.AddCategory,a=e.AddCategoryName,n=e.changePage,o=function(e,c){var o=document.getElementById(e);a(o.innerText),t(c),document.querySelector(".paper").animate([{opacity:"0"}],{duration:200,iterations:1}),setTimeout((function(){n(2)}),200)};return c.a.createElement("div",{className:"main-welcome-div"},c.a.createElement("div",{className:"paper"},c.a.createElement("h2",null,"Welcome to my Quiz App"),c.a.createElement("p",null,"Which type of Quiz you want to Start?"),c.a.createElement("div",{className:"quize-list"},c.a.createElement("span",{className:"feild-style",id:"cat1",onClick:function(){o("cat1",22)}},"Geography"),c.a.createElement("span",{className:"feild-style",id:"cat1",onClick:function(){o("cat1",18)}},"IT"),c.a.createElement("span",{className:"feild-style",id:"cat2",onClick:function(){o("cat2",21)}},"Sports"),c.a.createElement("span",{className:"feild-style",id:"cat3",onClick:function(){o("cat3",23)}},"History"),c.a.createElement("span",{className:"feild-style",id:"cat4",onClick:function(){o("cat4",17)}},"Science & Nature"),c.a.createElement("span",{className:"feild-style",id:"cat5",onClick:function(){o("cat5",9)}},"General Knowledge"))))}a(20),a(7);function y(){var e=c.a.useContext(m),t=e.AddDifficulty,a=e.changePage;c.a.useEffect((function(){!function(){var e=document.querySelector(".paper");e.animate([{opacity:"1"}],{duration:400,iterations:1}).onfinish=function(){return e.style.opacity="1"}}()}),[]);var n=function(e){t(e),document.querySelector(".paper").animate([{opacity:"0"}],{duration:200,iterations:1}),setTimeout((function(){a(3)}),200)};return c.a.createElement("div",{className:"main-level-div"},c.a.createElement("div",{className:"paper"},c.a.createElement("h2",null,"Choose your Level!"),c.a.createElement("div",{className:"level"},c.a.createElement("div",{className:"section__box",onClick:function(){n("easy")}},c.a.createElement("button",{className:"r-button ai-element ai-element_type1 ai-element4"},c.a.createElement("span",{className:"ai-element__label level-button"},"Easy"))),c.a.createElement("div",{className:"section__box",onClick:function(){n("medium")}},c.a.createElement("button",{className:"r-button ai-element ai-element_type1 ai-element4"},c.a.createElement("span",{className:"ai-element__label level-button"},"Medium"))),c.a.createElement("div",{className:"section__box",onClick:function(){n("hard")}},c.a.createElement("button",{className:"r-button ai-element ai-element_type1 ai-element4"},c.a.createElement("span",{className:"ai-element__label level-button"},"Hard"))))))}a(21);function E(){var e=c.a.useContext(m),t=e.data,a=e.AddAmount,n=e.changePage,o=(e.setFetchCondition,t.categoryName),r=t.difficulty,l=t.amount;c.a.useEffect((function(){!function(){var e=document.querySelector(".start-quiz-div");e.animate([{opacity:"1"}],{duration:1e3,iterations:1}).onfinish=function(){return e.style.opacity="1"}}()}),[]);var i=function(){document.querySelector(".start-quiz-div").animate([{opacity:"0"}],{duration:400,iterations:1}),setTimeout((function(){n(4)}),200)};return c.a.createElement("div",{className:"start-quiz-div"},c.a.createElement("h1",null,"You Selected ",c.a.createElement("span",{className:"data"},'"',o,'"')," for your Quiz."),c.a.createElement("h1",null,"Your Difficulty Level will be ",c.a.createElement("span",{className:"data"},'"',r.toUpperCase(),'"'),"."),c.a.createElement("div",{className:"input1 para"},"Pleaze enter the Number of your qustions",c.a.createElement("br",null),"you want in your quiz."),c.a.createElement("div",{className:"input1"},c.a.createElement("input",{type:"number",value:l,onChange:function(e){a(e.target.value)},className:"quiz-number"})),c.a.createElement("div",{className:"buttons"},c.a.createElement("div",{className:"container1 section__box001",onClick:function(e){e.preventDefault(),i()}},c.a.createElement("a",{href:"#",className:"btn"},"Start Quiz")),c.a.createElement("div",{className:"section__box section__box001",onClick:function(){n(1)}},c.a.createElement("button",{className:"r-button ai-element ai-element_type3 ai-element8"},c.a.createElement("span",{className:"ai-element__label ai-element__label001"},"Go Back")))))}var v=a(2),N=a.n(v),b=a(6),g=(a(23),a(24),a(25),a(10)),h=function(){var e=Object(b.a)(N.a.mark((function e(t,a,n){var c,o,r,l,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=".concat(t,"&category=").concat(a,"&difficulty=").concat(n,"&type=multiple"));case 2:return c=e.sent,e.next=5,c.json();case 5:return o=e.sent,r=o.results,l=function(e){return Object(g.a)(e).sort((function(){return Math.random()-.5}))},i=r.map((function(e){return{question:e.question,answer:e.correct_answer,options:l(e.incorrect_answers.concat(e.correct_answer))}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),_=function(){var e=document.getElementsByClassName("answer-button")[0],t=document.getElementsByClassName("answer-button")[1],a=document.getElementsByClassName("answer-button")[2],n=document.getElementsByClassName("answer-button")[3];e.style.background="#cb997e",t.style.background="#cb997e",a.style.background="#cb997e",n.style.background="#cb997e"};function A(){var e=c.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],o=c.a.useState(0),r=Object(i.a)(o,2),l=r[0],u=r[1],s=c.a.useState(null),d=Object(i.a)(s,2),f=d[0],p=d[1],y=c.a.useContext(m),E=y.data,v=y.AddTotalNum,g=y.changePage,A=E.category,C=E.difficulty,D=E.amount,w=E.totalNum;c.a.useEffect((function(){!function(){var e=document.querySelector(".paper");e.animate([{opacity:"1"}],{duration:400,iterations:1}).onfinish=function(){return e.style.opacity="1"}}(),function(){var e=Object(b.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(D,A,C);case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var k=function(){null!==f&&(document.getElementById(f.toString()).innerText===a[l].answer&&v(w+1))},T=function(){document.querySelector(".paper").animate([{opacity:"0"}],{duration:200,iterations:1})},x=0;return c.a.createElement("div",{className:"main-quiz-div"},c.a.createElement("div",{className:"paper"},a.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Question # ",l+1,"/",D),c.a.createElement("p",null,"Q:",l+1," ",a[l].question),a[l].options.map((function(e,t){return c.a.createElement("div",{className:"answer-button",key:t,id:"ansBtn"},x+=1,") ",c.a.createElement("div",{id:t.toString(),onClick:function(){!function(e){_(),document.getElementsByClassName("answer-button")[e].style.background="red",p(e)}(t)}},e))})),c.a.createElement("button",{className:"learn-more",onClick:function(){_(),p(null),k(),l!==a.length-1?u(l+1):(T(),setTimeout((function(){g(5)}),200))}},"Next Question")):c.a.createElement("div",{className:"loader-div"},">",c.a.createElement("div",{className:"loader"}))))}a(26);function C(){c.a.useEffect((function(){!function(){var e=document.querySelector(".start-result-div");e.animate([{opacity:"1"}],{duration:1e3,iterations:1}).onfinish=function(){return e.style.opacity="1"}}()}),[]);var e=c.a.useContext(m),t=e.data,a=e.changePage,n=e.AddTotalNum,o=t.categoryName,r=t.amount,l=t.totalNum,i="",u="";return 100*l/r>=60?(i="Congratulations!",u="succeed"):(i="It Looks! ",u="need some improvement"),c.a.createElement("div",{className:"start-result-div"},c.a.createElement("h1",null,c.a.createElement("span",null,i)," you ",u," for the ",o," Quiz."),c.a.createElement("h1",null,"By ",c.a.createElement("span",null,l,"/",r)),c.a.createElement("div",{className:"container1 section__box001"},c.a.createElement("a",{href:"#",className:"btn",onClick:function(e){e.preventDefault(),n(0),a(1)}},"Try more Quizes")))}function D(){var e=c.a.useContext(m),t=e.data,a=(e.setData,t.category,t.difficulty,t.amount,t.getData,t.pageNum);return c.a.createElement("div",{className:"main-wallpaper"},c.a.createElement(l,null),1===a&&c.a.createElement(p,null),2===a&&c.a.createElement(y,null),3===a&&c.a.createElement(E,null),4===a&&c.a.createElement(A,null),5===a&&c.a.createElement(C,null))}function w(){return c.a.createElement("div",null,c.a.createElement(f,null,c.a.createElement(D,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.29c2cdfe.chunk.js.map