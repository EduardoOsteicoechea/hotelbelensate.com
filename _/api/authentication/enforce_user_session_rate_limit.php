<?php
class enforce_user_session_rate_limit
{
   private $max_requests_per_minute = 10;
   private $rate_limit_window = 60;

   public function __construct()
   {
      session_start();

      if (isset($_SESSION['last_request_time']))
      {
         $elapsed_time = time() - $_SESSION['last_request_time'];
         $requests_since_last_check = $_SESSION['request_count'];

         if ($elapsed_time < $this->rate_limit_window && $requests_since_last_check >= $this->max_requests_per_minute)
         {
            header('HTTP/1.1 429 Too Many Requests');
            exit('Rate limit exceeded.');
         };
      };

      $_SESSION['last_request_time'] = time();
      $_SESSION['request_count'] = isset($_SESSION['request_count']) ? $_SESSION['request_count'] + 1 : 1;
   }
}
