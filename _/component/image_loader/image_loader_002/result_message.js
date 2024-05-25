// Called from "./form.js"

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
	form,
)
{
	const result_message = document.createElement("div");
	result_message.id = component_id + "_" + component_class + "_" + "result_message";
	result_message.className = component_class + "_" + "result_message";
	add_component_style_tag(component_folder,"result_message");

	const result_message_awaiter_screen = document.createElement("div");
	result_message_awaiter_screen.className = "awaiter_screen";
	result_message.appendChild(result_message_awaiter_screen);
	result_message.style.display = "none";

	// Return full component
	// Return full component
	// Return full component
	// Return full component

	return result_message;
}