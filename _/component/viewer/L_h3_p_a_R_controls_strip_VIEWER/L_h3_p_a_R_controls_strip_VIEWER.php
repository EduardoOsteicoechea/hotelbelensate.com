<?php
function L_h3_p_a_R_controls_strip_VIEWER
(
	string $root_folder, 
	string $id,
	array  $info_title_array, 
	array  $info_paragraph_array, 
	array $image_name_array, 
	?string $first_button_anchor_text, 
	?string $first_button_anchor_direction, 
	?string $second_button_anchor_text, 
	?string $second_button_anchor_direction, 
	string $slider_id, 
)
{
	$sliding_control_points = '<div id="'.$slider_id.'_sliding_control_points_container" class="sliding_control_points_container">';

	for ($i=0; $i < count($info_title_array); $i++) 
	{ 
		$sliding_control_points .= '
				<div 
					id="'.$slider_id.'_sliding_control_point_'.$i.'" 
					class="'.$slider_id.'_sliding_control_point_'.$i.' sliding_control_point"
					onclick="slide_info_image_slider(event)"
				></div>
		';
	};
	$sliding_control_points .= '</div>';
	
	$info_containers = '';
	$image_containers = '';

	for ($i=0; $i < count($info_title_array); $i++) 
	{ 
		$info_containers .= '
			<div
				class="info_image_slider_information_container_single_information_container"
			>
				<img src="'.$root_folder.'_/media/image/'.$image_name_array[$i].'" alt="Imagen de habitación '.($i + 1).'" height="100%">
				<div class="background_image_overlay"></div>
				<h3>'.$info_title_array[$i].'</h3>
				<p>'.$info_paragraph_array[$i].'</p>
				<a href="'. $root_folder . $first_button_anchor_direction .'">'. $first_button_anchor_text .'</a>
				<a href="'. $root_folder . $second_button_anchor_direction .'">'. $second_button_anchor_text .'</a>
			</div>
		';
		$image_containers .= '
			<div
				class="info_image_slider_image_container_single_image_container"
			>
				<img src="'.$root_folder.'_/media/image/'.$image_name_array[$i].'"" alt="Imagen de habitación '.($i + 1).'" width="100%">
			</div>
		';
	};

	return '
		<div
			id="'. $slider_id .'_info_image_slider"
			class="info_image_slider"
		>
			<div
				class="info_image_slider_information_container"
			>
				'. $info_containers . $sliding_control_points .'
			</div>
			<div
				class="info_image_slider_image_container"
			>
				'. $image_containers . $sliding_control_points .'
			</div>

			'.add_style_tag($id."_h2_a_DARK_HERO", $root_folder."_/component/viewer/L_h3_p_a_R_controls_strip_VIEWER/").'

		</div>
	';
};
?>