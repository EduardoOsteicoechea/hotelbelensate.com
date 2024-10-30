// Called from ./close_2d_viewer.js

export default function undiferentiate_cards 
(
	parent_card
) 
{
	const cards = document.getElementsByClassName(parent_card.className);
	Array.from(cards).forEach(card => 
	{
		if (card.classList.contains("d001_options_card_selected"))
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
}
