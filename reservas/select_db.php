<?php
	include "../_/global.php";
	// define('COMMAND_TYPE_SELECT', 0);
	// define('COMMAND_TYPE_INSERT', 1);
	// define('COMMAND_TYPE_UPDATE', 2);
	// define('COMMAND_TYPE_DELETE', 3);
	// define('COMMAND_TYPE_ALTER',  4);
	// define('COMMAND_TYPE_DROP',   5);
	$sql = "SELECT * from ".$reservation_table_name.";";
	foreach (sql_command(connect_to_database(), 0, $sql) as $a) {
		print_r($a);
		echo "<br><br>";
	};
?>