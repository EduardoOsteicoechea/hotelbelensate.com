<?php
class grid_002 {
public function __construct( 
	$root_folder, 
	$sesion_array,
	$page_name,
	$component_id,
	$component_class,
)
{
    require_once $root_folder . "_/" . "component/card/card_004/_.php";
    include $root_folder . "_/" . "data/room/rooms_types_full_data.php";

    // print_r($rooms_types_full_data);
    
    $room_cards = "";
    $counter = 1;
    foreach ($rooms_types_full_data as $rooms_type_name => $rooms_type_data) 
    {
        $card_004 = new card_004(
            $root_folder, 
            $sesion_array,
            $page_name,
            $component_id,
            $component_class,
            "card_004",
            $rooms_type_name,
            $rooms_type_data,
            $counter,
        );
        $room_cards .= $card_004->html();
        $counter++;
    };

    $component_particular_folder_name = "hero/hero_002";
    echo '
        <div
        id="'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'outer_container"
        class="'.$component_class. "_" .'outer_container"
        >
            '.$room_cards.'
        </div>
        <script>
        
        </script>
    ';
}}?>