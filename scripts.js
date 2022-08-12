var fechaActualizacion = "12/08/2022";


// inicializacion de los tooltip
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});




// datos de cada proyecto
function createCard(nombre, desc, link, linkImage) {
	return `
						  <div class="col">
			    	<div class="card">
						<a href=${link} target="_blank">
						<div class="img-hover-zoom img-hover-zoom--xyz">						
			      <img src=${linkImage} class="card-img-top" onerror="this.onerror=null; this.src='images/placeholder.png'"></a></div>
			      <div class="card-body">
			        <h5 class="card-title">${nombre}</h5>
			        <p class="card-text">${desc}</p>
			        
			      </div>
			    </div>
			  </div>`
		};

// uso de $ y de _ en javascript -> https://www.thoughtco.com/and-in-javascript-2037515
$(function(){
			// $('#card_').append($(createCard('preset_nombre', "descripcion", "link", "imagen")));

			$('#card_wiki_fiuba').append($(createCard('Wiki Fiuba', 	"Espacio colaborativo donde podés encontrar materiales de estudio para la carrera", "http://wiki.foros-fiuba.com.ar/", "images/wiki-fiuba.jpg")));
			$('#card_fiuba_drive').append($(createCard('Fiuba Drive', 	"Drive creado para subir material de tu curso y encontrar el de otros", "https://sites.google.com/view/drive-fiuba/", "images/fiuba-drive.jpg")));
			$('#card_sk_fiuba').append($(createCard('SK FIUBA',	 		"Guias, examenes y apuntes para las materias de ingeniería industrial", "https://sites.google.com/view/skfiuba/materias?authuser=0", "images/sk-fiuba.jpg")));
			$('#card_filadd').append($(createCard('Filadd', 			"Distintos recursos de varias materias de la fiuba", "https://filadd.com/resultados-aportes/uba/ingenieria-uba/probabilidad-y-estadistica-a/51/2349", "images/filadd.jpg")));
			$('#card_js_apuntes').append($(createCard('JS Apuntes', 	"Material dividido por carpetas descargables para materias de ingeniería industrial", "https://sites.google.com/view/site-js-apuntes", "images/js-apuntes.jpg")));
			$('#card_fiuba_repos').append($(createCard('Fiuba Repos', 	"Colección de repositorios con material de cursadas de materias, principalmente informática", "https://fede.dm/FIUBA-Repos/", "images/fiuba-repos.jpg")));
			$('#card_kiwipedia').append($(createCard('Kiwipedia', 		"Material dividido por deptos y materias para ingeniería industrial", "https://fiubaar.sharepoint.com/sites/kiwipedia/SitePages/Kiwipedia.aspx", "images/kiwipedia.jpg")));


			$('#card_fiuba_consultas').append($(createCard('Fiuba Consultas', "Grupo general sobre consultas, temas administrativos, noticias, polemica y memes", "https://www.facebook.com/groups/fiubaconsultas2", "images/fiuba-consultas.jpg")));


			$('#card_dolly_fiuba').append($(createCard('Dolly Fiuba', "Encuestas de estudiantes sobre cada catedra y materia de la fiuba", "https://dollyfiuba.com/", "images/dolly.jpg")));
			$('#card_fiuba_opiniones_compu').append($(createCard('FIUBA Opiniones de Cursos', "Opiniones sobre materias del depto de computación", "https://fiuba-opiniones-de-curso.herokuapp.com/", "images/opiniones-fiuba.jpg")));


			$('#card_fiuba_map').append($(createCard('Fiuba Map', "Diagrama interactivo de correlatividades de materias de cada carrera", "https://fede.dm/FIUBA-Map/", "images/fiuba-map.jpg")));
			$('#card_fiuba_plan').append($(createCard('Fiuba Plan', "Organizador de horarios", "https://fede.dm/FIUBA-Plan/", "images/fiuba-plan.jpg")));


			$('#card_grupos_fiuba').append($(createCard('Grupos fiuba', "Grupos de whatsapp de algunas materias", "https://linktr.ee/grupos_fiuba", "images/grupos-fiuba.png")));
			$('#card_fiubaverse').append($(createCard('Fiuba Verse', "Todo tipo de grupos de telegram de materias, noticias y ocio", "https://fiubaverse.github.io/", "images/fiubaverse.png")));


			$('#card_mli_fiuba').append($(createCard('MLI fiuba', "Instagram del MLI sobre noticias y novedades de la fiuba", "https://www.instagram.com/mli.fiuba/?hl=es-la", "images/mli.fiuba.png")));
			$('#card_FIUBA_Noticias').append($(createCard('Fiuba Noticias', "Canal de telegram con noticias sobre la fiuba", "https://t.me/s/FIUBA_Noticias", "images/telegram-noticias.png")));

});


