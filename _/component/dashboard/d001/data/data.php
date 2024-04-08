<?php
	// Called from ../d001.php
	$bed_king_description = "Cama King Size (200cm x 200cm).";
	$bed_queen_description = "Cama Queen Size (180cm x 200cm).";
	$bed_regular_description = "Cama matrimonial (150cm x 200cm).";
	$bed_regular_double_description = "Dos camas matrimoniales, espacio para una familia pequeña.";
	$bed_single_double_description = "Dos camas individuales de tamaño estándar.";
	$sauna_room_description = "Habitación de sauna para la relajación y bienestar.";
	$jacuzzi_description = "Bañera de hidromasaje con chorros de agua y aire.";
	$sofa_bed_description = "Mueble que puede funcionar como sofá durante y cama matrimonial.";
	$special_capabilities_service_description = "Baño acondicionado para personas con capacidades especiales y silla de ruedas.";
	$hair_dryer_description = "Secador de cabello integrado en habitación.";
	$desk_description = "Escritorio de trabajo integrado en habitación.";
	$microwave_description = "Equipo de microondas integrado en habitación.";
	$executive_fridge_description = "Nevera ejecutiva integrada en la habitación.";
	$safe_description = "Bóveda personal para proteger sus pertenencias.";
	$conditioned_air_description = "Acondicionador de aire integrado en la habitación.";
	$tv_description = "Televisor de pantalla plana.";
	$hot_water_description = "Agua acondicionada al gusto.";
	$wifi_description = "Internet de alta velocidad las 24 horas.";

	$capacity_2_adult = "Capacidad para dos adultos.";
	$capacity_2_adult_1_children = "Capacidad para dos adultos y un menor de 11 años.";
	$capacity_2_adult_2_children = "Capacidad para dos adultos y dos menores de 11 años.";
	$capacity_3_adult_1_children = "Capacidad para tres adultos y un menor de 11 años.";
	$capacity_3_adult = "Capacidad para tres adultos.";
	$capacity_3_adult_pax = "Cancelando PAX: Capacidad para tres adultos.";
	$capacity_4_adult = "Cancelando PAX: Capacidad para cuatro adultos.";
	$capacity_6_adult = "Capacidad para seis adultos.";

	$data = '

	"Suite Presidencial":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             ["presidencial_master_1_3840x2160.webp","presidencial_master_2_3840x2160.webp","presidencial_master_3_3840x2160.webp","presidencial_master_4_3840x2160.webp","presidencial_master_5_3840x2160.webp",],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "presidencial_master_1_960x540.webp",
		"cantidad disponible":  1,
		"precio por día":       215,
		"capacidad":[
			["3_adult_1_children.svg","'.$capacity_3_adult_1_children.'"],
			["4_adult.svg","'.$capacity_4_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      4,
		"capacidad adultos":    4,
		"capacidad niños":      3,
		"pax":                  15,
		"incluye":{
			"cama King size"            : [1,"bed_king.svg","'.$bed_king_description.'"],
			"cama King size 2"          : [1,"bed_king.svg","'.$bed_king_description.'"],
			"secador de cabello"        : [1,"hair_dryer.svg","'.$hair_dryer_description.'"],
			"escritorio"                : [1,"desk.svg","'.$desk_description.'"],
			
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción":["2 niveles", "2 habitaciones amplias con cama King size", "2 baños", "sala de estar", "escritorio", "wifi", "nevera ejecutiva", "microondas", "caja fuerte", "televisor con DirecTV", "nevera ejecutiva", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
	},




	"Suite Presidencial Junior":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"presidencial_junior_2_3840x2160.webp",
			"presidencial_junior_4_3840x2160.webp",
			"presidencial_junior_1_3840x2160.webp",
			"presidencial_junior_3_3840x2160.webp",
			"presidencial_junior_5_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "presidencial_junior_2s_960x540.webp",
		"cantidad disponible":  1,
		"precio por día":       185,
		"capacidad":[
			["3_adult_1_children.svg","'.$capacity_3_adult_1_children.'"],
			["4_adult.svg","'.$capacity_4_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      4,
		"capacidad adultos":    4,
		"capacidad niños":      3,
		"pax":                  15,
		"incluye":{
			"cama King size"            : [1,"bed_king.svg","'.$bed_king_description.'"],
			"cama matrimonial"          : [1,"bed_regular.svg","'.$bed_regular_description.'"],
			"cuarto de sauna"           : [1,"sauna_room.svg","'.$sauna_room_description.'"],
			"escritorio"                : [1,"desk.svg","'.$desk_description.'"],
			
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["habitación con cama King size", "habitación con cama matrimonial", "cuarto de sauna", "mini sala de estar", "escritorio", "2 habitaciones", " wifi", "televisor con DirecTV", "nevera ejecutiva", "caja fuerte", "aire acondicionado", "agua caliente", "no incluye desayuno", "no admite mascotas"]
	},




	"Cabaña":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"cabana_1_3840x2160.webp",
			"cabana_2_3840x2160.webp",
			"cabana_3_3840x2160.webp",
			"cabana_4_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "cabana_1_960x540.webp",
		"cantidad disponible":  7,
		"precio por día":       176.1,
		"capacidad":[
			["6_adult.svg","'.$capacity_6_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      6,
		"capacidad adultos":    6,
		"capacidad niños":      5,
		"pax":                  15,
		"incluye":{
			"cama matrimonial"          : [1,"bed_regular.svg","'.$bed_regular_description.'"],
			"cama matrimonial 2"        : [1,"bed_regular.svg","'.$bed_regular_description.'"],
			"dos camas individuales"    : [1,"bed_single_double.svg","'.$bed_single_double_description.'"],
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			"microondas"                : [0,"microwave.svg","'.$microwave_description.'"],
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["ubicada en el área colonial", "2 habitaciones con cama matrimonial", "1 habitación con 2 camas individuales", "2 baños", "wifi", "televisor con DirecTV", "mini sala de estar", "nevera ejecutiva y microondas", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
	},




	"Suite Ejecutiva":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"suite_ejecutiva_1_3840x2160.webp",
			"suite_ejecutiva_2_3840x2160.webp",
			"suite_ejecutiva_3_3840x2160.webp",
			"suite_ejecutiva_4_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "suite_ejecutiva_1_960x540.webp",
		"cantidad disponible":  2,
		"precio por día":       135,
		"capacidad":[
			["2_persons.svg","'.$capacity_2_adult.'"],
			["3_adult.svg","'.$capacity_3_adult_pax.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      2,
		"capacidad adultos":    2,
		"capacidad niños":      1,
		"pax":                  15,
		"incluye":{
			"cama King size"            : [1,"bed_king.svg","'.$bed_king_description.'"],
			"sofá cama"                 : [1,"sofa_bed.svg","'.$sofa_bed_description.'"],
			"secador de cabello"        : [1,"hair_dryer.svg","'.$hair_dryer_description.'"],
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			"escritorio"                : [1,"desk.svg","'.$desk_description.'"],
			
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["ubicada en el área ejecutiva", "cama King size", "habitación modernizada", "2 baños", "2 ambientes", "sala de estar", "escritorio", "sofá cama", "wifi", "televisor con DirecTV", "nevera ejecutiva", "caja fuerte", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
	},




	"Suite Nupcial":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"suite_nupcial_1_3840x2160.webp",
			"suite_nupcial_2_3840x2160.webp",
			"suite_nupcial_3_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "suite_nupcial_1_960x540.webp",
		"cantidad disponible":  1,
		"precio por día":       116,
		"capacidad":[
			["2_persons.svg","'.$capacity_2_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      2,
		"capacidad adultos":    2,
		"capacidad niños":      1,
		"pax":                  15,
		"incluye":{
			"cama King size"            : [1,"bed_king.svg","'.$bed_king_description.'"],
			"jacuzzi"                   : [1,"jacuzzi.svg","'.$jacuzzi_description.'"],
			"secador de cabello"        : [1,"hair_dryer.svg","'.$hair_dryer_description.'"],
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			"escritorio"                : [1,"desk.svg","'.$desk_description.'"],
			
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["ubicada en el área ejecutiva", "cama King size", "jacuzzi", "wifi", "televisor con DirecTV", "nevera ejecutiva", "secador de cabello", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
	},




	"Doble Deluxe":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"doble_deluxe_1_3840x2160.webp",
			"doble_deluxe_2_3840x2160.webp",
			"doble_deluxe_3_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "doble_deluxe_3_960x540.webp",
		"cantidad disponible":  29,
		"precio por día":       107.5,
		"capacidad":[
			["2_adult_2_children.svg","'.$capacity_2_adult_2_children.'"],
			["4_adult.svg","'.$capacity_4_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      4,
		"capacidad adultos":    3,
		"capacidad niños":      3,
		"pax":                  15,
		"incluye":{
			"dos camas matrimoniales"   : [1,"bed_regular_double.svg","'.$bed_regular_double_description.'"],
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			"escritorio"                : [1,"desk.svg","'.$desk_description.'"],
			
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["ubicada en el área ejecutiva", "2 camas matrimoniales en un mismo ambiente", "escritorio", "wifi", "nevera ejecutiva", "caja fuerte", "televisor con DirecTV", "secador de cabello", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
	},




	"Especial Deluxe":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"especial_deluxe_1_3840x2160.webp",
			"especial_deluxe_2_3840x2160.webp",
			"especial_deluxe_3_3840x2160.webp",
			"especial_deluxe_4_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "especial_deluxe_1_960x540.webp",
		"cantidad disponible":  4,
		"precio por día":       100,
		"capacidad":[
			["2_persons.svg","'.$capacity_2_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      2,
		"capacidad adultos":    2,
		"capacidad niños":      1,
		"pax":                  15,
		"incluye":{
			"cama Queen size"           : [1,"bed_queen.svg","'.$bed_queen_description.'"],
			"acondicionamiento para capacidades especiales" : [1,"special_capabilities_service.svg","'.$special_capabilities_service_description.'"],
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			"escritorio"                : [1,"desk.svg","'.$desk_description.'"],
			
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["ubicada en el área ejecutiva", "cama Queen size", "wifi", "televisor con DirecTV", "caja fuerte", "ducha de manos", "secador de cabello", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
	},





	"Matrimonial Ejecutiva":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"matrimonial_ejecutiva_1_3840x2160.webp",
			"matrimonial_ejecutiva_2_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "matrimonial_ejecutiva_2_960x540.webp",
		"cantidad disponible":  13,
		"precio por día":       92,
		"capacidad":[
			["2_persons.svg","'.$capacity_2_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      2,
		"capacidad adultos":    2,
		"capacidad niños":      1,
		"pax":                  15,
		"incluye":{
			"cama matrimonial"          : [1,"bed_regular.svg","'.$bed_regular_description.'"],
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["ubicada en el área ejecutiva", "cama matrimonial", "wifi", "nevera ejecutiva", "caja fuerte", "televisor con DirecTV", "secador de cabello", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
	},





	"Semi Suite":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"semi_suite_1_3840x2160.webp",
			"semi_suite_2_3840x2160.webp",
			"semi_suite_3_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "semi_suite_1_960x540.webp",
		"cantidad disponible":  6,
		"precio por día":       74.7,
		"capacidad":[
			["2_persons.svg","'.$capacity_2_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      2,
		"capacidad adultos":    2,
		"capacidad niños":      1,
		"pax":                  15,
		"incluye":{
			"cama matrimonial"          : [1,"bed_regular.svg","'.$bed_regular_description.'"],
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["ubicada en el área colonial", "cama matrimonial", "2 ambientes", "mini sala de estar", "wifi", "televisor con NetUno", "nevera ejecutiva", "aire acondicionado", "agua caliente", "no incluye desayuno", "no admite mascotas"]
	},






	"Doble Colonial":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"doble_colonial_1_3840x2160.webp",
			"doble_colonial_2_3840x2160.webp",
			"doble_colonial_3_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "doble_colonial_2_960x540.webp",
		"cantidad disponible":  19,
		"precio por día":       70.7,
		"capacidad":[
			["2_adult_2_children.svg","'.$capacity_2_adult_2_children.'"],
			["4_adult.svg","'.$capacity_4_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      4,
		"capacidad adultos":    3,
		"capacidad niños":      3,
		"pax":                  15,
		"incluye":{
			"dos camas matrimoniales"   : [1,"bed_regular_double.svg","'.$bed_regular_double_description.'"],
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["ubicada en el área colonial", "2 camas matrimoniales en un mismo ambiente", "wifi", "televisor con NetUno", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
	},







	"Matrimonial Colonial":{
		"fecha disponible inicial":"03-15-2024",
		"fecha disponible final":"05-15-2024",
		"fechas reservadas":{
			"fecha reservada 1":{
				"llegada" : "24-06-2024",
				"Salida" : "27-08-2024",
			},
			"fecha reservada 2":{
				"llegada" : "01-03-2024",
				"Salida" : "03-03-2024",
			},
			"fecha reservada 3":{
				"llegada" : "06-03-2024",
				"Salida" : "12-03-2024",
			},
		},
		"imagenes":             [
			"matrimonial_colonial_1_3840x2160.webp",
			"matrimonial_colonial_2_3840x2160.webp",
		],
		"imagen 360":           "room_5_360.JPG",
		"imagen miniatura":     "matrimonial_colonial_1_960x540.webp",
		"cantidad disponible":  14,
		"precio por día":       58.7,
		"capacidad":[
			["2_persons.svg","'.$capacity_2_adult.'"],
		],
		"capacidad cancelando pax":"4_adult.svg",
		"capacidad total":      2,
		"capacidad adultos":    2,
		"capacidad niños":      1,
		"pax":                  15,
		"incluye":{
			"cama matrimonial"          : [1,"bed_regular.svg","'.$bed_regular_description.'"],
			"televisor"                 : [1,"tv.svg","'.$tv_description.'"],
			
			"wifi"                      : [1,"wifi.svg","'.$wifi_description.'"],
			
			"agua caliente"             : [1,"hot_water.svg","'.$hot_water_description.'"],
			"caja fuerte"               : [1,"safe.svg","'.$safe_description.'"],
			"nevera ejecutiva"          : [1,"executive_fridge.svg","'.$executive_fridge_description.'"],
		},
		"descripción"                  : ["ubicada en el área colonial", "cama matrimonial", "wifi", "televisor con NetUno", "agua caliente", "aire acondicionado", "no incluye desayuno", "no admite mascotas"]
	},








	'
?>