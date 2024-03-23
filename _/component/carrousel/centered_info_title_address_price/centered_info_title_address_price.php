<?php
	function centered_info_title_address_price
	(
		string $root_folder,
		array  $title_array,
		array  $address_array,
		array  $price_array,
		array  $image_name_array,
		string $id
	)
	{
		$component_folder = $root_folder . '_/component/carrousel/centered_info_title_address_price/';
		$image_folder = $root_folder . "_/media/image/";

		return '
			<div
			id="'.$id.'_centered_info_title_address_price_carrousel"
			class="centered_info_title_address_price_carrousel"
			>
				'
				.create_image_strip($id, $image_folder, $image_name_array)
				.create_image_overlay($id)
				.create_slider_information_container($id, $title_array, $address_array, $price_array)
				.create_slider_buttons($id)
				.create_slider_dot_map($id, $image_name_array)
				.'
				<script>
					const centered_info_title_address_price_carrousel_style_tag = document.createElement("link");
					centered_info_title_address_price_carrousel_style_tag.setAttribute("rel","stylesheet");
					centered_info_title_address_price_carrousel_style_tag.setAttribute("href","'.$component_folder.'style.css");
					document.head.appendChild(centered_info_title_address_price_carrousel_style_tag);
					
					let '.$id.'_centered_info_title_address_price_carrousel = document.getElementById("'.$id.'_centered_info_title_address_price_carrousel");
					
					let '.$id.'_centered_info_title_address_price_carrousel_image_strip = document.getElementById("'.$id.'_centered_info_title_address_price_carrousel_image_strip");
					let '.$id.'_centered_info_title_address_price_carrousel_image_container = '.$id.'_centered_info_title_address_price_carrousel_image_strip.children;
					
					let '.$id.'_centered_info_title_address_price_carrousel_buttons_container = document.getElementById("'.$id.'_centered_info_title_address_price_carrousel_buttons_container");
					let '.$id.'_centered_info_title_address_price_carrousel_button = '.$id.'_centered_info_title_address_price_carrousel_buttons_container.children;

					let '.$id.'_centered_info_title_address_price_carrousel_dot_map_container = document.getElementById("'.$id.'_centered_info_title_address_price_carrousel_dot_map_container");
					let '.$id.'_centered_info_title_address_price_carrousel_dot = '.$id.'_centered_info_title_address_price_carrousel_dot_map_container.children;

					let '.$id.'_centered_info_title_address_price_carrousel_information_container = document.getElementById("'.$id.'_centered_info_title_address_price_carrousel_information_container");
					let '.$id.'_centered_info_title_address_price_carrousel_information_single_container = '.$id.'_centered_info_title_address_price_carrousel_information_container.children;

					window.'.$id.'_centered_info_title_address_price_carrousel_current_element = 0;
					update_highlight_and_display_of_centered_info_title_address_price_carrousel_current_element
					(
						window.'.$id.'_centered_info_title_address_price_carrousel_current_element,
						'.$id.'_centered_info_title_address_price_carrousel_dot,
						'.$id.'_centered_info_title_address_price_carrousel_information_single_container
					);

					function add_event_listener_to_each_centered_info_title_address_price_carrousel_button
					(
						centered_info_title_address_price_carrousel_button,
						centered_info_title_address_price_carrousel_dot,
						centered_info_title_address_price_carrousel_image_strip,
						centered_info_title_address_price_carrousel_image_container,
						centered_info_title_address_price_carrousel_information_single_container
					)
					{
						centered_info_title_address_price_carrousel_button[0].addEventListener("pointerup", ()=>
						{
							update_carrousel_current_element(-1, '.$id.'_centered_info_title_address_price_carrousel_dot.length);

							slide_centered_info_title_address_price_carrousel
							(
								window.'.$id.'_centered_info_title_address_price_carrousel_current_element,
								1,
								centered_info_title_address_price_carrousel_image_strip,
								centered_info_title_address_price_carrousel_image_container,
								centered_info_title_address_price_carrousel_dot,
								centered_info_title_address_price_carrousel_information_single_container
							)
						});
						
						centered_info_title_address_price_carrousel_button[1].addEventListener("pointerup", ()=>
						{
							update_carrousel_current_element(1, '.$id.'_centered_info_title_address_price_carrousel_dot.length);

							slide_centered_info_title_address_price_carrousel
							(
								window.'.$id.'_centered_info_title_address_price_carrousel_current_element,
								-1,
								centered_info_title_address_price_carrousel_image_strip,
								centered_info_title_address_price_carrousel_image_container,
								centered_info_title_address_price_carrousel_dot,
								centered_info_title_address_price_carrousel_information_single_container
							)
						});
						
						for(let i=0; i < centered_info_title_address_price_carrousel_dot.length; i++)
						{
							let button = centered_info_title_address_price_carrousel_dot[i];
							button.addEventListener("pointerup", ()=>
							{
								slide_centered_info_title_address_price_carrousel
								(
									i,
									1,
									centered_info_title_address_price_carrousel_image_strip,
									centered_info_title_address_price_carrousel_image_container,
									centered_info_title_address_price_carrousel_dot,
									centered_info_title_address_price_carrousel_information_single_container
								)
							});
						};
					};

					function update_carrousel_current_element(sign, max)
					{
						if (window.'.$id.'_centered_info_title_address_price_carrousel_current_element > 0 && sign < 0)
						{
							window.'.$id.'_centered_info_title_address_price_carrousel_current_element--;
						}
						else if (window.'.$id.'_centered_info_title_address_price_carrousel_current_element + 1 < max && sign > 0)
						{
							window.'.$id.'_centered_info_title_address_price_carrousel_current_element++;
						};
					};

					
					function slide_centered_info_title_address_price_carrousel
					(
						current_element,
						direction,
						centered_info_title_address_price_carrousel_image_strip,
						centered_info_title_address_price_carrousel_image_container,
						centered_info_title_address_price_carrousel_dot,
						centered_info_title_address_price_carrousel_information_single_container
					)
					{				
						let image_strip_width = centered_info_title_address_price_carrousel_image_strip.getBoundingClientRect().width;
						let image_strip_width_fraction = image_strip_width / centered_info_title_address_price_carrousel_image_container.length; 
						centered_info_title_address_price_carrousel_image_strip.style.left = (image_strip_width_fraction * -current_element) + "px";

						update_highlight_and_display_of_centered_info_title_address_price_carrousel_current_element
						(
							current_element,
							centered_info_title_address_price_carrousel_dot,
							centered_info_title_address_price_carrousel_information_single_container
						);
					};


					function update_highlight_and_display_of_centered_info_title_address_price_carrousel_current_element
					(
						current_element,
						centered_info_title_address_price_carrousel_dot,
						centered_info_title_address_price_carrousel_information_single_container
					)
					{
						for (let i=0; i< centered_info_title_address_price_carrousel_dot.length; i++) 
						{
							if(i !== current_element)
							{
								centered_info_title_address_price_carrousel_dot[i].classList.remove("selected")
								centered_info_title_address_price_carrousel_information_single_container[i].classList.remove("visible")
								centered_info_title_address_price_carrousel_information_single_container[i].classList.add("hidden")
							}
							else
							{
								centered_info_title_address_price_carrousel_dot[i].classList.add("selected")
								centered_info_title_address_price_carrousel_information_single_container[i].classList.add("visible")
							}
						};
						
					};


					add_event_listener_to_each_centered_info_title_address_price_carrousel_button
					(
						'.$id.'_centered_info_title_address_price_carrousel_button,
						'.$id.'_centered_info_title_address_price_carrousel_dot,
						'.$id.'_centered_info_title_address_price_carrousel_image_strip,
						'.$id.'_centered_info_title_address_price_carrousel_image_container,
						'.$id.'_centered_info_title_address_price_carrousel_information_single_container
					)

					

					setTimeout(()=>
					{
						update_carrousel_current_element(1, '.$id.'_centered_info_title_address_price_carrousel_dot.length);

						slide_centered_info_title_address_price_carrousel
						(
							window.'.$id.'_centered_info_title_address_price_carrousel_current_element,
							1,
							'.$id.'_centered_info_title_address_price_carrousel_image_strip,
							'.$id.'_centered_info_title_address_price_carrousel_image_container,
							'.$id.'_centered_info_title_address_price_carrousel_dot,
							'.$id.'_centered_info_title_address_price_carrousel_information_single_container
						)

						function clear_centered_info_title_address_price_carrousel_automatic_slide_interval(interval)
						{
							//console.log("interval cleared")
							clearInterval(interval)
						}

						let centered_info_title_address_price_carrousel_automatic_slide = () =>
						{
							if (window.'.$id.'_centered_info_title_address_price_carrousel_current_element === '.$id.'_centered_info_title_address_price_carrousel_dot.length - 1) 
							{
								window.'.$id.'_centered_info_title_address_price_carrousel_current_element = 0;
								slide_centered_info_title_address_price_carrousel
								(
									0,
									-1,
									'.$id.'_centered_info_title_address_price_carrousel_image_strip,
									'.$id.'_centered_info_title_address_price_carrousel_image_container,
									'.$id.'_centered_info_title_address_price_carrousel_dot,
									'.$id.'_centered_info_title_address_price_carrousel_information_single_container
								)
								clear_centered_info_title_address_price_carrousel_automatic_slide_interval(centered_info_title_address_price_carrousel_automatic_slide_interval)
							}
							else
							{
								update_carrousel_current_element(1, '.$id.'_centered_info_title_address_price_carrousel_dot.length);
								slide_centered_info_title_address_price_carrousel
								(
									window.'.$id.'_centered_info_title_address_price_carrousel_current_element,
									1,
									'.$id.'_centered_info_title_address_price_carrousel_image_strip,
									'.$id.'_centered_info_title_address_price_carrousel_image_container,
									'.$id.'_centered_info_title_address_price_carrousel_dot,
									'.$id.'_centered_info_title_address_price_carrousel_information_single_container
								)
							};
						};

						let centered_info_title_address_price_carrousel_automatic_slide_interval = setInterval(()=>
						{	
							centered_info_title_address_price_carrousel_automatic_slide()
						},5000);
					},5000);
				</script>
			</div>
			
		';
	};

	function create_image_strip($id, $image_folder, $image_name_array)
	{
		$image_strip = '
			<div
			id="'.$id.'_centered_info_title_address_price_carrousel_image_strip"
			class="centered_info_title_address_price_carrousel_image_strip"
			>
		';

		for ($i=0; $i < count($image_name_array); $i++) 
		{ 
			$image_strip .= '
				<div
				id="'.$id.'_centered_info_title_address_price_carrousel_image_strip_single_image_container_'.$i.'"
				class="centered_info_title_address_price_carrousel_image_strip_single_image_container"
				>
					<img 
					id="'.$id.'_centered_info_title_address_price_carrousel_image_strip_single_image_container_image_'.$i.'"
					class="centered_info_title_address_price_carrousel_image_strip_single_image_container_image"
					src="'.$image_folder.$image_name_array[$i].'" 
					alt="Property image '.$i.'" 
					height="100%"
					>
				</div>
			';
		};

		$image_strip .= '
			</div>
		';

		return $image_strip;
	};

	function create_image_overlay($id)
	{
		return '
			<div
				id="'.$id.'_centered_info_title_address_price_carrousel_image_overlay"
				class="centered_info_title_address_price_carrousel_image_overlay"
			></div>
		';
	};

	function create_slider_buttons($id)
	{
		return '
			<div
			id="'.$id.'_centered_info_title_address_price_carrousel_buttons_container"
			class="centered_info_title_address_price_carrousel_buttons_container"
			>
				<div
				id="'.$id.'_centered_info_title_address_price_carrousel_left_button"
				class="centered_info_title_address_price_carrousel_button centered_info_title_address_price_carrousel_left_button"
				><p> <</p></div>
				<div
				id="'.$id.'_centered_info_title_address_price_carrousel_right_button"
				class="centered_info_title_address_price_carrousel_button centered_info_title_address_price_carrousel_right_button"
				><p>> </p></div>
			</div>
		';
	};

	function create_slider_dot_map($id, $image_name_array)
	{
		return '
			<div
			id="'.$id.'_centered_info_title_address_price_carrousel_dot_map_container"
			class="centered_info_title_address_price_carrousel_dot_map_container"
			>
			'.create_slider_dot_map_dots($id, $image_name_array).'
			</div>
		';
	};

	function create_slider_dot_map_dots($id, $image_name_array)
	{
		$slider_dot_map_dots = '';

		for ($i=0; $i < count($image_name_array); $i++) 
		{ 
			$slider_dot_map_dots .= '			
				<div
				id="'.$id.'_centered_info_title_address_price_carrousel_dot_'.$i.'"
				class="centered_info_title_address_price_carrousel_dot"
				></div>
			';
		};

		return $slider_dot_map_dots;
	};

	function create_slider_information_container($id, $title_array, $address_array, $price_array,)
	{
		$information_container = '';
		
		$information_container .= '			
			<div
			id="'.$id.'_centered_info_title_address_price_carrousel_information_container"
			class="centered_info_title_address_price_carrousel_information_container"
			>
				'.create_slider_information_single_container($id, $title_array, $address_array, $price_array).'
			</div>
		';

		return $information_container;
	};

	function create_slider_information_single_container($id, $title_array, $address_array, $price_array)
	{
		$single_information_container = '';

		for ($i=0; $i < count($title_array); $i++) 
		{ 
			$single_information_container .= '			
				<div
				id="'.$id.'_centered_info_title_address_price_carrousel_single_information_container_'.$i.'"
				class="centered_info_title_address_price_carrousel_single_information_container"
				>
					<h2>'.$title_array[$i].'</h2>
					<p>'.$address_array[$i].'</h2>
					<h3 style="display:none">'.$price_array[$i].'</h3>
					<div>
						<a 
						href="../reservar"
						>
							Reserva en línea
						</a>
						<a
						href="https://wa.me/584123033034?text=Saludos%21"
						> 
								<img
								src="../_/media/image/brand/social_media_icons_whatsapp.webp"
								alt="WhatsApp Icon"
								height="100%"
								>
								Contáctanos por WhatsApp
						</a>
					</div>
				</div>
			';
		};

		return $single_information_container;
	};
?>