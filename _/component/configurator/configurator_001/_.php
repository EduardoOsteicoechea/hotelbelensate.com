<?php
class configurator_001
{
   public function __construct(
      string $root_folder,
      string $page_name,
      string $component_id,
   )
   {
      $root_folder = $root_folder;
      $page_name = $page_name;
      $component_class = static::class;
      $component_id = $page_name . "_" . $component_id . "_" . $component_class;

      $html = '
         <div
         id="' . $component_id . "_" . 'outer_container"
         class="' . $component_class . "_" . 'outer_container"
         >
            <script type="module">
               import ' . $component_id . '_class from "../../_/dist/configurator/configurator_001/_.js";                  
               new ' . $component_id . "_" . 'class
               (
                  "' . $root_folder . '",
                  "' . $page_name . '",
                  "' . $component_id . '",
                  "' . $component_class . '",
                  "' . $component_id . "_" . 'outer_container",
               );
            </script>
         </div>
      ';

      echo $html;
   }
}
