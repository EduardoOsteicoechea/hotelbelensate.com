// called from "./card_001.js";

import pop_up_info_contact_card_elements from "./pop_up_info_contact_card_elements.js";

export default function pop_up_info_contact_card(
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	sesion_array,
	data,
	component_container,
	image_src_file_path_text,
	image_alt_text,
	heading_text,
	paragraph_1_text,
	paragraph_2_text,
	button_text,
	phone_number_text,
){
	const pop_up_info_contact_card = document.createElement("div");
	pop_up_info_contact_card.id = component_id + "_" + "pop_up_info_contact_card";
	pop_up_info_contact_card.classList.add(component_class + "_" + "card");
	pop_up_info_contact_card.classList.add(component_class + "_" + "pop_up_info_contact_card");
	add_component_style_tag( component_folder, "pop_up_info_contact_card" );

	pop_up_info_contact_card_elements(
		root_folder,
		pop_up_info_contact_card.id,
		component_class + "_" + "card",
		component_folder,
		component_type,
		sesion_array,
		data,
		component_container,
		pop_up_info_contact_card,
		image_src_file_path_text,
		image_alt_text,
		heading_text,
		paragraph_1_text,
		paragraph_2_text,
		button_text,
		phone_number_text,
	);

	component_container.appendChild(pop_up_info_contact_card);
}