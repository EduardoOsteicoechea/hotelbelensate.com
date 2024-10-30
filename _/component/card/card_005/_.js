// Called from "./_.php"


export default class{
    constructor
	(
        root_folder,
        sesion_array,
        page_name,
        parent_component_id,
        parent_component_class,
        component_class,
        rooms_type_name,
        rooms_type_data,
        outer_container,
        image_container,
        image_container_image,
        card_information_container,
        card_information_container_title,
        card_information_container_main_message,
        card_information_container_secondary_message,
        card_iteration,
	) 
	{
        this.root_folder = root_folder;
        this.sesion_array = sesion_array;
        this.page_name = page_name;
        this.parent_component_id = parent_component_id;
        this.parent_component_class = parent_component_class;
        this.component_class = component_class;
        this.rooms_type_name = rooms_type_name;
        this.rooms_type_data = rooms_type_data;
        this.outer_container = document.getElementById(outer_container);
        this.image_container = document.getElementById(image_container);
        this.image_container_image = document.getElementById(image_container_image);
        this.card_information_container = document.getElementById(card_information_container);
        this.card_information_container_title = document.getElementById(card_information_container_title);
        this.card_information_container_main_message = document.getElementById(card_information_container_main_message);
        this.card_information_container_secondary_message = document.getElementById(card_information_container_secondary_message);



        this.card_iteration = card_iteration;

        
	};
}