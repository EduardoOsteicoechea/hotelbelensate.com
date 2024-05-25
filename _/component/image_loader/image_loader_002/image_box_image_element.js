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
	image_name
)
{
	const image_element = document.createElement("div");
	image_element.id = image_name;

	return image_element;
}