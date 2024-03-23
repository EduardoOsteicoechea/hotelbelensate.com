<?php include '../_/global.php'; ?>
<?php echo page_top($root_folder, "Galería Belensate", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); ?>
<?php echo page_body($root_folder, "Galería Belensate", $_SESSION); ?>

	<?php echo hero_data_article_VIEWER(
		$root_folder,
		"galery"
	);
	; ?>

	
	<?php echo strip_silding_VIEWER(
		$root_folder,
		"galery",
		[
			["gallery/art_1.jpg" ,"AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_2.jpg" ,"AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_3.jpg" ,"AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_4.jpg" ,"AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_5.jpg" ,"AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_6.jpg" ,"AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_7.jpg" ,"AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_8.jpg" ,"AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_9.jpg" ,"AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_10.jpg","AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_11.jpg","AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_12.jpg","AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_13.jpg","AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_14.jpg","AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_15.jpg","AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_16.jpg","AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_17.jpg","AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
			["gallery/art_18.jpg","AUTOR","TÉCNICA","01-01-2025","La Mona Lisa, también conocida como La Gioconda, es una de las pinturas más famosas del mundo."],
		]
	);
	; ?>

	<?php echo strip_highlighted_HEADING
	(
		$root_folder, 
		"galery", 
		"Preparamos la mejor estadía para tí", 
		"la mejor estadía",
	);
	?>

<?php echo page_bottom($root_folder, $_SESSION); ?>