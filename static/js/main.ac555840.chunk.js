(this.webpackJsonpnew_counter=this.webpackJsonpnew_counter||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),r=a.n(i),l=(a(14),a(1)),o=a(2),c=a(4),u=a(3),p=a(5),m=(a(6),{app:{isVisibleOptions:!1,maxVal:5,minVal:0,counter:0},display:{error:"",errorCheckMax:!1,errorCheckMin:!1,isDisabledButtonSet:!1,maxInputValue:10,minInputValue:0}}),h="Min",b="Max",d="Min != Max",V=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state=m.display,e.changeValuesInputs=function(t){var a={maxVal:parseInt(t.currentTarget[0].value.trim()),minVal:parseInt(t.currentTarget[1].value.trim())};a.maxVal>e.state.maxInputValue?(e.setState({error:b+" "+e.state.maxInputValue,errorCheckMax:!0}),e.isDisabledSet(!0)):a.maxVal<e.state.minInputValue?(e.setState({error:h+" "+e.state.minInputValue,errorCheckMax:!0}),e.isDisabledSet(!0)):a.minVal<e.state.minInputValue?(e.setState({error:h+" "+e.state.minInputValue,errorCheckMin:!0}),e.isDisabledSet(!0)):a.minVal>e.state.maxInputValue?(e.setState({error:b+" "+e.state.maxInputValue,errorCheckMin:!0}),e.isDisabledSet(!0)):a.minVal===a.maxVal?(e.setState({error:d,errorCheckMax:!0,errorCheckMin:!0}),e.isDisabledSet(!0)):(e.setState({errorCheckMax:!1,errorCheckMin:!1}),e.isDisabledSet(!1),e.props.changeMaxAndMinValue(a))},e.changeIsVisibleSet=function(){e.props.setOptions(!1)},e.isDisabledSet=function(t){e.setState({isDisabledButtonSet:t})},e.display=JSON.parse(localStorage.getItem("display")),localStorage.getItem("display")?e.setState({error:e.display.error,errorCheckMax:e.display.errorCheckMax,errorCheckMin:e.display.errorCheckMin,isDisabledButtonSet:e.display.isDisabledButtonSet,maxInputValue:e.display.maxInputValue,minInputValue:e.display.minInputValue}):e.setState({error:"",errorCheckMax:!1,errorCheckMin:!1,isDisabledButtonSet:!1,maxInputValue:10,minInputValue:0}),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("display",JSON.stringify(t))}},{key:"render",value:function(){var e=this.props.counter===this.props.maxVal?"Max: "+this.props.maxVal:this.props.counter;return s.a.createElement("div",{className:"Display"},s.a.createElement("div",null,this.props.isVisibleOptions?s.a.createElement("div",{className:"FormBlock"},s.a.createElement("form",{onChange:this.changeValuesInputs},s.a.createElement("table",{className:"tableInDisplay"},s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("span",{className:this.state.errorCheckMax?"errorInInputs":"OkInInputs"},this.state.errorCheckMax?this.state.error:"Max value:")),s.a.createElement("td",null,s.a.createElement("input",{className:this.state.errorCheckMax?"errorInput":"",type:"number",value:this.props.maxVal}))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("span",{className:this.state.errorCheckMin?"errorInInputs":"OkInInputs"},this.state.errorCheckMin?this.state.error:"Start value:")),s.a.createElement("td",null,s.a.createElement("input",{className:this.state.errorCheckMin?"errorInput":"",type:"number",value:this.props.minVal}))))),s.a.createElement("button",{className:this.state.isDisabledButtonSet?"buttonColor":"",disabled:this.state.isDisabledButtonSet,onClick:this.changeIsVisibleSet},this.state.isDisabledButtonSet?"DISABLED":"SET")):s.a.createElement("div",{className:this.props.counter===this.props.maxVal?"dispayColor":""},e)))}}]),t}(s.a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Button"},s.a.createElement("button",{disabled:this.props.button.isDisabled,className:this.props.button.isDisabled?"buttonColor":"",onClick:this.props.button.onFunc},this.props.button.isDisabled?this.props.button.disabled:this.props.button.title))}}]),t}(s.a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=[{title:"INC",onFunc:this.props.incrementCounter,isDisabled:this.props.counter===this.props.maxVal,disabled:"DISABLED"},{title:"REFRESH",onFunc:this.props.refreshCounter,isDisabled:this.props.counter===this.props.minVal,disabled:"DISABLED"},{title:"SET",onFunc:function(){return e.props.setOptions(!0)}}];return s.a.createElement("div",{className:"Controls"},this.props.isVisibleOptions?"":s.a.createElement("div",{className:"WrapperButtons"},s.a.createElement(x,{button:t[0]}),s.a.createElement(x,{button:t[1]}),s.a.createElement("div",null," ",s.a.createElement(x,{button:t[2]}))))}}]),t}(s.a.Component),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state=m.app,e.changeMaxAndMinValue=function(t){e.setState({counter:t.minVal}),e.setState({maxVal:t.maxVal,minVal:t.minVal})},e.incrementCounter=function(){e.setState({counter:++e.state.counter})},e.refreshCounter=function(){e.setState({counter:0,minVal:0})},e.setOptions=function(t){e.setState({isVisibleOptions:t})},e.app=JSON.parse(localStorage.getItem("app")),localStorage.getItem("app")?e.setState({isVisibleOptions:e.app.isVisibleOptions,maxVal:e.app.maxVal,minVal:e.app.minVal,counter:e.app.counter}):e.setState({isVisibleOptions:!1,maxVal:5,minVal:0,counter:0}),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("app",JSON.stringify(t))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"Wrapper"},s.a.createElement("div",{className:this.state.isVisibleOptions?"maxHide":"maxVal"},"Max value: ",this.state.maxVal),s.a.createElement(V,{counter:this.state.counter,changeMaxAndMinValue:this.changeMaxAndMinValue,maxVal:this.state.maxVal,minVal:this.state.minVal,setOptions:this.setOptions,isVisibleOptions:this.state.isVisibleOptions}),s.a.createElement(S,{counter:this.state.counter,maxVal:this.state.maxVal,minVal:this.state.minVal,isVisibleOptions:this.state.isVisibleOptions,setOptions:this.setOptions,refreshCounter:this.refreshCounter,incrementCounter:this.incrementCounter})))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ac555840.chunk.js.map