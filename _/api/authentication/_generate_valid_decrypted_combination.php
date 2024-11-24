<?php

require_once "get_encrypted_name_and_password_combinations.php";

$get_encripted_name_and_password_combinations = [];
$get_encripted_name_and_password_combinations = get_encripted_name_and_password_combinations();

generate_valid_decrypted_combinations($get_encripted_name_and_password_combinations);

/////////////////////////////
/////////////////////////////
// Methods
/////////////////////////////
/////////////////////////////

function generate_valid_decrypted_combinations(array $encryted_combinations): void
{
   $valid_decrypted_combinations = [];
   foreach ($encryted_combinations as $combinationIndex => $combination) 
   {
      foreach ($combination as $encrypted_username => $encrypted_password) 
      {         
         $valid_decrypted_combinations[] = decrypt_valid_encrypted_combination(
            $encrypted_username, 
            $encrypted_password
         );
      };
   };

   $json_data = json_encode($valid_decrypted_combinations, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

   file_put_contents("_valid_decrypted_combinations.json", $json_data);
}


function decrypt_valid_encrypted_combination(string $username, string $password): array
{      
   include "_decrypt.php";

   $encrypted_name = _decrypt(
      $username
   );

   $encrypted_password = _decrypt(
      $password
   );

   return [$encrypted_name => $encrypted_password];
}