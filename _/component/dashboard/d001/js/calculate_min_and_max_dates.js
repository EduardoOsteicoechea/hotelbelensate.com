export default function calculate_min_and_max_dates 
(
	data_object
)
{
	const room_array = Array.from(Object.entries(data_object));
	const min_dates_array = [];
	const max_dates_array = [];
	room_array.forEach(room_array => 
	{
		const room_data = room_array[1]
		const room_first = room_array[1]["fecha_disponible_inicial"]
		const room_last = room_array[1]["fecha_disponible_final"]
		min_dates_array.push(room_first)
		max_dates_array.push(room_last)
	});

	const earliest_date = new Date(Math.min(...min_dates_array.map(date => Date.parse(date)))).toLocaleDateString();
	const earliest_date_index = min_dates_array.length - Math.abs(min_dates_array.indexOf(earliest_date));
	const latest_date = max_dates_array[earliest_date_index];

	function change_date_format(date) 
	{
		var parts = date.split('/');
		return parts[1] + '-' + parts[0] + '-' + parts[2];;
	};

	return [change_date_format(earliest_date), change_date_format(new Date(latest_date).toLocaleDateString())];
}