// Called from ./search_bar_container.js

// import search_bar_container_elements from "./search_bar_container_elements.js";
import get_reservation_maximun_date_from_today from './get_reservation_maximun_date_from_today.js';
import search_bar_parameters_elements from './search_bar_parameters_elements.js';

export default function search_bar_container_elements(
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	sesion_array,
	data,
	component_container,
	search_bar_container,
	search_bar_container_id,
	search_bar_container_class,
){
	const months_data_object = get_reservation_maximun_date_from_today(3);
	console.log(months_data_object);

	// TOOGLE BUTTON

	const toogle_button = document.createElement("div");
	toogle_button.id = search_bar_container_id + "_" + "toogle_button";
	toogle_button.classList.add(search_bar_container_class + "_" + "toogle_button");
	toogle_button.innerHTML = "mostrar parámetros para filtrar opciones";
	toogle_button.addEventListener("pointerup",()=>{
		console.log("event")
	});

	// FILTER PARAMETERS CONTAINER

	const filter_parameters_container = document.createElement("div");
	filter_parameters_container.id = search_bar_container_id + "_" + "filter_parameters_container";
	filter_parameters_container.classList.add(search_bar_container_class + "_" + "filter_parameters_container");

	search_bar_parameters_elements(
		root_folder,
		component_id,
		component_class,
		component_folder,
		component_type,
		sesion_array,
		data,
		component_container,
		filter_parameters_container,
		search_bar_container_id + "_" + "filter_parameters_container",
		search_bar_container_class + "_" + "filter_parameters_container",
	);

	search_bar_container.appendChild(toogle_button);
	search_bar_container.appendChild(filter_parameters_container);
}