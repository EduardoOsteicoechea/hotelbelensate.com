export default class {
    constructor(data) {
        this._room_unit_controls_container = document.createElement("div");
        this._room_unit_controls_container_title_and_buttons_container = document.createElement("div");
        this._room_unit_controls_container_title = document.createElement("h2");
        this._room_unit_controls_container_hide_units_button = document.createElement("button");
        this._room_unit_controls_container_update_units_button = document.createElement("button");
        this._room_name_input = document.createElement("input");
        this._id_input = document.createElement("input");
        this._is_enabled_input = document.createElement("input");
        this._location_input = document.createElement("input");
        this._pax_amount_input = document.createElement("input");
        this._decrement_input = document.createElement("input");
        this._increment_input = document.createElement("input");
        this._reserved_dates_inputs_container = document.createElement("div");
        this._added_values_inputs_container = document.createElement("div");
        this._aditional_services_inputs_container = document.createElement("div");
        this._room_name_input_label = document.createElement("label");
        this._id_input_label = document.createElement("label");
        this._is_enabled_input_label = document.createElement("label");
        this._location_input_label = document.createElement("label");
        this._pax_amount_input_label = document.createElement("label");
        this._decrement_input_label = document.createElement("label");
        this._increment_input_label = document.createElement("label");
        this._reserved_dates_inputs_container_label = document.createElement("label");
        this._added_values_inputs_container_label = document.createElement("label");
        this._aditional_services_inputs_container_label = document.createElement("label");
        this._room_name_input_container = document.createElement("div");
        this._id_input_container = document.createElement("div");
        this._is_enabled_input_container = document.createElement("div");
        this._location_input_container = document.createElement("div");
        this._pax_amount_input_container = document.createElement("div");
        this._decrement_input_container = document.createElement("div");
        this._increment_input_container = document.createElement("div");
        this._reserved_dates_inputs_container_container = document.createElement("div");
        this._added_values_inputs_container_container = document.createElement("div");
        this._aditional_services_inputs_container_container = document.createElement("div");
        this._room_name = data.room_name ?? "";
        this._id = data.id ?? "";
        this._is_enabled = data.is_enabled ?? true;
        this._location = data.location ?? "";
        this._pax_amount = data.pax_amount ?? 0;
        this._decrement = data.decrement ?? 1;
        this._increment = data.increment ?? 1;
        this._reserved_dates = data.reserved_dates ?? [];
        this._added_values = data.added_values ?? [];
        this._aditional_services = data.aditional_services ?? [];
        this._parameterize_room_unit_header_elements();
        this._populate_room_unit_header_elements();
        this._parameterize_room_unit_controls();
        this._populate_room_unit_controls();
        this._populate_room_unit_controls_labels();
        this._populate_room_unit_controls_container();
    }
    print_html_elements() {
        return this._room_unit_controls_container;
    }
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    // Type Units parameterization section
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    _parameterize_room_unit_controls() {
        this._parameterize_room_name_input();
        this._parameterize_id_input();
        this._parameterize_is_enabled_input();
        this._parameterize_location_input();
        this._parameterize_pax_amount_input();
        this._parameterize_decrement_input();
        this._parameterize_increment_input();
        this._parameterize_reserved_dates_input();
        this._parameterize_added_values_input();
        this._parameterize_aditional_services_input();
    }
    _parameterize_room_unit_header_elements() {
        this._room_unit_controls_container_title.innerHTML = "Unidades";
        this._room_unit_controls_container_hide_units_button.onpointerup = () => {
            this._room_unit_controls_container.innerHTML = "";
        };
        this._room_unit_controls_container_update_units_button;
        this._room_unit_controls_container_title_and_buttons_container.className = "room_type_units_controls_header";
    }
    _parameterize_room_name_input() {
    }
    _parameterize_id_input() {
    }
    _parameterize_is_enabled_input() {
        this._is_enabled_input.setAttribute("type", "checkbox");
    }
    _parameterize_location_input() {
    }
    _parameterize_pax_amount_input() {
    }
    _parameterize_decrement_input() {
    }
    _parameterize_increment_input() {
    }
    _parameterize_reserved_dates_input() {
        this._reserved_dates_inputs_container.className = "room_type_unit_input_group_container";
    }
    _parameterize_added_values_input() {
        this._added_values_inputs_container.className = "room_type_unit_input_group_container";
    }
    _parameterize_aditional_services_input() {
        this._aditional_services_inputs_container.className = "room_type_unit_input_group_container";
    }
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    // Type Units population section
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    _populate_room_unit_header_elements() {
        this._room_unit_controls_container_title.innerHTML = "Unidades";
        this._room_unit_controls_container_hide_units_button.innerHTML = "Ocultar Unidades";
        this._room_unit_controls_container_update_units_button.innerHTML = "Actualizar Unidades";
    }
    _populate_room_unit_controls_container() {
        this._append_room_unit_controls_header_to_main_container();
        this._append_room_unit_controls_items_to_corresponding_container();
        this._append_room_unit_controls_items_containers_to_main_container();
    }
    _append_room_unit_controls_header_to_main_container() {
        this._room_unit_controls_container_title_and_buttons_container.appendChild(this._room_unit_controls_container_title);
        this._room_unit_controls_container_title_and_buttons_container.appendChild(this._room_unit_controls_container_hide_units_button);
        this._room_unit_controls_container_title_and_buttons_container.appendChild(this._room_unit_controls_container_update_units_button);
        this._room_unit_controls_container.appendChild(this._room_unit_controls_container_title_and_buttons_container);
    }
    _append_room_unit_controls_items_to_corresponding_container() {
        this._room_name_input_container.appendChild(this._room_name_input_label);
        this._room_name_input_container.appendChild(this._room_name_input);
        this._id_input_container.appendChild(this._id_input_label);
        this._id_input_container.appendChild(this._id_input);
        this._is_enabled_input_container.appendChild(this._is_enabled_input_label);
        this._is_enabled_input_container.appendChild(this._is_enabled_input);
        this._location_input_container.appendChild(this._location_input_label);
        this._location_input_container.appendChild(this._location_input);
        this._pax_amount_input_container.appendChild(this._pax_amount_input_label);
        this._pax_amount_input_container.appendChild(this._pax_amount_input);
        this._decrement_input_container.appendChild(this._decrement_input_label);
        this._decrement_input_container.appendChild(this._decrement_input);
        this._increment_input_container.appendChild(this._increment_input_label);
        this._increment_input_container.appendChild(this._increment_input);
        this._reserved_dates_inputs_container_container.appendChild(this._reserved_dates_inputs_container_label);
        this._reserved_dates_inputs_container_container.appendChild(this._reserved_dates_inputs_container);
        this._added_values_inputs_container_container.appendChild(this._added_values_inputs_container_label);
        this._added_values_inputs_container_container.appendChild(this._added_values_inputs_container);
        this._aditional_services_inputs_container_container.appendChild(this._aditional_services_inputs_container_label);
        this._aditional_services_inputs_container_container.appendChild(this._aditional_services_inputs_container);
    }
    _append_room_unit_controls_items_containers_to_main_container() {
        this._room_unit_controls_container.appendChild(this._room_name_input_container);
        this._room_unit_controls_container.appendChild(this._id_input_container);
        this._room_unit_controls_container.appendChild(this._is_enabled_input_container);
        this._room_unit_controls_container.appendChild(this._location_input_container);
        this._room_unit_controls_container.appendChild(this._pax_amount_input_container);
        this._room_unit_controls_container.appendChild(this._decrement_input_container);
        this._room_unit_controls_container.appendChild(this._increment_input_container);
        this._room_unit_controls_container.appendChild(this._reserved_dates_inputs_container_container);
        this._room_unit_controls_container.appendChild(this._added_values_inputs_container_container);
        this._room_unit_controls_container.appendChild(this._aditional_services_inputs_container_container);
    }
    _populate_room_unit_controls() {
        this._populate_room_name_input();
        this._populate_id_input();
        this._populate_is_enabled_input();
        this._populate_location_input();
        this._populate_pax_amount_input();
        this._populate_decrement_input();
        this._populate_increment_input();
        this._populate_reserved_dates_input();
        this._populate_added_values_input();
        this._populate_aditional_services_input();
    }
    _populate_room_unit_controls_labels() {
        this._room_name_input_label.innerHTML = "Nombre de tipo";
        this._id_input_label.innerHTML = "Id de unidad";
        this._is_enabled_input_label.innerHTML = "Habilitada";
        this._location_input_label.innerHTML = "Ubicación";
        this._pax_amount_input_label.innerHTML = "Monto de pax";
        this._decrement_input_label.innerHTML = "Decremento";
        this._increment_input_label.innerHTML = "Incremento";
        this._reserved_dates_inputs_container_label.innerHTML = "Fechas reservadas";
        this._added_values_inputs_container_label.innerHTML = "Valores añadidos";
        this._aditional_services_inputs_container_label.innerHTML = "Servicios adicionaless";
    }
    _populate_room_name_input() {
        this._room_name_input.value = this._room_name ?? "";
    }
    _populate_id_input() {
        this._id_input.value = this._id.toString() ?? "";
    }
    _populate_is_enabled_input() {
        this._is_enabled_input.checked = this._is_enabled;
    }
    _populate_location_input() {
        this._location_input.value = this._location ?? "";
    }
    _populate_pax_amount_input() {
        this._pax_amount_input.value = this._pax_amount.toString() ?? "";
    }
    _populate_decrement_input() {
        this._decrement_input.value = this._decrement.toString() ?? "";
    }
    _populate_increment_input() {
        this._increment_input.value = this._increment.toString() ?? "";
    }
    _populate_reserved_dates_input() {
        this._reserved_dates_inputs_container.appendChild(this._generate_add_item_button(this._reserved_dates_inputs_container));
        this._reserved_dates.forEach(item_value => {
            this._reserved_dates_inputs_container.appendChild(this._generate_populated_input_along_with_controls_for_item(item_value ?? ""));
        });
    }
    _populate_added_values_input() {
        this._added_values_inputs_container.appendChild(this._generate_add_item_button(this._added_values_inputs_container));
        this._added_values.forEach(item_value => {
            this._added_values_inputs_container.appendChild(this._generate_populated_input_along_with_controls_for_item(item_value ?? ""));
        });
    }
    _populate_aditional_services_input() {
        this._aditional_services_inputs_container.appendChild(this._generate_add_item_button(this._aditional_services_inputs_container));
        this._aditional_services.forEach(item_value => {
            this._aditional_services_inputs_container.appendChild(this._generate_populated_input_along_with_controls_for_item(item_value ?? ""));
        });
    }
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    // Type Units sub-items dynamic generation section
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    _generate_add_item_button(container) {
        const item_button = document.createElement("button");
        item_button.innerHTML = "Añadir";
        item_button.onpointerup = () => {
            container.appendChild(this._generate_populated_input_along_with_controls_for_item(""));
        };
        return item_button;
    }
    _generate_populated_input_along_with_controls_for_item(item_value) {
        const item_subelements_container = document.createElement("div");
        item_subelements_container.className = "room_type_unit_input_group_container_input_and_control_container";
        const item_input = document.createElement("input");
        item_input.value = item_value;
        const item_remove_button = document.createElement("button");
        item_remove_button.onpointerup = () => {
            item_subelements_container.remove();
        };
        item_subelements_container.appendChild(item_input);
        item_subelements_container.appendChild(item_remove_button);
        return item_subelements_container;
    }
}
//# sourceMappingURL=RoomUnit.js.map