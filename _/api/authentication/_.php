<?php

load_autentication_workflow_tools();

/* these commented actions were generating trouble in development */
// new set_security_headers();
// new inforce_https();
// new enforce_user_session_rate_limit();

$authentication_api_parameters = new authentication_api_parameters($_POST);

$errors = new authentication_api_error_names();

handle_request($authentication_api_parameters, $errors);

////////////////////////////
////////////////////////////
// Current file Workflow Methods
////////////////////////////
////////////////////////////

function load_autentication_workflow_tools()
{
   require_once "set_security_headers.php";
   require_once "inforce_https.php";
   require_once "enforce_user_session_rate_limit.php";
   require_once "authentication_api_parameters.php";
   require_once "passes_sanity_check.php";
   require_once "manage_authentication_errors.php";
   require_once "authenticate_user.php";
   require_once "../room_data/return_room_management_dashboard_json.php";
   require_once "dispatch_authenticated_user_workflow.php";
   require_once "authentication_api_error_names.php";
   require_once "authenticate_session.php";
   require_once "manage_active_session_files.php";
};

////////////////////////////
////////////////////////////
// Maind Roadmap method
////////////////////////////
////////////////////////////

function handle_request($authentication_api_parameters, $errors)
{
   if ($authentication_api_parameters->post_request_was_made)
   {
      handle_received_post_data($authentication_api_parameters, $errors);
   }
   else
   {
      handle_error($errors->missing_post_request_parameters_error);
   };
};

function handle_received_post_data($authentication_api_parameters, $errors)
{
   if ($authentication_api_parameters->authentication_data_was_provided)
   {
      execute_authentication_workflow($authentication_api_parameters, $errors);
   }
   else if ($authentication_api_parameters->authenticated_workflow_data_was_provided)
   {
      execute_handle_authenticated_user_request_workflow($authentication_api_parameters, $errors);
   };
};

////////////////////////////
////////////////////////////
// Authentication workflow methods
////////////////////////////
////////////////////////////

function execute_authentication_workflow($authentication_api_parameters, $errors)
{
   if (
      passes_sanity_check($_POST[$authentication_api_parameters->username])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->password])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->screen_available_height])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->screen_available_width])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->screen_color_depth])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->screen_pixel_depth])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->navigator_language])
      // &&
      // passes_sanity_check($_POST[$authentication_api_parameters->cookie_data])
   )
   {
      execute_user_authentication_workflow($authentication_api_parameters, $errors);
   }
   else
      handle_error($errors->invalid_credentials_error);
};

function execute_user_authentication_workflow($authentication_api_parameters, $errors)
{ 
   if (
      authenticate_user(
         $_POST[$authentication_api_parameters->username],
         $_POST[$authentication_api_parameters->password],
         $_POST[$authentication_api_parameters->screen_available_height],
         $_POST[$authentication_api_parameters->screen_available_width],
         $_POST[$authentication_api_parameters->screen_color_depth],
         $_POST[$authentication_api_parameters->screen_pixel_depth],
         $_POST[$authentication_api_parameters->navigator_language],
         // $_POST[$authentication_api_parameters->cookie_data]
      )
   )
   {
      return_room_management_dashboard_json();
   }
   else
   {
      http_response_code(200);
      header('Content-Type: application/json');
      echo json_encode([
         'veredict' => 'invalid',
         'message' => 'undefined cookie data'
      ]);
         handle_error($errors->invalid_credentials_error);
      }
};

function return_room_management_dashboard_json()
{
   // http_response_code(200);
   // header('Content-Type: application/json');
   new return_room_management_dashboard_json();
   
   // http_response_code(200);
   // header('Content-Type: application/json');
   // echo json_encode([
   //    'veredict' => 'invalid',
   //    'message' => 'undefined cookie data'
   // ]);
   exit;
};

////////////////////////////
////////////////////////////
// Authenticated user workflow methods
////////////////////////////
////////////////////////////

function execute_handle_authenticated_user_request_workflow($authentication_api_parameters, $errors)
{
   if (
      passes_sanity_check($_POST[$authentication_api_parameters->workflow])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->cookie_data])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->screen_available_height])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->screen_available_width])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->screen_color_depth])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->screen_pixel_depth])
      &&
      passes_sanity_check($_POST[$authentication_api_parameters->navigator_language])
   )
   {
      execute_validated_workflow_authenticated_user_validation($authentication_api_parameters, $errors);
   }
   else
   {
      handle_error($errors->invalid_workflow_branch_error);
   };
};

function execute_validated_workflow_authenticated_user_validation($authentication_api_parameters, $errors)
{
   if($_POST[$authentication_api_parameters->cookie_data] !== "undefined")
   {
      if (
         authenticate_session(
            $_POST[$authentication_api_parameters->cookie_data],
            $_POST[$authentication_api_parameters->screen_available_height],
            $_POST[$authentication_api_parameters->screen_available_width],
            $_POST[$authentication_api_parameters->screen_color_depth],
            $_POST[$authentication_api_parameters->screen_pixel_depth],
            $_POST[$authentication_api_parameters->navigator_language]
         )
      )
      {
         new manage_active_session_files();
         new return_room_management_dashboard_json();
      }
      else
      {
         handle_error($errors->unauthenticated_user_error);
      }
   }
   else
   {
      http_response_code(200);
      header('Content-Type: application/json');
      echo json_encode([
         'veredict' => 'invalid',
         'message' => 'undefined cookie data'
      ]);
      exit;
   };
};

////////////////////////////
////////////////////////////
// Error handling methods
////////////////////////////
////////////////////////////

function handle_error(string $error_identifier)
{
   new manage_authentication_errors($error_identifier);
};
