function main(){
	const getDataGlobal = () =>{
		fetch('https://covid.mathdro.id/api')
		.then(response =>{
			return response.json()
		})
		.then(data =>{
			document.getElementById('cases').innerHTML = data.confirmed.value;
			document.getElementById('deaths').innerHTML = data.deaths.value;
			document.getElementById('recov').innerHTML = data.recovered.value;
		})
		.catch(()=>{
			console.log("error");
		})
	}
	const getDataLokal = () =>{
		fetch('https://covid19.mathdro.id/api/countries/indonesia')
		.then(response =>{
			return response.json()
		})
		.then(data =>{
			document.getElementById('case').innerHTML = data.confirmed.value;
			document.getElementById('recover').innerHTML = data.recovered.value;
			document.getElementById('death').innerHTML = data.deaths.value;
		})
		.catch(() =>{
			console.log("error");
		})
	}
	const allData = () =>{
		fetch('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi')
		.then(response =>{
			return response.json()
		})
		.then(data =>{
			let n=1;
			data.forEach((obj) =>{
				console.log(obj.attributes.Provinsi);
				const provinceElement = document.createElement('province-list');
				provinceElement.innerHTML = `<div>
												<table class="table1">
													<tr>
														<td>${n}</td> 
														<td>${obj.attributes.Provinsi}</td>
														<td>${obj.attributes.Kasus_Posi}</td>
														<td>${obj.attributes.Kasus_Semb}</td>
														<td>${obj.attributes.Kasus_Meni}</td>
													</tr>
												</table>	
											</div>`;
				document.getElementById('allData').appendChild(provinceElement);
				n++;
			});
		})
		.catch(() =>{
			console.log("error");
		})
	}

	getDataGlobal();
	getDataLokal();
	allData();
}

export default main;