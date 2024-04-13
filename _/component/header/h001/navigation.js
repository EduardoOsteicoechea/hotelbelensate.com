import navigation_styles from "./navigation_styles.js";
import menu_button from "./menu_button.js";

export default function navigation(
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	session_array,
	current_page,
	current_page_public_text,
	outer_container,
){
	console.log();

	const navigation_container = document.createElement("div");
	navigation_styles(navigation_container);
	navigation_container.id = component_id + "_" + "navigation_container";
	navigation_container.classList.add(component_class + "_" + "navigation_container");
	
	const navigation_anchors_data = [
		["reservas","Reservas"],
		["restaurants","Restaurants"],
		["galeria","galería"],
		["contacto","Contacto"],
	];

	let navigation_elements_styles = `
		font-weight:900;
		text-decoration:none;
		color:${cb};
	`;

	if (window.innerWidth > 822) {	
		navigation_elements_styles += `
			font-size:.7dvw;
		`;
	} else if (window.innerWidth > 550 && window.innerWidth < 822 ) {
		navigation_elements_styles += `
			font-size:.7dvw;
		`;
	} else {	
		navigation_elements_styles += `
			font-size:3dvw;
		`;
	};

	for (let i = 0; i < navigation_anchors_data.length; i++) {
		const anchor_data = navigation_anchors_data[i];
		const anchor = document.createElement("a");
		anchor.id = component_id + "_" + "navigation_anchor" + "_" + anchor_data[0];
		anchor.classList.add(component_class + "_" + "navigation_anchor");
		anchor.setAttribute("href",root_folder + anchor_data[0]);
		anchor.innerHTML = anchor_data[1];
		anchor.style.cssText = navigation_elements_styles;
		if (current_page === anchor_data[0]) anchor.style.color = cg2;
		navigation_container.appendChild(anchor);
	}

	if (window.innerWidth < 550) document.body.appendChild(navigation_container); 
	else outer_container.appendChild(navigation_container);

	menu_button(
		root_folder,
		component_id,
		component_class,
		component_folder,
		component_type,
		session_array,
		current_page,
		current_page_public_text,
		outer_container,
		navigation_container,
	);
}