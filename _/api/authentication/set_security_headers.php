<?php
class set_security_headers
{
   public function __construct()
   {
      header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
      header('X-Frame-Options: DENY');
      header('Content-Security-Policy: default-src \'self\'; script-src \'self\'');
   }
}