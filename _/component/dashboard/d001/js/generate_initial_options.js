import generate_card_image from "./generate_card_image.js";
import generate_description_card_elements from "./generate_description_card_elements.js";
import diferentiate_selected_card from "./diferentiate_selected_card.js";
import generate_2d_viewer_carrousel from "./generate_2d_viewer_carrousel.js";
import display_room_2d_viewer from "./display_room_2d_viewer.js";
import generate_option_slider from "./generate_option_slider.js";

// Called from ./class.js

export default function generate_initial_options  
(
	root_folder,
	option_container,
	data_object,
	viewer_2d,
	component_name,
	order_container
)
{
	const rooms = Object.entries(data_object);

	let room_counter = 0;

	const room_card_array = [];
	const room_name_array = [];
	const room_image_array = [];

	rooms.forEach(room => 
	{
		const room_name =                  room[0];
		const room_min_arrival =           room[1]["fecha disponible inicial"];
		const room_max_departure =         room[1]["fecha disponible final"];
		const room_reserved_dates_array =  room[1]["fechas reservadas"];
		const room_available_quantity =    room[1]["cantidad disponible"];
		const room_price_by_day =          room[1]["precio por día"];
		const room_total_capacity =        room[1]["capacidad total"];
		const room_capacity =              room[1]["capacidad"];
		const room_pax =                   room[1]["pax"];
		const room_includes =              room[1]["incluye"];
		const room_thumbnail =             room[1]["imagen miniatura"];
		const room_images =                room[1]["imagenes"];
		let room_description =             room[1]["descripción"];
		
		let description_string = "";
		for (let i = 0; i < room_description.length; i++) {
			if (i === 0) description_string += room_description[i]
			else description_string += "   " + "&#x2022   " + room_description[i];
		};
		room_description = description_string;

		const room_card = document.createElement("div");
		room_card.classList.add("d001_options_card");
		room_card.id = "d001_options_card_" + room_counter;
		option_container.appendChild(room_card);

		const room_images_container = document.createElement("div");
		room_images_container.classList.add("d001_options_card_images_container");
		room_card.appendChild(room_images_container);

		generate_card_image 
		(
			root_folder,
			room_card,
			viewer_2d,
			room_images_container,
			room_name,
			room_min_arrival,
			room_max_departure,
			room_available_quantity,
			room_price_by_day,
			room_capacity,
			room_pax,
			room_includes,
			room_description,
			room_images[0],
			component_name,			
		);	

		generate_description_card_elements 
		(
			root_folder,
			component_name,
			"options_card",
			"description_card",
			room_card,
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
		);

		room_card.addEventListener("pointerup", function() 
		{
			display_room_2d_viewer( viewer_2d );
			generate_2d_viewer_carrousel
			(
				root_folder,
				room_card,
				viewer_2d,
				room_name,
				room_images,
				component_name,
				800,
				option_container
			);
			diferentiate_selected_card(room_card, viewer_2d);
		});

		room_counter++
		
		room_card_array.push(room_card)
		room_name_array.push(room_name)
		room_image_array.push(room_images)
	});

	generate_option_slider
	(	
		root_folder,
		viewer_2d,
		option_container,
		room_card_array,
		room_name_array,
		room_image_array,
		component_name
	);
};