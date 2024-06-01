// Called from "./image_box.js"

import form_submit_action from "./form_actions.js";
import create_result_message from "./result_message.js";
import form_element_control_flow from "./form_element_control_flow.js";
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
	form.id = component_id + "_" + component_class + "_" + "div";
	form.className = component_class + "_" + "form";
	form.setAttribute("enctype", "multipart/form-data");
	add_component_style_tag(component_folder,"form");
	
	// const form_awaiter_screen = document.createElement("div");
	// form_awaiter_screen.className = "awaiter_screen";
	// form.appendChild(form_awaiter_screen);

	const form_heading = document.createElement("div");
	form_heading.id = component_id + "_" + component_class + "_" + "form_heading";
	form_heading.className = component_class + "_" + "form_heading";
	const form_heading_h2 = document.createElement("h2");
	form_heading_h2.id = component_id + "_" + component_class + "_" + "form_heading_h2";
	form_heading_h2.className = component_class + "_" + "form_heading_h2";
	form_heading_h2.innerHTML = component_id.replace("_"," ");
	form_heading.appendChild(form_heading_h2);

	const form_desktop_image_elements = document.createElement("div");
	form_desktop_image_elements.id = component_id + "_" + component_class + "_" + "form_desktop_image_elements";
	form_desktop_image_elements.className = component_class + "_" + "form_image_elements";
	const form_desktop_image_elements_label = document.createElement("label");
	form_desktop_image_elements_label.id = component_id + "_" + component_class + "_" + "form_desktop_image_elements_label";
	form_desktop_image_elements_label.className = component_class + "_" + "form_image_elements_label";
	form_desktop_image_elements_label.innerHTML = "Nombre de imagen para escritorio";
	form_desktop_image_elements.appendChild(form_desktop_image_elements_label);
	const form_desktop_image_elements_name_input = document.createElement("input");
	form_desktop_image_elements_name_input.id = component_id + "_" + component_class + "_" + "form_desktop_image_elements_name_input";
	form_desktop_image_elements_name_input.className = component_class + "_" + "form_image_elements_input";
	form_desktop_image_elements_name_input.setAttribute("type", "text");;
	form_desktop_image_elements_name_input.setAttribute("name", "form_desktop_image_elements_name_input");
	form_desktop_image_elements_label.setAttribute("for", form_desktop_image_elements_name_input.id)
	form_desktop_image_elements.appendChild(form_desktop_image_elements_name_input);
	const form_desktop_image_elements_image_input = document.createElement("input");
	form_desktop_image_elements_image_input.id = component_id + "_" + component_class + "_" + "form_desktop_image_elements_image_input";
	form_desktop_image_elements_image_input.className = component_class + "_" + "form_image_elements_input";
	form_desktop_image_elements_image_input.setAttribute("type", "file");
	form_desktop_image_elements_image_input.setAttribute("name", "form_desktop_image_elements_image_input");
	form_desktop_image_elements_image_input.setAttribute("disabled", "true");
	form_desktop_image_elements.appendChild(form_desktop_image_elements_image_input);
	const form_desktop_image_elements_error_paragraph = document.createElement("p");
	form_desktop_image_elements_error_paragraph.id = component_id + "_" + component_class + "_" + "form_desktop_image_elements_error_paragraph";
	form_desktop_image_elements_error_paragraph.className = component_class + "_" + "form_image_elements_error_paragraph";
	form_desktop_image_elements.appendChild(form_desktop_image_elements_error_paragraph);


	const form_mobile_image_elements = document.createElement("div");
	form_mobile_image_elements.id = component_id + "_" + component_class + "_" + "form_mobile_image_elements";
	form_mobile_image_elements.className = component_class + "_" + "form_image_elements";
	const form_mobile_image_elements_label = document.createElement("label");
	form_mobile_image_elements_label.id = component_id + "_" + component_class + "_" + "form_mobile_image_elements_label";
	form_mobile_image_elements_label.className = component_class + "_" + "form_image_elements_label";
	form_mobile_image_elements_label.innerHTML = "Nombre de imagen para móvil";
	form_mobile_image_elements.appendChild(form_mobile_image_elements_label);
	const form_mobile_image_elements_name_input = document.createElement("input");
	form_mobile_image_elements_name_input.id = component_id + "_" + component_class + "_" + "form_mobile_image_elements_name_input";
	form_mobile_image_elements_name_input.className = component_class + "_" + "form_image_elements_input";
	form_mobile_image_elements_name_input.setAttribute("type", "text");
	form_mobile_image_elements_name_input.setAttribute("name", "form_mobile_image_elements_name_input");
	form_mobile_image_elements_name_input.setAttribute("disabled", "true");
	form_mobile_image_elements_label.setAttribute("for", form_mobile_image_elements_name_input.id);
	form_mobile_image_elements.appendChild(form_mobile_image_elements_name_input);
	const form_mobile_image_elements_image_input = document.createElement("input");
	form_mobile_image_elements_image_input.id = component_id + "_" + component_class + "_" + "form_mobile_image_elements_image_input";
	form_mobile_image_elements_image_input.className = component_class + "_" + "form_image_elements_input";
	form_mobile_image_elements_image_input.setAttribute("type", "file");
	form_mobile_image_elements_image_input.setAttribute("name", "form_mobile_image_elements_image_input");
	form_mobile_image_elements_image_input.setAttribute("disabled", "true");
	form_mobile_image_elements.appendChild(form_mobile_image_elements_image_input);
	const form_mobile_image_elements_error_paragraph = document.createElement("p");
	form_mobile_image_elements_error_paragraph.id = component_id + "_" + component_class + "_" + "form_mobile_image_elements_error_paragraph";
	form_mobile_image_elements_error_paragraph.className = component_class + "_" + "form_image_elements_error_paragraph";
	form_mobile_image_elements.appendChild(form_mobile_image_elements_error_paragraph);

	const form_submit_button = document.createElement("div");
	form_submit_button.id = component_id + "_" + component_class + "_" + "form_submit_button";
	form_submit_button.className = component_class + "_" + "form_submit_button";
	form_submit_button.innerHTML = "Guardar";
	form_submit_button.classList.add("disabled");

	new form_element_control_flow().activate_deactivate_according_to_input(
		component_image_content_object,
		form_desktop_image_elements_name_input, 
		form_desktop_image_elements_image_input,
		form_desktop_image_elements_error_paragraph,
		form_mobile_image_elements_name_input,
		form_mobile_image_elements_image_input,
		form_mobile_image_elements_error_paragraph,
		form_submit_button,
	);

	new form_submit_action().send_data(
		root_folder,
		component_folder, 
		sesion_array,
		page_name,
		component_id,
		component_class,
		component_image_content_object,
		component_container,
		form, 
		form_desktop_image_elements_name_input, 
		form_desktop_image_elements_image_input,
		form_mobile_image_elements_name_input,
		form_mobile_image_elements_image_input,
		form_submit_button,
	);

	form.appendChild(form_heading);
	form.appendChild(form_desktop_image_elements);
	form.appendChild(form_mobile_image_elements);
	form.appendChild(form_submit_button);
	
	// form.addEventListener("pointerenter",()=>{
	// 	event_carrousel_image_loader_002_result_message.style.display = "flex";
	// 	component_container.style.gridTemplateRows = "0rem 3.5rem 2rem auto 2rem";
	// });

	// Next component element
	// Next component element
	// Next component element
	// Next component element

	document.getElementById(component_id + "_" + component_class).appendChild(
		create_result_message(
			root_folder, 
			component_folder, 
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