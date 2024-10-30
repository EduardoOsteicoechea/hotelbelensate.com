<?php
require_once "../../global.php";
include "rooms_types_full_data.php";
include "generate_reservation_dates_list_for_room.php";
include "get_rooms_status_by_type.php";

$min_and_max_dates = get_todays_date_and_max_date(2);
$reserved_rooms_ids_and_dates = [];
$currently_available_rooms = [];
$rooms_type_data = [];
$all_rooms_data_by_type = [];
$all_rooms_data = [];
$reservations = sql_command(
	connect_to_database($root_folder), 
	0, 
	"SELECT * from `reservations` WHERE date > '".$min_and_max_dates[1]."' AND departure >= CURDATE();"
);

foreach ($rooms_types_full_data as $room_type) { 
	$current_room_type = $room_type;
	$current_room_type_data = $current_room_type["datos de tipo"];
	$current_room_type_reservations = [];
	foreach ($reservations as $reservation) {
		if ($current_room_type_data["nombre de tipo de habitacion"] == $reservation["room_name"]){
			array_push($current_room_type_reservations,[$reservation["room_id"],[$reservation["arrival"],$reservation["departure"]]]);
		};
	};
	$room_type_status = get_rooms_status_by_type($current_room_type_data["nombre de tipo de habitacion"]);
	$current_room_type_all_rooms_data = [];
	$current_modeled_room_type = []; 	
	for ($j=0; $j < count($current_room_type["datos de unidades de tipo"]) ; $j++) {

		
		$current_room_type_room_data = $current_room_type["datos de unidades de tipo"][$j];
		$current_modeled_current_room = []; 	
		$current_modeled_current_room["id de habitación"] = $current_room_type_room_data["número de habitacion en administración"];
		$current_modeled_current_room["ids de todas las habitaciónes habilitadas de este tipo"] = $room_type_status["enabled rooms array"];
		$current_modeled_current_room["ids de todas las habitaciónes desabilitadas de este tipo"] = $room_type_status["disabled rooms array"];
		$current_modeled_current_room["ids de todas las habitaciónes de este tipo"] = array_merge(
			$room_type_status["ids de todas las habitaciónes habilitadas de este tipo"], 
			$room_type_status["ids de todas las habitaciónes desabilitadas de este tipo"]
		);
		$current_modeled_current_room["esta habilitada"] = in_array($current_modeled_current_room["id de habitación"], $current_modeled_current_room["ids de todas las habitaciónes desabilitadas de este tipo"]) ? 0 : 1;
		$current_modeled_current_room["número de habitación en registro de administración"] = $current_modeled_current_room["id de habitación"];
		$current_modeled_current_room["nombre de habitación"] = $current_room_type_data["nombre de tipo de habitacion"];

		$current_modeled_current_room["datos de habitación"]["fecha disponible inicial"] = $min_and_max_dates[0];
		$current_modeled_current_room["datos de habitación"]["fecha disponible final"] = $min_and_max_dates[2];
		$current_modeled_current_room["datos de habitación"]["imagenes de habitación"] = $current_room_type_data["imagenes de habitación"];
		$current_modeled_current_room["datos de habitación"]["imagen 360"] = $current_room_type_data["imagen 360"];
		$current_modeled_current_room["datos de habitación"]["imagen miniatura"] =$current_room_type_data["imagen miniautura"];
		$current_modeled_current_room["datos de habitación"]["cantidad disponible"] = count($current_room_type["datos de unidades de tipo"]);
		$current_modeled_current_room["datos de habitación"]["capacidad"] = $current_room_type_data["capacidad de ocupación predeterminada"];
		$current_modeled_current_room["datos de habitación"]["capacidad cancelando pax imagen"] = $current_room_type_data["imagen predeterminada de capacidad de ocupacion cancelando pax"];
		$current_modeled_current_room["datos de habitación"]["capacidad cancelando pax numero"] = $current_room_type_data["capacidad de ocupación cancelando pax"];
		$current_modeled_current_room["datos de habitación"]["capacidad adultos"] = $current_room_type_data["capacidad de ocupación de adultos"];
		$current_modeled_current_room["datos de habitación"]["capacidad niños"] = $current_room_type_data["capacidad de ocupación de niños"];
		$current_modeled_current_room["datos de habitación"]["incluye"] = $current_room_type_data["servicios de habitacion"];
		$current_modeled_current_room["datos de habitación"]["descripción"] = $current_room_type_data["elementos de descripcion de habitacion"];

		$current_modeled_current_room["datos de habitación"]["precio por día"] = $room_type_status["type net price"];
		$current_modeled_current_room["datos de habitación"]["precio del pax"] = $room_type_status["type pax amount"];

		$current_modeled_current_room["datos de habitación"]["monto de descuento de tipo"] = $current_room_type_data["monto de descuento de tipo de habitacion"];
		$current_modeled_current_room["datos de habitación"]["monto de incremento de tipo"] = $current_room_type_data["monto de incremento de tipo de habitacion"];
		$current_modeled_current_room["datos de habitación"]["monto de incremento de unidad"] = $current_room_type_room_data["incremento de unidad"];
		$current_modeled_current_room["datos de habitación"]["monto de descuento de unidad"] = $current_room_type_room_data["descuento de unidad"];

		$current_modeled_current_room["datos de habitación"]["ubicacion"] = $current_room_type_room_data["ubicacion"];
		// if /* there are reservations */ (count($current_room_type_reservations) > 0) {
		// 	$room_reservations_arrival_departure_pairs = [];
		// 	foreach ($current_room_type_reservations as $reservation) {
		// 		if ($current_modeled_current_room["id de habitación"] == $reservation[0]) {
		// 			array_push($room_reservations_arrival_departure_pairs, $reservation[1]);
		// 		};
		// 	};
		// 	$room_reservations_arrival_departure_pairs_list = generate_reservation_dates_list_for_room($room_reservations_arrival_departure_pairs);
			
		// 	if (count($room_reservations_arrival_departure_pairs) > 0) { 
		// 		$current_modeled_current_room["datos de habitación"]["fechas reservadas"] = $room_reservations_arrival_departure_pairs;
		// 		$current_modeled_current_room["datos de habitación"]["lista de días reservados"] = $room_reservations_arrival_departure_pairs_list;
		// 		$current_modeled_current_room["datos de habitación"]["tiene reservacion"] = true;
		// 	};
		// } else /* if there are not reservations */  {
		// 	$current_modeled_current_room["datos de habitación"]["fechas reservadas"] = [];
		// 	$current_modeled_current_room["datos de habitación"]["lista de días reservados"] = [];
		// 	$current_modeled_current_room["datos de habitación"]["tiene reservacion"] = false;
		// };
		// $current_modeled_current_room["datos de habitación"]["cantidad de fechas reservadas"] = count($current_modeled_current_room["datos de habitación"]["lista de días reservados"]);
		// $current_modeled_current_room["datos de habitación"]["fechas disponibles"] = [];
		// for ($i=0; $i < $min_and_max_dates["day quantity"]; $i++) { 
		// 	$date = new DateTime($min_and_max_dates[0]);
		// 	$date->add(new DateInterval('P'.$i.'D'));
		// 	if(!in_array($date->format('Y-m-d'), $current_modeled_current_room["datos de habitación"]["lista de días reservados"])) {
		// 		array_push($current_modeled_current_room["datos de habitación"]["fechas disponibles"], $date->format('Y-m-d'));
		// 	};				
		// };
		// $current_modeled_current_room["datos de habitación"]["cantidad de fechas disponibles"] = count($current_modeled_current_room["datos de habitación"]["fechas disponibles"]);


		/* fill room data object */
		if /* is the first room of the current room type */  ($j == 0) {
			$current_modeled_room_type = $current_modeled_current_room;
		};

		if ($current_modeled_current_room["esta habilitada"]) {
			array_push($current_room_type_all_rooms_data, $current_modeled_room_type);
			array_push($all_rooms_data, $current_modeled_current_room);
		};
	};
	array_push($all_rooms_data_by_type, $current_room_type_all_rooms_data);
	array_push($rooms_type_data, $current_modeled_room_type);
};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// ALL ROOM DATA PRINTERS
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRINT RESERVATIONS
//////////////////////////////////////////////////
// echo "<br><br>";
// echo "Reservations: " . count($reservations ?? []) . " reservations.";
// echo "<br><br>";
// for ($i=0; $i < count($reservations ?? []); $i++) { 
// 	echo "Reservation " . ($i + 1);
// 	echo "<br><br>";
// 	print_r($reservations[$i]);
// 	echo "<br><br>";
// };
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRINT ROOM TYPES
//////////////////////////////////////////////////
// echo "<br><br>";
// echo "Every Room type: " . count($rooms_type_data) . " room types.";
// for ($i=0; $i < count($all_rooms_data); $i++) { 	
// 	echo "<br><br>";
// 	echo "Room Type " . ($i + 1);
// 	echo "<br><br>";
// 	print_r($rooms_type_data[$i]);
// };
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRINT ALL ROOMS GROUPED BY ROOM TYPES
//////////////////////////////////////////////////
echo "<br><br>";
echo "All rooms grouped by type: " . count($all_rooms_data_by_type) . " rooms types.";
for ($i=0; $i < count($all_rooms_data_by_type); $i++) { 
	echo "<br><br>";
	echo "All rooms from Room Type " . ($i + 1);
	echo "<br><br>";
	print_r($all_rooms_data_by_type[$i]);
};
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRINT A LIST OF EVERY ROOM CURRENT DATA
//////////////////////////////////////////////////
// echo "<br><br>";
// echo "Every Room data: " . count($all_rooms_data) . " rooms.";
// for ($i=0; $i < count($all_rooms_data); $i++) { 
// 	echo "<br><br>";
// 	echo "Room " . ($i + 1);
// 	if ($all_rooms_data[$i]["datos de tipo"]["tiene reservacion"]) {
// 		echo "¡Tiene " .count($all_rooms_data[$i]["datos de tipo"]["fechas reservadas"]). " reservación(es)!";
// 	};
// 	echo "<br><br>";
// 	print_r($all_rooms_data[$i]);
// };
//////////////////////////////////////////////////
//////////////////////////////////////////////////

?>