import dim_viewer_overlay from "./dim_viewer_overlay.js";
import animate_slider_strip from "./animate_slider_strip.js";
import diferentiate_clicked_dot from "./diferentiate_clicked_dot.js"
import undiferentiate_cards from "./undiferentiate_cards.js"

// Called from ./generate_2d_viewer_carrousel.js
export default function close_2d_viewer 
(
	viewer_2d,
	image_strip,
	dot_controls_container,
	carrousel_overlay,
	initial_slider_strip_configuration,
	parent_card
)
{
	dim_viewer_overlay(viewer_2d, 0, 500)
	

	if (Array.from(viewer_2d.classList).includes("visible"))
	{
		if (Array.from(viewer_2d.classList).includes("fullscreen"))
		{
			viewer_2d.classList.remove("fullscreen");
			viewer_2d.classList.remove("visible");
		}
		else
		{
			viewer_2d.classList.remove("visible");
		};
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

	diferentiate_clicked_dot( dot_controls_container, 0);
	undiferentiate_cards (parent_card); 
};