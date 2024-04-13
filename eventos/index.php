<?php 
include '../_/global.php';
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	<link rel="stylesheet" href="../_/component/awaiter/a002/style.css">
	<link rel="stylesheet" href="../_/component/header/h002/style.css">
	<link rel="stylesheet" href="../_/component/footer/f002/style.css">
	</head>
	<body>
		<?php new a002("eventos", $root_folder, $_SESSION, "eventos");?>
		<?php new h002($root_folder, "eventos", "eventos", $_SESSION);?>	
		<?php new f002($root_folder, "eventos", "eventos", $_SESSION);?>	
	</body>
</html>