import IRoomType from "./IRoomType.js"
import IRoomUnit from "./IRoomUnit.js";
import RoomUnit from "./RoomUnit.js";

export default class
{
   _type_data_api_base_route: string = "../../_/api/room_data/";
   _type_units_route: string = this._type_data_api_base_route + "_get_type_units.php";
   _type_data_update_route_validation: string = this._type_data_api_base_route + "_validation.php";
   _type_data_update_route: string = this._type_data_api_base_route + "_update_room_type.php";

   _room_name: string
   _type_id: string
   _room_numbers_in_administration: string[]
   _is_enabled: boolean
   _admits_pax: boolean
   _pax_amount: number
   _decrement_amount: number
   _increment_amount: number
   _gross_price: number
   _net_price: number
   _capacity: number
   _capacity_with_pax: number
   _children_capacity: number
   _room_services: string[]
   _room_images: string[]
   _room_thumbnail_image: string[]
   _room_capacity_images: string[]
   _room_icons: string[][]

   _type_properties_manager_container: HTMLDivElement = document.createElement("div")

   _room_name_input: HTMLInputElement = document.createElement("input")
   _type_id_input: HTMLInputElement = document.createElement("input")
   _pax_amount_input: HTMLInputElement = document.createElement("input")
   _decrement_amount_input: HTMLInputElement = document.createElement("input")
   _increment_amount_input: HTMLInputElement = document.createElement("input")
   _gross_price_input: HTMLInputElement = document.createElement("input")
   _net_price_input: HTMLInputElement = document.createElement("input")
   _capacity_input: HTMLInputElement = document.createElement("input")
   _capacity_with_pax_input: HTMLInputElement = document.createElement("input")
   _children_capacity_input: HTMLInputElement = document.createElement("input")
   _room_thumbnail_image_input: HTMLInputElement = document.createElement("input")
   _room_capacity_images_input: HTMLInputElement = document.createElement("input")
   _is_enabled_input: HTMLInputElement = document.createElement("input")
   _admits_pax_input: HTMLInputElement = document.createElement("input")
   _room_numbers_in_administration_input: HTMLTextAreaElement = document.createElement("textarea")
   _room_services_input: HTMLTextAreaElement = document.createElement("textarea")
   _room_images_input: HTMLTextAreaElement = document.createElement("textarea")
   _room_icons_input: HTMLTextAreaElement = document.createElement("textarea")

   _secret: string = ""

   constructor
   (
      data: IRoomType,
      secret: string
   )
   {
      this._room_name = data.room_name
      this._type_id = data.type_id
      this._room_numbers_in_administration = data.room_numbers_in_administration
      this._is_enabled = data.is_enabled
      this._admits_pax = data.admits_pax
      this._pax_amount = data.pax_amount
      this._decrement_amount = data.decrement_amount
      this._increment_amount = data.increment_amount
      this._gross_price = data.gross_price
      this._net_price = data.net_price
      this._capacity = data.capacity
      this._capacity_with_pax = data.capacity_with_pax
      this._children_capacity = data.children_capacity
      this._room_services = data.room_services
      this._room_images = data.room_images
      this._room_thumbnail_image = data.room_thumbnail_image
      this._room_capacity_images = data.room_capacity_images
      this._room_icons = data.room_icons
      this._secret = secret
   }

   public async visualize_units()
   {
      let raw_untis_data : object[] = await this._get_type_units_json_data(this._type_id_input.value);
      this._generate_type_units_controls_sub_dashboard(raw_untis_data);
      // console.log(raw_untis_data);
   }

   public _generate_type_units_controls_sub_dashboard( raw_untis_data: object[]) : void
   {  
      const type_units_control_main_container : HTMLDivElement = this._generate_type_units_controls_container();
      this._generate_type_units_controls(raw_untis_data, type_units_control_main_container);
      this._type_properties_manager_container.appendChild(type_units_control_main_container);
   }

   public _generate_type_units_controls_container() : HTMLDivElement
   {  
      const container : HTMLDivElement = document.createElement("div");
      container.id = "type_units_container";
      container.className = "type_units_container";
      return container;
   }

   public _generate_type_units_controls( raw_untis_data: object[], container: HTMLDivElement) : void
   {  
      raw_untis_data.forEach(unit_object => {
         const unit_as_iroom_interface: IRoomUnit = unit_object as IRoomUnit; 
         const unit_type: RoomUnit = new RoomUnit(unit_as_iroom_interface);
         const unit_type_html_elements: HTMLDivElement = unit_type.print_html_elements();
         container.appendChild(unit_type_html_elements);
      });
   }

   public async _get_type_units_json_data(type_id: string)
   {
      const formData = new FormData();
      formData.append('type_id', type_id);

      const response = await fetch(this._type_units_route, {
         method: 'POST',
         body: formData
      });

      if (response.ok == false)
      {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let raw_data = await response.json();
      return raw_data;
   }

   public async update_type_registry()
   {
      const new_data = this._generate_new_data_object_for_json_file()
      await this._update_json_file_content(new_data)
      this._clearInputsValues()
      await this.generate_type_management_dashboard_reloading_data()
   }

   public generate_type_management_dashboard(): HTMLDivElement
   {
      this._type_properties_manager_container.innerHTML = "";
      this._type_properties_manager_container.id = "room_type_properties_container";
      this._type_properties_manager_container.className = "room_type_properties_container";

      const unit_dashboard_header_container = document.createElement("div");
      unit_dashboard_header_container.id = "unit_dashboard_header_container";
      unit_dashboard_header_container.className = "unit_dashboard_header_container";

      const container_title = document.createElement("h3");
      container_title.innerHTML = this._room_name;
      container_title.id = this._room_name + "_" + "room_type_properties_container";
      container_title.className = "room_type_properties_container_title";

      const update_units_button_container = document.createElement("div");
      update_units_button_container.id = "update_units_button_container";
      update_units_button_container.className = "update_button_container update_units_button_container";

      const update_units_button = document.createElement("button")
      update_units_button.innerHTML = "Visualizar unidades"
      update_units_button.onpointerup = () => this.visualize_units()
      update_units_button_container.appendChild(update_units_button);

      const update_register_button_container = document.createElement("div");
      update_register_button_container.id = "update_register_button_container";
      update_register_button_container.className = "update_button_container update_register_button_container";

      const update_register_button = document.createElement("button");
      update_register_button.innerHTML = "Actualizar registro";
      update_register_button.onpointerup = () => this.update_type_registry();
      update_register_button_container.appendChild(update_register_button);

      unit_dashboard_header_container.appendChild(container_title);
      unit_dashboard_header_container.appendChild(update_units_button_container);
      unit_dashboard_header_container.appendChild(update_register_button_container);
      this._type_properties_manager_container.appendChild(unit_dashboard_header_container);

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

      this._type_properties_manager_container.appendChild(this._generate_type_units_container());

      return this._type_properties_manager_container;
   }

   private _generate_type_units_container(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_units_container"

      return container
   }

   private _extract_secret_from_raw_data_object(data: object): string
   {
      const raw_options_array_without_keys: any[] = this._extract_raw_options_array_without_keys(
         data
      )

      const secret: string = raw_options_array_without_keys[0].secret

      return secret
   }

   private _extract_room_type_array_from_raw_data_object(data: object): IRoomType[]
   {
      const raw_options_array_without_keys: any[] = this._extract_raw_options_array_without_keys(
         data
      )
      const raw_options_array_without_subobjects_keys: any[] = this._extract_raw_options_types_raw_data_array(
         raw_options_array_without_keys
      )
      const raw_options_types_raw_data_array: object[] = this._extract_raw_options_array_without_subobjects_keys(
         raw_options_array_without_subobjects_keys
      )
      const raw_options_types_array_data_as_interfaces: IRoomType[] = this._extract_raw_options_types_array_data_as_interfaces(
         raw_options_types_raw_data_array
      )

      return raw_options_types_array_data_as_interfaces
   }

   private _extract_raw_options_array_without_keys(data: object): any[]
   {
      const raw_options_array_without_keys: any[] = Object.values(data)
      return raw_options_array_without_keys
   }

   private _extract_raw_options_types_raw_data_array(data: any[]): any[]
   {
      const raw_options_array_without_subobjects_keys: any[] = []
      data.forEach(raw_option_array_without_keys =>
      {
         raw_options_array_without_subobjects_keys.push(Object.values(raw_option_array_without_keys));
      })
      return raw_options_array_without_subobjects_keys
   }

   private _extract_raw_options_array_without_subobjects_keys(data: any[]): object[]
   {
      const raw_options_types_raw_data_array: object[] = []
      data.forEach(raw_option_array_without_subobjects_keys =>
      {
         raw_options_types_raw_data_array.push(raw_option_array_without_subobjects_keys[0])
      })
      return raw_options_types_raw_data_array
   }

   private _extract_raw_options_types_array_data_as_interfaces(data: object[]): IRoomType[]
   {
      const raw_options_types_array_data_as_interfaces: IRoomType[] = []
      data.forEach(raw_option_type_raw_data_array =>
      {
         raw_options_types_array_data_as_interfaces.push(raw_option_type_raw_data_array as IRoomType);
      })
      return raw_options_types_array_data_as_interfaces
   }


   public async generate_type_management_dashboard_reloading_data(): Promise<void>
   {
      const form_data: FormData = this._generate_formdata_secret_request();
      const response: Response = await this._fetch_api_request(form_data);

      if (this._response_is_ok(response) == false)
      {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }
      else
      {
         const raw_data = await this._get_response_json_data(response);
         const data_array: IRoomType[] = this._extract_room_type_array_from_raw_data_object(raw_data);
         const data: IRoomType = this._get_update_request_type_object(data_array);
         this._update_type_properties_data(data);
         this.generate_type_management_dashboard();
      };
   }

   private _generate_formdata_secret_request(): FormData
   {
      const form_data = new FormData();
      form_data.append('secret', this._secret);
      return form_data;
   }

   private _fetch_api_request(form_data: FormData): Promise<Response>
   {
      return fetch(this._type_data_update_route_validation, { method: 'POST', body: form_data });;
   }

   private _response_is_ok(response: Response): boolean
   {
      return response.ok;
   }

   private _get_response_json_data(response: Response): any
   {
      return response.json();
   }

   private _get_update_request_type_object(data_array: IRoomType[]): IRoomType
   {
      const request_type_object = data_array[parseInt(this._type_id) - 1];
      return request_type_object;
   }

   private _update_type_properties_data(data: IRoomType): void
   {
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
   }

   public _clearInputsValues()
   {
      this._room_name_input.value = ""
      this._type_id_input.value = ""
      this._room_numbers_in_administration_input.innerHTML = ""
      this._is_enabled_input.checked = false
      this._admits_pax_input.checked = false
      this._pax_amount_input.value = ""
      this._decrement_amount_input.value = ""
      this._increment_amount_input.value = ""
      this._gross_price_input.value = ""
      this._net_price_input.value = ""
      this._capacity_input.value = ""
      this._capacity_with_pax_input.value = ""
      this._children_capacity_input.value = ""
      this._room_services_input.innerHTML = ""
      this._room_images_input.innerHTML = ""
      this._room_thumbnail_image_input.value = ""
      this._room_capacity_images_input.value = ""
      this._room_icons_input.innerHTML = ""
   }

   private async _update_json_file_content(data: object)
   {
      const formData = new FormData()

      formData.append("room_name", this._room_name_input.value)
      formData.append("type_id", this._type_id_input.value)
      formData.append("pax_amount", this._pax_amount_input.value)
      formData.append("decrement_amount", this._decrement_amount_input.value)
      formData.append("increment_amount", this._increment_amount_input.value)
      formData.append("gross_price", this._gross_price_input.value)
      formData.append("net_price", this._net_price_input.value)
      formData.append("capacity", this._capacity_input.value)
      formData.append("capacity_with_pax", this._capacity_with_pax_input.value)
      formData.append("children_capacity", this._children_capacity_input.value)
      formData.append("room_thumbnail_image", this._room_thumbnail_image_input.value)

      formData.append("is_enabled", this._is_enabled_input.value)
      formData.append("admits_pax", this._admits_pax_input.value)
      formData.append("room_capacity_images", this._room_capacity_images_input.value)

      formData.append("room_numbers_in_administration", this._room_numbers_in_administration_input.value)
      formData.append("room_services", this._room_services_input.value)
      formData.append("room_images", this._room_images_input.value)
      formData.append("room_icons", this._room_icons_input.value)

      const response = await fetch(this._type_data_update_route, {
         method: 'POST',
         body: formData
      })

      console.log(await response.text())
   }

   private _generate_new_data_object_for_json_file()
   {
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
      }

      return new_data
   }

   private _generate_room_name_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Nombre"

      this._room_name_input.value = this._room_name

      container.appendChild(label)
      container.appendChild(this._room_name_input)
      return container
   }

   private _generate_type_id_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Id de tipo"

      this._type_id_input.value = this._type_id.toString()
      this._type_id_input.disabled = true

      container.appendChild(label)
      container.appendChild(this._type_id_input)
      return container
   }

   private _generate_room_numbers_in_administration_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Identificadores"

      this._room_numbers_in_administration_input.disabled = true

      this._room_numbers_in_administration.forEach(item =>
      {
         this._room_numbers_in_administration_input.innerHTML += item + " |\n"
      });

      container.appendChild(label)
      container.appendChild(this._room_numbers_in_administration_input)
      return container
   }

   private _generate_is_enabled_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Habilitada"

      this._is_enabled_input.checked = this._is_enabled
      this._is_enabled_input.type = "checkbox"

      container.appendChild(label)
      container.appendChild(this._is_enabled_input)
      return container
   }

   private _generate_admits_pax_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Admite pax"

      this._admits_pax_input.checked = this._admits_pax
      this._admits_pax_input.type = "checkbox"

      container.appendChild(label)
      container.appendChild(this._admits_pax_input)
      return container
   }

   private _generate_pax_ammount_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Costo de pax"

      this._pax_amount_input.value = this._pax_amount.toString()

      container.appendChild(label)
      container.appendChild(this._pax_amount_input)
      return container
   }

   private _generate_decrement_amount_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Incremento (%)"

      this._decrement_amount_input.value = this._decrement_amount.toString()

      container.appendChild(label)
      container.appendChild(this._decrement_amount_input)
      return container
   }

   private _generate_increment_amount_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Descuento (%)"

      this._increment_amount_input.value = this._increment_amount.toString()

      container.appendChild(label)
      container.appendChild(this._increment_amount_input)
      return container
   }

   private _generate_gross_price_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Precio bruto"

      this._gross_price_input.value = this._gross_price.toString()

      container.appendChild(label)
      container.appendChild(this._gross_price_input)
      return container
   }

   private _generate_net_price_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Precio neto"

      this._net_price_input.value = this._net_price.toString()

      container.appendChild(label)
      container.appendChild(this._net_price_input)
      return container
   }

   private _generate_capacity_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Capacidad"

      this._capacity_input.value = this._capacity.toString()

      container.appendChild(label)
      container.appendChild(this._capacity_input)
      return container
   }

   private _generate_capacity_with_pax_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Capacidad con pax"

      this._capacity_with_pax_input.value = this._capacity_with_pax.toString()

      container.appendChild(label)
      container.appendChild(this._capacity_with_pax_input)
      return container
   }

   private _generate_children_capacity_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Capacidad de niños"

      this._children_capacity_input.value = this._children_capacity.toString()

      container.appendChild(label)
      container.appendChild(this._children_capacity_input)
      return container
   }

   private _generate_room_services_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Servicios"

      this._room_services_input.disabled = false

      this._room_services.forEach(item =>
      {
         this._room_services_input.innerHTML += item + " |\n"
      });

      container.appendChild(label)
      container.appendChild(this._room_services_input)
      return container
   }

   private _generate_room_images_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Imagenes"

      this._room_images_input.disabled = true

      this._room_images.forEach(item =>
      {
         this._room_images_input.innerHTML += item + " | \n\n"
      });

      container.appendChild(label)
      container.appendChild(this._room_images_input)
      return container
   }

   private _generate_room_thumbnail_image_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Imagen de muestra"

      this._room_thumbnail_image_input.value = this._room_thumbnail_image.toString()
      this._room_thumbnail_image_input.disabled = true

      container.appendChild(label)
      container.appendChild(this._room_thumbnail_image_input)
      return container
   }

   private _generate_room_capacity_images_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Imagen de capacidad"

      this._room_capacity_images_input.value = this._room_capacity_images.toString()
      this._room_capacity_images_input.disabled = true

      container.appendChild(label)
      container.appendChild(this._room_capacity_images_input)
      return container
   }

   private _generate_room_icons_element(): HTMLDivElement
   {
      const container: HTMLDivElement = document.createElement("div")
      container.className = "room_type_label_and_input_container"

      const label: HTMLLabelElement = document.createElement("label")
      label.innerHTML = "Iconos"

      this._room_icons_input.disabled = true

      this._room_icons.forEach(item =>
      {
         this._room_icons_input.innerHTML += item + " |\n"
      });

      container.appendChild(label)
      container.appendChild(this._room_icons_input)
      return container
   }
}