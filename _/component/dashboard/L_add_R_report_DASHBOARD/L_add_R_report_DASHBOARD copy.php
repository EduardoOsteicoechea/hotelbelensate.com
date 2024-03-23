<?php
	function L_add_R_report_DASHBOARD
	(
		string $root_folder, 
		string $id, 
	) 
	{
		return '
			<div
			id="'.$id.'_L_add_R_report_DASHBOARD"
			class="L_add_R_report_DASHBOARD"
			>
				<div
				id="'.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER"
				class="L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER"	
				>
					<div
					id="'.$id.'_L_add_R_report_DASHBOARD_BUTTONS_CONTAINER"
					class="L_add_R_report_DASHBOARD_BUTTONS_CONTAINER"	
					>
						<button
						id="'.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER_ADD_BUTTON"
						class="L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER_ADD_BUTTON"
						onclick="'.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM(event)"
						>+</button>

						<button
						id="'.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER_REMOVE_BUTTON"
						class="L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER_REMOVE_BUTTON"
						onclick="'.$id.'_L_add_R_report_DASHBOARD_DELETE_ITEM(event)"
						>-</button>
					</div>

					<h2
					id="'.$id.'_L_add_R_report_DASHBOARD_ORDER_TOTAL"
					class="L_add_R_report_DASHBOARD_ORDER_TOTAL"
					>
						TOTAL: 0 usd
					</h2>

					<div
					id="'.$id.'_L_add_R_report_DASHBOARD_CHEKOUT_BUTTONS_CONTAINER"
					class="L_add_R_report_DASHBOARD_CHEKOUT_BUTTONS_CONTAINER"				
					>
						<a
						href="../orden"
						>
							<button>
								Apartar con pago en línea
							</button>
						</a>
						<a
						href="https://wa.me/584121224789?text=Hello%2C%20World%21"
						>
							<button> 
								<img
								src="'.$root_folder.'_/media/image/brand/social_media_icons_whatsapp.webp"
								alt="WhatsApp Icon"
								height="100%"
								>
								Reservar por WhatsApp
							</button>
						</a>
					</div>
				</div> 

	
				<div
				id="'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER"
				class="L_add_R_report_DASHBOARD_ITEM_CONTAINER"	
				>
				</div>

					
				<div
				id="'.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER"
				class="L_add_R_report_DASHBOARD_REPORT_CONTAINER"				
				>						
					<div
					id="'.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER_REPORT_BOX"
					class="L_add_R_report_DASHBOARD_REPORT_CONTAINER_REPORT_BOX"				
					>
					</div>

					<div
					id="'.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER_TOTAL_BOX"
					class="L_add_R_report_DASHBOARD_REPORT_CONTAINER_TOTAL_BOX"				
					>
					</div>
				</div>

				

				'.add_style_tag($id."_header", $root_folder."_/component/dashboard/L_add_R_report_DASHBOARD/").'


				<script>
					let '.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER = document.getElementById("'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER")
					let '.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER_REMOVE_BUTTON = document.getElementById("'.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER_REMOVE_BUTTON");
					let '.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER_REPORT_BOX = document.getElementById("'.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER_REPORT_BOX");
					let '.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER_TOTAL_BOX = document.getElementById("'.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER_TOTAL_BOX");
					'.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER_REMOVE_BUTTON.disabled = true;
					let '.$id.'_L_add_R_report_DASHBOARD_ORDER_TOTAL = document.getElementById("'.$id.'_L_add_R_report_DASHBOARD_ORDER_TOTAL")

					let room_images = 
					{
						"Presidencial exclusiva":"room_2.jpg",
						"Suite imperial":"room_4.jpg",
						"Penthouse premium":"room_3.jpg",
						"Cabaña acogedora":"room_5.jpg",
						"Moderna lujosa":"room_1.jpg"
					};
					
					let room_prices = 
					{
						"Presidencial exclusiva":150,
						"Suite imperial":120,
						"Penthouse premium":100,
						"Cabaña acogedora":180,
						"Moderna lujosa":70
					};


					'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_ADD_ELEMENT_WHEN_EMPTY('.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER);
					
					function '.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM(event)
					{
						((event) =>
						{
							let container = '.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER
							let container_count = container.children.length
							'.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER_REMOVE_BUTTON.disabled = false;
							
							if(document.getElementById("'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_EMPTY_PLACEHOLDER"))
							{
								'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_EMPTY_PLACEHOLDER.remove();
							};

							//let item_room_heading = document.createElement("h3");
							//item_room_heading.innerHTML = "Habitación " + container_count;

							let item_modelo_de_habitacion_h4 = document.createElement("h4");
							item_modelo_de_habitacion_h4.innerHTML = "Modelo";

							let item_modelo_de_habitacion_select = document.createElement("select");
							item_modelo_de_habitacion_select.setAttribute("onpointerup","'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_ALL(event)");

							let item_modelo_de_habitacion_select_option_1 = document.createElement("option");
							item_modelo_de_habitacion_select_option_1.innerHTML =  "Presidencial Exclusiva";
							item_modelo_de_habitacion_select_option_1.setAttribute("value","Presidencial exclusiva");

							let item_modelo_de_habitacion_select_option_2 = document.createElement("option");
							item_modelo_de_habitacion_select_option_2.innerHTML = "Suite imperial";
							item_modelo_de_habitacion_select_option_2.setAttribute("value","Suite imperial");

							let item_modelo_de_habitacion_select_option_3 = document.createElement("option");
							item_modelo_de_habitacion_select_option_3.innerHTML = "Penthouse remium";
							item_modelo_de_habitacion_select_option_3.setAttribute("value","Penthouse premium");

							let item_modelo_de_habitacion_select_option_4 = document.createElement("option");
							item_modelo_de_habitacion_select_option_4.innerHTML = "Cabaña acogedora";
							item_modelo_de_habitacion_select_option_4.setAttribute("value","Cabaña acogedora");

							let item_modelo_de_habitacion_select_option_5 = document.createElement("option");
							item_modelo_de_habitacion_select_option_5.innerHTML = "Moderna lujosa";
							item_modelo_de_habitacion_select_option_5.setAttribute("value","Moderna lujosa");

							item_modelo_de_habitacion_select.appendChild(item_modelo_de_habitacion_select_option_1);
							item_modelo_de_habitacion_select.appendChild(item_modelo_de_habitacion_select_option_2);
							item_modelo_de_habitacion_select.appendChild(item_modelo_de_habitacion_select_option_3);
							item_modelo_de_habitacion_select.appendChild(item_modelo_de_habitacion_select_option_4);
							item_modelo_de_habitacion_select.appendChild(item_modelo_de_habitacion_select_option_5);

							let item_modelo_de_habitacion_div = document.createElement("div");

							item_modelo_de_habitacion_div.appendChild(item_modelo_de_habitacion_h4);
							item_modelo_de_habitacion_div.appendChild(item_modelo_de_habitacion_select);



							let item_fecha_de_ingreso_h4 = document.createElement("h4");
							item_fecha_de_ingreso_h4.innerHTML = "Día de llegada";
							let item_fecha_de_ingreso_select = document.createElement("input");
							item_fecha_de_ingreso_select.setAttribute("onpointerup","'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_ALL_INGRESO(event)");
							item_fecha_de_ingreso_select.setAttribute("onchange","'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_ALL_INGRESO(event)");

							let today = new Date();
							let year = today.getFullYear();
							let month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed in JavaScript
							let day = String(today.getDate()).padStart(2, "0");
							let formatted_date = `${year}-${month}-${day}`;

							let tomorrow = new Date();
							let tomorrow_day = String(tomorrow.getDate() + 1).padStart(2, "0");
							let tomorrow_formatted_date = `${year}-${month}-${tomorrow_day}`;

							let date_in_30_days = new Date(Date.now() + (2592000000 * 1));
							let year_in_30_days = date_in_30_days.getFullYear();
							let month_in_30_days = String(date_in_30_days.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed in JavaScript
							let day_in_30_days = String(date_in_30_days.getDate()).padStart(2, "0");
							let formatted_date_in_30_days = `${year_in_30_days}-${month_in_30_days}-${month_in_30_days}`;

							item_fecha_de_ingreso_select.setAttribute("type","date");
							item_fecha_de_ingreso_select.setAttribute("min",formatted_date);
							item_fecha_de_ingreso_select.setAttribute("max",formatted_date_in_30_days);
							item_fecha_de_ingreso_select.setAttribute("value",formatted_date);
							
							let item_fecha_de_ingreso_div = document.createElement("div");
							item_fecha_de_ingreso_div.appendChild(item_fecha_de_ingreso_h4);
							item_fecha_de_ingreso_div.appendChild(item_fecha_de_ingreso_select);



							let item_fecha_de_egreso_h4 = document.createElement("h4");
							item_fecha_de_egreso_h4.innerHTML = "Día de salida";
							let item_fecha_de_egreso_select = document.createElement("input");
							item_fecha_de_egreso_select.setAttribute("onpointerup","'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_ALL(event)");
							item_fecha_de_egreso_select.setAttribute("onchange","'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_ALL(event)");

							let date_in_60_days = new Date(Date.now() + (2592000000 * 2));
							let year_in_60_days = date_in_60_days.getFullYear();
							let month_in_60_days = String(date_in_60_days.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed in JavaScript
							let day_in_60_days = String(date_in_60_days.getDate()).padStart(2, "0");
							let formatted_date_in_60_days = `${year_in_60_days}-${month_in_60_days}-${day_in_60_days}`;

							item_fecha_de_egreso_select.setAttribute("type","date");
							item_fecha_de_egreso_select.setAttribute("min",tomorrow_formatted_date);
							item_fecha_de_egreso_select.setAttribute("max",formatted_date_in_60_days);
							item_fecha_de_egreso_select.setAttribute("value",tomorrow_formatted_date);
							
							let item_fecha_de_egreso_div = document.createElement("div");
							item_fecha_de_egreso_div.appendChild(item_fecha_de_egreso_h4);
							item_fecha_de_egreso_div.appendChild(item_fecha_de_egreso_select);



							let item_horario_de_ingreso_h4 = document.createElement("h4");
							item_horario_de_ingreso_h4.innerHTML = "Check-In";
							let item_horario_de_ingreso_select = document.createElement("select");
							item_horario_de_ingreso_select.setAttribute("onpointerup","'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_ALL(event)");

							let item_horario_de_ingreso_select_option_1 = document.createElement("option");
							item_horario_de_ingreso_select_option_1.innerHTML =  "8:00 am";
							item_horario_de_ingreso_select_option_1.setAttribute("value","8:00 am");

							let item_horario_de_ingreso_select_option_2 = document.createElement("option");
							item_horario_de_ingreso_select_option_2.innerHTML = "1:00 pm";
							item_horario_de_ingreso_select_option_2.setAttribute("value","1:00 pm");

							let item_horario_de_ingreso_select_option_3 = document.createElement("option");
							item_horario_de_ingreso_select_option_3.innerHTML = "7:00 pm";
							item_horario_de_ingreso_select_option_3.setAttribute("value","7:00 pm");

							item_horario_de_ingreso_select.appendChild(item_horario_de_ingreso_select_option_1);
							item_horario_de_ingreso_select.appendChild(item_horario_de_ingreso_select_option_2);
							item_horario_de_ingreso_select.appendChild(item_horario_de_ingreso_select_option_3);

							let item_horario_de_ingreso_div = document.createElement("div");
							item_horario_de_ingreso_div.appendChild(item_horario_de_ingreso_h4);
							item_horario_de_ingreso_div.appendChild(item_horario_de_ingreso_select);



							let item_check_out_h4 = document.createElement("h4");
							item_check_out_h4.innerHTML = "Check-Out";
							let item_check_out_select = document.createElement("select");
							item_check_out_select.setAttribute("onpointerup","'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_ALL(event)");

							let item_check_out_option_1 = document.createElement("option");
							item_check_out_option_1.innerHTML =  "8:00 am";
							item_check_out_option_1.setAttribute("value","8:00 am");

							let item_check_out_option_2 = document.createElement("option");
							item_check_out_option_2.innerHTML = "1:00 pm";
							item_check_out_option_2.setAttribute("value","1:00 pm");

							let item_check_out_option_3 = document.createElement("option");
							item_check_out_option_3.innerHTML = "7:00 pm";
							item_check_out_option_3.setAttribute("value","7:00 pm");

							item_check_out_select.appendChild(item_check_out_option_1);
							item_check_out_select.appendChild(item_check_out_option_2);
							item_check_out_select.appendChild(item_check_out_option_3);

							let item_check_out_div = document.createElement("div");
							item_check_out_div.appendChild(item_check_out_h4);
							item_check_out_div.appendChild(item_check_out_select);



							
							
							let item_room_image_container_image = document.createElement("img");
							item_room_image_container_image.setAttribute("src","'.$root_folder.'_/media/image/room/" + room_images[item_modelo_de_habitacion_select.value]);
							item_room_image_container_image.setAttribute("height","100%");
							let item_room_image_container = document.createElement("div");
							item_room_image_container.setAttribute("id","'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_ITEM_" + container_count + "_IMAGE");
							item_room_image_container.setAttribute("class","L_add_R_report_DASHBOARD_ITEM_CONTAINER_ITEM_IMAGE");
							item_room_image_container.appendChild(item_room_image_container_image);




							let day_quantity = calculate_day_quantity( item_fecha_de_ingreso_select.value, item_fecha_de_egreso_select.value );
							let item_cost = day_quantity * room_prices[item_modelo_de_habitacion_select.value];

							let report_item_days_label = document.createElement("h3");
							report_item_days_label.innerHTML = "Nro. de días: ";
							let report_item_days = document.createElement("p");
							report_item_days.innerHTML = day_quantity;
							let report_item_days_div = document.createElement("div");
							report_item_days_div.className = "item_day_quantity_div";
							report_item_days_div.appendChild(report_item_days_label);
							report_item_days_div.appendChild(report_item_days);

							let report_item_price_by_day_label = document.createElement("h3");
							report_item_price_by_day_label.innerHTML = "Precio por día: ";
							let report_item_price_by_day = document.createElement("p");
							report_item_price_by_day.innerHTML = room_prices[item_modelo_de_habitacion_select.value]  + " USD";
							let report_item_price_by_day_div = document.createElement("div");
							report_item_price_by_day_div.className = "item_price_by_day_div";
							report_item_days_div.appendChild(report_item_days_label);
							report_item_price_by_day_div.appendChild(report_item_price_by_day_label);
							report_item_price_by_day_div.appendChild(report_item_price_by_day);

							let report_item_total = document.createElement("h3");
							report_item_total.innerHTML = "Costo: ";
							let report_item_price = document.createElement("h4");
							report_item_price.innerHTML = item_cost + " USD";
							let report_item_total_div = document.createElement("div");
							report_item_total_div.className = "item_total_price_div";
							report_item_total_div.appendChild(report_item_total);
							report_item_total_div.appendChild(report_item_price);





							let item = document.createElement("div");
							item.setAttribute("id","'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_ITEM_" + container_count);
							item.setAttribute("class","L_add_R_report_DASHBOARD_ITEM_CONTAINER_ITEM");

							item.appendChild(item_room_image_container)
							//item.appendChild(item_room_heading)
							item.appendChild(item_modelo_de_habitacion_div)
							item.appendChild(item_fecha_de_ingreso_div)
							item.appendChild(item_fecha_de_egreso_div)
							item.appendChild(item_horario_de_ingreso_div)
							item.appendChild(item_check_out_div)
							item.appendChild(report_item_days_div)
							item.appendChild(report_item_price_by_day_div)
							item.appendChild(report_item_total_div)



							container.appendChild(item)
							'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_DISPLAY_REPORT('.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER)

					})('.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER);};


					function '.$id.'_L_add_R_report_DASHBOARD_DELETE_ITEM(event)
					{((event) => {
						console.log("event")
						let container = '.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER;
						let container_count = container.children.length;
						if(container_count > 1)
						{
							container.lastElementChild.remove();
						}
						else if(container_count === 1)
						{
							container.lastElementChild.remove();
							'.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM_CONTAINER_REMOVE_BUTTON.disabled = true;
							'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_ADD_ELEMENT_WHEN_EMPTY( container );
						};
						'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_DISPLAY_REPORT('.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER);
					})('.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER);};


					function '.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_ADD_ELEMENT_WHEN_EMPTY( container )
					{

						let empty_placeholder_message = document.createElement("h3");
						empty_placeholder_message.innerHTML = "Aún no has añadido habitaciones";
						let empty_placeholder_button = document.createElement("button");
						empty_placeholder_button.innerHTML = "Añadir";
						empty_placeholder_button.setAttribute("onpointerup","'.$id.'_L_add_R_report_DASHBOARD_ADD_ITEM(event)");

						let empty_placeholder = document.createElement("div");
						empty_placeholder.id = container.id + "_EMPTY_PLACEHOLDER";
						empty_placeholder.className = container.className + "_EMPTY_PLACEHOLDER";
						empty_placeholder.appendChild(empty_placeholder_message);
						empty_placeholder.appendChild(empty_placeholder_button);

						container.appendChild(empty_placeholder);
					};



					function '.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_ALL(event)
					{
						let item_container = event.target.parentNode.parentNode.parentNode;
						let current_item_container = event.target.parentNode.parentNode;
						let item_image = current_item_container.children[0].children[0];
						let item_room_model = current_item_container.children[1].children[1].value;

						item_image.setAttribute("src","'.$root_folder.'_/media/image/room/" + room_images[item_room_model]);
						console.log(item_room_model)
						'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_DISPLAY_REPORT(item_container)
					};

					function '.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_ALL_INGRESO(event)
					{
						let item_container = event.target.parentNode.parentNode.parentNode
						'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_DISPLAY_REPORT(item_container)
						'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_EGRESO(event,item_container)
					};

					function '.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_UPDATE_EGRESO(event,item_container)
					{
						let entry_value = event.target.value
						let salida_input = event.target.parentNode.nextElementSibling.children[1]
						salida_input.setAttribute("min", entry_value)
						salida_input.setAttribute("value", entry_value)
						'.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_DISPLAY_REPORT(item_container)
					};

					function '.$id.'_L_add_R_report_DASHBOARD_ITEM_CONTAINER_DISPLAY_REPORT(item_container)
					{
						let report_container = document.createElement("div"); 
						let total = 0; 
						for (let x=0; x < item_container.children.length; x++)
						{
							let item = item_container.children[x]
							let item_id = item.id.slice(0,-1) + x;
							item.id = item_id;

							let modelo = item.children[1].children[1]
							let llegada = item.children[2].children[1]
							let salida = item.children[3].children[1]
							let check_in = item.children[4].children[1]
							let check_out = item.children[5].children[1]
							let number_of_days = item.children[6].children[0]
							let price_by_day = item.children[7].children[1]
							let total_cost = item.children[8].children[1]

							let day_quantity = calculate_day_quantity( llegada.value, salida.value );
							let item_cost = day_quantity * room_prices[modelo.value];



							number_of_days.innerHTML = day_quantity;
							price_by_day.innerHTML = room_prices[modelo.value];
							total_cost.innerHTML = item_cost;
							let check_out_updated_time = new Date(llegada.value).getTime() + (86400000 * 1);
							let check_out_updated_date = new Date(check_out_updated_time);
							let current_month_day_quantity = new Date(
								check_out_updated_date.getFullYear(), 
								check_out_updated_date.getMonth() + 1, 
								0
							).getDate();
							
							let year  = "";
							let month = "";
							let day   = "";

							if
							(
								check_out_updated_date.getMonth() < 11 
								&& 
								check_out_updated_date.getDate() + 1 > current_month_day_quantity
							)
							{
								year  = String(check_out_updated_date.getFullYear());
								month = String(check_out_updated_date.getMonth() + 2).padStart(2, "0");
								day   = "01";
							} 
							else if
							(
								check_out_updated_date.getMonth() === 11 
								&& 
								check_out_updated_date.getDate() + 1 > current_month_day_quantity
							)
							{
								year  = String(check_out_updated_date.getFullYear() + 1);
								month = "01";
								day   = "01";
							} 
							else 
							{
								year  = String(check_out_updated_date.getFullYear());
								month = String(check_out_updated_date.getMonth() + 1).padStart(2, "0");
								day   = String(check_out_updated_date.getDate() + 1).padStart(2, "0");
							};
							
							let formatted_date = year + "-" + month + "-" + day;
							salida.value = formatted_date;



							let report_item_model = document.createElement("h3");
							report_item_model.id = "MODEL_" + x;
							report_item_model.innerHTML = modelo.value;

							let report_item_entry_label = document.createElement("label");
							report_item_entry_label.innerHTML = "Llegada: ";
							let report_item_entry = document.createElement("p");
							report_item_entry.id = "ENTRY_" + x;
							report_item_entry.innerHTML = llegada.value;
							let report_item_entry_div = document.createElement("div");
							report_item_entry_div.appendChild(report_item_entry_label);
							report_item_entry_div.appendChild(report_item_entry);

							let report_item_exit_label = document.createElement("label");
							report_item_exit_label.innerHTML = "Salida: ";
							let report_item_exit = document.createElement("p");
							report_item_exit.id = "EXIT_" + x;
							report_item_exit.innerHTML = salida.value;
							let report_item_exit_div = document.createElement("div");
							report_item_exit_div.appendChild(report_item_exit_label);
							report_item_exit_div.appendChild(report_item_exit);

							let report_item_check_in_label = document.createElement("label");
							report_item_check_in_label.innerHTML = "Check-in: ";
							let report_item_check_in = document.createElement("p");
							report_item_check_in.id = "CHECK_IN_" + x;
							report_item_check_in.innerHTML = check_in.value;
							let report_item_check_in_div = document.createElement("div");
							report_item_check_in_div.appendChild(report_item_check_in_label);
							report_item_check_in_div.appendChild(report_item_check_in);
							report_item_exit_div.appendChild(report_item_exit);

							let report_item_check_out_label = document.createElement("label");
							report_item_check_out_label.innerHTML = "Check-out: ";
							let report_item_check_out = document.createElement("p");
							report_item_check_out.id = "CHECK_OUT_" + x;
							report_item_check_out.innerHTML = check_out.value;
							let report_item_check_out_div = document.createElement("div");
							report_item_check_out_div.appendChild(report_item_check_out_label);
							report_item_check_out_div.appendChild(report_item_check_out);

							let report_item_days_label = document.createElement("label");
							report_item_days_label.innerHTML = "Días: ";
							let report_item_days = document.createElement("p");
							report_item_days.id = "DAYS_" + x;
							report_item_days.innerHTML = day_quantity;
							let report_item_days_div = document.createElement("div");
							report_item_days_div.appendChild(report_item_days_label);
							report_item_days_div.appendChild(report_item_days);

							let report_item_price_by_day_label = document.createElement("label");
							report_item_price_by_day_label.innerHTML = "Precio por día: ";
							let report_item_price_by_day = document.createElement("p");
							report_item_price_by_day.id = "PRICE_" + x;
							report_item_price_by_day.innerHTML = room_prices[modelo.value];
							let report_item_price_by_day_div = document.createElement("div");
							report_item_price_by_day_div.appendChild(report_item_price_by_day_label);
							report_item_price_by_day_div.appendChild(report_item_price_by_day);

							let report_item_day_quantity = document.createElement("p");
							report_item_day_quantity.id = "PRICE_BY_DAYS_" + x;
							report_item_day_quantity.innerHTML = String(day_quantity) + " día(s) * " + room_prices[modelo.value] + " USD";

							let report_item_price = document.createElement("h4");
							report_item_price.id = "ITEM_COST_" + x;
							report_item_price.innerHTML = item_cost + " USD";

							
							let report_item_container = document.createElement("div");
							report_item_container.id = "habitacion_" + x;


							report_item_container.appendChild(report_item_model);
							report_item_container.appendChild(report_item_entry_div);
							report_item_container.appendChild(report_item_exit_div);
							report_item_container.appendChild(report_item_check_in_div);
							report_item_container.appendChild(report_item_check_out_div);
							report_item_container.appendChild(report_item_days_div);
							report_item_container.appendChild(report_item_price_by_day_div);
							report_item_container.appendChild(report_item_price);

							report_container.appendChild(report_item_container);
							
							total += Number(item_cost);

						};

						'.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER_REPORT_BOX.innerHTML = "";
						'.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER_REPORT_BOX.appendChild(report_container);
						'.$id.'_L_add_R_report_DASHBOARD_REPORT_CONTAINER_TOTAL_BOX.innerHTML = "<p><b>Total: </b>" + total + " USD</p>";
						'.$id.'_L_add_R_report_DASHBOARD_ORDER_TOTAL.innerHTML = "Total: " + total + " USD";
					};
					

				</script>
			</div>
		';
	};
?>