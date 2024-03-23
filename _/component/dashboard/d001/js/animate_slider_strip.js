// Called from ./generate_2d_viewer_carrousel.js

import diferentiate_clicked_dot from "./diferentiate_clicked_dot.js";

export default function animate_slider_strip
(
	strip,
	ammount,
	direction,
	dot_controls_container,
	current_dot,
	overlay,
	initial_slider_strip_configuration
)
{
	let strip_left = parseFloat(strip.style.left);

	let strip_width = strip.getBoundingClientRect().width;
	let element_quantity = strip.children.length;
	let displacement_unit = strip_width / element_quantity;

	let maximum_right = ((strip_width - displacement_unit) * -1) - 1;
	let maximum_left = 0;

	if (direction === "right") { direction = -1; } else {direction = 1};
	
	let displacement = strip_left + displacement_unit * ammount * direction;

	if( initial_slider_strip_configuration == "fresh start") 
	{ 
		displacement = 0 
	};

	if (initial_slider_strip_configuration == "fresh start")
	{
		strip.style.left = -displacement + "px";
	}
	else if (initial_slider_strip_configuration == "dot")
	{
		strip.style.left = ((current_dot * displacement_unit) * -1) + "px";
		diferentiate_clicked_dot( dot_controls_container, current_dot );
	}
	else if (direction < 0 && maximum_right < displacement)
	{
		let current_corresponding_dot = Math.round(Math.abs(displacement) / displacement_unit);
		diferentiate_clicked_dot( dot_controls_container, current_corresponding_dot);
		strip.style.left = displacement + "px";
	}
	else if 
	(
		direction > 0 && Math.round(strip_left) !== 0 
		&& 
		(maximum_left <= displacement || maximum_left >= displacement)
	)
	{
		let current_corresponding_dot = Math.round(Math.abs(displacement) / displacement_unit);
		diferentiate_clicked_dot( dot_controls_container, current_corresponding_dot);
		strip.style.left = displacement + "px";
	};
}