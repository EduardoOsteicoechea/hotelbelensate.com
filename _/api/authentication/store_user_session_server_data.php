<?php
   function store_user_session_server_data
   (   
      $user_session_client_cookie_value,
      $user_session_server_token,
      $screen_available_height,
      $screen_available_width,
      $screen_color_depth,
      $screen_pixel_depth,
      $navigator_language,
      $cookie_data,
      $server_remote_address,
      $server_http_user_agent,
      $server_token_creation_time,
      $server_token_expiration_time
   )
   : void
   {
      $session_data = 
      [
         "user_session_client_cookie_value"=>$user_session_client_cookie_value,
         "user_session_server_token"=>$user_session_server_token,
         "screen_available_height"=>$screen_available_height,
         "screen_available_width"=>$screen_available_width,
         "screen_color_depth"=>$screen_color_depth,
         "screen_pixel_depth"=>$screen_pixel_depth,
         "navigator_language"=>$navigator_language,
         "cookie_data"=>$cookie_data,
         "server_remote_address"=>$server_remote_address,
         "server_http_user_agent"=>$server_http_user_agent,
         "server_token_creation_time"=>$server_token_creation_time,
         "server_token_expiration_time"=>$server_token_expiration_time
      ];

      $jsonData = json_encode($session_data, JSON_PRETTY_PRINT);

      $filePath = "active_sessions/".$user_session_client_cookie_value.".json";

      file_put_contents($filePath, $jsonData);
   }
?>