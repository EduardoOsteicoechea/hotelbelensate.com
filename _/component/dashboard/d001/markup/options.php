<?php
	class options
	{
		public $markup;

		public function __construct
		(
			$options_id,
			$options_class
		)
		{
			$this->markup =  '
				<div
				id="'.$options_id.'"
				class="'.$options_class.'"
				>
				</div>
			';
		}

		public function get_markup_string() 
		{
			return $this->markup;
		}
	}	
?>