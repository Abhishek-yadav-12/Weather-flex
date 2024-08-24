(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/WeatherIcons.0a218296.gif"},17:function(e,t,a){e.exports=a(55)},22:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i);a(22);var s={key:"a4665d388509ba3e30b2c460067476dd",base:"https://api.openweathermap.org/data/2.5/"},l=a(14),o=a.n(l),m=a(15),h=a.n(m),u=a(2),d=a.n(u);var p=function(e){const[t,a]=Object(n.useState)(""),[i,c]=Object(n.useState)(""),[l,o]=Object(n.useState)({}),m=Object(n.useCallback)(e=>{console.log("search function called"),h.a.get(`${s.base}weather?q=${"[object Object]"!==e?e:t}&units=metric&APPID=${s.key}`).then(e=>{o(e.data),a("")}).catch(e=>{console.log(e),c({message:"Not Found",query:t}),a("")})},[t]),u="white",p=112,E=!0;return Object(n.useEffect)(()=>{m("Delhi")},[]),r.a.createElement("div",{className:"forecast"},r.a.createElement("div",{className:"forecast-icon"},r.a.createElement(d.a,{icon:e.icon,color:u,size:p,animate:E})),r.a.createElement("div",{className:"today-weather"},r.a.createElement("h3",null,e.weather),r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search any city",onChange:e=>a(e.target.value),value:t}),r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{src:"https://images.avishkaar.cc/workflow/newhp/search-white.png",onClick:()=>{m(t)},alt:"Search icon"}))),r.a.createElement("ul",null,"undefined"!==typeof l.main?r.a.createElement("div",null,r.a.createElement("li",{className:"cityHead"},r.a.createElement("p",null,l.name,", ",l.sys.country),r.a.createElement("img",{className:"temp",src:`https://openweathermap.org/img/wn/${l.weather[0].icon}.png`,alt:"Weather icon"})),r.a.createElement("li",null,"Temperature"," ",r.a.createElement("span",{className:"temp"},Math.round(l.main.temp),"\xb0c (",l.weather[0].main,")")),r.a.createElement("li",null,"Humidity"," ",r.a.createElement("span",{className:"temp"},Math.round(l.main.humidity),"%")),r.a.createElement("li",null,"Visibility"," ",r.a.createElement("span",{className:"temp"},Math.round(l.visibility)," mi")),r.a.createElement("li",null,"Wind Speed"," ",r.a.createElement("span",{className:"temp"},Math.round(l.wind.speed)," Km/h"))):r.a.createElement("li",null,i.query," ",i.message))))},E=a(16),g=a.n(E);const v="#686767",y=112,b=!0;class w extends r.a.Component{constructor(){super(...arguments),this.state={lat:void 0,lon:void 0,errorMessage:void 0,temperatureC:void 0,temperatureF:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:"CLEAR_DAY",sunrise:void 0,sunset:void 0,errorMsg:void 0},this.getPosition=e=>new Promise((function(t,a){navigator.geolocation.getCurrentPosition(t,a,e)})),this.getWeather=async(e,t)=>{const a=await fetch(`${s.base}weather?lat=${e}&lon=${t}&units=metric&APPID=${s.key}`),n=await a.json();switch(this.setState({lat:e,lon:t,city:n.name,temperatureC:Math.round(n.main.temp),temperatureF:Math.round(1.8*n.main.temp+32),humidity:n.main.humidity,main:n.weather[0].main,country:n.sys.country}),this.state.main){case"Haze":this.setState({icon:"CLEAR_DAY"});break;case"Clouds":this.setState({icon:"CLOUDY"});break;case"Rain":this.setState({icon:"RAIN"});break;case"Snow":this.setState({icon:"SNOW"});break;case"Dust":this.setState({icon:"WIND"});break;case"Drizzle":this.setState({icon:"SLEET"});break;case"Fog":case"Smoke":this.setState({icon:"FOG"});break;case"Tornado":this.setState({icon:"WIND"});break;default:this.setState({icon:"CLEAR_DAY"})}}}componentDidMount(){navigator.geolocation?this.getPosition().then(e=>{this.getWeather(e.coords.latitude,e.coords.longitude)}).catch(e=>{this.getWeather(28.67,77.22),alert("You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather.")}):alert("Geolocation not available"),this.timerID=setInterval(()=>this.getWeather(this.state.lat,this.state.lon),6e5)}componentWillUnmount(){clearInterval(this.timerID)}render(){return this.state.temperatureC?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"city"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,this.state.city),r.a.createElement("h3",null,this.state.country)),r.a.createElement("div",{className:"mb-icon"}," ",r.a.createElement(d.a,{icon:this.state.icon,color:v,size:y,animate:b}),r.a.createElement("p",null,this.state.main)),r.a.createElement("div",{className:"date-time"},r.a.createElement("div",{className:"dmy"},r.a.createElement("div",{id:"txt"}),r.a.createElement("div",{className:"current-time"},r.a.createElement(o.a,{format:"HH:mm:ss",interval:1e3,ticking:!0})),r.a.createElement("div",{className:"current-date"},`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(e=new Date).getDay()]}, ${e.getDate()} ${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${e.getFullYear()}`)),r.a.createElement("div",{className:"temperature"},r.a.createElement("p",null,this.state.temperatureC,"\xb0",r.a.createElement("span",null,"C"))))),r.a.createElement(p,{icon:this.state.icon,weather:this.state.main})):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:g.a,alt:"",style:{width:"50%",WebkitUserDrag:"none"}}),r.a.createElement("h3",{style:{color:"white",fontSize:"22px",fontWeight:"600"}},"Detecting your location"),r.a.createElement("h3",{style:{color:"white",marginTop:"10px"}},"Your current location wil be displayed on the App ",r.a.createElement("br",null)," & used for calculating Real time weather."));var e}}var f=w;a(54);var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(f,null)),r.a.createElement("div",{className:"footer-info"},"Made with \ud83e\ude75",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Abhishek-yadav-12"},"Abhishek Yadav")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[17,1,2]]]);
//# sourceMappingURL=main.30fa73c8.chunk.js.map