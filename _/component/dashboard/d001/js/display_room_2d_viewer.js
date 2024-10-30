// Called from ./generate_initial_options.js

export default function display_room_2d_viewer 
(
	viewer_2d
) 
{
	if (!Array.from(viewer_2d.classList).includes("visible"))
	{
		viewer_2d.classList.add("visible");
		let scroll_dimension = (window.innerWidth / 100) * 9;
		// window.scrollTo(0, scroll_dimension);
	};
};
