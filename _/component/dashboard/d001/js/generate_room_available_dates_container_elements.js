// Called from ./display_option_date_picker.js

import get_reservation_maximun_date_from_today from './get_reservation_maximun_date_from_today.js';

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
	
	get_reservation_maximun_date_from_today();
};
