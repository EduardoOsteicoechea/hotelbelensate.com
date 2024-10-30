// Called from ../d002.php

import search_bar_container_elements from "./search_bar_container_elements.js";
export default function search_bar_container(
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	sesion_array,
	data,
	component_container,
){
	const search_bar_container = document.createElement("div");
	search_bar_container.id = component_id + "_search_bar_container";
	search_bar_container.classList.add(component_class + "_search_bar_container");
	add_component_style_tag( component_folder, "search_bar_container" );

	const search_bar_parameters_values_object = {};

	search_bar_container_elements(
		root_folder,
		component_id,
		component_class,
		component_folder,
		component_type,
		sesion_array,
		data,
		component_container,
		search_bar_container,
		component_id + "_search_bar_container",
		component_class + "_search_bar_container",
		search_bar_parameters_values_object,
	);

	component_container.appendChild(search_bar_container);
}