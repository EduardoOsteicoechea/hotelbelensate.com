<?php 
include '../../_/global.php';
include $root_folder."_/component/header/header_001/class.php";
include $root_folder."_/component/image_loader/image_loader_002/class.php";
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
<link rel="stylesheet" href="../../_/component/footer/f002/style.css">
</head>
	<body>
		<?php new header_001(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"header_001",
			$root_folder."_/media/image/user_profile",
			"hospedaje",
		);?>
		<?php new image_loader_002($root_folder,$_SESSION,"carga_de_imagenes","sojourn_hero","image_loader_002",$root_folder."_/media/image/sojourn_hero");?>
		<?php new image_loader_002($root_folder,$_SESSION,"carga_de_imagenes","room_grid","image_loader_002",$root_folder."_/media/image/room_grid");?>
		<?php new f002($root_folder, "estadía", "estadia", $_SESSION);?>
	</body>
</html>