// Called from "./filter_options.js"

export default function generate_children_age_container_elements 
(
	search_bar_class,
	children_quantity_input_element, 
	children_age_parameter_container,
	execute_parameter_container_button,
	search_bar_parameters_values_object,
)  
{
	children_age_parameter_container.classList.remove("disabled_container");
	children_quantity_input_element.style.pointerEvents = "none";
	children_age_parameter_container.innerHTML = "";

	const children_age_input_array = [];
	
	for (let i = 0; i < children_quantity_input_element.value; i++) {
		const label = document.createElement("label");
		label.innerHTML = "Edad de niño " + (i + 1);
		children_age_parameter_container.appendChild(label);

		const input = document.createElement("input");
		input.classList.add(search_bar_class+"_children_age_input");
		input.setAttribute("type","number");
		if (i > 0) {
			input.disabled = true;
			input.classList.add("disabled_input");
		};
		children_age_parameter_container.appendChild(input);

		children_age_input_array.push(input);
	};

	search_bar_parameters_values_object["children_age_input_array"] = [];

	for (let i = 0; i < children_age_input_array.length; i++) {
		const input = children_age_input_array[i];
		const input_quantity = children_age_input_array.length;
		if (i < input_quantity - 1){
			input.addEventListener("input",()=>{
				children_age_input_array[i + 1].disabled = false;
				children_age_input_array[i + 1].classList.remove("disabled_input");
				search_bar_parameters_values_object["children_age_input_array"].push(input.value);
			});
		} else {	
			input.addEventListener("input",()=>{			
				accept_button.disabled = false;
				accept_button.classList.remove("disabled_button");
				search_bar_parameters_values_object["children_age_input_array"].push(input.value);
			});
		};
	};

	const close_button = document.createElement("div");
	close_button.classList.add(search_bar_class+"_children_age_container_close_button");
	close_button.innerHTML = "X";
	close_button.addEventListener("pointerup",()=>{
		children_age_parameter_container.remove();
		children_quantity_input_element.value = "0";
		execute_parameter_container_button.disabled = false;
		execute_parameter_container_button.classList.add("disabled_button");
	});
	children_age_parameter_container.appendChild(close_button);

	const accept_button = document.createElement("div");
	accept_button.classList.add(search_bar_class+"_children_age_container_accept_button");
	accept_button.innerHTML = "Aceptar";
	accept_button.disabled = true;
	accept_button.classList.add("disabled_button");
	accept_button.addEventListener("pointerup",()=>{
		children_age_parameter_container.classList.add("disabled_container");
		execute_parameter_container_button.disabled = false;
		execute_parameter_container_button.classList.remove("disabled_button");
	});
	children_age_parameter_container.appendChild(accept_button);

	children_quantity_input_element.addEventListener("input",()=>{
		execute_parameter_container_button.disabled = true;
		execute_parameter_container_button.classList.remove("enabled_button");
		execute_parameter_container_button.classList.add("disabled_button");
		search_bar_parameters_values_object["children_parameter_container_input"].push(input.value);
	});

}

