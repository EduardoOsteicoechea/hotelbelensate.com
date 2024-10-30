// called from ../markup/order.php
window.addEventListener("load", function() {
	
	const order_container = document.querySelector(".d001_order");
	const order_item_container = order_container.querySelector(".d001_order_item_container");
	const order_total_container_ammount = order_container.querySelector(".d001_order_total_container_ammount");
	const d001_total_payment_button = document.querySelector(".d001_order_total_payment_button");

	d001_total_payment_button.addEventListener("pointerup",()=>{
		alert("Continuamos trabajando en nuestra sección de pagos. Gracias por su paciencia.");
	})
})
