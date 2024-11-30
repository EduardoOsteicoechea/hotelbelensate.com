<?php
   function error_message(int $response_code, string $error_message): void
   {
      $error_message = 
      [
         "ok"=>false,
         "response_code"=>$response_code,
         "error_message"=>$error_message." Ingrese sus credenciales nuevamente."
      ];

      echo json_encode($error_message, JSON_PRETTY_PRINT);
   }
?>