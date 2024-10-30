<?php
	$root_folder = "../";
	include $root_folder . "_/global.php";

	$component_array = [
	"viewer_004",
	"heading_004",
	"grid_002",
	"card_004",
	];

	new page_top($root_folder,$_SESSION,"habitaciones","habitaciones",$component_array);

	new header_003($root_folder,$_SESSION,"habitaciones","rooms_header",);

	new button_001($root_folder,$_SESSION,"habitaciones","WatsApp_button","https://wa.me/584123033034?text=Saludos%21",);

	new viewer_004($root_folder,$_SESSION,"habitaciones","hero_viewer",);

	new heading_004($root_folder,$_SESSION,"habitaciones","heading_1",);

	new grid_002(
		$root_folder, 
		$_SESSION, 
		"habitaciones",
		"room_grid",
		"grid_002",
	);

	new heading_004($root_folder,$_SESSION,"habitaciones","heading_2",);

	new footer_002($root_folder,$_SESSION,"habitaciones","home_footer",);
?>