export default async function (
    room_presidential_master_card, 
    component_variables_object,
) 
{
    // fetch(component_variables_object["component_data_folder_path"]+"data.json", {method: "GET"})
    // .then(response => response.json()).then(data => {
    //     component_variables_object["room_data_object"] = data;
    //     room_presidential_master_card.innerHTML = component_variables_object["html"];
    // })
    // .then(
    //     fetch(component_variables_object["component_folder_path"] + "data_container.php", {method: "POST", headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(component_variables_object)}).then(response => response.json()).then(data => 
    //     {
    //         const room_data_container = document.getElementById(data["id_array"].filter(id => id.includes("room_data_container")));
    //         room_data_container.innerHTML = data["room_data_object_html"];
    //         console.log(data)
    //     })
    // );

    const response = await fetch(component_variables_object["component_data_folder_path"] + "data.json");
    const data = await response.json();
    component_variables_object["room_data_object"] = data;

    room_presidential_master_card.innerHTML = component_variables_object["html"];

    const containerResponse = await fetch(component_variables_object["component_folder_path"] + "data_container.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(component_variables_object)
    });
    const containerData = await containerResponse.json();

    const room_data_container = document.getElementById(containerData["id_array"].filter(id => id.includes("room_data_container")));
    room_data_container.innerHTML = containerData["room_data_object_html"];
    console.log(containerData);
}