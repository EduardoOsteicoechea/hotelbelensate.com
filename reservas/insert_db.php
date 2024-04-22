<?php
	include "../_/global.php";
	// define('COMMAND_TYPE_SELECT', 0);
	// define('COMMAND_TYPE_INSERT', 1);
	// define('COMMAND_TYPE_UPDATE', 2);
	// define('COMMAND_TYPE_DELETE', 3);
	// define('COMMAND_TYPE_ALTER',  4);
	// define('COMMAND_TYPE_DROP',   5);
	$conn = connect_to_database($root_folder);
	$sql = "INSERT INTO `".$reservation_table_name."` ".$reservation_fields_sql_string." VALUES ".$reservation_fields_placeholders." ;";
	$params = set_reservation_field_params(
		"2024-05-15",
		"2024-05-16",
		"Eduardo",
		"Osteicoechea",
		"eduardooost@gmail.com",
		"04147281033",
		"+584147281033",
		1,
		"",
		"Suite Presidencial Junior",
		"215",
		208,
		"0",
		"",
	);
	sql_command($conn, 1, $sql, $params);
?>