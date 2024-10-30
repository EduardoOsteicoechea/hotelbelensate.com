<?php
// Called from "./";
function generate_reservation_dates_list_for_room(array $arrival_departure_reservation_dates_array){
	$reservation_dates_pairs = [];
	for ($i=0; $i < count($arrival_departure_reservation_dates_array); $i++) { 
		$current_reservation = $arrival_departure_reservation_dates_array[$i];
		$current_reservation_arrival = $current_reservation[0];
		$current_reservation_departure = $current_reservation[1];
		$current_reservation_arrival_and_departure_array = [];
		$current_reservation_arrival_and_departure_array[] = $current_reservation_arrival;
		$current_reservation_arrival_and_departure_array[] = $current_reservation_departure;
		$reservation_dates_pairs[] = $current_reservation_arrival_and_departure_array;
	};
	
	$all_reservation_dates_of_room_list = [];
	for ($i=0; $i < count($reservation_dates_pairs); $i++) { 
		$current_reservation_pair = $reservation_dates_pairs[$i];
		$current_reservation_pair_arrival = $current_reservation_pair[0];
		$current_reservation_pair_departure = $current_reservation_pair[1];

		
		$datetime1 = new DateTime($current_reservation_pair_arrival);
		$datetime2 = new DateTime($current_reservation_pair_departure);
		$interval = $datetime1->diff($datetime2);
		$days = (int)$interval->format('%a');
		
		for ($j = 0; $j <= $days; $j++) {
			$newDate = clone $datetime1;
			$newDate->add(new DateInterval('P' . $j . 'D'));
			$all_reservation_dates_of_room_list[] = $newDate->format('Y-m-d');
		};
	};
	return $all_reservation_dates_of_room_list;
}
?>