<?php

	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// Obtain the root folder of each invoking file
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	
	$domain_name                            = 'hotelbelensate.com';
	$hosting_provider                       = 'hostinger';

   $current_file_location                  = debug_backtrace()[0]['file'];
	$path_array                             = str_contains($current_file_location,'\\') ? explode('\\', $current_file_location): explode('/', $current_file_location);
	$path_array_length                      = count($path_array) - 1;
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

	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// Declare and store the location of the permanently used folders in the application
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
 
	$component_folder = $root_folder . '_/component/';
	
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// Data commands
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	
	include 'database/connection.php';
	include 'database/sql_command.php';
	include 'data/reservation/reservation_model.php';
	
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// Include and print page layout html in each invoking page
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////

	include_once $root_folder . "_/page/page_001/class.php";

	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// Declare the functions to be used recurringly in the application
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////

	function add_style_tag($component_name, $component_folder)
	{
		return '
			<script>
				const '.$component_name.' = document.createElement("link");
				'.$component_name.'.setAttribute("rel","stylesheet");
				'.$component_name.'.setAttribute("href","'.$component_folder.'/style.css");
				document.head.appendChild('.$component_name.');	
			</script>
		';
	};

	function get_todays_date_and_max_date(int $number_of_monts){
		$current_date_miliseconds = round(microtime(true) * 1000);

		$month_quantity_miliseconds = (30 * 24 * 60 * 60 * 1000) * $number_of_monts;
		$minimum_month_miliseconds = $current_date_miliseconds - $month_quantity_miliseconds;
		$maximum_month_miliseconds = $current_date_miliseconds + $month_quantity_miliseconds;
		
		$seconds_todays_date = floor($current_date_miliseconds / 1000);
		$todays_date = date('Y-m-d', $seconds_todays_date);

		$seconds_for_minimum_date = floor($minimum_month_miliseconds / 1000);
		$date_a_month_ago = date('Y-m-d', $seconds_for_minimum_date);

		$seconds_for_maximum_date = floor($maximum_month_miliseconds / 1000);
		$date_a_month_from_today = date('Y-m-d', $seconds_for_maximum_date);


		$date_for_day_quantity_calculation_1 = new DateTime($todays_date);
		$date_for_day_quantity_calculation_2 = new DateTime($date_a_month_from_today);

		$day_quantity = ($date_for_day_quantity_calculation_1->diff($date_for_day_quantity_calculation_2))->days;

		$reservable_dates = [];
		for ($i=0; $i < $day_quantity; $i++) { 
			$date = new DateTime($todays_date);
			$date->add(new DateInterval('P'.$i.'D'));
			array_push($reservable_dates, $date->format('Y-m-d'));		
		};



		return [$todays_date, $date_a_month_ago, $date_a_month_from_today, "day quantity" => $day_quantity, "reservable dates" => $reservable_dates];
	};

	

	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// Start session in each page of the application
	///////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////

	session_start();
	
?>
