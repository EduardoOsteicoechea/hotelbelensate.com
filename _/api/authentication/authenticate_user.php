<?php
   function authenticate_user
   (
      string $username,
      string $password,
      string $screen_available_height,
      string $screen_available_width,
      string $screen_color_depth,
      string $screen_pixel_depth,
      string $navigator_language,
      // string $cookie_data
   )
   : bool
   {
      require_once "get_encrypted_name_and_password_combinations.php";
      require_once "_encrypt.php";
      require_once "store_user_session_server_data.php";

      $encrypted_username_value = _encrypt($username);
      $encrypted_password_value = _encrypt($password);

      $encripted_name_and_password_combination = [$encrypted_username_value, $encrypted_password_value];

      $admitted_encripted_name_and_password_combinations = get_encripted_name_and_password_combinations();

      $is_encripted_name_and_password_combination_valid = encripted_name_and_password_combination_is_valid(
         $admitted_encripted_name_and_password_combinations,
         $encripted_name_and_password_combination,
         $screen_available_height,
         $screen_available_width,
         $screen_color_depth,
         $screen_pixel_depth,
         $navigator_language,
         // $cookie_data
      );

      return $is_encripted_name_and_password_combination_valid;
   }


   function encripted_name_and_password_combination_is_valid
   (
      array $admitted_encripted_name_and_password_combinations,
      array $encripted_name_and_password_combination,   
      string $screen_available_height,
      string $screen_available_width,
      string $screen_color_depth,
      string $screen_pixel_depth,
      string $navigator_language,
      // string $cookie_data
   )
   : bool
   {
      foreach ($admitted_encripted_name_and_password_combinations as $admitted_encripted_name_and_password_combination)
      {
         foreach ($admitted_encripted_name_and_password_combination as $valid_encrypted_username => $valid_encrypted_password)
         {
            $user_provided_encripted_name = $encripted_name_and_password_combination[0];
            $user_provided_encripted_password = $encripted_name_and_password_combination[1];

            if 
            (
               $valid_encrypted_username == $user_provided_encripted_name
               &&
               $valid_encrypted_password == $user_provided_encripted_password
            )
            {
               require_once "_encrypt.php";
               $user_session_client_cookie_value = bin2hex(random_bytes(8));
               $user_session_server_token = _encrypt($user_session_client_cookie_value);
               $server_token_creation_time = time();
               $server_token_expiration_time = $server_token_creation_time + 120;
               
               store_user_session_server_data(
                  $user_session_client_cookie_value,
                  $user_session_server_token,
                  $screen_available_height,
                  $screen_available_width,
                  $screen_color_depth,
                  $screen_pixel_depth,
                  $navigator_language,
                  // $cookie_data,
                  $user_session_client_cookie_value,
                  $_SERVER['REMOTE_ADDR'],
                  $_SERVER['HTTP_USER_AGENT'],
                  $server_token_creation_time,
                  $server_token_expiration_time
               );

               $user_session_compund_token_expiration = time() + 120;

               setcookie(
                  'MNFRWK_USER_SESSION_TOKEN', 
                  $user_session_client_cookie_value, 
                  $user_session_compund_token_expiration, 
                  '/'
               );            
               return true;
            }
         }
      };
      return false;
   }
?>