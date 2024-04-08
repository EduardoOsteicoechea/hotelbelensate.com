<?php include '../_/global.php'; ?>
<?php include '../_/component/dashboard/d001/d001.php'; ?>
<?php include '../_/component/dashboard/d002/d002.php'; ?>
<?php include '../_/component/awaiter/a001/a001.php'; ?>

<?php echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); ?>
<!-- <?php echo page_body($root_folder, "Hotel Belensate Mérida Venezuela", $_SESSION); ?> -->
	<?php new a001("reservar", $root_folder, $_SESSION, "Página de reservas");?>
	
	<?php echo page_header($root_folder, "reservar", "reservar", $_SESSION); ?>
	<?php
		new d002(
			"reservar",
			$root_folder,
			$_SESSION
		);
	?>
	<?php echo h2_a_a_DARK_FOOTER
		(
			$root_folder,
			'',
			"hero/hero_1.jpg",
			"Nos alegra verte llegar ...",
			"Contáctanos",
			"#",
			"Reserva",
			"reservar",
			"Hotelbelensate.com<sup>&copy;</sup> 2024 todos los derechos reservados",
			"No ofrecemos alojamiento para mascotas"
		);
	?>
<?php echo page_bottom($root_folder, $_SESSION); ?>