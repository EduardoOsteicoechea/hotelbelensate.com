// called from "./header_anchors.js";

// import get_public_link_structure_object from "./routes_structure.js";
// import generate_header_anchors from "./header_anchors.js";

export default function generate_link_nesting (
	header_anchor_child_container,
	current_element_sub_routes_object,
	iteration_number_counter,
) {
	if (current_element_sub_routes_object) {
		const object_array = Object.entries(current_element_sub_routes_object);
		
		// console.log("    " + object_array);
		// console.log(object_array);
		
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
			
			if(current_element_is_visible_boolean && current_element_sub_routes_object)
			{
				const current_element_anchor_tag = document.createElement("div");
				current_element_anchor_tag.className = "sub_anchor_container_container";
				current_element_anchor_tag.innerHTML = current_element_string_to_print;
				header_anchor_child_container.appendChild(current_element_anchor_tag);

				generate_link_nesting(current_element_sub_routes_object, iteration_number_counter + 1);
				// console.log(iteration_number_counter);
				// console.log("----");
			}
			else if (current_element_is_visible_boolean)
			{
				const current_element_anchor_tag = document.createElement("a");
				current_element_anchor_tag.className = "sub_anchor_container_anchor";
				current_element_anchor_tag.innerHTML = current_element_string_to_print;
				current_element_anchor_tag.setAttribute("href",current_element_href_string);
				header_anchor_child_container.appendChild(current_element_anchor_tag);
			};
		};
	}
	else
	{
		// console.log("disabled");
	};
}