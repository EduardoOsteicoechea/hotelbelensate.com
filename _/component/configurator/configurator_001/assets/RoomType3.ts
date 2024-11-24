import IRoomType from "./IRoomType.js"
import IRoomUnit from "./IRoomUnit.js";
import RoomUnit from "./RoomUnit.js";

export default class
{
   _type_data_api_base_route: string = "../../_/api/room_data/";
   _type_units_route: string = this._type_data_api_base_route + "_get_type_units.php";
   _type_data_update_route_validation: string = this._type_data_api_base_route + "_validation.php";
   _type_data_update_route: string = this._type_data_api_base_route + "_update_room_type.php";

   _room_name: string
   _type_id: string
   _room_numbers_in_administration: string[]
   _is_enabled: boolean
   _admits_pax: boolean
   _pax_amount: number
   _decrement_amount: number
   _increment_amount: number
   _gross_price: number
   _net_price: number
   _capacity: number
   _capacity_with_pax: number
   _children_capacity: number
   _room_services: string[]
   _room_images: string[]
   _room_thumbnail_image: string[]
   _room_capacity_images: string[]
   _room_icons: string[][]

   _secret: string = ""

   _type_units_container: HTMLDivElement = document.createElement("div")

   constructor
   (
      data: IRoomType,
      secret: string
   )
   {
      this._room_name = data.room_name
      this._type_id = data.type_id
      this._room_numbers_in_administration = data.room_numbers_in_administration
      this._is_enabled = data.is_enabled
      this._admits_pax = data.admits_pax
      this._pax_amount = data.pax_amount
      this._decrement_amount = data.decrement_amount
      this._increment_amount = data.increment_amount
      this._gross_price = data.gross_price
      this._net_price = data.net_price
      this._capacity = data.capacity
      this._capacity_with_pax = data.capacity_with_pax
      this._children_capacity = data.children_capacity
      this._room_services = data.room_services
      this._room_images = data.room_images
      this._room_thumbnail_image = data.room_thumbnail_image
      this._room_capacity_images = data.room_capacity_images
      this._room_icons = data.room_icons
      this._secret = secret
   }

   /////////////////////////////////
   /////////////////////////////////
   /////////////////////////////////
   /////////////////////////////////
   // Type generation section
   /////////////////////////////////
   /////////////////////////////////
   /////////////////////////////////
   /////////////////////////////////

   public generate_type_management_dashboard(): HTMLDivElement
   {      
      const myFirstInput = document.createElement("input")
      
      myFirstInput.style.width = "70%"

      const myFirstInput2 = document.createElement("input")
      myFirstInput2.value = this._room_name

      myFirstInput2.style.transition = "all ease 1000ms"

      myFirstInput2.onpointerenter = ()=>{
         myFirstInput2.value = "Quítate de encima"
         myFirstInput2.style.width = "100%"
      }
      myFirstInput2.onpointerleave = ()=>{
         myFirstInput2.value = "¡Gracias!"
         myFirstInput2.style.width = "50%"
      }

      const container = document.createElement("div")
      container.style.backgroundColor = "green"
      container.style.padding = "5dvw"

      container.appendChild(myFirstInput)
      container.appendChild(myFirstInput2)

      return container;
   }
   


   
}