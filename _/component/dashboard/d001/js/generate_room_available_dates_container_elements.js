// Called from ./display_option_date_picker.js

import get_reservation_maximun_date_from_today from './get_reservation_maximun_date_from_today.js';
import generate_month_user_interface_elements from './generate_month_user_interface_elements.js';

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
) {
	const month_data_object = get_reservation_maximun_date_from_today();
	const current_month_user_interface_elements = generate_month_user_interface_elements(
		month_data_object["current month name"], 
		month_data_object["current month day quantity"], 
		month_data_object["current month year"], 
		"current", component_name, 
		component_item_name, 
		component_item_component, 
		room_available_dates_container,
		1
		);
	const next_month_interface_elements = generate_month_user_interface_elements(
		month_data_object["next month name"], 
		month_data_object["next month day quantity"], 
		month_data_object["next month year"], 
		"not current", 
		component_name, 
		component_item_name, 
		component_item_component, 
		room_available_dates_container,
		2
		);
	const next_month_from_next_month_interface_elements = generate_month_user_interface_elements(
		month_data_object["next month from next month name"], 
		month_data_object["next month from next month day quantity"],
		month_data_object["next month from next month year"], 
		"not current", 
		component_name, 
		component_item_name, 
		component_item_component, 
		room_available_dates_container,
		3
		);
	const next_month_from_next_month_from_next_month_interface_elements = generate_month_user_interface_elements(
		month_data_object["next month from next month from next month name"], 
		month_data_object["next month from next month from next month day quantity"], 
		month_data_object["next month from next month from next month year"], 
		"not current", 
		component_name, 
		component_item_name, 
		component_item_component, 
		room_available_dates_container,
		4
		);
};
