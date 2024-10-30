<?php 
	include "rooms_models_constants.php";
	include "rooms_numbers_in_administration.php";

	$room_types = [
		
		"Suite Presidencial" => [
			"nombre de habitación" => "Suite Presidencial",
			"habitaciones disponibles" => $rooms_numbers_in_administration["Suite Presidencial"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Suite Presidencial Junior"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Cabaña"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Suite Ejecutiva"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Suite Nupcial"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Doble Deluxe"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["King Deluxe"],
			"datos de habitación" => [
				[
					"king_deluxe_1_3840x2160.webp",
					"king_deluxe_2_3840x2160.webp",
					"king_deluxe_3_3840x2160.webp",
					"king_deluxe_4_3840x2160.webp",
				],
				"room_5_360.JPG", "king_deluxe_3_960x540.webp",
				2, 107.5,
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Especial Deluxe"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Matrimonial Ejecutiva"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Semi Suite"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Doble Colonial"],
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
			"habitaciones disponibles" => $rooms_numbers_in_administration["Matrimonial Colonial"],
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
?>