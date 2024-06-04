<?php
	class hero_001 {
		public $root_folder;

		public function __construct( 
			$root_folder, 
			$sesion_array,
			$page_name,
			$component_id,
			$component_class,
			$component_image_folder_path,
			$message_h1,
			$message_p,
			$button_1_scroll_target_id,
			$button_2_href_string,
		)
		{
			echo '
				<div
				id="'.$component_id.'_'.$component_class.'"
				class="'.$component_class.'"
				>
					<script type="module"> 
						import '.$component_id.'_'.$component_class.' from "'.$root_folder.'_/component/hero/hero_001/class.js";
							add_component_style_tag(
								"'.$root_folder.'" + "_/component/hero/hero_001/",
								"component_container"
							);
							new '.$component_id.'_'.$component_class.'
							(
								"'.$root_folder.'", 
								"'.$root_folder.'_/component/hero/hero_001/'.'", 
								{'.implode($sesion_array).'},
								"'.$page_name.'",
								"'.$component_id.'",
								"'.$component_class.'",
								"'.$component_image_folder_path.'",
								"'.$message_h1.'",
								"'.$message_p.'",
								"'.$button_1_scroll_target_id.'",
								"'.$button_2_href_string.'",
							);
					</script>
				</div>
			';
		}
	}
?>