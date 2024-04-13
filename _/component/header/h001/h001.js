// Called from "./a001.php"

import outer_container_styles from "./outer_container_styles.js";
import logo_elements from "./logo_elements.js";
import navigation from "./navigation.js";

export default class h001_class
{
	constructor
	(
		root_folder,
		component_id,
		component_class,
		component_folder,
		component_type,
		session_array,
		current_page,
		current_page_public_text,
	) 
	{
		const outer_container = document.getElementById(component_id);
		outer_container_styles(outer_container);

		logo_elements(
			root_folder,
			component_id,
			component_class,
			component_folder,
			component_type,
			session_array,
			current_page,
			outer_container,
		);

		navigation(
			root_folder,
			component_id,
			component_class,
			component_folder,
			component_type,
			session_array,
			current_page,
			current_page_public_text,
			outer_container,
		);
	};
};