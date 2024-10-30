<?php
	// Called from ../d002.php
	$bed_king_description = "Cama King Size (200cm x 200cm).";
	$bed_queen_description = "Cama Queen Size (180cm x 200cm).";
	$bed_regular_description = "Cama matrimonial (150cm x 200cm).";
	$bed_regular_double_description = "Dos camas matrimoniales, espacio para una familia pequeña.";
	$bed_single_double_description = "Dos camas individuales de tamaño estándar.";
	$sauna_room_description = "Habitación de sauna para la relajación y bienestar.";
	$jacuzzi_description = "Bañera de hidromasaje con chorros de agua y aire.";
	$sofa_bed_description = "Mueble que puede funcionar como sofá durante y cama matrimonial.";
	$special_capabilities_service_description = "Baño acondicionado para capacidades especiales y silla de ruedas.";
	$hair_dryer_description = "Secador de cabello integrado en habitación.";
	$desk_description = "Escritorio de trabajo integrado en habitación.";
	$microwave_description = "Equipo de microondas integrado en habitación.";
	$executive_fridge_description = "Nevera ejecutiva integrada en la habitación.";
	$safe_description = "Bóveda personal para proteger sus pertenencias.";
	$conditioned_air_description = "Acondicionador de aire integrado en la habitación.";
	$tv_description = "Televisor de pantalla plana.";
	$hot_water_description = "Agua acondicionada al gusto.";
	$wifi_description = "Internet de alta velocidad las 24 horas.";

	$capacity_2_adult = "Capacidad para dos adultos.";
	$capacity_2_adult_1_children = "Capacidad para dos adultos y un menor de 11 años.";
	$capacity_2_adult_2_children = "Capacidad para dos adultos y dos menores de 11 años.";
	$capacity_3_adult_1_children = "Capacidad para tres adultos y un menor de 11 años.";
	$capacity_3_adult = "Capacidad para tres adultos.";
	$capacity_3_adult_pax = "Cancelando PAX: Capacidad para tres adultos.";
	$capacity_4_adult = "Cancelando PAX: Capacidad para cuatro adultos.";
	$capacity_6_adult = "Capacidad para seis adultos.";

	
	
	$current_date_miliseconds = round(microtime(true) * 1000);
	$one_month_miliseconds = 30 * 24 * 60 * 60 * 1000;
	$last_month_miliseconds = $current_date_miliseconds - $one_month_miliseconds;
	$seconds = floor($last_month_miliseconds / 1000);
	$date_a_month_ago = date('Y-m-d', $seconds);

	$reservations = sql_command(
		connect_to_database("../"), 
		0, 
		"SELECT * from `reservations` WHERE date > '".$date_a_month_ago."' AND departure >= CURDATE();"
	);

	echo count($reservations ?? []);

	$data = [
		"aaa"=> "Hello",
		"reservations" => $reservations
	];
?>