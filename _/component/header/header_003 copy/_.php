<?php
class header_003
{
    public function __construct(
        $root_folder, 
        $sesion_array,
        $page_name,
        $component_id,
        $component_class,
    )
    {
        $this->root_folder = $root_folder;
        $this->sesion_array = $sesion_array;
        $this->page_name = $page_name;
        $this->component_id = $component_id;
        $this->component_class = $component_class;
    }

    public function print()
    {
        echo '
        <div
        id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class. "_" .'outer_container"
        class="'.$this->component_class.'"
        >
            <a
            id="'. $this->component_id . "_" . $this->component_class . "_" .'logo_anchor"
            class="'.$this->component_class. "_" .'logo_anchor"
            href="'.$this->root_folder.'inicio"
            >
                <img
                id="'. $this->component_id . "_" . $this->component_class. "_" .'logo_anchor_image"
                class="'. $this->component_class. "_" .'logo_anchor_image"
                src="'.$this->root_folder.'_/media/image/header/logo_horizontal.webp"
                alt="Logo del Hotel Belensate"
                height="100%"
                >
            </a>
            <div
            id="'. $this->component_id . "_" . $this->component_class . "_" .'button_container"
            class="'.$this->component_class. "_" .'button_container"
            >
                <div
                id="'. $this->component_id . "_" . $this->component_class. "_" .'button_container_bar_1"
                class="'. $this->component_class. "_" .'button_container_bar"
                ></div>
                <div
                id="'. $this->component_id . "_" . $this->component_class. "_" .'button_container_bar_2"
                class="'. $this->component_class. "_" .'button_container_bar"
                ></div>
                <div
                id="'. $this->component_id . "_" . $this->component_class. "_" .'button_container_bar_3"
                class="'. $this->component_class. "_" .'button_container_bar"
                ></div>
            </div>
        </div>
        <nav
        id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container"
        class="'. $this->component_class. "_" .'navigation_container"
        data-expandedStatus="false"
        >
            <a
            id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_inicio_button"
            class="'. $this->component_class. "_" .'navigation_container_button"
            href="'.$this->root_folder.'inicio"
            >
                <p
                id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_inicio_button_text_paragraph"
                class="'. $this->component_class. "_" .'navigation_container_button_text_paragraph"
                >
                    inicio
                </p>
            </a>
            <a
            id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_habitaciones_button"
            class="'. $this->component_class. "_" .'navigation_container_button"
            href="'.$this->root_folder.'habitaciones"
            >
                <p
                id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_habitaciones_button_text_paragraph"
                class="'. $this->component_class. "_" .'navigation_container_button_text_paragraph"
                >
                    habitaciones
                </p>
            </a>
            <a
            id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_reservaciones_button"
            class="'. $this->component_class. "_" .'navigation_container_button"
            href="'.$this->root_folder.'reservaciones"
            >
                <p
                id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_reservaciones_button_text_paragraph"
                class="'. $this->component_class. "_" .'navigation_container_button_text_paragraph"
                >
                    reservaciones
                </p>
            </a>
            <a
            id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_galeria_button"
            class="'. $this->component_class. "_" .'navigation_container_button"
            href="'.$this->root_folder.'galeria"
            >
                <p
                id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_galeria_button_text_paragraph"
                class="'. $this->component_class. "_" .'navigation_container_button_text_paragraph"
                >
                    galería
                </p>
            </a>
            <a
            id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_contacto_button"
            class="'. $this->component_class. "_" .'navigation_container_button"
            href="'.$this->root_folder.'contacto"
            >
                <p
                id="'. $this->component_id . "_" . $this->component_class. "_" .'navigation_container_contacto_button_text_paragraph"
                class="'. $this->component_class. "_" .'navigation_container_button_text_paragraph"
                >
                    contacto
                </p>
            </a>
            
            
        </nav>
        <script src="'.$this->root_folder.'_/component/header/header_003/_.js"></script>
        <script>
            '. $this->component_class. "_" .'navigation_container_buttons = document.getElementsByClassName("'. $this->component_class. "_" .'navigation_container_button");
            for (let index = 0; index < '. $this->component_class. "_" .'navigation_container_buttons.length; index++) {
                const element = '. $this->component_class. "_" .'navigation_container_buttons[index];
                const elementChildrenParagraph = element.querySelector(".header_003_navigation_container_button_text_paragraph");
                const elementAnchors = element.querySelectorAll(".header_003_navigation_container_button_anchors_container_anchor");

                if(elementChildrenParagraph.id.includes("'.$this->page_name.'"))
                {
                    elementChildrenParagraph.style.color = "var(--c1)";
                    elementChildrenParagraph.style.background = "var(--c2)";
                    
                    if(elementAnchors.length > 1){
                        if(window.innerWidth > window.innerHeight)
                        {
                            element.querySelector(".header_003_navigation_container_button_dropdown_button").style.top="2dvw";
                        }
                        else
                        {
                            element.querySelector(".header_003_navigation_container_button_dropdown_button").style.top="9dvw";
                        };                    
                    };
                }
                else if (elementAnchors)
                {  
                    if (elementAnchors.length > 0)
                    {
                        for (let j = 0; j < elementAnchors.length; j++) {
                            const elementChildren = elementAnchors[j];
                            if(elementChildren.id.includes("'.$this->page_name.'"))
                            {
                                elementChildren.style.color = "var(--c2)";
                                elementChildren.style.display = "flex";
                                elementChildren.style.background = "var(--c1)";
                                elementChildrenParagraph.style.color = "var(--c1)";
                                elementChildrenParagraph.style.background = "var(--c2)";
                    
                                if(window.innerWidth > window.innerHeight)
                                {
                                    element.querySelector(".header_003_navigation_container_button_dropdown_button").style.top="3dvw";
                                }
                                else
                                {
                                    element.querySelector(".header_003_navigation_container_button_dropdown_button").style.top="9dvw";
                                };
                            }
                        };
                    };
                };
            };
        </script>




';}}?>