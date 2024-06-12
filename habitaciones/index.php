<?php 
include '../_/global.php';
include $root_folder."_/component/header/header_001/class.php";
include $root_folder."_/component/hero/hero_001/class.php";
include $root_folder."_/component/hero/hero_002/class.php";
include $root_folder."_/component/heading/heading_001/class.php";
include $root_folder."_/component/heading/heading_002/class.php";
include $root_folder."_/component/grid/grid_001/class.php";
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	</head>
		<link rel="stylesheet" href="../_/component/footer/f002/style.css">
	<body>
		<?php new header_001(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"header_001",
			$root_folder."_/media/image/user_profile",
			"hospedaje",
		);?>
		<?php new hero_002(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"sojourn_hero",
			"hero_002",
			$root_folder."_/media/image/sojourn_hero",
			"Habitaciones",
			"Descubre los espacios que preparamos para tu estadía de ensueño",
			"room_grid_grid_001",
			"reservas",
			"conocer más",
			"0%",
		);?>
		<?php new heading_001(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"room_grid",
			"heading_001",
			"Para cada ocasión",
			"Habitaciones de lujo, nidos de romance, cabañas para la familia<br>tenemos espacios para todas las ocasiones",
		);?>			
		<?php new grid_001(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"room_grid",
			"grid_001",
			$root_folder."_/media/image/room_grid",
		);?>
		<?php new heading_002(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"room_grid",
			"heading_002",
			"Contáctanos o Reverva en línea",
			"Puedes contactarnos o reservar en línea ahora mismo",
		);?>	

		
		<?php new f002($root_folder, "contacto", "contacto", $_SESSION);?>
	</body>
</html>