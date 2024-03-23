<?php
	function page_header
	(
		string $root_folder, 
		string $id, 
		string $page_name
	) 
	{
		$brand_folder = $root_folder . "_/media/image/brand/";

		function anchors_string
		(
			string $root_folder,
			string $page_name,
			string $containing_component_id,
			array  $anchor_name_array
		)
    	{
			$anchors_string = '';

			for ($i=0; $i < count($anchor_name_array); $i++) 
			{ 
				$name = $anchor_name_array[$i];
				if ($name == $page_name) 
				{
					$anchors_string .= '
						<a 
						class="'. $containing_component_id .'_anchor_tag current_location_anchor"
						href="' . $root_folder . $name . '"
						>
							'. ucfirst($name) .'
						</a>
					';
				}
				else if ($name == "contacto") 
				{
					$anchors_string .= '
						<a 
						class="'. $containing_component_id .'_anchor_tag"
						href="#footer"
						>
							'. ucfirst($name) .'
						</a>
					';
				}
				else if ($name == "galeria") 
				{
					$anchors_string .= '
						<a 
						class="'. $containing_component_id .'_anchor_tag"
						href="http://localhost/hotelbelensate.com/galeria/?image=gallery/art_4.jpg&author=AUTOR&technique=T%C3%89CNICA&date=01-01-2025&article=La%20Mona%20Lisa,%20tambi%C3%A9n%20conocida%20como%20La%20Gioconda,%20es%20una%20de%20las%20pinturas%20m%C3%A1s%20famosas%20del%20mundo."
						>
							'. ucfirst($name) .'
						</a>
					';
				}
				else
				{
					$anchors_string .= '
						<a 
						class="'. $containing_component_id .'_anchor_tag"
						href="' . $root_folder . $name . '"
						>
							'. ucfirst($name) .'
						</a>
					';
				};
			};
				return $anchors_string;
		};
			
		$header = '
			<div
			id="'.$id.'_header"
			class="header"
			>
					<a 
					href="'.$root_folder.'inicio" 
					id="'.$id.'_header_logo_link"
					class="header_logo_link"
					>
						<img 
						src="'.$brand_folder.'logo.webp" 
						id="header_logo_image"
						alt="Logo de Hotel Belensate"
						height="50%"
						>
					</a>
					<div
					id="'.$id.'_header_menu_button"
					class="header_menu_button"
					>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<nav
					id="'.$id.'_header_navigation"
					class="header_navigation"
					>
						'.anchors_string
						(
							$root_folder, 
							$page_name, 
							"header", 
							// ["habitaciones","restaurants","galeria","espacios","eventos","turismo","contacto"]
							["inicio", "reservar","galeria",]
						).'
					</nav>
					'.add_style_tag($id."_header", $root_folder."_/component/header/").'
			</div>
		';

		return $header;
	};
?>