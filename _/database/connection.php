<?php
    function connect_to_database() 
    {
		require_once get_current_root_folder() . '_/global_config.php';

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

	 function get_current_root_folder(){
		$domain_name                            = 'hotelbelensate.com';
		$hosting_provider                       = 'hostinger';
		$current_file_steps_to_root_folder      = 2;

		$current_file_location                  = debug_backtrace()[0]['file'];
		$path_array                             = str_contains($current_file_location,'\\') ? explode('\\', $current_file_location): explode('/', $current_file_location);
		$path_array_length                      = count($path_array) - $current_file_steps_to_root_folder;
		$root_folder_index_in_current_path      = array_search($domain_name, $path_array);

		switch ($hosting_provider) 
		{
			case 'hostinger':
				$hosting_number_of_root_folder_anteceeding_folders = 1;
				$root_folder_distance_from_current_file = $path_array_length - $root_folder_index_in_current_path - $hosting_number_of_root_folder_anteceeding_folders;
				break;
			case 'plesk':
				$hosting_number_of_root_folder_anteceeding_folders = 2;
				$root_folder_distance_from_current_file = $path_array_length - $root_folder_index_in_current_path - $hosting_number_of_root_folder_anteceeding_folders;
				break;
			default:
				$hosting_number_of_root_folder_anteceeding_folders = 1;
				$root_folder_distance_from_current_file = $path_array_length - $root_folder_index_in_current_path - $hosting_number_of_root_folder_anteceeding_folders;
				break;
		};

		$root_folder = '';
		for ($x = 0; $x < $root_folder_distance_from_current_file; $x++) { $root_folder .= '../'; };
		return $root_folder;
	 }
?>