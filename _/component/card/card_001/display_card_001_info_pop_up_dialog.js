// Called from "./pop_up_info_contact_card_elements";

export default function display_card_001_info_pop_up_dialog(
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	sesion_array,
	data,
	initial_component_container,
	calling_component_container,
	heading_text,
	paragraph_1_text,
	paragraph_2_text,
	clipboard_container_text,
	clipboard_container_text_to_be_copied_text,
){
	// This line disables the scrolling of the page to inforce the user to pick a date or abort the operation. This disabling of the scroll function is reverted in the close_option_date_picker() function added to the close_option_date_picker_button button
	disable_page_scrolling_function();  // resides in hotelbelensate.com/_/global.js
	
	const overlay_container = document.createElement("div");
	overlay_container.id = component_id + "_" + "overlay_container";
	overlay_container.classList.add(component_class + "_" + "overlay_container_container");
	overlay_container.style.top = window.scrollY + "px";
	// overlay_container.addEventListener("pointerup", ()=>{
	// 	overlay_container.remove();
	// 	enable_page_scrolling_function();
	// });
	document.body.appendChild(overlay_container);
	add_component_style_tag( component_folder, "pop_up_info_contact_card_pop_up" );

	const message_container = document.createElement("div");
	message_container.id = component_id + "_" + "message_container";
	message_container.classList.add(component_class + "_" + "overlay_container_message_container");
	overlay_container.appendChild(message_container);

	const heading = document.createElement("h2");
	heading.id = component_id + "_" + "heading";
	heading.classList.add(component_class + "_" + "overlay_container_message_heading");
	heading.innerHTML = heading_text;
	message_container.appendChild(heading);

	const paragraph_1 = document.createElement("p");
	paragraph_1.id = component_id + "_" + "paragraph_1";
	paragraph_1.classList.add(component_class + "_" + "overlay_container_message_paragraph_1");
	paragraph_1.innerHTML = paragraph_1_text;
	message_container.appendChild(paragraph_1);

	const paragraph_2 = document.createElement("p");
	paragraph_2.id = component_id + "_" + "paragraph_2";
	paragraph_2.classList.add(component_class + "_" + "overlay_container_message_paragraph_2");
	paragraph_2.innerHTML = paragraph_2_text;
	message_container.appendChild(paragraph_2);

	const clipboard = document.createElement("div");
	clipboard.id = component_id + "_" + "clipboard";
	clipboard.classList.add(component_class + "_" + "overlay_container_message_clipboard");
	clipboard.innerHTML = clipboard_container_text_to_be_copied_text;
	clipboard.addEventListener("pointerup",()=>{
		clipboard.style.background = "var(--c_whatsapp)";
		clipboard.innerHTML = "¡Teléfono copiado!";
		navigator.clipboard.writeText(clipboard_container_text_to_be_copied_text).then(function() {
			console.log('Copying to clipboard was successful!\n' + clipboard_container_text_to_be_copied_text);
		 }, function(err) {
			console.error('Could not copy text: ', err);
		 });
	});
	message_container.appendChild(clipboard);

	const close_button = document.createElement("span");
	close_button.id = component_id + "_" + "close_button";
	close_button.classList.add(component_class + "_" + "overlay_container_close_button");
	close_button.innerHTML = "regresar";
	close_button.addEventListener("pointerup", ()=>{
		overlay_container.remove();
		enable_page_scrolling_function();
	});
	message_container.appendChild(close_button);

}