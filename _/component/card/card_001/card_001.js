// Called from ../d002.php

import whatsapp_contact_card from "./whatsapp_contact_card.js";
import pop_up_info_contact_card from "./pop_up_info_contact_card.js";

export default class component 
{
	constructor
	(
		root_folder,
		component_id,
		component_class,
		component_folder,
		component_type,
		sesion_array,
		data,
	) 
	{
		this.root_folder =       root_folder;
		this.component_id =      component_id;
		this.component_class =   component_class;
		this.component_folder =  component_folder;
		this.component_type =    component_type;
		this.sesion_array =      sesion_array;
		this.data =              data;

		console.log(this.data)

		this.component_container = document.getElementById(this.component_id);
		add_component_style_tag( component_folder, this.component_class );

		whatsapp_contact_card ( 
			this.root_folder,
			this.component_id,
			this.component_class,
			this.component_folder,
			this.component_type,
			this.sesion_array,
			this.data,
			this.component_container,
			"_/media/image/contact/contact_2_1080x1080.jpg",
			"Foto de Tracy Le Blanc: https://www.pexels.com/es-es/foto/persona-sosteniendo-iphone-mostrando-carpeta-de-redes-sociales-607812/",
			"WhatsApp",
			"¿Necesitas información o quieres reservar? ¡Contacta con nosotros a través de WhatsApp! Nuestro equipo estará encantado de atenderte.",
			"Presiona el siguiente botón para iniciar un chat y serás atendido por nuestro personal de confianza",
			"Iniciar chat",
		);

		pop_up_info_contact_card( 
			this.root_folder,
			this.component_id,
			this.component_class,
			this.component_folder,
			this.component_type,
			this.sesion_array,
			this.data,
			this.component_container,
			"_/media/image/contact/contact_3_1080x1080.jpg",
			"Foto de Michael Wysmierski: https://www.pexels.com/es-es/foto/mujer-sonriente-recepcionista-atencion-al-cliente-6535381/",
			"Reservaciones",
			"¿Quieres reservar nuestros servicios a través de una llamada telefónica? ¡Es muy fácil! Contacta con nosotros y nuestro equipo te ayudará con todo el proceso.",
			"Presiona el siguiente botón para obtener esta línea telefónica.",
			"Obtener número",
			"+5802742440000",
		);

		pop_up_info_contact_card( 
			this.root_folder,
			this.component_id,
			this.component_class,
			this.component_folder,
			this.component_type,
			this.sesion_array,
			this.data,
			this.component_container,
			"_/media/image/contact/contact_1_1080x1080.jpg",
			"Foto de Pixabay: https://www.pexels.com/es-es/foto/mesas-largas-con-manteles-blancos-y-sillas-marrones-ambiente-formal-50675/",
			"Eventos",
			"¿Deseas saber más sobre nuestros eventos o reservar tu entrada? ¡Contacta con nosotros a través de una llamada! Nuestro equipo te dará toda la información que necesitas.",
			"Presiona el siguiente botón para obtener esta línea telefónica.",
			"Obtener número",
			"+5802742441111",
		);
	};
};