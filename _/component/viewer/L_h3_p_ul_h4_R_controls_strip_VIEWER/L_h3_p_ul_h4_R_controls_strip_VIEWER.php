<?php
function L_h3_p_ul_h4_R_controls_strip_VIEWER
(
	 $root_folder,
	 $id,
	 $h2,
	 $h3,
	 $p,
	 $feature_list,
	 $h4,
	 $a_text,
	 $a_href,
	 $image_array
)
{
	return '
		<div
		id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_global_container"
		class="L_h3_p_ul_h4_R_controls_strip_VIEWER_global_container"
		>	
			<div
			id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_h2_container"
			class="L_h3_p_ul_h4_R_controls_strip_VIEWER_h2_container"
			>
				<h2>'.$h2.'</h2>
			</div>

			<div
			id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_UI_container"
			class="L_h3_p_ul_h4_R_controls_strip_VIEWER_UI_container"
			>
				<div
				id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_LEFT_container"
				class="L_h3_p_ul_h4_R_controls_strip_VIEWER_LEFT_container"
				>	
					<div
					id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_LEFT_container_BACKGROUND"
					class="L_h3_p_ul_h4_R_controls_strip_VIEWER_LEFT_container_BACKGROUND"
					>
						<img 
						src="'.$root_folder.'_/media/image/'.$image_array[0].'" 
						alt="Imagen de Habitación" 
						height="100%">
						<div></div>
					</div>

					<h3>'.$h3.'</h3>
					<p>'.$p.'</p>
					<ul>'.
					(
						function
						(
							$feature_list
						)
						{
							$list = '';
							for ($i=0; $i < count($feature_list); $i++) 
							{ 
								$list .= '
									<li>'.$feature_list[$i].'</li>
								';
							};
							return $list;
						}
					)($feature_list)
					.'</ul>
					<h4>'.$h4.'</h4>
					<a href="../'.$a_href.'">'.$a_text.'</a>
				</div>

				<div
				id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_container"
				class="L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_container"
				>
					<div
					id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_container_image_STRIP"
					class="L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_container_image_STRIP"			
					>
						'. 
						(
							function
							(
								$root_folder,
								$id,
								$image_array
							)
							{
								$container = '';
						
								for ($i=0; $i < count($image_array); $i++) 
								{ 
									$container .= '
										<div
										id="'.$id.'L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_container_IMAGE_container_'.$i.'"
										class="L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_container_IMAGE_container"	
										>
											<img src="'.$root_folder.'_/media/image/'.$image_array[$i].'" alt="Habitación de imagen" height="100%">
											<div></div>
										</div>
									';
								};
								
								return $container;
							}
						)($root_folder,$id,$image_array)
						.'	
					</div>
				</div>

				
				<div
				id="'.$id.'L_h3_p_ul_h4_R_controls_strip_VIEWER_controls_container"
				class="L_h3_p_ul_h4_R_controls_strip_VIEWER_CONTROLS_container"
				>	
					'.
					(
						function
						(
							$id,
							$image_array
						)
						{
							$dots = '';
					
							for ($i=0; $i < count($image_array); $i++) 
							{ 
								$dots .= '
									<div	
									id="'.$id.'L_h3_p_ul_h4_R_controls_strip_VIEWER_DOT_'.$i.'"
									class="L_h3_p_ul_h4_R_controls_strip_VIEWER_DOT"
									onpointerup="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOT_ONCLICK(event)"
									></div>
								';
							}
					
							$controls ='
								<div
								id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_controls_container"
								class="L_h3_p_ul_h4_R_controls_strip_VIEWER_LATERAL_CONTROLS_container"
								>
									<div
									id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_LEFT_CONTROL"
									class="L_h3_p_ul_h4_R_controls_strip_VIEWER_CONTROL"
									onpointerup="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_LEFT_CONTROL()"				
									>
										<
									</div>
					
									<div
									id="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_CONTROL"
									class="L_h3_p_ul_h4_R_controls_strip_VIEWER_CONTROL"
									onpointerup="'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_CONTROL()"
									>
										>
									</div>
								</div>
					
								<div
								id="'.$id.'L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS_container"
								class="L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS_container"
								>
									'.$dots.'
								</div>
							';
							return $controls;
						}
					)($id,$image_array)
					.'
				</div>
			</div>

			'.add_style_tag($id."_header", $root_folder."_/component/viewer/L_h3_p_ul_h4_R_controls_strip_VIEWER/").'

			<script>
				let '.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS = document.getElementById("'.$id.'L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS_container").children

				'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS[0].classList.add("current")


				function '.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_isolation
				(
					current_position,
					strip_id,
					dots
				)
				{
					'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_TRACK_DOTS
					(
						current_position,
						strip_id,
						dots
					);
				};


				function '.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOT_ONCLICK (event)
				{
					'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_isolation
					(
						event.target.id.slice(-1),
						"'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_container_image_STRIP",
						'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS
					)
				};


				function '.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_TRACK_DOTS (current, strip_id)
				{
					Array
					.from('.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS)
					.forEach
					((dot) => 
						{
							dot.classList.remove("current");
					  	}
					);

					'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS[current].classList.add("current");

					let strip = document.getElementById(strip_id);
					let strip_width = strip.getBoundingClientRect().width;
					let image_count = strip.children.length;
					let strip_displacement = strip_width / image_count;
					strip.style.left = (current * -strip_displacement) + "px"
					console.log(current * -strip_displacement)
				};

				
				function '.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_LEFT_CONTROL ()
				{
					let current_dot = null;
					Array
					.from('.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS)
					.forEach
					(
						(dot) => 
						{
							if(dot.classList[1] == "current" && Number(dot.id.slice(-1)) - 1 > -1)
							{
								current_dot = Number(dot.id.slice(-1)) - 1;
								setTimeout(()=>
								{
									'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_TRACK_DOTS
									(
										current_dot,
										"'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_container_image_STRIP",
										'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS
									);
								},100);
							};
					  	}
					);
				};
				

				function '.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_CONTROL ()
				{
					let current_dot = null;
					let dots_length = '.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS.length;

					Array
					.from('.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS)
					.forEach
					((dot) => 
						{
							if (dot.classList.length > 1)
							{
								if ( Number(dot.id.slice(-1)) < dots_length - 1 )
								{
									current_dot = Number(dot.id.slice(-1)) + 1;
									setTimeout(()=>
									{
										'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_TRACK_DOTS
										(
											current_dot,
											"'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_RIGHT_container_image_STRIP",
											'.$id.'_L_h3_p_ul_h4_R_controls_strip_VIEWER_DOTS
										);
									},100);
								};
							};							
					  	}
					);						
				};
			</script>
		</div>
	';
}
?>