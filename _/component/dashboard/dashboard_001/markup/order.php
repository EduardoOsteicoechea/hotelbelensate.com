<?php
	class order
	{
		public $markup;

		public function __construct
		(
			$order_id,
			$order_class,
			$root_folder
		)
		{
			$this->markup =  '
				<div
				id="'.$order_id.'"
				class="'.$order_class.'"
				>
					<div
					id="'.$order_id.'_container_background"
					class="'.$order_class.'_container_background"
					>
						<img src="'.$root_folder.'_/media/image/room/suite_nupcial_1_3840x2160.webp" alt="order_container_background" height="100%">
						<div></div>
					</div>

					<h3
					id="'.$order_id.'_container_main_title"
					class="'.$order_class.'_container_main_title"
					>
						Ha añadido estos elementos a Su reservación
					</h3>

					<div
					id="'.$order_id.'_item_container"
					class="'.$order_class.'_item_container"
					>
					</div>

					<div
					id="'.$order_id.'_total_container"
					class="'.$order_class.'_total_container"
					>
						<p 
						id="'.$order_id.'_total_container_ammount"
						class="'.$order_class.'_total_container_ammount"
						>0</p>
						<p 
						id="'.$order_id.'_total_container_currency"
						class="'.$order_class.'_total_container_currency"
						> USD</p>
						<button 
						id="'.$order_id.'_total_payment_button"
						class="'.$order_class.'_total_payment_button disabled_button"
						> Reservar con pago</button>
					</div>
					<span id="order_final_data" style="display:none;"></span>
					<script src="'.$root_folder.'/_/component/dashboard/_/js/process_order.js"></script>
				</div>
			';
		}

		public function get_markup_string() 
		{
			return $this->markup;
		}
	}	
?>