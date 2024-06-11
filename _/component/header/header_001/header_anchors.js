// called from "./class.js";

import generate_link_nesting from "./link_nesting.js";
// import generate_header_anchors from "./header_anchors.js";

export default function (
	root_folder, 
	component_folder,
	sesion_array,
	page_name,
	component_class,
	component_image_folder_path,
	highligthed_button,
	link_structure_object, 
	header_navigation_container
) {
	const level_1_anchors = Object.entries(link_structure_object);

	for (let index = 0; index < level_1_anchors.length; index++) 
	{
		const current_anchor_group_array = level_1_anchors[index];
		const current_anchor_group_name_string = current_anchor_group_array[0];
		const current_anchor_group_object = current_anchor_group_array[1];
		
		const current_element_id_string = current_anchor_group_object["id_string"];
		const current_element_string_to_print = current_anchor_group_object["string_to_print"];
		const current_element_href_string = current_anchor_group_object["href_string"];
		const current_element_sub_routes_object = current_anchor_group_object["sub_routes_object"];
		const current_element_is_visible_boolean = current_anchor_group_object["is_visible_boolean"];
		
		console.log(current_anchor_group_object);
	
		if(current_element_is_visible_boolean)
		{
			const header_anchor = document.createElement("a");
			header_anchor.id = page_name + "_" + component_class + "_" + current_element_id_string + "_" + "header_anchor";
			header_anchor.classList.add(component_class + "_" + "header_anchor");
			if(highligthed_button == current_element_id_string){
				header_anchor.classList.add("current_page");
			};
			header_anchor.setAttribute("href",current_element_href_string);
			header_anchor.innerHTML = current_element_string_to_print;
	
			header_navigation_container.appendChild(header_anchor);	

			generate_link_nesting(current_element_sub_routes_object);
		};
		console.log("");
	};
}