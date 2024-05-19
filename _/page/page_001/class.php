<?php
	// called from "./global.php"
	class page_001
	{
		public string $root_folder;
		public array $sesion_array;
		public string $page_name;
		public array $component_array;
		public $update_manager;

		public function __construct
		(
			string $root_folder,
			array $sesion_array,
			string $page_name,
			array $component_array,
		)
		{
			include_once "update_manager.php";
			$this->root_folder = $root_folder;
			$this->sesion_array = $sesion_array;
			$this->page_name = $page_name;
			$this->component_array = $component_array;
			$this->update_manager = new update_manager($this->root_folder , $this->page_name, $this->component_array);

			$html = '';
			for ($i=0; $i < count($this->component_array); $i++) 
			{ 
				$markup = require_once $root_folder . "_/component/" . $this->component_array[$i] . "/" . "class.php";
				$html .= $markup(
					$this->root_folder,
					$this->sesion_array,
					$this->page_name,
					$this->component_array[$i],
				);
			}

			$this->update_manager->generate_update_state_component();

			echo $html;
		}
	}
?>