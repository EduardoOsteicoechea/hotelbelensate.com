<?php
function get_encripted_name_and_password_combinations():array
{
   $json_string = file_get_contents('_valid_encrypted_combinations.json');

   $encripted_name_and_password_combinations = json_decode($json_string, true);

   return $encripted_name_and_password_combinations;
};