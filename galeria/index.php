<?php 
include '../_/global.php';
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	<link rel="stylesheet" href="../_/component/header/h002/style.css">
	<link rel="stylesheet" href="../_/component/footer/f002/style.css">
	</head>
	<body>
		<?php new h002($root_folder, "galería", "galería", $_SESSION);?>	
		<?php new f002($root_folder, "galeria", "galeria", $_SESSION);?>	
	</body>
</html>