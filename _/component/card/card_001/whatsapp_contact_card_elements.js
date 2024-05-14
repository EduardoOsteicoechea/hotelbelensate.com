// called from "./whatsapp_contact_card.js";

export default function whatsapp_contact_card_elements(
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	sesion_array,
	data,
	initial_component_container,
	calling_component_container,
	image_src_file_path_text,
	image_alt_text,
	heading_text,
	paragraph_1_text,
	paragraph_2_text,
	button_text,
){
	const image_container = document.createElement("div");
	image_container.id = component_id + "_" + "image_container";
	image_container.classList.add(component_class + "_" + "image_container");
	calling_component_container.appendChild(image_container);

	const image = document.createElement("img");
	image.id = component_id + "_" + "image";
	image.classList.add(component_class + "_" + "image");
	image.setAttribute("alt", image_alt_text);
	image.setAttribute("src", root_folder + image_src_file_path_text);
	image.setAttribute("width","100%");
	image_container.appendChild(image);

	// Card heading
	// Card heading

	const heading = document.createElement("h2");
	heading.id = component_id + "_" + "heading";
	heading.classList.add(component_class + "_" + "heading");
	heading.innerHTML = heading_text;
	calling_component_container.appendChild(heading);

	// Card paragraph_1
	// Card paragraph_1

	const paragraph_1 = document.createElement("p");
	paragraph_1.id = component_id + "_" + "paragraph_1";
	paragraph_1.classList.add(component_class + "_" + "paragraph");
	paragraph_1.innerHTML = paragraph_1_text;
	calling_component_container.appendChild(paragraph_1);

	// Card paragraph_2
	// Card paragraph_2

	const paragraph_2 = document.createElement("p");
	paragraph_2.id = component_id + "_" + "paragraph_2";
	paragraph_2.classList.add(component_class + "_" + "paragraph_2");
	paragraph_2.innerHTML = paragraph_2_text;
	calling_component_container.appendChild(paragraph_2);

	// Card button
	// Card button

	const button = document.createElement("a");
	button.id = component_id + "_" + "button";
	button.classList.add(component_class + "_" + "button");
	button.innerHTML = button_text;
	button.setAttribute("href", "https://wa.me/584123033034");
	button.setAttribute("target", "_blank");
	calling_component_container.appendChild(button);

}