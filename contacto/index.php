<?php 
include '../_/global.php';
include $root_folder."_/component/header/header_001/class.php";
include $root_folder."_/component/hero/hero_001/class.php";
include $root_folder."_/component/hero/hero_002/class.php";
include $root_folder . '_/component/card/card_001/card_001.php';
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	<link rel="stylesheet" href="../_/component/footer/f002/style.css">
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

		<?php new hero_002(
			$root_folder,
			$_SESSION,
			"inicio",
			"contact_hero",
			"hero_002",
			$root_folder."_/media/image/contact_hero",
			"inicio",
			"Descubre los espacios que preparamos para tu estadía de ensueño",
			"room_grid_grid_001",
			"reservas",
			"",
			"-25%",
		);?>
 
		<?php new card_001("contact", $root_folder, $_SESSION);?>	
		<?php new f002($root_folder, "contacto", "contacto", $_SESSION);?>	
	</body>
</html>