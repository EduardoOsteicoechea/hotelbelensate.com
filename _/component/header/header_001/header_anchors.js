// called from "./class.js";

import generate_link_nesting from "./link_nesting.js";

export default function (
	root_folder, 
	component_folder,
	sesion_array,
	page_name,
	component_class,
	component_image_folder_path,
	highligthed_button,
	link_structure_object, 
	header_navigation_container
) {
	const level_1_anchors = Object.entries(link_structure_object);

	for (let index = 0; index < level_1_anchors.length; index++) 
	{
		const current_anchor_group_array = level_1_anchors[index];
		const current_anchor_group_name_string = current_anchor_group_array[0];
		const current_anchor_group_object = current_anchor_group_array[1];
		
		const current_element_id_string = current_anchor_group_object["id_string"];
		const current_element_string_to_print = current_anchor_group_object["string_to_print"];
		const current_element_href_string = current_anchor_group_object["href_string"];
		const current_element_sub_routes_object = current_anchor_group_object["sub_routes_object"];
		const current_element_is_visible_boolean = current_anchor_group_object["is_visible_boolean"];
		
		// console.log("START: " + current_anchor_group_name_string);
		// console.log(current_anchor_group_object);
	
		if(current_element_is_visible_boolean && !current_element_sub_routes_object)
		{
			const header_anchor = document.createElement("a");
			header_anchor.id = page_name + "_" + component_class + "_" + current_element_id_string + "_" + "header_anchor";
			header_anchor.classList.add(component_class + "_" + "header_anchor");
			if(highligthed_button == current_element_id_string){
				header_anchor.classList.add("current_page");
			};
			header_anchor.setAttribute("href",current_element_href_string);
			header_anchor.innerHTML = current_element_string_to_print;
	
			header_navigation_container.appendChild(header_anchor);	
		}
		else if(current_element_is_visible_boolean && current_element_sub_routes_object)
		{
			const header_anchor = document.createElement("div");
			header_anchor.id = page_name + "_" + component_class + "_" + current_element_id_string + "_" + "header_anchor";
			header_anchor.classList.add(component_class + "_" + "header_anchor");
			if(highligthed_button == current_element_id_string){
				header_anchor.classList.add("current_page");
			};
			header_anchor.setAttribute("href",current_element_href_string);
			header_anchor.innerHTML = current_element_string_to_print;
			header_navigation_container.appendChild(header_anchor);	
	
			const sub_container_arrow = document.createElement("div");
			sub_container_arrow.id = page_name + "_" + component_class + "_" + "sub_container_arrow";
			sub_container_arrow.classList.add(component_class + "_" + "sub_container_arrow");
			header_anchor.appendChild(sub_container_arrow);
			sub_container_arrow.style.transform = "rotate(0deg)";
			
			const sub_container_arrow_bar_1 = document.createElement("div");
			sub_container_arrow_bar_1.id = page_name + "_" + component_class + "_" + "sub_container_arrow_bar_1";
			sub_container_arrow_bar_1.classList.add(component_class + "_" + "sub_container_arrow_bar_1");
			sub_container_arrow.appendChild(sub_container_arrow_bar_1);
			
			const sub_container_arrow_bar_2 = document.createElement("div");
			sub_container_arrow_bar_2.id = page_name + "_" + component_class + "_" + "sub_container_arrow_bar_2";
			sub_container_arrow_bar_2.classList.add(component_class + "_" + "sub_container_arrow_bar_2");
			sub_container_arrow.appendChild(sub_container_arrow_bar_2);

			const header_anchor_child_container = document.createElement("div");
			header_anchor_child_container.id = page_name + "_" + component_class + "_" + current_element_id_string + "_" + current_element_string_to_print + "_" + "header_anchor_child_container";
			header_anchor_child_container.classList.add(component_class + "_" + "header_anchor_child_container");
			header_anchor_child_container.style.height = "0px";

			generate_link_nesting(
				header_anchor_child_container,
				current_element_sub_routes_object, 
				1,
			);

			header_anchor.appendChild(header_anchor_child_container);
			header_anchor.addEventListener("pointerup", ()=>{
				let sub_anchor_container = header_anchor.querySelector("." + component_class + "_" + "header_anchor_child_container");
				if(sub_anchor_container.style.height != "fit-content"){
					sub_anchor_container.style.height = "fit-content";
					sub_anchor_container.style.padding = "1.75dvw 1dvw 1.75dvw 1dvw";
					sub_container_arrow.style.transform = "rotate(180deg)";
					
				}else{
					sub_anchor_container.style.height = "0px";
					sub_anchor_container.style.padding = "0dvw 1dvw";
					sub_container_arrow.style.transform = "rotate(0deg)";
				};
			})
		};

		// console.log("END: " + current_anchor_group_name_string);
		// console.log("");
	};
}