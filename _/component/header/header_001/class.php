<?php
	class header_001
	{
		public function __construct(
			$root_folder, 
			$sesion_array,
			$page_name,
			$component_class,
			$component_image_folder_path,
			$highligthed_button,
		){
			echo '
				<header
				id="'.$page_name.'_'.$component_class.'"
				class="'.$component_class.'"
				>
					<script type="module"> 
						import '.$page_name.'_'.$component_class.' from "'.$root_folder.'_/component/header/header_001/class.js";
							new '.$page_name.'_'.$component_class.'
							(
								"'.$root_folder.'", 
								"'.$root_folder.'_/component/header/header_001/'.'", 
								{'.implode($sesion_array).'},
								"'.$page_name.'",
								"'.$component_class.'",
								"'.$component_image_folder_path.'",
								"'.$highligthed_button.'",
							);
					</script>
				</header>
			';
		}
	}
?>