<?php
class hero_003 {
public function __construct( 
	$root_folder, 
	$sesion_array,
	$page_name,
	$component_id,
	$component_class,
	$component_image_folder_path,
)
{
$component_particular_folder_name = "hero/hero_002";
echo '
	<div
	id="'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'outer_container"
	class="'.$component_class. "_" .'outer_container"
	>
		<div
		id="'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'hero_image_container"
		class="'.$component_class. "_" .'hero_image_container"
		>
				<img
				id="'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'hero_image"
				class="'.$component_class. "_" .'hero_image"
				src="'.$component_image_folder_path.'i1.webp"
				width="100%"
				>
		</div>
	</div>
	<div
	id="'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'scroll_down_button"
	class="'.$component_class. "_" .'scroll_down_button"
	>
		<div
		id="'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'scroll_down_button_bar_1"
		class="'.$component_class. "_" .'scroll_down_button_bar_1"
		></div>
		<div
		id="'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'scroll_down_button_bar_2"
		class="'.$component_class. "_" .'scroll_down_button_bar_2"
		></div>
	</div>
	<script>
		const '. $page_name . "_" . $component_id . "_" . $component_class. "_" .'scroll_down_button = document.getElementById("'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'scroll_down_button");

		'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'scroll_down_button.addEventListener("pointerup",()=>{
			window.scrollBy(0, window.innerHeight * 1);
		})
	</script>
';}}?>