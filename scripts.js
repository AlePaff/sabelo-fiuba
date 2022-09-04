var fechaActualizacion = "26/08/2022";

// inicializacion de los tooltip
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});



leerDatos();
async function leerDatos(){
   const response = await fetch("datos.json");
   const datos = await response.json();

   var elementosID1 = ["card_wiki_fiuba", "card_fiuba_drive", "card_sk_fiuba", "card_filadd", "card_js_apuntes", "card_fiuba_repos", "card_kiwipedia", "card_diq_fiuba"];
   var elementosID2 = ["card_fiuba_consultas", "card_foros_fiuba"];
   var elementosID3 = ["card_dolly_fiuba", "card_fiuba_opiniones_compu"];
   var elementosID4 = ["card_fiuba_map", "card_fiuba_plan", "card_grupos_fiuba", "card_fiubaverse", "card_mli_fiuba", "card_FIUBA_Noticias"];
   const elementosID = elementosID1.concat(elementosID2, elementosID3, elementosID4);
   
   for(let i=0; i < elementosID.length; i++){
	document.getElementById(elementosID[i]).innerHTML = createCard(datos[i].nombre, datos[i].desc, datos[i].link, datos[i].imagen, datos[i].observacion);
   }

   var elementosIDVarios = ["card_catalogo_fiuba", "card_libreria", "card_videos_youtube"];
   var longTot = elementosID.length
   for(let i=0; i < elementosIDVarios.length; i++){
	document.getElementById(elementosIDVarios[longTot+i]).innerHTML = cartasVarios(datos[longTot+i].nombre, datos[longTot+i].desc, datos[longTot+i].link);
   }
}



// datos de cada proyecto
function createCard(nombre, desc, link, linkImage, observacion) {
	var card_start = `
	<div class="col">
	<div class="card">
		<a href=${link} target="_blank">
		<div class="img-hover-zoom img-hover-zoom--xyz">						
		<img src=${linkImage} class="card-img-top" onerror="this.onerror=null; this.src='images/placeholder.png'"></a></div>
		<div class="card-body">
		<h5 class="card-title">${nombre}
	`;
	var card_end = `
		</h5>
		<p class="card-text">${desc}</p>		        
	</div>
	</div>
	</div>
	`;

	if (observacion){
		return card_start + `<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:" data-toggle="tooltip" title=${observacion} data-placement="top"><use xlink:href="#exclamation-triangle-fill"/></svg>` + card_end;
	};
	return card_start + card_end;
}




function cartasVarios(nombre, desc, link) {
	return `
			  <div class="card">

					<div class="card-varios-transition">
			    <div class="card-body">
		        <h5 class="card-title">${nombre}</h5>
		        <p class="card-text">${desc}</p>
		        <a href=${link} class="stretched-link" target="_blank"></a>
			    </div></div>
			  </div>
			  `
};



