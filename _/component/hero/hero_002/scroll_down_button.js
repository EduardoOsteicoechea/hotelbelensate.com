// called from "./class.js";

export default function 
(
	root_folder,
	component_folder, 
	sesion_array,
	page_name,
	component_id,
	component_class,
	component_container,
	component_image_folder_path,
	button_1_scroll_target_id,
	button_2_href_string,
	scroll_down_button_message,
) 
{
	const scroll_down_button_container = document.createElement("div");
	scroll_down_button_container.id = component_id + "_" + component_class + "_" + "scroll_down_button_container";
	scroll_down_button_container.className = component_class + "_" + "scroll_down_button_container";
	// scroll_down_button_container.innerHTML = scroll_down_button_message;
	add_component_style_tag(component_folder,"scroll_down_button");

	const scroll_down_button_container_bar_1 = document.createElement("div");
	scroll_down_button_container_bar_1.id = component_id + "_" + component_class + "_" + "scroll_down_button_container_bar_1";
	scroll_down_button_container_bar_1.className = component_class + "_" + "scroll_down_button_container_bar_1";
	scroll_down_button_container.appendChild(scroll_down_button_container_bar_1);

	const scroll_down_button_container_bar_2 = document.createElement("div");
	scroll_down_button_container_bar_2.id = component_id + "_" + component_class + "_" + "scroll_down_button_container_bar_1";
	scroll_down_button_container_bar_2.className = component_class + "_" + "scroll_down_button_container_bar_2";
	scroll_down_button_container.appendChild(scroll_down_button_container_bar_2);

	return scroll_down_button_container;
}