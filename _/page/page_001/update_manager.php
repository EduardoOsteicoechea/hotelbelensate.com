<?php
	// called from "./class.php"
	class update_manager
	{
		public array $component_update_state_array = [];
		public string $root_folder;
		public string $page_name;

		public function __construct
		(
			string $root_folder,
			string $page_name,
			array $component_array,
		)
		{
			$this->root_folder = $root_folder;
			$this->page_name = $page_name;

			for ($i=0; $i < count($component_array); $i++) 
			{ 
				$this->component_update_state_array[] = ["component_name" => $component_array[$i], "must_update" => 0];
			};
		}

		public function generate_update_state_component()
		{
			$html = '
			<script type="module">
				
				import generate_page_update_manager from "'.$this->root_folder.'_/page/page_001/generate_page_update_manager.js";
				import update_update_manager from "'.$this->root_folder.'_/page/page_001/update_update_manager.js";

				new generate_page_update_manager('.json_encode($this->component_update_state_array).');

				update_update_manager(
					'.json_encode($this->component_update_state_array).',
					"'.$this->page_name.'",
					"1234",
					"'.$this->root_folder.'_/page/page_001/update_manager_api.php",
				);

			</script>';
			echo $html;
		}
	}
?>