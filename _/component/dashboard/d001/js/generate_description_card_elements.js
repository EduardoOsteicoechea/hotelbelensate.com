// Called from ./generate_initial_options.js

import generate_description_card_icons from "./generate_description_card_icons.js";
import generate_description_card_capacity_icons from "./generate_description_card_capacity_icons.js";
import prompt_for_room_dates from "./prompt_for_room_dates.js"; 

export default function generate_description_card_elements ( 
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
){ 
	const card = document.createElement("div");
	card.classList.add(component_name + "_" + component_item_name + "_" + component_item_component);

	const card_text_container = document.createElement("div");
	card_text_container.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "texts_container");
	card.appendChild(card_text_container);

	const card_room_name = document.createElement("h3");
	card_room_name.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_name");
	card_room_name.innerHTML = room_name;
	card_text_container.appendChild(card_room_name);

	const card_room_description = document.createElement("p");
	card_room_description.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_description");
	card_room_description.innerHTML = room_description;
	card_text_container.appendChild(card_room_description);

	const room_assets_icons_container = document.createElement("div");
	room_assets_icons_container.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_assets_icons_container");
	card.appendChild(room_assets_icons_container);
	// generate_description_card_icons(
	// 	root_folder,
	// 	component_name,
	// 	component_item_name,
	// 	component_item_component, 
	// 	"room_assets_icons_container",
	// 	room_assets_icons_container, 
	// 	room_includes
	// );

	const room_assets_capacity_icons_container = document.createElement("div");
	room_assets_capacity_icons_container.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_assets_capacity_icons_container");
	card.appendChild(room_assets_capacity_icons_container);
	generate_description_card_capacity_icons(
		root_folder,
		component_name,
		component_item_name,
		component_item_component, 
		"room_assets_capacity_icons_container",
		room_assets_capacity_icons_container, 
		room_capacity
	);

	const card_room_price_container = document.createElement("div");
	card_room_price_container.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_price");
	card.appendChild(card_room_price_container);
	const card_room_price_ammount = document.createElement("span");
	card_room_price_ammount.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_price_ammount");
	card_room_price_ammount.innerHTML = room_price_by_day;
	card_room_price_container.appendChild(card_room_price_ammount);
	const card_room_price_currency = document.createElement("span");
	card_room_price_currency.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_price_currency");
	card_room_price_currency.innerHTML = " USD";
	card_room_price_container.appendChild(card_room_price_currency);

	const room_capacity_icons_container = document.createElement("div");
	room_capacity_icons_container.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "room_capacity_icons_container");
	card.appendChild(room_capacity_icons_container);

	const add_button = document.createElement("button");
	add_button.classList.add(component_name + "_" + component_item_name + "_" + component_item_component + "_" + "add_button");
	add_button.innerHTML = "Añadir";
	add_button.addEventListener("pointerup", (event) => {
		event.stopPropagation();
		prompt_for_room_dates(
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
	});
	card.appendChild(add_button);
	parent_card.appendChild(card);
}