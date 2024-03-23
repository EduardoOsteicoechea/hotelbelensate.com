export default function add_available_rooms 
(
	data_object,
	select_element
)
{
	const rooms = Array.from(Object.entries(data_object))
	rooms.forEach(room => 
	{
		const name = room[0]
		const option = document.createElement("option")
		option.setAttribute("value",name)
		option.innerHTML = name
		select_element.appendChild(option)
	});
}