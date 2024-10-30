<?php
class button_001{
    public function __construct
    (
        $root_folder, 
        $sesion_array,
        $page_name,
        $component_id,
        $href_string,
    )
    {
        $this->root_folder = $root_folder;
        $this->sesion_array = $sesion_array;	
        $this->page_name = $page_name;
        $this->component_class = static::class;
        $this->component_id = $page_name . "_" . $component_id . "_" . $this->component_class;
        $this->component_folder_path = $this->root_folder .  '_/component/'.explode("_",static::class)[0].'/' . $this->component_class . "/";
        $this->javascript_class_path = $this->component_folder_path . "_.js";
        $this->images_folder = $this->root_folder . "_/media/image/";
        $this->href_string = $href_string;

        echo '
        <div
        id="'. $this->component_id . "_" .'outer_container"
        class="'.$this->component_class.'"
        >
            <div
            id="'. $this->component_id . "_" .'top_scroll_button"
            class="
                '.$this->component_class. "_" .'top_scroll_button 
                '.$this->component_class. "_" .'scroll_button
            "
            >
                <div
                id="'. $this->component_id . "_" .'top_scroll_button_bar_1"
                class="
                    '.$this->component_class. "_" .'top_scroll_button_bar_1 
                    '.$this->component_class. "_" .'scroll_button_bar
                "
                ></div>
                <div
                id="'. $this->component_id . "_" .'top_scroll_button_bar_2"
                class="
                    '.$this->component_class. "_" .'top_scroll_button_bar_2 
                    '.$this->component_class. "_" .'scroll_button_bar
                "
                ></div>
            </div>

            <a
            id="'. $this->component_id . "_" . $this->component_class . "_" .'logo_anchor"
            class="'.$this->component_class. "_" .'logo_anchor"
            href="'.$this->href_string.'"
            >
                <img
                id="'. $this->component_id . "_" . $this->component_class. "_" .'logo_anchor_image"
                class="'. $this->component_class. "_" .'logo_anchor_image"
                src="'.$this->root_folder.'_/media/image/brand/WhatsApp_Monochrome_logo.png"
                alt="Logo del Hotel Belensate"
                height="100%"
                >
            </a>

            <div
            id="'. $this->component_id . "_" .'bottom_scroll_button"
            class="
            '.$this->component_class. "_" .'bottom_scroll_button '.$this->component_class. "_" .'scroll_button
            "
            >
                <div
                id="'. $this->component_id . "_" .'bottom_scroll_button_bar_1"
                class="
                    '.$this->component_class. "_" .'bottom_scroll_button_bar_1 
                    '.$this->component_class. "_" .'scroll_button_bar
                "
                ></div>
                <div
                id="'. $this->component_id . "_" .'bottom_scroll_button_bar_2"
                class="
                    '.$this->component_class. "_" .'bottom_scroll_button_bar_2 
                    '.$this->component_class. "_" .'scroll_button_bar
                "
                ></div>
            </div>

            <script type="module">
				import '. $this->component_id . "_" . 'class from "'.$this->javascript_class_path.'";
                
				new '. $this->component_id . "_" . 'class
                (
                    "'. $this->component_id . "_" .'top_scroll_button",
                    "'. $this->component_id . "_" .'bottom_scroll_button",
				);
			</script>
        </div>
';}}?>