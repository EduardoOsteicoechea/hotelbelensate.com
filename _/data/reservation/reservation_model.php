<?php
	$reservation_table_name = "reservations";
	
	$reservation_fields = [
		0 => "id",
		1 => "date",
		2 => "arrival",
		3 => "departure",
		4 => "client_first_name",
		5 => "client_last_name",
		6 => "client_email",
		7 => "client_phone",
		8 => "client_whatsapp",
		9 => "client_id",
		10 => "client_cupon",
		11 => "room_name",
		12 => "room_price",
		13 => "room_id",
		14 => "room_pax",
		15 => "room_aditional_consideration",
	];

	// $reservation_fields_placeholders = [
	// 	0 => ':id',
	// 	1 => ':date',
	// 	2 => ':arrival',
	// 	3 => ':departure',
	// 	4 => ':client_first_name',
	// 	5 => ':client_last_name',
	// 	6 => ':client_email',
	// 	7 => ':client_phone',
	// 	8 => ':client_whatsapp',
	// 	9 => ':client_id',
	// 	10 => ':client_cupon',
	// 	11 => ':room_name',
	// 	12 => ':room_price',
	// 	13 => ':room_id',
	// 	14 => ':room_pax',
	// 	15 => ':room_aditional_consideration',
	// ];

	$reservation_fields_sql_string = "(";
	$reservation_fields_sql_string .= "`".$reservation_fields[2]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[3]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[4]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[5]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[6]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[7]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[8]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[9]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[10]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[11]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[12]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[13]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[14]."`" . ", ";
	$reservation_fields_sql_string .= "`".$reservation_fields[15]."`" . ")";

	$reservation_fields_placeholders  = "";
	$reservation_fields_placeholders .= "(";
	$reservation_fields_placeholders .= ':arrival' . ", ";
	$reservation_fields_placeholders .= ':departure' . ", ";
	$reservation_fields_placeholders .= ':client_first_name' . ", ";
	$reservation_fields_placeholders .= ':client_last_name' . ", ";
	$reservation_fields_placeholders .= ':client_email' . ", ";
	$reservation_fields_placeholders .= ':client_phone' . ", ";
	$reservation_fields_placeholders .= ':client_whatsapp' . ", ";
	$reservation_fields_placeholders .= ':client_id' . ", ";
	$reservation_fields_placeholders .= ':client_cupon' . ", ";
	$reservation_fields_placeholders .= ':room_name' . ", ";
	$reservation_fields_placeholders .= ':room_price' . ", ";
	$reservation_fields_placeholders .= ':room_id' . ", ";
	$reservation_fields_placeholders .= ':room_pax' . ", ";
	$reservation_fields_placeholders .= ':room_aditional_consideration';
	$reservation_fields_placeholders .= ')';

	function create_param_formated_update_table_string() {
		$fields_names = [
			"arrival",
			"departure",
			"client_first_name",
			"client_last_name",
			"client_email",
			"client_phone",
			"client_whatsapp",
			"client_id",
			"client_cupon",
			"room_name",
			"room_price",
			"room_id",
			"room_pax",
			"room_aditional_consideration",
		];
		$fields_placeholders = [
			':arrival',
			':departure',
			':client_first_name',
			':client_last_name',
			':client_email',
			':client_phone',
			':client_whatsapp',
			':client_id',
			':client_cupon',
			':room_name',
			':room_price',
			':room_id',
			':room_pax',
			':room_aditional_consideration',
		];
		$param_formated_update_table_string = "";
		for ($i=0; $i < count($fields_placeholders); $i++) { 
			if ($i < count($fields_placeholders) - 1)
				$param_formated_update_table_string .= "`".$fields_names[$i] . "` = " . $fields_placeholders[$i] . ", ";
			else
			$param_formated_update_table_string .= "`".$fields_names[$i] . "` = " . $fields_placeholders[$i];
		};
		return $param_formated_update_table_string;
	};

	function set_reservation_field_params(
		string $arrival,
		string $departure,
		string $client_first_name,
		string $client_last_name,
		string $client_email,
		string $client_phone,
		string $client_whatsapp,
		int $client_id,
		string $client_cupon,
		string $room_name,
		string $room_price,
		int $room_id,
		string $room_pax,
		string $room_aditional_consideration,
	){
		$reservation_fields_params = [
			':arrival' => $arrival,
			':departure' => $departure,
			':client_first_name' => $client_first_name,
			':client_last_name' => $client_last_name,
			':client_email' => $client_email,
			':client_phone' => $client_phone,
			':client_whatsapp' => $client_whatsapp,
			':client_id' => $client_id,
			':client_cupon' => $client_cupon,
			':room_name' => $room_name,
			':room_price' => $room_price,
			':room_id' => $room_id,
			':room_pax' => $room_pax,
			':room_aditional_consideration' => $room_aditional_consideration,
		];
		return $reservation_fields_params;
	}

?>