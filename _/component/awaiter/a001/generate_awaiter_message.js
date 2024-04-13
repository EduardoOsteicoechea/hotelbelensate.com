// called from "./a001_class.js";

export default function generate_awaiter_message(
	outer_container,
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	awaiter_message,
){
	const background_message = document.createElement("div");
	background_message.id = component_id + "_" + "background_message";
	background_message.classList.add(component_class + "_" + "background_message");
	
	const background_message_h2 = document.createElement("h2");
	background_message_h2.innerHTML = "Hotel Belensate";
	background_message_h2.id = component_id + "_" + "background_message_h2";
	background_message_h2.classList.add(component_class + "_" + "background_message_h2");
	background_message.appendChild(background_message_h2);
	
	const background_message_h1 = document.createElement("h1");
	background_message_h1.innerHTML = awaiter_message;
	background_message_h1.id = component_id + "_" + "background_message_h1";
	background_message_h1.classList.add(component_class + "_" + "background_message_h1");
	background_message.appendChild(background_message_h1);
	
	const background_message_contenedor_de_barra_de_carga = document.createElement("div");
	background_message_contenedor_de_barra_de_carga.id = component_id + "_" + "background_message_contenedor_de_barra_de_carga";
	background_message_contenedor_de_barra_de_carga.classList.add(component_class + "_" + "background_message_contenedor_de_barra_de_carga");
	background_message.appendChild(background_message_contenedor_de_barra_de_carga);
	
	const background_message_barra_de_carga = document.createElement("div");
	background_message_barra_de_carga.id = component_id + "_" + "background_message_barra_de_carga";
	background_message_barra_de_carga.classList.add(component_class + "_" + "background_message_barra_de_carga");
	background_message_contenedor_de_barra_de_carga.appendChild(background_message_barra_de_carga);

	background_message.style.opacity = "0";
	setTimeout(() => {
		background_message.style.opacity = "1";
		background_message_barra_de_carga.style.width = "95%"
	}, 100);
	setTimeout(() => {
		background_message.style.opacity = "0";
		background_message_barra_de_carga.style.width = "100%"
	}, 4000);

	outer_container.appendChild(background_message);


	apply_styles(
		background_message, {
			display:"flex",
			flexDirection:"column",
			justifyContent:"center",
			alignItems:"center",
			opacity: "0",
			transition: "opacity ease 2000ms",
			width:"100%",
			marginTop:"-4dvw",
			color:"#000",
		},{
			display:"flex",
			flexDirection:"column",
			justifyContent:"center",
			alignItems:"center",
			opacity: "0",
			transition: "opacity ease 2000ms",
			width:"100%",
			color:"#000",
		},{
			display:"flex",
			flexDirection:"column",
			justifyContent:"center",
			alignItems:"center",
			opacity: "0",
			transition: "opacity ease 2000ms",
			width:"100%",
			color:"#000",
		}
	);
	apply_styles(
		background_message_h2, {
			fontWeight:"900",
			fontSize:"1.2dvw",
			marginBottom:"1.75dvw",
			color:"#ccc",
			letterSpacing:".8dvw"
		},{
			fontWeight:"100",
			fontSize:"2dvw",
			marginBottom:"3dvw",
			color:"#ccc",
			letterSpacing:".8dvw" 
		},{
			fontWeight:"100",
			fontSize:"3dvw",
			marginBottom:"6dvw",
			color:"#ccc",
			letterSpacing:"2dvw" 
		}
	);
	apply_styles(
		background_message_h1, {
			fontWeight:"900",
			fontSize:".9dvw",
			marginBottom:"2.5dvw",
			letterSpacing:".6dvw",
			color:"#000"
		},{
			fontWeight:"900",
			fontSize:"2dvw",
			marginBottom:"4dvw",
			letterSpacing:"1.2dvw",
			color:"#000"
		},{
			fontWeight:"900",
			fontSize:"3dvw",
			marginBottom:"11dvw",
			letterSpacing:"1.6dvw",
			color:"#000"
		}
	);
	apply_styles(
		background_message_contenedor_de_barra_de_carga, {
			width:"25%",
			height:".15dvw",
			background:"#ccc",
		},{
			width:"40%",
			height:".25dvw",
			background:"#ccc",
		},{
			width:"40%",
			height:".4dvw",
			background:"#ccc",
			borderRadius:"5dvw",
			overflow:"hidden",
		}
	);
	apply_styles(
		background_message_barra_de_carga, {
			width:"0%",
			height:"100%",
			background:"#000",
			transition:"width ease 4000ms"
		},{
			width:"0%",
			height:"100%",
			background:"#000",
			transition:"width ease 4000ms"
		},{
			width:"0%",
			height:"100%",
			background:"#000",
			transition:"width ease 4000ms"
		}
	);
}