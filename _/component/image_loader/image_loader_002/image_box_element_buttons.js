// Called from "image_box_element_container.js";

import image_box_element_buttons_actions from "./image_box_element_buttons_actions.js";

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
	image_box_element_container,
	image_box_element_container_images_container,
	image_box_element_container_desktop_image,
	image_box_element_container_mobile_image,
	image_box_element_container_overlay,
)
{
	const image_box_element_buttons = document.createElement("div");
	image_box_element_buttons.id = component_id + "_" + component_class + "_" + "image_box_element_buttons";
	image_box_element_buttons.className = component_class + "_" + "image_box_element_buttons";
	add_component_style_tag(component_folder,"image_box_element_buttons");

	const activate_button = document.createElement("div");
	activate_button.id = component_id + "_" + component_class + "_" + "activate_button";
	activate_button.className = component_class + "_" + "activate_button";
	activate_button.classList.add(component_class + "_" + "image_box_element_buttons_button");
	activate_button.innerHTML = "a";
	const activate_button_tooltip = document.createElement("div");
	activate_button_tooltip.id = component_id + "_" + component_class + "_" + "activate_button_tooltip";
	activate_button_tooltip.className = component_class + "_" + "activate_button_tooltip";
	activate_button_tooltip.classList.add(component_class + "_" + "image_box_element_buttons_button_tooltip");
	activate_button_tooltip.innerHTML = "Muestra esta imagen en el componente.";
	image_box_element_buttons.appendChild(activate_button_tooltip);
	new image_box_element_buttons_actions().display_tooltip(activate_button, activate_button_tooltip);

	const disable_button = document.createElement("div");
	disable_button.id = component_id + "_" + component_class + "_" + "disable_button";
	disable_button.className = component_class + "_" + "disable_button";
	disable_button.classList.add(component_class + "_" + "image_box_element_buttons_button");
	disable_button.innerHTML = "d";
	const disable_button_tooltip = document.createElement("div");
	disable_button_tooltip.id = component_id + "_" + component_class + "_" + "disable_button_tooltip";
	disable_button_tooltip.className = component_class + "_" + "disable_button_tooltip";
	disable_button_tooltip.classList.add(component_class + "_" + "image_box_element_buttons_button_tooltip");
	disable_button_tooltip.innerHTML = "Remueve esta imagen del componente.";
	image_box_element_buttons.appendChild(disable_button_tooltip);
	new image_box_element_buttons_actions().display_tooltip(disable_button, disable_button_tooltip);
	
	const expand_button = document.createElement("div");
	expand_button.id = component_id + "_" + component_class + "_" + "expand_button";
	expand_button.className = component_class + "_" + "expand_button";
	expand_button.classList.add(component_class + "_" + "image_box_element_buttons_button");
	expand_button.innerHTML = "e";
	const expand_button_tooltip = document.createElement("div");
	expand_button_tooltip.id = component_id + "_" + component_class + "_" + "expand_button_tooltip";
	expand_button_tooltip.className = component_class + "_" + "expand_button_tooltip";
	expand_button_tooltip.classList.add(component_class + "_" + "image_box_element_buttons_button_tooltip");
	expand_button_tooltip.innerHTML = "Visualiza en pantalla completa.";
	image_box_element_buttons.appendChild(expand_button_tooltip);
	new image_box_element_buttons_actions().display_tooltip(expand_button, expand_button_tooltip);
	
	const delete_button = document.createElement("div");
	delete_button.id = component_id + "_" + component_class + "_" + "delete_button";
	delete_button.className = component_class + "_" + "delete_button";
	delete_button.classList.add(component_class + "_" + "image_box_element_buttons_button");
	delete_button.innerHTML = "x";
	const delete_button_tooltip = document.createElement("div");
	delete_button_tooltip.id = component_id + "_" + component_class + "_" + "delete_button_tooltip";
	delete_button_tooltip.className = component_class + "_" + "delete_button_tooltip";
	delete_button_tooltip.classList.add(component_class + "_" + "image_box_element_buttons_button_tooltip");
	delete_button_tooltip.innerHTML = "Elimina esta imagen de todo registro.";
	image_box_element_buttons.appendChild(delete_button_tooltip);
	new image_box_element_buttons_actions().display_tooltip(delete_button, delete_button_tooltip);

	image_box_element_buttons.appendChild(activate_button);
	image_box_element_buttons.appendChild(disable_button);
	image_box_element_buttons.appendChild(expand_button);
	image_box_element_buttons.appendChild(delete_button);
	
	return image_box_element_buttons;
}