<?php 
include '../_/global.php';
include $root_folder . '_/component/dashboard/d001/d001.php';
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	<link rel="stylesheet" href="../_/component/awaiter/a002/style.css">
	<link rel="stylesheet" href="../_/component/header/h002/style.css">
	<link rel="stylesheet" href="../_/component/footer/f002/style.css">
	</head>
	<body>
		<?php new a002("reservas", $root_folder, $_SESSION, "reservas");?>
		<?php new h002($root_folder, "reservas", "reservas", $_SESSION);?>	
		<?php new d001("reservar", $root_folder, $_SESSION);?>	
		<?php new f002($root_folder, "reservas", "reservas", $_SESSION);?>	
	</body>
</html>