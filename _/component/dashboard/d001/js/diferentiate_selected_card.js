// Called from ./generate_initial_options.js

export default function diferentiate_selected_card 
(
	parent_card,
	viewer_2d
) 
{
	const cards = document.getElementsByClassName("d001_options_card_selected");
	Array.from(cards).forEach(card => 
	{
		card.classList.remove("d001_options_card_selected");

		const description_card = card.children[1];
		card.classList.remove("d001_options_card_description_card_selected");

		const description_card_texts = description_card.children[0].children;
		Array.from(description_card_texts).forEach(text => 
		{
			text.classList.remove("d001_options_card_description_card_selected_text"); 
		});
		
		const description_card_room_name = description_card_texts[0];
		description_card_room_name.classList.remove("d001_options_card_description_card_room_name_selected");
	});

	parent_card.classList.add("d001_options_card_selected");

	const description_card = parent_card.children[1];
	description_card.classList.add("d001_options_card_description_card_selected");

	const description_card_texts = description_card.children[0].children;
	Array.from(description_card_texts).forEach(text => 
	{	
		if (!text.classList.contains("d001_options_card_description_card_selected_text"))
		text.classList.add("d001_options_card_description_card_selected_text");
	});

	const description_card_room_name = description_card_texts[0];
	description_card_room_name.classList.add("d001_options_card_description_card_room_name_selected");
}
