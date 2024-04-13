// called from "../elements/menu_button.js";

export default function menu_button_styles (element) {
	apply_styles(
		element, {
			display:"none",
		},{
			display:"none",			
		},{
			display:"none",			
		},{
			position:"absolute",
			right: 0,
			top: 0 + "px",
			display:"flex",
			flexDirection:"column",
			alignItems:"center",
			justifyContent:"center",
			gap:"1.5dvw",
			width: window.innerWidth * .19 + "px",
			height:"18dvw",
			padding:"0 5dvw",
			background:cw,
			marginLeft:"auto",
			transition:"opacity ease 1000ms"
		}
	);
};