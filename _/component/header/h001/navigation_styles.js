// called from "../elements/menu_button.js";

export default function navigation_styles (element){
	const container_width = window.innerWidth * .81 + "px";
	const container_transition = "all ease 2000ms";
	apply_styles(
		element, {
			display:"flex",
			alignItems:"center",
			justifyContent:"center",
			gap:"3.5dvw",
			height:"100%",
			background:cw,
			marginLeft:"auto",
		},{
			display:"flex",
			alignItems:"center",
			justifyContent:"center",
			gap:"1.5dvw",
			height:"100%",
			background:cw,
			marginLeft:"auto",			
		},{
			position:"absolute",
			top:"0",
			left:-(parseInt(container_width)) + "px",
			display:"flex",
			flexDirection:"column",
			gap:"4.5dvw",
			padding: "10dvw 10dvw",
			width: container_width,
			height: window.innerHeight + "px",
			background:cw,
			marginLeft:"auto",
			transition:container_transition,
		}
	);
};