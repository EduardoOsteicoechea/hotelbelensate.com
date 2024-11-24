<?php
class authentication_api_parameters
{
   public string $username = "username";
   public string $password = "password";
   public string $cookie_data = "cookie_data";
   public string $workflow = "workflow";
   public string $screen_available_height = "screen_available_height";
   public string $screen_available_width = "screen_available_width";
   public string $screen_color_depth = "screen_color_depth";
   public string $screen_pixel_depth = "screen_pixel_depth";
   public string $navigator_language = "navigator_language";

   public bool $post_request_was_made = false;
   public bool $client_device_fingerprint_was_submitted = false;
   public bool $authentication_data_was_provided = false;
   public bool $authenticated_workflow_data_was_provided = false;

   public function __construct(array $post)
   {
      $this->post_request_was_made = isset($_POST);

      if($this->post_request_was_made)
      {
         $this->client_device_fingerprint_was_submitted =
            isset($_POST[$this->screen_available_height]) 
               && 
            isset($_POST[$this->screen_available_width])
               && 
            isset($_POST[$this->screen_color_depth])
               && 
            isset($_POST[$this->screen_pixel_depth])
               && 
            isset($_POST[$this->navigator_language])
               && 
            isset($_POST[$this->cookie_data])
         ;
         
         $this->authentication_data_was_provided =
            $this->client_device_fingerprint_was_submitted
               &&
            isset($_POST[$this->username]) 
               && 
            isset($_POST[$this->password])
         ;

         $this->authenticated_workflow_data_was_provided =
            $this->client_device_fingerprint_was_submitted
               &&
            isset($_POST[$this->cookie_data]) 
               && 
            isset($_POST[$this->workflow])
         ;
      };
   }
}