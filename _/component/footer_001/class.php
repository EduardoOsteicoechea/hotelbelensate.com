<?php
	$function = function
	(
		string $root_folder,
		array $sesion_array,
		string $page_name,
		string $component_name,
	)
	{
		echo '
		<script type="module">
			import '.$component_name.' from "'.$root_folder.'_/component/'.$component_name.'/class.js";
			new '.$component_name.'(
				"'.$root_folder.'",
				{'.implode($sesion_array).'},
				"'.$page_name.'",
				"'.$component_name.'",
			);
		</script>
		';
	};

	return $function;
?>