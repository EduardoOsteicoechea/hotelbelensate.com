// Called from "./form.js";

import create_image_box from "./image_box.js";

export default class 
{
	send_data (
		root_folder, 
		component_folder,
		sesion_array,
		page_name,
		component_id,
		component_class,
		component_image_content_object,
		component_container,
		form, 
		form_desktop_image_elements_name_input, 
		form_desktop_image_elements_image_input,
		form_mobile_image_elements_name_input,
		form_mobile_image_elements_image_input,
		form_submit_button,
	) 
	{
		form_submit_button.addEventListener('pointerup', ()=> {
			var formData = new FormData(form);
			formData.append("folder_path",component_id);
			// console.log(formData);
			var xhr = new XMLHttpRequest();
			xhr.open('POST', component_folder + 'form_process_data.php', true);
			xhr.onload = function () {
				 if (xhr.status === 200) {
					  console.log(xhr.responseText);
					  document.getElementById(component_id + "_" + component_class).innerHTML = "";
					  
					  document.getElementById(component_id + "_" + component_class).appendChild(
						create_image_box(
							root_folder, 
							component_folder,
							sesion_array,
							page_name,
							component_id,
							component_class,
							component_image_content_object,
							component_container
						)
					);
				 } else {
					  console.error("An error occurred during the transaction");
				 }
			};
			xhr.send(formData);
	  });
	}
}