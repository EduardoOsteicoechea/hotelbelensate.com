export default class {
    constructor(data, secret) {
        this._type_data_api_base_route = "../../_/api/room_data/";
        this._type_units_route = this._type_data_api_base_route + "_get_type_units.php";
        this._type_data_update_route_validation = this._type_data_api_base_route + "_validation.php";
        this._type_data_update_route = this._type_data_api_base_route + "_update_room_type.php";
        this._secret = "";
        this._type_units_container = document.createElement("div");
        this._room_name = data.room_name;
        this._type_id = data.type_id;
        this._room_numbers_in_administration = data.room_numbers_in_administration;
        this._is_enabled = data.is_enabled;
        this._admits_pax = data.admits_pax;
        this._pax_amount = data.pax_amount;
        this._decrement_amount = data.decrement_amount;
        this._increment_amount = data.increment_amount;
        this._gross_price = data.gross_price;
        this._net_price = data.net_price;
        this._capacity = data.capacity;
        this._capacity_with_pax = data.capacity_with_pax;
        this._children_capacity = data.children_capacity;
        this._room_services = data.room_services;
        this._room_images = data.room_images;
        this._room_thumbnail_image = data.room_thumbnail_image;
        this._room_capacity_images = data.room_capacity_images;
        this._room_icons = data.room_icons;
        this._secret = secret;
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
    generate_type_management_dashboard() {
        const myFirstInput = document.createElement("input");
        myFirstInput.style.width = "70%";
        const myFirstInput2 = document.createElement("input");
        myFirstInput2.value = this._room_name;
        myFirstInput2.style.transition = "all ease 1000ms";
        myFirstInput2.onpointerenter = () => {
            myFirstInput2.value = "Quítate de encima";
            myFirstInput2.style.width = "100%";
        };
        myFirstInput2.onpointerleave = () => {
            myFirstInput2.value = "¡Gracias!";
            myFirstInput2.style.width = "50%";
        };
        const container = document.createElement("div");
        container.style.backgroundColor = "green";
        container.style.padding = "5dvw";
        container.appendChild(myFirstInput);
        container.appendChild(myFirstInput2);
        return container;
    }
}
//# sourceMappingURL=RoomType3.js.map