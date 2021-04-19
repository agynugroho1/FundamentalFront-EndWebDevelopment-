class DataGlobal extends HTMLElement{
	connectedCallback(){
		this.render();
	}
	render(){
		this.innerHTML = `
		<div class="global">
			<div class="stats-container">
				<h4>Cases</h4>
				<h1 id="cases"></h1>
				<h4>Deaths</h4>
				<h1 id="deaths"></h1>
				<h4>Recovered</h4>
				<h1 id="recov"></h1>
			</div>
			<div class="location-container">
				<h1 id="country">All Country</h1>
				<img src="../src/image/world.png">
				<h4>Population</h4>
				<h1>7,7+ Billion</h1>
			</div>
		</div>`;
	}
}
customElements.define("data-global", DataGlobal);