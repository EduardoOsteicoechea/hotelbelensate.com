<?php
	$root_folder = "../";
	include $root_folder . "_/global.php";

	$component_array = [
	"viewer_004",
	"viewer_005",
	"viewer_006",
	"heading_004",
	];


	new page_top($root_folder,$_SESSION,"inicio","inicio",$component_array);

	new header_003($root_folder,$_SESSION,"inicio","hero_header",);
	
	new heading_004($root_folder,$_SESSION,"inicio","page_in_construction_heading",);

	new button_001($root_folder,$_SESSION,"inicio","WatsApp_button","https://wa.me/584123033034?text=Saludos%21",);

	new viewer_004($root_folder,$_SESSION,"inicio","hero_viewer",);

	new heading_004($root_folder,$_SESSION,"inicio","heading_1",);

	new viewer_005($root_folder,$_SESSION,"inicio","event_viewer",);

	new heading_004($root_folder,$_SESSION,"inicio","heading_2",);

	new viewer_004($root_folder,$_SESSION,"inicio","room_viewer",);

	new heading_004($root_folder,$_SESSION,"inicio","heading_3",);

	new viewer_006($root_folder,$_SESSION,"inicio","gallery_viewer",);

	new heading_004($root_folder,$_SESSION,"inicio","heading_4",);

	new viewer_005($root_folder,$_SESSION,"inicio","restaurant_viewer",);

	new heading_004($root_folder,$_SESSION,"inicio","heading_5",);

	new viewer_004($root_folder,$_SESSION,"inicio","exterior_viewer",);

	new heading_004($root_folder,$_SESSION,"inicio","heading_6",);

	new viewer_005($root_folder,$_SESSION,"inicio","tourism_viewer",);

	new heading_004($root_folder,$_SESSION,"inicio","heading_7",);

	new footer_002($root_folder,$_SESSION,"inicio","home_footer",);
?>