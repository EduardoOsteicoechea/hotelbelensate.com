// called from "../elements/outer_container.js";

export default function outer_container_styles(outer_container){
	apply_styles(
		outer_container, {
			display:"flex",
			height: screen_height * .1 + "px",
			width:"100dvw",
			background:cw,
			padding:"1dvw 4dvw 1dvw 4dvw",
			border:borderT1,
		},{
			display:"flex",
			height: screen_height * .1 + "px",
			width:"100dvw",
			background:cw,
			padding:"2dvw 4dvw 1dvw 4dvw",
			border:borderT1,
			
		},{
			display:"flex",
			height: screen_height * .1 + "px",
			width:"100dvw",
			background:cw,
			padding:"2dvw 4dvw 1dvw 4dvw",
			border:borderT1,
			
		},{
			display:"flex",
			alignItems:"center",
			height:"18dvw",
			width:"100dvw",
			background:"blue",
			padding:"7dvw 6dvw 6dvw 4dvw",
			border:borderT1,
		}
	);
}