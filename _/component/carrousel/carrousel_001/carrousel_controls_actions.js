// Called from "./form.js";

export default class 
{
	slide_left (
		button,
		image_strip_container_image_strip
	) 
	{
		button.addEventListener("pointerup",()=>{
			let index = Math.round(image_strip_container_image_strip.getBoundingClientRect().width / image_strip_container_image_strip.children.length);
			if(parseFloat(image_strip_container_image_strip.style.left) < 0){
				image_strip_container_image_strip.style.left = parseFloat(image_strip_container_image_strip.style.left) + index + "px";
			};
			console.log(parseFloat(image_strip_container_image_strip.style.left));
		});	
	}

	slide_right (
		button,
		image_strip_container_image_strip
	) 
	{
		button.addEventListener("pointerup",()=>{
			let index = Math.round(image_strip_container_image_strip.getBoundingClientRect().width / image_strip_container_image_strip.children.length);
			if(Math.abs(parseFloat(image_strip_container_image_strip.style.left)) < image_strip_container_image_strip.getBoundingClientRect().width - index){
				image_strip_container_image_strip.style.left = parseFloat(image_strip_container_image_strip.style.left) - index + "px";
			};
			console.log(parseFloat(image_strip_container_image_strip.style.left));
		});
		
	}
}