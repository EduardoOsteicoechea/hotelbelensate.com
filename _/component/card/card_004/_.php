<?php
class card_004 {
public function __construct( 
	$root_folder, 
	$sesion_array,
	$page_name,
	$parent_component_id,
	$parent_component_class,
	$component_class,
	$rooms_type_name,
	$rooms_type_data,
	$card_iteration,
)
{
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->parent_component_id = $parent_component_id;
	$this->parent_component_class = $parent_component_class;
	$this->component_class = $component_class;
	$this->rooms_type_name = $rooms_type_name;
	$this->rooms_type_data = $rooms_type_data;
	$this->card_iteration = $card_iteration;
	// print_r($rooms_type_data);
}

public function html()
{
	$type_description_elements_arrray = $this->rooms_type_data["datos de tipo"]["elementos de descripcion de habitacion"];
	$type_description_elements = "";
	for ($i=0; $i < count($type_description_elements_arrray); $i++) 
	{ 
		$element = $type_description_elements_arrray[$i];
		if($i == count($type_description_elements_arrray) - 1){
			$type_description_elements .= "<b>".$element . "</b>";
		}else{
			$type_description_elements .= "<b>".$element . "</b><span> &#x25CF </span>";
		};
	};

	$element_services_icons_data = $this->rooms_type_data["datos de tipo"]["servicios de habitacion"];
	$element_services_icons = "";
	for ($i=0; $i < count($element_services_icons_data); $i++) 
	{ 
		$element = $element_services_icons_data[$i];
		$element_services_icons .= '
			<img
			id='. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_element_services_icons_container_image"
			class="'.$this->component_class. "_" . "card_element_services_icons_container_image".'
			height="100%"
			src="'.$this->root_folder.'_/media/image/brand/'.$element[1].'"
			alt="card_element_services_icons_container_image"
			>
		';
	};
	
	$quantity_available_data = $this->rooms_type_data["datos de unidades de tipo"];
	$quantity_available_dots = "";
	for ($i=0; $i < count($quantity_available_data); $i++) 
	{ 
		$element = $quantity_available_data[$i];
		$quantity_available_dots .= '<span> &#x25CF </span>';
	};
	
	return '
		<div
        id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'outer_container"
        class="'.$this->component_class. "_" .'outer_container"
		>
			<div
			id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container"
			class="'.$this->component_class. "_" .'image_viewer_container"
			>
				<div
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container_image_container"
				class="'.$this->component_class. "_" .'image_viewer_container_image_container"
				>
					<img
					id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container_image_container_image"
					class="'.$this->component_class. "_" .'image_viewer_container_image_container_image"
					height="100%"
					src="'.$this->root_folder.'_/media/image/room/'.$this->rooms_type_data["datos de tipo"]["imagen miniatura"].'"
					alt="image_viewer_container_image_container_image"
					>
				</div>
				<div
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container_full_screen_button_container"
				class="'.$this->component_class. "_" .'image_viewer_container_full_screen_button_container"
				>
					<p
					id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container_full_screen_button_paragraph"
					class="'.$this->component_class. "_" .'image_viewer_container_full_screen_button_paragraph"
					>
						Visualizar en Pantalla completa
					</p>
				</div>
			</div>

			<div
			id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration . "_" .'information_container_left_bar"
			class="
				'.$this->component_class. "_" .'information_container_left_bar 
				'.$this->component_class. "_" .'information_container_bar
				'.$this->component_class. "_" .'information_container_left_bar_2 
			"></div>

			<div
			id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'entity_information_container"
			class="'.$this->component_class. "_" .'entity_information_container"
			>
				<h2
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_title"
				class="'.$this->component_class. "_" .'information_title"
				>
					'.$this->rooms_type_name.'
				</h2>

			
				<p
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_paragraph"
				class="'.$this->component_class. "_" .'information_paragraph"
				>
					'.$type_description_elements.'
				</p>

				<div
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'card_element_services_icons_container"
				class="'.$this->component_class. "_" .'card_element_services_icons_container"
				>
					'.$element_services_icons.'
				</div>

				<div
				id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'reserve_and_price_button_container"
				class="'.$this->component_class. "_" .'reserve_and_price_button_container"
				>
					<div
					id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'quantity_available"
					class="'.$this->component_class. "_" .'quantity_available"
					>
						<b>Disponibles</b>
						<div>'.$quantity_available_dots.'</div>
					</div>

					<div
					id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_capacity_icon_container"
					class="'.$this->component_class. "_" .'information_capacity_icon_container"
					>
						<img
						id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_capacity_icon_container_image"
						class="'.$this->component_class. "_" .'information_capacity_icon_container_image"
						height="100%"
						src="'.$this->root_folder.'_/media/image/brand/'.$this->rooms_type_data["datos de tipo"]["imagen predeterminada de capacidad de ocupacion cancelando pax"].'"
						alt="information_capacity_icon_container_image"
						>
					</div>

					<div
					id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'price_container"
					class="'.$this->component_class. "_" .'price_container"
					>
						'.$this->rooms_type_data["datos de tipo"]["precio bruto de tipo"].' $
					</div>

					<div
					id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_button"
					class="'.$this->component_class. "_" .'information_button"
					>
						Reservar
					</div>
				</div>
			</div>

			<div
			id="'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration . "_" .'information_container_right_bar"
			class="
				'.$this->component_class. "_" .'information_container_right_bar 
				'.$this->component_class. "_" .'information_container_bar
			"></div>

			<script type="module">
				import '. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  '_class from "'.$this->root_folder.'_/component/card/card_004/_.js"
				new '. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  '_class(
					"'.$this->root_folder.'",
					'.json_encode($this->sesion_array).',
					"'.$this->page_name.'",
					"'.$this->parent_component_id.'",
					"'.$this->parent_component_class.'",
					"'.$this->component_class.'",
					"'.$this->rooms_type_name.'",
					'.json_encode($this->rooms_type_data).',
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'outer_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container_image_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container_image_container_image",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container_full_screen_button_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'image_viewer_container_full_screen_button_paragraph",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'entity_information_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_title",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_capacity_icon_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_capacity_icon_container_image",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_paragraph",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'price_container",
					"'. $this->page_name . "_" . $this->parent_component_id . "_" . $this->component_class. "_" . $this->card_iteration .  "_" .'information_button",
					'.$this->card_iteration.',
				);
			</script>
		</div>
	';
}


}?>