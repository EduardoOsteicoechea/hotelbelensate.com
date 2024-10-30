<?php
class dashboard_003
{
    public function __construct
    (
        string $rootFolder,
        array $session_array,
        string $page_name,
        string $component_id,
    )
    {
        include "data.php";

        $component_data = $page_data[$component_id];
        $rootFolder = $rootFolder;
        $session_array = $session_array;
        $page_name = $page_name;
        $component_class = static::class;
        $component_id = $page_name . "_" . $component_id . "_" . $component_class;
        $component_folder_path = $rootFolder .  "_/component/".explode("_", $component_class)[0]."/" . $component_class . "/";
        $javascript_class_path = $component_folder_path . "_.js";

        $filters_data = json_decode(file_get_contents($component_folder_path . "data/filter_data.json"), true);
        $bookable_monts = $filters_data["bookable_months"];
        $rooms_locations = $filters_data["rooms_locations"];
        $children_max_age = $filters_data["children_max_age"];
        $rooms_capacities = $filters_data["rooms_capacities"];
        $rooms_names = $filters_data["rooms_names"];
        $rooms_types = $filters_data["rooms_types"];
        $rooms_prices = $filters_data["rooms_prices"];
        $rooms_price_spots = $filters_data["rooms_price_spots"];
        $rooms_data = $filters_data["rooms_data"]; 

        // foreach ($rooms_data as $key => $value) {
        //     print_r($key);
        //     echo "<br><br>";
        //     foreach ($value as $key => $value) {
        //         print_r($key);
        //         echo "<br>";
        //     };
        //     echo "<br><br>";
        // };
        // print_r($jsonString);
        

        
        

        
        


        $room_filter_container_checkboxes_items_markup ='';
        for ($i=0; $i < count($rooms_types); $i++) { 
            $data = $rooms_types[$i];
            $current_item_id_number = $i + 1;
            $room_filter_container_checkboxes_items_markup .= '
            <div
            id="'. $component_id . "_" .'room_filter_container_checkboxes_items_container_'.$current_item_id_number.'"
            class="'. $component_class . "_" .'room_filter_container_checkboxes_items_container"
            >
                <input type="checkbox"
                id="'. $component_id . "_" .'room_filter_container_checkboxes_container_checkbox_'.$current_item_id_number.'"
                class="'. $component_class . "_" .'room_filter_container_checkboxes_container_checkbox"
                >
                <label
                id="'. $component_id . "_" .'room_filter_container_checkboxes_container_label_'.$current_item_id_number.'"
                class="'. $component_class . "_" .'room_filter_container_checkboxes_container_label"
                for="'. $component_id . "_" .'room_filter_container_checkboxes_container_checkbox_'.$current_item_id_number.'"
                >
                    '.$data.'
                </label>
            </div>
            ';
        };
        
        $location_filter_container_checkboxes_items_markup ="";
        for ($i=0; $i < count($rooms_locations); $i++) { 
            $data = $rooms_locations[$i];
            $current_item_id_number = $i + 1;
            $location_filter_container_checkboxes_items_markup .= '            
            <div
            id="'. $component_id . "_" .'location_filter_container_checkboxes_items_container_'.$current_item_id_number.'"
            class="'. $component_class . "_" .'room_filter_container_checkboxes_items_container"
            >
                <input type="checkbox"
                id="'. $component_id . "_" .'location_filter_container_checkboxes_container_checkbox'.$current_item_id_number.'"
                class="'. $component_class . "_" .'location_filter_container_checkboxes_container_checkbox"
                >
                <label
                id="'. $component_id . "_" .'location_filter_container_checkboxes_container_label'.$current_item_id_number.'"
                class="'. $component_class . "_" .'location_filter_container_checkboxes_container_label"
                for="'. $component_id . "_" .'location_filter_container_checkboxes_container_checkbox'.$current_item_id_number.'"
                >
                    '.$data.'
                </label>
            </div>
            ';
        };
        
        $budget_filter_container_checkboxes_items_markup ="";
        for ($i=0; $i < count($rooms_price_spots); $i++) { 
            $data = $rooms_price_spots[$i];
            $current_item_id_number = $i + 1;
            $budget_filter_container_checkboxes_items_markup .= '            
            <div
            id="'. $component_id . "_" .'lbudget_filter_container_checkboxes_items_container_'.$current_item_id_number.'"
            class="'. $component_class . "_" .'room_filter_container_checkboxes_items_container"
            >
                <input type="checkbox"
                id="'. $component_id . "_" .'budget_filter_container_checkboxes_container_checkbox'.$current_item_id_number.'"
                class="'. $component_class . "_" .'budget_filter_container_checkboxes_container_checkbox"
                >
                <label
                id="'. $component_id . "_" .'budget_filter_container_checkboxes_container_label'.$current_item_id_number.'"
                class="'. $component_class . "_" .'budget_filter_container_checkboxes_container_label"
                for="'. $component_id . "_" .'budget_filter_container_checkboxes_container_checkbox'.$current_item_id_number.'"
                >
                    '.$data.'
                </label>
            </div>
            ';
        };
 

        /////////////////////////////////////
        /////////////////////////////////////
        // outer_container
        /////////////////////////////////////
        /////////////////////////////////////

        $outer_container_start = '
            <div
            id="'. $component_id . "_" .'outer_container"
            class="'. $component_class . "_" .'outer_container"
            >
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // filter
        /////////////////////////////////////
        /////////////////////////////////////

        $filter = '
            <div
            id="'. $component_id . "_" .'filters"
            class="'. $component_class . "_" .'filters"
            >

                <div
                id="'. $component_id . "_" .'filters_title_and_action_container"
                class="'. $component_class . "_" .'filters_title_and_action_container"
                >
                    <h2
                    id="'. $component_id . "_" .'filters_title_and_action_container_title"
                    class="'. $component_class . "_" .'filters_title_and_action_container_title"
                    >
                        Filtrar habitaciones
                    </h2> 
                </div>    

                    
                <div
                id="'. $component_id . "_" .'dates_filters_container"
                class="'. $component_class . "_" .'dates_filters_container '. $component_class . "_" .'filter_container"
                >
                    <h3
                    id="'. $component_id . "_" .'dates_filters_container_title"
                    class="'. $component_class . "_" .'dates_filters_container_title"
                    >
                        Fecha
                    </h3>

                    <div
                    id="'. $component_id . "_" .'arrival_filter_container"
                    class="'. $component_class . "_" .'arrival_filter_container"
                    >
                        <label
                        id="'. $component_id . "_" .'arrival_filter_container_label"
                        class="'. $component_class . "_" .'arrival_filter_container_label"
                        >
                            '.$component_data["arrival_filter_container_label"].'
                        </label>
                        <input type="date"
                        id="'. $component_id . "_" .'arrival_filter_container_date_picker"
                        class="'. $component_class . "_" .'arrival_filter_container_date_picker"
                        >
                    </div>

                    <div
                    id="'. $component_id . "_" .'departure_filter_container"
                    class="'. $component_class . "_" .'departure_filter_container"
                    >
                        <label
                        id="'. $component_id . "_" .'departure_filter_container_label"
                        class="'. $component_class . "_" .'departure_filter_container_label"
                        >
                            '.$component_data["departure_filter_container_label"].'
                        </label>
                        <input type="date"
                        id="'. $component_id . "_" .'departure_filter_container_date_picker"
                        class="'. $component_class . "_" .'departure_filter_container_date_picker"
                        disabled="true"
                        >
                    </div>
                </div>
                    

                <div
                id="'. $component_id . "_" .'capacity_filters_container"
                class="'. $component_class . "_" .'capacity_filters_container '. $component_class . "_" .'filter_container"
                >
                    <h3
                    id="'. $component_id . "_" .'capacity_filters_container_title"
                    class="'. $component_class . "_" .'capacity_filters_container_title"
                    >
                        Capacidad
                    </h3>

                    <div
                    id="'. $component_id . "_" .'adults_filter_container"
                    class="'. $component_class . "_" .'adults_filter_container"
                    >
                        <label
                        id="'. $component_id . "_" .'adults_filter_container_label"
                        class="'. $component_class . "_" .'adults_filter_container_label"
                        >
                            '.$component_data["adults_filter_container_label"].'
                        </label>
                        <input type="number"
                        id="'. $component_id . "_" .'adults_filter_container_input"
                        class="'. $component_class . "_" .'adults_filter_container_input"
                        >
                    </div>

                    <div
                    id="'. $component_id . "_" .'children_filter_container"
                    class="'. $component_class . "_" .'children_filter_container"
                    >
                        <label
                        id="'. $component_id . "_" .'children_filter_container_label"
                        class="'. $component_class . "_" .'children_filter_container_label"
                        >
                            '.$component_data["children_filter_container_label"].'
                        </label>
                        <input type="number"
                        id="'. $component_id . "_" .'children_filter_container_input"
                        class="'. $component_class . "_" .'children_filter_container_input"
                        disabled="true"
                        >
                    </div>

                    <div
                    id="'. $component_id . "_" .'children_filter_container_children_ages_container"
                    class="'. $component_class . "_" .'children_filter_container_children_ages_container"
                    >
                        <p
                        id="'. $component_id . "_" .'children_filter_container_children_ages_container_indication"
                        class="'. $component_class . "_" .'children_filter_container_children_ages_container_indication"
                        ></p>

                        <div
                        id="'. $component_id . "_" .'children_filter_container_children_ages_container_items_container"
                        class="'. $component_class . "_" .'children_filter_container_children_ages_container_items_container"
                        ></div>
                    </div>
                </div>

                
                <div
                id="'. $component_id . "_" .'room_filter_container"
                class="'. $component_class . "_" .'room_filter_container '. $component_class . "_" .'filter_container"
                >
                    <h3
                    id="'. $component_id . "_" .'room_filter_container_title"
                    class="'. $component_class . "_" .'room_filter_container_title"
                    >
                        Tipo
                    </h3>
                    
                    <div
                    id="'. $component_id . "_" .'room_filter_container_checkboxes_container"
                    class="'. $component_class . "_" .'room_filter_container_checkboxes_container"
                    >
                        '.$room_filter_container_checkboxes_items_markup.'
                    </div>
                </div>

                
                <div
                id="'. $component_id . "_" .'budget_filter_container"
                class="'. $component_class . "_" .'budget_filter_container '. $component_class . "_" .'filter_container"
                >
                    <h3
                    id="'. $component_id . "_" .'budget_filter_container_title"
                    class="'. $component_class . "_" .'budget_filter_container_title"
                    >
                        Precio
                    </h3>

                    <div
                    id="'. $component_id . "_" .'budget_filter_container_checkboxes_container"
                    class="'. $component_class . "_" .'budget_filter_container_checkboxes_container"
                    >
                        '.$budget_filter_container_checkboxes_items_markup.'
                    </div>
                </div>

                    
                <div
                id="'. $component_id . "_" .'location_filter_container"
                class="'. $component_class . "_" .'location_filter_container '. $component_class . "_" .'filter_container"
                >
                    <h3
                    id="'. $component_id . "_" .'location_filter_container_title"
                    class="'. $component_class . "_" .'location_filter_container_title"
                    >
                        Ubicación
                    </h3>
                    
                    <div
                    id="'. $component_id . "_" .'location_filter_container_checkboxes_container"
                    class="'. $component_class . "_" .'location_filter_container_checkboxes_container"
                    >
                        '.$location_filter_container_checkboxes_items_markup.'
                    </div>
                </div>              
          

                <div
                id="'. $component_id . "_" .'applied_filters_container"
                class="'. $component_class . "_" .'applied_filters_container"
                >                  
                </div>          
            </div>          
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // options
        /////////////////////////////////////
        /////////////////////////////////////

        $options = '
            <div
            id="'. $component_id . "_" .'options"
            class="'. $component_class . "_" .'options"
            >

            
            </div>
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // order_tray
        /////////////////////////////////////
        /////////////////////////////////////

        $order_tray = '
            <div
            id="'. $component_id . "_" .'order_tray"
            class="'. $component_class . "_" .'order_tray"
            >
    
            
            </div>
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // order_reviewer
        /////////////////////////////////////
        /////////////////////////////////////

        $order_sender = '
            <div
            id="'. $component_id . "_" .'order_reviewer"
            class="'. $component_class . "_" .'order_reviewer"
            >
     
            
            </div>
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // order_sender
        /////////////////////////////////////
        /////////////////////////////////////

        $order_sender = '
            <div
            id="'. $component_id . "_" .'order_sender"
            class="'. $component_class . "_" .'order_sender"
            >
   
            
            </div>
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // room_viewer
        /////////////////////////////////////
        /////////////////////////////////////

        $room_viewer = '
            <div
            id="'. $component_id . "_" .'image_viewer"
            class="'. $component_class . "_" .'image_viewer"
            >

            
            </div>
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // date_picker
        /////////////////////////////////////
        /////////////////////////////////////

        $date_picker = '
            <div
            id="'. $component_id . "_" .'date_picker"
            class="'. $component_class . "_" .'date_picker"
            >

            
            </div>
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // main_javascript_class
        /////////////////////////////////////
        /////////////////////////////////////

        $javascript = '
            <script type="module">
				import '. $component_id. "_" . 'class from "'. $javascript_class_path .'"
				new '. $component_id. "_" . 'class
                (
					"'.$rootFolder.'",
					'.json_encode($session_array).',
					"'.$page_name.'",
					"'.$component_id.'",
					"'.$component_class.'",

                    "'. $component_id . "_" .'outer_container",

                    "'. $component_id . "_" .'filters",

                        "'. $component_id . "_" .'filters_title_and_action_container",
                        "   '. $component_id . "_" .'filters_title_and_action_container_title",

                        "'. $component_id . "_" .'dates_filters_container",
                            "'. $component_id . "_" .'dates_filters_container_title",
                            "'. $component_id . "_" .'arrival_filter_container",
                            "'. $component_id . "_" .'arrival_filter_container_label",
                            "'. $component_id . "_" .'arrival_filter_container_date_picker",
                            "'. $component_id . "_" .'departure_filter_container",
                            "'. $component_id . "_" .'departure_filter_container_label",
                            "'. $component_id . "_" .'departure_filter_container_date_picker",

                        "'. $component_id . "_" .'capacity_filters_container",
                            "'. $component_id . "_" .'capacity_filters_container_title",
                            "'. $component_id . "_" .'adults_filter_container",
                            "'. $component_id . "_" .'adults_filter_container_label",
                            "'. $component_id . "_" .'adults_filter_container_input",
                            "'. $component_id . "_" .'children_filter_container",
                            "'. $component_id . "_" .'children_filter_container_label",
                            "'. $component_id . "_" .'children_filter_container_input",
                            "'. $component_id . "_" .'children_filter_container_children_ages_container",
                            "'. $component_id . "_" .'children_filter_container_children_ages_container_indication",
                            "'. $component_id . "_" .'children_filter_container_children_ages_container_items_container",

                        "'. $component_id . "_" .'room_filter_container",
                            "'. $component_id . "_" .'room_filter_container_title",
                            "'. $component_id . "_" .'room_filter_container_checkboxes_container",

                        "'. $component_id . "_" .'budget_filter_container",
                            "'. $component_id . "_" .'budget_filter_container_title",
                            "'. $component_id . "_" .'budget_filter_container_checkboxes_container",
                            
                        "'. $component_id . "_" .'location_filter_container",
                            "'. $component_id . "_" .'location_filter_container_title",
                            "'. $component_id . "_" .'location_filter_container_checkboxes_container",

                        "'. $component_id . "_" .'applied_filters_container",

                        "'. $component_id . "_" .'options",
				);
			</script>
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // component end
        /////////////////////////////////////
        /////////////////////////////////////

        $outer_container_end = '
            </div>
        ';

        /////////////////////////////////////
        /////////////////////////////////////
        // print page order
        /////////////////////////////////////
        /////////////////////////////////////

        $html = "";
        $html .= $outer_container_start;
        $html .= $filter;
        $html .= $options;
        $html .= $order_tray;
        $html .= $order_sender;
        $html .= $room_viewer;
        $html .= $date_picker;
        $html .= $javascript;
        $html .= $outer_container_end;
        echo $html;
    }    
}?>