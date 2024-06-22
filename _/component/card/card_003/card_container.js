export default function (
    room_presidential_master_card, 
    component_variables_object,
) 
{
    fetch(component_variables_object["component_data_folder_path"]+"data.json", {method: "GET"})
    .then(response => response.json()).then(data => {
        component_variables_object["room_data_object"] = data;
    })
    .then(
        fetch(component_variables_object["component_folder_path"] + "signature_image_container.php", {method: "POST", headers: {"Content-Type": "application/json"},
        body: JSON.stringify(component_variables_object)}).then(response => response.json()).then(data => 
        {
            console.log(data["php_array"]);
            console.log(data["html"]);
            room_presidential_master_card.innerHTML = data["html"];
        })
    );
    
}