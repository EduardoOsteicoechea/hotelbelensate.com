// Called from ./generate_inital_options.js

import animate_slider_strip from "./animate_slider_strip.js";
import dim_viewer_overlay from "./dim_viewer_overlay.js";
import bright_viewer_overlay from "./bright_viewer_overlay.js";
import close_2d_viewer from "./close_2d_viewer.js";
import toogle_fullscreen_mode from "./toogle_fullscreen_mode.js";
import diferentiate_clicked_dot from "./diferentiate_clicked_dot.js";
import generate_option_slider from "./generate_option_slider.js";

export default function generate_2d_viewer_carrousel 
(
	root_folder,
	parent_card,
	viewer_2d,
	room_name,
	room_images,
	component_name,
	timeout,
	option_container,
	current_option_number
)
{
	// Guarantee that this component overlay only fires after it's creation in case that this execution is the first after the page reload.
	// the following dim_overlay variable will be called inside the carrousel component creation code block. if this is the first execution after the page reload, the dim_overlay will dim the overlay and lighten it a while after, else, if this isn't the first execution after the page reload (that means that a second card was clicked), the funtion won't be called twice (inmediatelly and after the timeout received in the arguments of this function) because the thim overlay will be an empty function.
	let dim_overlay = ()=>{};

	if (viewer_2d.children.length > 0) 
	{
		dim_viewer_overlay(viewer_2d, 0, 1000);
	}
	else
	{
		dim_overlay = ()=>{bright_viewer_overlay(viewer_2d, 250, 1000);};
	};

	// Create the carrousel after the timeout received in this function argument
	setTimeout(() => {

		// Create and classify carrousel container and append it to the 2d viewer
		const carrousel = document.createElement("div");
		carrousel.setAttribute("id", component_name + "_viewer_2d_" + "carrousel");
		carrousel.setAttribute("class", component_name + "_viewer_2d_" + "carrousel");
		viewer_2d.appendChild(carrousel);
		
		// Create and classify carrousel overlay and append it to the carrousel container
		// This overlay will toggle it's opacity to hide any roughness in the image sliding transition
		// this overlay must be putted on top of the carrousel's image strip ussing css
		const carrousel_overlay = document.createElement("div");
		carrousel_overlay.setAttribute("class", component_name + "_viewer_2d_" + "carrousel_overlay");
		carrousel.appendChild(carrousel_overlay);

		// Call the conditionated dim_viewer_overlay function stored inside the dim_overlay variable.
		// See the explanation at the top of this script.
		dim_overlay();

		// Now we're going to create the variable lenght elements
		// This elements have as much childs as image names are received in the arguments of the function
		
		// Create and classify the carrousel sliding strip and append it to the carrousel container
		// This strip will be populated in the for loop below and then animated in the animate_slider_strip function bellow the loop
		// The animate slider strip function in invoked from the animate_slider_strip.js file
		const image_strip = document.createElement("div");
		image_strip.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "image_strip");
		image_strip.setAttribute("style", "left:0px");
		carrousel.appendChild(image_strip);

		// Create and classify the dots controls container and append it to the carrousel container
		// This dot controls container will be populated in the for loop below and then animated in the animate_slider_strip function bellow the loop
		// The animate slider strip function in invoked from the animate_slider_strip.js file
		const dot_controls_container = document.createElement("div");
		dot_controls_container.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "dots_controls_container");
		carrousel.appendChild(dot_controls_container);

		// Create an image and a dot for each image name received in the arguments of this funtion
		// Append the image and the dot to it's respective container
		// Add a "click" event listener to each dot
		// Call the animate slider strip function in invoked from the animate_slider_strip.js file from that event listener
		for (let i = 0; i < room_images.length; i++) 
		{	
			// Capture the current iteration image name in a variable
			const image_name = room_images[i];

			// Create and classify an image container to control precissely the display of the image and append it to the image strip
			const image_container = document.createElement("div");
			image_container.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "image_strip_" + "image_container");
			image_strip.appendChild(image_container);

			// Create and classify the image html element that correspond to the current image name, set it's src and height attribute and then append it to the image strip
			const image_element = document.createElement("img");
			image_element.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "image_strip_" + "image_element");
			image_element.setAttribute("src", root_folder + "_/media/image/room/" + image_name);
			image_element.setAttribute("height", "100%" );
			image_container.appendChild(image_element);

			// Create and classify a dot and append it to the dot controls container
			const dot = document.createElement("div");
			dot.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "dot");
			dot_controls_container.appendChild(dot);

			// Add a click event listener to the dot in order to call the animate slider strip with the current iteration value that will assist the dot identification
			dot.addEventListener("click", () => {
				animate_slider_strip
				(
					image_strip,
					i,
					0,
					dot_controls_container,
					i,
					carrousel_overlay,
					"dot"
				)
			});

			if (i == 0)
			{
				diferentiate_clicked_dot( dot_controls_container, i );
			};
		};

		// Create and classify carrousel sliding buttons container, then append it to the carrousel container
		const slide_buttons_container = document.createElement("div");
		slide_buttons_container.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "slide_buttons_container");
		carrousel.appendChild(slide_buttons_container);

		// Create and classify left and right buttons for the carrousel sliding buttons container, then append it to the slide_buttons_container container
		const left_slide_button = document.createElement("div");
		left_slide_button.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "left_slide_button");
		left_slide_button.innerHTML = "<";
		left_slide_button.addEventListener("click", () => { 
			animate_slider_strip
			(
				image_strip,
				1,
				"left",
				dot_controls_container,
				0,
				carrousel_overlay,
				""
			)
		});
		slide_buttons_container.appendChild(left_slide_button);
		const right_slide_button = document.createElement("div");
		right_slide_button.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "right_slide_button");
		right_slide_button.innerHTML = ">";
		right_slide_button.addEventListener("click", () => {
			animate_slider_strip
			(
				image_strip,
				1,
				"right",
				dot_controls_container,
				0,
				carrousel_overlay,
				""
			)
		});
		slide_buttons_container.appendChild(right_slide_button);

		// Create and classify the fullscreen button container, and append it to the carrousel container
		const fullscreen_button_container = document.createElement("div");
		fullscreen_button_container.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "fullscreen_button_container");
		fullscreen_button_container.innerHTML = "ampliar";
		fullscreen_button_container.addEventListener("pointerup", () => {
			toogle_fullscreen_mode(
				viewer_2d, 
				fullscreen_button_container,
				image_strip,
				dot_controls_container,
				carrousel_overlay,
				"fresh start"
				)
		});
		carrousel.appendChild(fullscreen_button_container);

		// Create and classify the close button container, insert a paragraph with a "x" text inside the close button contaier, and append the container to the carrousel container
		const close_button_container = document.createElement("div");
		close_button_container.setAttribute("class", component_name + "_viewer_2d_carrousel_" + "close_button_container");
		close_button_container.innerHTML = "cerrar";
		close_button_container.addEventListener("pointerup", () => {
			close_2d_viewer(
				viewer_2d,
				image_strip,
				dot_controls_container,
				carrousel_overlay,
				"fresh start",
				parent_card
				)
		});
		carrousel.appendChild(close_button_container);

		// If there already was a carrousel in the 2d viewer (because a card was clicked before the current execution of this function), remove the previous carrousel and keep this one
		if (viewer_2d.children.length > 1) 
		{
			viewer_2d.children[0].remove();
		};

	}, timeout);
}