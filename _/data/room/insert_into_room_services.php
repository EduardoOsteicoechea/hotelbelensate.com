<?php
	include "../../global.php";
	// define('COMMAND_TYPE_SELECT', 0);
	// define('COMMAND_TYPE_INSERT', 1);
	// define('COMMAND_TYPE_UPDATE', 2);
	// define('COMMAND_TYPE_DELETE', 3);
	// define('COMMAND_TYPE_ALTER',  4);
	// define('COMMAND_TYPE_DROP',   5);
	$reservation_fields_sql_string  = "";
	$reservation_fields_sql_string .= "(";
	$reservation_fields_sql_string .= 'name' . ", ";
	$reservation_fields_sql_string .= 'is_enabled' . ", ";
	$reservation_fields_sql_string .= 'description_short' . ", ";
	$reservation_fields_sql_string .= 'description_medium' . ", ";
	$reservation_fields_sql_string .= 'description_long' . ", ";
	$reservation_fields_sql_string .= 'icon' . ", ";
	$reservation_fields_sql_string .= 'image' . ", ";
	$reservation_fields_sql_string .= 'price' . ", ";
	$reservation_fields_sql_string .= 'discount_percentage' . ", ";
	$reservation_fields_sql_string .= 'increment_percentage';
	$reservation_fields_sql_string .= ')';

	$reservation_fields_sql_bind_parameters  = "";
	$reservation_fields_sql_bind_parameters .= "(";
	$reservation_fields_sql_bind_parameters .= ':name' . ", ";
	$reservation_fields_sql_bind_parameters .= ':is_enabled' . ", ";
	$reservation_fields_sql_bind_parameters .= ':description_short' . ", ";
	$reservation_fields_sql_bind_parameters .= ':description_medium' . ", ";
	$reservation_fields_sql_bind_parameters .= ':description_long' . ", ";
	$reservation_fields_sql_bind_parameters .= ':icon' . ", ";
	$reservation_fields_sql_bind_parameters .= ':image' . ", ";
	$reservation_fields_sql_bind_parameters .= ':price' . ", ";
	$reservation_fields_sql_bind_parameters .= ':discount_percentage' . ", ";
	$reservation_fields_sql_bind_parameters .= ':increment_percentage';
	$reservation_fields_sql_bind_parameters .= ')';

	$names = [
		"2 niveles" => "2 Niveles ",
		"2 habitaciones amplias" => "Dos habitaciones grandes de gran comodidad",
		"2 habitaciones" => "Dos habitaciones independientes",
		"2 camas king size" => "Dos camas King size, máxima comodidad",
		"2 camas queen size" => "Dos camas Queen size, espacio para una familia pequeña",
		"2 camas matrimoniales" => "Dos camas matrimoniales, espacio para una familia pequeña",
		"2 camas individuales" => "Dos camas individuales de tamaño estándar",
		"camas king size" => "Cama King Size (200cm x 200cm)",
		"camas queen size" => "Cama Queen Size (180cm x 200cm)",
		"camas matrimonial" => "Cama matrimonial (150cm x 200cm)",
		"camas individual" => "Cama individual (900cm x 200cm)",
		"2 baños" => "2 Baños independientes",
		"cuarto de sauna" => "Habitación de sauna para la relajación y bienestar",
		"jacuzzi" => "Bañera de hidromasaje con chorros de agua y aire",
		"sala de estar" => "Espacio con muebles y centro de mesa",
		"mini sala de estar" => "Espacio con muebles y centro de mesa",
		"acondicionamiento para capacidades especiales" => "Baño acondicionado para personas con capacidades especiales y silla de ruedas",
		"sofá cama" => "Mueble que puede funcionar como sofá durante y cama matrimonial",
		"secador de cabello" => "Secador de cabello integrado en habitación",
		"escritorio" => "Escritorio de trabajo integrado en habitación",
		"wifi" => "Internet de alta velocidad las 24 horas",
		"nevera ejecutiva" => "Nevera ejecutiva integrada en la habitación",
		"microondas" => "Equipo de microondas integrado en habitación",
		"caja fuerte" => "Bóveda personal para proteger sus pertenencias",
		"televisor con directv" => "Televisor de pantalla plana",
		"nevera ejecutiva" => "Nevera ejecutiva integrada en la habitación",
		"aire acondicionado" => "Acondicionador de aire integrado en la habitación",
		"agua" => "Agua acondicionada al gusto",
	];

	foreach ($names as $a => $b) {
		// $conn = connect_to_database($root_folder);
		$sql = "INSERT INTO `room_services` ".$reservation_fields_sql_string." VALUES ".$reservation_fields_sql_bind_parameters." ;";
		$params = set_reservation_field_params_for_room_types([
			"name" => $a,
			"is_enabled" => 1,
			"description_short" => $b,
			"description_medium" => "",
			"description_long" => "",
			"icon" => "",
			"image" => "",
			"price" => 0,
			"discount_percentage" => 1,
			"increment_percentage" => 1,
		]);
		// sql_command($conn, 1, $sql, $params);
	};
	echo "<h1>The script is coded but disabled</h1>";

	function set_reservation_field_params_for_room_types(
		array $arguments
	){
		$binded_params = [];
		foreach ($arguments as $a => $b) {
			$binded_params[":".$a] = $b;
		};
		return $binded_params;
	};
?>