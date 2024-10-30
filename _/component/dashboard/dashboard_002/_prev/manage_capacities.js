// called from "./manage_filters.js";

import disable_controls from "./disable_controls.js";
import enable_controls from "./enable_controls.js";
import limit_input_to_numbers from "./limit_input_to_numbers.js";
import determine_adult_and_children_capacity from "./determine_adult_and_children_capacity.js";

export default function
(
    capacity_filters_container,
        capacity_filters_container_title,
        adults_filter_container,
        adults_filter_container_label,
        adults_filter_container_input,
        children_filter_container,
        children_filter_container_label,
        children_filter_container_input,
        children_filter_container_children_ages_container,
        children_filter_container_children_ages_container_indication,
        children_filter_container_children_ages_container_items_container,
            filter_sumary_container_sumary_container_item_container,
            filter_sumary_container_sumary_container_capacity_container,
            elements_to_disable_or_enable,
    apply_filters_button_container
){
    adults_filter_container_input.addEventListener("input", ()=>
    {
        limit_input_to_numbers(adults_filter_container_input, 99, true);

        if(adults_filter_container_input.value !== "" && parseInt(adults_filter_container_input.value) !== 0)
            children_filter_container_input.disabled = false;
        else
            children_filter_container_input.disabled = true;
    }); 

    children_filter_container_input.addEventListener("input",()=>
    {
        // clear everithing and start over on each input
        children_filter_container_children_ages_container_items_container.innerHTML = "";
        filter_sumary_container_sumary_container_capacity_container.innerHTML = "";

        limit_input_to_numbers(adults_filter_container_input, 99, true);

        // add indication text
        const childrenElementContainerIndicationElement = document.createElement("label");
        childrenElementContainerIndicationElement.innerHTML = "Indique la edad de cada niño";
        children_filter_container_children_ages_container_items_container.appendChild(childrenElementContainerIndicationElement);

        const number_of_children = parseInt(children_filter_container_input.value);
        for (let index = 0; index < number_of_children; index++) 
        {
            const childrenElementContainer = document.createElement("div");
            
            const childrenElementContainerLabel = document.createElement("label");
            childrenElementContainerLabel.innerHTML = "Niño " + (index+1);

            const childrenElementContainerInput = document.createElement("input");
            childrenElementContainerInput.setAttribute("type","number");

            if(index > 0)
            {
                childrenElementContainerInput.disabled = true;
            };

            childrenElementContainer.appendChild(childrenElementContainerLabel);
            childrenElementContainer.appendChild(childrenElementContainerInput);
            children_filter_container_children_ages_container_items_container.appendChild(childrenElementContainer);
        }

        const childrenElementContainerActionButton = document.createElement("button");
        childrenElementContainerActionButton.disabled = true
        childrenElementContainerActionButton.innerHTML = "Aceptar";
        children_filter_container_children_ages_container_items_container.appendChild(childrenElementContainerActionButton);

        if(children_filter_container_input.value.length > 0)
        {
            // Inforce task completion by disabling all other inputs
            disable_controls(elements_to_disable_or_enable);
        }
        else
        {
            // If the input is empty, enable all disabled controls
            enable_controls(elements_to_disable_or_enable);
            children_filter_container_children_ages_container_items_container.innerHTML = "";
            filter_sumary_container_sumary_container_capacity_container.innerHTML = "";

            // BE CAREFUL HERE !!!

            children_filter_container_children_ages_container_items_container.style.display = "flex";            
            capacity_filters_container.classList.remove("filled_filters");
        }

        let adult_capacity_value = parseInt(adults_filter_container_input.value);
        let children_capacity_value = [];
        
        for (let index = 0; index < children_filter_container_children_ages_container_items_container.children.length; index++) 
        {          
            const element = children_filter_container_children_ages_container_items_container.children[index];
            const isTheIndicationElement = index === 0;
            const lastInputIndex = children_filter_container_children_ages_container_items_container.children.length - 2;
            const isInputButNotTheLastOne = !isTheIndicationElement && index < lastInputIndex;
            const isTheLastInput = index === lastInputIndex;
            const isTheActionButton = index === lastInputIndex + 1;
            const actionButton = children_filter_container_children_ages_container_items_container.children[lastInputIndex + 1];
            
            if(isInputButNotTheLastOne)
            {
                let nextElement = children_filter_container_children_ages_container_items_container.children[index+1]; 
                let input = element.children[1];
                children_capacity_value.push(input);
                input.addEventListener("input",()=>
                {
                    limit_input_to_numbers(input, 99, true);
                    nextElement.children[1].disabled = false;
                });
            }
            else if(isTheLastInput)
            {
                const input = element.children[1];
                children_capacity_value.push(input);
                input.addEventListener("input",()=>
                {
                    limit_input_to_numbers(input, 99, true);
                    actionButton.disabled = false;
                });
            }
            else if(isTheActionButton)
            {
                actionButton.addEventListener("pointerup",()=>
                {
                    if(!actionButton.disabled)
                    {
                        enable_controls(elements_to_disable_or_enable);

                        disable_controls([children_filter_container_children_ages_container_items_container]);
                        const revisedAdultAndChildrenCapacity = determine_adult_and_children_capacity(adult_capacity_value, children_capacity_value);
                        // console.log(revisedAdultAndChildrenCapacity)
    
                        capacity_filters_container.classList.add("filled_filters");
    
                        const clear_filter_inputs_button = document.createElement("button");
                        clear_filter_inputs_button.innerHTML = "Reiniciar";
                        clear_filter_inputs_button.addEventListener("pointerup",()=>
                        {
                            capacity_filters_container.classList.remove("filled_filters");                        
                            filter_sumary_container_sumary_container_capacity_container.innerHTML = "";
    
                            adults_filter_container_input.value = null;
                            children_filter_container_input.value = null;
                            children_filter_container_children_ages_container_items_container.innerHTML = "";
                            children_filter_container_input.disabled = true;
    
                            adult_capacity_value = 0;
                            children_capacity_value = 0;

                            // BE CAREFUL HERE !!!
    
                            children_filter_container_children_ages_container_items_container.style.display = "flex";
                        });
    
                        const filter_sumary_container_sumary_container_capacity_container_items_container = document.createElement("div");
                        filter_sumary_container_sumary_container_capacity_container_items_container.id = "capacities_values_container";

                        // const filter_sumary_container_sumary_container_capacity_container_items_container_adults_capacity_label = document.createElement("p");
                        // filter_sumary_container_sumary_container_capacity_container_items_container_adults_capacity_label.innerHTML = "Adultos: ";
                        const filter_sumary_container_sumary_container_capacity_container_items_container_adults_capacity = document.createElement("p");
                        filter_sumary_container_sumary_container_capacity_container_items_container_adults_capacity.innerHTML = revisedAdultAndChildrenCapacity[0];
                        
                        // const filter_sumary_container_sumary_container_capacity_container_items_container_separator = document.createElement("p");
                        // filter_sumary_container_sumary_container_capacity_container_items_container_separator.innerHTML = " - ";
                        
                        // const filter_sumary_container_sumary_container_capacity_container_items_container_childrens_capacity_label = document.createElement("p");
                        // filter_sumary_container_sumary_container_capacity_container_items_container_childrens_capacity_label.innerHTML = "Niños: ";
                        const filter_sumary_container_sumary_container_capacity_container_items_container_childrens_capacity = document.createElement("p");
                        filter_sumary_container_sumary_container_capacity_container_items_container_childrens_capacity.innerHTML = revisedAdultAndChildrenCapacity[1];                    
    
                        filter_sumary_container_sumary_container_capacity_container_items_container.appendChild(filter_sumary_container_sumary_container_capacity_container_items_container_adults_capacity);
                        // filter_sumary_container_sumary_container_capacity_container_items_container.appendChild(filter_sumary_container_sumary_container_capacity_container_items_container_adults_capacity_label);
                        // filter_sumary_container_sumary_container_capacity_container_items_container.appendChild(filter_sumary_container_sumary_container_capacity_container_items_container_separator);
                        // filter_sumary_container_sumary_container_capacity_container_items_container.appendChild(filter_sumary_container_sumary_container_capacity_container_items_container_childrens_capacity_label);
                        filter_sumary_container_sumary_container_capacity_container_items_container.appendChild(filter_sumary_container_sumary_container_capacity_container_items_container_childrens_capacity);
    
                        // filter_sumary_container_sumary_container_capacity_container.appendChild(filter_sumary_container_sumary_container_capacity_container_items_container);
                        filter_sumary_container_sumary_container_capacity_container.appendChild(clear_filter_inputs_button);

                        apply_filters_button_container.appendChild(filter_sumary_container_sumary_container_capacity_container_items_container);

                        // BE CAREFUL HERE !!!

                        children_filter_container_children_ages_container_items_container.style.display = "none";
                    };                    
                });
            };
        }
    });
}