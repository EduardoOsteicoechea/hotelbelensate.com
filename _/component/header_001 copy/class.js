import logo from "./logo.js";
import menu_button from "./menu_button.js";
import navigation from "./navigation.js";
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
		const component_structure = {
			"header_001":{
				"logo_anchor":[ "image" ],
				"menu_button":[ "bar_1", "bar_2", "bar_3" ]
			},
			"navigation":{
				"close_button":[ "x_letter_bar_1", "x_letter_bar_2" ],
				"link_list":{
					"inicio":root_folder + "inicio",
					"habitaciones":root_folder + "habitaciones",
					"restaurantes":root_folder + "restaurantes",
					"galería":root_folder + "galeria",
					"contacto":root_folder + "contacto"
				}
			}
		};

		const header_001 = document.createElement("div");
		header_001.id = page_name + "_" + component_name;
		header_001.className = component_name;
		const header_001_style = `display:flex; flex-direction:column; gap:1rem; background:red; height:100px;`;
		header_001.setAttribute("style",header_001_style);

		header_001.appendChild(
				logo(
				root_folder,
				sesion_array,
				page_name,
				component_name
			)
		);

		header_001.appendChild(
				menu_button(
				root_folder,
				sesion_array,
				page_name,
				component_name
			)
		);
		document.body.appendChild(header_001);
		
		document.body.appendChild(
			navigation(
				root_folder,
				sesion_array,
				page_name,
				component_name
			)
		);
	};
}