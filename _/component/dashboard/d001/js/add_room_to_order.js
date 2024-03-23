// Called from ./generate_description_card_elements.js

import close_2d_viewer from "./close_2d_viewer.js";
import update_order from "./update_order.js";

export default function add_room_to_order
(
	event,
	order_container,
	viewer_2d,
	parent_card,
	component_name
)
{
	event.stopPropagation();

	
	const order_items_container = document.getElementsByClassName(component_name + "_" + "order_item_container")[0];
	const order_total_amount_container = document.getElementsByClassName(component_name + "_" + "order_total_container")[0];


	if (viewer_2d.classList.contains("visible")) 
	{
		event.stopPropagation();
		const carrousel = document.getElementById(component_name + "_" + "viewer_2d" + "_" + "carrousel");
		const image_strip = carrousel.children[1];
		const dot_controls_container = carrousel.children[2];
		const carrousel_overlay = carrousel.children[0];

		close_2d_viewer 
		(
			viewer_2d,
			image_strip,
			dot_controls_container,
			carrousel_overlay,
			"fresh start",
			parent_card
		);
	};

	let room_name = event.target.parentNode.children[0].children[0].innerHTML;
	let room_price = event.target.parentNode.children[3].children[0].innerHTML;

	const item_container = document.createElement("div");

	item_container.classList.add(component_name + "_" + "order_item_container" + "_" + "item_container");
	const item_title = document.createElement("p");
	item_title.innerHTML = (order_items_container.children.length + 1) + ". " + room_name;

	const item_cost = document.createElement("p");
	item_cost.classList.add(component_name + "_" + "order_item_container" + "_" + "item_container" + "_" + "item_cost");
	item_cost.innerHTML = room_price + " USD";

	const item_remove_button = document.createElement("button");
	item_remove_button.innerHTML = "remover";
	item_remove_button.addEventListener("pointerup",() => {
		item_container.remove();
		update_order(
			order_items_container,
			order_total_amount_container
		);
	});

	item_container.appendChild(item_title);
	item_container.appendChild(item_cost);
	item_container.appendChild(item_remove_button);
	order_items_container.appendChild(item_container);

	update_order(
		order_items_container,
		order_total_amount_container
	);
};