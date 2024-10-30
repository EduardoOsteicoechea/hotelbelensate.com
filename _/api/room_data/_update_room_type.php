<?php

$new_type_data = [
   "room_name" => $_POST["room_name"],
   "type_id" => $_POST["type_id"],
   "is_enabled" => $_POST["is_enabled"] == "on" ? true : false,
   "admits_pax" => $_POST["admits_pax"] == "on" ? true : false,
   "pax_amount" => $_POST["pax_amount"],
   "decrement_amount" => $_POST["decrement_amount"],
   "increment_amount" => $_POST["increment_amount"],
   "gross_price" => $_POST["gross_price"],
   "net_price" => $_POST["net_price"],
   "capacity" => $_POST["capacity"],
   "room_thumbnail_image" => $_POST["room_thumbnail_image"],
   "room_capacity_images" => $_POST["room_capacity_images"],
   "capacity_with_pax" => $_POST["capacity_with_pax"],
   "children_capacity" => $_POST["children_capacity"],
   "room_numbers_in_administration" => generateStringItemsArray($_POST["room_numbers_in_administration"]),
   "room_services" => generateStringItemsArray($_POST["room_services"]),
   "room_images" => generateStringItemsArray($_POST["room_images"]),
   "room_icons" => GenerateRoomIconElementsArray(generateStringItemsArray($_POST["room_icons"]))
];

$rooms_directories_names = GetDirectories("rooms");
$room_folder_name = $new_type_data["type_id"] . "_" . strtolower(str_replace(' ', '_', $new_type_data["room_name"]));
$desired_key = array_search($room_folder_name, $rooms_directories_names);

$room_folder_name = $new_type_data["type_id"] . "_" . strtolower(str_replace(' ', '_', $new_type_data["room_name"]));
$file_path = "rooms" . "/" . $rooms_directories_names[$desired_key] . "/" . "type" . "/" . "room_type.json";  

if (file_put_contents($file_path, json_encode($new_type_data), LOCK_EX)) {
   echo "success";
} else {
   echo "error";
}

// print_r($new_type_data);
// echo $file_path;

function GetDirectories($directory)
{
   $directories = [];

   if (is_dir($directory)) {
      $handle = opendir($directory);
      if ($handle) {
         while (($file = readdir($handle)) !== false) {
            if ($file != "." && $file != "..") {
               $path = $directory . "/" . $file;
               if (is_dir($path)) {
                  $directories[] = $file;
               };
            };
         };
         closedir($handle);
      };
   };
   return $directories;
}

function generateStringItemsArray(string $originalString): array
{
   $exploded_string = explode("|", $originalString);
   $new_array = [];
   foreach ($exploded_string as $new_value) {
      $new_array[] = trim($new_value);
   }
   if ($new_array[count($new_array) - 1] == "") {
      array_pop($new_array);
   };
   return $new_array;
}

function GenerateRoomIconElementsArray($originalArray){
   $main_array = [];
   foreach ($originalArray as $room_icon_string) {
      $exploded_string = explode(",", $room_icon_string);
      $new_array = [];
      foreach ($exploded_string as $new_value) {
         $new_array[] = trim($new_value);
      }
      $main_array[] = $new_array;
   }
   return $main_array;
}
?>
