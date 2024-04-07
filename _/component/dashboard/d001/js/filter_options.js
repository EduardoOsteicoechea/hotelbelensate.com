// Called from ../markup/search_bar

import generate_children_age_container_elements from "./generate_children_age_container_elements.js";

export default function filter_options 
(
	root_folder,
	search_bar_class,
	search_bar_id,
	parameters_container_id,
	arrival_parameter_container_id,
	departure_parameter_container_id,
	adults_parameter_container_id,
	children_parameter_container_id,
	children_age_parameter_container_id,
	execute_parameter_container_id,
	execute_parameter_container_button_id,
) {
	window.addEventListener("load", function(){
		const search_bar_container = document.getElementById(search_bar_id);
		const parameters_container = document.getElementById(parameters_container_id);
		const arrival_parameter_container = document.getElementById(arrival_parameter_container_id);
		const arrival_parameter_container_input = document.getElementById(arrival_parameter_container_id + "_input");
		const departure_parameter_container = document.getElementById(departure_parameter_container_id);
		const departure_parameter_container_input = document.getElementById(departure_parameter_container_id + "_input");
		const adults_parameter_container = document.getElementById(adults_parameter_container_id);
		const adults_parameter_container_input = document.getElementById(adults_parameter_container_id + "_input");
		const children_parameter_container = document.getElementById(children_parameter_container_id);
		const children_parameter_container_input = document.getElementById(children_parameter_container_id + "_input");
		const children_age_parameter_container = document.getElementById(children_age_parameter_container_id);
		const execute_parameter_container = document.getElementById(execute_parameter_container_id);
		const execute_parameter_container_button = document.getElementById(execute_parameter_container_button_id);

		arrival_parameter_container_input.focus();

		arrival_parameter_container_input.addEventListener("change",()=>{
			departure_parameter_container_input.disabled = false;
			departure_parameter_container_input.classList.remove("disabled_input");
		});

		departure_parameter_container_input.addEventListener("change",()=>{
			adults_parameter_container_input.disabled = false;
			adults_parameter_container_input.classList.remove("disabled_input");
		});

		adults_parameter_container_input.addEventListener("input",()=>{
			children_parameter_container_input.disabled = false;
			children_parameter_container_input.classList.remove("disabled_input");
		});

		children_parameter_container_input.addEventListener("input",(e)=>{
			generate_children_age_container_elements(e.target, children_age_parameter_container, execute_parameter_container_button);
		});
	});
}

