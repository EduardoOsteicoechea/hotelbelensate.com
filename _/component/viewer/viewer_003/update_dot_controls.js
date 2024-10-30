// Called from "./change_image_on_lateral_control_click.js"


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
    current_dot_counter
)
{    
    for (let index = 0; index < dot_controls_container.children.length; index++) {
        dot_controls_container.children[index].classList.remove("selected_dot");
        information_container_image_viewer_controls_container_dots_container.children[index].classList.remove("selected_dot");
    };

    dot_controls_container.children[current_dot_counter].classList.add("selected_dot");
    information_container_image_viewer_controls_container_dots_container.children[current_dot_counter].classList.add("selected_dot");
    
};