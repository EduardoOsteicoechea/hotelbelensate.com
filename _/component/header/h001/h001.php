<?php
	class h001{
		public $root_folder;
		public $component_class;
		public $component_id;
		public $component_folder;
		public $component_type;
		public $sesion_array;
		public $current_page;
		public $current_page_public_text;

		public function __construct
		(
			string $root_folder,
			string $id,
			string $current_page,
			string $current_page_public_text,
			array $sesion_array,
		)
		{
			$current_file_name = basename(__FILE__, ".php");
			$current_file_folder = str_replace("\\", "/",dirname(__FILE__));
			$current_file_folder = explode("/",$current_file_folder);
			$current_file_folder = $current_file_folder[count($current_file_folder) - 2];

			$this->component_class =     $current_file_name;
			$this->component_id =        $id. '_' . $this->component_class;
			$this->root_folder =         $root_folder;
			$this->component_folder =    $this->root_folder . '_/component/'.$current_file_folder.'/'.$current_file_name.'/';
			$this->component_type =      $current_file_folder;		
			$this->sesion_array =        $sesion_array;		
			$this->current_page =        $current_page;		
			$this->current_page_public_text =        $current_page_public_text;		
			$class_name =                $this->component_class;

			echo '
				<div
				id="'.$this->component_id.'"
				class="'.$this->component_class.'"
				>

					<script type="module">
						import '.$class_name.' from "'. $this->component_folder . $class_name.'.js";
						window.addEventListener("load",()=>{
							const '. $class_name .'_instance = new '.$class_name.'(
								"'.$this->root_folder.'",
								"'.$this->component_id.'",
								"'.$this->component_class.'",
								"'.$this->component_folder.'",
								"'.$this->component_type.'",
								{'.implode($this->sesion_array).'},
								"'.$this->current_page.'",
								"'.$this->current_page_public_text.'",
							);
						});
					</script>
				</div>
			';
		}
	}
?>