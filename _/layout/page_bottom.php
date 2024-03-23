<?php
    function page_bottom($root_folder)
    {
		include $root_folder . '_/component/footer/h2_a_a_DARK_FOOTER/h2_a_a_DARK_FOOTER.php';

		return 
		h2_a_a_DARK_FOOTER
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
		).'
		</body>
		</html>
		';
    };
?>