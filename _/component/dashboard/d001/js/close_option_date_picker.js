// Called from ./display_option_date_picker.js

export default function close_option_date_picker (
	option_date_picker_global_container
) {
	option_date_picker_global_container.remove();
	enable_page_scrolling_function();
};
