export default function 
(
	root_folder,
	sesion_array,
	page_name,
	component_name
)
{
	const component_structure = {
		"header_001":{ 
			"logo_anchor":[ "image" ],// This
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

	const logo_anchor = document.createElement("a");
	logo_anchor.id = 

	const image = document.createElement("img");
	logo_anchor.appendChild(image);

	return logo_anchor;
}