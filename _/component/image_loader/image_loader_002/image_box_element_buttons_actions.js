// Called from "./image_box_element_buttons.js";

import create_image_box from "./image_box.js";

export default class 
{
	display_tooltip (button, tooltip) 
	{
		button.addEventListener("pointerenter",()=>{
			tooltip.style.height = "fit-content";
			tooltip.style.padding = ".5rem .5rem";
		});
		
		button.addEventListener("pointerleave", ()=>{
			tooltip.style.height = "0px";
			tooltip.style.padding = ".0rem .5rem";
		});
	}

	enable_image(
		root_folder, 
		component_folder,
		sesion_array,
		page_name,
		component_id,
		component_class,
		component_image_content_object,
		component_container, 
		enabled_or_disabled,
		button,
		desktop_image_name,
		mobile_image_name,
	)
	{
		button.addEventListener("pointerup",()=>{var xhr = new XMLHttpRequest();
			xhr.open('POST', component_folder + 'image_enable.php', true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.onload = function () {
				 if (xhr.status === 200) {
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
							document.getElementById(component_id + "_" + component_class)
						)
					);
				 } else {
					  console.error("An error occurred during the transaction");
				 }
			};
			xhr.send("component_name="+component_id+"&desktop_image_name="+enabled_or_disabled+"/desktop/"+desktop_image_name+"&mobile_image_name="+enabled_or_disabled+"/mobile/"+mobile_image_name);
		});
	}

	disable_image(
		root_folder, 
		component_folder,
		sesion_array,
		page_name,
		component_id,
		component_class,
		component_image_content_object,
		component_container, 
		enabled_or_disabled,
		button,
		desktop_image_name,
		mobile_image_name,
	)
	{
		button.addEventListener("pointerup",()=>{var xhr = new XMLHttpRequest();
			xhr.open('POST', component_folder + 'image_disable.php', true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.onload = function () {
				 if (xhr.status === 200) {
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
							document.getElementById(component_id + "_" + component_class)
						)
					);
					console.log(this.responseText);
				 } else {
					  console.error("An error occurred during the transaction");
				 }
			};
			xhr.send("component_name="+component_id+"&desktop_image_name="+enabled_or_disabled+"/desktop/"+desktop_image_name+"&mobile_image_name="+enabled_or_disabled+"/mobile/"+mobile_image_name);
		});
	}

	delete_image(
		root_folder, 
		component_folder,
		sesion_array,
		page_name,
		component_id,
		component_class,
		component_image_content_object,
		component_container, 
		enabled_or_disabled,
		button,
		desktop_image_name,
		mobile_image_name,
	)
	{
		button.addEventListener("pointerup",()=>{var xhr = new XMLHttpRequest();
			xhr.open('POST', component_folder + 'image_delete.php', true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.onload = function () {
				 if (xhr.status === 200) {
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
							document.getElementById(component_id + "_" + component_class)
						)
					);
					console.log(this.responseText);
				 } else {
					  console.error("An error occurred during the transaction");
				 }
			};
			xhr.send("component_name="+component_id+"&desktop_image_name="+enabled_or_disabled+"/desktop/"+desktop_image_name+"&mobile_image_name="+enabled_or_disabled+"/mobile/"+mobile_image_name);
		});
	}
}