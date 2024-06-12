<?php 
include '../_/global.php';
include $root_folder."_/component/header/header_001/class.php";
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	<link rel="stylesheet" href="../_/component/header/h002/style.css">
	<link rel="stylesheet" href="../_/component/footer/f002/style.css">
	</head>
	<body>
		<?php new header_001(
			$root_folder,
			$_SESSION,
			"reservaciones",
			"header_001",
			$root_folder."_/media/image/user_profile",
			"reservaciones",
		);?>	

	<?php echo hero_data_article_VIEWER(
		$root_folder,
		"galery"
	);?>

	
	<?php echo strip_silding_VIEWER(
		$root_folder,
		"galery",
		[
			["gallery/art_1.jpg" ,"","","",""],
			["gallery/art_2.jpg" ,"","","",""],
			["gallery/art_3.jpg" ,"","","",""],
			["gallery/art_4.jpg" ,"","","",""],
			["gallery/art_5.jpg" ,"","","",""],
			["gallery/art_6.jpg" ,"","","",""],
			["gallery/art_7.jpg" ,"","","",""],
			["gallery/art_8.jpg" ,"","","",""],
			["gallery/art_9.jpg" ,"","","",""],
			["gallery/art_10.jpg","","","",""],
			["gallery/art_11.jpg","","","",""],
			["gallery/art_12.jpg","","","",""],
			["gallery/art_13.jpg","","","",""],
			["gallery/art_14.jpg","","","",""],
			["gallery/art_15.jpg","","","",""],
			["gallery/art_16.jpg","","","",""],
			["gallery/art_17.jpg","","","",""],
			["gallery/art_18.jpg","","","",""],
		]
	);
	?>


		<?php new f002($root_folder, "galeria", "galeria", $_SESSION);?>	
	</body>
</html>