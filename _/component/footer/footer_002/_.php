<?php
class footer_002 {
public function __construct
( 
string $root_folder, 
array $sesion_array,
string $page_name,
string $component_id,
){
$this->root_folder = $root_folder;
$this->sesion_array = $sesion_array;
$this->page_name = $page_name;
$this->component_class = static::class;
$this->component_id = $page_name . "_" . $component_id . "_" . $this->component_class;
$this->component_folder_path = $this->root_folder .  '_/component/'.explode("_",static::class)[0].'/' . $this->component_class . "/";
$this->javascript_class_path = $this->root_folder . $this->component_folder_path . "_.js";

echo '
<div
id="'.$this->component_id.'_outer_container"
class="'.$this->component_class.'_outer_container"
>
    <div
    id="'.$this->component_id.'_left_bar"
    class="'.$this->component_class.'_left_bar '.$this->component_class.'_bar"
    ></div>

    <div
    id="'.$this->component_id.'_information_container"
    class="'.$this->component_class.'_information_container"
    >
        <a
        id="'.$this->component_id.'_logo"
        class="'.$this->component_class.'_logo"	
        href="'.$this->root_folder.'inicio"
        >
            <img
            id="'.$this->component_id.'_logo_image"
            class="'.$this->component_class.'_logo_image"			
            src="'.$this->root_folder.'_/media/image/brand/logo.png"
            alt="WhatsApp Icon"
            height="100%"
            >
        </a>

        <h2
        id="'.$this->component_id.'_message_title"
        class="'.$this->component_class.'_message_title"
        >
            Nos alegra verte llegar
        </h2>
        
        <p
        id="'.$this->component_id.'_copywright_message"
        class="'.$this->component_class.'_copywright_message"
        >
            Hotelbelensate.com 2024 todos los derechos reservados
        </p>

        <p
        id="'.$this->component_id.'_no_pets_message"
        class="'.$this->component_class.'_no_pets_message"
        >
            Actualmente no somos un Hotel Pet Friendly
        </p>	
        
        <div
        id="'.$this->component_id . "_" . $this->component_class .'_navigation"
        class="'.$this->component_class.'_navigation"
        >
            <a
            id="'.$this->component_id.'_reservation_button"
            class="'.$this->component_class.'_navigation_anchor" 
            href="'. $this->root_folder .'inicio">inicio</a>
            <a
            id="'.$this->component_id.'_reservation_button"
            class="'.$this->component_class.'_navigation_anchor" 
            href="'. $this->root_folder .'habitaciones">habitaciones</a>
            <a
            id="'.$this->component_id.'_reservation_button"
            class="'.$this->component_class.'_navigation_anchor" 
            href="'. $this->root_folder .'reservaciones">reservaciones</a>
            <a
            id="'.$this->component_id.'_reservation_button"
            class="'.$this->component_class.'_navigation_anchor" 
            href="'. $this->root_folder .'galeria">galería</a>
            <a
            id="'.$this->component_id.'_reservation_button"
            class="'.$this->component_class.'_navigation_anchor" 
            href="'. $this->root_folder .'contacto">contacto</a>
        </div>

    </div>
    
    <div
    id="'.$this->component_id.'_right_bar"
    class="'.$this->component_class.'_right_bar '.$this->component_class.'_bar"
    ></div>

    <script type="module">
        // import '. $this->component_id. "_" . 'class from "'. $this->javascript_class_path .'"
        // new '. $this->component_id. "_" . 'class
        // (
        // 	"'.$this->root_folder.'",
        // 	'.json_encode($this->sesion_array).',
        // 	"'.$this->page_name.'",
        // 	"'.$this->component_id.'",
        // 	"'.$this->component_class.'",

        //     "'. $this->component_id . "_" .'outer_container",
        // );
    </script>

</div>';}}?>