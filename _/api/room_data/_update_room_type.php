<?php

$new_type_data = process_post_global_variable_values($_POST);

$rooms_directories_names = get_relative_path_directories_names("rooms");

$room_folder_name = generate_room_folder_name($new_type_data["type_id"], $new_type_data["room_name"], $rooms_directories_names);

$desired_room_type_folder_name = array_search($room_folder_name, $rooms_directories_names);

$file_path = generate_room_type_filepath($rooms_directories_names[$desired_room_type_folder_name]);

$result = override_room_type_file_data($file_path, $new_type_data);

echo $result;

///////////////////////////////////////
///////////////////////////////////////
// Algorithm methods
///////////////////////////////////////
///////////////////////////////////////

function generate_room_type_filepath($rooms_directory_name)
{
   $room_folder_name = "rooms";
   $room_folder_name .= "/";
   $room_folder_name .= $rooms_directory_name;
   $room_folder_name .= "/";
   $room_folder_name .= "type";
   $room_folder_name .= "/";
   $room_folder_name .= "room_type.json";
   return $room_folder_name;
}

function generate_room_folder_name($type_id, $room_name, $rooms_directories_names)
{
   $corresponding_room_name_index = (intval($type_id) - 1);
   $room_folder_name = $rooms_directories_names[$corresponding_room_name_index];
   return $room_folder_name;
}

function process_post_global_variable_values($post)
{
   return [
      "room_name" => $post["room_name"],
      "type_id" => $post["type_id"],
      "is_enabled" => $post["is_enabled"] == "on" ? true : false,
      "admits_pax" => $post["admits_pax"] == "on" ? true : false,
      "pax_amount" => doubleval($post["pax_amount"]),
      "decrement_amount" => doubleval($post["decrement_amount"]),
      "increment_amount" => doubleval($post["increment_amount"]),
      "gross_price" => doubleval($post["gross_price"]),
      "net_price" => doubleval($post["net_price"]),
      "capacity" => intval($post["capacity"]),
      "room_thumbnail_image" => $post["room_thumbnail_image"],
      "room_capacity_images" => $post["room_capacity_images"],
      "capacity_with_pax" => intval($post["capacity_with_pax"]),
      "children_capacity" => intval($post["children_capacity"]),
      "room_numbers_in_administration" => generate_string_items_array($post["room_numbers_in_administration"]),
      "room_services" => generate_string_items_array($post["room_services"]),
      "room_images" => generate_string_items_array($post["room_images"]),
      "room_icons" => generate_room_icon_elements_array(generate_string_items_array($post["room_icons"]))
   ];
}

function get_relative_path_directories_names($directory_path)
{
   $directories = [];

   if (is_dir($directory_path))
   {
      $handle = opendir($directory_path);
      if ($handle)
      {
         while (($file = readdir($handle)) !== false)
         {
            if ($file != "." && $file != "..")
            {
               $path = $directory_path . "/" . $file;
               if (is_dir($path))
               {
                  $directories[] = $file;
               }
            }
         }
         closedir($handle);
      }
   }
   return $directories;
}

function generate_string_items_array(string $original_string, bool $must_convert_item_to_int = false): array
{
   $exploded_string = explode("|", $original_string);
   $new_array = [];
   foreach ($exploded_string as $new_value)
   {
      if ($must_convert_item_to_int == "convert_item_to_int")
      {
         $new_array[] = trim(intval($new_value));
      }
      else
      {
         $new_array[] = trim($new_value);
      }
   }

   if ($new_array[count($new_array) - 1] == "")
   {
      array_pop($new_array);
   }

   return $new_array;
}

function generate_room_icon_elements_array($original_array)
{
   $main_array = [];
   foreach ($original_array as $room_icon_string)
   {
      $exploded_string = explode(",", $room_icon_string);
      $new_array = [];
      foreach ($exploded_string as $new_value)
      {
         $new_array[] = trim($new_value);
      }
      $main_array[] = $new_array;
   }
   return $main_array;
}

function override_room_type_file_data($file_path, $new_type_data)
{
   $result = "";

   $prepared_data_for_file = json_encode($new_type_data, JSON_UNESCAPED_UNICODE);

   $file_handle = fopen($file_path, 'w');

   rewind($file_handle);

   if (fwrite($file_handle, $prepared_data_for_file) == false)
   {
      $result .= "Error overriding the file:";
   }
   else
   {
      $result .= "Success overriding the file:";
   };

   $result .= "\n\n";
   $result .= "    ";
   $result .= $file_path;
   $result .= "\n\n";
   $result .= "The content to be written was:";
   $result .= "\n\n";
   $result .= $prepared_data_for_file;

   fclose($file_handle);

   return $result;
}
