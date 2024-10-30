import IRoomType from "./IRoomType.js";
import IRoomUnit from "./IRoomUnit.js";

export default interface IRoomOptions {
   room_type: IRoomType;
   units_file_names: string[];
   room_units: IRoomUnit[];
}