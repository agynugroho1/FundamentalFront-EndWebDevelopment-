class AppHeadBar extends HTMLElement{
	constructor(){
		super();
		this._shadowDOM = this.attachShadow({mode: "closed"});
	}
	connectedCallback(){
		this.render();
	}
	render(){
		this._shadowDOM.innerHTML = `
		<style>
			h2{
				display: block;
				padding: 16px;
				width: 100%;
				background-color: orange;
				color: black;
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
				text-align: center;
				margin-top: 0;
			}
		</style>
		<h2>Monitoring COVID-19</h2>`;
	}
}
customElements.define("app-header", AppHeadBar);