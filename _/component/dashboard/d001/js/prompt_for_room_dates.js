// Called from ./generate_description_card_elements.js

import close_2d_viewer from "./close_2d_viewer.js";
import display_option_date_picker from "./display_option_date_picker.js"; 

export default function prompt_for_room_dates
(
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
	viewer_2d
)
{
	if (viewer_2d.classList.contains("visible")) 
	{
		const carrousel = document.getElementById(component_name + "_" + "viewer_2d" + "_" + "carrousel");
		const image_strip = carrousel.children[1];
		const dot_controls_container = carrousel.children[2];
		const carrousel_overlay = carrousel.children[0];

		close_2d_viewer 
		(
			viewer_2d,
			image_strip,
			dot_controls_container,
			carrousel_overlay,
			"fresh start",
			parent_card
		);
	};

	new display_option_date_picker(
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
		viewer_2d
	);
};