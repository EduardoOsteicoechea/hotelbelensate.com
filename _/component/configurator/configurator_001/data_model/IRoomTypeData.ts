import IRoomType from "./IRoomType.js"
import IRoomUnit from "./IRoomUnit.js"

export default interface IRoomTypeData
{
   type: IRoomType
   units_file_names: string[]
   units: IRoomUnit[]
}