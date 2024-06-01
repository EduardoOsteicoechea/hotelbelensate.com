<?php
	class carrousel_001 {
		public $root_folder;

		public function __construct( 
			$root_folder, 
			$sesion_array,
			$page_name,
			$component_id,
			$component_class,
			$component_image_folder_path
		)
		{
			echo '
				<div
				id="'.$component_id.'_'.$component_class.'"
				class="'.$component_class.'"
				>
					<script type="module"> 
						import '.$component_id.'_'.$component_class.' from "'.$root_folder.'_/component/carrousel/carrousel_001/class.js";
							new '.$component_id.'_'.$component_class.'
							(
								"'.$root_folder.'", 
								"'.$root_folder.'_/component/carrousel/carrousel_001/'.'", 
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