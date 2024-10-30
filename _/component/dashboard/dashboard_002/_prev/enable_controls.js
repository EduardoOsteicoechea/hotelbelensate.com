export default function 
(
    controlsToDisable
)
{

    for (let index = 0; index < controlsToDisable.length; index++) {
        const element = controlsToDisable[index];
        
        if(element.children.length < 2)
        {
            if(considerExceptions(element, "reservaciones_reservations_dashboard_dashboard_002_departure_filter_container_date_picker"))
            {
                element.disabled = false;
            }
        }
        else{            
            for (let index = 0; index < element.children.length; index++) {
                const element2 = element.children[index];
                if(element2.children.length > 1)
                {
                    for (let index = 0; index < element2.children.length; index++) 
                    {
                        const element3 = element2.children[index];        
                        if(considerExceptions(element3, "reservaciones_reservations_dashboard_dashboard_002_departure_filter_container_date_picker"))
                        {
                            element3.disabled = false
                        }
                    }
                }
                else
                {
                    if(considerExceptions(element2, "reservaciones_reservations_dashboard_dashboard_002_departure_filter_container_date_picker"))
                    {
                        element2.disabled = false
                    }
                }
            }
        }
    }
}

function considerExceptions(element, exceptionElementId)
{
    if(element.id !== exceptionElementId)
    {
        return true
    };

    return  false;
}