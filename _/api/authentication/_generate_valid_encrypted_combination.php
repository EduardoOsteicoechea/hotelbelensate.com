<?php

$desired_combinations = [
   "eduardo"=>"123",
   "leonardo"=>"ansldkfj",
];

generate_valid_encrypted_combinations($desired_combinations);

/////////////////////////////
/////////////////////////////
// Methods
/////////////////////////////
/////////////////////////////

function generate_valid_encrypted_combinations(array $desired_combinations): void
{
   $valid_encrypted_combinations = [];

   foreach ($desired_combinations as $username => $password) 
   {
      $valid_encrypted_combinations[] = generate_valid_encrypted_combination($username, $password);
   };

   print_r($valid_encrypted_combinations);

   $json_data = json_encode($valid_encrypted_combinations, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

   file_put_contents("_valid_encrypted_combinations.json", $json_data);
}


function generate_valid_encrypted_combination(string $username, string $password): array
{   
   include "_encrypt.php";

   $encrypted_name = _encrypt(
      $username
   );

   $encrypted_password = _encrypt(
      $password
   );

   return [$encrypted_name => $encrypted_password];
}