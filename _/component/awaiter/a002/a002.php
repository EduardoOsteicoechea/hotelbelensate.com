<?php
	class a002 {
		public $root_folder;
		public $component_class;
		public $component_id;
		public $component_folder;
		public $component_type;
		public $sesion_array;
		public $awaiter_message;
		
		public $component_class_style;

		public function __construct
		(
			string $id,
			string $root_folder,
			array $sesion_array,
			string $awaiter_message,
		)
		{
			$current_file_name = basename(__FILE__, ".php");
			$current_file_folder = str_replace("\\", "/",dirname(__FILE__));
			$current_file_folder = explode("/",$current_file_folder);
			$current_file_folder = $current_file_folder[count($current_file_folder) - 2];

			$this->root_folder =         $root_folder;
			$this->component_class =     "a002";
			$this->component_id =        $id. '_' . $this->component_class;
			$this->component_folder =    $this->root_folder . '_/component/'.$current_file_folder.'/'.$current_file_name.'/';
			$this->component_type =      $current_file_folder;		
			$this->sesion_array =        $sesion_array;		
			$this->awaiter_message =        $awaiter_message;

			echo '
			<div 
			id="'.$this->component_id.'"
			class="'.$this->component_class.'"
			>
				<div 
				id="'.$this->component_id.'_background_message" 
				class="'.$this->component_class.'_background_message"
				>
					<h2 
					id="'.$this->component_id.'_background_message_h2" 
					class="'.$this->component_class.'_background_message_h2"
					>
						Hotel Belensate
					</h2>	
					<div 
					id="'.$this->component_id.'_background_message_contenedor_de_barra_de_carga" 
					class="'.$this->component_class.'_background_message_contenedor_de_barra_de_carga"
					>
						<div 
						id="'.$this->component_id.'_background_message_barra_de_carga" 
						class="'.$this->component_class.'_background_message_barra_de_carga"
						></div>
					</div>
					<h1 
					id="'.$this->component_id.'_background_message_h1" 
					class="'.$this->component_class.'_background_message_h1"
					>
						'.$this->awaiter_message.'
					</h1>	
				</div>
				

				<script>
					const '.$this->component_id.' = document.getElementById("'.$this->component_id.'");

					setTimeout(()=>{
						'.$this->component_id.'.remove();
					},4000);
				</script>
			</div>
			';

		}
	}
?>



					