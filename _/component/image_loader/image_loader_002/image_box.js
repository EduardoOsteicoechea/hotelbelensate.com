// called from "./class.js";

import create_form from "./form.js";
import create_image_element from "./image_box_image_element.js";

export default function 
(
	root_folder,
	component_folder, 
	sesion_array,
	page_name,
	component_id,
	component_class,
	component_image_content_object,
	component_container
) 
{
	const image_box = document.createElement("div");
	image_box.id = component_id + "_" + component_class + "_" + "image_box";
	image_box.className = component_class + "_" + "image_box";
	add_component_style_tag(component_folder,"image_box");
	
	const image_box_awaiter_screen = document.createElement("div");
	image_box_awaiter_screen.className = "awaiter_screen";
	image_box.appendChild(image_box_awaiter_screen);

	for (let a = 0; a < Object.entries(component_image_content_object).length; a++) {
		const image_type = Object.entries(component_image_content_object)[a];
		for (let b = 0; b < image_type[1].length; b++) {
			const image_name = image_type[1][b];
			image_box.appendChild(
				create_image_element(
					root_folder,
					component_folder, 
					sesion_array,
					page_name,
					component_id,
					component_class,
					component_image_content_object,
					component_container,
					image_box,
					image_name
				)
			);
		}
	}

	// Next component element
	// Next component element
	// Next component element
	// Next component element

	component_container.appendChild(
		create_form(	
			root_folder, 
			component_folder,
			sesion_array,
			page_name,
			component_id,
			component_class,
			component_image_content_object,
			component_container,
			image_box,
		)
	);
	
	// Return full component
	// Return full component
	// Return full component
	// Return full component

	return image_box;
}