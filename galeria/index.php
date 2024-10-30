<?php
	$root_folder = "../";
	include $root_folder . "_/global.php";

	$component_array = [
	"viewer_004",
	"viewer_005",
	"viewer_007",
	"heading_004",
	"strip_001",
	"strip_002",
	"separator_001",
	];

	new page_top($root_folder,$_SESSION,"galeria","galeria",$component_array);

	new header_003($root_folder,$_SESSION,"galeria","gallery_header",);

	new button_001($root_folder,$_SESSION,"galeria","WatsApp_button","https://wa.me/584123033034?text=Saludos%21",);

	new viewer_004($root_folder,$_SESSION,"galeria","hero_viewer",);

	new heading_004($root_folder,$_SESSION,"galeria","heading_1",);

	new viewer_007($root_folder,$_SESSION,"galeria","selected_work_viewer",);

	new heading_004($root_folder,$_SESSION,"galeria","heading_3",);

	new footer_002($root_folder,$_SESSION,"galeria","home_footer",);
?>