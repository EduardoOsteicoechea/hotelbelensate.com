// Called from ./generate_room_available_dates_container_elements.js
export default function generate_month_user_interface_elements (
	month_name, 
	month_day_quantity, 
	month_year, 
	is_current_month, 
	component_name, 
	component_item_name, 
	component_item_component, 
	room_available_dates_container,
	month_id
	) {
		

	const month_elements_container = document.createElement("div");
	month_elements_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + month_id;
	month_elements_container.classList.add(component_name + "_" + "month_elements_container");
	room_available_dates_container.appendChild(month_elements_container);
	
	const month_name_container = document.createElement("div");
	month_name_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + month_id + "_" + "month_name_container";
	month_name_container.classList.add(component_name + "_" + "month_name_container");
	month_elements_container.appendChild(month_name_container);
	const month_name_container_name_element = document.createElement("p");
	month_name_container_name_element.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + month_id + "_" + "month_name_container_name_element";
	month_name_container_name_element.classList.add(component_name + "_" + "month_name_container_name_element");
	month_name_container_name_element.innerHTML = month_name;
	month_name_container.appendChild(month_name_container_name_element);

	const month_days_names_container = document.createElement("div");
	month_days_names_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_days_names_container" + "_" + month_id;
	month_days_names_container.classList.add(component_name + "_" + "month_days_names_container");
	month_elements_container.appendChild(month_days_names_container);

	generate_day_numbers_rows(
		component_name, 
		component_item_name, 
		component_item_component, 
		month_name, month_day_quantity, 
		month_year, 
		month_days_names_container, 
		month_id
	);

	console.log(month_name);
	console.log(month_day_quantity);
	console.log(month_year);

	if (is_current_month == "current")
	{
		generate_day_div_element(component_name, component_item_name, component_item_component, month_name, month_day_quantity, month_year, month_elements_container, month_id)
	}
	else
	{
		generate_day_div_element(component_name, component_item_name, component_item_component, month_name, month_day_quantity, month_year, month_elements_container, month_id)
	};

	return month_elements_container;
};

function generate_day_div_element(
	component_name, 
	component_item_name, 
	component_item_component, 
	month_name, month_day_quantity, 
	month_year, 
	month_elements_container, 
	month_id
) {
	for (let i = 0; i < month_day_quantity; i++) {
		const day_element_container = document.createElement("div");
		day_element_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + month_id + "_" + "day_" + (i + 1);
		day_element_container.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container");
		
		const day_element_day_number = document.createElement("p");
		day_element_day_number.innerHTML = i + 1;
		day_element_day_number.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + month_id + "_" + "day_" + (i + 1) + "_" + "day_number";
		day_element_day_number.classList.add(component_name + "_" + "month_elements_container" + "_" + "day" + "_" + "day_number");

		day_element_container.appendChild(day_element_day_number);
		month_elements_container.appendChild(day_element_container);
	}
};

function generate_day_numbers_rows(
	component_name, 
	component_item_name, 
	component_item_component, 
	month_name, month_day_quantity, 
	month_year, 
	month_days_names_container, 
	month_id
) {
	const day_names = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
	
	for (let i = 0; i < day_names.length; i++) {
		
		const day_row_container_day_container = document.createElement("div");
		day_row_container_day_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + month_id + "_" + "day_row_container_day_conatiner" + "_" + (i + 1);
		day_row_container_day_container.classList.add(component_name + "_" + "day_row_container_day_conatiner");

		const day_row_container_day_name = document.createElement("p");
		day_row_container_day_name.innerHTML = day_names[i];
		day_row_container_day_name.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + month_id + "_" + "day_row_container_day_name";
		day_row_container_day_name.classList.add(component_name + "_" + "day_row_container_day_name");

		
		day_row_container_day_container.appendChild(day_row_container_day_name);
		month_days_names_container.appendChild(day_row_container_day_container);
	}
};
