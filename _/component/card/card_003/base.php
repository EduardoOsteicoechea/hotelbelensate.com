<?php
    include "../../../server_functions/read_image_folder.php";
    $data = json_decode(file_get_contents('php://input'), true);

    $image_folder_content = read_image_folder("../../../".$data["component_image_folder_path"]);
    $data["images"] = $image_folder_content; 

    echo json_encode($data);
?>