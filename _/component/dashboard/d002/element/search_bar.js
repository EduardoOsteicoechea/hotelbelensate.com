// called from "./a001_class.js";


import search_bar_container_styles from "../style/search_bar_container_styles.js";

export default function search_bar(
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	sesion_array,
	data,
	outer_container,
){
	const search_bar_container = document.createElement("div");
	search_bar_container_styles(search_bar_container);
	search_bar_container.id = component_id + "_" + "search_bar_container";
	search_bar_container.classList.add(component_class + "_" + "search_bar_container");
	
	outer_container.appendChild(search_bar_container)
}