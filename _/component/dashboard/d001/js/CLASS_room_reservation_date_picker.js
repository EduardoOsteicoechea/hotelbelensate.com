// Called from ../prompt_for_room_dates.js
export default class CLASS_room_reservation_date_picker 
{
	constructor
	(
		room_name,
		room_base_price,
		room_image,
		order_container,
		parent_card,
		component_name,
		reserved_dates
	) 
	{
		this.room_name =                      room_name;
		this.room_base_price =                room_base_price;
		this.room_image =                     room_image;
		this.order_container =                order_container;
		this.parent_card =                    parent_card;
		this.component_name =                 component_name;
		this.reserved_dates =                 reserved_dates;
		
		
	};
};