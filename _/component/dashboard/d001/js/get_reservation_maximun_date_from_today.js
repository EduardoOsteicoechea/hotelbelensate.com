// Called from ./generate_room_available_dates_container_elements.js

export default function get_reservation_maximun_date_from_today () {

	// Declare variables for obtaining current date data

	const date_object = new Date();
	// const date_object = new Date(new Date().getFullYear(), 10); // For testing next year transition on current year final months.
	const current_month = date_object.getMonth();

	// Get months data

	const current_month_data =                              get_month_data( current_month, 1 );
	const next_month_data =                                 get_month_data( current_month, 2 );
	const next_month_from_next_month_data =                 get_month_data( current_month, 3 );
	const next_month_from_next_month_from_next_month_data = get_month_data( current_month, 4 );

	// Declare Methods for obtaining month data

	function get_month_data(month, month_increment_integer) {
		const month_data =                {};
		month_data["name"] =              new Date(new Date().getFullYear(), month + month_increment_integer - 1).toLocaleString('default', { month: 'long' });
		if (month + month_increment_integer > 12) {
			month_data["year"] =           new Date().getFullYear() + 1;
			month_data["number of days"] = new Date(month_data["year"], month + month_increment_integer, 1);
		} else {
			month_data["year"] =           new Date().getFullYear();
			month_data["number of days"] = new Date(month_data["year"], month + month_increment_integer, 1);
		};
		month_data["number of days"].setDate(0);
		month_data["number of days"] =    month_data["number of days"].getDate();
		return month_data;
	};

	// Declare months data object

	const months_data_object = {
		"current month name" :                                      current_month_data["name"],
		"current month year" :                                      current_month_data["year"],
		"current month day quantity" :                              current_month_data["number of days"],
		"next month name" :                                         next_month_data["name"],
		"next month year" :                                         next_month_data["year"],
		"next month day quantity" :                                 next_month_data["number of days"],
		"next month from next month name" :                         next_month_from_next_month_data["name"],
		"next month from next month year" :                         next_month_from_next_month_data["year"],
		"next month from next month day quantity" :                 next_month_from_next_month_data["number of days"],
		"next month from next month from next month name" :         next_month_from_next_month_from_next_month_data["name"],
		"next month from next month from next month year" :         next_month_from_next_month_from_next_month_data["year"],
		"next month from next month from next month day quantity" : next_month_from_next_month_from_next_month_data["number of days"]
	};

	// Return months data object

	return months_data_object;
};