<?php 
$root_folder = "../../";
include '../../_/global.php';
include $root_folder."_/component/image_loader/image_loader_002/class.php";
?>
<?php new page_top($root_folder, "habitaciones", "habitaciones", $_SESSION);?>
<?php new page_body("$root_folder", "habitaciones", "habitaciones", $_SESSION);?>
	<?php new image_loader_002($root_folder,$_SESSION,"carga_de_imagenes","home_hero","image_loader_002",$root_folder."_/media/image/home_hero");?>
	<?php new image_loader_002($root_folder,$_SESSION,"carga_de_imagenes","event_carrousel","image_loader_002",$root_folder."_/media/image/event_carrousel");?>
<?php new page_bottom($root_folder, "habitaciones", "habitaciones", $_SESSION);?>