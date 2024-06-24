<?php
    include "../../../server_functions/read_image_folder.php";
    $data = json_decode(file_get_contents('php://input'), true);

    $image_folder_content = read_image_folder("../../../".$data["component_image_folder_path"]);
    $data["images"] = $image_folder_content; 

    $root_folder = $data["root_folder"];
    $page_name = $data["page_name"];
    $component_id = $data["component_id"];
    $component_class = $data["component_class"];
    $component_image_folder_path = $data["component_image_folder_path"];
    $images_desktop = $data["images"]["enabled"]["desktop"];
    $images_mobile = $data["images"]["enabled"]["mobile"];
    $page_name = $data["page_name"];
    
    $data["php_array"] = $data;
    $data["html"] = '
        <div
        id="'. $page_name . "_" . $component_id . "_" . $component_class . "_" . 'signature_image_container"
        class="'.$component_class . "_" . 'signature_image_container"
        >
            <img
            id="'. $page_name . "_" . $component_id . "_" . $component_class . "_" . 'signature_image_container_image"
            class="'.$component_class . "_" . 'signature_image_container_image"
            src="'.$component_image_folder_path. "enabled/desktop/" .$images_desktop[0].'"
            alt="signature_image_container_image"
            height="100%"
            >
        </div>
        <div
        id="'. $page_name . "_" . $component_id . "_" . $component_class . "_" . 'room_data_container"
        class="'.$component_class . "_" . 'room_data_container"
        >
            
        </div>
    ';
    
    $data["id_array"] = [
        $page_name . "_" . $component_id . "_" . $component_class . "_" . "signature_image_container",
        $page_name . "_" . $component_id . "_" . $component_class . "_" . "signature_image_container_image",
        $page_name . "_" . $component_id . "_" . $component_class . "_" . "room_data_container",
    ];

    echo json_encode($data);
?>