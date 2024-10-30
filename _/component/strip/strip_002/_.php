<?php
class strip_002 {
public function __construct( 
	string $root_folder, 
	array $sesion_array,
	string $page_name,
	string $component_id,
	array $page_data,
	string $information_container_id,
	string $information_container_image_container_image_id,
	string $information_container_title_id,
	string $information_container_main_message_id,
	string $information_container_date_id,
	string $information_container_author_id,
    array $element_1_data,
    array $element_2_data,
    array $element_3_data,
    int $strip_number,
)
{
    $this->hero_data = $page_data[$component_id];
    
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->component_class = static::class;
	$this->component_id = $page_name . "_" . $component_id . "_" . $this->component_class;
	$this->component_folder_path = $this->root_folder .  '_/component/'.explode("_",static::class)[0].'/' . $this->component_class . "/";
	$this->javascript_class_path = $this->root_folder . $this->component_folder_path . "_.js";
	$this->images_folder = $this->root_folder . $page_data["selected_work_viewer"]["images_folder_path_from_root_folder"];

	echo '
		<div
        id="'. $this->component_id . "_" .'strip_'.$strip_number.'_outer_container"
        class="'.$this->component_class. "_" .'strip_outer_container"
		>
            <div
            id="'. $this->component_id . "_" .'strip_'.$strip_number.'_card_1"
            class="'.$this->component_class. "_" .'strip_card '.$this->component_class. "_" .'strip_card_1"
            >
                <div
                id="'. $this->component_id . "_" .'strip_card_1_information_container"
                class="'.$this->component_class. "_" .'strip_card_information_container"
                >
                    <h3
                    id="'. $this->component_id . "_" .'strip_card_1_information_container_title"
                    class="'.$this->component_class. "_" .'strip_card_information_container_title"
                    >'.$element_1_data["title"].'</h3>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_1_information_container_technique"
                    class="'.$this->component_class. "_" .'strip_card_information_container_technique"
                    >'.$element_1_data["technique"].'</p>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_1_information_container_date"
                    class="'.$this->component_class. "_" .'strip_card_information_container_date"
                    >'.$element_1_data["date"].'</p>
                    <h4
                    id="'. $this->component_id . "_" .'strip_card_1_information_container_author"
                    class="'.$this->component_class. "_" .'strip_card_information_container_author"
                    >'.$element_1_data["author"].'</h4>
                </div>
                <div
                id="'. $this->component_id . "_" .'strip_image_container"
                class="'.$this->component_class. "_" .'strip_image_container"
                >
                    <img
                    id="'. $this->component_id . "_" .'strip_image_container_image"
                    class="'.$this->component_class. "_" .'strip_image_container_image"
                    src="'. $this->images_folder . $element_1_data["image"].'"
                    alt="information_capacity_icon_container_image"
                    height="'.$element_1_data["image_height"].';" 
                    style="top:'.$element_1_data["image_top"].';left:'.$element_1_data["image_left"].';"
                    >
                </div>            
                <script>
                    const '. $this->component_id . "_" .'strip_'.$strip_number.'_card_1 = document.getElementById("'. $this->component_id . "_" .'strip_'.$strip_number.'_card_1");
                    '. $this->component_id . "_" .'strip_'.$strip_number.'_card_1.addEventListener("pointerup",()=>{
                        
                        '. $information_container_image_container_image_id .'.setAttribute("src","'.$this->images_folder . $element_1_data["image"].'");
                        '. $information_container_title_id .'.innerHTML = "'.$element_1_data["title"].'";
                        '. $information_container_main_message_id .'.innerHTML = "'.$element_1_data["description"].'";
                        '. $information_container_date_id .'.innerHTML = "'.$element_1_data["date"].'";
                        '. $information_container_author_id .'.innerHTML = "'.$element_1_data["author"].'";
                        strip_'.$strip_number.'_'. $information_container_image_container_image_id .'.scrollIntoView();
                    });
                </script>
            </div>


            <div
            id="'. $this->component_id . "_" .'strip_'.$strip_number.'_card_2"
            class="'.$this->component_class. "_" .'strip_card '.$this->component_class. "_" .'strip_card_2"
            >
                <div
                id="'. $this->component_id . "_" .'strip_card_2_information_container"
                class="'.$this->component_class. "_" .'strip_card_information_container"
                >
                    <h3
                    id="'. $this->component_id . "_" .'strip_card_2_information_container_title"
                    class="'.$this->component_class. "_" .'strip_card_information_container_title"
                    >'.$element_2_data["title"].'</h3>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_2_information_container_technique"
                    class="'.$this->component_class. "_" .'strip_card_information_container_technique"
                    >'.$element_2_data["technique"].'</p>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_2_information_container_date"
                    class="'.$this->component_class. "_" .'strip_card_information_container_date"
                    >'.$element_2_data["date"].'</p>
                    <h4
                    id="'. $this->component_id . "_" .'strip_card_2_information_container_author"
                    class="'.$this->component_class. "_" .'strip_card_information_container_author"
                    >'.$element_2_data["author"].'</h4>
                </div>
                <div
                id="'. $this->component_id . "_" .'strip_image_container"
                class="'.$this->component_class. "_" .'strip_image_container"
                >
                    <img
                    id="'. $this->component_id . "_" .'strip_image_container_image"
                    class="'.$this->component_class. "_" .'strip_image_container_image"
                    src="'. $this->images_folder . $element_2_data["image"].'"
                    alt="information_capacity_icon_container_image"
                    height="'.$element_2_data["image_height"].';" 
                    style="top:'.$element_2_data["image_top"].';left:'.$element_2_data["image_left"].';"
                    >
                </div>            
                <script>
                    const '. $this->component_id . "_" .'strip_'.$strip_number.'_card_2 = document.getElementById("'. $this->component_id . "_" .'strip_'.$strip_number.'_card_2");
                    '. $this->component_id . "_" .'strip_'.$strip_number.'_card_2.addEventListener("pointerup",()=>{
                        '. $information_container_image_container_image_id .'.setAttribute("src","'.$this->images_folder . $element_2_data["image"].'");
                        '. $information_container_title_id .'.innerHTML = "'.$element_2_data["title"].'";
                        '. $information_container_main_message_id .'.innerHTML = "'.$element_2_data["description"].'";
                        '. $information_container_date_id .'.innerHTML = "'.$element_2_data["date"].'";
                        '. $information_container_author_id .'.innerHTML = "'.$element_2_data["author"].'";
                        strip_'.$strip_number.'_'. $information_container_image_container_image_id .'.scrollIntoView();
                    });
                </script>
            </div>


            <div
            id="'. $this->component_id . "_" .'strip_'.$strip_number.'_card_3"
            class="'.$this->component_class. "_" .'strip_card '.$this->component_class. "_" .'strip_card_3"
            >
                <div
                id="'. $this->component_id . "_" .'strip_card_3_information_container"
                class="'.$this->component_class. "_" .'strip_card_information_container"
                >
                    <h3
                    id="'. $this->component_id . "_" .'strip_card_3_information_container_title"
                    class="'.$this->component_class. "_" .'strip_card_information_container_title"
                    >'.$element_3_data["title"].'</h3>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_3_information_container_technique"
                    class="'.$this->component_class. "_" .'strip_card_information_container_technique"
                    >'.$element_3_data["technique"].'</p>
                    <p
                    id="'. $this->component_id . "_" .'strip_card_3_information_container_date"
                    class="'.$this->component_class. "_" .'strip_card_information_container_date"
                    >'.$element_3_data["date"].'</p>
                    <h4
                    id="'. $this->component_id . "_" .'strip_card_3_information_container_author"
                    class="'.$this->component_class. "_" .'strip_card_information_container_author"
                    >'.$element_3_data["author"].'</h4>
                </div>
                <div
                id="'. $this->component_id . "_" .'strip_image_container"
                class="'.$this->component_class. "_" .'strip_image_container"
                >
                    <img
                    id="'. $this->component_id . "_" .'strip_image_container_image"
                    class="'.$this->component_class. "_" .'strip_image_container_image"
                    src="'. $this->images_folder . $element_3_data["image"].'"
                    alt="information_capacity_icon_container_image"
                    height="'.$element_3_data["image_height"].';" 
                    style="top:'.$element_3_data["image_top"].';left:'.$element_3_data["image_left"].';"
                    >
                </div>
                <script>
                    const '. $this->component_id . "_" .'strip_'.$strip_number.'_card_3 = document.getElementById("'. $this->component_id . "_" .'strip_'.$strip_number.'_card_3");
                    '. $this->component_id . "_" .'strip_'.$strip_number.'_card_3.addEventListener("pointerup",()=>{
                        '. $information_container_image_container_image_id .'.setAttribute("src","'.$this->images_folder . $element_3_data["image"].'");
                        '. $information_container_title_id .'.innerHTML = "'.$element_3_data["title"].'";
                        '. $information_container_main_message_id .'.innerHTML = "'.$element_3_data["description"].'";
                        '. $information_container_date_id .'.innerHTML = "'.$element_3_data["date"].'";
                        '. $information_container_author_id .'.innerHTML = "'.$element_3_data["author"].'";
                        strip_'.$strip_number.'_'. $information_container_image_container_image_id .'.scrollIntoView();
                    });
                </script>
            </div>



                   
            <script>
                const strip_'.$strip_number.'_'. $information_container_id .' = document.getElementById("'.$information_container_id.'");
                const strip_'.$strip_number.'_'. $this->component_id .'_outer_container = document.getElementById("'. $this->component_id . "_" .'strip_'.$strip_number.'_outer_container");
                const strip_'.$strip_number.'_'. $information_container_image_container_image_id .' = document.getElementById("'. $information_container_image_container_image_id .'");

                console.log(strip_'.$strip_number.'_'. $information_container_image_container_image_id .');
                
                '. $this->component_id . "_" .'strip_'.$strip_number.'_outer_container.addEventListener(\'click\', (event) => {
                    if (event.target !== event.currentTarget) {
                        event.stopPropagation();
                    }
                });
            </script>
		</div>
	';
}}?>