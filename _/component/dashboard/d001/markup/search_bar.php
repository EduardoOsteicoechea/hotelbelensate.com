<?php
	class search_bar
	{
		public $markup;

		public function __construct
		(
			$search_bar_id,
			$search_bar_class,
			$root_folder,
		)
		{
			$this->markup =  '
				<div
				id="'.$search_bar_id.'"
				class="'.$search_bar_class.'"
				>
					<div
					id="'.$search_bar_id.'_parameters_container"
					class="'.$search_bar_class.'_parameters_container"
					>
						<div
						id="'.$search_bar_id.'_arrival_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
							<input 
							type="date" 
							name="arrival" 
							id="'.$search_bar_id.'_arrival_parameter_container_input"
							title="'.$search_bar_id.'_arrival_parameter_container_input"
							>
							<label for="arrival">Llegada</label>
						</div>

						<div
						id="'.$search_bar_id.'_departure_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
							<input 
							type="date" 
							name="departure" 
							id="'.$search_bar_id.'_departure_parameter_container_input"
							title="'.$search_bar_id.'_departure_parameter_container_input"
							class="disabled_input"
							disabled
							>
							<label for="departure">Salida</label>
						</div>

						<div
						id="'.$search_bar_id.'_adults_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
							<input 
							type="number" 
							name="adults" 
							id="'.$search_bar_id.'_adults_parameter_container_input" 
							title="'.$search_bar_id.'_adults_parameter_container_input"
							class="disabled_input"
							value="0"
							min="0"
							disabled
							>
							<label for="adults">Adultos</label>
						</div>

						<div
						id="'.$search_bar_id.'_children_parameter_container"
						class="'.$search_bar_class.'_parameter_container '.$search_bar_class.'_children_parameter_container"
						>
							<input 
							type="number" 
							name="children" 
							id="'.$search_bar_id.'_children_parameter_container_input" 
							title="'.$search_bar_id.'_children_parameter_container_input"
							class="disabled_input" 
							value="0"
							min="0"
							disabled
							>
							<label for="children">Niños</label>
							<div
							id="'.$search_bar_id.'_children_age_parameter_container"
							class="'.$search_bar_class.'_children_parameter_container_inputs_container disabled_container"
							>
							</div>
						</div>

						

						<div
						id="'.$search_bar_id.'_execute_parameter_container"
						class="'.$search_bar_class.'_parameter_container"
						>
							<button
							id="'.$search_bar_id.'_execute_parameter_container_button"
							class="'.$search_bar_class.'_parameter_container_button disabled_button"
							type="button"
							>Filtrar opciones</button>
						</div>
					</div>

					<script type="module">
						import filter_options from "../_/component/dashboard/d001/js/filter_options.js";
						filter_options(
							"'.$root_folder.'",
							"'.$search_bar_class.'",
							"'.$search_bar_id.'",
							"'.$search_bar_id.'_parameters_container",
							"'.$search_bar_id.'_arrival_parameter_container",
							"'.$search_bar_id.'_departure_parameter_container",
							"'.$search_bar_id.'_adults_parameter_container",
							"'.$search_bar_id.'_children_parameter_container",
							"'.$search_bar_id.'_children_age_parameter_container",
							"'.$search_bar_id.'_execute_parameter_container",
							"'.$search_bar_id.'_execute_parameter_container_button",
						);
					</script>
				</div>
			';
		}

		public function get_markup_string() 
		{
			return $this->markup;
		}
	}	
?>