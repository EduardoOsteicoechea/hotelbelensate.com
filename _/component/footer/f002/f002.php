<?php
	class f002 {
		public $root_folder;
		public $component_class;
		public $component_id;
		public $component_folder;
		public $component_type;
		public $sesion_array;
		public $current_page;
		public $current_page_public_text;
		
		public $component_class_style;

		public function __construct
		(
			string $root_folder,
			string $id,
			string $current_page,
			array $sesion_array,
		)
		{
			$current_file_name = basename(__FILE__, ".php");
			$current_file_folder = str_replace("\\", "/",dirname(__FILE__));
			$current_file_folder = explode("/",$current_file_folder);
			$current_file_folder = $current_file_folder[count($current_file_folder) - 2];

			$this->root_folder =         $root_folder;
			$this->component_class =     "f001";
			$this->component_id =        $id. '_' . $this->component_class;
			$this->component_folder =    $this->root_folder . '_/component/'.$current_file_folder.'/'.$current_file_name.'/';
			$this->component_type =      $current_file_folder;		
			$this->sesion_array =        $sesion_array;		
			$this->current_page =        $current_page;

			echo '
				<div
				id="'.$this->component_id.'"
				class="'.$this->component_class.'"
				>
					<h2
					id="'.$this->component_id.'_message_title"
					class="'.$this->component_class.'_message_title"
					>Nos alegra verte llegar ...</h2>
	
					<div
					id="'.$this->component_id.'_message_buttons_container"
					class="'.$this->component_class.'_message_buttons_container"
					>
						<a
						id="'.$this->component_id.'_whatsapp_button"
						class="'.$this->component_class.'_whatsapp_button"	
						href="'.$this->root_folder.'contacto"
						target="_blank"
						>
							<img
							id="'.$this->component_id.'_whatsapp_button_image"
							class="'.$this->component_class.'_whatsapp_button_image"			
							src="'.$root_folder.'_/media/image/brand/social_media_icons_whatsapp.webp"
							alt="WhatsApp Icon"
							height="100%"
							>
							Contacto
						</a>
						<a
						id="'.$this->component_id.'_reservation_button"
						class="'.$this->component_class.'_reservation_button" 
						href="'. $root_folder .'reservaciones">Reserva</a>
					</div>
					
					<p
					id="'.$this->component_id.'_copywright_message"
					class="'.$this->component_class.'_copywright_message"
					>Hotelbelensate.com 2024 todos los derechos reservados</p>
					<p
					id="'.$this->component_id.'_no_pets_message"
					class="'.$this->component_class.'_no_pets_message"
					>No ofrecemos alojamiento para mascotas</p>	
					<script>
						document.getElementById("'.$this->component_id.'").style.height = window.screen.height + "px";
					</script>
				</div> 
			';

		}
	}
?>



					