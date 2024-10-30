// Called from "./regenerate_room_options.js"

export default function filter_options 
(
	search_bar_parameters_values_object, 
	room_data
) {
	try {
		
	console.log(search_bar_parameters_values_object);
	console.log(typeof(JSON.parse(room_data)));
	} catch (error) {
		console.log(error);
	}
}