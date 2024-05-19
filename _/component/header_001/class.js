export default class
{
	constructor
	(
		root_folder,
		sesion_array,
		page_name,
		component_name,
	)
	{
		const header_001 = document.createElement("div");
		header_001.innerHTML = "Hello! " + component_name;
		document.body.appendChild(header_001)
	};
}