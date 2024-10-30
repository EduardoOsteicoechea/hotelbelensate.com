// Called from ./generate_room_available_dates_container_elements.js

import generate_selected_day_click_event from "./generate_selected_day_click_event.js";

export default function generate_month_user_interface_elements (
	component_name, 
	component_item_name, 
	component_item_component, 
	room_available_dates_container,
	months_data_object,
	room_name_and_modal_prompt_container_prompt,
	selected_dates_container_start_date,
	selected_dates_container_dates_separator,
	selected_dates_container_end_date,
	selected_dates_container_accept_dates_button,
	selected_dates_container_restart_dates_button,
	selected_dates_container_day_count_container,
	selected_dates_container_total_price_container,
	room_price_by_day,
	) {
	let day_list = [];
		
	for (let i = 0; i < months_data_object[0].length; i++) 
	{
		const month = months_data_object[0][i];
		// console.log(month);

		const month_elements_container = document.createElement("div");
		month_elements_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + i;
		month_elements_container.classList.add(component_name + "_" + "month_elements_container");
		room_available_dates_container.appendChild(month_elements_container);
		
		const month_name_container = document.createElement("div");
		month_name_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + i + "_" + "month_name_container";
		month_name_container.classList.add(component_name + "_" + "month_name_container");
		month_elements_container.appendChild(month_name_container);

		const month_name_container_name_element = document.createElement("p");
		month_name_container_name_element.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + i + "_" + "month_name_container_name_element";
		month_name_container_name_element.classList.add(component_name + "_" + "month_name_container_name_element");
		month_name_container_name_element.innerHTML = month["name"];
		month_name_container.appendChild(month_name_container_name_element);
	
		const month_days_names_container = document.createElement("div");
		month_days_names_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_days_names_container" + "_" + i;
		month_days_names_container.classList.add(component_name + "_" + "month_days_names_container");
		month_elements_container.appendChild(month_days_names_container);
	
		const day_number_rows = generate_day_numbers_rows(
			component_name, 
			component_item_name, 
			component_item_component, 
			month["name"], 
			month["number of days"], 
			month["year"], 
			month,
			month_days_names_container, 
			i
		);
		
		day_list.push(
			generate_day_div_element(
				component_name, 
				component_item_name, 
				component_item_component, 
				month["name"], 
				month["number of days"], 
				month["year"],
				month,
				month_elements_container, 
				i,
				month_days_names_container,
				room_available_dates_container,
				room_name_and_modal_prompt_container_prompt
			)
		);
		
		if (i == 0) 
		{
			const today_number = new Date().getDate();
			Array.from(day_number_rows).forEach(element => {
				Array.from(element.children).forEach(day => {
					if(day.children[0])
					{
						if (parseInt(day.children[0].innerHTML) < today_number) 
						{
							day.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "empty");
							day.innerHTML = "";
						};
					}
				});
			});
		};
		
	};

	generate_selected_day_click_event(
		component_name, 
		component_item_name, 
		component_item_component, 
		room_available_dates_container,
		months_data_object,
		room_name_and_modal_prompt_container_prompt,
		day_list,
		selected_dates_container_start_date,
		selected_dates_container_dates_separator,
		selected_dates_container_end_date,
		selected_dates_container_accept_dates_button,
		selected_dates_container_restart_dates_button,
		selected_dates_container_day_count_container,
		selected_dates_container_total_price_container,
		room_price_by_day,
	);
};

function generate_day_numbers_rows(
	component_name, 
	component_item_name, 
	component_item_component, 
	month_name, 
	month_day_quantity, 
	month_year, 
	month,
	month_days_names_container, 
	id
) {
	const abreviated_day_names_array = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
	const day_rows_containers = []
	
	for (let i = 0; i < abreviated_day_names_array.length; i++) {
		
		const day_row_container_day_container = document.createElement("div");
		day_row_container_day_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + i + "_" + "day_row_container_day_conatiner" + "_" + (i + 1);
		day_row_container_day_container.classList.add(component_name + "_" + "day_row_container_day_conatiner");

		const day_row_container_day_name = document.createElement("p");
		day_row_container_day_name.innerHTML = abreviated_day_names_array[i];
		day_row_container_day_name.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + i + "_" + "day_row_container_day_name";
		day_row_container_day_name.classList.add(component_name + "_" + "day_row_container_day_name");

		day_row_container_day_container.appendChild(day_row_container_day_name);
		month_days_names_container.appendChild(day_row_container_day_container);

		day_rows_containers.push(day_row_container_day_container);
	};

	return day_rows_containers;
};

function generate_day_div_element(
	component_name, 
	component_item_name, 
	component_item_component, 
	month_name, 
	month_day_quantity, 
	month_year, 
	month,
	month_elements_container, 
	i,
	month_days_names_container,
	room_available_dates_container,
	room_name_and_modal_prompt_container_prompt
) {
	const full_day_names_array = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	const starting_day = full_day_names_array.indexOf(month["first day name in spanish"]);

	let day_shufled_array = [];
	let starting_day_counter = starting_day;
	let track_starting_day_counter = starting_day;
	console.log(starting_day_counter);
	day_shufled_array.push(starting_day);
	starting_day_counter++;

	while (day_shufled_array.length < 7) {
		if (
			starting_day_counter < 7 
			// && 
			// track_starting_day_counter != 0
		)
		{
			day_shufled_array.push(starting_day_counter);
			starting_day_counter++;
		} 
		// else  if (track_starting_day_counter == 0 && starting_day_counter < 7) {
		// 	starting_day_counter = 0;
		// 	day_shufled_array.push(starting_day_counter);
		// 	starting_day_counter++;
		// } 
		else {
			starting_day_counter = 0;
			day_shufled_array.push(starting_day_counter);
			starting_day_counter++;
		}
	};

	for (let i = 0; i < starting_day; i++) {

		const day_element_container = document.createElement("div");
		day_element_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + i + "_" + "empty_day" + "_" + (i);
		day_element_container.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container");
		day_element_container.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "empty");

		month_days_names_container.children[i].appendChild(day_element_container);
	}

	let day_added_counter = 0;
	let day_used_counter = 0;
	let day_list = [];

	while (day_added_counter < month_day_quantity) 
	{
		day_added_counter++;

		const day_element_container = document.createElement("div");
		day_element_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + i + "_" + "day_" + (day_added_counter - 1);
		day_element_container.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container");
		
		const day_element_day_number = document.createElement("p");
		day_element_day_number.innerHTML = day_added_counter;
		day_element_day_number.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "month_elements_container" + "_" + i + "_" + "day_" + (day_added_counter - 1) + "_" + "day_number";
		day_element_day_number.classList.add(component_name + "_" + "month_elements_container" + "_" + "day" + "_" + "day_number");

		day_element_container.appendChild(day_element_day_number);
		if(month_days_names_container.children[day_shufled_array[day_used_counter]])
		{
			month_days_names_container.children[day_shufled_array[day_used_counter]].appendChild(day_element_container);

			if (day_used_counter < 7){
				day_shufled_array.push(starting_day_counter);
				day_used_counter++;
			} else {
				day_used_counter = 0;
				day_shufled_array.push(starting_day_counter);
				day_used_counter++;
			}
			day_list.push(day_element_container.id);
		};
	};
	return day_list;
};


