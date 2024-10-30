import generate_2d_viewer_carrousel from "./generate_2d_viewer_carrousel.js";

// Called from ./generate_2d_viewer_carrousel.js

export default function generate_option_slider
(
	root_folder,
	viewer_2d,
	option_container,
	room_card_array,
	room_name_array,
	room_image_array,
	component_name
)
{
	// console.log(option_container);
	// console.log(room_card_array);
	// console.log(room_name_array);
	// console.log(room_image_array);

	const option_number_base = option_container.children[0].id.split("_");
	const option_number = option_number_base[option_number_base.length - 1];
	let left_option = null;
	let right_option = null;
	
	if(option_number > 0) 
	{left_option = option_number - 1;} else {left_option = option_number};
	
	if(option_number < option_container.children.length) 
	{right_option = option_number + 1;} else {right_option = option_number};

	const option_for_generation = option_container.children[option_number]
	// console.log(option_for_generation)

	const option_slider = document.createElement("div");
	option_slider.classList.add(component_name + "_option_slider");

	const option_slider_left_button = document.createElement("div");
	option_slider_left_button.classList.add(component_name + "_option_slider_left_button");
	option_slider_left_button.innerHTML = "<";
	option_slider_left_button.addEventListener("pointerup", ()=>
	{
		generate_2d_viewer_carrousel 
		(
			root_folder,
			option_container.children[left_option],
			viewer_2d,
			room_name_array[option_number],
			room_images,
			component_name,
			800
		)
	});
	option_slider.appendChild(option_slider_left_button);

	const option_slider_option_name = document.createElement("div");
	option_slider_option_name.classList.add(component_name + "_option_slider_option_name");
	option_slider_option_name.innerHTML = room_name_array[option_number];
	option_slider.appendChild(option_slider_option_name);

	const option_slider_right_button = document.createElement("div");
	option_slider_right_button.classList.add(component_name + "_option_slider_right_button");
	option_slider_right_button.innerHTML = ">";
	option_slider_right_button.addEventListener("pointerup", ()=>
	{
		generate_2d_viewer_carrousel 
		(
			root_folder,
			option_container.children[right_option],
			viewer_2d,
			room_name,
			room_images,
			component_name,
			800
		)
	});
	option_slider.appendChild(option_slider_right_button);

	viewer_2d.appendChild(option_slider);
};