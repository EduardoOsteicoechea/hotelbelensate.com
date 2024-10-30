<?php
function add_style_tag($component_name, $component_folder, $aa = "")
{
	return '
		<script>
			const '.$component_name.'_style_tag = document.createElement("link");
			'.$component_name.'_style_tag.setAttribute("rel","stylesheet");
			'.$component_name.'_style_tag.setAttribute("href","'.$component_folder.'/'.$component_name.'.css");
			document.head.appendChild('.$component_name.'_style_tag);	
		</script>
	';
};
?>