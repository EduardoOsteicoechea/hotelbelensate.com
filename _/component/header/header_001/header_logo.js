// called from "./class.js";

export default function (
	root_folder, 
	component_folder,
	sesion_array,
	page_name,
	component_class,
	component_image_folder_path,
	highligthed_button,
) {
	const header_logo_container = document.createElement("a");
	header_logo_container.id = page_name + "_" + component_class + "_" + "header_logo_container";
	header_logo_container.classList.add(component_class + "_" + "header_logo_container");
	header_logo_container.setAttribute("href", root_folder + "inicio");
	add_component_style_tag(component_folder,"header_logo");

	const header_logo_container_image = document.createElement("img");
	header_logo_container_image.id = page_name + "_" + component_class + "_" + "header_logo_container_image";
	header_logo_container_image.classList.add(component_class + "_" + "header_logo_container_image");
	header_logo_container_image.setAttribute("alt","header logo");
	header_logo_container_image.setAttribute("height","100%");
	header_logo_container_image.setAttribute("src",root_folder+"_/media/image/header/logo_horizontal.webp");
	header_logo_container.appendChild(header_logo_container_image);

	return header_logo_container;
}