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
      outer_container
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

      new manageAccess(
         this.outer_container,
         this.authenticator_container,
         this.username_input,
         this.password_input_input,
         this.access_button
      );
   }
}