<?php
class inforce_https
{
   private $https_port = 443;

   public function __construct()
   {
      if ($_SERVER['SERVER_PORT'] != $this->https_port)
      {
         header('Location: https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
         exit;
      }
   }
}
