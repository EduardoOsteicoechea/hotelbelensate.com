// Called from "./filter_options.js"

export default function generate_children_age_container_elements 
(
	children_quantity_input_element, 
	children_age_parameter_container,
	execute_parameter_container_button,
) 
{
	children_age_parameter_container.classList.remove("disabled_container");

	children_age_parameter_container.innerHTML = "";
	
	for (let i = 0; i < children_quantity_input_element.value; i++) {
		const label = document.createElement("label");
		label.innerHTML = "Edad de niño " + (i + 1);
		children_age_parameter_container.appendChild(label);

		const input = document.createElement("input");
		children_age_parameter_container.appendChild(input);
	}

	execute_parameter_container_button.disabled = false;
	execute_parameter_container_button.classList.remove("disabled_button");

	// Add Close button
	// Actibate execute button when all inputs are filled
}

