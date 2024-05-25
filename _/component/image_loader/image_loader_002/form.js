// Called from "./image_box.js"

import create_result_message from "./result_message.js";
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
	image_box
)
{
	const form = document.createElement("form");
	form.id = component_id + "_" + component_class + "_" + "form";
	form.className = component_class + "_" + "form";
	add_component_style_tag(component_folder,"form");
	
	const form_awaiter_screen = document.createElement("div");
	form_awaiter_screen.className = "awaiter_screen";
	form.appendChild(form_awaiter_screen);
	form.addEventListener("pointerenter",()=>{
		event_carrousel_image_loader_002_result_message.style.display = "flex";
		component_container.style.gridTemplateRows = "0rem 3.5rem 2rem auto 2rem";
	});

	// Next component element
	// Next component element
	// Next component element
	// Next component element

	component_container.appendChild(
		create_result_message(
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
	);

	// Return full component
	// Return full component
	// Return full component
	// Return full component

	return form;
}