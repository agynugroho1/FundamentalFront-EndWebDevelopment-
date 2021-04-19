class TableData extends HTMLElement{
	connectedCallback(){
		this.render();
	}
	render(){
		this.innerHTML = `
		<div id=allData>
			<table class=table1>
				<tr>
					<th>Number</th>
					<th>Province</th>
					<th>Positive</th>
					<th>Recovered</th>
					<th>Deaths</th>
				</tr>
			</table>
		</div>`;
	}
}
customElements.define("table-data", TableData);