import session_resume_credentials_validator from "./authentication/session_resume_credentials_validator.js";
import session_resume_data from "./authentication/session_resume_data.js";
import session_start_credentials_validator from "./authentication/session_start_credentials_validator.js";
import session_start_data from "./authentication/session_start_data.js";
import constrain_input from "./miscellaneous/constrain_input.js";
import RoomType from "./RoomType.js";
export default class {
    constructor(outer_container, authenticator_container, username_input, password_input_input, access_button) {
        this._mnfrwk_cookie = [];
        this._outer_container = outer_container;
        this._authenticator_container = authenticator_container;
        this._username_input = username_input;
        this._password_input_input = password_input_input;
        this._access_button = access_button;
        if (this.mnfrwk_cookie_is_set()) {
            this._mnfrwk_cookie = this.get_mnfrwk_cookie(this.get_browser_cookies());
            console.log(this._mnfrwk_cookie);
            this._validate_active_session_data();
        }
        else {
            this.focus_usermane_input();
            this.constrain_input_input_on_input(this._username_input, 8);
            this.constrain_input_input_on_input(this._password_input_input, 8);
            this.setup_validation();
        }
        ;
    }
    mnfrwk_cookie_is_set() {
        const current_browser_cookies_object = this.get_browser_cookies();
        if (current_browser_cookies_object.hasOwnProperty("MNFRWK_USER_SESSION_TOKEN")) {
            return true;
        }
        ;
        return false;
    }
    get_browser_cookies() {
        const current_browser_cookies = document.cookie;
        const current_browser_cookies_array = current_browser_cookies.split(';');
        const current_browser_cookies_object = {};
        current_browser_cookies_array.forEach(cookie => {
            const [name, value] = cookie.split('=');
            current_browser_cookies_object[name.trim()] = value.trim();
        });
        return current_browser_cookies_object;
    }
    get_mnfrwk_cookie(cookies_object) {
        const mnfrwk_cookie_value = cookies_object["MNFRWK_USER_SESSION_TOKEN"];
        const mnfrwk_cookie = ["MNFRWK_USER_SESSION_TOKEN", mnfrwk_cookie_value];
        return mnfrwk_cookie;
    }
    focus_usermane_input() {
        this._username_input.focus();
    }
    constrain_input_input_on_input(input, character_limit) {
        input.addEventListener("input", () => {
            new constrain_input(input, character_limit);
        });
    }
    setup_validation() {
        this.validate_inputs_on_pointerup_event(this._access_button);
    }
    validate_inputs_on_pointerup_event(button) {
        button.onkeyup = (event) => {
            if (event.key === 'Enter') {
                this._validate_data();
            }
        };
        button.onpointerup = () => this._validate_data();
    }
    async _validate_active_session_data() {
        const session_data = new session_resume_data(screen.availHeight.toString(), screen.availWidth.toString(), screen.colorDepth.toString(), screen.pixelDepth.toString(), navigator.language, this._mnfrwk_cookie[1], "manage_rooms_data");
        const credentials_validator = new session_resume_credentials_validator(session_data);
        await credentials_validator.fetch_api();
        if (credentials_validator.response_json != "invalid_credentials"
            &&
                credentials_validator.response_json.ok === undefined) {
            this._outer_container.innerHTML = "";
            this._outer_container.appendChild(this.generate_rooms_management_dashboard(credentials_validator.response_json));
        }
        ;
    }
    async _validate_data() {
        const session_data = new session_start_data(this._username_input.value, this._password_input_input.value, screen.availHeight.toString(), screen.availWidth.toString(), screen.colorDepth.toString(), screen.pixelDepth.toString(), navigator.language, document.cookie);
        const credentials_validator = new session_start_credentials_validator(session_data);
        // console.log(session_data);
        await credentials_validator.fetch_api();
        if (credentials_validator.response_json != "invalid_credentials") {
            this._outer_container.innerHTML = "";
            this._outer_container.appendChild(this.generate_rooms_management_dashboard(credentials_validator.response_json));
        }
        ;
    }
    generate_rooms_management_dashboard(data) {
        const secret = this._extract_secret_from_raw_data_object(data);
        const room_types_array = this._extract_room_type_array_from_raw_data_object(data, secret);
        // console.log(room_types_array)
        const dashboard = document.createElement("div");
        dashboard.id = "room_management_dashboard";
        dashboard.className = "room_management_dashboard";
        // dashboard.appendChild(this._generate_management_dashboard_head(secret))
        room_types_array.forEach(room_type => {
            dashboard.appendChild(room_type.generate_type_management_dashboard());
        });
        return dashboard;
    }
    _generate_management_dashboard_head(secret) {
        const container = document.createElement("div");
        container.appendChild(this._generate_restore_defaults_button(secret));
        return container;
    }
    _generate_restore_defaults_button(secret) {
        const button = document.createElement("div");
        button.onpointerup = async () => {
            const formData = new FormData();
            formData.append('secret', secret);
            const response = await fetch("../../_/api/room_data/_restore_all.php", {
                method: 'POST',
                body: formData
            });
            if (response.ok == false) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            this._outer_container.innerHTML = "";
            this._outer_container.appendChild(this.generate_rooms_management_dashboard(data));
        };
        return button;
    }
    _extract_secret_from_raw_data_object(data) {
        const raw_options_array_without_keys = this._extract_raw_options_array_without_keys(data);
        const secret = raw_options_array_without_keys[0].secret;
        return secret;
    }
    _extract_room_type_array_from_raw_data_object(data, secret) {
        const raw_options_array_without_keys = this._extract_raw_options_array_without_keys(data);
        const raw_options_array_without_subobjects_keys = this._extract_raw_options_types_raw_data_array(raw_options_array_without_keys);
        const raw_options_types_raw_data_array = this._extract_raw_options_array_without_subobjects_keys(raw_options_array_without_subobjects_keys);
        const raw_options_types_array_data_as_interfaces = this._extract_raw_options_types_array_data_as_interfaces(raw_options_types_raw_data_array);
        const type_array = this._extract_type_array(raw_options_types_array_data_as_interfaces, secret);
        return type_array;
    }
    _extract_raw_options_array_without_keys(data) {
        const raw_options_array_without_keys = Object.values(data);
        return raw_options_array_without_keys;
    }
    _extract_raw_options_types_raw_data_array(data) {
        const raw_options_array_without_subobjects_keys = [];
        data.forEach(raw_option_array_without_keys => {
            raw_options_array_without_subobjects_keys.push(Object.values(raw_option_array_without_keys));
        });
        return raw_options_array_without_subobjects_keys;
    }
    _extract_raw_options_array_without_subobjects_keys(data) {
        const raw_options_types_raw_data_array = [];
        data.forEach(raw_option_array_without_subobjects_keys => {
            raw_options_types_raw_data_array.push(raw_option_array_without_subobjects_keys[0]);
        });
        return raw_options_types_raw_data_array;
    }
    _extract_raw_options_types_array_data_as_interfaces(data) {
        const raw_options_types_array_data_as_interfaces = [];
        data.forEach(raw_option_type_raw_data_array => {
            raw_options_types_array_data_as_interfaces.push(raw_option_type_raw_data_array);
        });
        return raw_options_types_array_data_as_interfaces;
    }
    _extract_type_array(data, secret) {
        const type_array = [];
        data.forEach(raw_option_type_array_data_as_interface => {
            type_array.push(new RoomType(raw_option_type_array_data_as_interface, secret));
        });
        return type_array;
    }
}
//# sourceMappingURL=_ManageAccess.js.map