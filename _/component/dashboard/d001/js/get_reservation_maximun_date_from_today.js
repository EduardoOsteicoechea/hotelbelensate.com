// Called from ./generate_room_available_dates_container_elements.js
export default function get_reservation_maximun_date_from_today () {

	function get_day_quantity_in_current_month(month, month_name, year) {
		let date = [];
		date[0] = month_name.toLocaleString('default', { month: 'long' });
		if (month_name === "December") {
			date[1] = new Date(year + 1, 0, 1);
		} else {
			date[1] = new Date(year, month + 1, 1);
		};
		date[1].setDate(0);
		return date;
	}

	function get_day_quantity_in_next_month(month, month_name, year, date_object) {
		let date = [];
		const new_month_name = new Date(date_object.getFullYear(), date_object.getMonth() + 1, 1);
		date[0] = new_month_name.toLocaleString('default', { month: 'long' });
		if (month_name === "November") {
			date[1] = new Date(year + 1, 0, 1);
		} else {
			date[1] = new Date(year, month + 2, 1);
		};
		date[1].setDate(0);
		return date;
	}

	function get_day_quantity_in_next_month_from_next_month(month, month_name, year, date_object) {
		let date = [];
		const new_month_name = new Date(date_object.getFullYear(), date_object.getMonth() + 2, 1);
		date[0] = new_month_name.toLocaleString('default', { month: 'long' });
		if (month_name === "October") {
			date[1] = new Date(year + 1, 0, 1);
		} else {
			date[1] = new Date(year, month + 3, 1);
		};
		date[1].setDate(0);
		return date;
	}
	function get_next_month_name(date) {
		const month_name = new Date(date.getFullYear(), date.getMonth() + 1, 1);
		return month_name.toLocaleString('default', { month: 'long' });
	}
	function get_next_month_name(date) {
		const month_name = new Date(date.getFullYear(), date.getMonth() + 1, 1);
		return month_name.toLocaleString('default', { month: 'long' });
	}
	function get_next_month_from_next_month_name(date) {
		const month_name = new Date(date.getFullYear(), date.getMonth() + 2, 1);
		return month_name.toLocaleString('default', { month: 'long' });
	}

	const date_object = new Date();
	const current_year = date_object.getFullYear();
	const current_month_name = date_object.toLocaleString('default', { month: 'long' });
	const next_month_name = get_next_month_name(date_object);
	const month_from_next_month_name = get_next_month_from_next_month_name(date_object);
	const current_month = date_object.getMonth();
	const current_month_day_quantity = get_day_quantity_in_current_month(current_month, current_month_name, current_year, date_object);
	const next_month_day_quantity = get_day_quantity_in_next_month(current_month, current_month_name, current_year, date_object);
	const next_month_from_next_month_day_quantity = get_day_quantity_in_next_month_from_next_month(current_month, current_month_name, current_year, date_object);
	const current_day = date_object.getDay();
	const current_date = date_object.getDate();
	const current_time = date_object.getTime();

	console.log(date_object);
	console.log(current_year);
	console.log(current_month_name);
	console.log(current_month);
	console.log(current_day);
	console.log(current_date);
	console.log(current_time);
	console.log("");
	console.log(current_month_day_quantity[0] + " has " + current_month_day_quantity[1].getDate() + " days.");
	console.log(next_month_day_quantity[0] + " " + next_month_day_quantity[1].getDate() + " days.");
	console.log(next_month_from_next_month_day_quantity[0] + " " + next_month_from_next_month_day_quantity[1].getDate() + " days.");

	
};