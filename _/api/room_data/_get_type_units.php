<?php
include "common_actions/_get_type_units_folder_name.php";
include "common_actions/_get_type_units_file_names.php";
include "common_actions/_get_type_units_files_data.php";
include "common_actions/_get_type_units_data_as_json.php";

if (isset($_POST["type_id"]))
{
   $type_id = $_POST["type_id"];
   $type_folder_path = get_type_units_folder_by_type_id($type_id);
   $type_folder_file_names = get_type_units_file_names($type_folder_path);
   $type_units_data_array = get_type_units_files_data($type_folder_path, $type_folder_file_names);
   $type_units_data_as_json = get_type_units_data_as_json($type_units_data_array);
   echo $type_units_data_as_json;
}
else
{
   echo json_encode("Access denied");
};




































?>