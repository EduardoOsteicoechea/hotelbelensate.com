// Called from "./_.js"


import update_dot_controls from "./update_dot_controls.js";

export default function
(
    root_folder,
    sesion_array,
    page_name,
    component_id,
    component_class,
    images_folder,
    title_text,
    elements_text_array,
    secondary_message_text,
    action_button_text,
    action_button_href,
    folder_content_array,
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
    const available_desktop_images = folder_content_array["enabled"]["desktop"];
    const available_mobile_images = folder_content_array["enabled"]["mobile"];
    
   
    dot_controls_container.children[0].classList.add("selected_dot");
    information_container_image_viewer_controls_container_dots_container.children[0].classList.add("selected_dot");

    let available_desktop_images_counter = 0;

    information_container_image_viewer_controls_container_lateral_controls_left_control.addEventListener("pointerup",()=>{
        if(available_desktop_images_counter === 0)
        {
            available_desktop_images_counter = available_desktop_images.length - 1;
            image_container_image.setAttribute("src", images_folder + "/enabled/desktop/" + folder_content_array["enabled"]["desktop"][available_desktop_images_counter]);
        }
        else
        {
            available_desktop_images_counter--;
            image_container_image.setAttribute("src", images_folder + "/enabled/desktop/" + folder_content_array["enabled"]["desktop"][available_desktop_images_counter]);
        }

        update_dot_controls(
            root_folder,
            sesion_array,
            page_name,
            component_id,
            component_class,
            images_folder,
            title_text,
            elements_text_array,
            secondary_message_text,
            action_button_text,
            action_button_href,
            folder_content_array,
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
            available_desktop_images_counter,
        );
    });

    information_container_image_viewer_controls_container_lateral_controls_right_control.addEventListener("pointerup",()=>{
        if(available_desktop_images_counter < available_desktop_images.length - 1){
            available_desktop_images_counter++;
            image_container_image.setAttribute("src", images_folder + "/enabled/desktop/" +  folder_content_array["enabled"]["desktop"][available_desktop_images_counter]);
        }else{
            available_desktop_images_counter = 0;
            image_container_image.setAttribute("src", images_folder + "/enabled/desktop/" + folder_content_array["enabled"]["desktop"][available_desktop_images_counter]);
        }

        update_dot_controls(
            root_folder,
            sesion_array,
            page_name,
            component_id,
            component_class,
            images_folder,
            title_text,
            elements_text_array,
            secondary_message_text,
            action_button_text,
            action_button_href,
            folder_content_array,
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
            available_desktop_images_counter,
        );
    });
};