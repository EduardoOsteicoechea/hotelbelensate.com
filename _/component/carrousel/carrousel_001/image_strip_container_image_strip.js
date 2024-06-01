// called from "./image_strip.js";

import create_carrousel_controls from "./carrousel_controls.js";

export default function 
(
	root_folder,
	component_folder, 
	sesion_array,
	page_name,
	component_id,
	component_class,
	component_container,
	component_image_content_object,
	image_strip_container,
	component_image_folder_path,
	images_names_array,
	is_landscape,
) 
{
	const image_strip_container_image_strip = document.createElement("div");
	image_strip_container_image_strip.id = component_id + "_" + component_class + "_" + "image_strip_container_image_strip";
	image_strip_container_image_strip.className = component_class + "_" + "image_strip_container_image_strip";
	image_strip_container_image_strip.style.left = "0px";
	add_component_style_tag(component_folder,"image_strip_container_image_strip");

	for (let index = 0; index < images_names_array.length; index++) {
		const image_name = images_names_array[index];
		const image_container = document.createElement("div");
		image_container.id = component_id+"_"+component_class+"_"+"image_container" + "_" + index;
		image_container.className = component_class+"_"+"image_container";
		const image = document.createElement("img");
		image.setAttribute("alt",component_id+" image");
		if(is_landscape){
			image.setAttribute("width","100%");
			image.setAttribute( "src", component_image_folder_path + "/enabled/desktop/" + image_name );
		}else{
			image.setAttribute("width","100%");
			image.setAttribute( "src", component_image_folder_path + "/enabled/mobile/" + image_name );
		};
		image_container.appendChild(image);
		image_strip_container_image_strip.appendChild(image_container);
	};

	component_container.appendChild(
		create_carrousel_controls(
			root_folder,
			component_folder, 
			sesion_array,
			page_name,
			component_id,
			component_class,
			component_container,
			component_image_content_object,
			image_strip_container,
			component_image_folder_path,
			images_names_array,
			is_landscape,
			image_strip_container_image_strip
		)
	);

	return image_strip_container_image_strip;
}