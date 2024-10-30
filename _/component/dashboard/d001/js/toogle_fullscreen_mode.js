import animate_slider_strip from "./animate_slider_strip.js";
import diferentiate_clicked_dot from "./diferentiate_clicked_dot.js"

// Called from ./generate_2d_viewer_carrousel.js

export default function toogle_fullscreen_mode 
(
	viewer_2d,
	fullscreen_button,
	image_strip,
	dot_controls_container,
	carrousel_overlay,
	initial_slider_strip_configuration
)
{

	if (Array.from(viewer_2d.classList).includes("fullscreen"))
	{
		viewer_2d.classList.remove("fullscreen");
		fullscreen_button.innerHTML = "ampliar";
	}
	else
	{
		viewer_2d.classList.add("fullscreen");
		fullscreen_button.innerHTML = "reducir";
	};

	animate_slider_strip
	(
		image_strip,
		0,
		"left",
		dot_controls_container,
		0,
		carrousel_overlay,
		initial_slider_strip_configuration
	);

	if (Array.from(viewer_2d.classList).includes("fullscreen"))
	{
		diferentiate_clicked_dot( dot_controls_container, 0);
		let header_height = (window.innerWidth / 100) * 6.5;
		let scroll_dimension = header_height;
		// window.scrollTo({
		// 	top: scroll_dimension,
		// 	behavior: 'smooth'
		//  });
	}
	else
	{
		diferentiate_clicked_dot( dot_controls_container, 0);
		let search_bar_bottom_y_dimension = (window.innerWidth / 100) * 9;
		let scroll_dimension = search_bar_bottom_y_dimension;
		// window.scrollTo({
		// 	top: scroll_dimension,
		// 	behavior: 'smooth'
		//  });
	};
};