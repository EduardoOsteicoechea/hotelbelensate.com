// Called from ./display_option_date_picker.js
// Called from ./register_selected_dates_in_order_container.js

export default function update_order
(
	component_name,
	order_items_container
)
{
	const order_item_container = order_items_container.querySelector(".d001_order_item_container");
	const order_total_amount_container =  order_items_container.querySelector(".d001_order_total_container").children[0];
	const order_total_payment_button =  order_items_container.querySelector(".d001_order_total_payment_button");

	let total_ammount = 0;

	for (let i = 0; i < order_item_container.children.length; i++) {
		total_ammount += parseFloat(order_item_container.children[i].getAttribute("data-item-total-price"));
	}
		
	order_total_amount_container.innerHTML = total_ammount;

	if (total_ammount > 0) {
		order_total_payment_button.disabled = false;
		order_total_payment_button.classList.remove("disabled_button");
		order_total_payment_button.classList.add("active_button");
	}
	else { 
		order_total_payment_button.disabled = true;
		order_total_payment_button.classList.remove("active_button");
		order_total_payment_button.classList.add("disabled_button");
	};
};