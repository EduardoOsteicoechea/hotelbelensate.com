<?php
class return_room_management_dashboard_json
{
   private $room_folder_actions = "../room_data/rooms";
   
   public function __construct()
   {
      $this->retrieve_room_types_data("123");
   }

   function retrieve_room_types_data($secret)
   {
      $rooms_names = $this->get_directories($this->room_folder_actions);

      $rooms_data = [];

      for ($i = 0; $i < count($rooms_names); $i++)
      {
         $room_name = $rooms_names[$i];

         $type_directory_name = $this->room_folder_actions . "/" . $room_name . "/" . "type";
         $units_directory_name = $this->room_folder_actions . "/" . $room_name . "/" . "units";

         $rooms_data[$room_name]["type"] = $this->read_room_file(
            $type_directory_name, 
            $this->get_json_file_names($type_directory_name)[0]
         );
         $rooms_data[$room_name]["units_file_names"] = $this->get_json_file_names($units_directory_name);
         $rooms_data[$room_name]["units"] = [];
         $rooms_data[$room_name]["secret"] = $secret;

         foreach ($rooms_data[$room_name]["units_file_names"] as $file_name)
         {
            $rooms_data[$room_name]["units"][] = $this->read_room_file($units_directory_name, $file_name);
         }
      }
      echo json_encode($rooms_data);
   }

   function get_json_file_names($directory)
   {
      $jsonFiles = [];

      if (is_dir($directory))
      {
         $handle = opendir($directory);
         if ($handle)
         {
            while (($file = readdir($handle)) !== false)
            {
               if (pathinfo($file, PATHINFO_EXTENSION) === 'json')
               {
                  $jsonFiles[] = $file;
               };
            };
            closedir($handle);
         };
      };
      return $jsonFiles;
   }

   function get_directories($directory)
   {
      $directories = [];

      if (is_dir($directory))
      {
         $handle = opendir($directory);
         if ($handle)
         {
            while (($file = readdir($handle)) !== false)
            {
               if ($file != "." && $file != "..")
               {
                  $path = $directory . "/" . $file;
                  if (is_dir($path))
                  {
                     $directories[] = $file;
                  };
               };
            };
            closedir($handle);
         };
      };
      return $directories;
   }

   function read_room_file($directory, $filename)
   {
      $filepath = $directory . "/" . $filename;

      if (file_exists($filepath))
      {
         $contents = file_get_contents($filepath);
         return json_decode($contents, true);
      };
   }
}
