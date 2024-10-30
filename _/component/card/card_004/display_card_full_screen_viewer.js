// Called from "./display_image_viewer_container_full_screen_button_container.js"

import send_to_reservation_application from "./send_to_reservation_application.js";

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
    disable_page_scrolling_function();

    const full_screen_viewer_outer_container = document.createElement("div");
    full_screen_viewer_outer_container.id = page_name + "_" + parent_component_id + "_" + component_class + "_" + card_iteration + "_" + "full_screen_viewer_outer_container";
    full_screen_viewer_outer_container.classList.add(component_class + "_" + "full_screen_viewer_outer_container");
    full_screen_viewer_outer_container.style.top = window.scrollY + "px";
    
    // Images container
    // Images container
    // Images container
    // Images container
    // Images container
    const room_images = rooms_type_data["datos de tipo"]["imagenes de habitación"];

    // console.log(rooms_type_data);
    const full_screen_viewer_outer_container_images_container = document.createElement("div");
    full_screen_viewer_outer_container_images_container.id = page_name + "_" + parent_component_id + "_" + component_class + "_" + card_iteration + "_" + "full_screen_viewer_outer_container_images_container";
    full_screen_viewer_outer_container_images_container.classList.add(component_class + "_" + "full_screen_viewer_outer_container_images_container");

    const full_screen_viewer_outer_container_image = document.createElement("img");
    full_screen_viewer_outer_container.id = page_name + "_" + parent_component_id + "_" + component_class + "_" + card_iteration + "_" + "full_screen_viewer_outer_container_image";
    full_screen_viewer_outer_container_image.classList.add(component_class + "_" + "full_screen_viewer_outer_container_image");
    full_screen_viewer_outer_container_image.setAttribute("height","100%");
    full_screen_viewer_outer_container_image.setAttribute("alt","full_screen_viewer_outer_container_image");
    full_screen_viewer_outer_container_image.setAttribute("src", root_folder + "_/media/image/room/"+ room_images[0]);

    full_screen_viewer_outer_container_images_container.appendChild(full_screen_viewer_outer_container_image);

    let current_image_counter = 0;
    full_screen_viewer_outer_container.addEventListener("pointerup",(event)=>{
        // console.log(room_images);
        // console.log(current_image_counter);
        if (event.target === full_screen_viewer_outer_container_image) {
            event.stopPropagation();
            if(current_image_counter < room_images.length - 1){
                current_image_counter++;
            }else{
                current_image_counter = 0;
            };
            full_screen_viewer_outer_container_image.setAttribute("src", root_folder + "_/media/image/room/" + room_images[current_image_counter]);
        }else if (event.target === full_screen_viewer_outer_container) {
            full_screen_viewer_outer_container.remove();
            enable_page_scrolling_function();
        };
    });

    // Close and Accept buttons
    // Close and Accept buttons
    // Close and Accept buttons
    // Close and Accept buttons
    // Close and Accept buttons

    const full_screen_viewer_close_button = document.createElement("div");
    full_screen_viewer_close_button.id = page_name + "_" + parent_component_id + "_" + component_class + "_" + card_iteration + "_" + "full_screen_viewer_close_button";
    full_screen_viewer_close_button.classList.add(component_class + "_" + "full_screen_viewer_close_button");
    full_screen_viewer_close_button.innerHTML = "Cerrar";
    full_screen_viewer_close_button.addEventListener("pointerup",()=>{
        full_screen_viewer_outer_container.remove();
        enable_page_scrolling_function();
    }); 
    
    const full_screen_viewer_reserve_button = document.createElement("div");
    full_screen_viewer_reserve_button.id = page_name + "_" + parent_component_id + "_" + component_class + "_" + card_iteration + "_" + "full_screen_viewer_reserve_button";
    full_screen_viewer_reserve_button.classList.add(component_class + "_" + "full_screen_viewer_reserve_button");
    full_screen_viewer_reserve_button.innerHTML = "Reservar";
    full_screen_viewer_reserve_button.addEventListener("pointerup",()=>{
        window.location.href = "../reservaciones";
    });
    








    full_screen_viewer_outer_container.appendChild(full_screen_viewer_outer_container_images_container);
    full_screen_viewer_outer_container.appendChild(full_screen_viewer_close_button);
    full_screen_viewer_outer_container.appendChild(full_screen_viewer_reserve_button);

    document.body.appendChild(full_screen_viewer_outer_container);
}