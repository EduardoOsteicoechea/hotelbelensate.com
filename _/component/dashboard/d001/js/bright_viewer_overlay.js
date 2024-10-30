export default function bright_viewer_overlay
(
	viewer_2d,
	timeout_for_start,
	operation_duration,
)
{
	setTimeout(() => 
	{
		const overlay = viewer_2d.children[0]

		overlay.style.transition = "opacity ease " + operation_duration + "ms";
		
		overlay.style.opacity = "1";

	}, timeout_for_start);
};