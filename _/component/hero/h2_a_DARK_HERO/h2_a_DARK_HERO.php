<?php
function h2_a_DARK_HERO
(
	 $root_folder,
	 $id,
	 $background_image_name,
	 $h2,
	 $a_1_text,
	 $a_1_href,
)
{
	return '
		<div
		id="'.$id.'_h2_a_DARK_HERO"
		class="h2_a_DARK_HERO"
		>

			<div
			id="'.$id.'_h2_a_DARK_HERO_image_container"
			class="h2_a_DARK_HERO_image_container"
			>
				<img 
				src="'.$root_folder.'_/media/image/'.$background_image_name.'" 
				alt="Imagen del hotel Belensate" 
				height="100%"
				>
				<div></div>
			</div>

			<div
			id="'.$id.'_h2_a_DARK_HERO_message_container"
			class="h2_a_DARK_HERO_message_container"
			>
				<h2>'.$h2.'</h2>
				<a 
				href="'.$a_1_href.'">
					'.$a_1_text.'
				</a>
			</div>

			'.add_style_tag($id."_h2_a_DARK_HERO", $root_folder."_/component/hero/h2_a_DARK_HERO/").'

		</div>
	';
}
?>