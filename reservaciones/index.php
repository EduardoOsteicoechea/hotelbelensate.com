<?php 
include '../_/global.php';
include $root_folder."_/component/header/header_001/class.php";
include $root_folder . '_/component/dashboard/d001/d001.php';
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	<link rel="stylesheet" href="../_/component/footer/f002/style.css">
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
		<?php new d001("reservar", $root_folder, $_SESSION);?>	
		<?php new f002($root_folder, "reservaciones", "reservaciones", $_SESSION);?>
	</body>
</html>