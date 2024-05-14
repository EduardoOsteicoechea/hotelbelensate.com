<?php
function hero_data_article_VIEWER
(
	$root_folder, 
	$id
)
{
	return '
		<div
		id="'.$id.'_hero_data_article_VIEWER"
		class="hero_data_article_VIEWER"
		>

			<div
			id="'.$id.'_hero_data_article_VIEWER_image_container"
			class="hero_data_article_VIEWER_image_container"
			style="margin:0 auto 0 auto; width:100%; height:50dvw;display:flex;justify-content:center;"
			>
				<img
				id="'.$id.'_hero_data_article_VIEWER_image"
				class="hero_data_article_VIEWER_image"
				src="'.$root_folder.'_/media/image/"
				alt="Obra de arte"
				style="margin:0 auto 0 auto"
				height="550px"
				>
			</div>

			<div
			id="'.$id.'_hero_data_article_VIEWER_info_container"
			class="hero_data_article_VIEWER_info_container"
			>
				<div
				id="'.$id.'_hero_data_article_VIEWER"
				class="hero_data_article_VIEWER_data"
				>
					<h3
					id="'.$id.'_hero_data_article_VIEWER_data_h3"
					class="hero_data_article_VIEWER_data_h3"
					></h3>
					<h4
					id="'.$id.'_hero_data_article_VIEWER_data_h4"
					class="hero_data_article_VIEWER_data_h4"
					></h4>
					<p
					id="'.$id.'_hero_data_article_VIEWER_data_p_1"
					class="hero_data_article_VIEWER_data_p_1"
					></p>
				</div>

				<div
				id="'.$id.'_hero_data_article_VIEWER"
				class="hero_data_article_VIEWER_info_article"
				>
					<p
					id="'.$id.'_hero_data_article_VIEWER_data_p_2"
					class="hero_data_article_VIEWER_data_p_2"
					></p>
				</div>
			</div>

			'.add_style_tag($id ."_image_info_image_slider_container", $root_folder."_/component/viewer/hero_data_article_VIEWER/").'
			
			<script>
				(function (){
					let split_url = window.location.href.split("=").splice(1);
					
					console.log(split_url.length)
					if(split_url.length > 0)
					{
						for (let x= 0; x < split_url.length; x++) {
							let a = split_url[x].replace("\&"," ");
							split_url[x] = a;
						};
						for (let x= 0; x < split_url.length; x++) {
							let a = split_url[x].split(" ");
							split_url[x] = decodeURIComponent(a[0]);
						};
	
						'.$id.'_hero_data_article_VIEWER_image.src = "'.$root_folder.'_/media/image/" + split_url[0];
						'.$id.'_hero_data_article_VIEWER_data_h3.innerHTML = split_url[1];
						'.$id.'_hero_data_article_VIEWER_data_h4.innerHTML = split_url[2];
						'.$id.'_hero_data_article_VIEWER_data_p_1.innerHTML = split_url[3];
						'.$id.'_hero_data_article_VIEWER_data_p_2.innerHTML = split_url[4];
					}
					else
					{
						'.$id.'_hero_data_article_VIEWER_image.src = "'.$root_folder.'_/media/image/gallery/art_10.jpg";
						'.$id.'_hero_data_article_VIEWER_data_h3.innerHTML = "";
						'.$id.'_hero_data_article_VIEWER_data_h4.innerHTML = "";
						'.$id.'_hero_data_article_VIEWER_data_p_1.innerHTML = "";
						'.$id.'_hero_data_article_VIEWER_data_p_2.innerHTML = "";
					};
					
				}


				)()
			</script>
		</div>
	';
};
?>