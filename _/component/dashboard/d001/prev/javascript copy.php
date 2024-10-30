<?php
	class javascript
	{
		public $markup;

		public function __construct
		(
			$id,
			$component_name,
			$root_folder,
			$component_folder,
			$session,
			$data,
			$component_id,
			$search_bar_id,
			$options_id,
			$order_id,
			$viewer_360_id,
			$viewer_2d_id,
		)
		{
			$this->markup =  '
				<script type="module">
					import component from "'. $component_folder .'js/class.js";
					const '. $component_id .'_class = new component(
						"'.$id.'",
						"'.$component_name.'",
						"'.$root_folder.'",
						"'.$component_folder.'",
						{'.implode($session).'},
						{'.$data.'},
						"'.$component_id.'",
						"'.$search_bar_id.'",
						"'.$options_id.'",
						"'.$order_id.'",
						"'.$viewer_360_id.'",
						"'.$viewer_2d_id.'",
					);
				</script>
			';
		}

		public function get_markup_string() 
		{
			return $this->markup;
		}
	}	
?>