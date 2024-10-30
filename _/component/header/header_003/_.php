<?php
class header_003
{
    public function __construct(
        $root_folder, 
        $sesion_array,
        $page_name,
        $component_id,
    )
    {    
        $this->root_folder = $root_folder;
        $this->sesion_array = $sesion_array;
        $this->page_name = $page_name;
        $this->component_class = static::class;
        $this->component_id = $page_name . "_" . $component_id . "_" . $this->component_class;
        $this->component_folder_path = $this->root_folder .  '_/component/'.explode("_",static::class)[0].'/' . $this->component_class . "/";
        $this->javascript_class_path = $this->root_folder . $this->component_folder_path . "_.js";
        $this->images_folder = $this->root_folder . "_/media/image/";

        echo '
        <div
        id="'. $this->component_id . "_" .'outer_container"
        class="'. $this->component_class . "_" .'outer_container"
        >
            <a
            id="'. $this->component_id . "_" .'logo_anchor"
            class="'. $this->component_class . "_" .'logo_anchor"
            href="'. $this->root_folder .'inicio"
            >
                <img
                id="'. $this->component_id . "_" .'logo_anchor_image"
                class="'. $this->component_class . "_" .'logo_anchor_image"
                src="'. $this->images_folder .'logo.webp"
                alt="Logo del Hotel Belensate"
                height="100%"
                >
            </a>
            <div
            id="'. $this->component_id . "_" .'button_container"
            class="'. $this->component_class . "_" .'button_container"
            >
                <div
                id="'. $this->component_id . "_" .'button_container_bar_1"
                class="'. $this->component_class . "_" .'button_container_bar"
                ></div>
                <div
                id="'. $this->component_id . "_" .'button_container_bar_2"
                class="'. $this->component_class . "_" .'button_container_bar"
                ></div>
                <div
                id="'. $this->component_id . "_" .'button_container_bar_3"
                class="'. $this->component_class . "_" .'button_container_bar"
                ></div>
            </div>
        </div>

        <nav
        id="'. $this->component_id . "_" .'navigation_container"
        class="'. $this->component_class . "_" .'navigation_container"
        data-expandedStatus="false"
        >
            <a
            id="'. $this->component_id . "_" .'navigation_container_inicio_button"
            class="'. $this->component_class . "_" .'navigation_container_button"
            href="'. $this->root_folder .'inicio"
            >
                inicio
            </a>
            <a
            id="'. $this->component_id . "_" .'navigation_container_habitaciones_button"
            class="'. $this->component_class . "_" .'navigation_container_button"
            href="'. $this->root_folder .'habitaciones"
            >
                habitaciones
            </a>
            <a
            id="'. $this->component_id . "_" .'navigation_container_reservaciones_button"
            class="'. $this->component_class . "_" .'navigation_container_button"
            href="'. $this->root_folder .'reservaciones"
            >
                reservaciones
            </a>
            <a
            id="'. $this->component_id . "_" .'navigation_container_galeria_button"
            class="'. $this->component_class . "_" .'navigation_container_button"
            href="'. $this->root_folder .'galeria"
            >
                galería
            </a>
            <a
            id="'. $this->component_id . "_" .'navigation_container_contacto_button"
            class="'. $this->component_class . "_" .'navigation_container_button"
            href="'. $this->root_folder .'contacto"
            >
                contacto
            </a>
            
            <script src="'. $this->component_folder_path .'_.js"></script>
            <script>
                '. $this->component_class . "_" .'navigation_container_buttons = document.getElementsByClassName("'. $this->component_class . "_" .'navigation_container_button");
                for (let index = 0; index < '. $this->component_class . "_" .'navigation_container_buttons.length; index++) 
                {
                    const element = '. $this->component_class . "_" .'navigation_container_buttons[index];
                    if(element.id.includes("'.$this->page_name.'_button"))
                    {
                        element.style.color = "var(--c2)";
                        //element.style.background = "var(--c3)";
                        element.style.background = "var(--a_1)";
                    };
                };
            </script>
        </nav>
';}}?>