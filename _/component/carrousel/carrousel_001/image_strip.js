// called from "./class.js";

import create_image_strip_container_image_strip from "./image_strip_container_image_strip.js";

export default function 
(
	root_folder,
	component_folder, 
	sesion_array,
	page_name,
	component_id,
	component_class,
	component_container,
	component_image_folder_path,
) 
{
	const image_strip_container = document.createElement("div");
	image_strip_container.id = component_id + "_" + component_class + "_" + "image_strip_container";
	image_strip_container.className = component_class + "_" + "image_strip_container";
	add_component_style_tag(component_folder,"image_strip_container");

	let component_image_content_object = {};
	var xhr = new XMLHttpRequest();
	xhr.open("POST",component_folder + "read_image_folder.php", false);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() 
	{
		if (this.readyState === 4 && this.status === 200) {
			component_image_content_object = JSON.parse(this.responseText);
		}
	};
	xhr.send("folder_path="+component_id);

	const desktop_images_names_array = Object.entries(component_image_content_object)[0][1]["desktop"];
	const mobile_images_names_array = Object.entries(component_image_content_object)[0][1]["mobile"];

	let window_width = window.innerWidth;
	let window_height = window.innerHeight;
	let is_landscape = window_width > window_height;

	window.addEventListener("resize",()=>{
		window_width = window.innerWidth;
		window_height = window.innerHeight;
		is_landscape = window_width > window_height;
	});

	if(is_landscape){
		image_strip_container.appendChild(
			create_image_strip_container_image_strip(
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
				desktop_images_names_array,
				is_landscape,
			)
		);
	}else{
		image_strip_container.appendChild(
			create_image_strip_container_image_strip(
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
				mobile_images_names_array,
				is_landscape,
			)
		);
	};

	return image_strip_container;
}