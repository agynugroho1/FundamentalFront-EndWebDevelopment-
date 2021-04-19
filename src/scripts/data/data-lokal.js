class DataLokal extends HTMLElement{
	connectedCallback(){
		this.render();
	}
	render(){
		this.innerHTML = `
		<div class="lokal">
			<div class="stats-container">
			<h4>Cases</h4>
			<h1 id="case"></h1>
			<h4>Recover</h4>
			<h1 id="recover"></h1>
			<h4>Deaths</h4>
			<h1 id="death"></h1>
		</div>
		<div class="location-container">
			<h1 id="country">INDONESIA</h1>
			<img src="../src/image/indonesia.png">
			<h4>Population</h4>
			<h1 id="population">269,6 Million</h1>
		</div>
		</div>`;
	}
}
customElements.define("data-lokal", DataLokal);