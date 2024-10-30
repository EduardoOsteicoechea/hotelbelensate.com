habitaciones_header_header_003_outer_container = document.getElementById("habitaciones_header_header_003_outer_container");
header_header_003_logo_anchor = document.getElementById("header_header_003_logo_anchor");
header_header_003_logo_anchor_image = document.getElementById("header_header_003_logo_anchor_image");
header_header_003_button_container = document.getElementById("header_header_003_button_container");
header_header_003_button_container_bar_1 = document.getElementById("header_header_003_button_container_bar_1");
header_header_003_button_container_bar_2 = document.getElementById("header_header_003_button_container_bar_2");
header_header_003_button_container_bar_3 = document.getElementById("header_header_003_button_container_bar_3");

header_header_003_navigation_container = document.getElementById("header_header_003_navigation_container");
header_header_003_navigation_container_inicio_button = document.getElementById("header_header_003_navigation_container_inicio_button");
header_header_003_navigation_container_hospedaje_button = document.getElementById("header_header_003_navigation_container_hospedaje_button");
header_header_003_navigation_container_hospedaje_button_dropdown_button = document.getElementById("header_header_003_navigation_container_hospedaje_button_dropdown_button");
header_header_003_navigation_container_hospedaje_button_dropdown_button_bar_1 = document.getElementById("header_header_003_navigation_container_hospedaje_button_dropdown_button_bar_1");
header_header_003_navigation_container_hospedaje_button_dropdown_button_bar_2 = document.getElementById("header_header_003_navigation_container_hospedaje_button_dropdown_button_bar_2");
header_header_003_navigation_container_hospedaje_button_anchors_container = document.getElementById("header_header_003_navigation_container_hospedaje_button_anchors_container");
header_header_003_navigation_container_hospedaje_button_anchors_container_habitaciones_anchor = document.getElementById("header_header_003_navigation_container_hospedaje_button_anchors_container_habitaciones_anchor");
header_header_003_navigation_container_hospedaje_button_anchors_container_reservaciones_anchor = document.getElementById("header_header_003_navigation_container_hospedaje_button_anchors_container_reservaciones_anchor");
header_header_003_navigation_container_servicios_button = document.getElementById("header_header_003_navigation_container_servicios_button");
header_header_003_navigation_container_servicios_button_dropdown_button = document.getElementById("header_header_003_navigation_container_servicios_button_dropdown_button");
header_header_003_navigation_container_servicios_button_dropdown_button_bar_1 = document.getElementById("header_header_003_navigation_container_servicios_button_dropdown_button_bar_1");
header_header_003_navigation_container_servicios_button_dropdown_button_bar_2 = document.getElementById("header_header_003_navigation_container_servicios_button_dropdown_button_bar_2");
header_header_003_navigation_container_servicios_button_anchors_container = document.getElementById("header_header_003_navigation_container_servicios_button_anchors_container");
header_header_003_navigation_container_hospedaje_button_anchors_container_habitaciones_anchor = document.getElementById("header_header_003_navigation_container_hospedaje_button_anchors_container_habitaciones_anchor");
header_header_003_navigation_container_hospedaje_button_anchors_container_reservaciones_anchor = document.getElementById("header_header_003_navigation_container_hospedaje_button_anchors_container_reservaciones_anchor");
header_header_003_navigation_container_hospedaje_button_anchors_container_galería_anchor = document.getElementById("header_header_003_navigation_container_hospedaje_button_anchors_container_galería_anchor");
header_header_003_navigation_container_contacto_button = document.getElementById("header_header_003_navigation_container_contacto_button");
header_header_003_navigation_container_contacto_button_dropdown_button = document.getElementById("header_header_003_navigation_container_contacto_button_dropdown_button");
header_header_003_navigation_container_contacto_button_dropdown_button_bar_1 = document.getElementById("header_header_003_navigation_container_contacto_button_dropdown_button_bar_1");
header_header_003_navigation_container_contacto_button_dropdown_button_bar_2 = document.getElementById("header_header_003_navigation_container_contacto_button_dropdown_button_bar_2");
header_header_003_navigation_container_contacto_button_anchors_container = document.getElementById("header_header_003_navigation_container_contacto_button_anchors_container");
header_header_003_navigation_container_hospedaje_button_anchors_container_recepcion_anchor = document.getElementById("header_header_003_navigation_container_hospedaje_button_anchors_container_recepcion_anchor");
header_header_003_navigation_container_hospedaje_button_anchors_container_eventos_anchor = document.getElementById("header_header_003_navigation_container_hospedaje_button_anchors_container_eventos_anchor");

header_003_navigation_container_buttons = document.getElementsByClassName("header_003_navigation_container_button");
header_003_navigation_container_button_text_paragraphs = document.getElementsByClassName("header_003_navigation_container_button_text_paragraph");

header_header_003_navigation_container_inicio_button.addEventListener("pointerup",()=>{
    window.location.href = "../inicio" 
});

header_header_003_button_container.addEventListener("pointerup",()=>{
    if(header_header_003_navigation_container.getAttribute("data-expandedStatus") === "false")
    {
        header_header_003_navigation_container.setAttribute("data-expandedStatus","true");
        //header_header_003_button_container.style.background = "var(--c6)";
        header_header_003_navigation_container.style.height = "auto";
        header_header_003_navigation_container.style.padding = "2dvw 0 18dvw 0";
    }
    else
    {
        header_header_003_navigation_container.setAttribute("data-expandedStatus","false");
        //header_header_003_button_container.style.background = "var(--c3)";
        header_header_003_navigation_container.style.height = "0px";
        header_header_003_navigation_container.style.padding = "0 0 0 0";
    }
});


for (let index = 0; index < header_003_navigation_container_buttons.length; index++) {
    const button = header_003_navigation_container_buttons[index];
    const paragraph = button.querySelector(".header_003_navigation_container_button_text_paragraph");
    paragraph.addEventListener("pointerup",()=>{
        if(button.getAttribute("data-expandedStatus") === "false")
        {
            button.setAttribute("data-expandedStatus","true");
			button.style.backgroundColor = 'transparent';
            const button_anchors_container = button.querySelector(".header_003_navigation_container_button_anchors_container");
            const dropdown_button = button.querySelector(".header_003_navigation_container_button_dropdown_button");
            
            dropdown_button.style.transform = "rotate(180deg)";
            button_anchors_container.style.height = "auto";
            if (window.screen.orientation.type.includes("landscape")){
                button_anchors_container.style.padding = "1.5dvw 0 1.5dvw 0";
            }else if (window.innerWidth > 650){
                button_anchors_container.style.padding = "2.5dvw 0 2.5dvw 0";
            }
            else{
                button_anchors_container.style.padding = "8dvw 0 8dvw 0";
            }
            button_anchors_container.style.overflowY = "scroll";
        }
        else
        {
            button.setAttribute("data-expandedStatus","false");
            const button_anchors_container = button.querySelector(".header_003_navigation_container_button_anchors_container");
            const dropdown_button = button.querySelector(".header_003_navigation_container_button_dropdown_button");
            dropdown_button.style.transform = "rotate(0deg)";
            button_anchors_container.style.height = "0px";
            button_anchors_container.style.padding = "0";
            button_anchors_container.style.overflowY = "hidden";
        }
    });
}