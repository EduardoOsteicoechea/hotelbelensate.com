// Called from "./_.php"

export default class
{
    constructor
	(
        scroll_to_top_button,
        scroll_bottom_button
	) 
	{
        this.scroll_to_top_button = document.getElementById(scroll_to_top_button);
        this.scroll_to_bottom_button = document.getElementById(scroll_bottom_button);
        
        if (!this.scroll_to_top_button || !this.scroll_to_bottom_button) {
            console.error("Elements not found:", this.scroll_to_top_button, this.scroll_to_bottom_button);
            return;
        };
      
        this.scroll_to_top_button.addEventListener("pointerup", () => {
        window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    
        this.scroll_to_bottom_button.addEventListener("pointerup", () => {
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const pos = docHeight - winHeight;
            window.scrollTo({
                top: pos,
                behavior: "smooth"
            });
        });
    }
}