// called from at rendering time from "../../../../carga_de_imagenes/index.php" => but parameterized at development time from "./class.php"

import create_image_container from "./image_container.js";
import create_hero_message from "./hero_message.js";
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
		button_1_scroll_target_id,
		button_2_href_string,
	)
	{
		const component_container = document.getElementById(component_id + "_" + component_class);
		add_component_style_tag(
			root_folder + "_/component/hero/hero_001/",
			"component_container"
		);

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
			)
		);

		component_container.appendChild(
			create_hero_message(
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
			)
		);
	}
}