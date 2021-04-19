class AppFootBar extends HTMLElement{
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
			footer{
				display: block;
				padding: 16px;
				width: 100%;
				background-color: orange;
				color: black;
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
				text-align: center;
				margin-top: 20px;
			}
		</style>
		<footer>
			Agy Nugroho &copy; 2020
		</footer>`;
	}
}
customElements.define("app-footer", AppFootBar);