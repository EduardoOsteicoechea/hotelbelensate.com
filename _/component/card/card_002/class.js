import create_signature_image_container from "./signature_image_container.js";

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

		async function fetchDataAndPopulateContainer() 
		{
			const response = await fetch(component_folder + "read_image_folder.php", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `folder_path=${component_id}`,
			});
		
			const data = await response.json();
		
			const desktopImages = Object.entries(data)[0][1]["desktop"];
			const mobileImages = Object.entries(data)[0][1]["mobile"];
		  
			component_container.innerHTML = await create_signature_image_container(
				root_folder,
				component_folder,
				sesion_array,
				page_name,
				component_id,
				component_class,
				component_image_folder_path,
				component_container,
				desktopImages
			);
		};
		  
		fetchDataAndPopulateContainer();
	}
}