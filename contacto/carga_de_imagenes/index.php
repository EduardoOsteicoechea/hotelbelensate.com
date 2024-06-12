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
			"contacto",
			"header_001",
			$root_folder."_/media/image/user_profile",
			"contacto",
		);?>
		<?php new image_loader_002($root_folder,$_SESSION,"carga_de_imagenes","contact_hero","image_loader_002",$root_folder."_/media/image/contact_hero");?>
		<?php new f002($root_folder, "contacto", "contacto", $_SESSION);?>
	</body>
</html>