export default function display_room_360_viewer 
(
	root_folder,
	viewer_360,
	source_image_container,
	room_360_image, 
	room_name,
	room_min_arrival,
	room_max_departure,
	room_available_quantity,
	room_price_by_day,
	room_capacity,
	room_pax,
	room_includes,
	room_description
) 
{
	if (Array.from(viewer_360.classList).includes("visible"))
	{
		viewer_360.classList.remove("visible");
		viewer_360.classList.add("visible");
	} 
	else 
	{
		viewer_360.classList.add("visible");
	};

	if (document.querySelector(".pnlm-container")) 
	{
		document.querySelector(".pnlm-container").style.opacity = "0";
	};

	setTimeout(() => 
	{
		const image_container = document.createElement("div");
		image_container.id = "360_viewer";
		viewer_360.appendChild(image_container);

		const viewer = pannellum.viewer('360_viewer', 
		{
			"type": "equirectangular",
			"panorama": root_folder + "_/media/image/room/" + room_360_image,
			"autoLoad": true, 
			"autoRotate": -2,
			"hfov": 100
		});

		const close_button = document.createElement("div");
		close_button.id = "viewer_360_close_button";
		close_button.innerHTML = "<p>x</p>";

		close_button.addEventListener("click", ()=>
		{
			document.querySelector(".pnlm-container").style.display = "none";
			viewer_360.classList.remove("visible");
			source_image_container.children[source_image_container.children.length - 2].classList.remove("clicked");
			source_image_container.children[source_image_container.children.length - 1].style.display = "none";
		});

		viewer_360.appendChild(close_button);

		setTimeout(() => 
		{
			document.querySelector(".pnlm-container").style.opacity = "1";
			document.querySelector(".pnlm-container").style.display = "block";
		}, 100);

	}, 2000);
}
