// Called from "./image_loader_001.php"
import create_heading_elements from "./create_heading_elements.js";
import create_form from "./create_form.js";
export default class component 
{
	constructor
	(
		root_folder,
		component_id,
		component_class,
		component_folder,
		sesion_array,
	) 
	{
		//Grab initial Container
		const initial_container=document.getElementById(component_id);
		//Create stylesheet for container
		add_component_style_tag( component_folder, "initial_container");
		//Create first element
		create_heading_elements (
			root_folder,
			component_id,
			component_class,
			component_folder,
			sesion_array,
			initial_container
		);

		create_form(
			root_folder,
			component_id,
			component_class,
			component_folder,
			sesion_array,initial_container
		);
	};
};