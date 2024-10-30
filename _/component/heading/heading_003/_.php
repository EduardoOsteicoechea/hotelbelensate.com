<?php
class heading_003 {
public function __construct( 
	$root_folder, 
	$sesion_array,
	$page_name,
	$component_id,
	$component_class,
	$main_message,
)
{
    echo '
			<div
            id="'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'outer_container"
            class="'.$component_class. "_" .'outer_container"
			>
				<h2>'. $main_message .'</h2>
			</div>
    ';
}}?>

