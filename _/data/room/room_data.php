<?php
	require_once "../../global.php";

	$bed_king_description =                     "Cama King Size (200cm x 200cm).";
	$bed_queen_description =                    "Cama Queen Size (180cm x 200cm).";
	$bed_regular_description =                  "Cama matrimonial (150cm x 200cm).";
	$bed_regular_double_description =           "Dos camas matrimoniales, espacio para una familia pequeña.";
	$bed_single_double_description =            "Dos camas individuales de tamaño estándar.";
	$sauna_room_description =                   "Habitación de sauna para la relajación y bienestar.";
	$jacuzzi_description =                      "Bañera de hidromasaje con chorros de agua y aire.";
	$sofa_bed_description =                     "Mueble que puede funcionar como sofá durante y cama matrimonial.";
	$special_capabilities_service_description = "Baño acondicionado para personas con capacidades especiales y silla de ruedas.";
	$hair_dryer_description =                   "Secador de cabello integrado en habitación.";
	$desk_description =                         "Escritorio de trabajo integrado en habitación.";
	$microwave_description =                    "Equipo de microondas integrado en habitación.";
	$executive_fridge_description =             "Nevera ejecutiva integrada en la habitación.";
	$safe_description =                         "Bóveda personal para proteger sus pertenencias.";
	$conditioned_air_description =              "Acondicionador de aire integrado en la habitación.";
	$tv_description =                           "Televisor de pantalla plana.";
	$hot_water_description =                    "Agua acondicionada al gusto.";
	$wifi_description =                         "Internet de alta velocidad las 24 horas.";
	
	$capacity_2_adult_description =            "Capacidad para dos adultos.";
	$capacity_2_adult_1_children_description = "Capacidad para dos adultos y un menor de 11 años.";
	$capacity_2_adult_2_children_description = "Capacidad para dos adultos y dos menores de 11 años.";
	$capacity_3_adult_1_children_description = "Capacidad para tres adultos y un menor de 11 años.";
	$capacity_3_adult_description =            "Capacidad para tres adultos.";
	$capacity_3_adult_pax_description =        "Cancelando PAX: Capacidad para tres adultos.";
	$capacity_4_adult_description =            "Cancelando PAX: Capacidad para cuatro adultos.";
	$capacity_6_adult_description =            "Capacidad para seis adultos.";

	$capacity_2_adult_array =            ["2_persons.svg","'.$capacity_2_adult_description.'"];
	$capacity_2_adult_1_children_array = ["2_adult_1_children.svg","'.$capacity_2_adult_1_children_description.'"];
	$capacity_2_adult_2_children_array = ["2_adult_2_children.svg","'.$capacity_2_adult_2_children_description.'"];
	$capacity_3_adult_1_children_array = ["3_adult_1_children.svg","'.$capacity_3_adult_1_children_description.'"];
	$capacity_3_adult_array =            ["3_adult.svg","'.$capacity_3_adult_pax_description.'"];
	$capacity_3_adult_pax_array =        ["3_adult.svg","'.$capacity_3_adult_pax_description.'"];
	$capacity_4_adult_array =            ["4_adult.svg","'.$capacity_4_adult_description.'"];
	$capacity_6_adult_array =            ["6_adult.svg","'.$capacity_6_adult_description.'"];

	$king_size_bed_asset =                ["cama King size", "bed_king.svg","'.$bed_king_description.'"];
	$second_king_size_bed_asset =         ["cama King size 2", "bed_king.svg","'.$bed_king_description.'"];
	$bed_queen_asset =                    ["cama Queen size", "bed_queen.svg","'.$bed_queen_description.'"];
	$bed_regular_double_asset =           ["dos camas matrimoniales", "bed_regular_double.svg","'.$bed_regular_double_description.'"];
	$bed_regular_asset =                  ["cama matrimonial", "bed_regular.svg","'.$bed_regular_description.'"];
	$second_bed_regular_asset =           ["cama matrimonial 2", "bed_regular.svg","'.$bed_regular_description.'"];
	$bed_single_double_asset =            ["dos camas individuales", "bed_single_double.svg","'.$bed_single_double_description.'"];
	$sofa_bed_asset =                     ["sofá cama", "sofa_bed.svg","'.$sofa_bed_description.'"];
	$sauna_room_asset =                   ["cuarto de sauna", "sauna_room.svg","'.$sauna_room_description.'"];
	$hair_dryer_asset =                   ["secador de cabello", "hair_dryer.svg","'.$hair_dryer_description.'"];
	$desk_asset =                         ["escritorio", "desk.svg","'.$desk_description.'"];
	$tv_asset =                           ["televisor", "tv.svg","'.$tv_description.'"];
	$wifi_asset =                         ["wifi", "wifi.svg","'.$wifi_description.'"];
	$hot_water_asset =                    ["agua caliente", "hot_water.svg","'.$hot_water_description.'"];
	$safe_asset =                         ["caja fuerte", "safe.svg","'.$safe_description.'"];
	$executive_fridge_asset =             ["nevera ejecutiva", "executive_fridge.svg","'.$executive_fridge_description.'"];
	$microwave_asset =                    ["microondas", "microwave.svg","'.$microwave_description.'"];
	$special_capabilities_service_asset = ["acondicionamiento para capacidades especiales", "special_capabilities_service.svg","'.$special_capabilities_service_description.'"];
	$jacuzzi_asset =                      ["jacuzzi", "jacuzzi.svg","'.$jacuzzi_description.'"];

	$room_types = [
		"Suite Presidencial" => [
			"nombre de habitación" => "Suite Presidencial",
			"habitaciones disponibles" => [
				209
			],
			"datos de habitación" => [
				["presidencial_master_1_3840x2160.webp","presidencial_master_2_3840x2160.webp","presidencial_master_3_3840x2160.webp","presidencial_master_4_3840x2160.webp","presidencial_master_5_3840x2160.webp",],
				"room_5_360.JPG", "presidencial_master_1_960x540.webp",
				1, 215,
				15,
				[$capacity_3_adult_1_children_array, $capacity_4_adult_array],
				"4_adult.svg", 4, 3, 3, 3,
				[
					$king_size_bed_asset,
					$second_king_size_bed_asset,
					$hair_dryer_asset,
					$desk_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["2 niveles", "2 habitaciones amplias con cama King size", "2 baños", "sala de estar", "escritorio", "wifi", "nevera ejecutiva", "microondas", "caja fuerte", "televisor con DirecTV", "nevera ejecutiva", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Suite Presidencial Junior" => [
			"nombre de habitación" => "Suite Presidencial Junior", 
			"habitaciones disponibles" => [
				208
			],
			"datos de habitación" => [
				[
					"presidencial_junior_2_3840x2160.webp",
					"presidencial_junior_4_3840x2160.webp",
					"presidencial_junior_1_3840x2160.webp",
					"presidencial_junior_3_3840x2160.webp",
					"presidencial_junior_5_3840x2160.webp",
				],
				"room_5_360.JPG", "presidencial_junior_2s_960x540.webp",
				1, 185,
				15,
				[$capacity_3_adult_1_children_array, $capacity_4_adult_array],
				"4_adult.svg", 4, 3, 3, 3,
				[
					$king_size_bed_asset,
					$bed_regular_asset,
					$sauna_room_asset,
					$desk_asset,
					$tv_asset,
					$wifi_asset,
					$hot_water_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["habitación con cama King size", "habitación con cama matrimonial", "cuarto de sauna", "mini sala de estar", "escritorio", "2 habitaciones", " wifi", "televisor con DirecTV", "nevera ejecutiva", "caja fuerte", "aire acondicionado", "agua caliente", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Cabaña" => [
			"nombre de habitación" => "Cabaña", 
			"habitaciones disponibles" => [
				47,48,49,50,57,58,59
			],
			"datos de habitación" => [
				[
					"cabana_1_3840x2160.webp",
					"cabana_2_3840x2160.webp",
					"cabana_3_3840x2160.webp",
					"cabana_4_3840x2160.webp",
				],
				"room_5_360.JPG", "cabana_1_960x540.webp",
				7, 176.1,
				15,
				[$capacity_6_adult_array],
				"6_adult.svg", 6, 6, 6, 5,
				[
					$bed_regular_asset,
					$second_bed_regular_asset,
					$bed_single_double_asset,
					$tv_asset,
					$wifi_asset,
					$microwave_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["ubicada en el área colonial", "2 habitaciones con cama matrimonial", "1 habitación con 2 camas individuales", "2 baños", "wifi", "televisor con DirecTV", "mini sala de estar", "nevera ejecutiva y microondas", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Suite Ejecutiva" => [
			"nombre de habitación" => "Suite Ejecutiva", 
			"habitaciones disponibles" => [
				194,195
			],
			"datos de habitación" => [
				[
					"suite_ejecutiva_1_3840x2160.webp",
					"suite_ejecutiva_2_3840x2160.webp",
					"suite_ejecutiva_3_3840x2160.webp",
					"suite_ejecutiva_4_3840x2160.webp",
				],
				"room_5_360.JPG", "suite_ejecutiva_1_960x540.webp",
				2, 135,
				15,
				[$capacity_2_adult_array, $capacity_3_adult_array],
				"3_adult.svg", 3, 2, 2, 2,
				[
					$king_size_bed_asset,
					$sofa_bed_asset,
					$hair_dryer_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["ubicada en el área ejecutiva", "cama King size", "habitación modernizada", "2 baños", "2 ambientes", "sala de estar", "escritorio", "sofá cama", "wifi", "televisor con DirecTV", "nevera ejecutiva", "caja fuerte", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Suite Nupcial" => [
			"nombre de habitación" => "Suite Nupcial", 
			"habitaciones disponibles" => [
				201
			],
			"datos de habitación" => [
				[
					"suite_nupcial_1_3840x2160.webp",
					"suite_nupcial_2_3840x2160.webp",
					"suite_nupcial_3_3840x2160.webp",
				],
				"room_5_360.JPG", "suite_nupcial_1_960x540.webp",
				1, 116,
				15,
				[$capacity_2_adult_array],
				"2_persons.svg", 2, 2, 2, 1,
				[
					$king_size_bed_asset,
					$jacuzzi_asset,
					$hair_dryer_asset,
					$desk_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["ubicada en el área ejecutiva", "cama King size", "jacuzzi", "wifi", "televisor con DirecTV", "nevera ejecutiva", "secador de cabello", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Doble Deluxe" => [
			"nombre de habitación" => "Doble Deluxe", 
			"habitaciones disponibles" => [
				102,103,104,105,106,107,108,109,110,111,112,113,114,115, 
				202,203,204,205,206,207, 
				210,
				213, 
				181,182,183,184,185,186, 
				196
			],
			"datos de habitación" => [
				[
					"doble_deluxe_1_3840x2160.webp",
					"doble_deluxe_2_3840x2160.webp",
					"doble_deluxe_3_3840x2160.webp",
				],
				"room_5_360.JPG", "doble_deluxe_3_960x540.webp",
				29, 107.5,
				15,
				[$capacity_2_adult_2_children_array, $capacity_4_adult_array],
				"4_adult.svg", 4, 3, 3, 3,
				[
					$bed_regular_double_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["ubicada en el área ejecutiva", "2 camas matrimoniales en un mismo ambiente", "escritorio", "wifi", "nevera ejecutiva", "caja fuerte", "televisor con DirecTV", "secador de cabello", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"
				]
			]
		],
		"King Deluxe" => [
			"nombre de habitación" => "King Deluxe", 
			"habitaciones disponibles" => [
				211,212
			],
			"datos de habitación" => [
				[
					"king_deluxe_1_3840x2160.webp",
					"king_deluxe_2_3840x2160.webp",
					"king_deluxe_3_3840x2160.webp",
					"king_deluxe_4_3840x2160.webp",
				],
				"room_5_360.JPG", "king_deluxe_3_960x540.webp",
				2, 100,
				15,
				[$capacity_2_adult_array,],
				"2_adult.svg", 2, 2, 2, 1,
				[
					$bed_queen_asset,
					$special_capabilities_service_asset,
					$desk_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["ubicada en el área ejecutiva", "cama King size", "escritorio", "wifi", "televisor con DirecTV", "caja fuerte", "ducha de manos", "secador de cabello", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Especial Deluxe" => [
			"nombre de habitación" => "Especial Deluxe", 
			"habitaciones disponibles" => [
				101,176,197,84
			],
			"datos de habitación" => [
				[
					"especial_deluxe_1_3840x2160.webp",
					"especial_deluxe_2_3840x2160.webp",
					"especial_deluxe_3_3840x2160.webp",
					"especial_deluxe_4_3840x2160.webp",
				],
				"room_5_360.JPG", "especial_deluxe_1_960x540.webp",
				1, 100,
				15,
				[$capacity_2_adult_array,],
				"2_adult.svg", 2, 2, 2, 1,
				[
					$bed_queen_asset,
					$special_capabilities_service_asset,
					$desk_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["acondicionada para capacidades especiales","ubicada en el área ejecutiva", "cama Queen size", "escritorio", "wifi", "televisor con DirecTV", "caja fuerte", "ducha de manos", "secador de cabello", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Matrimonial Ejecutiva" => [
			"nombre de habitación" => "Matrimonial Ejecutiva", 
			"habitaciones disponibles" => [
				177,178,179,180,
				187,188,189,190,191,192,193,
				198,
				199
			],
			"datos de habitación" => [
				[
					"matrimonial_ejecutiva_1_3840x2160.webp",
					"matrimonial_ejecutiva_2_3840x2160.webp",
				],
				"room_5_360.JPG", "matrimonial_ejecutiva_2_960x540.webp",
				13, 92,
				15,
				[$capacity_2_adult_array],
				"2_adult.svg", 2, 2, 2, 1,
				[
					$bed_regular_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["ubicada en el área ejecutiva", "cama matrimonial", "wifi", "nevera ejecutiva", "caja fuerte", "televisor con DirecTV", "secador de cabello", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Semi Suite" => [
			"nombre de habitación" => "Semi Suite", 
			"habitaciones disponibles" => [
				51,52,53,54,55,56
			],
			"datos de habitación" => [
				[
					"semi_suite_1_3840x2160.webp",
					"semi_suite_2_3840x2160.webp",
					"semi_suite_3_3840x2160.webp",
				],
				"room_5_360.JPG", "semi_suite_1_960x540.webp",
				6, 74.7,
				15,
				[$capacity_2_adult_array],
				"2_adult.svg", 2, 2, 2, 1,
				[
					$bed_regular_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["ubicada en el área colonial", "cama matrimonial", "2 ambientes", "mini sala de estar", "wifi", "televisor con NetUno", "nevera ejecutiva", "aire acondicionado", "agua caliente", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Doble Colonial" => [
			"nombre de habitación" => "Doble Colonial", 
			"habitaciones disponibles" => [
				12,13,14,15,16,17,18,19,20,21, 
				41,42,43,44,45,46, 
				76, 82, 83
			],
			"datos de habitación" => [
				[
					"doble_colonial_1_3840x2160.webp",
					"doble_colonial_2_3840x2160.webp",
					"doble_colonial_3_3840x2160.webp",
				],
				"room_5_360.JPG", "doble_colonial_2_960x540.webp",
				19, 70.7,
				15,
				[$capacity_2_adult_2_children_array, $capacity_4_adult_array],
				"4_adult.svg", 4, 3, 3, 3,
				[
					$bed_regular_double_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["ubicada en el área colonial", "2 camas matrimoniales en un mismo ambiente", "wifi", "televisor con NetUno", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
			]
		],
		"Matrimonial Colonial" => [
			"nombre de habitación" => "Matrimonial Colonial", 
			"habitaciones disponibles" => [
				35,36,37,38,39,40,
				73,74,75,
				77,78,80,81,85
			],
			"datos de habitación" => [
				[
					"matrimonial_colonial_1_3840x2160.webp",
					"matrimonial_colonial_2_3840x2160.webp",
				],
				"room_5_360.JPG", "matrimonial_colonial_1_960x540.webp",
				14, 58.7,
				15,
				[$capacity_2_adult_array],
				"2_adult.svg", 2, 2, 2, 1,
				[
					$bed_regular_asset,
					$tv_asset,
					$wifi_asset,
					$safe_asset,
					$executive_fridge_asset,
				],
				["ubicada en el área colonial", "cama matrimonial", "wifi", "televisor con NetUno", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
			]
		],
	];

	$all_rooms_id = [
		"Suite Presidencial" => [
			209
		],
		"Suite Presidencial Junior" => [
			208
		],
		"Cabaña" => [
			47,48,49,50,57,58,59
		],
		"Suite Ejecutiva" => [
			194,195
		],
		"Suite Nupcial" => [
			201
		],
		"Doble Deluxe" => [
			102,103,104,105,106,107,108,109,110,111,112,113,114,115,
			202,203,204,205,206,207, 
			210,
			213, 
			181,182,183,184,185,186, 
			196
		],
		"King Deluxe" => [
			211,212
		],
		"Especial Deluxe" => [
			101,176,197,84
		],
		"Matrimonial Ejecutiva" => [
			177,178,179,180,
			187,188,189,190,191,192,193,
			198,
			199
		],
		"Semi Suite" => [
			51,52,53,54,55,56
		],
		"Doble Colonial" => [
			12,13,14,15,16,17,18,19,20,21, 
			41,42,43,44,45,46, 
			76, 82, 83
		],
		"Matrimonial Colonial" => [
			35,36,37,38,39,40,
			73,74,75,
			77,78,80,81,85
		],
	];

	$rooms_type_data = [];
	$all_rooms_data_by_type = [];
	$all_rooms_data = [];
	$min_and_max_dates = get_todays_date_and_max_date(1);

	$reservations = sql_command(
		connect_to_database($root_folder), 
		0, 
		"SELECT * from `reservations` WHERE date > '".$min_and_max_dates[1]."' AND departure >= CURDATE();"
	);
	// echo "<br><br>";
	// echo count($reservations ?? []);
	// echo "<br><br>";
	// print_r($reservations ?? []);
	for ($i=0; $i < count($reservations ?? []); $i++) { 
		print_r($reservations[$i]);
		echo "<br><br>";
	};



	
	foreach ($room_types as $room_type) 
	{ 
		$current_room_type = $room_type;
		// print_r($current_room_type["datos de habitación"][3]);
		// echo "<br>";

		$current_room_type_reservations = [];
		foreach ($reservations as $reservation) {
			if ($current_room_type["nombre de habitación"] == $reservation["room_name"]){
				array_push($current_room_type_reservations,[$reservation["room_id"],[$reservation["arrival"],$reservation["departure"]]]);
			};
		};
		
		$current_room_type_all_rooms_data = [];
		$current_modeled_room_type = []; 	
		$room_id_counter = 0;
		for ($j=0; $j < count($current_room_type["habitaciones disponibles"]) /*quantity of rooms of each type*/; $j++) 
		{
			$current_room_type_room_data = $current_room_type["datos de habitación"];
			$current_modeled_current_room = []; 	

			$current_modeled_current_room["id de habitación"] = $current_room_type["habitaciones disponibles"][$j];
			$current_modeled_current_room["número de habitación en registro de administración"] = $current_room_type["habitaciones disponibles"][$j];
			$current_modeled_current_room["nombre de habitación"] = $current_room_type["nombre de habitación"];
			$current_modeled_current_room["datos de habitación"]["fecha disponible inicial"] = $min_and_max_dates[0];
			$current_modeled_current_room["datos de habitación"]["fecha disponible final"] = $min_and_max_dates[2];
			$current_modeled_current_room["datos de habitación"]["imagenes"] = $current_room_type_room_data[0];
			$current_modeled_current_room["datos de habitación"]["imagen 360"] = $current_room_type_room_data[1];
			$current_modeled_current_room["datos de habitación"]["imagen miniatura"] = $current_room_type_room_data[2];
			$current_modeled_current_room["datos de habitación"]["cantidad disponible"] = $current_room_type_room_data[3];
			$current_modeled_current_room["datos de habitación"]["precio por día"] = $current_room_type_room_data[4];
			$current_modeled_current_room["datos de habitación"]["pax"] = $current_room_type_room_data[5];
			$current_modeled_current_room["datos de habitación"]["capacidad"] = $current_room_type_room_data[6];
			$current_modeled_current_room["datos de habitación"]["capacidad cancelando pax imagen"] = $current_room_type_room_data[7];
			$current_modeled_current_room["datos de habitación"]["capacidad cancelando pax numero"] = $current_room_type_room_data[8];
			$current_modeled_current_room["datos de habitación"]["capacidad total"] = $current_room_type_room_data[9];
			$current_modeled_current_room["datos de habitación"]["capacidad adultos"] = $current_room_type_room_data[10];
			$current_modeled_current_room["datos de habitación"]["capacidad niños"] = $current_room_type_room_data[11];
			$current_modeled_current_room["datos de habitación"]["incluye"] = $current_room_type_room_data[12];
			$current_modeled_current_room["datos de habitación"]["descripción"] = $current_room_type_room_data[13];
			if (count($current_room_type_reservations) > 0){
				$room_reservations = [];
				// for ($i=0; $i < count($current_room_type_reservations); $i++) { 
				// 	echo "<br><br>";
				// 	print_r($current_room_type_reservations[$i]);
				// };
				foreach ($current_room_type_reservations as $reservation) {
					if ($current_modeled_current_room["id de habitación"] == $reservation[0]){
						array_push($room_reservations, $reservation[1]);
					};
				};
				if (count($room_reservations) > 0) 
					$current_modeled_current_room["datos de habitación"]["fechas reservadas"] = $room_reservations;
			};

			if ($j == 0) $current_modeled_room_type = $current_modeled_current_room;
			array_push($current_room_type_all_rooms_data, $current_modeled_room_type);
			array_push($all_rooms_data, $current_modeled_current_room);
		};
		array_push($all_rooms_data_by_type, $current_room_type_all_rooms_data);
		array_push($rooms_type_data, $current_modeled_room_type);
	};

	echo "<br>";
	echo "<br>";
	echo "<br>";
	echo "<br>";


	// for ($i=0; $i < count($rooms_type_data); $i++) { 
	// 	echo "<br><br>";
	// 	print_r($rooms_type_data[$i]);
	// };
	// for ($i=0; $i < count($all_rooms_data_by_type); $i++) { 
	// 	echo "<br><br>";
	// 	print_r($all_rooms_data_by_type[$i]);
	// };
	// echo "<br><br>";
	// echo count($all_rooms_data);
	// echo "<br><br>";

	for ($i=0; $i < count($all_rooms_data); $i++) { 
		echo "<br><br>";
		print_r($all_rooms_data[$i]);
	};

?>