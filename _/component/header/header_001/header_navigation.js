// called from "./header_navigation.js";

import get_public_link_structure_object from "./routes_structure.js";
import generate_header_anchors from "./header_anchors.js";

export default function (
	root_folder, 
	component_folder,
	sesion_array,
	page_name,
	component_class,
	component_image_folder_path,
	highligthed_button,
) {
	const header_navigation_container = document.createElement("nav");
	header_navigation_container.id = page_name + "_" + component_class + "_" + "header_navigation_container";
	header_navigation_container.classList.add(component_class + "_" + "header_navigation_container");
	add_component_style_tag(component_folder,"header_navigation");

	const link_structure_object = get_public_link_structure_object(root_folder);
	generate_header_anchors(
		root_folder, 
		component_folder,
		sesion_array,
		page_name,
		component_class,
		component_image_folder_path,
		highligthed_button,
		link_structure_object, 
		header_navigation_container
	);
	

	return header_navigation_container;
}