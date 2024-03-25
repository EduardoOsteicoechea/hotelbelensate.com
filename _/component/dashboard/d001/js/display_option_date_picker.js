// Called from ./prompt_for_room_dates.js

import close_option_date_picker from "./close_option_date_picker.js";
import generate_room_available_dates_container_elements from "./generate_room_available_dates_container_elements.js";

export default function display_option_date_picker (
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
) {
	// This line disables the scrolling of the page to inforce the user to pick a date or abort the operation. This disabling of the scroll function is reverted in the close_option_date_picker() function added to the close_option_date_picker_button button
	disable_page_scrolling_function();

	const option_date_picker_global_container = document.createElement("div");
	option_date_picker_global_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "option_date_picker_global_container";
	option_date_picker_global_container.classList.add(component_name + "_" + "option_date_picker_global_container");
	// This line makes the modal global container appear perfectly position at the top of the current scroollY position in any scrollY location of the page
	option_date_picker_global_container.style.top = window.scrollY + "px";
	document.body.appendChild(option_date_picker_global_container);

	const close_option_date_picker_button = document.createElement("div");
	close_option_date_picker_button.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "close_option_date_picker_button";
	close_option_date_picker_button.classList.add(component_name + "_" + "close_option_date_picker_button");
	close_option_date_picker_button.innerHTML = "cerrar";
	close_option_date_picker_button.addEventListener("pointerup", () =>{ close_option_date_picker(option_date_picker_global_container) });
	option_date_picker_global_container.appendChild(close_option_date_picker_button);

	const room_image_and_available_dates_container = document.createElement("div");
	room_image_and_available_dates_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_image_and_available_dates_container";
	room_image_and_available_dates_container.classList.add(component_name + "_" + "room_image_and_available_dates_container");
	option_date_picker_global_container.appendChild(room_image_and_available_dates_container);

	const room_image_and_available_dates_container_room_image_container = document.createElement("div");
	room_image_and_available_dates_container_room_image_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_image_and_available_dates_container_room_image_container";
	room_image_and_available_dates_container_room_image_container.classList.add(component_name + "_" + "room_image_and_available_dates_container_room_image_container");
	room_image_and_available_dates_container.appendChild(room_image_and_available_dates_container_room_image_container);

	const room_image_and_available_dates_container_room_image_container_image = document.createElement("img");
	room_image_and_available_dates_container_room_image_container_image.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_image_and_available_dates_container_room_image_container_image";
	room_image_and_available_dates_container_room_image_container_image.classList.add(component_name + "_" + "room_image_and_available_dates_container_room_image_container_image");
	room_image_and_available_dates_container_room_image_container_image.setAttribute("alt","Select Room Image");
	room_image_and_available_dates_container_room_image_container_image.setAttribute("src", root_folder + "_/media/image/room/" + room_images[0]);
	room_image_and_available_dates_container_room_image_container.appendChild(room_image_and_available_dates_container_room_image_container_image);

	const room_dinamic_text_and_datepicker_container = document.createElement("div");
	room_dinamic_text_and_datepicker_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_dinamic_text_and_datepicker_container";
	room_dinamic_text_and_datepicker_container.classList.add(component_name + "_" + "room_dinamic_text_and_datepicker_container");
	room_image_and_available_dates_container.appendChild(room_dinamic_text_and_datepicker_container);

	const room_name_and_modal_prompt_container = document.createElement("div");
	room_name_and_modal_prompt_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_name_and_modal_prompt_container";
	room_name_and_modal_prompt_container.classList.add(component_name + "_" + "room_name_and_modal_prompt_container");
	room_dinamic_text_and_datepicker_container.appendChild(room_name_and_modal_prompt_container);
	const room_name_and_modal_prompt_container_room_name = document.createElement("p");
	room_name_and_modal_prompt_container_room_name.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_name_and_modal_prompt_container_room_name";
	room_name_and_modal_prompt_container_room_name.classList.add(component_name + "_" + "room_name_and_modal_prompt_container_room_name");
	room_name_and_modal_prompt_container_room_name.innerHTML = room_name;
	room_name_and_modal_prompt_container.appendChild(room_name_and_modal_prompt_container_room_name);
	const room_name_and_modal_prompt_container_separator = document.createElement("p");
	room_name_and_modal_prompt_container_separator.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_name_and_modal_prompt_container_separator";
	room_name_and_modal_prompt_container_separator.classList.add(component_name + "_" + "room_name_and_modal_prompt_container_separator");
	room_name_and_modal_prompt_container_separator.innerHTML = " - ";
	room_name_and_modal_prompt_container.appendChild(room_name_and_modal_prompt_container_separator);
	const room_name_and_modal_prompt_container_prompt = document.createElement("p");
	room_name_and_modal_prompt_container_prompt.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_name_and_modal_prompt_container_prompt";
	room_name_and_modal_prompt_container_prompt.classList.add(component_name + "_" + "room_name_and_modal_prompt_container_prompt");
	room_name_and_modal_prompt_container_prompt.innerHTML = "Seleccione su fecha de llegada";
	room_name_and_modal_prompt_container.appendChild(room_name_and_modal_prompt_container_prompt);

	const room_available_dates_container = document.createElement("div");
	room_available_dates_container.id = component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_available_dates_container";
	room_available_dates_container.classList.add(component_name + "_" + "room_available_dates_container");
	room_dinamic_text_and_datepicker_container.appendChild(room_available_dates_container);

	generate_room_available_dates_container_elements(
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
	);
























	
};
