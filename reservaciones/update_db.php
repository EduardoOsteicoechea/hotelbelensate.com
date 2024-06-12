<?php
	include "../_/global.php";
	// define('COMMAND_TYPE_SELECT', 0);
	// define('COMMAND_TYPE_INSERT', 1);
	// define('COMMAND_TYPE_UPDATE', 2);
	// define('COMMAND_TYPE_DELETE', 3);
	// define('COMMAND_TYPE_ALTER',  4);
	// define('COMMAND_TYPE_DROP',   5);
	$conn = connect_to_database();
	$sql = "UPDATE `".$reservation_table_name."` SET ".create_param_formated_update_table_string()." WHERE id = 3;";
	echo $sql;
	$params = set_reservation_field_params(
		"2024-04-29",
		"2024-04-30",
		"Eduardo",
		"Osteicoechea",
		"eduardooost@gmail.com",
		"04147281033",
		"+584147281033",
		1,
		"",
		"Presidencial Master",
		"215",
		1,
		"0",
		"",
	);
	sql_command($conn, 2, $sql, $params);
?>