// Called from ../d002.php

import outer_container_styles from "../style/outer_container_styles.js";
import search_bar from "./search_bar.js";

export default class d002_class 
{
	constructor
	(
		root_folder,
		component_id,
		component_class,
		component_folder,
		component_type,
		sesion_array,
		data,
	) 
	{
		const outer_container = document.getElementById(component_id);
		outer_container_styles(outer_container);

		search_bar(
			root_folder,
			component_id,
			component_class,
			component_folder,
			component_type,
			sesion_array,
			data,
			outer_container,
		);
	};
};