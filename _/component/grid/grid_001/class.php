<?php
	class grid_001 {
		public $root_folder;

		public function __construct( 
			$root_folder, 
			$sesion_array,
			$page_name,
			$component_id,
			$component_class,
			$component_image_folder_path,
		)
		{
			$component_particular_folder_name = "grid/grid_001";
			echo '
				<div
				id="'.$component_id.'_'.$component_class.'"
				class="'.$component_class.'"
				>
					<script type="module"> 
						import '.$component_id.'_'.$component_class.' from "'.$root_folder.'_/component/'.$component_particular_folder_name.'/class.js";
						add_component_style_tag(
							"'.$root_folder.'" + "_/component/'.$component_particular_folder_name.'/",
							"component_container"
						);
						new '.$component_id.'_'.$component_class.'
						(
							"'.$root_folder.'", 
							"'.$root_folder.'_/component/'.$component_particular_folder_name.'/", 
							{'.implode($sesion_array).'},
							"'.$page_name.'",
							"'.$component_id.'",
							"'.$component_class.'",
							"'.$component_image_folder_path.'",
						);
					</script>
				</div>
			';
		}
	}
?>