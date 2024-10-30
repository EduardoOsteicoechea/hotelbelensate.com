<?php
class viewer_001 {
public function __construct( 
	string $root_folder, 
	array $sesion_array,
	string $page_name,
	string $component_id,
	string $component_class,
	string $images_folder,
	string $title_text,
	string $main_message_text,
	array $elements_text_array,
	string $secondary_message_text,
	string $action_button_text,
	string $action_button_href,
)
{
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->component_id = $component_id;
	$this->component_class = $component_class;
	$this->images_folder = $images_folder;
	$this->title_text = $title_text;
	$this->main_message_text = $main_message_text;
	$this->elements_text_array = $elements_text_array;
	$this->secondary_message_text = $secondary_message_text;
	$this->action_button_text = $action_button_text;
	$this->action_button_href = $action_button_href;
    
    include_once $root_folder . "_/server_functions/read_image_folder.php";

    $folder_content_array = read_image_folder($images_folder);
	// print_r($folder_content_array);

    $elements_text_array_for_html = $this->elements_text_array;
    $elements_text_array_html = "";
    for ($i=0; $i < count($this->elements_text_array); $i++) { 
        $elements_text_array_html .= "<p>". $this->elements_text_array[$i] ."<span>&#x25CF</span></p>";
    };

    $images_folder_data = $folder_content_array;
    $dot_control_dots_html = "";
    for ($i=0; $i < count($images_folder_data["enabled"]["desktop"]); $i++) { 
        $dot_control_dots_html .= '
            <div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" . "image_container_dot_controls_container_dot" . ($i + 1) .'"  
            class="'.$this->component_class. "_" .'image_container_dot_controls_container_dot"
            ></div>
        ';
    };
    
    $information_container_image_viewer_controls_dot_html = "";
    for ($i=0; $i < count($images_folder_data["enabled"]["desktop"]); $i++) { 
        $information_container_image_viewer_controls_dot_html .= '
            <div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" . "information_container_image_viewer_controls_container_dot" . ($i + 1) .'" 
            class="'.$this->component_class. "_" .'information_container_image_viewer_controls_container_dot"
            ></div>
        ';
    };
	
	echo '
		<div
        id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'outer_container"
        class="'.$this->component_class. "_" .'outer_container"
		>
            <div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_left_bar"
            class="'.$this->component_class. "_" .'information_container_left_bar '.$this->component_class. "_" .'information_container_bar"
            ></div>

            <div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container"
            class="'.$this->component_class. "_" .'information_container"
            >
                <div
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_logo_container"
                class="'.$this->component_class. "_" .'information_container_logo_container"
                >
                    <img
                    id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_logo_image"
                    class="'.$this->component_class. "_" .'information_container_logo_image"
                    height="100%"
                    src="'. $this->root_folder . '_/media/image/brand/belensate_icon_stars.webp"
                    alt="information_capacity_icon_container_image"
                    >
                </div>

                <h2
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_title"
                class="'.$this->component_class. "_" .'information_container_title"
                >
                    '.$this->title_text.'
                </h2>

                <p
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_main_message"
                class="'.$this->component_class. "_" .'information_container_main_message"
                >
                    '.$this->main_message_text.'
                </p>

                <div
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'elements_array"
                class="'.$this->component_class. "_" .'elements_array"
                >
                    '.$elements_text_array_html.'
                </div>

                <p
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_secondary_message"
                class="'.$this->component_class. "_" .'information_container_secondary_message"
                >
                    '.$this->secondary_message_text.'
                </p>

                <div
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_action_button"
                class="'.$this->component_class. "_" .'information_container_action_button"
                >
                    '.$this->action_button_text.'
                </div>
            </div>
            
            <div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_right_bar"
            class="'.$this->component_class. "_" .'information_container_right_bar '.$this->component_class. "_" .'information_container_bar"
            ></div>

            <div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'image_container"
            class="'.$this->component_class. "_" .'image_container"
            >
                <img
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'image_container_image"
                class="'.$this->component_class. "_" .'image_container_image"
                height="100%"
                src="'. $this->images_folder . "/" . "enabled/desktop/" . $folder_content_array["enabled"]["desktop"][0] . '"
                alt="information_capacity_icon_container_image"
                >

                <div
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'lateral_controls_container"
                class="'.$this->component_class. "_" .'lateral_controls_container"
                >
                    <div
                    id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'lateral_controls_container_left_control"
                    class="'.$this->component_class. "_" .'lateral_controls_container_control '.$this->component_class. "_" .'lateral_controls_container_left_control"
                    ></div>
                    <div
                    id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'lateral_controls_container_right_control"
                    class="'.$this->component_class. "_" .'lateral_controls_container_control '.$this->component_class. "_" .'lateral_controls_container_right_control"
                    ></div>
                </div>

                <div
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'image_container_dot_controls_container"
                class="'.$this->component_class. "_" .'image_container_dot_controls_container"
                >
                    '.$dot_control_dots_html.'
                </div>
            </div>



			<script type="module">
				import '. $this->page_name . "_" . $this->component_id . "_" . $this->component_class. "_" . 'class from "'.$this->root_folder.'_/component/viewer/viewer_001/_.js"
				new '. $this->page_name . "_" . $this->component_id . "_" . $this->component_class. "_" . 'class
                (
					"'.$this->root_folder.'",
					'.json_encode($this->sesion_array).',
					"'.$this->page_name.'",
					"'.$this->component_id.'",
					"'.$this->component_class.'",
					"'.$this->images_folder.'",
					"'.$this->title_text.'",
					'.json_encode($this->elements_text_array).',
					"'.$this->secondary_message_text.'",
					"'.$this->action_button_text.'",
					"'.$this->action_button_href.'",
					'.json_encode($folder_content_array).',

                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'outer_container",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_background_image_image",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_background_image_overlay",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_title",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_main_message",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'elements_array",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_secondary_message",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_action_button",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'image_container",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'image_container_image",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'lateral_controls_container",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'lateral_controls_container_left_control",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'lateral_controls_container_right_control",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'image_container_dot_controls_container",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'image_container_dot_controls_container_dot",
				);
			</script>
		</div>
	';
}}?>