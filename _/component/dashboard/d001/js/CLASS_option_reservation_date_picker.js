// Called from ../prompt_for_room_dates.js

import display_option_date_picker from "./display_option_date_picker.js";

export default class CLASS_option_reservation_date_picker 
{
	constructor
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
		viewer_2d,
	) 
	{
		this.root_folder = root_folder;
		this.component_name = component_name;
		this.component_item_name = component_item_name;
		this.component_item_component = component_item_component;
		this.parent_card = parent_card;
		this.room_name = room_name;
		this.room_min_arrival = room_min_arrival;
		this.room_max_departure = room_max_departure;
		this.room_reserved_dates_array = room_reserved_dates_array;
		this.room_available_quantity = room_available_quantity;
		this.room_price_by_day = room_price_by_day;
		this.room_capacity = room_capacity;
		this.room_pax = room_pax;
		this.room_includes = room_includes;
		this.room_description = room_description;
		this.room_images = room_images;
		this.order_container = order_container;
		this.viewer_2d = viewer_2d;

		display_option_date_picker(
			this.root_folder,
			this.component_name,
			this.component_item_name,
			this.component_item_component,
			this.parent_card,
			this.room_name,
			this.room_min_arrival,
			this.room_max_departure,
			this.room_reserved_dates_array,
			this.room_available_quantity,
			this.room_price_by_day,
			this.room_capacity,
			this.room_pax,
			this.room_includes,
			this.room_description,
			this.room_images,
			this.order_container,
			this.viewer_2d,
		);	
	};
};