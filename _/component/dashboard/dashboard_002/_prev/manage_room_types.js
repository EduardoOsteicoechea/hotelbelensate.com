export default function
(
    room_filter_container,
        room_filter_container_title,
        room_filter_container_checkboxes_container,
        filter_sumary_container_sumary_container_type_container,
        apply_filters_button_container,
){
    let checkboxes = [];
    let labels = [];
    const selectedTypeNameContainer = document.createElement("div");
    selectedTypeNameContainer.id = "types_values_container";

    for (let index = 0; index < room_filter_container_checkboxes_container.children.length; index++) 
    {
        const checkboxAndLabelContainer = room_filter_container_checkboxes_container.children[index];
        const checkbox = checkboxAndLabelContainer.children[0];
        const label = checkboxAndLabelContainer.children[1];
        checkboxes.push(checkbox);
        labels.push(label);

        checkbox.addEventListener("change",()=>
        {
            let checkboxesCount = 0;
            selectedTypeNameContainer.innerHTML = "";
            filter_sumary_container_sumary_container_type_container.innerHTML = "";
            for (let x = 0; x < checkboxes.length; x++) 
            {
                if(checkboxes[x].checked)
                {            
                    const selectedTypeName = document.createElement("p");
                    selectedTypeName.innerHTML = labels[x].innerHTML;
                    filter_sumary_container_sumary_container_type_container.appendChild(selectedTypeName);
                    selectedTypeNameContainer.appendChild(selectedTypeName);
                    checkboxesCount = checkboxesCount + 1;
                };
            };
            apply_filters_button_container.appendChild(selectedTypeNameContainer);
            
            const clearSelectedButton = document.createElement("button");
            clearSelectedButton.innerHTML = "Reiniciar";
            clearSelectedButton.addEventListener("pointerup",()=>
            {
                for (let x = 0; x < checkboxes.length; x++) 
                {
                    checkboxes[x].checked = false
                };
                filter_sumary_container_sumary_container_type_container.innerHTML = "";
                
                room_filter_container.classList.remove("filled_filters");
            });

            room_filter_container.classList.add("filled_filters");
            filter_sumary_container_sumary_container_type_container.appendChild(clearSelectedButton);



            // console.log("manage_room_types: " + checkboxesCount);

            if(checkboxesCount === 0)
            {
                for (let x = 0; x < checkboxes.length; x++) 
                {
                    checkboxes[x].checked = false
                };
                filter_sumary_container_sumary_container_type_container.innerHTML = "";
                
                room_filter_container.classList.remove("filled_filters");
            };
        });
    }
}