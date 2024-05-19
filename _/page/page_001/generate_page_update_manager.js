// called from "./update_manager.php"
export default class 
{
	constructor
	(
		component_objects_array
	)
	{
		const update_manager_container = document.createElement("div");
		update_manager_container.id = "update_manager_container";
		update_manager_container.style.display = "none";

		for (let index = 0; index < component_objects_array.length; index++) 
		{
			const element = component_objects_array[index];
			
			const element_container = document.createElement("div");
			element_container.id = element["component_name"];

			const element_name = document.createElement("span");
			element_name.innerHTML = element["component_name"]; 

			const element_must_uptade = document.createElement("span");
			element_must_uptade.innerHTML = element["must_update"]; 

			element_container.appendChild(element_name);
			element_container.appendChild(element_must_uptade);

			update_manager_container.appendChild(element_container);
		};

		document.body.appendChild(update_manager_container);
	}
}
