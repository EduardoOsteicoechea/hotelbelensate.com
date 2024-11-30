import IRoomUnit from "./IRoomUnit.js"

export default interface IRoomType
{
   room_name: string
   type_id: string
   room_numbers_in_administration: string[]
   is_enabled: boolean
   admits_pax: boolean
   pax_amount: number
   decrement_amount: number
   increment_amount: number
   gross_price: number
   net_price: number
   capacity: number
   capacity_with_pax: number
   children_capacity: number
   room_services: string[]
   room_images: string[]
   room_thumbnail_image: string[]
   room_capacity_images: string[]
   room_icons: string[][]
   units: IRoomUnit[]
   units_file_names: string[]
}