// Called from ./generate_months_user_interface_elements.js

export default function generate_selected_day_click_event
(
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
)
{
	let concatenated_day_id_list = [].concat(...day_list);

	selected_dates_container_restart_dates_button.addEventListener("click", () =>{
		for (let i = 0; i < concatenated_day_id_list.length; i++) {
			const element = document.getElementById(concatenated_day_id_list[i]);

			element.classList.remove(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "clicked");
			element.classList.remove(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "disabled");
			element.classList.remove(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "inbetween_selected");

			room_name_and_modal_prompt_container_prompt.innerHTML = "Seleccione su fecha de llegada";

			const cloned_element = element.cloneNode(true);
			element.parentNode.replaceChild(cloned_element, element);
			cloned_element.addEventListener("click", () => {
				cloned_element.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "clicked");
				disable_all_previous_days(component_name, concatenated_day_id_list, i);

			})
		}

		selected_dates_container_start_date.innerHTML = "";
		selected_dates_container_dates_separator.innerHTML = "";
		selected_dates_container_end_date.innerHTML = "";
		selected_dates_container_day_count_container.innerHTML = "";
		selected_dates_container_total_price_container.innerHTML = "";
	});

	const month_1_limit = [0, day_list[0].length];
	const month_1_number = months_data_object[0][0]["month number"] + 1;
	const month_1_year = months_data_object[0][0]["year"];

	const month_2_limit = [month_1_limit[1], day_list[0].length + day_list[1].length];
	const month_2_number = months_data_object[0][1]["month number"] + 1;
	const month_2_year = months_data_object[0][1]["year"];

	const month_3_limit = [month_2_limit[1], day_list[0].length + day_list[1].length + day_list[2].length];
	const month_3_number = months_data_object[0][2]["month number"] + 1;
	const month_3_year = months_data_object[0][2]["year"];

	

	for (let i = 0; i < concatenated_day_id_list.length; i++) {
		const day_id = concatenated_day_id_list[i];
		const day_element = document.getElementById(day_id);
		console.log("day_element: " + day_element)

		day_element.addEventListener("click", () => {
			day_element.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "clicked");
			disable_all_previous_days(component_name, concatenated_day_id_list, i);
		})
	}

	function disable_all_previous_days(component_name, concatenated_day_id_list, index_of_clicked) 
	{
		room_name_and_modal_prompt_container_prompt.innerHTML = "Seleccione su fecha de salida";

		for (let i = 0; i < index_of_clicked; i++) {
			const day_id = concatenated_day_id_list[i];
			const day_element = document.getElementById(day_id);
			day_element.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "disabled");
		}
		
		if (index_of_clicked >= month_1_limit[0] && index_of_clicked < month_1_limit[1]) {
				selected_dates_container_start_date.innerHTML += month_1_year + "/" + month_1_number + "/";
		} else if(index_of_clicked > month_2_limit[0] && index_of_clicked < month_2_limit[1]) {
				selected_dates_container_start_date.innerHTML += month_2_year + "/" + month_2_number + "/";
		} else if (index_of_clicked > month_3_limit[0]){
				selected_dates_container_start_date.innerHTML += month_3_year + "/" + month_3_number + "/";
		};
		selected_dates_container_start_date.innerHTML += document.getElementById(concatenated_day_id_list[index_of_clicked]).children[0].innerHTML;

		for (let i = index_of_clicked; i < concatenated_day_id_list.length; i++) {
			const day_id = concatenated_day_id_list[i];
			const day_element = document.getElementById(day_id);
			console.log("day_element: " + day_element)
			
			const cloned_element = day_element.cloneNode(true);
			day_element.parentNode.replaceChild(cloned_element, day_element);

			cloned_element.addEventListener("click", (event) => {
				mark_up_inbetween_next_selected(component_name, concatenated_day_id_list, index_of_clicked, i);
			})
		}
	};

	function mark_up_inbetween_next_selected(component_name, concatenated_day_id_list, index_of_clicked, index_of_final_clicked) 
	{
		room_name_and_modal_prompt_container_prompt.innerHTML = "Verifique su selección en la parte inferior de esta ventana, y en caso de consentir presione \"registrar\" fechas si desea esta reservación. De lo contrario presione el botón de \"reiniciar fechas\" para seleccionar otras fechas para esta misma habitación, o \"cerrar\" para regresar al tablero de reservaciones.";

		for (let i = index_of_clicked; i < index_of_final_clicked + 1; i++) {
			const day_id = concatenated_day_id_list[i];
			const day_element = document.getElementById(day_id);
			day_element.classList.remove(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "disabled");
			day_element.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "inbetween_selected");
		};

		selected_dates_container_dates_separator.innerHTML = " - ";
		
		// console.log(index_of_final_clicked)
		// console.log( month_3_limit[0])

		if (index_of_final_clicked >= month_1_limit[0] && index_of_final_clicked < month_1_limit[1]) {
			selected_dates_container_end_date.innerHTML = month_1_year + "/" + month_1_number + "/";
		} else if(index_of_final_clicked > month_2_limit[0] && index_of_final_clicked < month_2_limit[1]) {
			selected_dates_container_end_date.innerHTML += month_2_year + "/" + month_2_number + "/";
		} else if (index_of_final_clicked > month_3_limit[0]){
			selected_dates_container_end_date.innerHTML += month_3_year + "/" + month_3_number + "/";
		};
		const concatenated_day_id_list_final_clicked_element = document.getElementById(concatenated_day_id_list[index_of_final_clicked]).children[0].innerHTML;
		selected_dates_container_end_date.innerHTML += concatenated_day_id_list_final_clicked_element;

		selected_dates_container_day_count_container.innerHTML = + (index_of_final_clicked - (index_of_clicked - 1)) + " día(s).";
		selected_dates_container_total_price_container.innerHTML = (((index_of_final_clicked - (index_of_clicked - 1)) * room_price_by_day)).toFixed(1) + " USD";

		for (let i = index_of_final_clicked; i < concatenated_day_id_list.length; i++) {
			const day_id = concatenated_day_id_list[i];
			const day_element = document.getElementById(day_id);
			day_element.classList.add(component_name + "_" + "month_elements_container" + "_" + "day_container" + "_" + "disabled");
		};

		selected_dates_container_accept_dates_button.style.display = "flex";
	};
};



