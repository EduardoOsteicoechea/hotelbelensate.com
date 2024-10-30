<?php
	$root_folder = "../";
	include $root_folder . "_/global.php";

	$component_array = [
	"viewer_004",
	"heading_004",
	"dashboard_002",
	];

	new page_top($root_folder,$_SESSION,"reservaciones","reservaciones",$component_array);

	new header_003($root_folder,$_SESSION,"reservaciones","rooms_header",);

	new button_001($root_folder,$_SESSION,"reservaciones","WatsApp_button","https://wa.me/584123033034?text=Saludos%21",);

	new viewer_004($root_folder,$_SESSION,"reservaciones","hero_viewer",);

	new heading_004($root_folder,$_SESSION,"reservaciones","heading_1",);

	new dashboard_002($root_folder,$_SESSION,"reservaciones","reservations_dashboard");
	
	new heading_004($root_folder,$_SESSION,"reservaciones","heading_2",);

	new footer_002($root_folder,$_SESSION,"reservaciones","home_footer",);
?>