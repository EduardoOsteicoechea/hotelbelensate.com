export default class room_management_dashboard
{
   _root_folder: string;
   _page_name: string;
   _component_id: string;
   _component_class_name: string;
   _outer_container: HTMLDivElement;
   _authentication_api_route: string = "../../_/api/authentication/_.php";

   public constructor
   (
      root_folder: string,
      page_name: string,
      component_id: string,
      component_class_name: string,
      outer_container: HTMLDivElement
   )
   {
      this._root_folder = root_folder;
      this._page_name = page_name;
      this._component_id = component_id;
      this._component_class_name = component_class_name;
      this._outer_container = outer_container;
   }

   public generate_dashboard(): void
   {
      
   }
}