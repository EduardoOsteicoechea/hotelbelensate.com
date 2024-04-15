// Called from ./generate_room_available_dates_container_elements.js

export default function get_reservation_maximun_date_from_today (number_of_months) {

	const date_object = new Date();
	const current_month = date_object.getMonth();
	const reservation_dates_objects_array = [];
	const dates_full_days_array = [];
	const reservation_data_array = [];

	for (let i = 0; i < number_of_months; i++) {
		reservation_dates_objects_array.push(get_month_data( current_month, i));
	};

	Array.from(reservation_dates_objects_array).forEach(month => {
		for (let i = 0; i < month["number of days"]; i++) {
			dates_full_days_array.push(month["year"] + "-" + month["month number"] + "-" + (i + 1));
		};
	});

	reservation_data_array.push(reservation_dates_objects_array);
	reservation_data_array.push(dates_full_days_array);

	function get_month_data(month, month_increment_integer) 
	{
		const days_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const days_names_in_spanish = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
		const month_data = {};
		 
		if (month + month_increment_integer > 11) {
			month_data["month number"] =     month + month_increment_integer - 12;
			month_data["name"] =             new Date(new Date().getFullYear(), month_data["month number"]).toLocaleString('default', { month: 'long' });
			month_data["year"] =             new Date().getFullYear() + 1;
		} else {
			month_data["month number"] =     month + month_increment_integer;
			month_data["name"] =             new Date(new Date().getFullYear(), month_data["month number"]).toLocaleString('default', { month: 'long' });
			month_data["year"] =             new Date().getFullYear();
		};
		month_data["number of days"] =             new Date(month_data["year"], month_data["month number"] + 1, 1);
		month_data["number of days"].setDate(0);
		month_data["number of days"] =             month_data["number of days"].getDate();
		month_data["first day number"] =           new Date(month_data["year"], month_data["month number"], 1).getDay();
		month_data["first day name"] =             days_names[month_data["first day number"]];
		month_data["name in spanish"] =            return_month_name_in_spanish(month_data["name"]);
		month_data["first day name in spanish"] =  return_day_name_in_spanish(month_data["first day name"]);
		month_data["full date"] =                  new Date(month_data["year"], month_data["month number"],  month_data["first day number"]);
		return month_data;
	};
	
	return reservation_data_array;
};

function return_month_name_in_spanish(month_name_in_english)
{
	let result = null;
	const month_names_in_english = [
		["January","Enero"],
		["February","Febrero"],
		["March","Marzo"],
		["April","Abril"],
		["May","Mayo"],
		["June","Junio"],
		["July","Julio"],
		["August","Agosto"],
		["September","Septiembre"],
		["October","Octubre"],
		["November","Noviembre"],
		["December","Diciembre"]
	];
	month_names_in_english.forEach(month => {
		if (month[0] === month_name_in_english)
		{
			result = month[1];
		};
	});
	return result;
};

function return_day_name_in_spanish(day_name_in_english)
{
	let result = null;
	const days_names_in_english = [
		["Sunday","Domingo"],
		["Monday","Lunes"],
		["Tuesday","Martes"],
		["Wednesday","Miércoles"],
		["Thursday","Jueves"],
		["Friday","Viernes"],
		["Saturday","Sábado"],
	];
	days_names_in_english.forEach(day => {
		if (day[0] === day_name_in_english)
		{ 
			result = day[1];
		};
	});
	return result;
};