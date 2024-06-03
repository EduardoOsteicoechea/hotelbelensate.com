<?php
	class heading_001 {
		public $root_folder;

		public function __construct( 
			$root_folder, 
			$sesion_array,
			$page_name,
			$component_id,
			$component_class,
			$h2_string,
			$p_string,
		)
		{
			echo '
				<div
				id="'.$component_id.'_'.$component_class.'"
				class="'.$component_class.'"
				>
					<script type="module"> 
						import '.$component_id.'_'.$component_class.' from "'.$root_folder.'_/component/heading/heading_001/class.js";
							new '.$component_id.'_'.$component_class.'
							(
								"'.$root_folder.'", 
								"'.$root_folder.'_/component/heading/heading_001/'.'", 
								{'.implode($sesion_array).'},
								"'.$page_name.'",
								"'.$component_id.'",
								"'.$component_class.'",
								"'.$h2_string.'",
								"'.$p_string.'",
							);
					</script>
				</div>
			';
		}
	}
?>