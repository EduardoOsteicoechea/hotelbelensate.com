<?php
	// Called from ../../../reservar/index.php
	class card_001 {
		public $root_folder;
		public $component_class;
		public $component_id;
		public $component_folder;
		public $css_file_name_array;
		public $component_type;
		public $sesion_array;
		public $data;
		
		public function __construct ( string $id, string $root_folder, array $sesion_array, ) {
			include      "data.php";
			$current_file_name = basename(__FILE__, ".php");
			$current_file_folder = str_replace("\\", "/",dirname(__FILE__));
			$current_file_folder = explode("/",$current_file_folder);
			$current_file_folder = $current_file_folder[count($current_file_folder) - 2];

			$this->root_folder =         $root_folder;
			$this->component_class =     "card_001";
			$this->component_id =        $id. '_' . $this->component_class;
			$this->component_folder =    $this->root_folder . '_/component/'.$current_file_folder.'/'.$current_file_name.'/';
			$this->component_type =      $current_file_folder;		
			$this->sesion_array =        $sesion_array;
			$this->data =                $data;	
			echo '
				<div
				id="'.$this->component_id.'"
				class="'.$this->component_class.'"
				>
					<script type="module">
						import '.$this->component_class.' from "'. $this->component_folder . $this->component_class.'.js";
						window.addEventListener("load",()=> {
							const '. $this->component_class .'_instance = new '.$this->component_class.'(
								"'.$this->root_folder.'",
								"'.$this->component_id.'",
								"'.$this->component_class.'",
								"'.$this->component_folder.'",
								"'.$this->component_type.'",
								{'.implode($this->sesion_array).'},
								'.json_encode($this->data).',
							);
						});
					</script>
				</div>
			';
		}
	}
?>