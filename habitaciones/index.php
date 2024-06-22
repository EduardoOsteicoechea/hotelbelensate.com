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

		<div
		id="habitaciones_room_presidential_master_card_card_003"
		class="card_003"
		>
			<script type="module">
				import populate_room_presidential_master_card from "../_/component/card/card_003/card_container.js";
				add_component_style_tag(
					"../_/component/card/card_003/",
					"component_container"
				);
				const room_presidential_master_card = document.getElementById("habitaciones_room_presidential_master_card_card_003");
				fetch("../_/component/card/card_003/base.php", {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: "../",
					page_name:"habitaciones",
					component_id:"room_presidential_master_card",
					component_class:"card_003",
					component_image_folder_path:"../_/media/image/room_presidential_master_card/",
					component_data_folder_path:"../_/data/room/room_presidential_master_card/",
					component_folder_path: "../_/component/card/card_003/"
				})}).then(response => response.json()).then(data => {
					populate_room_presidential_master_card(room_presidential_master_card, data);
				});
			</script>
		</div>

		<div
		id="habitaciones_room_presidential_junior_card_card_003"
		class="card_003"
		>
			<script type="module">
				import populate_room_presidential_junior_card from "../_/component/card/card_003/card_container.js";
				add_component_style_tag(
					"../_/component/card/card_003/",
					"component_container"
				);
				const room_presidential_junior_card = document.getElementById("habitaciones_room_presidential_junior_card_card_003");
				fetch("../_/component/card/card_003/base.php", {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({
					root_folder: "../",
					page_name:"habitaciones",
					component_id:"room_presidential_junior_card",
					component_class:"card_003",
					component_image_folder_path:"../_/media/image/room_presidential_junior_card/",
					component_data_folder_path:"../_/data/room/room_presidential_junior_card/",
					component_folder_path: "../_/component/card/card_003/"
				})}).then(response => response.json()).then(data => {
					populate_room_presidential_junior_card(room_presidential_junior_card, data);
				});
			</script>
		</div>


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