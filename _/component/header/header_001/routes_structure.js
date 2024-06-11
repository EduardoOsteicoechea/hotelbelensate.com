// called from "./header_navigation.js";

export default function 
(
	root_folder
)
{
	let public_routes_structure_object = {
		"inicio":
		{
			"id_string": "inicio", 
			"string_to_print": "inicio", 
			"href_string": root_folder + "inicio", 
			"sub_routes_object":null,
			"is_visible_boolean":true
		},
		"hospedaje":
		{
			"id_string": "hospedaje", 
			"string_to_print": "hospedaje", 
			"href_string": root_folder + "hospedaje", 
			"sub_routes_object":
			{
				"habitaciones":
				{
					"id_string": "habitaciones", 
					"string_to_print": "habitaciones", 
					"href_string": root_folder + "hospedaje/habitaciones", 
					"sub_routes_object":null,
					"is_visible_boolean":true
				},
				"reservaciones":
				{
					"id_string": "reservaciones", 
					"string_to_print": "reservaciones", 
					"href_string": root_folder + "hospedaje/reservaciones", 
					"sub_routes_object":null,
					"is_visible_boolean":true
				},
			},
			"is_visible_boolean":true
		},
		"gastronomia":
		{
			"id_string": "gastronomia", 
			"string_to_print": "Gastronomía", 
			"href_string": root_folder + "gastronomia", 
			"sub_routes_object":{
				"la_era":{
					"id_string": "la_era", 
					"string_to_print": "La Era", 
					"href_string": root_folder + "restaurants/la_era", 
					"sub_routes_object":null,
					"is_visible_boolean":true
				},
				"ill_forno":{
					"id_string": "ill_forno", 
					"string_to_print": "Ill Forno", 
					"href_string": root_folder + "restaurants/ill_forno", 
					"sub_routes_object":null,
					"is_visible_boolean":true
				},
			},
			"is_visible_boolean":false
		},
		"servicios":
		{
			"id_string": "servicios", 
			"string_to_print": "servicios", 
			"href_string": root_folder + "servicios", 
			"sub_routes_object":
			{
				"hospedaje":
				{
					"id_string": "hospedaje", 
					"string_to_print": "hospedaje", 
					"href_string": root_folder + "hospedaje", 
					"sub_routes_object":
					{
						"habitaciones":
						{
							"id_string": "habitaciones", 
							"string_to_print": "habitaciones", 
							"href_string": root_folder + "hospedaje/habitaciones", 
							"sub_routes_object":null,
							"is_visible_boolean":true
						},
						"reservaciones":
						{
							"id_string": "reservaciones", 
							"string_to_print": "reservaciones", 
							"href_string": root_folder + "hospedaje/reservaciones", 
							"sub_routes_object":null,
							"is_visible_boolean":true
						},
					},
					"is_visible_boolean":true
				},
				"restaurants":
				{
					"id_string": "restaurants", 
					"string_to_print": "restaurants", 
					"href_string": root_folder + "restaurants", 
					"sub_routes_object":{
						"la_era":{
							"id_string": "la_era", 
							"string_to_print": "La Era", 
							"href_string": root_folder + "restaurants/la_era", 
							"sub_routes_object":null,
							"is_visible_boolean":true
						},
						"ill_forno":{
							"id_string": "ill_forno", 
							"string_to_print": "Ill Forno", 
							"href_string": root_folder + "restaurants/ill_forno", 
							"sub_routes_object":null,
							"is_visible_boolean":true
						},
					},
					"is_visible_boolean":false
				},
				"galeria":
				{
					"id_string": "galeria", 
					"string_to_print": "galería", 
					"href_string": root_folder + "galeria", 
					"sub_routes_object":null,
					"is_visible_boolean":true
				},
				"eventos":{
					"id_string": "eventos", 
					"string_to_print": "eventos", 
					"href_string": root_folder + "contacto", 
					"sub_routes_object":null,
					"is_visible_boolean":true
				},
				"turismo":{
					"id_string": "turismo", 
					"string_to_print": "turismo", 
					"href_string": root_folder + "turismo", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
				"tienda_de_souvenirs":{
					"id_string": "tienda_de_souvenirs", 
					"string_to_print": "Tienda de souvenirs", 
					"href_string": root_folder + "tienda_de_souvenirs", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
				"tienda_de_arte":{
					"id_string": "tienda_de_arte", 
					"string_to_print": "Tienda de arte", 
					"href_string": root_folder + "tienda_de_arte", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
				"areas_comunes":
				{
					"id_string": "areas_comunes", 
					"string_to_print": "Áreas comunes", 
					"href_string": root_folder + "areas_comunes", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
			},
			"is_visible_boolean":true
		},
		"recorrido":
		{
			"id_string": "recorrido", 
			"string_to_print": "recorrido", 
			"href_string": root_folder + "recorrido", 
			"sub_routes_object":
			{
				"habitaciones":
				{
					"id_string": "habitaciones", 
					"string_to_print": "habitaciones", 
					"href_string": root_folder + "servicios/hospedaje/habitaciones", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
				"galeria":
				{
					"id_string": "galeria", 
					"string_to_print": "servicios/galería", 
					"href_string": root_folder + "servicios/galeria", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
				"areas_comunes":
				{
					"id_string": "areas_comunes", 
					"string_to_print": "áreas_comunes", 
					"href_string": root_folder + "areas_comunes", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
				"tienda_de_souvenirs":{
					"id_string": "tienda_de_souvenirs", 
					"string_to_print": "Tienda de souvenirs", 
					"href_string": root_folder + "tienda_de_souvenirs", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
				"tienda_de_arte":{
					"id_string": "tienda_de_arte", 
					"string_to_print": "Tienda de arte", 
					"href_string": root_folder + "tienda_de_arte", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
				"la_era":{
					"id_string": "la_era", 
					"string_to_print": "La Era", 
					"href_string": root_folder + "restaurants/la_era", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
				"ill_forno":{
					"id_string": "ill_forno", 
					"string_to_print": "Ill Forno", 
					"href_string": root_folder + "restaurants/ill_forno", 
					"sub_routes_object":null,
					"is_visible_boolean":false
				},
			},
			"is_visible_boolean":false
		},
		"contacto":
		{
			"id_string": "contacto", 
			"string_to_print": "contacto", 
			"href_string": root_folder + "contacto", 
			"sub_routes_object":{
				"recepcion":
				{
					"id_string": "recepcion", 
					"string_to_print": "recepción", 
					"href_string": root_folder + "contacto/recepcion", 
					"sub_routes_object":null,
					"is_visible_boolean":true
				},
				"eventos":
				{
					"id_string": "eventos", 
					"string_to_print": "eventos", 
					"href_string": root_folder + "contacto/eventos", 
					"sub_routes_object":null,
					"is_visible_boolean":true
				},
			},
			"is_visible_boolean":true
		},
	};

	return public_routes_structure_object
}