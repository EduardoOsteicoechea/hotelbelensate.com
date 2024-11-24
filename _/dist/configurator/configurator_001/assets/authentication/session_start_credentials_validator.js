export default class session_start_credentials_validator {
    constructor(login_data) {
        this.response = new Response();
        this.form_data = new FormData();
        // api_route: string = "../../_/api/room_data/_validation.php";
        // response_json: any = "../../_/api/room_data/_validation.php";
        this.api_route = "../../_/api/authentication/_.php";
        this.response_json = "../../_/api/authentication/_.php";
        this.user_email = login_data.user_email;
        this.password = login_data.password;
        this.screen_available_height = login_data.screen_available_height;
        this.screen_available_width = login_data.screen_available_width;
        this.screen_color_depth = login_data.screen_color_depth;
        this.screen_pixel_depth = login_data.screen_pixel_depth;
        this.navigator_language = login_data.navigator_language;
        this.cookie_data = login_data.cookie_data;
        this.generate_form_data();
    }
    async fetch_api() {
        this.response = await this.get_api_respose();
        if (this.response_has_error()) {
            this.generate_response_error_alert();
        }
        else {
            this.response_json = await this.response.json();
            console.log(this.response_json);
            return this.return_response_json_as_interface();
        }
        ;
    }
    get_api_respose() {
        return fetch(this.api_route, {
            method: 'POST',
            body: this.form_data,
            mode: 'no-cors'
        });
    }
    generate_form_data() {
        this.form_data.append('username', this.user_email);
        this.form_data.append('password', this.password);
        this.form_data.append('screen_available_height', this.screen_available_height);
        this.form_data.append('screen_available_width', this.screen_available_width);
        this.form_data.append('screen_color_depth', this.screen_color_depth);
        this.form_data.append('screen_pixel_depth', this.screen_pixel_depth);
        this.form_data.append('navigator_language', this.navigator_language);
        this.form_data.append('cookie_data', this.cookie_data);
    }
    response_has_error() {
        return this.response.ok === false;
    }
    generate_response_error_alert() {
        alert(`
         Error: "${this.response.status}".
         At: generate_response_error_alert()
         `);
    }
    return_response_json_as_interface() {
        return this.response_json;
    }
}
//# sourceMappingURL=session_start_credentials_validator.js.map