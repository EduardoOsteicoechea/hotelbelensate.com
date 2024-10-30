// called from "./_.php";

// import manageFilters from "../../../dist/dashboard/dashboard_002/filters/_ManageFilters.js";

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
     
   }
}