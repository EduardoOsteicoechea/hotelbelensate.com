// export default function
// (
//     applied_filters_container,
//     apply_filters_button,
//     options, 
// )
// {
//     apply_filters_button.addEventListener("pointerup",()=>
//     {
//         /////////////////////////////////////
//         /// Clear container to add updated filters values
//         /////////////////////////////////////

//         // applied_filters_container.innerHTML = "";

//         /////////////////////////////////////
//         /// Get the filters containers
//         /////////////////////////////////////

//         const dates_values_container = document.getElementById("dates_values_container");
//         const capacities_values_container = document.getElementById("capacities_values_container");
//         const types_values_container = document.getElementById("types_values_container");
//         const prices_values_container = document.getElementById("price_values_container");
//         const locations_values_container = document.getElementById("location_values_container");
//         const aa = document.createElement("div");
//         const bb = document.createElement("h2");
//         bb.innerHTML = "Estas son las opciones seleccionadas";
//         aa.appendChild(bb);

//         /////////////////////////////////////
//         /// Extract and store filter values
//         /////////////////////////////////////

//         let filter_values = {
//             "dates":[],
//             "capacities":[],
//             "types":[],
//             "prices":[],
//             "locations":[],
//         };

//         function extractInnerHTML(container, property) 
//         {
//             if(container !== null)
//             {
//                 const children = container.children;
//                 for (let i = 0; i < children.length; i++) 
//                 {
//                     const value = children[i].innerHTML.trim();
//                     filter_values[property].push(value);
//                 }; 
//                 aa.appendChild(container);
//             };
//         };
        
//         extractInnerHTML(dates_values_container, "dates");
//         extractInnerHTML(capacities_values_container, "capacities");
//         extractInnerHTML(types_values_container, "types");
//         extractInnerHTML(prices_values_container, "prices");
//         extractInnerHTML(locations_values_container, "locations");
        
//         console.log(filter_values);

//         /////////////////////////////////////
//         /// Generate and append applied filters markup
//         /////////////////////////////////////

//         options.appendChild(aa);
//     });
// }