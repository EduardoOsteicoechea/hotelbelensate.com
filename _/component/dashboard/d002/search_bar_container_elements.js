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
	search_bar_parameters_values_object,
){
	const months_data_object = get_reservation_maximun_date_from_today(3);
	console.log(months_data_object);

	// TOOGLE BUTTON

	const toogle_button = document.createElement("div");
	toogle_button.id = search_bar_container_id + "_" + "toogle_button";
	toogle_button.classList.add(search_bar_container_class + "_" + "toogle_button");

	const toogle_button_arrow_container = document.createElement("div");
	toogle_button_arrow_container.id = search_bar_container_id + "_" + "toogle_button_arrow_container";
	toogle_button_arrow_container.classList.add(search_bar_container_class + "_" + "toogle_button_arrow_container");

	const toogle_button_arrow_container_arrow_1 = document.createElement("div");
	toogle_button_arrow_container_arrow_1.id = search_bar_container_id + "_" + "toogle_button_arrow_container_arrow_1";
	toogle_button_arrow_container_arrow_1.classList.add(search_bar_container_class + "_" + "toogle_button_arrow_container_arrow");

	const toogle_button_arrow_container_arrow_2 = document.createElement("div");
	toogle_button_arrow_container_arrow_2.id = search_bar_container_id + "_" + "toogle_button_arrow_container_arrow_2";
	toogle_button_arrow_container_arrow_2.classList.add(search_bar_container_class + "_" + "toogle_button_arrow_container_arrow");

	const toogle_button_paragraph = document.createElement("p");
	toogle_button_paragraph.id = search_bar_container_id + "_" + "toogle_button_paragraph";
	toogle_button_paragraph.classList.add(search_bar_container_class + "_" + "toogle_button_paragraph");
	toogle_button_paragraph.innerHTML = "mostrar filtros";

	toogle_button_arrow_container.appendChild(toogle_button_arrow_container_arrow_1);
	toogle_button_arrow_container.appendChild(toogle_button_arrow_container_arrow_2);
	toogle_button.appendChild(toogle_button_arrow_container);
	toogle_button.appendChild(toogle_button_paragraph);

	// FILTER PARAMETERS CONTAINER

	const filter_parameters_container = document.createElement("div");
	filter_parameters_container.id = search_bar_container_id + "_" + "filter_parameters_container";
	filter_parameters_container.classList.add(search_bar_container_class + "_" + "filter_parameters_container");
	filter_parameters_container.setAttribute("style","height:0px");

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
		search_bar_parameters_values_object,
	);

	search_bar_container.appendChild(toogle_button);
	search_bar_container.appendChild(filter_parameters_container);

	Array.from(filter_parameters_container.children).forEach(element => {
		element.style.opacity = "0";
	});

	toogle_button.addEventListener("pointerup",()=>{
		if (parseInt(filter_parameters_container.style.height) === 0) {
			Array.from(filter_parameters_container.children).forEach(element => {
				element.style.opacity = "1";
			});
			filter_parameters_container.style.height = "fit-content";
			toogle_button_paragraph.style.padding = "0";
			toogle_button_paragraph.innerHTML = "";
			// toogle_button_paragraph.innerHTML = "ocultar filtros";
			toogle_button_arrow_container.style.transform = "rotate(90deg)";
		} else {
			Array.from(filter_parameters_container.children).forEach(element => {
				element.style.opacity = "0";
			});
			filter_parameters_container.style.height = 0 + "px";
			// toogle_button_paragraph.innerHTML = "";
			toogle_button_paragraph.innerHTML = "mostrar filtros";
			toogle_button_paragraph.style.padding = "0 .75rem";
			toogle_button_arrow_container.style.transform = "rotate(0deg)";
		};
	});

	add_component_style_tag( component_folder, "search_bar_container_elements" );
	add_component_style_tag( component_folder, "search_bar_parameters_elements" );
}