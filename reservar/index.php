<?php include '../_/global.php'; ?>
<?php include '../_/component/dashboard/d001/d001.php'; ?>
<?php echo page_top($root_folder, "Hotel Belensate Mérida Venezuela", "Sitio web oficial del Hotel Belensate Mérida Venezuela", $_SESSION); ?>
<?php echo page_body($root_folder, "Hotel Belensate Mérida Venezuela", $_SESSION); ?>
<!-- Print the reservation dashboard component -->
	<?php
		new d001(
			"reservar",
			$root_folder,
			$_SESSION
		);
	?>
<?php echo page_bottom($root_folder, $_SESSION); ?>