import menu_button_styles from "./menu_button_styles.js";

export default function menu_button(
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
){
	const menu_button_container = document.createElement("div");
	menu_button_styles(menu_button_container);
	menu_button_container.id = component_id + "_" + "menu_button_container";
	menu_button_container.classList.add(component_class + "_" + "menu_button_container");

	const menu_button_container_strip_styles = `
		width:100%;
		height:.35dvw;
		background: ${cb};
		transition: all ease 1000ms;
	`;

	const menu_button_container_strip_1 = document.createElement("div");
	menu_button_container_strip_1.id = component_id + "_" + "menu_button_container_strip_1";
	menu_button_container_strip_1.classList.add(component_class + "_" + "menu_button_container_strip");
	menu_button_container_strip_1.style.cssText = menu_button_container_strip_styles;
	menu_button_container.appendChild(menu_button_container_strip_1);

	const menu_button_container_strip_2 = document.createElement("div");
	menu_button_container_strip_2.id = component_id + "_" + "menu_button_container_strip_2";
	menu_button_container_strip_2.classList.add(component_class + "_" + "menu_button_container_strip");
	menu_button_container_strip_2.style.cssText = menu_button_container_strip_styles;
	menu_button_container.appendChild(menu_button_container_strip_2);

	const menu_button_container_strip_3 = document.createElement("div");
	menu_button_container_strip_3.id = component_id + "_" + "menu_button_container_strip_3";
	menu_button_container_strip_3.classList.add(component_class + "_" + "menu_button_container_strip");
	menu_button_container_strip_3.style.cssText = menu_button_container_strip_styles;
	menu_button_container.appendChild(menu_button_container_strip_3);

	outer_container.appendChild(menu_button_container);
	
	menu_button_container.addEventListener("pointerup",()=>{
		if (parseInt(navigation_container.style.left) < 0) {
			navigation_container.style.left = 0 + "px";
			navigation_container.style.boxShadow = "4dvw 0 4dvw rgba(0,0,0,.1)";
			menu_button_container.style.opacity = "0";
			menu_button_container_strip_1.style.width = "0px";
			menu_button_container_strip_2.style.width = "0px";
			menu_button_container_strip_3.style.width = "0px";
			setTimeout(() => {
				menu_button_container.style.opacity = "1";
				menu_button_container.innerHTML = "x";	
				menu_button_container.style.background = exit_color_1;
			}, 1000);
		} else {
			navigation_container.style.left = -(window.innerWidth * .82) + "px";
			navigation_container.style.boxShadow = "0dvw 0 0dvw rgba(0,0,0,.0)";
			menu_button_container.style.opacity = "0";
			setTimeout(() => {
				menu_button_container.style.opacity = "1";
				menu_button_container.innerHTML = "";
				menu_button_container.style.background = cw;
				menu_button_container.appendChild(menu_button_container_strip_1);
				menu_button_container.appendChild(menu_button_container_strip_2);
				menu_button_container.appendChild(menu_button_container_strip_3);
				setTimeout(() => {
					menu_button_container_strip_1.style.width = "100%";
					menu_button_container_strip_2.style.width = "100%";
					menu_button_container_strip_3.style.width = "100%";
				}, 10);
			}, 750);
		};
	});
}