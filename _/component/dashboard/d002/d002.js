// Called from ../d002.php

import search_bar_container from "./search_bar_container.js";
export default class component 
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
		this.root_folder =       root_folder;
		this.component_id =      component_id;
		this.component_class =   component_class;
		this.component_folder =  component_folder;
		this.component_type =    component_type;
		this.sesion_array =      sesion_array;
		this.data =              data;

		console.log(this.data)

		this.component_container = document.getElementById(this.component_id);
		this.component_container.style.height = window.innerHeight + "px";
		add_component_style_tag( component_folder, this.component_class );

		search_bar_container ( 
			this.root_folder,
			this.component_id,
			this.component_class,
			this.component_folder,
			this.component_type,
			this.sesion_array,
			this.data,
			this.component_container,
		);
	};
};