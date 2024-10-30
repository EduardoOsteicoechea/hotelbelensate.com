import generate_initial_options from "./generate_initial_options.js";
import add_generate_options_to_search_bar_action_button from "./add_generate_options_to_search_bar_action_button.js";

// Called from ../d001.php

export default class component 
{
	constructor
	(
		id,
		component_name,
		root_folder,
		component_folder,
		session,
		data,
		component,
		search_bar,
		options,
		order,
		viewer_2d
	) 
	{
		this.id =                              id;
		this.component_name =                  component_name;
		this.root_folder =                     root_folder;
		this.component_folder =                component_folder;
		this.session =                         session;
		this.data =                            data;
		this.component =                       document.getElementById(component);
		this.search_bar =                      document.getElementById(search_bar);
		this.search_bar_arrival_element =      this.search_bar.children[0].children[0].children[0];
		this.search_bar_departure_element =    this.search_bar.children[0].children[1].children[0];
		this.search_bar_adults_element =       this.search_bar.children[0].children[2].children[0];
		this.search_bar_children_element =     this.search_bar.children[0].children[3].children[0];
		this.search_bar_children_age_element = this.search_bar.children[0].children[4];
		this.search_bar_room_element =         this.search_bar.children[0].children[5].children[0];
		this.search_bar_execute_element =      this.search_bar.children[0].children[this.search_bar.children.length-1];
		this.options =                         document.getElementById(options);
		this.order =                           document.getElementById(order);
		this.viewer_2d =                       document.getElementById(viewer_2d);

		add_generate_options_to_search_bar_action_button ( this.search_bar_execute_element.children[0], this.options, this.data);

		generate_initial_options ( 
			root_folder, 
			this.options, 
			this.data, 
			this.viewer_2d, 
			this.component_name, 
			this.order
		);
	};
};