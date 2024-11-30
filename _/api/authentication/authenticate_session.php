<?php
function authenticate_session(
   string $cookie_data,
   string $screen_available_height,
   string $screen_available_width,
   string $screen_color_depth,
   string $screen_pixel_depth,
   string $navigator_language
): bool
{
   include "error_message.php";
   include "_encrypt.php";
   include "store_user_session_server_data.php";

   $file_path = "active_sessions/".$cookie_data.".json";
   $json_data = file_get_contents($file_path);
   $decoded_json_data = json_decode($json_data, true);
   $user_session_server_token =  $decoded_json_data["user_session_server_token"];
   $stored_screen_available_height =  $decoded_json_data["screen_available_height"];
   $stored_screen_available_width =  $decoded_json_data["screen_available_width"];
   $stored_screen_color_depth =  $decoded_json_data["screen_color_depth"];
   $stored_screen_pixel_depth =  $decoded_json_data["screen_pixel_depth"];
   $stored_navigator_language =  $decoded_json_data["navigator_language"];
   // $stored_navigator_language =  "45"; // For error message test
   $stored_server_remote_address =  $decoded_json_data["server_remote_address"];
   $stored_server_http_user_agent =  $decoded_json_data["server_http_user_agent"];
   $server_token_creation_time =  $decoded_json_data["server_token_creation_time"];
   $stored_server_token_expiration_time =  $decoded_json_data["server_token_expiration_time"];

   $stored_cookie_data =  $decoded_json_data["cookie_data"];
   

   
   if ($json_data === false)
   {
      error_message(401,"Error: we detected a different file_get_contents than the valid for your session token");
      return false;
   };

   $encrypted_user_session_server_token = _encrypt($cookie_data);

   if ($encrypted_user_session_server_token === false)
   {
      error_message(401,"Error: your client session token was incorrect");
      return false;
   };

   if ($user_session_server_token != $encrypted_user_session_server_token)
   {
      error_message(401,"Error: we detected a different user session server token");
      return false;
   };

   if ($stored_screen_available_height != $screen_available_height)
   {
      error_message(401,"Error: we detected a different screen available height");
      return false;
   };

   if ($stored_screen_available_width != $screen_available_width)
   {
      error_message(401,"Error: we detected a different screen available width than the valid for your session token");
      return false;
   };

   if ($stored_screen_color_depth != $screen_color_depth)
   {
      error_message(401,"Error: we detected a different screen color depth than the valid for your session token");
      return false;
   };

   if ($stored_screen_pixel_depth != $screen_pixel_depth)
   {
      error_message(401,"Error: we detected a different screen pixel depth than the valid for your session token");
      return false;
   };

   if ($stored_navigator_language != $navigator_language)
   {
      error_message(401,"Error: Detectamos un lenguaje de navegador inválido para su código único de sesión.");
      return false;
   };

   if ($stored_server_remote_address != $_SERVER['REMOTE_ADDR'])
   {
      error_message(401,"Error: we detected a different server remote address than the valid for your session token");
      return false;
   };
   
   if ($stored_server_http_user_agent != $_SERVER['HTTP_USER_AGENT'])
   {
      error_message(401,"Error: we detected a different server http user agent than the valid for your session token");
      return false;
   };
   
   if ($stored_server_token_expiration_time < time())
   {
      error_message(401,"Your session has expired. Log in again please.");
      return false;
   };

   ///////////////////////////
   ///////////////////////////
   ///////////////////////////
   ///////////////////////////
   // Update user session expiration date
   ///////////////////////////
   ///////////////////////////
   ///////////////////////////
   ///////////////////////////
   
   $new_server_token_expiration_time =  time() + 1800;

   store_user_session_server_data(      
      $cookie_data,
      $user_session_server_token,
      $screen_available_height,
      $screen_available_width,
      $screen_color_depth,
      $screen_pixel_depth,
      $navigator_language,
      $stored_cookie_data,
      // "MNFRWK_USER_SESSION_TOKEN=".$cookie_data,
      $_SERVER['REMOTE_ADDR'],
      $_SERVER['HTTP_USER_AGENT'],
      $server_token_creation_time,
      $new_server_token_expiration_time
   );

   return true;
}
