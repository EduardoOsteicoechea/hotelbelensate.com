<?php 
include '../_/global.php';
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	<link rel="stylesheet" href="../_/component/awaiter/a002/style.css">
	<link rel="stylesheet" href="../_/component/header/h002/style.css">
	<link rel="stylesheet" href="../_/component/footer/f002/style.css">
	</head>
	<body>
		<?php new a002("contacto", $root_folder, $_SESSION, "contacto");?>
		<?php new h002($root_folder, "contacto", "contacto", $_SESSION);?>	
		<?php new f002($root_folder, "contacto", "contacto", $_SESSION);?>	
	</body>
</html>