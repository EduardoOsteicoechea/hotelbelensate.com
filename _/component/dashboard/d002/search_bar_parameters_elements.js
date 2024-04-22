// Called from ./search_bar_container_elements.js

import search_bar_children_age_elements from "./search_bar_children_age_elements.js";

export default function search_bar_parameters_elements(
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

	// ARRIVAL

	const arrival_input = document.createElement("input");
	arrival_input.id = search_bar_container_id + "_" + "arrival_input";
	arrival_input.classList.add(search_bar_container_class + "_" + "input");
	arrival_input.setAttribute("type","date");
	arrival_input.setAttribute("min",new Date("today"));
	arrival_input.setAttribute("title",arrival_input.id);

	const arrival_input_label = document.createElement("label");
	arrival_input_label.id = search_bar_container_id + "_" + "arrival_input_label";
	arrival_input_label.classList.add(search_bar_container_class + "_" + "input_label");
	arrival_input_label.innerHTML = "llegada";
	arrival_input_label.setAttribute("for",arrival_input.id);

	// DEPARTURE
	
	const departure_input = document.createElement("input");
	departure_input.id = search_bar_container_id + "_" + "departure_input";
	departure_input.classList.add(search_bar_container_class + "_" + "input");
	departure_input.setAttribute("type","date");
	departure_input.setAttribute("min",new Date("today"));
	departure_input.setAttribute("title",departure_input.id);

	const departure_input_label = document.createElement("label");
	departure_input_label.id = search_bar_container_id + "_" + "departure_input_label";
	departure_input_label.classList.add(search_bar_container_class + "_" + "input_label");
	departure_input_label.innerHTML = "salida";
	departure_input_label.setAttribute("for",departure_input.id);

	// ADULT QUANTITY
	
	const adult_quantity_input = document.createElement("input");
	adult_quantity_input.id = search_bar_container_id + "_" + "adult_quantity_input";
	adult_quantity_input.classList.add(search_bar_container_class + "_" + "input");
	adult_quantity_input.setAttribute("type","number");
	adult_quantity_input.setAttribute("min",new Date("today"));
	adult_quantity_input.setAttribute("title",adult_quantity_input.id);

	const adult_quantity_input_label = document.createElement("label");
	adult_quantity_input_label.id = search_bar_container_id + "_" + "adult_quantity_input_label";
	adult_quantity_input_label.classList.add(search_bar_container_class + "_" + "input_label");
	adult_quantity_input_label.innerHTML = "adultos";
	adult_quantity_input_label.setAttribute("for",adult_quantity_input.id);

	// CHILDREN AGES CONTAINER
	
	const children_ages_container = document.createElement("div");
	children_ages_container.id = search_bar_container_id + "_" + "children_ages_container";
	children_ages_container.classList.add(search_bar_container_class + "_" + "children_ages_container");

	// CHILDREN QUANTITY && (ON-INPUT) CHILDREN AGES ELEMENTS
	
	const children_quantity_input = document.createElement("input");
	children_quantity_input.id = search_bar_container_id + "_" + "children_quantity_input";
	children_quantity_input.classList.add(search_bar_container_class + "_" + "input");
	children_quantity_input.setAttribute("type","number");
	children_quantity_input.setAttribute("min",new Date("today"));
	children_quantity_input.setAttribute("title",children_quantity_input.id);
	children_quantity_input.addEventListener("input",()=>{
		search_bar_children_age_elements(
			search_bar_container_class + "_" + "children_ages_container",
			children_quantity_input, 
			children_ages_container,
			search_bar_parameters_values_object
		) ;
	});

	const children_quantity_input_label = document.createElement("label");
	children_quantity_input_label.id = search_bar_container_id + "_" + "children_quantity_input_label";
	children_quantity_input_label.classList.add(search_bar_container_class + "_" + "input_label");
	children_quantity_input_label.innerHTML = "niños";
	children_quantity_input_label.setAttribute("for",children_quantity_input.id);

	// ROOMS PREFERRED OPTIONS

	// RESTART PARAMETERS BUTTON

	// FILTER BY CURRENT PARAMETERS BUTTON

	// APPEND ELEMENTS TO CONTAINER

	search_bar_container.appendChild(arrival_input);
	search_bar_container.appendChild(arrival_input_label);
	search_bar_container.appendChild(departure_input);
	search_bar_container.appendChild(departure_input_label);
	search_bar_container.appendChild(adult_quantity_input);
	search_bar_container.appendChild(adult_quantity_input_label);
	search_bar_container.appendChild(children_quantity_input);
	search_bar_container.appendChild(children_quantity_input_label);
	search_bar_container.appendChild(children_ages_container);
}