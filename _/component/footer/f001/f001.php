<?php
	class f001 {
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
					<div
					id="'.$this->component_id.'_message_container"
					class="'.$this->component_class.'_message_container"
					>
						<h2>Nos alegra verte llegar ...</h2>
		
						<div
						id="'.$this->component_id.'_message_buttons_container"
						class="'.$this->component_class.'_message_buttons_container"
						>
							<a
							href="https://wa.me/584123033034?text=Saludos%21"
							target="_blank"
							>
								<img
								src="'.$root_folder.'_/media/image/brand/social_media_icons_whatsapp.webp"
								alt="WhatsApp Icon"
								height="100%"
								>
								Contacto
							</a>
							<a href="'. $root_folder .'reservas">Reserva</a>
						</div>
						
						<p>Hotelbelensate.com<sup>&copy;</sup> 2024 todos los derechos reservados</p>
						<p>No ofrecemos alojamiento para mascotas</p>
					</div>		
				</div>

					<script>
						const '.$this->component_id.' = document.getElementById("'.$this->component_id.'");

						const '.$this->component_id.'_message_container = document.getElementById("'.$this->component_id.'_message_container");
						const '.$this->component_id.'_message_buttons_container = document.getElementById("'.$this->component_id.'_message_buttons_container");
						
						if(window.innerWidth > 550) {
							'.$this->component_id.'.style.cssText = `
							display:flex;
							flex:direction:row;
							align-items:center;
							height:${(screen_height * .125) + "px"};
							padding:${(screen_height * .0) + "px"} ${(screen_height * .08) + "px"};
							z-index:500;

							`;
							'.$this->component_id.'_message_container.style.cssText = `
							height:100%;
							padding:${(screen_height * .04) + "px"} ${(screen_height * .00) + "px"};
							`;
							'.$this->component_id.'_message_buttons_container.style.cssText = `
							
							`;
						} else {
							'.$this->component_id.'.style.cssText = `
							display:flex;
							flex:direction:row;
							align-items:center;
							height:${(screen_height * .125) + "px"};
							padding:${(screen_height * .0) + "px"} ${(screen_height * .08) + "px"};
							z-index:500;

							`;
							'.$this->component_id.'_message_container.style.cssText = `
							height:100%;
							padding:${(screen_height * .04) + "px"} ${(screen_height * .00) + "px"};
							`;
							'.$this->component_id.'_message_buttons_container.style.cssText = `
							
							`;
						};
						
					
					</script>
				</div>
			';

		}
	}
?>



					