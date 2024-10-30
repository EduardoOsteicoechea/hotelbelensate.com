<?php
class base_001
{
    public function __construct
    (
        string $root_folder,
        array $session_array,
        string $page_name,
        string $component_id,
    )
    {
        include "data.php";

        $component_data = $page_data[$component_id];
        $root_folder = $root_folder;
        $session_array = $session_array;
        $page_name = $page_name;
        $component_class = static::class;
        $component_id = $page_name . "_" . $component_id . "_" . $component_class;
        $component_folder_path = $root_folder .  "_/component/".explode("_", $component_class)[0]."/" . $component_class . "/";
        $javascript_class_path = $component_folder_path . "_.js"; 

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
        // main_javascript_class
        /////////////////////////////////////
        /////////////////////////////////////

         $javascript = '
            <script type="module">
               import '. $component_id. "_" . 'class from "'. $javascript_class_path .'"
               new '. $component_id. "_" . 'class
               (
               "'.$root_folder.'",
               '.json_encode($session_array).',
               "'.$page_name.'",
               "'.$component_id.'",
               "'.$component_class.'",
               "'. $component_id . "_" .'outer_container",


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
        
        $html .= $javascript;
        $html .= $outer_container_end;
        echo $html;
    }    
}?>