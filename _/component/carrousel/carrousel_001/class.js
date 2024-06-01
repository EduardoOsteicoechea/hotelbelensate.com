// called from at rendering time from "../../../../class.php" => but parameterized at development time from "./class.php"

import create_image_strip from "./image_strip.js";

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
	)
	{
		const component_container = document.getElementById(component_id + "_" + component_class);
		add_component_style_tag(
			root_folder + "_/component/carrousel/carrousel_001/",
			"class"
		);

		component_container.appendChild(
			create_image_strip(
				root_folder, 
				component_folder,
				sesion_array,
				page_name,
				component_id,
				component_class,
				component_container,
				component_image_folder_path,
			)
		);
	}
}