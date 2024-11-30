// Called from ../authentication/_access_manager.ts

import constrain_input from "../assets/miscellaneous/constrain_input.js";
import RoomType from "../data_model/RoomType.js";
import session_start_credentials_validator from "../authentication/session_start_credentials_validator.js";
import session_start_data from "../authentication/session_start_data.js";
import IRoom_types_data from "../data_model/IRoom_types_data.js";
import IRoomType from "../data_model/IRoomType.js";

export default class login_dashboard
{
   root_folder: string;
   page_name: string;
   component_id: string;
   component_class_name: string;
   outer_container: HTMLDivElement;
   authentication_api_route: string = "../../_/api/authentication/_.php";

   login_dashboard_container: HTMLDivElement = document.createElement("div");

   main_heading: HTMLHeadingElement = document.createElement("h1");
   secondary_heading: HTMLHeadingElement = document.createElement("h2");

   username_label_and_input_container: HTMLDivElement = document.createElement("div");
   username_label: HTMLLabelElement = document.createElement("label");
   username_input: HTMLInputElement = document.createElement("input");

   password_label_and_input_container: HTMLDivElement = document.createElement("div");
   password_label: HTMLLabelElement = document.createElement("label");
   password_input: HTMLInputElement = document.createElement("input");

   submit_button: HTMLButtonElement = document.createElement("button");

   room_management_dashboard_must_be_generated: boolean = false;
   credentials_dataform: FormData | null = null;

   _session_data: session_start_data | null = null;
   credentials_validator: session_start_credentials_validator | null = null;
   _session_data_credentials_validation_result: boolean = false;

   room_types_data: IRoomType[] = [];

   public constructor
      (
         root_folder: string,
         page_name: string,
         component_id: string,
         component_class_name: string,
         outer_container: HTMLDivElement
      )
   {
      this.root_folder = root_folder;
      this.page_name = page_name;
      this.component_id = component_id;
      this.component_class_name = component_class_name;
      this.outer_container = outer_container;

      this.setup_component_elements();
   }

   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   // Main roadmap method
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////

   private setup_component_elements(): void
   {
      this.configure_login_dashboard_container();

      this.configure_main_heading();
      this.configure_secondary_heading();

      this.configure_username_label_and_input_container();
      this.configure_username_label();
      this.configure_username_input();

      this.configure_password_label_and_input_container();
      this.configure_password_label();
      this.configure_password_input();

      this.configure_submit_button();

      this.append_main_heading_to_login_dashboard_container();
      this.append_secondary_heading_to_login_dashboard_container();
      this.append_elements_to_username_label_and_input_container();
      this.append_elements_to_password_label_and_input_container();
      this.append_all_elements_to_login_dashboard_container();

      this.outer_container.appendChild(this.login_dashboard_container);
   }

   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   // Dashboard elements configuration methods
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////

   private configure_login_dashboard_container(): void
   {
      // this.login_dashboard_container.id = this.component_id + "_" + this.component_class_name + "_" + "login_dashboard_container";
      // this.login_dashboard_container.className = this.login_dashboard_container.className + "_" + "login_dashboard_container";
      this.login_dashboard_container.id = "login_dashboard_container";
      this.login_dashboard_container.className = "login_dashboard_container";
   }

   private configure_username_label_and_input_container(): void
   {
      this.username_label_and_input_container.id = this.login_dashboard_container.id + "_" + "username_label_and_input_container";
      this.username_label_and_input_container.className = this.login_dashboard_container.className + "_" + "username_label_and_input_container";
   }

   private configure_main_heading(): void
   {
      this.main_heading.id = this.login_dashboard_container.id + "_" + "main_heading";
      this.main_heading.className = this.login_dashboard_container.className + "_" + "main_heading";
      this.main_heading.innerHTML = "Gestion de habitaciones";
   }

   private configure_secondary_heading(): void
   {
      this.secondary_heading.id = this.login_dashboard_container.id + "_" + "secondary_heading";
      this.secondary_heading.className = this.login_dashboard_container.className + "_" + "secondary_heading";
      this.secondary_heading.innerHTML = "Inicie sessión para operar";
   }

   private configure_username_label(): void
   {
      this.username_label.id = this.login_dashboard_container.id + "_" + "username_label";
      this.username_label.className = this.login_dashboard_container.className + "_" + "username_label";
      this.username_label.innerText = "Correo";
   }

   private configure_username_input(): void
   {
      this.username_input.id = this.login_dashboard_container.id + "_" + "username_input";
      this.username_input.className = this.login_dashboard_container.className + "_" + "username_input";
      this.username_input.type = "password";
      new constrain_input(this.username_input, 8);
   }

   private configure_password_label_and_input_container(): void
   {
      this.password_label_and_input_container.id = this.login_dashboard_container.id + "_" + "password_label_and_input_container";
      this.password_label_and_input_container.className = this.login_dashboard_container.className + "_" + "password_label_and_input_container";
   }

   private configure_password_label(): void
   {
      this.password_label.id = this.login_dashboard_container.id + "_" + "password_label";
      this.password_label.className = this.login_dashboard_container.className + "_" + "password_label";
      this.password_label.innerText = "Contraseña";
   }

   private configure_password_input(): void
   {
      this.password_input.id = this.login_dashboard_container.id + "_" + "password_input";
      this.password_input.className = this.login_dashboard_container.className + "_" + "password_input";
      this.password_input.type = "password";
      new constrain_input(this.password_input, 8);
   }

   private configure_submit_button(): void
   {
      this.submit_button.id = this.login_dashboard_container.id + "_" + "submit_button";
      this.submit_button.className = this.login_dashboard_container.className + "_" + "submit_button";
      this.submit_button.textContent = "Enviar";
      this.submit_button.onkeyup = (event) =>
      {
         if (event.key === 'Enter')
         {
            if (this.inputs_are_not_empty())
            {
               this.submit_credentials();
            }
            else
            {
               alert("Debe ingresar tanto su correo como contraseña para enviar sus datos");
               this.clear_current_component_inputs();
            };
         }
      };
      this.submit_button.onpointerup = (event) =>
      {
         if (this.inputs_are_not_empty())
         {
            this.submit_credentials();
         }
         else
         {
            alert("Debe ingresar tanto su correo como contraseña para enviar sus datos");
            this.clear_current_component_inputs();
         };
      };
   }

   private inputs_are_not_empty(): boolean
   {
      return this.username_input.value.length > 0 && this.password_input.value.length > 0;
   }

   private clear_current_component_inputs(): void
   {
      this.username_input.value = "";
      this.password_input.value = "";
   }

   private remove_current_component_elements(): void
   {
      this.outer_container.innerHTML = "";
   }

   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   // Data submission methods
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////

   private async submit_credentials(): Promise<void>
   {
      this.generate_credentials_dataform();
      this.generate_session_data();

      if (this._session_data !== null)
      {
         this.credentials_validator = new session_start_credentials_validator(this._session_data);

         await this.credentials_validator.fetch_api();

         if (this.credentials_validator.response_json.veredict === "valid")
         {
            delete this.credentials_validator.response_json.veredict;
            const loosened_json_object_for_conversion: any = Object.values(this.credentials_validator.response_json);
            const loosened_json_object_as_room_type_array_interface: IRoom_types_data = loosened_json_object_for_conversion as IRoom_types_data;
            this.room_types_data = loosened_json_object_as_room_type_array_interface.room_types_array;
            console.log(loosened_json_object_for_conversion);

            this.remove_current_component_elements();
            this.generate_room_management_dashboard();
         }
         else
         {
            alert("Credenciales incorrectas");
            this.clear_current_component_inputs();
         };
      }
      else
      {
         alert("Session data is null at submit_credentials()");
      };
   }

   private generate_session_data(): void
   {
      this._session_data = new session_start_data
         (
            this.username_input.value,
            this.password_input.value,
            screen.availHeight.toString(),
            screen.availWidth.toString(),
            screen.colorDepth.toString(),
            screen.pixelDepth.toString(),
            navigator.language
         );
   }

   private generate_credentials_dataform(): void
   {
      this.credentials_dataform = new FormData();
      this.credentials_dataform.append("username", this.username_input.value);
      this.credentials_dataform.append("username", this.password_input.value);
   }

   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   // Component elements regeneration methods
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////

   private async generate_room_management_dashboard(): Promise<void>
   {
      console.log(this.room_types_data)
      this.room_types_data?.forEach(item => 
      {
         new RoomType(item);
      });
   }

   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   // Final setup stage methods
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////
   //////////////////////////////

   private append_main_heading_to_login_dashboard_container(): void
   {
      this.login_dashboard_container.appendChild(this.main_heading);
      this.login_dashboard_container.appendChild(this.secondary_heading);
   }

   private append_secondary_heading_to_login_dashboard_container(): void
   {
      this.username_label_and_input_container.appendChild(this.username_label);
      this.username_label_and_input_container.appendChild(this.username_input);
   }

   private append_elements_to_username_label_and_input_container(): void
   {
      this.username_label_and_input_container.appendChild(this.username_label);
      this.username_label_and_input_container.appendChild(this.username_input);
   }

   private append_elements_to_password_label_and_input_container(): void
   {
      this.password_label_and_input_container.appendChild(this.password_label);
      this.password_label_and_input_container.appendChild(this.password_input);
   }

   private append_all_elements_to_login_dashboard_container(): void
   {
      this.login_dashboard_container.appendChild(this.username_label_and_input_container);
      this.login_dashboard_container.appendChild(this.password_label_and_input_container);
      this.login_dashboard_container.appendChild(this.submit_button);
   }
}