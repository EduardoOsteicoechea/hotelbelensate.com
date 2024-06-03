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
		h2_string,
		p_string,
	)
	{
		const component_container = document.getElementById(component_id + "_" + component_class);
		add_component_style_tag(
			root_folder + "_/component/heading/heading_001/",
			"component_container"
		);

		const heading_h2 = document.createElement("h2");
		heading_h2.id = component_id + "_" + component_class + "_" + "heading_h2";
		heading_h2.classList.add(component_class + "_" + "heading_h2");
		heading_h2.innerHTML = h2_string;
		
		const heading_p = document.createElement("p");
		heading_p.id = component_id + "_" + component_class + "_" + "heading_p";
		heading_p.classList.add(component_class + "_" + "heading_p");
		heading_p.innerHTML = p_string;

		component_container.appendChild(heading_h2);
		component_container.appendChild(heading_p);
	}
}