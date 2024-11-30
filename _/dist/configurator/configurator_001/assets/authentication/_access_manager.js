// called from "../_.ts";
import session_resume_credentials_validator from "./session_resume_credentials_validator.js";
import session_resume_data from "./session_resume_data.js";
export default class access_manager {
    constructor(root_folder, page_name, component_id, component_class_name, outer_container) {
        this._session_data = null;
        this._credentials_validator = null;
        this._session_data_credentials_validation_result = false;
        this._authenticator_container = document.createElement("div");
        this._username_label = document.createElement("label");
        this._username_input = document.createElement("input");
        this._password_input_label = document.createElement("label");
        this._password_input_input = document.createElement("input");
        this._access_button = document.createElement("button");
        this._mnfrwk_cookie = [];
        this._root_folder = root_folder;
        this._page_name = page_name;
        this._component_id = component_id;
        this._component_class_name = component_class_name;
        this._outer_container = outer_container;
    }
    async validate_session_or_generate_login_dashboard() {
        if (await this.session_is_active()) {
            this.generate_rooms_management_dashboard();
        }
        else {
            this.generate_login_dashboard();
        }
        ;
    }
    async session_is_active() {
        this.generate_session_data();
        await this.validate_session_data_credentials();
        return this._session_data_credentials_validation_result;
    }
    generate_session_data() {
        this._session_data = new session_resume_data(screen.availHeight.toString(), screen.availWidth.toString(), screen.colorDepth.toString(), screen.pixelDepth.toString(), navigator.language, this._mnfrwk_cookie[1], "manage_rooms_data");
    }
    async validate_session_data_credentials() {
        if (this._session_data !== null) {
            this._credentials_validator = new session_resume_credentials_validator(this._session_data);
            await this._credentials_validator.fetch_api();
            if (this._credentials_validator.response_json.veredict === "valid") {
                this._session_data_credentials_validation_result = true;
            }
            else {
                this._session_data_credentials_validation_result = false;
            }
            ;
        }
        ;
    }
    generate_login_dashboard() {
        alert("Generating login dashboard");
    }
    generate_rooms_management_dashboard() {
        alert("Generating management dashboard");
    }
}
//# sourceMappingURL=_access_manager.js.map