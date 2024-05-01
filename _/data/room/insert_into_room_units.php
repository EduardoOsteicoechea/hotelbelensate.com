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
	$reservation_fields_sql_string .= 'type' . ", ";
	$reservation_fields_sql_string .= 'number_in_administration_records' . ", ";
	$reservation_fields_sql_string .= 'is_enabled' . ", ";
	$reservation_fields_sql_string .= 'admits_pax' . ", ";
	$reservation_fields_sql_string .= 'pax_amount' . ", ";
	$reservation_fields_sql_string .= 'discount_percentage' . ", ";
	$reservation_fields_sql_string .= 'increment_percentage' . ", ";
	$reservation_fields_sql_string .= 'added_value_items' . ", ";
	$reservation_fields_sql_string .= 'services_items' . ", ";
	$reservation_fields_sql_string .= 'location';
	$reservation_fields_sql_string .= ')';

	$reservation_fields_sql_bind_parameters  = "";
	$reservation_fields_sql_bind_parameters .= "(";
	$reservation_fields_sql_bind_parameters .= ':type' . ", ";
	$reservation_fields_sql_bind_parameters .= ':number_in_administration_records' . ", ";
	$reservation_fields_sql_bind_parameters .= ':is_enabled' . ", ";
	$reservation_fields_sql_bind_parameters .= ':admits_pax' . ", ";
	$reservation_fields_sql_bind_parameters .= ':pax_amount' . ", ";
	$reservation_fields_sql_bind_parameters .= ':discount_percentage' . ", ";
	$reservation_fields_sql_bind_parameters .= ':increment_percentage' . ", ";
	$reservation_fields_sql_bind_parameters .= ':added_value_items' . ", ";
	$reservation_fields_sql_bind_parameters .= ':services_items' . ", ";
	$reservation_fields_sql_bind_parameters .= ':location';
	$reservation_fields_sql_bind_parameters .= ')';

	// $conn = connect_to_database($root_folder);
	$room_numbers = [1];
	$room_type = "Matrimonial Colonial";
	foreach ($room_numbers as $a) {	
		$sql = "INSERT INTO `room_units` ".$reservation_fields_sql_string." VALUES ".$reservation_fields_sql_bind_parameters." ;";
		$params = set_reservation_field_params_for_room_types([
			"type" => $room_type,
			"number_in_administration_records" => $a,
			"is_enabled" => 1,
			"admits_pax" => 1,
			"pax_amount" => 15,
			"discount_percentage" => 1,
			"increment_percentage" => 1,
			"added_value_items" => "",
			"services_items" => "",
			"location" => "área colonial",
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
	}
?>