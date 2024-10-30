// Called from ./generate_description_card_elements.js

import add_room_to_order from "./add_room_to_order.js";

export default function generate_description_card_icons 
(
	root_folder,
	component_name,
	component_item_name,
	component_item_component, 
	component_item_component_item,
	room_assets_icons_container,
	items_object
)
{ 
	for (let i = 0; i < Object.entries(items_object).length; i++) 
	{
		const element_name = Object.entries(items_object)[i][0];
		const element_availabitity = Object.entries(items_object)[i][1][0];
		const element_file_name = Object.entries(items_object)[i][1][1];
		const element_description = Object.entries(items_object)[i][1][2];

		// console.log(element_name);
		// console.log(element_availabitity);
		// console.log(element_file_name);
		// console.log(element_description);
		// console.log("");

		if (element_availabitity)
		{
			let icon_element_container = document.createElement("div");
			icon_element_container.setAttribute("class", 
				component_name + "_" + 
				component_item_name  + "_" +
				component_item_component  + "_" + 
				component_item_component_item + "_" + 
				"icon_container"
			);
			room_assets_icons_container.appendChild(icon_element_container);

			let icon_element = document.createElement("img");
			icon_element.setAttribute("src", root_folder + "_/media/image/brand/" + element_file_name);
			icon_element.setAttribute("class", 
				component_name + "_" + 
				component_item_name  + "_" +
				component_item_component  + "_" + 
				component_item_component_item + "_" + 
				"icon"
			);

			if
			(
				element_name == "secador de cabello"
				|| element_name == "cama King size"
				|| element_name == "cama King size 2"
				|| element_name == "cama Queen size"
				|| element_name == "cama Queen size 2"
				|| element_name == "cama matrimonial"
				|| element_name == "cama matrimonial 2"
				|| element_name == "dos camas matrimoniales"
				|| element_name == "dos camas individuales"
				|| element_name == "jacuzzi"
			)
			{
				icon_element.setAttribute("height","130%");
			}
			else if 
			(
				element_name == "nevera ejecutiva"
				|| element_name == "escritorio"
			)
			{
				icon_element.setAttribute("height","145%");
			}
			else if 
			(
				element_name == "agua caliente"
				|| element_name == "cuarto de sauna"
				|| element_name == "acondicionamiento para capacidades especiales"
			)
			{
				icon_element.setAttribute("height","160%");
			}
			else if 
			(
				element_name == "aire acondicionado"
			)
			{
				icon_element.setAttribute("height","80%");
			}
			else
			{
				icon_element.setAttribute("height","100%");
			};
			
			icon_element_container.addEventListener("pointerenter",()=>
			{
			icon_element_tooltip.style.transition = "height ease 200ms";
			icon_element_tooltip.style.height = "5dvw";
			icon_element_tooltip.style.width = "12dvw";
			icon_element_tooltip.style.padding = ".75dvw 1dvw";
			});
			icon_element_container.addEventListener("pointerleave",()=>
			{
			icon_element_tooltip.style.transition = "all 0ms";
			icon_element_tooltip.style.height = "0dvw";
			icon_element_tooltip.style.width = "0dvw";
			icon_element_tooltip.style.padding = "0";
			});
			icon_element_container.appendChild(icon_element);

			let icon_element_tooltip = document.createElement("span");
			icon_element_tooltip.setAttribute("class", 
			component_name + "_" + 
			component_item_name  + "_" +
			component_item_component  + "_" + 
			component_item_component_item + "_" + 
			"icon_tooltip");
			icon_element_tooltip.innerHTML = element_description;
			icon_element_container.appendChild(icon_element_tooltip);
		};

	};
}