// // called from "../_js";

// import manage_dates from "./manage_dates.js";
// import manage_capacities from "./manage_capacities.js";
// import manage_room_types from "./manage_room_types.js";
// import manage_room_prices from "./manage_room_prices.js";
// import manage_room_locations from "./manage_room_locations.js";
// import AppliedFiltersManager from "./AppliedFiltersManager.js";
// // import apply_filters from "./apply_filters.js";

// export default function 
// (
//     filters,
//         filters_title_and_action_container,
//         filters_title_and_action_container_title,
//         dates_filters_container,
//             dates_filters_container_title,
//             arrival_filter_container,
//                 arrival_filter_container_label,
//                 arrival_filter_container_date_picker,
//             departure_filter_container,
//                 departure_filter_container_label,
//                 departure_filter_container_date_picker,
//         capacity_filters_container,
//             capacity_filters_container_title,
//             adults_filter_container,
//             adults_filter_container_label,
//             adults_filter_container_input,
//             children_filter_container,
//             children_filter_container_label,
//             children_filter_container_input,
//             children_filter_container_children_ages_container,
//             children_filter_container_children_ages_container_indication,
//             children_filter_container_children_ages_container_items_container,
//         room_filter_container,
//             room_filter_container_title,
//             room_filter_container_checkboxes_container,
//         location_filter_container,
//             location_filter_container_title,
//             location_filter_container_checkboxes_container,
//         budget_filter_container,
//             budget_filter_container_title,
//             budget_filter_container_checkboxes_container,

//       applied_filters_container,

//       options,
// )
// {
//    const appliedFiltersManager = new AppliedFiltersManager(applied_filters_container);

//    const manage_dates_filter = new manage_dates(
//       dates_filters_container,
//       arrival_filter_container_date_picker,
//       departure_filter_container_date_picker,
//       appliedFiltersManager
//    );

//    //  manage_capacities(
//    //      capacity_filters_container,
//    //          capacity_filters_container_title,
//    //          adults_filter_container,
//    //          adults_filter_container_label,
//    //          adults_filter_container_input,
//    //          children_filter_container,
//    //          children_filter_container_label,
//    //          children_filter_container_input,
//    //          children_filter_container_children_ages_container,
//    //          children_filter_container_children_ages_container_indication,
//    //          children_filter_container_children_ages_container_items_container,
//    //              filter_sumary_container_sumary_container_item_container,
//    //              filter_sumary_container_sumary_container_capacity_container,
//    //          [
//    //              arrival_filter_container_date_picker,
//    //              departure_filter_container_date_picker,
//    //              adults_filter_container_input,
//    //              room_filter_container_checkboxes_container,
//    //              location_filter_container_checkboxes_container,
//    //              budget_filter_container_checkboxes_container,
//    //          ],
//    //      applied_filters_container,
//    //  );

//    //  manage_room_types(
//    //      room_filter_container,
//    //      room_filter_container_title,
//    //      room_filter_container_checkboxes_container,
//    //      filter_sumary_container_sumary_container_type_container,
//    //      applied_filters_container,
//    //  );

//    //  manage_room_prices(
//    //      budget_filter_container,
//    //          budget_filter_container_title,
//    //          budget_filter_container_checkboxes_container,
//    //      filter_sumary_container_sumary_container_price_container,
//    //      applied_filters_container,
//    //  );

//    //  manage_room_locations(
//    //      location_filter_container,
//    //          location_filter_container_title,
//    //          location_filter_container_checkboxes_container,
//    //      filter_sumary_container_sumary_container_location_container,
//    //      applied_filters_container,
//    //  );

//    //  apply_filters(
//    //      applied_filters_container,
//    //      apply_filters_button,
//    //      options,
//    //  );
// }