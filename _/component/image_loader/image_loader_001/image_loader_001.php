<?php
	// Called from ../../../reservar/index.php
	class image_loader_001 {
		public $root_folder;
		public $component_class;
		public $component_id;
		public $component_folder;
		public $sesion_array;
		public $data;
		
		public function __construct ( string $id, string $root_folder, array $sesion_array, ) {
			$current_file_name = basename(__FILE__, ".php");
			$current_file_folder = str_replace("\\", "/",dirname(__FILE__));
			$current_file_folder = explode("/",$current_file_folder);
			$current_file_folder = $current_file_folder[count($current_file_folder) - 2];

			$this->root_folder =         $root_folder;
			$this->component_class =     $current_file_name;
			$this->component_id =        $id. '_' . $this->component_class;
			$this->component_folder =    $this->root_folder . '_/component/'.$current_file_folder.'/'.$current_file_name.'/';	
			$this->sesion_array =        $sesion_array;

			echo '
				<div
				id="'.$this->component_id.'"
				class="'.$this->component_class.'"
				>
					<script type="module">
						import '.$this->component_class.' from "'. $this->component_folder . $this->component_class.'.js";

						new '.$this->component_class.'(
								"'.$this->root_folder.'",
								"'.$this->component_id.'",
								"'.$this->component_class.'",
								"'.$this->component_folder.'",
								{'.implode($this->sesion_array).'},
							);
					</script>
				</div>
			';
		}
	}
?>