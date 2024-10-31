export default class {
    constructor(data, secret) {
        this._type_properties_manager_container = document.createElement("div");
        this._room_name_input = document.createElement("input");
        this._type_id_input = document.createElement("input");
        this._pax_amount_input = document.createElement("input");
        this._decrement_amount_input = document.createElement("input");
        this._increment_amount_input = document.createElement("input");
        this._gross_price_input = document.createElement("input");
        this._net_price_input = document.createElement("input");
        this._capacity_input = document.createElement("input");
        this._capacity_with_pax_input = document.createElement("input");
        this._children_capacity_input = document.createElement("input");
        this._room_thumbnail_image_input = document.createElement("input");
        this._room_capacity_images_input = document.createElement("input");
        this._is_enabled_input = document.createElement("input");
        this._admits_pax_input = document.createElement("input");
        this._room_numbers_in_administration_input = document.createElement("textarea");
        this._room_services_input = document.createElement("textarea");
        this._room_images_input = document.createElement("textarea");
        this._room_icons_input = document.createElement("textarea");
        this._secret = "";
        this._room_name = data.room_name;
        this._type_id = data.type_id;
        this._room_numbers_in_administration = data.room_numbers_in_administration;
        this._is_enabled = data.is_enabled;
        this._admits_pax = data.admits_pax;
        this._pax_amount = data.pax_amount;
        this._decrement_amount = data.decrement_amount;
        this._increment_amount = data.increment_amount;
        this._gross_price = data.gross_price;
        this._net_price = data.net_price;
        this._capacity = data.capacity;
        this._capacity_with_pax = data.capacity_with_pax;
        this._children_capacity = data.children_capacity;
        this._room_services = data.room_services;
        this._room_images = data.room_images;
        this._room_thumbnail_image = data.room_thumbnail_image;
        this._room_capacity_images = data.room_capacity_images;
        this._room_icons = data.room_icons;
        this._secret = secret;
    }
    async update_registry() {
        const new_data = this._generate_new_data_object_for_json_file();
        await this._update_json_file_content(new_data);
        this._clearInputsValues();
        await this.generate_type_management_dashboard_reloading_data();
    }
    generate_type_management_dashboard() {
        this._type_properties_manager_container.innerHTML = "";
        this._type_properties_manager_container.id = "room_type_properties_container";
        this._type_properties_manager_container.className = "room_type_properties_container";
        const container_title = document.createElement("h3");
        container_title.innerHTML = this._room_name;
        container_title.id = this._room_name + "_" + "room_type_properties_container";
        container_title.className = "room_type_properties_container_title";
        const update_register_container = document.createElement("div");
        update_register_container.id = "update_register_button_container";
        update_register_container.className = "update_register_button_container";
        const update_register_button = document.createElement("button");
        update_register_button.innerHTML = "Actualizar registro";
        update_register_button.onpointerup = () => this.update_registry();
        update_register_container.appendChild(update_register_button);
        this._type_properties_manager_container.appendChild(container_title);
        this._type_properties_manager_container.appendChild(update_register_container);
        this._type_properties_manager_container.appendChild(this._generate_room_name_element());
        this._type_properties_manager_container.appendChild(this._generate_type_id_element());
        this._type_properties_manager_container.appendChild(this._generate_pax_ammount_element());
        this._type_properties_manager_container.appendChild(this._generate_decrement_amount_element());
        this._type_properties_manager_container.appendChild(this._generate_increment_amount_element());
        this._type_properties_manager_container.appendChild(this._generate_gross_price_element());
        this._type_properties_manager_container.appendChild(this._generate_net_price_element());
        this._type_properties_manager_container.appendChild(this._generate_capacity_element());
        this._type_properties_manager_container.appendChild(this._generate_capacity_with_pax_element());
        this._type_properties_manager_container.appendChild(this._generate_children_capacity_element());
        this._type_properties_manager_container.appendChild(this._generate_room_thumbnail_image_element());
        this._type_properties_manager_container.appendChild(this._generate_room_capacity_images_element());
        this._type_properties_manager_container.appendChild(this._generate_is_enabled_element());
        this._type_properties_manager_container.appendChild(this._generate_admits_pax_element());
        const textareas_container = document.createElement("div");
        textareas_container.className = "textareas_container";
        textareas_container.appendChild(this._generate_room_services_element());
        textareas_container.appendChild(this._generate_room_images_element());
        textareas_container.appendChild(this._generate_room_numbers_in_administration_element());
        textareas_container.appendChild(this._generate_room_icons_element());
        this._type_properties_manager_container.appendChild(textareas_container);
        return this._type_properties_manager_container;
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
        return raw_options_types_array_data_as_interfaces;
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
    async generate_type_management_dashboard_reloading_data() {
        const formData = new FormData();
        formData.append('secret', this._secret);
        const response = await fetch("../../_/api/room_data/_validation.php", {
            method: 'POST',
            body: formData
        });
        if (response.ok == false) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let raw_data = await response.json();
        const data_array = this._extract_room_type_array_from_raw_data_object(raw_data, this._secret);
        const data = data_array[parseInt(this._type_id) - 1];
        // console.log(data)
        this._room_name = data.room_name;
        this._type_id = data.type_id;
        this._room_numbers_in_administration = data.room_numbers_in_administration;
        this._is_enabled = data.is_enabled;
        this._admits_pax = data.admits_pax;
        this._pax_amount = data.pax_amount;
        this._decrement_amount = data.decrement_amount;
        this._increment_amount = data.increment_amount;
        this._gross_price = data.gross_price;
        this._net_price = data.net_price;
        this._capacity = data.capacity;
        this._capacity_with_pax = data.capacity_with_pax;
        this._children_capacity = data.children_capacity;
        this._room_services = data.room_services;
        this._room_images = data.room_images;
        this._room_thumbnail_image = data.room_thumbnail_image;
        this._room_capacity_images = data.room_capacity_images;
        this._room_icons = data.room_icons;
        this.generate_type_management_dashboard();
    }
    _clearInputsValues() {
        this._room_name_input.value = "";
        this._type_id_input.value = "";
        this._room_numbers_in_administration_input.innerHTML = "";
        this._is_enabled_input.checked = false;
        this._admits_pax_input.checked = false;
        this._pax_amount_input.value = "";
        this._decrement_amount_input.value = "";
        this._increment_amount_input.value = "";
        this._gross_price_input.value = "";
        this._net_price_input.value = "";
        this._capacity_input.value = "";
        this._capacity_with_pax_input.value = "";
        this._children_capacity_input.value = "";
        this._room_services_input.innerHTML = "";
        this._room_images_input.innerHTML = "";
        this._room_thumbnail_image_input.value = "";
        this._room_capacity_images_input.value = "";
        this._room_icons_input.innerHTML = "";
    }
    async _update_json_file_content(data) {
        const formData = new FormData();
        formData.append("room_name", this._room_name_input.value);
        formData.append("type_id", this._type_id_input.value);
        formData.append("pax_amount", this._pax_amount_input.value);
        formData.append("decrement_amount", this._decrement_amount_input.value);
        formData.append("increment_amount", this._increment_amount_input.value);
        formData.append("gross_price", this._gross_price_input.value);
        formData.append("net_price", this._net_price_input.value);
        formData.append("capacity", this._capacity_input.value);
        formData.append("capacity_with_pax", this._capacity_with_pax_input.value);
        formData.append("children_capacity", this._children_capacity_input.value);
        formData.append("room_thumbnail_image", this._room_thumbnail_image_input.value);
        formData.append("is_enabled", this._is_enabled_input.value);
        formData.append("admits_pax", this._admits_pax_input.value);
        formData.append("room_capacity_images", this._room_capacity_images_input.value);
        formData.append("room_numbers_in_administration", this._room_numbers_in_administration_input.value);
        formData.append("room_services", this._room_services_input.value);
        formData.append("room_images", this._room_images_input.value);
        formData.append("room_icons", this._room_icons_input.value);
        const response = await fetch("../../_/api/room_data/_update_room_type.php", {
            method: 'POST',
            body: formData
        });
        console.log(await response.text());
    }
    _generate_new_data_object_for_json_file() {
        const new_data = {
            "room_name": this._room_name_input.value,
            "type_id": this._type_id_input.value,
            "pax_amount": this._pax_amount_input.value,
            "decrement_amount": this._decrement_amount_input.value,
            "increment_amount": this._increment_amount_input.value,
            "gross_price": this._gross_price_input.value,
            "net_price": this._net_price_input.value,
            "capacity": this._capacity_input.value,
            "capacity_with_pax": this._capacity_with_pax_input.value,
            "children_capacity": this._children_capacity_input.value,
            "room_services": this._room_services_input.value,
            "room_capacity_images": this._room_capacity_images_input.value,
            "is_enabled": this._is_enabled_input.value,
            "admits_pax": this._admits_pax_input.value,
            "room_numbers_in_administration": this._room_numbers_in_administration_input.value,
            "room_images": this._room_images_input.value,
            "room_thumbnail_image": this._room_thumbnail_image_input.value,
            "room_icons": this._room_icons_input.value
        };
        return new_data;
    }
    _generate_room_name_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Nombre";
        this._room_name_input.value = this._room_name;
        container.appendChild(label);
        container.appendChild(this._room_name_input);
        return container;
    }
    _generate_type_id_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Id de tipo";
        this._type_id_input.value = this._type_id.toString();
        this._type_id_input.disabled = true;
        container.appendChild(label);
        container.appendChild(this._type_id_input);
        return container;
    }
    _generate_room_numbers_in_administration_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Identificadores";
        this._room_numbers_in_administration_input.disabled = true;
        this._room_numbers_in_administration.forEach(item => {
            this._room_numbers_in_administration_input.innerHTML += item + " |\n";
        });
        container.appendChild(label);
        container.appendChild(this._room_numbers_in_administration_input);
        return container;
    }
    _generate_is_enabled_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Habilitada";
        this._is_enabled_input.checked = this._is_enabled;
        this._is_enabled_input.type = "checkbox";
        container.appendChild(label);
        container.appendChild(this._is_enabled_input);
        return container;
    }
    _generate_admits_pax_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Admite pax";
        this._admits_pax_input.checked = this._admits_pax;
        this._admits_pax_input.type = "checkbox";
        container.appendChild(label);
        container.appendChild(this._admits_pax_input);
        return container;
    }
    _generate_pax_ammount_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Costo de pax";
        this._pax_amount_input.value = this._pax_amount.toString();
        container.appendChild(label);
        container.appendChild(this._pax_amount_input);
        return container;
    }
    _generate_decrement_amount_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Incremento (%)";
        this._decrement_amount_input.value = this._decrement_amount.toString();
        container.appendChild(label);
        container.appendChild(this._decrement_amount_input);
        return container;
    }
    _generate_increment_amount_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Descuento (%)";
        this._increment_amount_input.value = this._increment_amount.toString();
        container.appendChild(label);
        container.appendChild(this._increment_amount_input);
        return container;
    }
    _generate_gross_price_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Precio bruto";
        this._gross_price_input.value = this._gross_price.toString();
        container.appendChild(label);
        container.appendChild(this._gross_price_input);
        return container;
    }
    _generate_net_price_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Precio neto";
        this._net_price_input.value = this._net_price.toString();
        container.appendChild(label);
        container.appendChild(this._net_price_input);
        return container;
    }
    _generate_capacity_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Capacidad";
        this._capacity_input.value = this._capacity.toString();
        container.appendChild(label);
        container.appendChild(this._capacity_input);
        return container;
    }
    _generate_capacity_with_pax_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Capacidad con pax";
        this._capacity_with_pax_input.value = this._capacity_with_pax.toString();
        container.appendChild(label);
        container.appendChild(this._capacity_with_pax_input);
        return container;
    }
    _generate_children_capacity_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Capacidad de niños";
        this._children_capacity_input.value = this._children_capacity.toString();
        container.appendChild(label);
        container.appendChild(this._children_capacity_input);
        return container;
    }
    _generate_room_services_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Servicios";
        this._room_services_input.disabled = false;
        this._room_services.forEach(item => {
            this._room_services_input.innerHTML += item + " |\n";
        });
        container.appendChild(label);
        container.appendChild(this._room_services_input);
        return container;
    }
    _generate_room_images_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Imagenes";
        this._room_images_input.disabled = true;
        this._room_images.forEach(item => {
            this._room_images_input.innerHTML += item + " | \n\n";
        });
        container.appendChild(label);
        container.appendChild(this._room_images_input);
        return container;
    }
    _generate_room_thumbnail_image_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Imagen de muestra";
        this._room_thumbnail_image_input.value = this._room_thumbnail_image.toString();
        this._room_thumbnail_image_input.disabled = true;
        container.appendChild(label);
        container.appendChild(this._room_thumbnail_image_input);
        return container;
    }
    _generate_room_capacity_images_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Imagen de capacidad";
        this._room_capacity_images_input.value = this._room_capacity_images.toString();
        this._room_capacity_images_input.disabled = true;
        container.appendChild(label);
        container.appendChild(this._room_capacity_images_input);
        return container;
    }
    _generate_room_icons_element() {
        const container = document.createElement("div");
        container.className = "room_type_label_and_input_container";
        const label = document.createElement("label");
        label.innerHTML = "Iconos";
        this._room_icons_input.disabled = true;
        this._room_icons.forEach(item => {
            this._room_icons_input.innerHTML += item + " |\n";
        });
        container.appendChild(label);
        container.appendChild(this._room_icons_input);
        return container;
    }
}
//# sourceMappingURL=RoomType.js.map