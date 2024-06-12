// called from "./class.js";

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
    current_image_name,
    image_container
) 
{
	const image_container_element = document.createElement("div");
	image_container_element.id = component_id + "_" + component_class + "_" + "image_container_element";
	image_container_element.className = component_class + "_" + "image_container_element";
	add_component_style_tag(component_folder,"image_container_element");

	const image_container_element_image = document.createElement("img");
	image_container_element_image.id = component_id + "_" + component_class + "_" + "image_container_element_image";
	image_container_element_image.className = component_class + "_" + "image_container_element_image";
	image_container_element_image.setAttribute("alt","room image");
	image_container_element_image.setAttribute("height","100%");
    if (is_landscape){
        image_container_element_image.setAttribute("src", component_image_folder_path + "/enabled/desktop/" + current_image_name);
    }else{
        image_container_element_image.setAttribute("src", component_image_folder_path + "/enabled/mobile/" + current_image_name);
    };
    image_container_element.appendChild(image_container_element_image);

	return image_container_element;
}