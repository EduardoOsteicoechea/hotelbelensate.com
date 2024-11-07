export default class {
    constructor(data) {
        this._room_name = data.room_name;
        this._id = data.id;
        this._is_enabled = data.is_enabled;
        this._location = data.location;
        this._reserved_dates = data.reserved_dates;
        this._pax_amount = data.pax_amount;
        this._decrement = data.decrement;
        this._increment = data.increment;
        this._added_values = data.added_values;
        this._aditional_services = data.aditional_services;
    }
    print_html_elements() {
        const container = document.createElement("input");
        console.log(this);
        return container;
    }
}
//# sourceMappingURL=RoomUnit.js.map