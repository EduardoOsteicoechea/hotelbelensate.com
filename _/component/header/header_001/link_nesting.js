// called from "./class.js";

// import get_public_link_structure_object from "./routes_structure.js";
// import generate_header_anchors from "./header_anchors.js";

export default function generate_link_nesting (
	current_element_sub_routes_object
) {
	if (current_element_sub_routes_object){
		const object_array = Object.entries(current_element_sub_routes_object);

		for (let index = 0; index < object_array.length; index++) 
		{
			const current_anchor_group_array = object_array[index];
			const current_anchor_group_name_string = current_anchor_group_array[0];
			const current_anchor_group_object = current_anchor_group_array[1];
			
			const current_element_id_string = current_anchor_group_object["id_string"];
			const current_element_string_to_print = current_anchor_group_object["string_to_print"];
			const current_element_href_string = current_anchor_group_object["href_string"];
			const current_element_sub_routes_object = current_anchor_group_object["sub_routes_object"];
			const current_element_is_visible_boolean = current_anchor_group_object["is_visible_boolean"];
			

			if(current_anchor_group_object["sub_routes_object"])
			{
				console.log(current_anchor_group_object);
				console.log("--");
				generate_link_nesting (current_anchor_group_object);
			};
		};

		console.log(current_element_sub_routes_object);
		// console.log(object_array);
		console.log("");
	}
}