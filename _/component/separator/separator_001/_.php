<?php
class separator_001 {
public function __construct( 
	string $root_folder, 
	array $sesion_array,
	string $page_name,
	string $component_id,
)
{    
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->component_class = static::class;
	$this->component_id = $page_name . "_" . $component_id . "_" . $this->component_class;
	$this->component_folder_path = $this->root_folder .  '_/component/'.explode("_",static::class)[0].'/' . $this->component_class . "/";

	echo '
		<div
        id="'. $this->component_id . "_" . 'outer_container"
        class="'.$this->component_class. "_" .'outer_container"
		>

		</div>
	';
}}?>