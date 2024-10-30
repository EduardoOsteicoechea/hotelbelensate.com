import generate_options from "../prev/generate_options.js"
export default function add_generate_options_to_search_bar_action_button( button, option_container, data_object )
{
	button.addEventListener("click", generate_options(option_container, data_object))
}