<?php 
include '../_/global.php';
include $root_folder."_/component/image_loader/image_loader_001/image_loader_001.php";
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
</head>
	<body>
	 	
	<?php new image_loader_001("inicio_component_001" , $root_folder,$_SESSION);?>
	
</body>
</html>