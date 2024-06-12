// called from at rendering time from "../../../../carga_de_imagenes/index.php" => but parameterized at development time from "./class.php"

import create_image_container from "./image_container.js";
import create_scroll_down_button from "./scroll_down_button.js";
export default class
{
	constructor
	(
		root_folder, 
		component_folder,
		sesion_array,
		page_name,
		component_id,
		component_class,
		component_image_folder_path,
		message_h1,
		message_p,
		button_1_scroll_target_id,
		button_2_href_string,
		scroll_down_button_message,
		hero_image_bottom_location,
	)
	{
		const component_container = document.getElementById(component_id + "_" + component_class);

		component_container.appendChild(
			create_image_container(
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
				hero_image_bottom_location,
			)
		);

		component_container.appendChild(
			create_scroll_down_button(
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
		);

	}
}