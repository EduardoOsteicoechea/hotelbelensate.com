// called from "./image_strip.js";

import carrousel_controls_actions from "./carrousel_controls_actions.js";

export default function 
(
	root_folder,
	component_folder, 
	sesion_array,
	page_name,
	component_id,
	component_class,
	component_container,
	component_image_content_object,
	image_strip_container,
	component_image_folder_path,
	images_names_array,
	is_landscape,
	image_strip_container_image_strip
) 
{
	const carrousel_controls_container = document.createElement("div");
	carrousel_controls_container.id = component_id + "_" + component_class + "_" + "carrousel_controls_container";
	carrousel_controls_container.className = component_class + "_" + "carrousel_controls_container";
	add_component_style_tag(component_folder,"carrousel_controls");

	const carrousel_controls_container_left_arrow_container = document.createElement("div");
	carrousel_controls_container_left_arrow_container.id = component_id + "_" + component_class + "_" + "carrousel_controls_container_left_arrow_container";
	carrousel_controls_container_left_arrow_container.className = component_class + "_" + "carrousel_controls_container_arrow_container";

	const carrousel_controls_container_left_arrow_container_bar_1 = document.createElement("div");
	carrousel_controls_container_left_arrow_container_bar_1.id = component_id + "_" + component_class + "_" + "carrousel_controls_container_left_arrow_container_bar_1";
	carrousel_controls_container_left_arrow_container_bar_1.className = component_class + "_" + "carrousel_controls_container_left_arrow_container_bar_1";
	carrousel_controls_container_left_arrow_container.appendChild(carrousel_controls_container_left_arrow_container_bar_1);

	const carrousel_controls_container_left_arrow_container_bar_2 = document.createElement("div");
	carrousel_controls_container_left_arrow_container_bar_2.id = component_id + "_" + component_class + "_" + "carrousel_controls_container_left_arrow_container_bar_2";
	carrousel_controls_container_left_arrow_container_bar_2.className = component_class + "_" + "carrousel_controls_container_left_arrow_container_bar_2";
	carrousel_controls_container_left_arrow_container.appendChild(carrousel_controls_container_left_arrow_container_bar_2);

	carrousel_controls_container.appendChild(carrousel_controls_container_left_arrow_container);
	new carrousel_controls_actions().slide_left(
		carrousel_controls_container_left_arrow_container,
		image_strip_container_image_strip
	);


	const carrousel_controls_container_right_arrow_container = document.createElement("div");
	carrousel_controls_container_right_arrow_container.id = component_id + "_" + component_class + "_" + "carrousel_controls_container_right_arrow_container";
	carrousel_controls_container_right_arrow_container.className = component_class + "_" + "carrousel_controls_container_arrow_container";

	const carrousel_controls_container_right_arrow_container_bar_1 = document.createElement("div");
	carrousel_controls_container_right_arrow_container_bar_1.id = component_id + "_" + component_class + "_" + "carrousel_controls_container_right_arrow_container_bar_1";
	carrousel_controls_container_right_arrow_container_bar_1.className = component_class + "_" + "carrousel_controls_container_right_arrow_container_bar_1";
	carrousel_controls_container_right_arrow_container.appendChild(carrousel_controls_container_right_arrow_container_bar_1);

	const carrousel_controls_container_right_arrow_container_bar_2 = document.createElement("div");
	carrousel_controls_container_right_arrow_container_bar_2.id = component_id + "_" + component_class + "_" + "carrousel_controls_container_right_arrow_container_bar_2";
	carrousel_controls_container_right_arrow_container_bar_2.className = component_class + "_" + "carrousel_controls_container_right_arrow_container_bar_2";
	carrousel_controls_container_right_arrow_container.appendChild(carrousel_controls_container_right_arrow_container_bar_2);

	carrousel_controls_container.appendChild(carrousel_controls_container_right_arrow_container);
	new carrousel_controls_actions().slide_right(
		carrousel_controls_container_right_arrow_container,
		image_strip_container_image_strip
	);


	return carrousel_controls_container;
}