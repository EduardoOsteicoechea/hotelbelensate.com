// Called from "./_.js"

export default function
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
    information_button.addEventListener("pointerup",()=>{
        window.location.href = "../reservaciones";
    });
}