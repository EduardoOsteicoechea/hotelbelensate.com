// Called from ./generate_initial_options.js

export default function generate_card_image
(
	root_folder,
	parent_card,
	viewer_2d,
	room_image_container,
	room_name,
	room_min_arrival,
	room_max_departure,
	room_available_quantity,
	room_price_by_day,
	room_capacity,
	room_pax,
	room_includes,
	room_description,
	room_image,
	component_name,
)
{
	const room_image_container_image_container = document.createElement("div");
	room_image_container_image_container.classList.add("d001_options_card_image_container");
	room_image_container.appendChild(room_image_container_image_container);
	
	const room_image_element = document.createElement("img");
	room_image_element.classList.add("d001_options_card_image_container_image");
	room_image_element.setAttribute("src", root_folder + "_/media/image/room/" + room_image);
	room_image_element.setAttribute("height", "100%" );
	room_image_container_image_container.appendChild(room_image_element);
	
	const room_image_overlay_element = document.createElement("div");	
	room_image_overlay_element.classList.add("d001_options_card_image_container_image_overlay");
	room_image_container_image_container.appendChild(room_image_overlay_element);
	
	const room_image_message_element = document.createElement("div");
	room_image_message_element.classList.add("d001_options_card_image_container_room_image_message_element");
	room_image_container_image_container.appendChild(room_image_message_element);

	const room_image_message_element_message = document.createElement("p");
	room_image_message_element_message.innerHTML = room_name;
	room_image_message_element.appendChild(room_image_message_element_message);
	
}