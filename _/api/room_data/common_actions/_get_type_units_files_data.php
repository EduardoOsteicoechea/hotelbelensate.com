<?php
function get_type_units_files_data(string $folder_path, array $files_array) : array
{
   $files_data = []; 

   foreach ($files_array as $filename)
   {
      $filepath = $folder_path . "/" . $filename;

      if (file_exists($filepath))
      {
         $raw_json_data = file_get_contents($filepath);
         $decoded_file_data = json_decode($raw_json_data, true);
         $files_data[] = $decoded_file_data;
         echo json_encode($raw_json_data);echo "------";
      };
   }
   return $files_data;
};
