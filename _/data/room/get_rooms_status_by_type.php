<?php
function get_rooms_status_by_type(string $room_type_name): array {
	include "phisical_rooms_data_for_ui.php";
	$rooms_type_status = [
		"type is enabled" => 1,
		"enabled rooms array" => [],
		"disabled rooms array" => [],

		"admits pax" => 0,
		"type pax amount" => .0,
		"unit pax amount array" => [],

		"has type discount" => 0,
		"type discount" => 0,

		"has type increment" => 0,
		"type increment" => .0,

		"has unit discount" => 0,
		"unit discount array" => [],

		"has unit increment" => 0,
		"unit increment array" => [],
	];
	for ($i=0; $i < count($phisical_rooms_data_for_ui[$room_type_name]) ; $i++) { 
		$room_type = $phisical_rooms_data_for_ui[$room_type_name];
		$room_type_data = $room_type["datos de tipo"];
		$room_type_units_data = $room_type["datos de unidades de tipo"];

		$rooms_type_status["type is enabled"] = $room_type_data["el tipo de habitacion esta habilitado"];
		if ($rooms_type_status["type is enabled"] == 1) {
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
				$current_room_type_unit = $room_type_units_data[$j];
				$rooms_type_status["disabled rooms array"][] = $current_room_type_unit;
			};
		};

		$rooms_type_status["admits pax"] = $room_type_data["el tipo de habitacion esta habilitado"];
		if ($rooms_type_status["admits pax"] == 1) {
			for ($j=0; $j < count($room_type_units_data) ; $j++) { 
				$current_room_type_unit = $room_type_units_data[$j];
				if($current_room_type_unit["esta habilitada"] == 1) {
					$rooms_type_status["enabled rooms array"][] = $current_room_type_unit;
				} else {
					$rooms_type_status["disabled rooms array"][] = $current_room_type_unit;
				};
			};
		};
	};

	
	for ($j=0; $j < count($room_type_units_data) ; $j++) { 
		echo "<br><br>";
		print_r($phisical_rooms_data_for_ui[$room_type_name]);
	};

	echo "<br><br>";
	echo "<br><br>";
	echo "<br><br>";

	foreach ($rooms_type_status as $a => $b) { 
		echo ("<br>" . $a . ": " . $b . "");
	};

	return $rooms_type_status;
};
?>