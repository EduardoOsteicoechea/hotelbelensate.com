<?php
	function strip_HEADING
	(
		string $root_folder, 
		string $id, 
		string $h2, 
	) 
	{
		return '
			<div
			id="'.$id.'_strip_HEADING"
			class="strip_HEADING"
			>
				<h2>'.$h2.'</h2>
				'.add_style_tag($id."_strip_HEADING", $root_folder."_/component/heading/strip_HEADING/").'
			</div>
		';
	};
?>