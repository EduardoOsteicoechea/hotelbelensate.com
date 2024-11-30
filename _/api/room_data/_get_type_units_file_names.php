<?php
   function get_type_units_file_names(string $folder_path)
   {
      $jsonFiles = [];

      if (is_dir($folder_path))
      {
         $handle = opendir($folder_path);
         if ($handle)
         {
            while (($file = readdir($handle)) != false)
            {
               if (pathinfo($file, PATHINFO_EXTENSION) == 'json')
               {
                  $jsonFiles[] = $file;
               };
            };
            closedir($handle);
         };
      };
      return $jsonFiles;
   };
?>