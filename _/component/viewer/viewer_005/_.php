<?php
class viewer_005 {
public function __construct( 
	string $root_folder, 
	array $sesion_array,
	string $page_name,
	string $component_id,
)
{
    include "data.php";

    $this->hero_data = $page_data[$component_id];
    
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->component_class = static::class;
	$this->component_id = $page_name . "_" . $component_id . "_" . $this->component_class;
	$this->component_folder_path = $this->root_folder .  '_/component/'.explode("_",static::class)[0].'/' . $this->component_class . "/";
	$this->javascript_class_path = $this->root_folder . $this->component_folder_path . "_.js";
	$this->images_folder = $this->root_folder . $this->hero_data["images_folder_path_from_root_folder"];

	echo '
		<div
        id="'. $this->component_id . "_" .'outer_container"
        class="'.$this->component_class. "_" .'outer_container"
		>
            <div
            id="'. $this->component_id . "_" .'image_container"
            class="'.$this->component_class. "_" .'image_container"
            >
                <img
                id="'. $this->component_id . "_" .'image_container_image"
                class="'.$this->component_class. "_" .'image_container_image"
                src="'. $this->images_folder . $this->hero_data["image"].'"
                alt="information_capacity_icon_container_image"
                height="'.$this->hero_data["image_height"].';" 
                style="top:'.$this->hero_data["image_top"].';left:'.$this->hero_data["image_left"].';"
                >
            </div>

            <div
            id="'. $this->component_id . "_" .'information_container_left_bar"
            class="
                '.$this->component_class. "_" .'information_container_left_bar 
                '.$this->component_class. "_" .'information_container_bar
            "></div>

            <div
            id="'. $this->component_id . "_" .'information_container"
            class="'.$this->component_class. "_" .'information_container"
            >
                <div
                id="'. $this->component_id . "_" .'information_container_logo_container"
                class="'.$this->component_class. "_" .'information_container_logo_container"
                >
                    <img
                    id="'. $this->component_id . "_" .'information_container_logo_image"
                    class="'.$this->component_class. "_" .'information_container_logo_image"
                    height="100%"
                    src="'. $this->images_folder . $this->hero_data["logo"] .'"
                    alt="information_capacity_icon_container_image"
                    >
                </div>
                <h2
                id="'. $this->component_id . "_" .'information_container_title"
                class="'.$this->component_class. "_" .'information_container_title"
                >
                    '.$this->hero_data["title"].'
                </h2>
                <p
                id="'. $this->component_id . "_" .'information_container_main_message"
                class="'.$this->component_class. "_" .'information_container_main_message"
                >
                    '.$this->hero_data["message"].'
                </p>
                <a
                id="'. $this->component_id . "_" .'information_container_action_button"
                class="'.$this->component_class. "_" .'information_container_action_button"
                href="'. $this->root_folder . $this->hero_data["action_button_href"] .'"
                >
                    '.$this->hero_data["action_button_message"].'
                </a>
            </div>


			<script type="module">
				// import '. $this->component_id. "_" . 'class from "'. $this->javascript_class_path .'"
				// new '. $this->component_id. "_" . 'class
                // (
				// 	"'.$this->root_folder.'",
				// 	'.json_encode($this->sesion_array).',
				// 	"'.$this->page_name.'",
				// 	"'.$this->component_id.'",
				// 	"'.$this->component_class.'",

                //     "'. $this->component_id . "_" .'outer_container",
				// );
			</script>
		</div>
	';
}}?>