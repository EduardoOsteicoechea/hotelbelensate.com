// Called from "../a001.php"

import generate_awaiter_outer_container from "./generate_awaiter_outer_container.js";

export default class a001_class
{
	constructor
	(
		root_folder,
		component_id,
		component_class,
		component_folder,
		component_type,
		session_array,
		awaiter_message,
	) 
	{
		this.root_folder = root_folder;
		this.component_id = component_id;
		this.component_class = component_class;
		this.component_folder = component_folder;
		this.component_type = component_type;
		this.session_array = session_array;
		this.awaiter_message = awaiter_message;

		generate_awaiter_outer_container(
			this.root_folder,
			this.component_id,
			this.component_class,
			this.component_folder,
			this.component_type,
			this.awaiter_message,
		);
	};
};