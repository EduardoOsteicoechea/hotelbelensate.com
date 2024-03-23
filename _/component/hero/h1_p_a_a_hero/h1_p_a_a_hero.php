<?php
function h1_p_a_a_hero
(
	 $root_folder,
	 $id,
	 $background_image_name,
	 $h1,
	 $p,
	 $a1,
	 $a1_href,
	 $a2,
	 $a2_href
)
{
	return '
		<div
		id="'.$id.'h1_p_a_a_hero_container"
		class="h1_p_a_a_hero_container"
		>
			<div
			id="'.$id.'h1_p_a_a_hero_image_container"
			class="h1_p_a_a_hero_image_container"
			>
				<img src="'.$root_folder.'_/media/image/'.$background_image_name.'" alt="Imagen de habitación" height="100%">
				<div></div>
			</div>

			<div
			id="'.$id.'h1_p_a_a_hero_message_container"
			class="h1_p_a_a_hero_message_container"
			>
				<h1>'.$h1.'</h1>
				<p>'.$p.'</p>

				<div
				id="'.$id.'h1_p_a_a_hero_message_buttons_container"
				class="h1_p_a_a_hero_message_buttons_container"
				>
					<a href="'.$a1_href.'">'.$a1.'</a>
					<a href="'.$a2_href.'">'.$a2.'</a>
				</div>
			</div>
			'.add_style_tag($id."_header", $root_folder."_/component/hero/h1_p_a_a_hero/").'
		</div>
	';
}
?>