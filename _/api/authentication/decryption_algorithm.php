<?php
function decryption_algorithm(string $value)
{
   require_once "_secret_key.php";   
   
   $initialization_vector_length = openssl_cipher_iv_length('AES-256-CBC');
   $initialization_vector = openssl_random_pseudo_bytes($initialization_vector_length);

   $decrypted_value = openssl_decrypt(
      $value, 
      'AES-256-CBC', 
      $secret_key, 
      OPENSSL_RAW_DATA, 
      1, 
      $initialization_vector
   );
   
   return $decrypted_value;
}