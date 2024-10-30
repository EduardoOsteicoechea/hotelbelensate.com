// called from "./_.php";

import manage_filters from "./filters/_manage_filters.js";

export default class
{
    constructor
    (
        root_folder,
		session_array,
        page_name,
        component_id,
        component_class,
        outer_container,
                    
        filters,
            filters_title_and_action_container,
            filters_title_and_action_container_title,
            dates_filters_container,
                dates_filters_container_title,
                arrival_filter_container,
                arrival_filter_container_label,
                arrival_filter_container_date_picker,
                departure_filter_container,
                departure_filter_container_label,
                departure_filter_container_date_picker,
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
            room_filter_container,
                room_filter_container_title,
                room_filter_container_checkboxes_container,
            location_filter_container,
                location_filter_container_title,
                location_filter_container_checkboxes_container,
            budget_filter_container,
                budget_filter_container_title,
                budget_filter_container_checkboxes_container,
            filter_sumary_container,
                filter_sumary_container_title,
                filter_sumary_container_sumary_container,
                    filter_sumary_container_sumary_container_item_container,
                    filter_sumary_container_sumary_container_dates_container,
                    filter_sumary_container_sumary_container_capacity_container,
                    filter_sumary_container_sumary_container_type_container,
                    filter_sumary_container_sumary_container_location_container,
                    filter_sumary_container_sumary_container_price_container,
            apply_filters_button_container,
                apply_filters_button,
                applied_filters_container,


        
                options,
    )
    {
        this.outer_container = document.getElementById(outer_container);
                    
        this.filters = document.getElementById(filters);
            this.filters_title_and_action_container = document.getElementById(filters_title_and_action_container);
            this.filters_title_and_action_container_title = document.getElementById(filters_title_and_action_container_title);
            this.dates_filters_container = document.getElementById(dates_filters_container);
                this.dates_filters_container_title = document.getElementById(dates_filters_container_title);
                this.arrival_filter_container = document.getElementById(arrival_filter_container);
                this.arrival_filter_container_label = document.getElementById(arrival_filter_container_label);
                this.arrival_filter_container_date_picker = document.getElementById(arrival_filter_container_date_picker);
                this.departure_filter_container = document.getElementById(departure_filter_container);
                this.departure_filter_container_label = document.getElementById(departure_filter_container_label);
                this.departure_filter_container_date_picker = document.getElementById(departure_filter_container_date_picker);
            this.capacity_filters_container = document.getElementById(capacity_filters_container);
                this.capacity_filters_container_title = document.getElementById(capacity_filters_container_title);
                this.adults_filter_container = document.getElementById(adults_filter_container);
                this.adults_filter_container_label = document.getElementById(adults_filter_container_label);
                this.adults_filter_container_input = document.getElementById(adults_filter_container_input);
                this.children_filter_container = document.getElementById(children_filter_container);
                this.children_filter_container_label = document.getElementById(children_filter_container_label);
                this.children_filter_container_input = document.getElementById(children_filter_container_input);
                this.children_filter_container_children_ages_container = document.getElementById(children_filter_container_children_ages_container);
                this.children_filter_container_children_ages_container_indication = document.getElementById(children_filter_container_children_ages_container_indication);
                this.children_filter_container_children_ages_container_items_container = document.getElementById(children_filter_container_children_ages_container_items_container);
            this.room_filter_container = document.getElementById(room_filter_container);
                this.room_filter_container_title = document.getElementById(room_filter_container_title);
                this.room_filter_container_checkboxes_container = document.getElementById(room_filter_container_checkboxes_container);
            this.location_filter_container = document.getElementById(location_filter_container);
                this.location_filter_container_title = document.getElementById(location_filter_container_title);
                this.location_filter_container_checkboxes_container = document.getElementById(location_filter_container_checkboxes_container);
            this.budget_filter_container = document.getElementById(budget_filter_container);
                this.budget_filter_container_title = document.getElementById(budget_filter_container_title);
                this.budget_filter_container_checkboxes_container = document.getElementById(budget_filter_container_checkboxes_container);
            this.filter_sumary_container = document.getElementById(filter_sumary_container);
                this.filter_sumary_container_title = document.getElementById(filter_sumary_container_title);
                this.filter_sumary_container_sumary_container = document.getElementById(filter_sumary_container_sumary_container);
                    this.filter_sumary_container_sumary_container_item_container = document.getElementById(filter_sumary_container_sumary_container_item_container);
                    this.filter_sumary_container_sumary_container_dates_container = document.getElementById(filter_sumary_container_sumary_container_dates_container);
                    this.filter_sumary_container_sumary_container_capacity_container = document.getElementById(filter_sumary_container_sumary_container_capacity_container);
                    this.filter_sumary_container_sumary_container_type_container = document.getElementById(filter_sumary_container_sumary_container_type_container);
                    this.filter_sumary_container_sumary_container_location_container = document.getElementById(filter_sumary_container_sumary_container_location_container);
                    this.filter_sumary_container_sumary_container_price_container = document.getElementById(filter_sumary_container_sumary_container_price_container);
            this.apply_filters_button_container = document.getElementById(apply_filters_button_container);
                this.apply_filters_button = document.getElementById(apply_filters_button);
                this.applied_filters_container = document.getElementById(applied_filters_container);



        this.options = document.getElementById(options);

        manage_filters
        (
            this.filters,
                this.filters_title_and_action_container,
                this.filters_title_and_action_container_title,
                this.dates_filters_container,
                    this.dates_filters_container_title,
                    this.arrival_filter_container,
                    this.arrival_filter_container_label,
                    this.arrival_filter_container_date_picker,
                    this.departure_filter_container,
                    this.departure_filter_container_label,
                    this.departure_filter_container_date_picker,
                this.capacity_filters_container,
                    this.capacity_filters_container_title,
                    this.adults_filter_container,
                    this.adults_filter_container_label,
                    this.adults_filter_container_input,
                    this.children_filter_container,
                    this.children_filter_container_label,
                    this.children_filter_container_input,
                    this.children_filter_container_children_ages_container,
                    this.children_filter_container_children_ages_container_indication,
                    this.children_filter_container_children_ages_container_items_container,
                this.room_filter_container,
                    this.room_filter_container_title,
                    this.room_filter_container_checkboxes_container,
                this.location_filter_container,
                    this.location_filter_container_title,
                    this.location_filter_container_checkboxes_container,
                this.budget_filter_container,
                    this.budget_filter_container_title,
                    this.budget_filter_container_checkboxes_container,
                this.filter_sumary_container,
                    this.filter_sumary_container_title,
                    this.filter_sumary_container_sumary_container,
                        this.filter_sumary_container_sumary_container_item_container,
                        this.filter_sumary_container_sumary_container_dates_container,
                        this.filter_sumary_container_sumary_container_capacity_container,
                        this.filter_sumary_container_sumary_container_type_container,
                        this.filter_sumary_container_sumary_container_location_container,
                        this.filter_sumary_container_sumary_container_price_container,
                this.apply_filters_button_container,
                    this.apply_filters_button,
                    this.applied_filters_container,


            this.options,
        );
    };
}