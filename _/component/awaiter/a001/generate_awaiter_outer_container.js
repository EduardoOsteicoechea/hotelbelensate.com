// called from "./a001_class.js";
import generate_awaiter_message from "./generate_awaiter_message.js";

export default function generate_awaiter_outer_container(
	root_folder,
	component_id,
	component_class,
	component_folder,
	component_type,
	awaiter_message,
){
	disable_page_scrolling_function();
	
	const outer_container = document.getElementById(component_id);
	outer_container.id = component_id + "_" + "background_screen";
	outer_container.classList.add(component_class + "_" + "background_screen");

	const awaiter_interval = 2500;
	const opacity_time = 3500;

	awaiter_progress_bar_animation_start();

	window.addEventListener('load', (event) => {
		awaiter_progress_bar_animation_center();
  	});
  	function awaiter_progress_bar_animation_start(){
		
	};
	function awaiter_progress_bar_animation_center(){
		setTimeout(() => {
			awaiter_progress_bar_animation_end()
		}, awaiter_interval);
 	};
	function awaiter_progress_bar_animation_end(){
		setTimeout(() => {
			outer_container.style.opacity = "0";
			enable_page_scrolling_function();
			setTimeout(() => {
				// outer_container.remove();
			}, awaiter_interval);
		}, awaiter_interval);
	};

	generate_awaiter_message(
		outer_container,
		root_folder,
		component_id,
		component_class,
		component_folder,
		component_type,
		awaiter_message,
	);


	apply_styles(
		outer_container, {
			position: "absolute",
			top:"0",
			display:"flex",
			flexDirection:"column",
			justifyContent:"center",
			alignItems:"center",
			background: "#fff",
			height: "54dvw",
			width: "100dvw",
			zIndex: "1000",
			opacity: "1",
			transition: "opacity ease " + opacity_time + "ms",
		},{
			position: "absolute",
			top:"0",
			display:"flex",
			flexDirection:"column",
			justifyContent:"center",
			alignItems:"center",
			background: "#fff",
			height: "100dvh",
			width: "100dvw",
			zIndex: "1000",
			opacity: "1",
			transition: "opacity ease " + opacity_time + "ms",
		},{
			position: "absolute",
			top:"0",
			display:"flex",
			flexDirection:"column",
			justifyContent:"center",
			alignItems:"center",
			background: "#fff",
			height: "100dvh",
			width: "100dvw",
			zIndex: "1000",
			opacity: "1",
			transition: "opacity ease " + opacity_time + "ms",
		}
	);
	
}