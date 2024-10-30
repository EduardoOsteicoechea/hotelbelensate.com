<?php
class hero_004 {
public function __construct( 
	string $root_folder, 
	array $sesion_array,
	string $page_name,
	string $component_id,
	string $component_class,
	string $images_folder,
	string $data_file_path,
)
{
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->component_id = $component_id;
	$this->component_class = $component_class;
	$this->images_folder = $images_folder;
	$this->data_file_path = $data_file_path;
    
    include_once $root_folder . "_/server_functions/read_image_folder_1_level.php";
    include_once $data_file_path;

    $folder_content_array = read_image_folder_1_level($images_folder);

	$this->hero_data = $hero_data;

    $images_folder_data = $folder_content_array;
    
    $dot_controls_html = "";
    for ($i=0; $i < count($this->hero_data["image_pair"]); $i++) { 
        $dot_controls_html .= '
            <div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" . "center_message_container_controls_container_dot_controls_container_dot" . "_" . ($i + 1) .'" 
            class="'.$this->component_class. "_" .'center_message_container_controls_container_dot_controls_container_dot"
            ></div>
        ';
    };
	
	echo '
		<div
        id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'outer_container"
        class="'.$this->component_class. "_" .'outer_container"
		>
			<div
			id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'left_image_container"
			class="'.$this->component_class. "_" .'left_image_container"
			>
				<img
				id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'left_image_container_image"
				class="'.$this->component_class. "_" .'left_image_container_image"
				height="100%"
				src="' . $this->images_folder. $this->hero_data["image_pair"][0][0] . '"
				>
			</div>


			<div
			id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container"
			class="'.$this->component_class. "_" .'center_message_container"
			>
				<div
				id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_logo_container"
				class="'.$this->component_class. "_" .'center_message_container_logo_container"
				>
					<img
					id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_logo_container_image"
					class="'.$this->component_class. "_" .'center_message_container_logo_container_image"
					height="100%"
					src="'.$this->root_folder.$this->hero_data["logo"][0].'"
					>
				</div>

				<h1
				id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_title"
				class="'.$this->component_class. "_" .'center_message_container_title"
				>
					'.$this->hero_data["title"][0].'
				</h1>

				<p
				id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_message"
				class="'.$this->component_class. "_" .'center_message_container_message"
				>
					'.$this->hero_data["message"][0].'				
				</p>

				<div
				id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_controls_container"
				class="'.$this->component_class. "_" .'center_message_container_controls_container"
				>
					<div
					id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_controls_container_lateral_controls_container"
					class="'.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container"
					>
						<div
						id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_controls_container_lateral_controls_container_left_control_container"
						class="'.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_left_control_container '.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_control_container"
						>
							<div
							id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_controls_container_lateral_controls_container_left_control_container_bar_1"
							class="'.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_left_control_container_bar_1 '.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_left_control_container_bar"
							></div>

							<div
							id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_controls_container_lateral_controls_container_left_control_container_bar_2"
							class="'.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_left_control_container_bar_2 '.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_right_control_container_bar"
							></div>
						</div>

						<div
						id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'outer_container"
						class="'.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_right_control_container '.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_control_container""
						>
							<div
							id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_controls_container_lateral_controls_container_right_control_container_bar_1"
							class="'.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_right_control_container_bar_1 '.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_left_control_container_bar"
							></div>

							<div
							id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_controls_container_lateral_controls_container_right_control_container_bar_2"
							class="'.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_right_control_container_bar_2 '.$this->component_class. "_" .'center_message_container_controls_container_lateral_controls_container_right_control_container_bar"
							></div>
						</div>
					</div>

					<div
					id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_controls_container_dot_controls_container"
					class="'.$this->component_class. "_" .'center_message_container_controls_container_dot_controls_container"
					>
						'.$dot_controls_html.'
					</div>
				</div>

				
				<a
				id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'center_message_container_action_button"
				class="'.$this->component_class. "_" .'center_message_container_action_button"
				href="'. $this->root_folder . $this->hero_data["action_button_href"].'"
				>
					'.$this->hero_data["action_button_message"].'		
				</a>
			</div>



			<div
			id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'right_image_container"
			class="'.$this->component_class. "_" .'right_image_container"
			>
				<img
				id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'right_image_container_image"
				class="'.$this->component_class. "_" .'right_image_container_image"
				height="100%"
				src="' . $this->images_folder. $this->hero_data["image_pair"][0][1] . '"
				>
			</div>




			<script type="module">
				import '. $this->page_name . "_" . $this->component_id . "_" . $this->component_class. "_" . 'class from "'.$this->root_folder.'_/component/hero/hero_004/_.js"
				new '. $this->page_name . "_" . $this->component_id . "_" . $this->component_class. "_" . 'class
                (
					"'.$this->root_folder.'",
					'.json_encode($this->sesion_array).',
					"'.$this->page_name.'",
					"'.$this->component_id.'",
					"'.$this->component_class.'",
					"'.$this->images_folder.'",
					"'.$this->data_file_path.'",
					'.json_encode($this->hero_data).',

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
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'dot_controls_container",

                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_image_viewer_controls_container",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_image_viewer_controls_container_message",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_image_viewer_controls_container_lateral_controls_container",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_image_viewer_controls_container_lateral_controls_left_control",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_image_viewer_controls_container_lateral_controls_right_control",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_image_viewer_controls_container_dots_container",
                    "'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class . "_" .'information_container_image_viewer_controls_container_dot",

				);
			</script>			
		</div>
	';
}}?>