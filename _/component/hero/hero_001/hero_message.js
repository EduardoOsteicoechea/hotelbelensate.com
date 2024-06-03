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
) 
{
	const hero_message = document.createElement("div");
	hero_message.id = component_id + "_" + component_class + "_" + "hero_message";
	hero_message.className = component_class + "_" + "hero_message";
	add_component_style_tag(component_folder,"hero_message");

	const hero_message_heading_container = document.createElement("div");
		hero_message_heading_container.id = component_id + "_" + component_class + "_" + "hero_message_heading_container";
		hero_message_heading_container.className = component_class + "_" + "hero_message_heading_container";
		hero_message.appendChild(hero_message_heading_container);
	const hero_message_h1 = document.createElement("h1");
		hero_message_h1.id = component_id + "_" + component_class + "_" + "hero_message_h1";
		hero_message_h1.className = component_class + "_" + "hero_message_h1";
		hero_message_h1.innerHTML = "Nuestras habitaciones";
		hero_message_heading_container.appendChild(hero_message_h1);
	const hero_message_p = document.createElement("p");
		hero_message_p.id = component_id + "_" + component_class + "_" + "hero_message_p";
		hero_message_p.className = component_class + "_" + "hero_message_p";
		hero_message_p.innerHTML = "Descubre los espacios que preparamos para tu estadía";
		hero_message_heading_container.appendChild(hero_message_p);

	const hero_message_buttons_container = document.createElement("div");
	hero_message_buttons_container.id = component_id + "_" + component_class + "_" + "hero_message_buttons_container";
	hero_message_buttons_container.className = component_class + "_" + "hero_message_buttons_container";
	hero_message.appendChild(hero_message_buttons_container);

	const hero_message_buttons_container_button_1 = document.createElement("div");
	hero_message_buttons_container_button_1.id = component_id + "_" + component_class + "_" + "hero_message_buttons_container_button_1";
	hero_message_buttons_container_button_1.classList.add(component_class + "_" + "hero_message_buttons_container_button");
	hero_message_buttons_container_button_1.classList.add(component_class + "_" + "hero_message_buttons_container_button_1");
	hero_message_buttons_container_button_1.innerHTML = "Ver habitaciones";
	hero_message_buttons_container.appendChild(hero_message_buttons_container_button_1);
	hero_message_buttons_container_button_1.addEventListener("pointerup",()=>{
		document.getElementById(button_1_scroll_target_id).scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
	  });
	});

	const hero_message_buttons_container_button_2 = document.createElement("div");
	hero_message_buttons_container_button_2.id = component_id + "_" + component_class + "_" + "hero_message_buttons_container_button_2";
	hero_message_buttons_container_button_2.classList.add(component_class + "_" + "hero_message_buttons_container_button");
	hero_message_buttons_container_button_2.classList.add(component_class + "_" + "hero_message_buttons_container_button_2");
	hero_message_buttons_container_button_2.innerHTML = "Reservar en línea";
	hero_message_buttons_container.appendChild(hero_message_buttons_container_button_2);
	hero_message_buttons_container_button_2.addEventListener("pointerup",()=>{
		window.location.href = root_folder + button_2_href_string;
	});

	return hero_message;
}