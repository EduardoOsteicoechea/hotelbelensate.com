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
 
	$layout_folder = $root_folder . '_/layout/';
	$component_folder = $root_folder . '_/component/';
	$controllers_folder = $root_folder . '_/controllers/';
	
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

	include $root_folder . '_/page/page_001/class.php';
	include $layout_folder . 'page_top.php';

	include $component_folder . 'hero/h1_p_a_a_hero/h1_p_a_a_hero.php';
	include $component_folder . 'hero/h1_p_a_hero/h1_p_a_hero.php';
	include $component_folder . 'hero/h2_a_DARK_HERO/h2_a_DARK_HERO.php';

	include $component_folder . 'carrousel/centered_info_title_address_price/centered_info_title_address_price.php';

	include $component_folder . 'heading/strip_HEADING/strip_HEADING.php';
	include $component_folder . 'heading/strip_highlighted_HEADING/strip_highlighted_HEADING.php';

	include $component_folder . 'viewer/T_none_L_h3_p_ul_h4_R_controls_strip_VIEWER/T_none_L_h3_p_ul_h4_R_controls_strip_VIEWER.php';
	include $component_folder . 'viewer/L_info_R_strip_VIEWER/L_info_R_strip_VIEWER.php';
	include $component_folder . 'viewer/L_h3_p_ul_h4_R_controls_strip_VIEWER/L_h3_p_ul_h4_R_controls_strip_VIEWER.php';
	include $component_folder . 'viewer/L_h3_p_a_R_controls_strip_VIEWER/L_h3_p_a_R_controls_strip_VIEWER.php';
	include $component_folder . 'viewer/strip_message_strip_VIEWER/strip_message_strip_VIEWER.php';
	include $component_folder . 'viewer/strip_silding_VIEWER/strip_silding_VIEWER.php';
	include $component_folder . 'viewer/hero_data_article_VIEWER/hero_data_article_VIEWER.php';

	
	include $root_folder . '_/component/header/h001/h001.php';
	include $root_folder . '_/component/header/h002/h002.php';
	include $root_folder . '_/component/footer/f001/f001.php';
	include $root_folder . '_/component/footer/f002/f002.php';
	include $root_folder . '_/component/awaiter/a001/a001.php';
	include $root_folder . '_/component/awaiter/a002/a002.php';

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
	function add_global_style_tag($root_folder)
	{
		return '
			<script>
				const global_style_tag = document.createElement("link")
				global_style_tag.setAttribute("rel","stylesheet");
				global_style_tag.setAttribute("href","'.$root_folder.'_/global.css");
				document.head.appendChild(global_style_tag);	
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
