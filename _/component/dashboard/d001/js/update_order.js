// Called from ./add_room_to_order.js

export default function update_order
(
	order_items_container,
	order_total_amount_container
)
{
	let ammount_element = order_total_amount_container.children[0];
	let total_ammount = 0;

	Array.from(order_items_container.children).forEach(item => {
		let ammount = parseInt(item.children[1].innerHTML);
		total_ammount += ammount;
	});

	ammount_element.innerHTML = total_ammount;
};