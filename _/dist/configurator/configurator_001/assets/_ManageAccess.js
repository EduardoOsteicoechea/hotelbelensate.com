import RoomType from "./RoomType.js";
export default class {
    constructor(outer_container, authenticator_container, username_input, password_input_input, access_button) {
        this._outer_container = outer_container;
        this._authenticator_container = authenticator_container;
        this._username_input = username_input;
        this._password_input_input = password_input_input;
        this._access_button = access_button;
        this._username_input.addEventListener("input", () => {
            this._constrain_input(this._username_input);
        });
        this._password_input_input.addEventListener("input", () => {
            this._constrain_input(this._password_input_input);
        });
        this._setup_validation();
    }
    _constrain_input(input) {
        if (input.value != "" && input.value.length > 8) {
            input.value = input.value.substring(0, 7);
        }
        const forbiddenCharacters = ["<", ">", ",", "/", "\\", "$", "%", "&", "(", ")", "{", "}", "[", "]", "?", "¿"];
        if (input.value != "") {
            forbiddenCharacters.forEach(character => {
                if (input.value.includes(character)) {
                    alert(`El caracter "${character}" no es permitido.`);
                    input.value = input.value.substring(0, input.value.length - 1);
                }
            });
        }
    }
    _setup_validation() {
        this._access_button.addEventListener("pointerup", () => {
            this._validate_data();
        });
    }
    async _validate_data() {
        try {
            const formData = new FormData();
            formData.append('username', this._username_input.value);
            formData.append('password', this._password_input_input.value);
            const response = await fetch("../../_/api/room_data/_validation.php", {
                method: 'POST',
                body: formData
            });
            if (response.ok == false) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data !== "") {
                this._outer_container.innerHTML = "";
                this._outer_container.appendChild(this.generate_rooms_management_dashboard(data));
            }
            else {
                alert('Nombre o contraseña incorrectos.');
            }
        }
        catch (error) {
            console.error(error);
            alert('An error occurred. Please try again later.');
        }
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