// called from "./class.js";

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
	button_1_scroll_target_id,
	button_2_href_string,
	hero_image_bottom_location,
) 
{
			
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

	const desktop_image_name = component_image_content_object["enabled"]["desktop"][0];
	const mobile_image_name = component_image_content_object["enabled"]["mobile"][0];

	const image_container = document.createElement("div");
	image_container.id = component_id + "_" + component_class + "_" + "image_container";
	image_container.className = component_class + "_" + "image_container";
	add_component_style_tag(component_folder,"image_container");
	
	let window_width = window.innerWidth;
	let window_height = window.innerHeight;
	let is_landscape = window_width > window_height;

	window.addEventListener("resize",()=>{
		window_width = window.innerWidth;
		window_height = window.innerHeight;
		is_landscape = window_width > window_height;
	});
	
	const image_container_image = document.createElement("img");
	image_container_image.id = component_id + "_" + component_class + "_" + "image_container_image";
	image_container_image.className = component_class + "_" + "image_container_image";
	if(is_landscape){
		image_container_image.setAttribute("height","100%");
		image_container_image.setAttribute("alt","element_image");
		image_container_image.setAttribute("src",root_folder + "_/media/image/" + component_id + "/enabled/desktop/" + desktop_image_name);
	}else{
		image_container_image.setAttribute("height","100%");
		image_container_image.setAttribute("alt","element_image");
		image_container_image.setAttribute("src",root_folder + "_/media/image/" + component_id + "/enabled/mobile/" + mobile_image_name);
	};
	image_container_image.style.bottom = hero_image_bottom_location;
	image_container.appendChild(image_container_image);

	return image_container;
}