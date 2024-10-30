<?php
	class viewer_360
	{
		public $markup;

		public function __construct
		(
			$viewer_360_id,
			$viewer_360_class
		)
		{
			$this->markup = '
				<div
				id="'.$viewer_360_id.'"
				class="'.$viewer_360_class.'"
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