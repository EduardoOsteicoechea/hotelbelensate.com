export default function
(
    input,
    digits
)
{
    // console.log(input.value.length);
    
    // limit input to specified digit quantity
    if(input.value.length > digits)
    {
        const original_value = input.value;
        console.log(original_value);
        input.value = input.value.substring(0, digits + 1);
    };
}