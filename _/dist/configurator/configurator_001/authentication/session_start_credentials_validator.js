export default class session_start_credentials_validator {
    constructor(login_data) {
        this.response = null;
        this.form_data = null;
        this.api_route = "../../_/api/authentication/_.php";
        this.response_json = {};
        this.user_email = login_data.user_email;
        this.password = login_data.password;
        this.screen_available_height = login_data.screen_available_height;
        this.screen_available_width = login_data.screen_available_width;
        this.screen_color_depth = login_data.screen_color_depth;
        this.screen_pixel_depth = login_data.screen_pixel_depth;
        this.navigator_language = login_data.navigator_language;
        this.generate_form_data();
    }
    generate_form_data() {
        this.form_data = new FormData();
        this.form_data.append('username', this.user_email);
        this.form_data.append('password', this.password);
        this.form_data.append('screen_available_height', this.screen_available_height);
        this.form_data.append('screen_available_width', this.screen_available_width);
        this.form_data.append('screen_color_depth', this.screen_color_depth);
        this.form_data.append('screen_pixel_depth', this.screen_pixel_depth);
        this.form_data.append('navigator_language', this.navigator_language);
    }
    async fetch_api() {
        this.response = await this.get_api_respose();
        if (this.response_has_error()) {
            this.generate_response_error_alert();
        }
        else {
            this.response_json = await this.response.json();
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
    response_has_error() {
        if (this.response !== null) {
            return this.response.status !== 200;
        }
        ;
        return true;
    }
    async generate_response_error_alert() {
        if (this.response !== null) {
            const response_json = await this.response.json();
            alert(`
            At: "generate_response_error_alert()"
            Error: "${response_json.error}".
         `);
        }
        else {
            alert(`
            At: "generate_response_error_alert()"
            Error: Null Response object
         `);
        }
        ;
    }
}
//# sourceMappingURL=session_start_credentials_validator.js.map