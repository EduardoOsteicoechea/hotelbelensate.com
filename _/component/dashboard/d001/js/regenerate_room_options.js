// Called from "./filter_options.js"

import generate_room_options from "./generate_room_options.js";
import filter_suitable_rooms from "./filter_suitable_rooms.js";

export default function regenerate_room_options 
(
	root_folder, 
	search_bar_parameters_values_object,
) {
	fetch(root_folder + '_/data/room/room_data.php')
  .then(response => response.text())
  .then(room_data => {
	
		filter_suitable_rooms(search_bar_parameters_values_object, room_data);

		// generate_room_options (
		// 	root_folder,
		// 	search_bar_parameters_values_object,
		// 	option_container,
		// 	data_object,
		// 	viewer_2d,
		// 	component_name,
		// 	order_container
		// );
  })
  .catch((error) => {
    	console.error('Error:', error);
  });
}

