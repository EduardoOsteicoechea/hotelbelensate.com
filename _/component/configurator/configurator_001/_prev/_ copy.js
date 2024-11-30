// called from "./_.php";

import manageAccess from "../../../dist/configurator/configurator_001/assets/_ManageAccess.js";

export default class 
{
   constructor 
   (
      root_folder,
      session_array,
      page_name,
      component_id,
      component_class_name,
      outer_container,
      authenticator_container,
      username_input_container,
      username_input_label,
      username_input,
      password_input_container,
      password_input_label,
      password_input_input,
      access_button,
   ) 
   {
      //////////////////////////////////////
      // Store each argument as a property of the current class
      //////////////////////////////////////

      this.root_folder = root_folder;
      this.session_array = session_array;
      this.page_name = page_name;
      this.component_id = component_id;
      this.component_class_name = component_class_name;
      this.outer_container = document.getElementById(outer_container);

      this.authenticator_container = document.getElementById(authenticator_container);
      this.username_input_container = document.getElementById(username_input_container);
      this.username_input_label = document.getElementById(username_input_label);
      this.username_input = document.getElementById(username_input);
      this.password_input_container = document.getElementById(password_input_container);
      this.password_input_label = document.getElementById(password_input_label);
      this.password_input_input = document.getElementById(password_input_input);
      this.access_button = document.getElementById(access_button);

      new manageAccess(
         this.outer_container,
         this.authenticator_container,
         this.username_input,
         this.password_input_input,
         this.access_button
      );
   }
}