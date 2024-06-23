<?php 
include '../_/global.php';
include $root_folder."_/component/header/header_001/class.php";
include $root_folder."_/component/hero/hero_001/class.php";
include $root_folder."_/component/hero/hero_002/class.php";
include $root_folder."_/component/heading/heading_001/class.php";
include $root_folder."_/component/heading/heading_002/class.php";
include $root_folder."_/component/grid/grid_001/class.php";
include $root_folder."_/component/card/card_002/class.php";
echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); 
?>
	</head>
		<link rel="stylesheet" href="../_/component/footer/f002/style.css">
	<body>
		<?php new header_001(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"header_001",
			$root_folder."_/media/image/user_profile",
			"hospedaje",
		);?>

		<?php new hero_002(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"sojourn_hero",
			"hero_002",
			$root_folder."_/media/image/sojourn_hero",
			"Habitaciones",
			"Descubre los espacios que preparamos para tu estadía de ensueño",
			"room_grid_grid_001",
			"reservas",
			"conocer más",
			"0%",
		);?>

		<?php new heading_001(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"room_grid",
			"heading_001",
			"Para cada ocasión",
			"Habitaciones de lujo, nidos de romance, cabañas para la familia<br>tenemos espacios para todas las ocasiones",
		);?>	

		<?php new grid_001(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"room_grid",
			"grid_001",
			$root_folder."_/media/image/room_grid",
		);?>

		<?php new heading_002(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"room_cards",
			"heading_002",
			"Detalles de habitaciones",
			"Conoce los detalles de cada una<br>de nuestras habitaciones y tarifas",
		);?>	

		<div id="habitaciones_room_presidential_master_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_1" class="separator_001"></div>
		<div id="habitaciones_room_presidential_junior_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_2" class="separator_001"></div>
		<div id="habitaciones_room_cabana_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_3" class="separator_001"></div>
		<div id="habitaciones_room_suite_ejecutiva_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_4" class="separator_001"></div>
		<div id="habitaciones_room_suite_nupcial_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_5" class="separator_001"></div>
		<div id="habitaciones_room_doble_deluxe_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_6" class="separator_001"></div>
		<div id="habitaciones_room_king_deluxe_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_7" class="separator_001"></div>
		<div id="habitaciones_room_especial_deluxe_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_8" class="separator_001"></div>
		<div id="habitaciones_room_matrimonial_ejecutiva_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_9" class="separator_001"></div>
		<div id="habitaciones_room_semi_suite_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_10" class="separator_001"></div>
		<div id="habitaciones_room_doble_colonial_card_card_003" class="card_003"></div>
		<div id="habitaciones_separator_001_11" class="separator_001"></div>
		<div id="habitaciones_room_matrimonial_colonial_card_card_003" class="card_003"></div>

		<script type="module">
			import populate_card_003 from "../_/component/card/card_003/card_container.js";
			add_component_style_tag(
				"../_/component/card/card_003/",
				"_"
			);
			add_component_style_tag(
				"../_/component/separator/separator_001/",
				"_"
			);

			const room_presidential_master_card = document.getElementById("habitaciones_room_presidential_master_card_card_003");
			const room_presidential_junior_card = document.getElementById("habitaciones_room_presidential_junior_card_card_003");
			const room_cabana_card = document.getElementById("habitaciones_room_cabana_card_card_003");
			const room_suite_ejecutiva_card = document.getElementById("habitaciones_room_suite_ejecutiva_card_card_003");
			const room_suite_nupcial_card = document.getElementById("habitaciones_room_suite_nupcial_card_card_003");
			const room_doble_deluxe_card = document.getElementById("habitaciones_room_doble_deluxe_card_card_003");
			const room_king_deluxe_card = document.getElementById("habitaciones_room_king_deluxe_card_card_003");
			const room_especial_deluxe_card = document.getElementById("habitaciones_room_especial_deluxe_card_card_003");
			const room_matrimonial_ejecutiva_card = document.getElementById("habitaciones_room_matrimonial_ejecutiva_card_card_003");
			const room_semi_suite_card = document.getElementById("habitaciones_room_semi_suite_card_card_003");
			const room_doble_colonial_card = document.getElementById("habitaciones_room_doble_colonial_card_card_003");
			const room_matrimonial_colonial_card = document.getElementById("habitaciones_room_matrimonial_colonial_card_card_003");

			const current_root_folder = "../";
			const current_page_name = "habitaciones";
			const card_003_start_file = "../_/component/card/card_003/_.php";
			const card_003_component_class = "card_003";
			const card_003_component_image_folder_path_base = "../_/media/image/";
			const card_003_component_data_folder_path_base = "../_/data/room/";
			const card_003_component_folder_path = "../_/component/card/card_003/";

			// const cardData = [
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id: "room_presidential_master_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_presidential_master_card/",
			// 		component_data_folder_path: card_003_component_data_folder_path_base + "room_presidential_master_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_presidential_junior_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_presidential_junior_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_presidential_junior_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_cabana_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_cabana_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_cabana_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_suite_ejecutiva_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_suite_ejecutiva_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_suite_ejecutiva_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_suite_nupcial_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_suite_nupcial_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_suite_nupcial_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_doble_deluxe_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_doble_deluxe_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_doble_deluxe_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_king_deluxe_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_king_deluxe_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_king_deluxe_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_especial_deluxe_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_especial_deluxe_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_especial_deluxe_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_matrimonial_ejecutiva_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_matrimonial_ejecutiva_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_matrimonial_ejecutiva_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_semi_suite_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_semi_suite_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_semi_suite_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_doble_colonial_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_doble_colonial_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_doble_colonial_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// 	{
			// 		root_folder: current_root_folder,
			// 		page_name: current_page_name,
			// 		component_id:"room_matrimonial_colonial_card",
			// 		component_class: card_003_component_class,
			// 		component_image_folder_path: card_003_component_image_folder_path_base + "room_matrimonial_colonial_card/",
			// 		component_data_folder_path:card_003_component_data_folder_path_base + "room_matrimonial_colonial_card/",
			// 		component_folder_path: card_003_component_folder_path
			// 	},
			// ];

			// Promise.all(cardData.map(cardObject => 
			// fetch(card_003_start_file, {method: "POST",headers: { "Content-Type": "application/json" },body: JSON.stringify(cardObject)})
			// .then(response => response.json()))).then(allCardData => {allCardData.forEach((cardData, index) => {
			// 	const componentId = cardData.component_id;
			// 	populate_card_003(componentId, cardData);
			// })});

		

			fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
				root_folder: current_root_folder,
				page_name: current_page_name,
				component_id: "room_presidential_master_card",
				component_class: card_003_component_class,
				component_image_folder_path: card_003_component_image_folder_path_base + "room_presidential_master_card/",
				component_data_folder_path: card_003_component_data_folder_path_base + "room_presidential_master_card/",
				component_folder_path: card_003_component_folder_path
			})}).then(response => response.json()).then(data => populate_card_003(room_presidential_master_card, data))
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_presidential_junior_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_presidential_junior_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_presidential_junior_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_presidential_junior_card, data));
			})
			.then(()=>{	
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_cabana_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_cabana_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_cabana_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_cabana_card, data));
			})
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_suite_ejecutiva_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_suite_ejecutiva_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_suite_ejecutiva_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_suite_ejecutiva_card, data));				
			})
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_suite_nupcial_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_suite_nupcial_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_suite_nupcial_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_suite_nupcial_card, data));				
			})
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_doble_deluxe_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_doble_deluxe_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_doble_deluxe_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_doble_deluxe_card, data));
			})
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_king_deluxe_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_king_deluxe_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_king_deluxe_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_king_deluxe_card, data));				
			})
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_especial_deluxe_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_especial_deluxe_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_especial_deluxe_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_especial_deluxe_card, data));				
			})
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_matrimonial_ejecutiva_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_matrimonial_ejecutiva_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_matrimonial_ejecutiva_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_matrimonial_ejecutiva_card, data));				
			})
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_semi_suite_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_semi_suite_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_semi_suite_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_semi_suite_card, data));				
			})
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_doble_colonial_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_doble_colonial_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_doble_colonial_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_doble_colonial_card, data));				
			})
			.then(()=>{
				fetch(card_003_start_file, {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: current_root_folder,
					page_name: current_page_name,
					component_id:"room_matrimonial_colonial_card",
					component_class: card_003_component_class,
					component_image_folder_path: card_003_component_image_folder_path_base + "room_matrimonial_colonial_card/",
					component_data_folder_path:card_003_component_data_folder_path_base + "room_matrimonial_colonial_card/",
					component_folder_path: card_003_component_folder_path
				})}).then(response => response.json()).then(data => populate_card_003(room_matrimonial_colonial_card, data));				
			})
		</script>

		<?php new heading_002(
			$root_folder,
			$_SESSION,
			"hospedaje",
			"room_grid",
			"heading_002",
			"Contáctanos o Reserva en línea",
			"Contáctanos o reserva en línea ahora mismo<br>con los botones que encontrarás abajo",
		);?>

		<?php new f002($root_folder, "contacto", "contacto", $_SESSION);?>
	</body>
</html>