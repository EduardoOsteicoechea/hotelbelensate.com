<?php
class strip_003 {
public function __construct( 
	string $root_folder, 
	array $sesion_array,
	string $page_name,
	string $component_id,
    string $element_1_id,
    string $element_2_id,
    string $element_3_id,
)
{
    include "data.php";

    $element_1_data = $page_data[$element_1_id];
    $element_2_data = $page_data[$element_2_id];
    $element_3_data = $page_data[$element_3_id];
    
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->component_class = static::class;
	$this->component_id = $page_name . "_" . $component_id . "_" . $this->component_class;
	$this->component_folder_path = $this->root_folder .  '_/component/'.explode("_",static::class)[0].'/' . $this->component_class . "/";
	$this->javascript_class_path = $this->root_folder . $this->component_folder_path . "_.js";
	$this->images_folder = $this->root_folder . $page_data[$component_id]["images_folder_path_from_root_folder"];

	echo '
		<div
        id="'. $this->component_id . "_" . 'outer_container"
        class="'.$this->component_class. "_" .'strip_outer_container"
		>
            <div
            id="'. $this->component_id . "_" . 'card_1"
            class="'.$this->component_class. "_" .'strip_card '.$this->component_class. "_" .'strip_card_1"
            >

                <div
                id="'. $this->component_id . "_" . 'strip_image_container"
                class="'.$this->component_class. "_" .'strip_image_container"
                >
                    <img
                    id="'. $this->component_id . "_" .'strip_image_container_image"
                    class="'.$this->component_class. "_" .'strip_image_container_image"
                    src="'. $this->images_folder . $element_1_data["image"].'"
                    alt="information_capacity_icon_container_image"
                    height="100%"
                    >
                </div>

                <div
                id="'. $this->component_id . "_" .'strip_card_1_information_container"
                class="'.$this->component_class. "_" .'strip_card_information_container"
                >
                    <h3
                    id="'. $this->component_id . "_" .'strip_card_1_information_container_title"
                    class="'.$this->component_class. "_" .'strip_card_information_container_title"
                    >'.$element_1_data["title"].'</h3>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_1_information_container_message"
                    class="'.$this->component_class. "_" .'strip_card_information_container_message"
                    >'.$element_1_data["message"].'</p>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_1_information_container_message_2"
                    class="'.$this->component_class. "_" .'strip_card_information_container_message_2"
                    >'.$element_1_data["message_2"].'</p>
                    <a
                    id="'. $this->component_id . "_" .'strip_card_1_information_container_action_button_message"
                    class="'.$this->component_class. "_" .'strip_card_information_container_action_button_message"
                    href="'. $element_1_data["action_button_href"] .'"
                    >'.$element_1_data["action_button_message"].'</a>
                </div>
            
                <script>
                
                </script>
            </div>


            <div
            id="'. $this->component_id . "_" . 'card_2"
            class="'.$this->component_class. "_" .'strip_card '.$this->component_class. "_" .'strip_card_2"
            >

                <div
                id="'. $this->component_id . "_" .'strip_image_container"
                class="'.$this->component_class. "_" .'strip_image_container"
                >
                    <img
                    id="'. $this->component_id . "_" .'strip_image_container_image"
                    class="'.$this->component_class. "_" .'strip_image_container_image"
                    src="'. $this->images_folder . $element_2_data["image"].'"
                    alt="information_capacity_icon_container_image"
                    height="120%"
                    style="top:-3dvw;left:-1.0dvw"
                    >
                </div>

                <div
                id="'. $this->component_id . "_" .'strip_card_2_information_container"
                class="'.$this->component_class. "_" .'strip_card_information_container"
                >
                    <h3
                    id="'. $this->component_id . "_" .'strip_card_2_information_container_title"
                    class="'.$this->component_class. "_" .'strip_card_information_container_title"
                    >'.$element_2_data["title"].'</h3>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_2_information_container_message"
                    class="'.$this->component_class. "_" .'strip_card_information_container_message"
                    >'.$element_2_data["message"].'</p>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_2_information_container_message_2"
                    class="'.$this->component_class. "_" .'strip_card_information_container_message_2"
                    >'.$element_2_data["message_2"].'</p>
                    <h4
                    id="'. $this->component_id . "_" .'strip_card_2_information_container_action_button_message"
                    class="'.$this->component_class. "_" .'strip_card_information_container_action_button_message"
                    >'.$element_2_data["action_button_message"].'</h4>
                </div>
            
                <script>
                
                </script>
            </div>


            <div
            id="'. $this->component_id . "_" . 'card_3"
            class="'.$this->component_class. "_" .'strip_card '.$this->component_class. "_" .'strip_card_3"
            >

                <div
                id="'. $this->component_id . "_" .'strip_image_container"
                class="'.$this->component_class. "_" .'strip_image_container"
                >
                    <img
                    id="'. $this->component_id . "_" .'strip_image_container_image"
                    class="'.$this->component_class. "_" .'strip_image_container_image"
                    src="'. $this->images_folder . $element_3_data["image"].'"
                    alt="information_capacity_icon_container_image"
                    height="100%"
                    >
                </div>

                <div
                id="'. $this->component_id . "_" .'strip_card_3_information_container"
                class="'.$this->component_class. "_" .'strip_card_information_container"
                >
                    <h3
                    id="'. $this->component_id . "_" .'strip_card_3_information_container_title"
                    class="'.$this->component_class. "_" .'strip_card_information_container_title"
                    >'.$element_3_data["title"].'</h3>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_3_information_container_message"
                    class="'.$this->component_class. "_" .'strip_card_information_container_message"
                    >'.$element_3_data["message"].'</p>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_3_information_container_message_2"
                    class="'.$this->component_class. "_" .'strip_card_information_container_message_2"
                    >'.$element_3_data["message_2"].'</p>
                    <h4
                    id="'. $this->component_id . "_" .'strip_card_3_information_container_action_button_message"
                    class="'.$this->component_class. "_" .'strip_card_information_container_action_button_message"
                    >'.$element_3_data["action_button_message"].'</h4>
                </div>

                <script>
                
                </script>
            </div>
            

            <script>
            
            </script>
		</div>
	';
}}?>