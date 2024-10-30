<?php
	class viewer_2d
	{
		public $markup;

		public function __construct
		(
			$viewer_2d_id,
			$viewer_2d_class
		)
		{
			$this->markup = '
				<div
				id="'.$viewer_2d_id.'"
				class="'.$viewer_2d_class.'"
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