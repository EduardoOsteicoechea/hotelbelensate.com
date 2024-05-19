// called from "./update_manager.php";
export default function(component_array, page_name, api_key, url) {

	let response = {};
	

	setInterval(() => 
	{
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		xhr.onload = function() 
		{
			if (this.status >= 200 && this.status < 400) {
				response = JSON.parse(this.response);

				for (let i = 0; i < component_array.length; i++) {
					let component_last_update = Number( response[i]["last_update"]);
					let current_date = Date.now();
					let current_date_as_number = Number(current_date);
					
					if(current_date_as_number < (component_last_update + 35000))
					{
						const element = document.getElementById(component_array[i]["component_name"]);
						let element_name_tag = element.children[0];
						let element_must_update_tag = element.children[1];
						element_name_tag.innerHTML = response[i]["name"];
						element_must_update_tag.innerHTML = 1;
					}
					else
					{
						console.log("The "+response[i]["name"]+" component is updated at: " + current_date + " miliseconds from the Unix Epoch");
					}
				};
			} else {
				console.error('Server returned an error at: update_update_manager.js');
			}
		};
		
		xhr.onerror = function() 
		{
			console.error('There has been a problem with your fetch operation');
		};
		
		var params = 'pageName=' + encodeURIComponent("page_" + page_name) + '&apiKey=' + encodeURIComponent(api_key);
		
		xhr.send(params);
	}, 3000);
}
