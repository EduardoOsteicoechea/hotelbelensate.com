<?php
	include "../_/global.php";
	// define('COMMAND_TYPE_SELECT', 0);
	// define('COMMAND_TYPE_INSERT', 1);
	// define('COMMAND_TYPE_UPDATE', 2);
	// define('COMMAND_TYPE_DELETE', 3);
	// define('COMMAND_TYPE_ALTER',  4);
	// define('COMMAND_TYPE_DROP',   5);
	$sql = "DELETE from ".$reservation_table_name." WHERE id = 1;";
	if (sql_command(connect_to_database(), 3, $sql)){
		echo "successfull delete";
	} else {
		echo "failed delete";
	}
?>