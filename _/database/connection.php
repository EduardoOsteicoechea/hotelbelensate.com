<?php
    function connect_to_database($root_folder) 
    {
		require_once $root_folder.'_/global_config.php';

		$server_name = DB_SERVER_NAME;
		$user_name = DB_USER_NAME;
		$password = DB_PASSWORD;
		$database_name = DB_DATABASE_NAME;

		$server_name_and_database_name = "mysql:host=" . $server_name . ";dbname=" . $database_name ;
		try 
		{
			$conn = new PDO($server_name_and_database_name, $user_name, $password);
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $conn; 
		} 
		catch (PDOException $e) 
		{
			echo 'Connection with '.$database_name.' database failed: ' . $e->getMessage();
		}  
    };
?>