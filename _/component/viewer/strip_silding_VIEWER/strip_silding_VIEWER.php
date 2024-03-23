<?php
function strip_silding_VIEWER
(
	 $root_folder,
	 $id,
	 array $image_name_array,
)
{ 	return '
		<div
		id="'.$id.'_strip_silding_VIEWER"
		class="strip_silding_VIEWER"
		>	
			<div
			id="'.$id.'_strip_silding_VIEWER_strip" 
			class="strip_silding_VIEWER_strip"
			>
				'.
				( function( $root_folder, $id, $image_name_array ) {
					$anchor_image_array = '';
					for ($i=0; $i < count($image_name_array); $i++) { 
						$anchor_image_array .= '
							<a
							id="'.$id.'_strip_silding_VIEWER_anchor_'.$i.'" 
							class="strip_silding_VIEWER_anchor" 
							href="
							'.$root_folder.'galeria?
							image='.$image_name_array[$i][0].'
							&
							author='.$image_name_array[$i][1].'
							&
							technique='.$image_name_array[$i][2].'
							&
							date='.$image_name_array[$i][3].'
							&
							article='.$image_name_array[$i][4].'
							"
							>
								<img
								id="'.$id.'_strip_silding_VIEWER_anchor_image_'.$i.'" 
								class="strip_silding_VIEWER_anchor_image" 
								src="'.$root_folder.'_/media/image/'.$image_name_array[$i][0].'"
								alt="Imagen de obra de galería."
								height="100%"
								>
							</a>
						';
					};
					return $anchor_image_array;
				})( $root_folder, $id, $image_name_array )
				.'
			</div>

			<div
			id="'.$id.'_strip_silding_VIEWER_controls" 
			class="strip_silding_VIEWER_controls" 
			>
				<div
				id="'.$id.'_strip_silding_VIEWER_controls" 
				class="strip_silding_VIEWER_LEFT_control" 
				onpointerup="'.$id.'_strip_silding_VIEWER_SLIDE_LEFT(event)" 
				><</div>
				<div
				id="'.$id.'_strip_silding_VIEWER_controls" 
				class="strip_silding_VIEWER_RIGHT_control" 
				onpointerup="'.$id.'_strip_silding_VIEWER_SLIDE_RIGHT(event)" 
				>></div>
			</div>


			'.add_style_tag($id."_header", $root_folder."_/component/viewer/strip_silding_VIEWER/").'

			<script>
				function '.$id.'_strip_silding_VIEWER_SLIDE_RIGHT(event)
				{
					let width = '.$id.'_strip_silding_VIEWER_strip.getBoundingClientRect().width
					'.$id.'_strip_silding_VIEWER_strip.style.left = (-width + window.innerWidth) + "px"
				};

				function '.$id.'_strip_silding_VIEWER_SLIDE_LEFT(event)
				{
					let width = '.$id.'_strip_silding_VIEWER_strip.getBoundingClientRect().width
					'.$id.'_strip_silding_VIEWER_strip.style.left = 0 + "px"
				};
			</script>
			<script>
				function '.$id.'_strip_silding_VIEWER_SLIDE_RIGHT(event)
				{
					let width = '.$id.'_strip_silding_VIEWER_strip.getBoundingClientRect().width
					'.$id.'_strip_silding_VIEWER_strip.style.left = (-width + window.innerWidth) + "px"
				};

				function '.$id.'_strip_silding_VIEWER_SLIDE_LEFT(event)
				{
					let width = '.$id.'_strip_silding_VIEWER_strip.getBoundingClientRect().width
					'.$id.'_strip_silding_VIEWER_strip.style.left = 0 + "px"
				};
			</script>
		</div>';
	}
?>