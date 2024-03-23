<?php include '../_/global.php'; ?>
<?php echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); ?>
<?php echo page_body($root_folder, "Hotel Belensate Mérida Venezuela", $_SESSION); ?>

	<?php echo centered_info_title_address_price
	(
		$root_folder,
		[
			"nos alegra verte llegar ...",
			"nos alegra verte llegar ...",
			"nos alegra verte llegar ...",
			"nos alegra verte llegar ...",
			"nos alegra verte llegar ...",
			"nos alegra verte llegar ...",
			"nos alegra verte llegar ...",
			"nos alegra verte llegar ...",
			"nos alegra verte llegar ...",
			"nos alegra verte llegar ...",
		],
		[
			"Hotel belensate Mérida Venezuela",
			"Hotel belensate Mérida Venezuela",
			"Hotel belensate Mérida Venezuela",
			"Hotel belensate Mérida Venezuela",
			"Hotel belensate Mérida Venezuela",
			"Hotel belensate Mérida Venezuela",
			"Hotel belensate Mérida Venezuela",
			"Hotel belensate Mérida Venezuela",
			"Hotel belensate Mérida Venezuela",
			"Hotel belensate Mérida Venezuela",
		],
		[
			"Mérida Venezuela",
			"Mérida Venezuela",
			"Mérida Venezuela",
			"Mérida Venezuela",
			"Mérida Venezuela",
			"Mérida Venezuela",
			"Mérida Venezuela",
			"Mérida Venezuela",
			"Mérida Venezuela",
			"Mérida Venezuela",
		],
		[
			"hero/hero_1.jpg",
			"common/contact_1.jpg",
			"restaurant/restaurant_4.jpg",
			"restaurant/restaurant_1.jpg",
			"room/presidencial_master_1_3840x2160.webp",
			"room/presidencial_junior_4_3840x2160.webp",
			"room/cabana_1_3840x2160.webp",
			"room/suite_ejecutiva_1_3840x2160.webp",
			"event/activity_1.jpg",
			"event/event_1.jpg",
		],
		"inicio"
	)
	?>

	<?php echo strip_highlighted_HEADING
	(
		$root_folder, 
		"inicio_1", 
		"Tenemos la habitación perfecta para tí", 
		"habitación perfecta",
	);
	?>

	<?php echo T_none_L_h3_p_ul_h4_R_controls_strip_VIEWER
		(
			$root_folder,
			"room_1",
			"Presidencial exclusiva",
			"Nuestra habitación más especial",
			"Lujosa, amplia, cómoda y elegante con vistas panorámicas, cama king-size, sala de estar, kitchenette y Wi-Fi gratuito",
			[
				"30mts<sup>2</sup>",
				"Vista a la Sierra Nevada",
				"Área de estar",
				"Habitación Exclusiva",
				"Baño con Jacuzzy",
			],
			"120 USD",
			"Reservar",
			"reservar",
			[
				"room/presidencial_master_1_3840x2160.webp",
				"room/presidencial_junior_4_3840x2160.webp",
				"room/cabana_1_3840x2160.webp",
				"room/suite_ejecutiva_1_3840x2160.webp",
				"room/suite_nupcial_1_3840x2160.webp",
				"room/doble_deluxe_1_3840x2160.webp",
				"room/especial_deluxe_1_3840x2160.webp",
				"room/matrimonial_ejecutiva_1_3840x2160.webp",
				"room/semi_suite_1_3840x2160.webp",
				"room/doble_colonial_1_3840x2160.webp",
				"room/matrimonial_colonial_1_3840x2160.webp",
			]
		);
	?>

	<?php echo strip_highlighted_HEADING
	(
		$root_folder, 
		"inicio_2", 
		"DISRFUTA UNA EXCELENTE ATENCIÓN EN NUESTROS<br>RESTAURANTES EXCLUSIVOS", 
		"RESTAURANTES EXCLUSIVOS",
	);
	?>

	<?php echo L_info_R_strip_VIEWER
		(
			$root_folder,
			"restaurant",
			"Gastronomía excusiva",
			"Delicias culinarias para comenzales exigentes",
			"Lujosa, amplia, cómoda y elegante con vistas panorámicas, cama king-size, sala de estar, kitchenette y Wi-Fi gratuito",
			[
				"Comida mediterránea",
				"Bar Restaurant",
				"Cafetería",
				"Comida italiana",
				"Eventos en vivo",
			],
			"120 USD",
			"Reservar",
			"reservar",
			[
				"restaurant/restaurant_1.jpg",
				"restaurant/restaurant_2.jpg",
				"restaurant/restaurant_3.jpg",
				"restaurant/restaurant_4.jpg",
			]
		);
	?>

	<?php echo strip_highlighted_HEADING
	(
		$root_folder, 
		"inicio_3", 
		"SOMOS UN HOTEL GALERÍA PARA ARTISTAS MERIDEÑOS", 
		"HOTEL GALERÍA",
	);
	?>

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
		"inicio_4", 
		"RESPIRA LA NATURALEZA DENTRO DE NUESTRAS INSTALACIONES", 
		"LA NATURALEZA",
	);
	?>

	<?php echo T_none_L_h3_p_ul_h4_R_controls_strip_VIEWER
		(
			$root_folder,
			"nature",
			"Presidencial exclusiva",
			"Naturaleza merideña",
			"Disfruta el paisaje andíno y el clima maravilloso de mérida hospedándote con nosotros.",
			[
				"Áreas verdes",
				"Naturaleza integrada en nuestros espacios",
				"Piscina familiar",
				"Recorridos artísticos",
				"Tienda de souvenirs",
			],
			"",
			"Reservar",
			"reservar",
			[
				"nature/naturaleza_9.jpg",
				"nature/naturaleza_8.jpg",
				"nature/naturaleza_10.jpg",
			]
		);
	?>

	<?php echo strip_highlighted_HEADING
	(
		$root_folder, 
		"inicio_5", 
		"Tenemos excelentes servicios<br>
		para tu estadía en mérida o para tus eventos", 
		"excelentes servicios",
	);
	?>

	<?php echo L_info_R_strip_VIEWER
		(
			$root_folder,
			"servicios",
			"",
			"Alojamos tus eventos",
			"Ya sea Matrimonios de ensueño, conferencias empresariales, reuniones familiares o exposiciones artística, somos la casa merideña de tus eventos",
			[
				"Servicio de protocolo",
				"Decoración de eventos",
				"Agasajos para eventos",
				"Moderadores profesionales",
				"Organización de actividades",
			],
			"",
			"Reservar",
			"reservar",
			[
				"event/event_1.jpg",
				"event/activity_1.jpg",
			]
		);
	?>
	<?php echo strip_highlighted_HEADING
	(
		$root_folder, 
		"inicio_6", 
		"¿DESEAS CONOCER LOS ANDES?<br>
		NUESTROS SOCIOS TE OFRECEN LAS MEJORES EXPERIENCIAS", 
		"¿DESEAS CONOCER LOS ANDES?",
	);
	?>

	<?php echo T_none_L_h3_p_ul_h4_R_controls_strip_VIEWER
		(
			$root_folder,
			"tourism",
			"Organizamos tu recorrido por mérida",
			"Organizamos tu recorrido por mérida",
			"Nuestros socios comerciales tienen los mejores paquetes del estado para garantizar tu aprovechamientos de los mejores lugares turísticos",
			[
				"Viajes al pico",
				"Alpinismo guiado por expertos",
				"Venezuela de antier",
				"los aleros",
				"Parque zoológico los chorros",
			],
			"",
			"Reservar",
			"reservar",
			[
				"tourism/tourism_1.jpg",
				"tourism/tourism_2.jpg",
				"tourism/tourism_3.jpg",
				"tourism/tourism_4.jpg",
			]
		);
	?>

	<?php echo strip_highlighted_HEADING
	(
		$root_folder, 
		"inicio_7", 
		"Preparamos la mejor estadía para tí", 
		"la mejor estadía",
	);
	?>

	

<?php echo page_bottom($root_folder, $_SESSION); ?>