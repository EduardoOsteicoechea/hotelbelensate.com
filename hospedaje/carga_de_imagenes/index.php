<?php 
include '../../_/global.php';
include $root_folder."_/component/image_loader/image_loader_002/class.php";
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
<link rel="stylesheet" href="../../_/component/header/h002/style.css">
<link rel="stylesheet" href="../../_/component/footer/f002/style.css">
</head>
	<body>
		<?php new h002($root_folder, "estadía", "estadia", $_SESSION);?>	
		<?php new image_loader_002($root_folder,$_SESSION,"carga_de_imagenes","sojourn_hero","image_loader_002",$root_folder."_/media/image/sojourn_hero");?>
		<?php new image_loader_002($root_folder,$_SESSION,"carga_de_imagenes","room_grid","image_loader_002",$root_folder."_/media/image/room_grid");?>
		<?php new f002($root_folder, "estadía", "estadia", $_SESSION);?>
	</body>
</html>