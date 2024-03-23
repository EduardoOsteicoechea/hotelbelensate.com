// Called from ./animate_slider_strip.js

export default function diferentiate_clicked_dot 
(
	dot_controls_container,
	current_dot,
)
{
	Array.from(dot_controls_container.children).forEach(dot => 
	{
		dot.classList.remove("clicked_dot")	;
	});
	dot_controls_container.children[current_dot].classList.add("clicked_dot")
};