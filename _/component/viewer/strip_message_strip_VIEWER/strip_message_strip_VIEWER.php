<?php
function strip_message_strip_VIEWER
(
	string  $root_folder, 
	string  $info_title, 
	string  $info_paragraph, 
	array   $left_image_name_array, 
	string  $center_image_name, 
	array   $right_image_name_array, 
	?string $first_button_anchor_text, 
	?string $first_button_anchor_direction, 
	string $slider_id, 
)
{
	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
	// Create sliding control points
	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
	
	$sliding_control_points = '
		<div 
		id=    "'. $slider_id .'_sliding_control_points_container" 
		class= "sliding_control_points_container"
		>
	';
	for ($i=0; $i < count($left_image_name_array); $i++) 
	{ 
		$sliding_control_points .= '
			<div 
			class="sliding_control_point"
			>
			</div>
		';
	};
	$sliding_control_points .= '
		</div>
	';

	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
	// Create individual containers
	/////////////////////////////////////////////////
	/////////////////////////////////////////////////


	$inner_left_image_info_image_slider_container = '';
	for ($i=0; $i < count($left_image_name_array); $i++)
	{ 
		
		$inner_left_image_info_image_slider_container .= '
			<div
				class="inner_left_image_info_image_slider_single_container"
			>
				<img 
				src="'.$root_folder.'_/media/image/'.$left_image_name_array[$i].'" 
				alt="Imagen de habitación '. ($i + 1) .'" 
				width="100%"
				>
			</div>
		';
	};

	$inner_right_image_info_image_slider_container = '';
	for ($i=0; $i < count($right_image_name_array); $i++) 
	{ 
		
		$inner_right_image_info_image_slider_container .= '
			<div
			class="inner_right_image_info_image_slider_single_container"
			>
				<img 
				src="'.$root_folder.'_/media/image/'. $right_image_name_array[$i] .'" 
				alt="Imagen de habitación '. ($i + 1) .'" 
				width="100%"
				>
			</div>
		';
	};

	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
	// Return-Create component global container and 
	// insert it's internal content
	/////////////////////////////////////////////////
	/////////////////////////////////////////////////


	return '
		<div
		id="'. $slider_id .'_image_info_image_slider_container"
		class="image_info_image_slider_container"
		>

			<div
			id="'. $slider_id .'_inner_left_image_info_image_slider_container"
			class="inner_left_image_info_image_slider_container"
			>
				'. $inner_left_image_info_image_slider_container .'
			</div>

			<div
			id="'. $slider_id .'_inner_center_image_info_image_slider_container"
			class="inner_center_image_info_image_slider_container"
			>
				<img 
				src="'.$root_folder.'_/media/image/'. $center_image_name .'" 
				alt="Imagen de recorrido" 
				height="100%"
				>
				<div class="background_image_overlay">
				</div>
				<h3>
					'.$info_title.'
				</h3>
				<p>
					'.$info_paragraph.'
				</p>
				<a href="'. $root_folder . $first_button_anchor_direction .'">
					'. $first_button_anchor_text .'
				</a>
				'. $sliding_control_points .'
			</div>

			<div
			id="'. $slider_id .'_inner_right_image_info_image_slider_container"
			class="inner_right_image_info_image_slider_container"
			>
				'. $inner_right_image_info_image_slider_container .'
			</div>

			'.add_style_tag($slider_id ."_image_info_image_slider_container", $root_folder."_/component/viewer/strip_message_strip_VIEWER/").'
			
		</div>
	';
};
?>