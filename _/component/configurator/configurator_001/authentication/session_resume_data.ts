export default class session_resume_data
{
   screen_available_height:string
   screen_available_width:string
   screen_color_depth:string
   screen_pixel_depth:string
   navigator_language:string
   cookie_data:string
   workflow:string

   public constructor
   (
      screen_available_height:string,
      screen_available_width:string,
      screen_color_depth:string,
      screen_pixel_depth:string,
      navigator_language:string,
      cookie_data:string,
      workflow:string,
   )
   {
      this.screen_available_height = screen_available_height;
      this.screen_available_width = screen_available_width;
      this.screen_color_depth = screen_color_depth;
      this.screen_pixel_depth = screen_pixel_depth;
      this.navigator_language = navigator_language;
      this.cookie_data = cookie_data;
      this.workflow = workflow;
   }
}