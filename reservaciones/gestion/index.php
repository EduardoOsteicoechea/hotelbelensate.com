<?php
	$root_folder = "../../";
	include $root_folder . "_/global.php";

	$component_array = [
	"heading_004",
	"configurator_001",
	];

	new page_top($root_folder,$_SESSION,"gestion","Gestión de habitaciones",$component_array);

	new header_003($root_folder,$_SESSION,"gestion","rooms_header",);

   new configurator_001($root_folder,$_SESSION,"gestion","room_configurator");
	
	new heading_004($root_folder,$_SESSION,"gestion","heading_1",);

	new footer_002($root_folder,$_SESSION,"gestion","home_footer",);
?> 