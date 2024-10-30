// Called from ../markup/search_bar

import generate_children_age_container_elements from "./generate_children_age_container_elements.js";
import regenerate_room_options from "./regenerate_room_options.js";

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

		const search_bar_parameters_values_object = {};

		arrival_parameter_container_input.focus();

		arrival_parameter_container_input.addEventListener("change",()=>{
			departure_parameter_container_input.disabled = false;
			departure_parameter_container_input.classList.remove("disabled_input");

			var min_date = new Date(arrival_parameter_container_input.value);
			min_date.setTime(min_date.getTime() + 86400000);
			var formatted_min_date = min_date.toISOString().slice(0,10);

			var max_date = new Date();
			var milliseconds_per_day = 24 * 60 * 60 * 1000;
			var approximated_days_in_three_months = 30 * 3;
			max_date.setTime(max_date.getTime() + milliseconds_per_day * approximated_days_in_three_months);
			var formatted_max_date = max_date.toISOString().slice(0,10);

			departure_parameter_container_input.setAttribute("min", formatted_min_date);
			departure_parameter_container_input.setAttribute("max", formatted_max_date);

			search_bar_parameters_values_object["arrival_parameter_container_input"] = arrival_parameter_container_input.value;
		});

		departure_parameter_container_input.addEventListener("change",()=>{
			adults_parameter_container_input.disabled = false;
			adults_parameter_container_input.classList.remove("disabled_input");
			search_bar_parameters_values_object["departure_parameter_container_input"] = departure_parameter_container_input.value;
		});

		adults_parameter_container_input.addEventListener("input",()=>{
			children_parameter_container_input.disabled = false;
			children_parameter_container_input.classList.remove("disabled_input");
			search_bar_parameters_values_object["adults_parameter_container_input"] = adults_parameter_container_input.value;
		});

		children_parameter_container_input.addEventListener("input",(e)=>{
			search_bar_parameters_values_object["children_parameter_container_input"] = children_parameter_container_input.value;
			generate_children_age_container_elements(
				search_bar_class,
				e.target, 
				children_age_parameter_container, 
				execute_parameter_container_button, 
				search_bar_parameters_values_object,
			);
		});

		
		execute_parameter_container_button.addEventListener("pointerup",()=>{
			regenerate_room_options(root_folder, search_bar_parameters_values_object);
		});
	});
}

