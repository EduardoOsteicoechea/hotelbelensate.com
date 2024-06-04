// called from at rendering time from "../../../../carga_de_imagenes/index.php" => but parameterized at development time from "./class.php"


export default class
{
	constructor
	(
		root_folder, 
		component_folder,
		sesion_array,
		page_name,
		component_id,
		component_class,
		component_image_folder_path,
	)
	{
		const component_container = document.getElementById(component_id + "_" + component_class);
		add_component_style_tag(
			root_folder + "_/component/grid/grid_001/",
			"component_container"
		);

		let component_image_content_object = {};
		var xhr = new XMLHttpRequest();
		xhr.open("POST",component_folder + "read_image_folder.php", false);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() 
		{
			if (this.readyState === 4 && this.status === 200) {
				component_image_content_object = JSON.parse(this.responseText);
			}
		};
		xhr.send("folder_path="+component_id);
		console.log(component_image_content_object);

		const desktop_images_names_array = Object.entries(component_image_content_object)[0][1]["desktop"];
		const mobile_images_names_array = Object.entries(component_image_content_object)[0][1]["mobile"];
		console.log(desktop_images_names_array);
		console.log(mobile_images_names_array);

		// component_container.appendChild(
		// 	create_image_container(
		// 		root_folder, 
		// 		component_folder,
		// 		sesion_array,
		// 		page_name,
		// 		component_id,
		// 		component_class,
		// 		component_image_folder_path,
		// 		component_container,
		// 	)
		// );
	}
}