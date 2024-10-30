// called from "./class.js";

import create_image_container_element from "./image_container_element.js";
export default function 
(
    root_folder, 
    component_folder,
    sesion_array,
    page_name,
    component_id,
    component_class,
    component_image_folder_path,
    component_container,
    is_landscape,
    images_names_array,
) 
{
	const image_container = document.createElement("div");
	image_container.id = component_id + "_" + component_class + "_" + "image_container";
	image_container.className = component_class + "_" + "image_container";
	add_component_style_tag(component_folder,"image_container");

    for (let index = 0; index < images_names_array.length; index++) 
    {
        const current_image_name = images_names_array[index];
        image_container.appendChild(
            create_image_container_element(
                root_folder, 
                component_folder,
                sesion_array,
                page_name,
                component_id,
                component_class,
                component_image_folder_path,
                component_container,
                is_landscape,
                images_names_array,
                current_image_name,
                image_container
            )
        );
    };

	return image_container;
}