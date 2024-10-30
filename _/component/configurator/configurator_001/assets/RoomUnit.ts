import IRoomUnit from "./IRoomUnit.js"

export default class 
{
   _room_name : string
   _id : number
   _is_enabled : boolean
   _location : string
   _reserved_dates : string[]
   _pax_amount : number
   _decrement : number
   _increment : number
   _added_values : string[]
   _aditional_services : string[]

   constructor (
      data: IRoomUnit
   ) {
      this._room_name = data.room_name
      this._id = data.id
      this._is_enabled = data.is_enabled
      this._location = data.location
      this._reserved_dates = data.reserved_dates
      this._pax_amount = data.pax_amount
      this._decrement = data.decrement
      this._increment = data.increment
      this._added_values = data.added_values
      this._aditional_services = data.aditional_services
   }
}