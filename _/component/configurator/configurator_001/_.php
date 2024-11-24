<?php
class configurator_001
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
        // authenticator
        /////////////////////////////////////
        /////////////////////////////////////

        $authenticator = '
            <div
            id="'. $component_id . "_" .'authenticator_container"
            class="'. $component_class . "_" .'authenticator_container"
            >
            
               <h2>
                  Acceda para gestionar
               </h2>

               <div 
               id="'. $component_id . "_" .'username_input_container"
               class="'. $component_class . "_" .'username_input_container"
               >
                  <label 
                  id="'. $component_id . "_" .'username_input_label"
                  class="'. $component_class . "_" .'username_input_label"
                  >
                     Correo
                  </label>
                  <input 
                  id="'. $component_id . "_" .'username_input"
                  class="'. $component_class . "_" .'username_input"
                  type="password" 
                  name="username"
                  >
               </div>
               

               <div 
               id="'. $component_id . "_" .'password_input_container"
               class="'. $component_class . "_" .'password_input_container"
               >
                  <label 
                  id="'. $component_id . "_" .'password_input_label"
                  class="'. $component_class . "_" .'password_input_label"
                  >
                     Contraseña
                  </label>
                  <input 
                  id="'. $component_id . "_" .'password_input_input"
                  class="'. $component_class . "_" .'password_input_input"
                  type="password" 
                  name="password"
                  >
               </div>

               <button 
               id="'. $component_id . "_" .'access_button"
               class="'. $component_class . "_" .'access_button"
               >
                  Acceder
               </button>

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
					"'.$root_folder.'",
					'.json_encode($session_array).',
					"'.$page_name.'",
					"'.$component_id.'",
					"'.$component_class.'",
               "'. $component_id . "_" .'outer_container",

               "'.$component_id . "_" .'authenticator_container",
               "'.$component_id . "_" .'username_input_container",
               "'.$component_id . "_" .'username_input_label",
               "'.$component_id . "_" .'username_input",
               "'.$component_id . "_" .'password_input_container",
               "'.$component_id . "_" .'password_input_label",
               "'.$component_id . "_" .'password_input_input",
               "'.$component_id . "_" .'access_button",
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
        $html .= $authenticator;
        $html .= $javascript;
        $html .= $outer_container_end;
        echo $html;
    }    
}?>