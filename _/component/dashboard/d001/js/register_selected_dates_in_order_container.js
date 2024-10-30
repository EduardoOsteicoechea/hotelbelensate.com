// Called from ./display_option_date_picker.js

import update_order from "./update_order.js";

export default function register_selected_dates_in_order_container(
	root_folder,
	component_name,
	component_item_name,
	component_item_component,
	room_name,
	room_price_by_day,
	room_pax,
	room_images,
	order_container,
	selected_dates_container,
	option_date_picker_global_container,
)
{
	const selected_dates_container_base_text = selected_dates_container.querySelector('#d001_options_card_description_card_selected_dates_container_base_text').innerHTML;
	const selected_dates_container_start_date = selected_dates_container.querySelector('#d001_options_card_description_card_selected_dates_container_start_date').innerHTML;
	const dates_container_dates_separator = selected_dates_container.querySelector('#d001_options_card_description_card_selected_dates_container_dates_separator').innerHTML;
	const dates_container_end_date = selected_dates_container.querySelector('#d001_options_card_description_card_selected_dates_container_end_date').innerHTML;
	const dates_container_day_count_container = selected_dates_container.querySelector('#d001_options_card_description_card_selected_dates_container_day_count_container').innerHTML;
	const dates_container_total_price_container = selected_dates_container.querySelector('#d001_options_card_description_card_selected_dates_container_total_price_container').innerHTML;	

	const room_order_container = document.createElement("div");
	room_order_container.classList.add(component_name + "_" + "selected_room_order_container");
	room_order_container.setAttribute("data-item-total-price",dates_container_total_price_container);

	const room_order_container_image_container = document.createElement("div");
	room_order_container_image_container.classList.add(component_name + "_" + "room_order_container_image_container");
	room_order_container.appendChild(room_order_container_image_container);
	
	const room_order_container_image = document.createElement("img");
	room_order_container_image.classList.add(component_name + "_" + "room_order_container_image");
	room_order_container_image.setAttribute("alt","Select Room Image");
	room_order_container_image.setAttribute("height","100%");
	room_order_container_image.setAttribute("src", root_folder + "_/media/image/room/" + room_images[0]);
	room_order_container_image_container.appendChild(room_order_container_image);
	
	const room_order_container_data_container = document.createElement("div");
	room_order_container_data_container.classList.add(component_name + "_" + "room_order_container_data_container");
	room_order_container.appendChild(room_order_container_data_container);
	
	const room_order_container_data_container_room_name = document.createElement("div");
	room_order_container_data_container_room_name.innerHTML = room_name;
	room_order_container_data_container_room_name.classList.add(component_name + "_" + "room_order_container_data_container_room_name");
	room_order_container_data_container.appendChild(room_order_container_data_container_room_name);

	const room_order_container_data_container_room_number_of_days = document.createElement("div");
	room_order_container_data_container_room_number_of_days.innerHTML =dates_container_day_count_container;
	room_order_container_data_container_room_number_of_days.classList.add(component_name + "_" + "room_order_container_data_container_room_number_of_days");
	room_order_container_data_container.appendChild(room_order_container_data_container_room_number_of_days);

	const room_order_container_data_container_room_dates = document.createElement("div");
	room_order_container_data_container_room_dates.innerHTML =selected_dates_container_start_date + dates_container_dates_separator + dates_container_end_date;
	room_order_container_data_container_room_dates.classList.add(component_name + "_" + "room_order_container_data_container_room_dates");
	room_order_container_data_container.appendChild(room_order_container_data_container_room_dates);

	const room_order_container_data_container_room_price = document.createElement("div");
	room_order_container_data_container_room_price.innerHTML = dates_container_total_price_container;
	room_order_container_data_container_room_price.classList.add(component_name + "_" + "room_order_container_data_container_room_price");
	room_order_container_data_container.appendChild(room_order_container_data_container_room_price);

	const room_order_container_data_container_room_remove_button = document.createElement("div");
	room_order_container_data_container_room_remove_button.innerHTML = "Remover";
	room_order_container_data_container_room_remove_button.classList.add(component_name + "_" + "room_order_container_data_container_room_remove_button");
	room_order_container_data_container.appendChild(room_order_container_data_container_room_remove_button);
	room_order_container_data_container_room_remove_button.addEventListener("pointerup", function(){
		room_order_container.remove();
		update_order(
			component_name,
			order_container
		);
	});

	const order_item_container = order_container.querySelector(".d001_order_item_container");
	order_item_container.appendChild(room_order_container);
	option_date_picker_global_container.remove();
	enable_page_scrolling_function(); // resides in hotelbelensate.com/_/global.js
};
