<?php
	$root_folder = "../";
	include $root_folder . "_/global.php";

	$component_array = [
	"viewer_004",
	"heading_004",
	"strip_003",
	];

	new page_top($root_folder,$_SESSION,"contacto","contacto",$component_array);

	new header_003($root_folder,$_SESSION,"contacto","contact_header",);

	new button_001($root_folder,$_SESSION,"contacto","WatsApp_button","https://wa.me/584123033034?text=Saludos%21",);

	new viewer_004($root_folder,$_SESSION,"contacto","hero_viewer",);

	new heading_004($root_folder,$_SESSION,"contacto","heading_1",);

	new strip_003($root_folder,$_SESSION,"contacto","contact_data_viewer","whatsapp","reservations","event");

	new heading_004($root_folder,$_SESSION,"contacto","heading_2",);

	new footer_002($root_folder,$_SESSION,"contacto","home_footer",);
?>