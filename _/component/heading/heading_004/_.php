<?php
class heading_004 {
public function __construct( 
	$root_folder, 
	$sesion_array,
	$page_name,
	$component_id,
)
{
    include "data.php";

    $this->data = $page_data[$component_id];
    
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->component_class = static::class;
	$this->component_id = $page_name . "_" . $component_id . "_" . $this->component_class;
	$this->component_folder_path = $this->root_folder .  "_/component/viewer/" . $this->component_class . "/";
	$this->javascript_class_path = $this->root_folder . $this->component_folder_path . "_.js";

    echo '
			<div
            id="'. $this->component_id . '_outer_container"
            class="'.$this->component_class. "_" .'outer_container"
			>
				<h2>'. $this->data["message"] .'</h2>
			</div>
    ';
}}?>

