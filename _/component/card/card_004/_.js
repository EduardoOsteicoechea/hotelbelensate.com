// Called from "./_.php"

import display_image_viewer_container_full_screen_button_container from "./display_image_viewer_container_full_screen_button_container.js";
import send_to_reservation_application from "./send_to_reservation_application.js";

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
        image_viewer_container,
        image_viewer_container_image_container,
        image_viewer_container_image_container_image,
        image_viewer_container_full_screen_button_container,
        image_viewer_container_full_screen_button_paragraph,
        entity_information_container,
        information_title,
        information_capacity_icon_container,
        information_capacity_icon_container_image,
        information_paragraph,
        price_container,
        information_button,
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
        this.image_viewer_container = document.getElementById(image_viewer_container);
        this.image_viewer_container_image_container = document.getElementById(image_viewer_container_image_container);
        this.image_viewer_container_image_container_image = document.getElementById(image_viewer_container_image_container_image);
        this.image_viewer_container_full_screen_button_container = document.getElementById(image_viewer_container_full_screen_button_container);
        this.image_viewer_container_full_screen_button_paragraph = document.getElementById(image_viewer_container_full_screen_button_paragraph);
        this.entity_information_container = document.getElementById(entity_information_container);
        this.information_title = document.getElementById(information_title);
        this.information_capacity_icon_container = document.getElementById(information_capacity_icon_container);
        this.information_capacity_icon_container_image = document.getElementById(information_capacity_icon_container_image);
        this.information_paragraph = document.getElementById(information_paragraph);
        this.price_container = document.getElementById(price_container);
        this.information_button = document.getElementById(information_button);

        display_image_viewer_container_full_screen_button_container(
            this.root_folder,
            this.sesion_array,
            this.page_name,
            this.parent_component_id,
            this.parent_component_class,
            this.component_class,
            this.rooms_type_name,
            this.rooms_type_data,
            this.outer_container,
            this.image_viewer_container,
            this.image_viewer_container_image_container,
            this.image_viewer_container_image_container_image,
            this.image_viewer_container_full_screen_button_container,
            this.image_viewer_container_full_screen_button_paragraph,
            this.entity_information_container,
            this.information_title,
            this.information_capacity_icon_container,
            this.information_capacity_icon_container_image,
            this.information_paragraph,
            this.price_container,
            this.information_button,
            card_iteration,
        );

        this.information_button.addEventListener("pointerup",()=>{
            window.location.href = "../reservaciones";
        });
	};
}