<?php
include "_secrets.php";

if (isset($_POST["secret"]) && $secret == $_POST["secret"])
{
   restore_default_rooms_data();
   retrieve_room_types_data($secret);
}

///////////////////////////////////////
///////////////////////////////////////
// Algorithm methods
///////////////////////////////////////
///////////////////////////////////////

function restore_default_rooms_data() 
{
   $sourceFolder = 'rooms';
   $destinationFolder = '../backup/room_data/rooms';
   if (is_dir($sourceFolder)) {
      rmdir($sourceFolder);
  }
  rename($destinationFolder, $sourceFolder);
}

function retrieve_room_types_data($secret)
{
   $rooms_names = GetDirectories("rooms");

   $rooms_data = [];

   for ($i = 0; $i < count($rooms_names); $i++)
   {
      $room_name = $rooms_names[$i];

      $type_directory_name = "rooms" . "/" . $room_name . "/" . "type";
      $units_directory_name = "rooms" . "/" . $room_name . "/" . "units";

      $rooms_data[$room_name]["type"] = ReadRoomFile($type_directory_name, GetJsonFilesNames($type_directory_name)[0]);
      $rooms_data[$room_name]["units_file_names"] = GetJsonFilesNames($units_directory_name);
      $rooms_data[$room_name]["units"] = [];
      $rooms_data[$room_name]["secret"] = $secret;

      foreach ($rooms_data[$room_name]["units_file_names"] as $file_name)
      {
         $rooms_data[$room_name]["units"][] = ReadRoomFile($units_directory_name, $file_name);
      }
   }
   echo json_encode($rooms_data);
}

function GetJsonFilesNames($directory)
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

function GetDirectories($directory)
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

function ReadRoomFile($directory, $filename)
{
   $filepath = $directory . "/" . $filename;

   if (file_exists($filepath))
   {
      $contents = file_get_contents($filepath);
      return json_decode($contents, true);
   };
}
