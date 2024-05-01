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
	$reservation_fields_sql_string .= 'admits_pax' . ", ";
	$reservation_fields_sql_string .= 'pax_amount' . ", ";
	$reservation_fields_sql_string .= 'discount_percentage' . ", ";
	$reservation_fields_sql_string .= 'increment_percentage' . ", ";
	$reservation_fields_sql_string .= 'price_gross' . ", ";
	$reservation_fields_sql_string .= 'capacity_default' . ", ";
	$reservation_fields_sql_string .= 'capacity_pax' . ", ";
	$reservation_fields_sql_string .= 'capacity_adult' . ", ";
	$reservation_fields_sql_string .= 'capacity_children' . ", ";
	$reservation_fields_sql_string .= 'services_items' . ", ";
	$reservation_fields_sql_string .= 'description_items' . ", ";
	$reservation_fields_sql_string .= 'images_3840x2160' . ", ";
	$reservation_fields_sql_string .= 'images_1080x1960' . ", ";
	$reservation_fields_sql_string .= 'images_thumbnail' . ", ";
	$reservation_fields_sql_string .= 'images_360' . ", ";
	$reservation_fields_sql_string .= 'images_capacity_default' . ", ";
	$reservation_fields_sql_string .= 'images_capacity_pax';
	$reservation_fields_sql_string .= ')';

	$reservation_fields_sql_bind_parameters  = "";
	$reservation_fields_sql_bind_parameters .= "(";
	$reservation_fields_sql_bind_parameters .= ':name' . ", ";
	$reservation_fields_sql_bind_parameters .= ':admits_pax' . ", ";
	$reservation_fields_sql_bind_parameters .= ':pax_amount' . ", ";
	$reservation_fields_sql_bind_parameters .= ':discount_percentage' . ", ";
	$reservation_fields_sql_bind_parameters .= ':increment_percentage' . ", ";
	$reservation_fields_sql_bind_parameters .= ':price_gross' . ", ";
	$reservation_fields_sql_bind_parameters .= ':capacity_default' . ", ";
	$reservation_fields_sql_bind_parameters .= ':capacity_pax' . ", ";
	$reservation_fields_sql_bind_parameters .= ':capacity_adult' . ", ";
	$reservation_fields_sql_bind_parameters .= ':capacity_children' . ", ";
	$reservation_fields_sql_bind_parameters .= ':services_items' . ", ";
	$reservation_fields_sql_bind_parameters .= ':description_items' . ", ";
	$reservation_fields_sql_bind_parameters .= ':images_3840x2160' . ", ";
	$reservation_fields_sql_bind_parameters .= ':images_1080x1960' . ", ";
	$reservation_fields_sql_bind_parameters .= ':images_thumbnail' . ", ";
	$reservation_fields_sql_bind_parameters .= ':images_360' . ", ";
	$reservation_fields_sql_bind_parameters .= ':images_capacity_default' . ", ";
	$reservation_fields_sql_bind_parameters .= ':images_capacity_pax';
	$reservation_fields_sql_bind_parameters .= ')';

	// $conn = connect_to_database($root_folder);
	$sql = "INSERT INTO `room_types` ".$reservation_fields_sql_string." VALUES ".$reservation_fields_sql_bind_parameters." ;";
	$params = set_reservation_field_params_for_room_types([
		"name" => 'Matrimonial Colonial',
		"admits_pax" => 0,
		"pax_amount" => 0,
		"discount_percentage" => 1,
		"increment_percentage" => 1,
		"price_gross" => 49.3,
		"capacity_default" => 2,
		"capacity_pax" => 0,
		"capacity_adult" => 2,
		"capacity_children" => 1,

		"services_items" => "cama matrimonial, wifi, nevera ejecutiva, microondas, caja fuerte, televisor con directv, nevera ejecutiva, caja fuerte, aire acondicionado, agua caliente",

		"description_items" => "cama matrimonial, wifi, nevera ejecutiva, microondas, caja fuerte, televisor con directv, nevera ejecutiva, caja fuerte, aire acondicionado, agua caliente",

		"images_3840x2160" => "matrimonial_colonial_1_3840x2160,matrimonial_colonial_2_3840x2160",

		"images_1080x1960" => "",
		"images_thumbnail" => 'matrimonial_colonial_1_960x540.webp',
		"images_360" => "",
		"images_capacity_default" => "2_adult.svg",
		"images_capacity_pax" => "",
	]);
	// sql_command($conn, 1, $sql, $params);
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