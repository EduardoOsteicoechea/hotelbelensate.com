<?php 
include '../_/global.php';
include $root_folder."_/component/hero/hero_001/class.php";
include $root_folder."_/component/heading/heading_001/class.php";
include $root_folder."_/component/grid/grid_001/class.php";
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	<link rel="stylesheet" href="../_/component/header/h002/style.css">
	<link rel="stylesheet" href="../_/component/footer/f002/style.css">
	</head>
	<body>
		<?php new h002($root_folder, "estadia", "estadia", $_SESSION);?>	
		<?php new hero_001(
			$root_folder,
			$_SESSION,
			"estadia",
			"sojourn_hero",
			"hero_001",
			$root_folder."_/media/image/sojourn_hero",
			"room_grid_grid_001",
			"reservas",
		);?>		
		<?php new heading_001(
			$root_folder,
			$_SESSION,
			"estadia",
			"room_grid",
			"heading_001",
			"Para todas las ocasiones",
			"Habitaciones de lujo, nidos de romance, cabañas para la familia<br>tenemos espacios para todas las ocasiones",
		);?>		
		<?php new grid_001(
			$root_folder,
			$_SESSION,
			"estadia",
			"room_grid",
			"grid_001",
			$root_folder."_/media/image/room_grid",
		);?>	
		<?php new f002($root_folder, "estadia", "estadia", $_SESSION);?>	
	</body>
</html>