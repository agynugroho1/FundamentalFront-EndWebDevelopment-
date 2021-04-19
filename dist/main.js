!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){class n extends HTMLElement{constructor(){super(),this._shadowDOM=this.attachShadow({mode:"closed"})}connectedCallback(){this.render()}render(){this._shadowDOM.innerHTML="\n\t\t<style>\n\t\t\th2{\n\t\t\t\tdisplay: block;\n\t\t\t\tpadding: 16px;\n\t\t\t\twidth: 100%;\n\t\t\t\tbackground-color: orange;\n\t\t\t\tcolor: black;\n\t\t\t\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\t\t</style>\n\t\t<h2>Monitoring COVID-19</h2>"}}customElements.define("app-header",n)},function(t,e){class n extends HTMLElement{constructor(){super(),this._shadowDOM=this.attachShadow({mode:"closed"})}connectedCallback(){this.render()}render(){this._shadowDOM.innerHTML="\n\t\t<style>\n\t\t\tfooter{\n\t\t\t\tdisplay: block;\n\t\t\t\tpadding: 16px;\n\t\t\t\twidth: 100%;\n\t\t\t\tbackground-color: orange;\n\t\t\t\tcolor: black;\n\t\t\t\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin-top: 20px;\n\t\t\t}\n\t\t</style>\n\t\t<footer>\n\t\t\tAgy Nugroho &copy; 2020\n\t\t</footer>"}}customElements.define("app-footer",n)},function(t,e){class n extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='\n\t\t<div class="global">\n\t\t\t<div class="stats-container">\n\t\t\t\t<h4>Cases</h4>\n\t\t\t\t<h1 id="cases"></h1>\n\t\t\t\t<h4>Deaths</h4>\n\t\t\t\t<h1 id="deaths"></h1>\n\t\t\t\t<h4>Recovered</h4>\n\t\t\t\t<h1 id="recov"></h1>\n\t\t\t</div>\n\t\t\t<div class="location-container">\n\t\t\t\t<h1 id="country">All Country</h1>\n\t\t\t\t<img src="../src/image/world.png">\n\t\t\t\t<h4>Population</h4>\n\t\t\t\t<h1>7,7+ Billion</h1>\n\t\t\t</div>\n\t\t</div>'}}customElements.define("data-global",n)},function(t,e){class n extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='\n\t\t<div class="lokal">\n\t\t\t<div class="stats-container">\n\t\t\t<h4>Cases</h4>\n\t\t\t<h1 id="case"></h1>\n\t\t\t<h4>Recover</h4>\n\t\t\t<h1 id="recover"></h1>\n\t\t\t<h4>Deaths</h4>\n\t\t\t<h1 id="death"></h1>\n\t\t</div>\n\t\t<div class="location-container">\n\t\t\t<h1 id="country">INDONESIA</h1>\n\t\t\t<img src="../src/image/indonesia.png">\n\t\t\t<h4>Population</h4>\n\t\t\t<h1 id="population">269,6 Million</h1>\n\t\t</div>\n\t\t</div>'}}customElements.define("data-lokal",n)},function(t,e){class n extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML="\n\t\t<div id=allData>\n\t\t\t<table class=table1>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Number</th>\n\t\t\t\t\t<th>Province</th>\n\t\t\t\t\t<th>Positive</th>\n\t\t\t\t\t<th>Recovered</th>\n\t\t\t\t\t<th>Deaths</th>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>"}}customElements.define("table-data",n)},function(t,e,n){"use strict";n.r(e);n(0),n(1),n(2),n(3),n(4);(function(){fetch("https://covid.mathdro.id/api").then(t=>t.json()).then(t=>{document.getElementById("cases").innerHTML=t.confirmed.value,document.getElementById("deaths").innerHTML=t.deaths.value,document.getElementById("recov").innerHTML=t.recovered.value}).catch(()=>{console.log("error")}),fetch("https://covid19.mathdro.id/api/countries/indonesia").then(t=>t.json()).then(t=>{document.getElementById("case").innerHTML=t.confirmed.value,document.getElementById("recover").innerHTML=t.recovered.value,document.getElementById("death").innerHTML=t.deaths.value}).catch(()=>{console.log("error")}),fetch("https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi").then(t=>t.json()).then(t=>{let e=1;t.forEach(t=>{console.log(t.attributes.Provinsi);const n=document.createElement("province-list");n.innerHTML=`<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<table class="table1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>${e}</td> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>${t.attributes.Provinsi}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>${t.attributes.Kasus_Posi}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>${t.attributes.Kasus_Semb}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>${t.attributes.Kasus_Meni}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\t\n\t\t\t\t\t\t\t\t\t\t\t</div>`,document.getElementById("allData").appendChild(n),e++})}).catch(()=>{console.log("error")})})()}]);