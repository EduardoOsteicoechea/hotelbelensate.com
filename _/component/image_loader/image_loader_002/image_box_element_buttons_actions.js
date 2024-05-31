export default class 
{
	display_tooltip (button, tooltip) 
	{
		button.addEventListener("pointerenter",()=>{
			tooltip.style.height = "fit-content";
			tooltip.style.padding = ".5rem .75rem";
		});
		
		button.addEventListener("pointerleave", ()=>{
			tooltip.style.height = "0px";
			tooltip.style.padding = ".0rem .75rem";
		});
	}
}