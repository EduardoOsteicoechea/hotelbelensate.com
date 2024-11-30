import IRoom_types_data from "../data_model/IRoom_types_data.js";
import session_start_data from "./session_start_data.js";

export default class session_start_credentials_validator
{
   user_email: string
   password: string
   screen_available_height: string
   screen_available_width: string
   screen_color_depth: string
   screen_pixel_depth: string
   navigator_language: string
   response: Response | null = null;
   form_data: FormData | null = null;
   api_route: string = "../../_/api/authentication/_.php";
   response_json: any = {};

   public constructor
   (
      login_data: session_start_data
   )
   {
      this.user_email = login_data.user_email;
      this.password = login_data.password;
      this.screen_available_height = login_data.screen_available_height;
      this.screen_available_width = login_data.screen_available_width;
      this.screen_color_depth = login_data.screen_color_depth;
      this.screen_pixel_depth = login_data.screen_pixel_depth;
      this.navigator_language = login_data.navigator_language;
      this.generate_form_data();
   }

   private generate_form_data(): void
   {
      this.form_data = new FormData();
      this.form_data.append('username', this.user_email);
      this.form_data.append('password', this.password);
      this.form_data.append('screen_available_height', this.screen_available_height);
      this.form_data.append('screen_available_width', this.screen_available_width);
      this.form_data.append('screen_color_depth', this.screen_color_depth);
      this.form_data.append('screen_pixel_depth', this.screen_pixel_depth);
      this.form_data.append('navigator_language', this.navigator_language);
   }

   public async fetch_api(): Promise<void | any>
   {
      this.response = await this.get_api_respose();

      if (this.response_has_error())
      {
         this.generate_response_error_alert();
      }
      else
      {
         this.response_json = await this.response.json();
      };
   }

   private get_api_respose(): Promise<Response>
   {
      return fetch(
         this.api_route,
         {
            method: 'POST',
            body: this.form_data,
            mode: 'no-cors'
         }
      );
   }

   private response_has_error(): boolean
   {
      if (this.response !== null)
      {
         return this.response.status !== 200;
      };
      return true;
   }

   private async generate_response_error_alert(): Promise<void>
   {
      if (this.response !== null)
      {
         const response_json = await this.response.json();

         alert(`
            At: "generate_response_error_alert()"
            Error: "${response_json.error}".
         `);
      }
      else
      {
         alert(`
            At: "generate_response_error_alert()"
            Error: Null Response object
         `);
      };
   }
}