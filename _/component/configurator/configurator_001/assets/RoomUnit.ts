import IRoomUnit from "./IRoomUnit.js"

export default class 
{
   _room_name: string
   _id: number
   _is_enabled: boolean
   _location: string
   _pax_amount: number
   _decrement: number
   _increment: number
   _reserved_dates: string[]
   _added_values: string[]
   _aditional_services: string[]

   _room_unit_controls_container: HTMLDivElement = document.createElement("div");
   _room_unit_controls_container_title_and_buttons_container: HTMLDivElement = document.createElement("div");
   _room_unit_controls_container_title: HTMLHeadingElement = document.createElement("h2");
   _room_unit_controls_container_hide_units_button: HTMLButtonElement = document.createElement("button");
   _room_unit_controls_container_update_units_button: HTMLButtonElement = document.createElement("button");

   _room_name_input: HTMLInputElement = document.createElement("input");
   _id_input: HTMLInputElement = document.createElement("input");
   _is_enabled_input: HTMLInputElement = document.createElement("input");
   _location_input: HTMLInputElement = document.createElement("input");
   _pax_amount_input: HTMLInputElement = document.createElement("input");
   _decrement_input: HTMLInputElement = document.createElement("input");
   _increment_input: HTMLInputElement = document.createElement("input");
   _reserved_dates_inputs_container: HTMLDivElement = document.createElement("div");
   _added_values_inputs_container: HTMLDivElement = document.createElement("div");
   _aditional_services_inputs_container: HTMLDivElement = document.createElement("div");

   _room_name_input_label: HTMLLabelElement = document.createElement("label");
   _id_input_label: HTMLLabelElement = document.createElement("label");
   _is_enabled_input_label: HTMLLabelElement = document.createElement("label");
   _location_input_label: HTMLLabelElement = document.createElement("label");
   _pax_amount_input_label: HTMLLabelElement = document.createElement("label");
   _decrement_input_label: HTMLLabelElement = document.createElement("label");
   _increment_input_label: HTMLLabelElement = document.createElement("label");
   _reserved_dates_inputs_container_label: HTMLLabelElement = document.createElement("label");
   _added_values_inputs_container_label: HTMLLabelElement = document.createElement("label");
   _aditional_services_inputs_container_label: HTMLLabelElement = document.createElement("label");

   _room_name_input_container: HTMLDivElement = document.createElement("div");
   _id_input_container: HTMLDivElement = document.createElement("div");
   _is_enabled_input_container: HTMLDivElement = document.createElement("div");
   _location_input_container: HTMLDivElement = document.createElement("div");
   _pax_amount_input_container: HTMLDivElement = document.createElement("div");
   _decrement_input_container: HTMLDivElement = document.createElement("div");
   _increment_input_container: HTMLDivElement = document.createElement("div");
   _reserved_dates_inputs_container_container: HTMLDivElement = document.createElement("div");
   _added_values_inputs_container_container: HTMLDivElement = document.createElement("div");
   _aditional_services_inputs_container_container: HTMLDivElement = document.createElement("div");

   constructor(
      data: IRoomUnit
   )
   {
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

   public print_html_elements(): HTMLDivElement
   {
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

   public _parameterize_room_unit_controls(): void
   {
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

   public _parameterize_room_unit_header_elements(): void
   {
      this._room_unit_controls_container_title.className = "room_type_units_controls_header_title";

      this._room_unit_controls_container_hide_units_button.className = "room_type_units_controls_header_button";
      this._room_unit_controls_container_hide_units_button.onpointerup = () =>{
         this._room_unit_controls_container.innerHTML = "";
      };

      this._room_unit_controls_container_update_units_button.className = "room_type_units_controls_header_button";

      this._room_unit_controls_container_title_and_buttons_container.className = "room_type_units_controls_header";
   }

   public _parameterize_room_name_input(): void
   {

   }

   public _parameterize_id_input(): void
   {

   }

   public _parameterize_is_enabled_input(): void
   {
      this._is_enabled_input.setAttribute("type", "checkbox");
   }

   public _parameterize_location_input(): void
   {

   }

   public _parameterize_pax_amount_input(): void
   {

   }

   public _parameterize_decrement_input(): void
   {

   }

   public _parameterize_increment_input(): void
   {

   }

   public _parameterize_reserved_dates_input(): void
   {
      this._reserved_dates_inputs_container.className = "room_type_unit_input_group_container";
   }

   public _parameterize_added_values_input(): void
   {
      this._added_values_inputs_container.className = "room_type_unit_input_group_container";
   }

   public _parameterize_aditional_services_input(): void
   {
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


   public _populate_room_unit_header_elements(): void
   {
      this._room_unit_controls_container_title.innerHTML = "Unidades de " + this._room_name;
      this._room_unit_controls_container_hide_units_button.innerHTML = "Ocultar Unidades";
      this._room_unit_controls_container_update_units_button.innerHTML = "Actualizar Unidades";
   }

   public _populate_room_unit_controls_container(): void
   {
      this._append_room_unit_controls_header_to_main_container();
      this._append_room_unit_controls_items_to_corresponding_container();
      this._append_room_unit_controls_items_containers_to_main_container();
   }

   public _append_room_unit_controls_header_to_main_container(): void
   {
      this._room_unit_controls_container_title_and_buttons_container.appendChild(this._room_unit_controls_container_title);
      this._room_unit_controls_container_title_and_buttons_container.appendChild(this._room_unit_controls_container_hide_units_button);
      this._room_unit_controls_container_title_and_buttons_container.appendChild(this._room_unit_controls_container_update_units_button);
      this._room_unit_controls_container.appendChild(this._room_unit_controls_container_title_and_buttons_container);
   }

   public _append_room_unit_controls_items_to_corresponding_container(): void
   {
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

   public _append_room_unit_controls_items_containers_to_main_container(): void
   {
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

   public _populate_room_unit_controls(): void
   {
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

   public _populate_room_unit_controls_labels(): void
   {
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

   public _populate_room_name_input(): void
   {
      this._room_name_input.value = this._room_name ?? "";
   }

   public _populate_id_input(): void
   {
      this._id_input.value = this._id.toString() ?? "";
   }

   public _populate_is_enabled_input(): void
   {
      this._is_enabled_input.checked = this._is_enabled;
   }

   public _populate_location_input(): void
   {
      this._location_input.value = this._location ?? "";
   }

   public _populate_pax_amount_input(): void
   {
      this._pax_amount_input.value = this._pax_amount.toString() ?? "";
   }

   public _populate_decrement_input(): void
   {
      this._decrement_input.value = this._decrement.toString() ?? "";
   }

   public _populate_increment_input(): void
   {
      this._increment_input.value = this._increment.toString() ?? "";
   }

   public _populate_reserved_dates_input(): void
   {
      this._reserved_dates_inputs_container.appendChild(this._generate_add_item_button(this._reserved_dates_inputs_container));

      this._reserved_dates.forEach(item_value =>
      {
         this._reserved_dates_inputs_container.appendChild(this._generate_populated_input_along_with_controls_for_item(item_value ?? ""));
      });
   }

   public _populate_added_values_input(): void
   {
      this._added_values_inputs_container.appendChild(this._generate_add_item_button(this._added_values_inputs_container));

      this._added_values.forEach(item_value =>
      {
         this._added_values_inputs_container.appendChild(this._generate_populated_input_along_with_controls_for_item(item_value ?? ""));
      });

   }

   public _populate_aditional_services_input(): void
   {
      this._aditional_services_inputs_container.appendChild(this._generate_add_item_button(this._aditional_services_inputs_container));

      this._aditional_services.forEach(item_value =>
      {
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

   _generate_add_item_button(container: HTMLDivElement): HTMLButtonElement
   {
      const item_button: HTMLButtonElement = document.createElement("button");
      item_button.innerHTML = "Añadir";

      item_button.onpointerup = () =>
      {
         container.appendChild(
            this._generate_populated_input_along_with_controls_for_item("")
         );
      };

      return item_button;
   }

   _generate_populated_input_along_with_controls_for_item(item_value: string): HTMLDivElement
   {
      const item_subelements_container: HTMLDivElement = document.createElement("div");
      item_subelements_container.className = "room_type_unit_input_group_container_input_and_control_container";

      const item_input: HTMLInputElement = document.createElement("input");
      item_input.value = item_value;

      const item_remove_button: HTMLButtonElement = document.createElement("button");
      item_remove_button.onpointerup = () =>
      {
         item_subelements_container.remove();
      };

      item_subelements_container.appendChild(item_input);
      item_subelements_container.appendChild(item_remove_button);
      return item_subelements_container;
   }

   /////////////////////////////////
   /////////////////////////////////
   /////////////////////////////////
   /////////////////////////////////
   // Type Units sub-items events definition section
   /////////////////////////////////
   /////////////////////////////////
   /////////////////////////////////
   /////////////////////////////////








































}