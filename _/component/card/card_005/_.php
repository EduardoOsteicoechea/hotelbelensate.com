<?php
class card_005 {
public function __construct( 
	$root_folder, 
	$sesion_array,
	$page_name,
	$parent_component_id,
	$parent_component_class,
	$component_class,
	$card_data,
	$card_iteration,
)
{
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->parent_component_id = $parent_component_id;
	$this->parent_component_class = $parent_component_class;
	$this->component_class = $component_class;
	$this->card_data = $card_data;
	$this->card_iteration = $card_iteration;
	// print_r($card_data);
}

public function html()
{
	$card_image = $this->card_data[0];
	$card_title = $this->card_data[1];
	$card_date = $this->card_data[2];
	$card_author = $this->card_data[3];
	$card_description = $this->card_data[4];
	$card_techique = $this->card_data[5];

	return '
		<div
        id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'outer_container"
        class="'.$this->component_class. "_" .'outer_container"
		>
			<div
			id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_container"
			class="'.$this->component_class. "_" .'image_container"
			>
				<img
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_container_image"
				class="'.$this->component_class. "_" .'image_container_image"
				height="100%"
				src="'.$this->root_folder.'_/media/image/'.$this->card_data[0].'"
				alt="image_container_image"
				>
			</div>

			<div
			id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_information_container"
			class="'.$this->component_class. "_" .'card_information_container"
			>
				<h3
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_information_container_title"
				class="'.$this->component_class. "_" .'card_information_container_title"
				>
					'.$card_title.'
				<h3>

				<p
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_information_container_main_message"
				class="'.$this->component_class. "_" .'card_information_container_main_message"
				>
					'.$card_author.'
				</p>

				<p
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_information_container_secondary_message"
				class="'.$this->component_class. "_" .'card_information_container_secondary_message"
				>
					'.$card_date.'
				</p>
			</div>

			<script type="module">
				import '. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  '_class from "'.$this->root_folder.'_/component/card/card_005/_.js"
				new '. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  '_class(
					"'.$this->root_folder.'",
					'.json_encode($this->sesion_array).',
					"'.$this->page_name.'",
					"'.$this->parent_component_id.'",
					"'.$this->parent_component_class.'",
					"'.$this->component_class.'",
					'.json_encode($this->card_data).',
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'outer_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_container_image",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_information_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_information_container_title",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_information_container_main_message",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_information_container_secondary_message",
					'.$this->card_iteration.',
				);
			</script>
		</div>
	';
}


}?>