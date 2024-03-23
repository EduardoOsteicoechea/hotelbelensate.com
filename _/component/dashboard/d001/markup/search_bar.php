<?php
	class search_bar
	{
		public $markup;

		public function __construct
		(
			$search_bar_id,
			$search_bar_class
		)
		{
			$this->markup =  '
				<div
				id="'.$search_bar_id.'"
				class="'.$search_bar_class.'"
				>
					<div
					id="'.$search_bar_id.'_arrival_parameters_container"
					class="'.$search_bar_class.'_parameters_container"
					>
						<div
						id="'.$search_bar_id.'_arrival_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
						<input type="date" name="arrival" id="arrival">
							<label for="arrival">Llegada</label>
						</div>

						<div
						id="'.$search_bar_id.'_departure_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
						<input type="date" name="departure" id="departure">
							<label for="departure">Salida</label>
						</div>

						<div
						id="'.$search_bar_id.'_adults_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
						<input type="number" name="adults" id="adults" value="2">
							<label for="adults">Adultos</label>
						</div>

						<div
						id="'.$search_bar_id.'_children_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
						<input type="number" name="children" id="children" value="0">
							<label for="children">Niños</label>
						</div>

						<div
						id="'.$search_bar_id.'_children_age_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>

						</div>
						
						<!--
						<div
						id="'.$search_bar_id.'_room_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
						<select name="room" id="room">
							<label for="room">Habitación</label>
							
							</select>
						</div>
						-->

						<div
						id="'.$search_bar_id.'_execute_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
							<button
							type="button"
							>Filtrar opciones</button>
						</div>
					</div>
					
				</div>
			';
		}

		public function get_markup_string() 
		{
			return $this->markup;
		}
	}	
?>