//Called from ./image_loader_001.js
export default function
(
	root_folder,
	component_id,
	component_class,
	component_folder,
	sesion_array,initial_container
){
		const heading_elements_container = document.createElement("div");
		heading_elements_container.id = component_id + "_" + "heading_elements_container";
		heading_elements_container.className = component_class + "_" + "heading_elements_container";
		initial_container.appendChild(heading_elements_container); 
		add_component_style_tag( component_folder, "heading_elements_container");

		const heading_elements_container_h2 = document.createElement("h2");
		heading_elements_container_h2.id = component_id + "_" + "heading_elements_container_h2";
		heading_elements_container_h2.className = component_class + "_" + "heading_elements_container_h2";
		heading_elements_container_h2.innerHTML = "Carga de Imagenes";
		heading_elements_container.appendChild(heading_elements_container_h2); 
	
		const heading_elements_container_p = document.createElement("p");
		heading_elements_container_p.id = component_id + "_" + "heading_elements_container_p";
		heading_elements_container_p.className = component_class + "_" + "heading_elements_container_p";
		heading_elements_container_p.innerHTML = "Presione el boton de cargar archivo y seleccione sus imagenes";
		heading_elements_container.appendChild(heading_elements_container_p); 
}