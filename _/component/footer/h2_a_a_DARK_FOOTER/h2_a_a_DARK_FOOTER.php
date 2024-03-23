<?php
function h2_a_a_DARK_FOOTER
(
	 $root_folder,
	 $id,
	 $background_image_name,
	 $h2,
	 $a_1_text,
	 $a_1_href,
	 $a_2_text,
	 $a_2_href,
	 $p_1,
	 $p_2,
)
{
	return '
		<div
		id="'.$id.'footer"
		class="h2_a_a_DARK_FOOTER"
		>
			<div
			id="'.$id.'_h2_a_a_DARK_FOOTER_image_container"
			class="h2_a_a_DARK_FOOTER_image_container"
			>
				<img 
				src="'.$root_folder.'_/media/image/'.$background_image_name.'" 
				alt="Imagen de habitación" 
				height="100%"
				>
				<div></div>
			</div>

			<div
			id="'.$id.'_h2_a_a_DARK_FOOTER_message_container"
			class="h2_a_a_DARK_FOOTER_message_container"
			>
				<h2>'.$h2.'</h2>

				<div
				id="'.$id.'_h2_a_a_DARK_FOOTER_message_buttons_container"
				class="h2_a_a_DARK_FOOTER_message_buttons_container"
				>
					<a
					href="https://wa.me/584123033034?text=Saludos%21"
					target="_blank"
					>
						<img
						src="'.$root_folder.'_/media/image/brand/social_media_icons_whatsapp.webp"
						alt="WhatsApp Icon"
						height="100%"
						>
						'.$a_1_text.'
					</a>
					<a href="'. $root_folder . $a_2_href .'">'.$a_2_text.'</a>
				</div>
				
				<p>'.$p_1.'</p>
				<p>'.$p_2.'</p>
			</div>

			'.add_style_tag($id."_h1_p_a_hero", $root_folder."_/component/footer/h2_a_a_DARK_FOOTER/").'

		</div>
	';
}
?>