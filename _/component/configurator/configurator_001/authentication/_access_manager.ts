// called from "../_.ts";

import login_dashboard from "../dashboard/login_dashboard.js";
import room_management_dashboard from "../dashboard/room_management_dashboard.js";
import session_resume_credentials_validator from "./session_resume_credentials_validator.js";
import session_resume_data from "./session_resume_data.js";

export default class access_manager
{
   _session_data: session_resume_data | null = null;
   _credentials_validator: session_resume_credentials_validator | null = null;
   _session_data_credentials_validation_result: boolean = false;

   _root_folder: string;
   _page_name: string;
   _component_id: string;
   _component_class_name: string;
   _outer_container: HTMLDivElement;

   _authenticator_container: HTMLDivElement = document.createElement("div");
   _username_label: HTMLLabelElement = document.createElement("label");
   _username_input: HTMLInputElement = document.createElement("input");
   _password_input_label: HTMLLabelElement = document.createElement("label");
   _password_input_input: HTMLInputElement = document.createElement("input");
   _access_button: HTMLButtonElement = document.createElement("button");
   _mnfrwk_cookie: string[] = [];

   _login_dasboard: login_dashboard | null = null;
   _room_management_dashboard: room_management_dashboard | null = null;

   constructor
   (
      root_folder: string,
      page_name: string,
      component_id: string,
      component_class_name: string,
      outer_container: HTMLDivElement
   )
   {
      this._root_folder = root_folder;
      this._page_name = page_name;
      this._component_id = component_id;
      this._component_class_name = component_class_name;
      this._outer_container = outer_container;
   }

   public async validate_session_or_generate_login_dashboard():Promise<void>
   {
      if(await this.session_is_active())
      {
         this.generate_rooms_management_dashboard();
      }
      else
      {
         this.generate_login_dashboard();
      };
   }

   private async session_is_active(): Promise<boolean>
   {
      this.generate_session_data();
      await this.validate_session_data_credentials();
      return this._session_data_credentials_validation_result;
   }

   private generate_session_data():void
   {
      this._session_data = new session_resume_data
      (
         screen.availHeight.toString(),
         screen.availWidth.toString(),
         screen.colorDepth.toString(),
         screen.pixelDepth.toString(),
         navigator.language,
         this._mnfrwk_cookie[1],
         "manage_rooms_data"
      );      
   }

   private async validate_session_data_credentials():Promise<void>
   {
      if(this._session_data !== null)
      {
         this._credentials_validator = new session_resume_credentials_validator(
            this._session_data
         );
   
         await this._credentials_validator.fetch_api();
   
         if (this._credentials_validator.response_json.veredict === "valid")
         {
            this._session_data_credentials_validation_result = true;
         }
         else
         {
            this._session_data_credentials_validation_result = false;
         };
      };      
   }

   private generate_login_dashboard():void
   {
      this._login_dasboard = new login_dashboard(
         this._root_folder,
         this._page_name,
         this._component_id,
         this._component_class_name,
         this._outer_container
      );
   }

   private generate_rooms_management_dashboard():void
   {
      this._room_management_dashboard = new room_management_dashboard(
         this._root_folder,
         this._page_name,
         this._component_id,
         this._component_class_name,
         this._outer_container
      );
   }
}





