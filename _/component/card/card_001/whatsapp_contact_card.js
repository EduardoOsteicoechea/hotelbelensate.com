// called from "./card_001.js";

import whatsapp_contact_card_elements from "./whatsapp_contact_card_elements.js";

export default function whatsapp_contact_card(
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
){
	const whatsapp_contact_card = document.createElement("div");
	whatsapp_contact_card.id = component_id + "_" + "whatsapp_contact_card";
	whatsapp_contact_card.classList.add(component_class + "_" + "card");
	whatsapp_contact_card.classList.add(component_class + "_" + "whatsapp_contact_card");
	add_component_style_tag( component_folder, "whatsapp_contact_card" );

	whatsapp_contact_card_elements(
		root_folder,
		whatsapp_contact_card.id,
		component_class + "_" + "card",
		component_folder,
		component_type,
		sesion_array,
		data,
		component_container,
		whatsapp_contact_card,
		image_src_file_path_text,
		image_alt_text,
		heading_text,
		paragraph_1_text,
		paragraph_2_text,
		button_text,
	);

	component_container.appendChild(whatsapp_contact_card);
}