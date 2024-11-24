<?php
class manage_authentication_errors
{
   public authentication_api_error_names $errors;

   public function __construct(string $error)
   {
      require_once "authentication_api_error_names.php";
      $this->errors = new authentication_api_error_names();

      // echo json_encode($error,JSON_PRETTY_PRINT);
   }
}