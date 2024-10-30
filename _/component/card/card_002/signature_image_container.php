<?php
include "../../../server_functions/add_style_tag.php";

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
  echo json_encode(['error' => 'Invalid JSON data']);
  exit;
}

$root_folder = $data['root_folder'];
$component_folder = $data['component_folder'];
$sesion_array = $data['sesion_array'];
$page_name = $data['page_name'];
$component_id = $data['component_id'];
$component_class = $data['component_class'];
$component_image_folder_path = $data['component_image_folder_path'];
$component_container = $data['component_container'];
$images_names_array = $data['images_names_array'];


$html = '
    <div
    id="'.$component_id . "_" . $component_class . '_signature_image_container"
    class="'.$component_class . '_signature_image_container"
    >
        <img
        id="'.$component_id . "_" . $component_class . '_signature_image_container_image"
        class="'.$component_class . '_signature_image_container_image"
        src="'.$component_image_folder_path . "enabled/desktop/" . $images_names_array[0].'"
        alt="signature_image_container_image"
        height="100%"
        >
    </div>
';

$html .= '
  <script src="aa.js"></script>
';

echo $html;

// $html .= add_style_tag("signature_image_container", $root_folder."_/component/card/card_002");


?>