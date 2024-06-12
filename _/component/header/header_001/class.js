// called from at rendering time from "../../../../carga_de_imagenes/index.php" => but parameterized at development time from "./class.php"

import create_header_logo from "./header_logo.js";
import create_header_navigation from "./header_navigation.js";
export default class
{
	constructor
	(
		root_folder, 
		component_folder,
		sesion_array,
		page_name,
		component_class,
		component_image_folder_path,
		highligthed_button,
	)
	{
		const component_container = document.getElementById(page_name + "_" + component_class);
		add_component_style_tag(
			root_folder + "_/component/header/header_001/",
			"component_container"
		);

		component_container.appendChild(
			create_header_logo(
				root_folder, 
				component_folder,
				sesion_array,
				page_name,
				component_class,
				component_image_folder_path,
				highligthed_button,
			)
		);

		create_header_navigation(
			root_folder, 
			component_folder,
			sesion_array,
			page_name,
			component_class,
			component_image_folder_path,
			highligthed_button,
		);
	}
}