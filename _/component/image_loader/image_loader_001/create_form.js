//Called from ./image_loader_001.js
export default function
(
	root_folder,
	component_id,
	component_class,
	component_folder,
	sesion_array,initial_container
){
	const form = document.createElement("form");
	form.id = component_id + "_" + "form";
	form.className = component_class + "_" + "form";
	form.setAttribute("action", component_folder + "backend/process_image_data.php");
	form.setAttribute("method","post");
	form.setAttribute("enctype","multipart/form-data");
	initial_container.appendChild(form); 
	add_component_style_tag( component_folder, "form");

	const form_landscape_image_label = document.createElement("label");
	form_landscape_image_label.id = component_id + "_" + "form_landscape_image_label";
	form_landscape_image_label.className = component_class + "_" + "form_landscape_image_label";
	form_landscape_image_label.innerHTML = "Cargue aquí una imagen de 3840px de ancho por 2160px de alto de extensión .jpg o .webp";
	form.appendChild(form_landscape_image_label);
	
	const form_landscape_image_input = document.createElement("input");
	form_landscape_image_input.id = component_id + "_" + "form_landscape_image_input";
	form_landscape_image_input.className = component_class + "_" + "form_landscape_image_input";
	form_landscape_image_input.setAttribute("type","file");
	form_landscape_image_input.setAttribute("name","form_landscape_image_input");
	form.appendChild(form_landscape_image_input);
	
	const form_vertical_image_label = document.createElement("label");
	form_vertical_image_label.id = component_id + "_" + "form_vertical_image_label";
	form_vertical_image_label.className = component_class + "_" + "form_vertical_image_label";
	form_vertical_image_label.innerHTML = "Cargue aquí una imagen de 1080px de ancho por 1920px de alto de extensión .jpg o .webp";
	form.appendChild(form_vertical_image_label);

	const form_vertical_image_input = document.createElement("input");
	form_vertical_image_input.id = component_id + "_" + "form_vertical_image_input";
	form_vertical_image_input.className = component_class + "_" + "form_vertical_image_input";
	form_vertical_image_input.setAttribute("type","file");
	form_vertical_image_input.setAttribute("name","form_vertical_image_input");
	form.appendChild(form_vertical_image_input);

	const form_submit = document.createElement("input");
	form_submit.id = component_id + "_" + "form_submit";
	form_submit.className = component_class + "_" + "form_submit";
	form_submit.setAttribute("type","submit");
	form_submit.setAttribute("name","form_submit");
	form.appendChild(form_submit);
	}