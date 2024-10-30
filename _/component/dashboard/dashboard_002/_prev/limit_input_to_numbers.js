export default function
(
    input,
    limit,
    non_zero = false
)
{
    // limit input to specified number
    const allowed_values = [...Array(limit)].map((_, i) => i).map(String);    
    if(!allowed_values.includes(input.value))
    {
        input.value = input.value.substring(0, input.value.length - 1)
    };

    // Is required, prevent input from accepting "0" as value
    if(non_zero)
    {
        // limit input to non zero
        if(input.value === "0")
        {
            input.value = ""
        };  
    };
}