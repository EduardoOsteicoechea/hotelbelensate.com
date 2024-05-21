<?php
	class image_loader_002 {
		public $root_folder;

		public function __construct( 
			$root_folder, 
			$sesion_array,
			$component_id,
			$component_class,
			$component_image_folder_path
		)
		{
			include_once "read_image_folder.php";
			echo '
				<div>
					<script type="module"> 
						import '.$component_id.'_'.$component_class.' from "'.$root_folder.'_/component/image_loader/image_loader_002/class.js";
							new '.$component_id.'_'.$component_class.'
							(
								"'.$root_folder.'", 
								{'.implode($sesion_array).'},
								"'.$component_id.'",
								"'.$component_class.'",	
								'.read_image_folder($component_image_folder_path).'
							);
					</script>
				</div>
			';
		}
	}
?>