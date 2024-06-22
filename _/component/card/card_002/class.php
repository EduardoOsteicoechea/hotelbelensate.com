<?php
	class card_002 {
		public $root_folder;

		public function __construct( 
			$root_folder, 
			$sesion_array,
			$page_name,
			$component_id,
			$component_image_folder_path,
		)
		{
			$component_class = "card_002";
			$component_particular_folder_name = "card/" . $component_class;
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