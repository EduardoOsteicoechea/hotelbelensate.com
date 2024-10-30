<?php
    $data = json_decode(file_get_contents('php://input'), true);
    $root_folder = $data["root_folder"];
    $page_name = $data["page_name"];
    $component_id = $data["component_id"];
    $component_class = $data["component_class"];
    $component_image_folder_path = $data["component_image_folder_path"];
    $room_data_object = $data["room_data_object"];
    $images_desktop = $data["images"]["enabled"]["desktop"];
    $images_mobile = $data["images"]["enabled"]["mobile"];
    $page_name = $data["page_name"];
    
    $data["php_array"] = $data;

    $room_services_html = '';
    for ($i=0; $i < count($room_data_object["room services"]); $i++) 
    { 
        $service = $room_data_object["room services"][$i];
        if($i < count($room_data_object["room services"]) - 1)
        {
            $room_services_html .= $service . " &#x2022 ";
        }
        else 
        {
            $room_services_html .= $service;
        }
    };

    $room_price_html = (string)((($room_data_object["type gross price"] * $room_data_object["decrement amount"]) + ($room_data_object["type gross price"] * $room_data_object["increment amount"])) / 2) . " USD";
    // $room_price_html = (string)$room_data_object["type gross price"] + " USD";

    $data["room_data_object_html"] = '
        <h1>'.$room_data_object["room name"].'</h1>
        <p>'.$room_services_html.'</p>
        <h2>'.$room_price_html.'</h2>
        <button>Reservar</button>
    ';

    echo json_encode($data);
?>