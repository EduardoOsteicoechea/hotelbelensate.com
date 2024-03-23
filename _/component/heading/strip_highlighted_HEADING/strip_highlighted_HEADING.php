<?php
	function strip_highlighted_HEADING
	(
		$root_folder,
		$id, 
		$message, 
		$emphasis_text, 
	) 
    {
		$emphasis_text_length = strlen($emphasis_text);
		$emphasis_text_start_position = strpos($message,$emphasis_text);
		$prepared_emphasis_text = '<b>'. $emphasis_text .'</b>';
		$prepared_message = substr_replace($message, $prepared_emphasis_text, $emphasis_text_start_position, $emphasis_text_length);

        return '
			<div 
				id = "'.$id.'_strip_highlighted_HEADING"
				class = "strip_highlighted_HEADING"
			>
				<h2>'. $prepared_message .'</h2>

				'.add_style_tag($id."_h1_p_a_hero", $root_folder."_/component/heading/strip_highlighted_HEADING/").'

			</div>
        ';
    };
?>