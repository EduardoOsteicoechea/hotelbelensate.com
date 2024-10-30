export default function
(
    adult_capacity_value, 
    children_capacity_value
)
{

    let adults = adult_capacity_value;
    let children = 0;
    for (let index = 0; index < children_capacity_value.length; index++) 
    {
        const element = children_capacity_value[index];
        if(element.value <= 11)
        {
            children++;
        }
        else
        {
            adults++
        };
    }
    return [adults, children];
}