// called from "./class.js";

import create_form from "./form.js";
import create_image_box_element_container from "./image_box_element_container.js";

export default function 
(
	root_folder,
	component_folder, 
	sesion_array,
	page_name,
	component_id,
	component_class,
	component_container
) 
{
			
	let component_image_content_object = {};
	var xhr = new XMLHttpRequest();
	xhr.open("POST",component_folder + "read_image_folder.php", false);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() 
	{
		if (this.readyState === 4 && this.status === 200) {
			component_image_content_object = JSON.parse(this.responseText);
		}
	};
	xhr.send("folder_path="+component_id);

	const image_box = document.createElement("div");
	image_box.id = component_id + "_" + component_class + "_" + "image_box";
	image_box.className = component_class + "_" + "image_box";
	add_component_style_tag(component_folder,"image_box");

	// console.log(component_image_content_object);
	
	// const image_box_awaiter_screen = document.createElement("div");
	// image_box_awaiter_screen.className = "awaiter_screen";
	// image_box.appendChild(image_box_awaiter_screen);

	for (let a = 0; a < Object.entries(component_image_content_object).length; a++) {
		const enabled_or_disabled_string = Object.entries(component_image_content_object)[a][0];
		const enabled_or_disabled_array = Object.entries(Object.entries(component_image_content_object)[a][1]);
		for (let b = 0; b < enabled_or_disabled_array.length / 2; b++) {
			const desktop_image_name_array = enabled_or_disabled_array[0][1];
			const mobile_image_name_array = enabled_or_disabled_array[1][1];
			for (let c = 0; c < desktop_image_name_array.length; c++) {
				const desktop_image_name = desktop_image_name_array[c];
				const mobile_image_name = mobile_image_name_array[c];
				image_box.appendChild(
					create_image_box_element_container(
						root_folder,
						component_folder, 
						sesion_array,
						page_name,
						component_id,
						component_class,
						component_image_content_object,
						component_container,
						image_box,
						enabled_or_disabled_string,
						desktop_image_name,
						mobile_image_name,
					)
				);
			}
		};
	}

	// Next component element
	// Next component element
	// Next component element
	// Next component element

	document.getElementById(component_id + "_" + component_class).appendChild(
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