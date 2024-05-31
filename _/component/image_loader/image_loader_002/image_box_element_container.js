// Called from "./image_box.js";

import image_box_element_buttons from "./image_box_element_buttons.js";

export default function 
(
	root_folder,
	component_folder, 
	sesion_array,
	page_name,
	component_id,
	component_class,
	component_image_content_object,
	component_container,
	image_box,
	enabled_or_disabled,
	desktop_image_name,
	mobile_image_name,
)
{
	const image_box_element_container = document.createElement("div");
	image_box_element_container.id = component_id + "_" + component_class + "_" + "image_box_element_container" + "_" + desktop_image_name ;
	image_box_element_container.className = component_class + "_" + "image_box_element_container";
	add_component_style_tag(component_folder,"image_box_element_container");

	const image_box_element_container_images_container = document.createElement("div");
	image_box_element_container_images_container.id = component_id + "_" + component_class + "_" + "image_box_element_container_images_container" + "_" + desktop_image_name ;
	image_box_element_container_images_container.className = component_class + "_" + "image_box_element_container_images_container";

	const image_box_element_container_desktop_image = document.createElement("img");
	image_box_element_container_desktop_image.id = component_id + "_" + component_class + "_" + "image_box_element_container_desktop_image" + "_" + desktop_image_name ;
	image_box_element_container_desktop_image.className = component_class + "_" + "image_box_element_container_desktop_image";
	image_box_element_container_desktop_image.classList.add(component_class + "_" + "image_box_element_container_desktop_image" + "_" + enabled_or_disabled);
	image_box_element_container_desktop_image.setAttribute("height","100%");
	image_box_element_container_desktop_image.setAttribute("alt","element_image");
	image_box_element_container_desktop_image.setAttribute("src",root_folder + "_/media/image/" + component_id + "/" + enabled_or_disabled + "/" + "/" + "desktop" + "/" + desktop_image_name);

	const image_box_element_container_mobile_image = document.createElement("img");
	image_box_element_container_mobile_image.id = component_id + "_" + component_class + "_" + "image_box_element_container_mobile_image" + "_" + mobile_image_name ;
	image_box_element_container_mobile_image.className = component_class + "_" + "image_box_element_container_mobile_image";
	image_box_element_container_mobile_image.classList.add(component_class + "_" + "image_box_element_container_mobile_image" + "_" + enabled_or_disabled);
	image_box_element_container_mobile_image.setAttribute("height","100%");
	image_box_element_container_mobile_image.setAttribute("alt","element_image");
	image_box_element_container_mobile_image.setAttribute("src",root_folder + "_/media/image/" + component_id + "/" + enabled_or_disabled + "/" + "/" + "mobile" + "/" + mobile_image_name);

	image_box_element_container_images_container.appendChild(image_box_element_container_desktop_image);
	image_box_element_container_images_container.appendChild(image_box_element_container_mobile_image);
	image_box_element_container.appendChild(image_box_element_container_images_container);

	const image_box_element_container_overlay = document.createElement("div");
	image_box_element_container_overlay.id = component_id + "_" + component_class + "_" + "image_box_element_container_overlay" + "_" + desktop_image_name ;
	image_box_element_container_overlay.className = component_class + "_" + "image_box_element_container_overlay";

	if(enabled_or_disabled == "disabled")
	{
		image_box_element_container.appendChild(image_box_element_container_overlay);

		image_box_element_container.classList.add("disabled");
	};

	image_box_element_container.appendChild(
		image_box_element_buttons(
			root_folder,
			component_folder, 
			sesion_array,
			page_name,
			component_id,
			component_class,
			component_image_content_object,
			component_container,
			image_box,
			enabled_or_disabled,
			desktop_image_name,
			mobile_image_name,
			image_box_element_container,
			image_box_element_container_images_container,
			image_box_element_container_desktop_image,
			image_box_element_container_mobile_image,
			image_box_element_container_overlay,
		)
	);
	
	return image_box_element_container;
}