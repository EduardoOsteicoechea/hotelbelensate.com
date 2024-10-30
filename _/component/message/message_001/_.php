<?php
class message_001 {
public function __construct( 
	string $root_folder, 
	array $sesion_array,
	string $page_name,
	string $component_id,
	string $component_class,
	string $card1_title,
	string $card1_message,
	string $card1_button_message,
	string $card1_href,
	string $card2_title,
	string $card2_message,
	string $card2_button_message,
	string $card3_title,
	string $card3_message,
	string $card3_button_message,
)
{
	$this->root_folder = $root_folder;
	$this->sesion_array = $sesion_array;
	$this->page_name = $page_name;
	$this->component_id = $component_id;
	$this->component_class = $component_class;
	$this->card1_title = $card1_title;
	$this->card1_message = $card1_message;
	$this->card1_button_message = $card1_button_message;
	$this->card1_href = $card1_href;
	$this->card2_title = $card2_title;
	$this->card2_message = $card2_message;
	$this->card2_button_message = $card2_button_message;
	$this->card3_title = $card3_title;
	$this->card3_message = $card3_message;
	$this->card3_button_message = $card3_button_message;

	echo '
		<div
        id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'outer_container"
        class="'.$this->component_class. "_" .'outer_container"
		>
			<div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_1_container"
            class="'.$this->component_class. "_" .'card_1_container '.$this->component_class. "_" .'card_container"
            >
                <h2
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_1_container_title"
                class="'.$this->component_class. "_" .'card_1_container_title '.$this->component_class. "_" .'card_container_title"
                >
                    '.$this->card1_title.'
                </h2>
                <p
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_1_container_message"
                class="'.$this->component_class. "_" .'card_1_container_message '.$this->component_class. "_" .'card_container_message"
                >
                    '.$this->card1_message.'
                </p>
                <div
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_container_button_container"
                class="'.$this->component_class. "_" .'card_1_container '.$this->component_class. "_" .'card_container_button_container"
                >
                    <a
                    id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_1_container_button"
                    class="'.$this->component_class. "_" .'card_1_container_button '.$this->component_class. "_" .'card_container_button"
                    href="'. $this->card1_href .'"
                    >
                        '.$this->card1_button_message.'
                    </a>
                </div>
            </div>

			<div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_2_container"
            class="'.$this->component_class. "_" .'card_2_container '.$this->component_class. "_" .'card_container"
            >
                <h2
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_2_container_title"
                class="'.$this->component_class. "_" .'card_2_container_title '.$this->component_class. "_" .'card_container_title"
                >
                    '.$this->card2_title.'
                </h2>
                <p
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_2_container_message"
                class="'.$this->component_class. "_" .'card_2_container_message '.$this->component_class. "_" .'card_container_message"
                >
                    '.$this->card2_message.'
                </p>
                <div
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_container_button_container"
                class="'.$this->component_class. "_" .'card_2_container '.$this->component_class. "_" .'card_container_button_container"
                >
                    <p
                    id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_2_container_button"
                    class="'.$this->component_class. "_" .'card_2_container_button '.$this->component_class. "_" .'card_container_button"
                    >
                        '.$this->card2_button_message.'
                    </p>
                </div>
            </div>

			<div
            id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_3_container"
            class="'.$this->component_class. "_" .'card_3_container '.$this->component_class. "_" .'card_container"
            >
                <h2
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_3_container_title"
                class="'.$this->component_class. "_" .'card_3_container_title '.$this->component_class. "_" .'card_container_title"
                >
                    '.$this->card3_title.'
                </h2>
                <p
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_3_container_message"
                class="'.$this->component_class. "_" .'card_3_container_message '.$this->component_class. "_" .'card_container_message"
                >
                    '.$this->card3_message.'
                </p>
                <div
                id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_container_button_container"
                class="'.$this->component_class. "_" .'card_3_container '.$this->component_class. "_" .'card_container_button_container"
                >
                    <p
                    id="'. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  "_" .'card_3_container_button"
                    class="'.$this->component_class. "_" .'card_3_container_button '.$this->component_class. "_" .'card_container_button"
                    >
                        '.$this->card3_button_message.'
                    </p>
                </div>
            </div>
			

			<script type="module">
				import '. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  '_class from "'.$this->root_folder.'_/component/card/card_005/_.js"
				new '. $this->page_name . "_" . $this->component_id . "_" . $this->component_class .  '_class(
					"'.$this->root_folder.'",
					'.json_encode($this->sesion_array).',
					"'.$this->page_name.'",
					"'.$this->component_id.'",
					"'.$this->component_class.'",
				);
			</script>
		</div>
	';
}


}?>