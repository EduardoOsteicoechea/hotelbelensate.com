<?php
class viewer_007 {
public function __construct( 
	string $root_folder, 
	array $sesion_array,
	string $page_name,
	string $component_id,
)
{
    include "data.php";

    $this->data = $page_data[$component_id];
    
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->component_class = static::class;
	$this->component_id = $page_name . "_" . $component_id . "_" . $this->component_class;
	$this->component_folder_path = $this->root_folder .  '_/component/'.explode("_",static::class)[0].'/' . $this->component_class . "/";
	$this->javascript_class_path = $this->root_folder . $this->component_folder_path . "_.js";
	$this->images_folder = $this->root_folder . $this->data["images_folder_path_from_root_folder"];

	$html = '
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
                src="'. $this->images_folder . $page_data["work_1"]["image"].'"
                alt="information_capacity_icon_container_image"
                height="'.$this->data["image_height"].';" 
                style="top:'.$this->data["image_top"].';left:'.$this->data["image_left"].';"
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
                    src="'. $this->images_folder . $this->data["logo"] .'"
                    alt="information_capacity_icon_container_image"
                    >
                </div>
                <h2
                id="'. $this->component_id . "_" .'information_container_title"
                class="'.$this->component_class. "_" .'information_container_title"
                >
                    '.$page_data["work_1"]["title"].'
                </h2>
                <p
                id="'. $this->component_id . "_" .'information_container_main_message"
                class="'.$this->component_class. "_" .'information_container_main_message"
                >
                    '.$page_data["work_1"]["description"].'
                </p>
                <p
                id="'. $this->component_id . "_" .'information_container_date"
                class="'.$this->component_class. "_" .'information_container_date"
                >
                    '.$page_data["work_1"]["date"].'
                </p>
                <p
                id="'. $this->component_id . "_" .'information_container_author"
                class="'.$this->component_class. "_" .'information_container_author"
                >
                    '.$page_data["work_1"]["author"].'
                </p>
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

    ob_start();
    new heading_004($root_folder, $_SESSION, "galeria", "heading_2");
    $heading_004 = ob_get_clean();
    $html .= $heading_004;

    ob_start();
    new strip_001(
        $root_folder, 
        $_SESSION, 
        "galeria", 
        "heading_2", 
        $page_data,
        $this->component_id . "_" . "information_container",
        $this->component_id . "_" . "image_container_image",
        $this->component_id . "_" . "information_container_title",
        $this->component_id . "_" . "information_container_main_message",
        $this->component_id . "_" . "information_container_date",
        $this->component_id . "_" . "information_container_author",
        $page_data["work_1"],
        $page_data["work_2"],
        $page_data["work_3"],
        1
    );
    $image_strip_1 = ob_get_clean();
    $html .= $image_strip_1;

    ob_start();
    new separator_001(
        $root_folder, 
        $_SESSION, 
        "galeria", 
        "separator_1",
    );
    $separator_1 = ob_get_clean();
    $html .= $separator_1;

    ob_start();
    new strip_002(
        $root_folder, 
        $_SESSION, 
        "galeria", 
        "heading_2", 
        $page_data,
        $this->component_id . "_" . "information_container",
        $this->component_id . "_" . "image_container_image",
        $this->component_id . "_" . "information_container_title",
        $this->component_id . "_" . "information_container_main_message",
        $this->component_id . "_" . "information_container_date",
        $this->component_id . "_" . "information_container_author",
        $page_data["work_4"],
        $page_data["work_5"],
        $page_data["work_6"],
        2
    );
    $image_strip_2 = ob_get_clean();
    $html .= $image_strip_2;

    ob_start();
    new separator_001(
        $root_folder, 
        $_SESSION, 
        "galeria", 
        "separator_2",
    );
    $separator_2 = ob_get_clean();
    $html .= $separator_2;

    ob_start();
    new strip_001(
        $root_folder, 
        $_SESSION, 
        "galeria", 
        "heading_2", 
        $page_data,
        $this->component_id . "_" . "information_container",
        $this->component_id . "_" . "image_container_image",
        $this->component_id . "_" . "information_container_title",
        $this->component_id . "_" . "information_container_main_message",
        $this->component_id . "_" . "information_container_date",
        $this->component_id . "_" . "information_container_author",
        $page_data["work_7"],
        $page_data["work_8"],
        $page_data["work_9"],
        3
    );
    $image_strip_3 = ob_get_clean();
    $html .= $image_strip_3;

    ob_start();
    new separator_001(
        $root_folder, 
        $_SESSION, 
        "galeria", 
        "separator_3",
    );
    $separator_3 = ob_get_clean();
    $html .= $separator_3;

    ob_start();
    new strip_002(
        $root_folder, 
        $_SESSION, 
        "galeria", 
        "heading_2", 
        $page_data,
        $this->component_id . "_" . "information_container",
        $this->component_id . "_" . "image_container_image",
        $this->component_id . "_" . "information_container_title",
        $this->component_id . "_" . "information_container_main_message",
        $this->component_id . "_" . "information_container_date",
        $this->component_id . "_" . "information_container_author",
        $page_data["work_10"],
        $page_data["work_11"],
        $page_data["work_12"],
        4
    );
    $image_strip_4 = ob_get_clean();
    $html .= $image_strip_4;

    ob_start();
    new separator_001(
        $root_folder, 
        $_SESSION, 
        "galeria", 
        "separator_4",
    );
    $separator_4 = ob_get_clean();
    $html .= $separator_4;

    ob_start();
    new strip_001(
        $root_folder, 
        $_SESSION, 
        "galeria", 
        "heading_2", 
        $page_data,
        $this->component_id . "_" . "information_container",
        $this->component_id . "_" . "image_container_image",
        $this->component_id . "_" . "information_container_title",
        $this->component_id . "_" . "information_container_main_message",
        $this->component_id . "_" . "information_container_date",
        $this->component_id . "_" . "information_container_author",
        $page_data["work_13"],
        $page_data["work_14"],
        $page_data["work_15"],
        5
    );
    $image_strip_5 = ob_get_clean();
    $html .= $image_strip_5;

    echo $html;
}}?>