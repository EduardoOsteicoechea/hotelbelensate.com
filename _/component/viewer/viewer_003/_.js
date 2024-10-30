// Called from "./_.php"

import change_image_on_lateral_control_click from "./change_image_on_lateral_control_click.js";

export default class{
    constructor
	(
        root_folder,
        sesion_array,
        page_name,
        component_id,
        component_class,
        images_folder,
        
        outer_container,
        information_container,
        information_container_background_image_overlay,
        information_container_background_image_image,
        information_container_title,
        information_container_main_message,
        elements_array,
        information_container_secondary_message,
        information_container_action_button,
        image_container,
        image_container_image,
        lateral_controls_container,
        lateral_controls_container_left_control,
        lateral_controls_container_right_control,
        dot_controls_container,

        information_container_image_viewer_controls_container,
        information_container_image_viewer_controls_container_message,
        information_container_image_viewer_controls_container_lateral_controls_container,
        information_container_image_viewer_controls_container_lateral_controls_left_control,
        information_container_image_viewer_controls_container_lateral_controls_right_control,
        information_container_image_viewer_controls_container_dots_container,
        information_container_image_viewer_controls_container_dot,
	) 
	{
        this.root_folder = root_folder;
        this.sesion_array = sesion_array;
        this.page_name = page_name;
        this.component_id = component_id;
        this.component_class = component_class;
        this.images_folder = images_folder;
        
        this.outer_container = document.getElementById(outer_container);
        this.information_container = document.getElementById(information_container);
        this.information_container_background_image_overlay = document.getElementById(information_container_background_image_overlay);
        this.information_container_background_image_image = document.getElementById(information_container_background_image_image);
        this.information_container_title = document.getElementById(information_container_title);
        this.information_container_main_message = document.getElementById(information_container_main_message);
        this.elements_array = document.getElementById(elements_array);
        this.information_container_secondary_message = document.getElementById(information_container_secondary_message);
        this.information_container_action_button = document.getElementById(information_container_action_button);
        this.image_container = document.getElementById(image_container);
        this.image_container_image = document.getElementById(image_container_image);
        this.lateral_controls_container = document.getElementById(lateral_controls_container);
        this.lateral_controls_container_left_control = document.getElementById(lateral_controls_container_left_control);
        this.lateral_controls_container_right_control = document.getElementById(lateral_controls_container_right_control);
        this.dot_controls_container = document.getElementById(dot_controls_container);

        this.information_container_image_viewer_controls_container = document.getElementById(information_container_image_viewer_controls_container);
        this.information_container_image_viewer_controls_container_message = document.getElementById(information_container_image_viewer_controls_container_message);
        this.information_container_image_viewer_controls_container_lateral_controls_container = document.getElementById(information_container_image_viewer_controls_container_lateral_controls_container);
        this.information_container_image_viewer_controls_container_lateral_controls_left_control = document.getElementById(information_container_image_viewer_controls_container_lateral_controls_left_control);
        this.information_container_image_viewer_controls_container_lateral_controls_right_control = document.getElementById(information_container_image_viewer_controls_container_lateral_controls_right_control);
        this.information_container_image_viewer_controls_container_dots_container = document.getElementById(information_container_image_viewer_controls_container_dots_container);
        this.information_container_image_viewer_controls_container_dot = document.getElementById(information_container_image_viewer_controls_container_dot);


        
        
        
        
        


        change_image_on_lateral_control_click(
        this.root_folder,
        this.sesion_array,
        this.page_name,
        this.component_id,
        this.component_class,
        this.images_folder,

        this.outer_container,
        this.information_container,
        this.information_container_background_image_overlay,
        this.information_container_background_image_image,
        this.information_container_title,
        this.information_container_main_message,
        this.elements_array,
        this.information_container_secondary_message,
        this.information_container_action_button,
        this.image_container,
        this.image_container_image,
        this.lateral_controls_container,
        this.lateral_controls_container_left_control,
        this.lateral_controls_container_right_control,
        this.dot_controls_container,
        this.information_container_image_viewer_controls_container,
        this.information_container_image_viewer_controls_container_message,
        this.information_container_image_viewer_controls_container_lateral_controls_container,
        this.information_container_image_viewer_controls_container_lateral_controls_left_control,
        this.information_container_image_viewer_controls_container_lateral_controls_right_control,
        this.information_container_image_viewer_controls_container_dots_container,
        this.information_container_image_viewer_controls_container_dot,
        );      
};
}