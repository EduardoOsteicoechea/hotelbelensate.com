"use strict";
// import session_resume_credentials_validator from "./authentication/session_resume_credentials_validator.js";
// import session_resume_data from "./authentication/session_resume_data.js";
// import session_start_credentials_validator from "./authentication/session_start_credentials_validator.js";
// import session_start_data from "./authentication/session_start_data.js";
// import IRoomType from "./IRoomType.js";
// import constrain_input from "./miscellaneous/constrain_input.js";
// import RoomType from "./RoomType.js";
// export default class
// {
//    _outer_container: HTMLDivElement
//    _authenticator_container: HTMLDivElement
//    _username_input: HTMLInputElement
//    _password_input_input: HTMLInputElement
//    _access_button: HTMLButtonElement
//    _mnfrwk_cookie: string[] = []
//    constructor
//    (
//       outer_container: HTMLDivElement,
//       authenticator_container: HTMLDivElement,
//       username_input: HTMLInputElement,
//       password_input_input: HTMLInputElement,
//       access_button: HTMLButtonElement
//    )
//    {
//       this._outer_container = outer_container;
//       this._authenticator_container = authenticator_container;
//       this._username_input = username_input;
//       this._password_input_input = password_input_input;
//       this._access_button = access_button;
//       if (this.mnfrwk_cookie_is_set())
//       {
//          this._mnfrwk_cookie = this.get_mnfrwk_cookie(this.get_browser_cookies());
//          // console.log(this._mnfrwk_cookie);
//          this._validate_active_session_data()
//       }
//       else
//       {
//          this.focus_usermane_input();
//          this.constrain_input_input_on_input(this._username_input, 8);
//          this.constrain_input_input_on_input(this._password_input_input, 8);
//          this.setup_validation();
//       };
//    }
//    private mnfrwk_cookie_is_set(): boolean
//    {
//       const current_browser_cookies_object: any = this.get_browser_cookies();
//       if (current_browser_cookies_object.hasOwnProperty("MNFRWK_USER_SESSION_TOKEN"))
//       {
//          return true;
//       };
//       return false;
//    }
//    private get_browser_cookies(): object
//    {
//       const current_browser_cookies: string = document.cookie;
//       const current_browser_cookies_array: string[] = current_browser_cookies.split(';');
//       const current_browser_cookies_object: any = {};
//       current_browser_cookies_array.forEach(cookie =>
//       {
//          const [name, value] = cookie.split('=');
//          current_browser_cookies_object[name.trim()] = value.trim();
//       });
//       return current_browser_cookies_object;
//    }
//    private get_mnfrwk_cookie(cookies_object: any): string[]
//    {
//       const mnfrwk_cookie_value: string = cookies_object["MNFRWK_USER_SESSION_TOKEN"];
//       const mnfrwk_cookie: string[] = ["MNFRWK_USER_SESSION_TOKEN", mnfrwk_cookie_value];
//       return mnfrwk_cookie;
//    }
//    private focus_usermane_input(): void
//    {
//       this._username_input.focus();
//    }
//    private constrain_input_input_on_input
//       (
//          input: HTMLInputElement,
//          character_limit: number
//       ): void
//    {
//       input.addEventListener("input", () =>
//       {
//          new constrain_input(input, character_limit);
//       });
//    }
//    private setup_validation(): void
//    {
//       this.validate_inputs_on_pointerup_event(this._access_button);
//    }
//    private validate_inputs_on_pointerup_event(button: HTMLButtonElement): void
//    {
//       button.onkeyup = (event) =>
//       {
//          if (event.key === 'Enter')
//          {
//             this._validate_data();
//          }
//       };
//       button.onpointerup = () => this._validate_data();
//    }
//    private async _validate_active_session_data(): Promise<void>
//    {
//       const session_data: session_resume_data = new session_resume_data
//       (
//          screen.availHeight.toString(),
//          screen.availWidth.toString(),
//          screen.colorDepth.toString(),
//          screen.pixelDepth.toString(),
//          navigator.language,
//          this._mnfrwk_cookie[1],
//          "manage_rooms_data"
//       );
//       const credentials_validator: session_resume_credentials_validator = new session_resume_credentials_validator(
//          session_data
//       );
//       await credentials_validator.fetch_api();
//       if 
//       (
//          credentials_validator.response_json != "invalid_credentials"
//             &&
//          credentials_validator.response_json.ok === undefined    
//       )
//       {
//          this._outer_container.innerHTML = "";
//          this._outer_container.appendChild(
//             this.generate_rooms_management_dashboard(
//                credentials_validator.response_json
//             )
//          );
//       };
//    }
//    private async _validate_data(): Promise<void>
//    {
//       const session_data: session_start_data = new session_start_data(
//          this._username_input.value,
//          this._password_input_input.value,
//          screen.availHeight.toString(),
//          screen.availWidth.toString(),
//          screen.colorDepth.toString(),
//          screen.pixelDepth.toString(),
//          navigator.language,
//          document.cookie
//       );
//       const credentials_validator: session_start_credentials_validator = 
//          new session_start_credentials_validator(
//             session_data
//          );
//       // console.log(session_data);
//       await credentials_validator.fetch_api();
//       if (credentials_validator.response_json != "invalid_credentials")
//       {
//          this._outer_container.innerHTML = "";
//          this._outer_container.appendChild(
//             this.generate_rooms_management_dashboard(credentials_validator.response_json)
//          );
//       };
//    }
//    ////////////////////////////
//    ////////////////////////////
//    ////////////////////////////
//    ////////////////////////////
//    // Generate dashboard
//    ////////////////////////////
//    ////////////////////////////
//    ////////////////////////////
//    ////////////////////////////
//    private generate_rooms_management_dashboard(data: object): HTMLDivElement
//    {
//       const secret = this._extract_secret_from_raw_data_object(data)
//       const room_types_array: RoomType[] = this._extract_room_type_array_from_raw_data_object(data, secret)
//       // console.log(room_types_array)
//       const dashboard = document.createElement("div")
//       dashboard.id = "room_management_dashboard"
//       dashboard.className = "room_management_dashboard"
//       // dashboard.appendChild(this._generate_management_dashboard_head(secret))
//       room_types_array.forEach(room_type =>
//       {
//          dashboard.appendChild(room_type.generate_type_management_dashboard())
//       });
//       return dashboard
//    }
//    // private _generate_management_dashboard_head(secret: string): HTMLDivElement
//    // {
//    //    const container: HTMLDivElement = document.createElement("div")
//    //    container.appendChild(this._generate_restore_defaults_button(secret))
//    //    return container
//    // }
//    private _generate_restore_defaults_button(secret: string): HTMLDivElement
//    {
//       const button: HTMLDivElement = document.createElement("div")
//       button.onpointerup = async () =>
//       {
//          const formData = new FormData()
//          formData.append('secret', secret)
//          const response = await fetch("../../_/api/room_data/_restore_all.php", {
//             method: 'POST',
//             body: formData
//          })
//          if (response.ok == false)
//          {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//          }
//          let data = await response.json()
//          this._outer_container.innerHTML = "";
//          this._outer_container.appendChild(this.generate_rooms_management_dashboard(data))
//       }
//       return button
//    }
//    private _extract_secret_from_raw_data_object(data: object): string
//    {
//       const raw_options_array_without_keys: any[] = this._extract_raw_options_array_without_keys(
//          data
//       )
//       const secret: string = raw_options_array_without_keys[0].secret
//       return secret
//    }
//    private _extract_room_type_array_from_raw_data_object(data: object, secret: string): RoomType[]
//    {
//       const raw_options_array_without_keys: any[] = this._extract_raw_options_array_without_keys(
//          data
//       )
//       const raw_options_array_without_subobjects_keys: any[] = this._extract_raw_options_types_raw_data_array(
//          raw_options_array_without_keys
//       )
//       const raw_options_types_raw_data_array: object[] = this._extract_raw_options_array_without_subobjects_keys(
//          raw_options_array_without_subobjects_keys
//       )
//       const raw_options_types_array_data_as_interfaces: IRoomType[] = this._extract_raw_options_types_array_data_as_interfaces(
//          raw_options_types_raw_data_array
//       )
//       const type_array: RoomType[] = this._extract_type_array(
//          raw_options_types_array_data_as_interfaces,
//          secret
//       )
//       return type_array
//    }
//    private _extract_raw_options_array_without_keys(data: object): any[]
//    {
//       const raw_options_array_without_keys: any[] = Object.values(data)
//       return raw_options_array_without_keys
//    }
//    private _extract_raw_options_types_raw_data_array(data: any[]): any[]
//    {
//       const raw_options_array_without_subobjects_keys: any[] = []
//       data.forEach(raw_option_array_without_keys =>
//       {
//          raw_options_array_without_subobjects_keys.push(Object.values(raw_option_array_without_keys));
//       })
//       return raw_options_array_without_subobjects_keys
//    }
//    private _extract_raw_options_array_without_subobjects_keys(data: any[]): object[]
//    {
//       const raw_options_types_raw_data_array: object[] = []
//       data.forEach(raw_option_array_without_subobjects_keys =>
//       {
//          raw_options_types_raw_data_array.push(raw_option_array_without_subobjects_keys[0])
//       })
//       return raw_options_types_raw_data_array
//    }
//    private _extract_raw_options_types_array_data_as_interfaces(data: object[]): IRoomType[]
//    {
//       const raw_options_types_array_data_as_interfaces: IRoomType[] = []
//       data.forEach(raw_option_type_raw_data_array =>
//       {
//          raw_options_types_array_data_as_interfaces.push(raw_option_type_raw_data_array as IRoomType);
//       })
//       return raw_options_types_array_data_as_interfaces
//    }
//    private _extract_type_array(data: IRoomType[], secret: string): RoomType[]
//    {
//       const type_array: RoomType[] = []
//       data.forEach(raw_option_type_array_data_as_interface =>
//       {
//          type_array.push(new RoomType(
//             raw_option_type_array_data_as_interface,
//             secret
//          ));
//       })
//       return type_array
//    }
// }
//# sourceMappingURL=_ManageAccess%20copy%202.js.map