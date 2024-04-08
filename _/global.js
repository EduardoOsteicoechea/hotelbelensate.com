history.scrollRestoration = "manual";
// history.scrollRestoration = "auto";

function disable_page_scrolling_function() {	
	document.body.style.overflowY = 'hidden';
	window.addEventListener('scroll', function(event) {
		event.preventDefault();
	});
}
function enable_page_scrolling_function() {
	document.body.style.overflowY = 'auto';
	window.removeEventListener('scroll', function(event) {
		event.preventDefault();
	});
}

function calculate_day_quantity(date_1, date_2) 
{
	var date_1_time = new Date(date_1).getTime();
	var date_2_time = new Date(date_2).getTime();

	var time_difference = Math.abs(date_1_time - date_2_time);
	
	return( Math.round(time_difference / (1000 * 60 * 60 * 24)) );
};


function slide_info_image_slider(event)
{
	let clicked_control_point = event.target
	let control_point_class_name = clicked_control_point.classList[1]
	let clicked_control_point_class_name = clicked_control_point.classList[0]
	let current_control_points = document.getElementsByClassName(clicked_control_point_class_name)
	let control_points = document.getElementsByClassName(control_point_class_name)

	current_control_points[current_control_points.length - 1].classList.add("selected_control_point")

	for(var i = 0; i < control_points.length; i++)
	{
		control_points[i].classList.remove("selected_control_point")
	};

	for(var i = 0; i < current_control_points.length; i++)
	{
		current_control_points[i].classList.add("selected_control_point")
	};

	let current_control_point_number =              clicked_control_point.id.slice(-1)
	let info_image_slider_information_containers =  document.getElementsByClassName("info_image_slider_information_container_single_information_container")
	let info_image_slider_image_containers =        document.getElementsByClassName("info_image_slider_image_container_single_image_container")

	let info_image_slider_information_container =   info_image_slider_information_containers[current_control_point_number]
	let info_image_slider_image_container =         info_image_slider_image_containers[current_control_point_number]

	for(var i = 0; i < info_image_slider_information_containers.length; i++)
	{
		info_image_slider_information_containers[i].classList.add("hidden");
		info_image_slider_image_containers[i].classList.add("hidden");
	};

	info_image_slider_information_container.classList.remove("hidden");
	info_image_slider_image_container.classList.remove("hidden");
	info_image_slider_information_container.classList.add("visible");
	info_image_slider_image_container.classList.add("visible");
};

function apply_styles(
	element, 
	desktop_style_object,
	tablet_style_object,
	mobile_style_object,
){
	apply();
	window.addEventListener("resize", function(){
		apply();
	});
	function apply(){
		if (window.innerWidth > 822) {	
			for(let property in desktop_style_object) {
				element.style[property] = desktop_style_object[property];
			};
		} else if (window.innerWidth > 550 && window.innerWidth < 822 ) {	
			for(let property in tablet_style_object) {
				element.style[property] = tablet_style_object[property];
			};
		} else {	
			for(let property in mobile_style_object) {
				element.style[property] = mobile_style_object[property];
			};
		}
	}
};

