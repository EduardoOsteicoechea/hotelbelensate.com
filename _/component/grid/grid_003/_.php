<?php
    class grid_003{
        public function __construct
        (   
            string $root_folder, 
            array $sesion_array,
            string $page_name,
            string $component_id,
            string $component_class,
            string $data_path,
        )
        {
            include $root_folder . "_/" . "component/card/card_005/_.php";
            include $root_folder . $data_path;
        
            $gallery_grid_data = get_gallery_grid_data();

            // print_r($gallery_grid_data);
            
            $cards = "";
            $counter = 1;
            foreach ($gallery_grid_data as $card_data) 
            {
                $card_005 = new card_005(
                    $root_folder, 
                    $sesion_array,
                    $page_name,
                    $component_id,
                    $component_class,
                    "card_005",
                    $card_data,
                    $counter,
                );
                $cards .= $card_005->html();
                $counter++;
            };

            echo '
                <div
                id="'. $page_name . "_" . $component_id . "_" . $component_class. "_" .'outer_container"
                class="'.$component_class. "_" .'outer_container"
                >
                    '.$cards.'
                    <script>
                        
                    </script>
                </div>
            ';
        }
    }
?>