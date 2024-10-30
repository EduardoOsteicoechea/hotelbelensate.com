// Called from ./display_option_date_picker.js

import get_reservation_maximun_date_from_today from './get_reservation_maximun_date_from_today.js';
import generate_months_user_interface_elements from './generate_months_user_interface_elements.js';

export default function generate_room_available_dates_container_elements (
	root_folder,
	component_name,
	component_item_name,
	component_item_component,
	parent_card,
	room_name,
	room_min_arrival,
	room_max_departure,
	room_reserved_dates_array,
	room_available_quantity,
	room_price_by_day,
	room_capacity,
	room_pax,
	room_includes,
	room_description,
	room_images,
	order_container,
	viewer_2d,
	room_name_and_modal_prompt_container_prompt,
	room_available_dates_container,
	selected_dates_container_start_date,
	selected_dates_container_dates_separator,
	selected_dates_container_end_date,
	selected_dates_container_accept_dates_button,
	selected_dates_container_restart_dates_button,
	selected_dates_container_day_count_container,
	selected_dates_container_total_price_container,
) {
	const months_data_object = get_reservation_maximun_date_from_today(3);

	generate_months_user_interface_elements(
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
	);
};
