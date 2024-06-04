// Called from "./form.js";

export default class 
{
	activate_deactivate_according_to_input (
		component_image_content_object,
		form_desktop_image_elements_name_input, 
		form_desktop_image_elements_image_input,
		form_desktop_image_elements_error_paragraph,
		form_mobile_image_elements_name_input,
		form_mobile_image_elements_image_input,
		form_mobile_image_elements_error_paragraph,
		form_submit_button,
	) 
	{
		
		const desktop_enabled_images_names_array = component_image_content_object["enabled"]["desktop"];
		const mobile_enabled_images_names_array = component_image_content_object["enabled"]["mobile"];
		const desktop_disabled_images_names_array = component_image_content_object["disabled"]["desktop"];
		const mobile_disabled_images_names_array = component_image_content_object["disabled"]["mobile"];

		// console.log(desktop_enabled_images_names_array)
		// console.log(mobile_enabled_images_names_array)
		// console.log(desktop_disabled_images_names_array)
		// console.log(mobile_disabled_images_names_array)

		const forbidden_strings = ["<",">","/","\\",";",":","(",")","[","]","{","}","$","%","#","\"","'","!","|","=","?","¿"];
		const allowed_extensions = ["png","PNG","webp","WEBP","jpg","JPG","jpeg","JPEG",];

		const error_message = "El nombre provisto tiene alguno de estos errores: Ya existe en la base de datos, es idéntico al de la otra imagen cargada, está vacío, contiene caracteres incorrectos, o carece de una extensión valida";

		form_desktop_image_elements_name_input.addEventListener("input",()=>{
			form_desktop_image_elements_image_input.value = null;
			form_mobile_image_elements_name_input.value = "";
			form_mobile_image_elements_image_input.files = null;
			form_submit_button.classList.add("disabled");

			form_desktop_image_elements_name_input.value = form_desktop_image_elements_name_input.value.toLowerCase();
			let contains_forbidden_character = false;
			for (let index = 0; index < form_desktop_image_elements_name_input.value.length; index++) {
				const character = form_desktop_image_elements_name_input.value[index];
				if(forbidden_strings.includes(character)){
					contains_forbidden_character = true;
				};
			};
			const image_name_extension = form_desktop_image_elements_name_input.value.split(".")[1];
			let has_valid_extension = false;
			if(allowed_extensions.includes(image_name_extension)){
				has_valid_extension = true;
			};
			if(
				!contains_forbidden_character
				&&
				has_valid_extension
				&&
				form_desktop_image_elements_name_input.value != ""
				&&
				!desktop_enabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
				&&
				!mobile_enabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
				&&
				!desktop_disabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
				&&
				!mobile_disabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
			){
				form_desktop_image_elements_image_input.disabled = false;
				form_desktop_image_elements_error_paragraph.style.display = "none";
			}else{
				form_desktop_image_elements_image_input.disabled = true;
				form_desktop_image_elements_error_paragraph.style.display = "block";
				form_desktop_image_elements_error_paragraph.innerHTML = error_message;
			}
		});

		
		form_desktop_image_elements_image_input.addEventListener("change",()=>{
			form_mobile_image_elements_name_input.value = "";
			form_mobile_image_elements_image_input.value = null;
			form_submit_button.classList.add("disabled");

			let input_value = "";
			let image_name = "";
			let image_object = {};
			if (
				form_desktop_image_elements_image_input.files[0]
				&&
				form_desktop_image_elements_image_input.files[0].type.split("/")[0] == "image"
			) {
				input_value = form_desktop_image_elements_image_input.files[0];
				image_object = input_value;
				image_name = image_object.name;
				if(
					form_desktop_image_elements_name_input.value != ""
					&&
					!desktop_enabled_images_names_array.includes(input_value)
					&&
					!mobile_enabled_images_names_array.includes(input_value)
					&&
					!desktop_disabled_images_names_array.includes(input_value)
					&&
					!mobile_disabled_images_names_array.includes(input_value)
					&&
					image_name.value != ""
				){
					// console.log(image_object);
					form_mobile_image_elements_name_input.disabled = false;
				}else{
					form_mobile_image_elements_name_input.disabled = true;
					form_desktop_image_elements_error_paragraph.style.display = "block";
					form_desktop_image_elements_error_paragraph.innerHTML = error_message;
				}
		  	}else{
				form_mobile_image_elements_name_input.disabled = true;
				form_desktop_image_elements_error_paragraph.style.display = "block";
				form_desktop_image_elements_error_paragraph.innerHTML = error_message;
			};
		});

		
		form_mobile_image_elements_name_input.addEventListener("input",()=>{
			form_mobile_image_elements_image_input.value = null;
			form_submit_button.classList.add("disabled");
			form_mobile_image_elements_error_paragraph.style.display = "flex";
			form_mobile_image_elements_error_paragraph.innerHTML = error_message;

			form_mobile_image_elements_name_input.value = form_mobile_image_elements_name_input.value.toLowerCase();
			let contains_forbidden_character = false;
			for (let index = 0; index < form_mobile_image_elements_name_input.value.length; index++) {
				const character = form_mobile_image_elements_name_input.value[index];
				if(forbidden_strings.includes(character)){
					contains_forbidden_character = true;
				};
			};
			const image_name_extension = form_mobile_image_elements_name_input.value.split(".")[1];
			let has_valid_extension = false;
			if(allowed_extensions.includes(image_name_extension)){
				has_valid_extension = true;
			};
			if(
				!contains_forbidden_character
				&&
				has_valid_extension
				&&
				form_desktop_image_elements_name_input.value != ""
				&&
				!desktop_enabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
				&&
				!mobile_enabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
				&&
				!desktop_disabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
				&&
				!mobile_disabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
				&&
				form_desktop_image_elements_image_input.value != ""
				&&
				form_mobile_image_elements_name_input.value != ""
				&&
				!desktop_enabled_images_names_array.includes(form_mobile_image_elements_name_input.value)
				&&
				!mobile_enabled_images_names_array.includes(form_mobile_image_elements_name_input.value)
				&&
				!desktop_disabled_images_names_array.includes(form_mobile_image_elements_name_input.value)
				&&
				!mobile_disabled_images_names_array.includes(form_mobile_image_elements_name_input.value)
				&&
				form_mobile_image_elements_name_input.value !== form_desktop_image_elements_name_input.value
			){
				form_mobile_image_elements_image_input.disabled = false;
				form_mobile_image_elements_error_paragraph.style.display = "none";
			}else{
				form_mobile_image_elements_image_input.disabled = true;
				form_mobile_image_elements_error_paragraph.style.display = "flex";
				form_mobile_image_elements_error_paragraph.innerHTML = error_message;
			}
		});

		
		form_mobile_image_elements_image_input.addEventListener("change",()=>{
			form_submit_button.classList.add("disabled");
			form_mobile_image_elements_error_paragraph.style.display = "flex";
			form_mobile_image_elements_error_paragraph.innerHTML = error_message;

			let input_value = "";
			let image_name = "";
			let image_object = {};
			if (
				form_mobile_image_elements_image_input.files[0]
				&&
				form_mobile_image_elements_image_input.files[0].type.split("/")[0] == "image"
			) {
				input_value = form_mobile_image_elements_image_input.files[0];
				image_object = input_value;
				image_name = image_object.name;
				if(
					form_desktop_image_elements_name_input.value != ""
					&&
					!desktop_enabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
					&&
					!mobile_enabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
					&&
					!desktop_disabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
					&&
					!mobile_disabled_images_names_array.includes(form_desktop_image_elements_name_input.value)
					&&
					form_desktop_image_elements_image_input.value != ""
					&&
					form_mobile_image_elements_name_input.value != ""
					&&
					!desktop_enabled_images_names_array.includes(form_mobile_image_elements_name_input.value)
					&&
					!mobile_enabled_images_names_array.includes(form_mobile_image_elements_name_input.value)
					&&
					!desktop_disabled_images_names_array.includes(form_mobile_image_elements_name_input.value)
					&&
					!mobile_disabled_images_names_array.includes(form_mobile_image_elements_name_input.value)
					&&
					form_mobile_image_elements_image_input.value != ""
					&&
					image_name != form_desktop_image_elements_name_input.value
					// &&
					// image_name != form_desktop_image_elements_image_input.files[0].name
				) {
					// console.log(image_object);
					form_submit_button.classList.remove("disabled");
					form_mobile_image_elements_error_paragraph.style.display = "none";
				} else {
					form_submit_button.classList.add("disabled");
					form_mobile_image_elements_error_paragraph.style.display = "flex";
					form_mobile_image_elements_error_paragraph.innerHTML = error_message;
				};
			} else {
				form_submit_button.classList.add("disabled");
				form_mobile_image_elements_error_paragraph.style.display = "flex";
				form_mobile_image_elements_error_paragraph.innerHTML = error_message;
			};
		});
		
	}
}