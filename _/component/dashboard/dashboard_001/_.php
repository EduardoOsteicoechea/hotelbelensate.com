<?php
	// ONLY USE ONE OF THIS COMPONENTS BY PAGE: It has fixed values, so it would mix functionalities between instances when instantiated more than once.
	// Called from ../../../reservar/index.php
	class dashboard_001
	{
		public $id;
		public $component_name;
		public $root_folder;
		public $component_folder;
		public $session;
		public $data;
		public $component_id;
		public $component_class;
		public $search_bar_id;
		public $search_bar_class;
		public $options_id;
		public $options_class;
		public $order_id;
		public $order_class;
		public $viewer_360_id;
		public $viewer_360_class;
		public $viewer_2d_id;
		public $viewer_2d_class;
		public $css_file_name_array;

		public function __construct
		(
			$id,
			$root_folder,
			$session
		)
		{
			include      "data/data.php";
			include_once "markup/search_bar.php";
			include_once "markup/options.php";
			include_once "markup/order.php";
			include_once "markup/viewer_2d.php";
			include_once "markup/styles.php";
			include_once "markup/javascript.php";

			$current_file_name = basename(__FILE__, '.php');

			$this->id = $id;
			$this->component_name =      "dashboard_001";
			$this->root_folder =         $root_folder;
			$this->component_folder =    $this->root_folder . '_/component/dashboard/_/';
			$this->session =             $session;
			$this->data =                $data;

			$this->component_id =        $this->id . '_' . $this->component_name;
			$this->search_bar_id =       $this->id . '_' . $this->component_name . '_search_bar';
			$this->search_bar_class =    $this->component_name . '_search_bar';
			$this->options_id =          $this->id . '_' . $this->component_name . '_options';
			$this->options_class =       $this->component_name . '_options';
			$this->order_id =            $this->id . '_' . $this->component_name . '_order';
			$this->order_class =         $this->component_name . '_order';
			$this->viewer_360_id =       $this->id . '_' . $this->component_name . '_viewer_360';
			$this->viewer_360_class =    $this->component_name . '_viewer_360';
			$this->viewer_2d_id =        $this->id . '_' . $this->component_name . '_viewer_2d';
			$this->viewer_2d_class =     $this->component_name . '_viewer_2d';

			$this->css_file_name_array = [
				"layout",
				"search_bar",
				"options",
				"options_card",
				"options_card_image_container",
				"options_card_description_card",
				"order",
				"viewer_2d",
				"viewer_2d_carrousel",
				"option_date_picker",
				"selected_room_order_container",
				"children_age_container"
			];

			$search_bar =  new search_bar ( $this->search_bar_id,       $this->search_bar_class, $this->root_folder  );
			$options =   	new options    ( $this->options_id,          $this->options_class                         );
			$order = 	   new order      ( $this->order_id,            $this->order_class, $this->root_folder       );
			$viewer_2d = 	new viewer_2d  ( $this->viewer_2d_id,        $this->viewer_2d_class                       );
			$styles = 	   new styles     ( $this->css_file_name_array, $this->component_id, $this->component_folder );
			$javascript = 	new javascript ( 
				$this->id,
				$this->component_name,
				$this->root_folder,
				$this->component_folder,
				$this->session,
				$this->data,
				$this->component_id,
				$this->search_bar_id,
				$this->options_id,
				$this->order_id,
				$this->viewer_2d_id
			);

			echo '
				<div
				id="'. $this->id . '_' . $this->component_name .'"
				class="'.$this->component_name.'"
				>'. 
					$search_bar  ->  get_markup_string().
					$options     ->  get_markup_string().
					$order       ->  get_markup_string().
					$viewer_2d   ->  get_markup_string().
					$styles      ->  get_markup_string().
					$javascript  ->  get_markup_string()
				.'</div>
			';
		}
	}
?>