import logo_elements_styles from "./logo_elements_styles.js";

export default function logo_elements(
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	session_array,
	current_page,
	outer_container,
){
	const logo_elements_container = document.createElement("a");
	logo_elements_styles(logo_elements_container);
	logo_elements_container.id = component_id + "_" + "logo_elements_container";
	logo_elements_container.classList.add(component_class + "_" + "logo_elements_container");

	const logo_elements_container_image = document.createElement("img");
	logo_elements_container_image.id = component_id + "_" + "logo_elements_container_image";
	logo_elements_container_image.classList.add(component_class + "_" + "logo_elements_container_image");
	logo_elements_container_image.setAttribute("src",root_folder + "_/media/image/brand/logo.webp");
	logo_elements_container_image.setAttribute("alt","Logo del hotel Belensate");
	logo_elements_container_image.setAttribute("width","100%");
	logo_elements_container.appendChild(logo_elements_container_image);

	outer_container.appendChild(logo_elements_container);
}