<?php
class manage_active_session_files
{   
   public function __construct()
   {
      $common_actions_directory_path = "../api_common_actions";
      
      require_once $common_actions_directory_path . "/" . "read_json_file.php";
      require_once $common_actions_directory_path . "/" . "get_directory_json_files_names.php";
      
      $files = get_directory_json_files_names("active_sessions");

      foreach ($files as $file) 
      {
         $file_content_array = read_json_file("active_sessions", $file);
         $file_expiration_time = $file_content_array["server_token_expiration_time"];
         $current_time = time();

         if($file_expiration_time < $current_time)
         {
            unlink("active_sessions" . "/" . $file);
         };
      };
   }
}