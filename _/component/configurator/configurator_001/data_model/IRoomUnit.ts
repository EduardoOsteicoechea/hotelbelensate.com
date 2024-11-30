export default interface IRoomUnit
{
   room_name : string
   id : number
   is_enabled : boolean
   location : string
   reserved_dates : string[]
   pax_amount : number
   decrement : number
   increment : number
   added_values : string[]
   aditional_services : string[]
}