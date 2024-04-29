<?php
function get_rooms_status_by_type(string $room_type_name): array {
	include "rooms_types_full_data.php";
	include "rooms_taxes_data.php";
	
	$rooms_type_status = [
		"type is enabled" => 1,
		"enabled rooms array" => [],
		"disabled rooms array" => [],

		"admits pax" => 0,
		"type pax amount" => .0,
		"unit pax amount array" => [],

		"has type discount" => 0,
		"type discount amount" => 1,
		"has unit discount" => 0,
		"unit discount array" => [],

		"has type increment" => 0,
		"type increment amount" => 1,
		"has unit increment" => 0,
		"unit increment array" => [],

		"type gross price" => [],
		"type net price" => [],
		"type unit net price array" => [],
	];

	$room_type = $rooms_types_full_data[$room_type_name];
	$room_type_data = $room_type["datos de tipo"];
	$room_type_units_data = $room_type["datos de unidades de tipo"];

	$rooms_type_status["type is enabled"] = $room_type_data["el tipo de habitacion esta habilitado"];
	if ($rooms_type_status["type is enabled"]) {
		for ($j=0; $j < count($room_type_units_data) ; $j++) { 
			$current_room_type_unit = $room_type_units_data[$j];
			if($current_room_type_unit["esta habilitada"] == 1) {
				$rooms_type_status["enabled rooms array"][] = $current_room_type_unit;
			} else {
				$rooms_type_status["disabled rooms array"][] = $current_room_type_unit;
			};
		};
	} else {
		for ($j=0; $j < count($room_type_units_data) ; $j++) { 
			echo "<p>Disabled room</p>";
			$current_room_type_unit = $room_type_units_data[$j];
			$rooms_type_status["disabled rooms array"][] = $current_room_type_unit;
		};
	};

	$rooms_type_status["admits pax"] = $room_type_data["el tipo de habitacion esta habilitado"];
	$rooms_type_status["type pax amount"] = $room_type_data["monto de pax de tipo de habitacion"];
	if ($rooms_type_status["admits pax"]) {
		foreach ($room_type_units_data as $a) {
			if ($rooms_type_status["unit pax amount array"] != $a["monto de pax de unidad en dolares"]) {
				$rooms_type_status["unit pax amount array"][] = $a["monto de pax de unidad en dolares"];
			} else {
				$rooms_type_status["unit pax amount array"][] = $rooms_type_status["type pax amount"];
			};
		};
	};

	if ($room_type_data["monto de descuento de tipo de habitacion"] < 1) {
		$rooms_type_status["has type discount"] = 1;
		$rooms_type_status["type discount amount"] = $room_type_data["monto de descuento de tipo de habitacion"];
	}else {
		$rooms_type_status["type discount amount"] = 1;
	};
	foreach ($room_type_units_data as $a) {
		if ($a["descuento de unidad"] < 1){
			$rooms_type_status["has unit discount"] = 1;
			$rooms_type_status["unit discount array"][] = $a["descuento de unidad"];
		};
	};

	if ($room_type_data["monto de incremento de tipo de habitacion"] < 1) {
		$rooms_type_status["has type increment"] = 1;
		$rooms_type_status["type increment amount"] = $room_type_data["monto de incremento de tipo de habitacion"];
	}else {
		$rooms_type_status["type increment amount"] = 1;
	};
	$rooms_type_status["type increment amount"] = $room_type_data["monto de incremento de tipo de habitacion"];
	foreach ($room_type_units_data as $a) {
		if ($a["incremento de unidad"] > 1){
			$rooms_type_status["has unit increment"] = 1;
			$rooms_type_status["unit increment array"][] = $a["incremento de unidad"];
		};
	};

	/* get prices */
	/* get general prices */
	$rooms_type_status["type gross price"] = $room_type_data["precio bruto de tipo"];
	$rooms_type_status["type net price"] = ($room_type_data["precio bruto de tipo"] * $room_type_data["monto de descuento de tipo de habitacion"]) * $room_type_data["monto de incremento de tipo de habitacion"];
	/* add taxes to net price */
	$rooms_type_status["type net price"] = $rooms_type_status["type net price"] + ($rooms_type_status["type net price"] * $taxes_data["iva"]) + ($rooms_type_status["type net price"] * $taxes_data["monto de impuesto 2"]) + ($rooms_type_status["type net price"] * $taxes_data["monto de impuesto 3"]);
	/* particularize prices by rooms (if required) */
	foreach ($room_type_units_data as $a) {
		if ($a["descuento de unidad"] < 1 || $a["incremento de unidad"] > 1){
			$rooms_type_status["type unit net price array"][] = ($room_type_data["precio bruto de tipo"] * $a["descuento de unidad"]) * $a["incremento de unidad"];
		} else {
			$rooms_type_status["type unit net price array"][] = $rooms_type_status["type net price"]; 
		};
	};

	
	


	print_r($rooms_type_status );
	echo "<h2>Data of current room type</h2>";
	foreach ($rooms_type_status as $a => $b) { 
		if (!is_array($b)) echo ("<br><b>--" . $a . ":</b> " . $b . "");
		else {
			echo "<br><b>--" . $a . ":</b> ";
			print_r($b);
		};
	};

	return $rooms_type_status;
};
?>