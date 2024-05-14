<?php
	class h002 {
		public $root_folder;
		public $component_class;
		public $component_id;
		public $component_folder;
		public $component_type;
		public $sesion_array;
		public $current_page;
		public $current_page_public_text;
		
		public $component_class_style;

		public function __construct (
			string $root_folder,
			string $id,
			string $current_page,
			array $sesion_array,
		) {
			$current_file_name = basename(__FILE__, ".php");
			$current_file_folder = str_replace("\\", "/",dirname(__FILE__));
			$current_file_folder = explode("/",$current_file_folder);
			$current_file_folder = $current_file_folder[count($current_file_folder) - 2];

			$this->root_folder =         $root_folder;
			$this->component_class =     "h002";
			$this->component_id =        $id. '_' . $this->component_class;
			$this->component_folder =    $this->root_folder . '_/component/'.$current_file_folder.'/'.$current_file_name.'/';
			$this->component_type =      $current_file_folder;		
			$this->sesion_array =        $sesion_array;		
			$this->current_page =        $current_page;

			$navigation_anchors_data = [
				["inicio","inicio",""],
				["galería","galeria",""],
				["contacto","contacto",""],
			];
			
			function generate_header_anchors (
				string $root_folder,
				string $id,
				string $class,
				string $desktop_or_mobile,
				array $header_navigation_links_array
			){
				$links_markup = '';
				for ($i=0; $i < count($header_navigation_links_array); $i++) {
					$current_anchor = $header_navigation_links_array[$i];
					$text = $current_anchor[0];
					$href = $current_anchor[1];
					$url_parameters = $current_anchor[2] == "" ? "" : "?".$current_anchor[2];
					$links_markup .= '
						<a 
						id="'.$id.'_'.$desktop_or_mobile.'_navigation_anchor_'.$href.'"
						class="'.$class.'_'.$desktop_or_mobile.'_navigation_anchor"
						href="'.$root_folder.$href . $url_parameters.'"
						>'.$text.'</a>
					';
				};
				return $links_markup;
			};

			echo '
				<div
				id="'.$this->component_id.'"
				class="'.$this->component_class.'"
				>
					<a
					id="'.$this->component_id.'_logo_container"
					class="'.$this->component_class.'_logo_container"
					href="'.$this->root_folder.'inicio"
					>
						<img 
						id="'.$this->component_id.'_logo_image"
						class="'.$this->component_class.'_logo_image"
						src="'.$this->root_folder.'_/media/image/brand/logo.webp" 
						alt="Logo del hotel belensate" height="100%"
						>
					</a>
					<div
					id="'.$this->component_id.'_menu_button"
					class="'.$this->component_class.'_menu_button"
					>
						<div></div>
						<div></div>
					</div>
					<div
					id="'.$this->component_id.'_desktop_navigation_container"
					class="'.$this->component_class.'_desktop_navigation_container"
					>
						'.generate_header_anchors (
							$this->root_folder,
							$this->component_id,
							$this->component_class,
							"desktop",
							$navigation_anchors_data
						).'
					</div>
				</div>
				<div
				id="'.$this->component_id.'_mobile_navigation_container"
				class="'.$this->component_class.'_mobile_navigation_container"
				style="height:0px"
				>
					'.generate_header_anchors (
						$this->root_folder,
						$this->component_id,
						$this->component_class,
						"mobile",
						$navigation_anchors_data
					).'
				</div>
				<script>
					const '.$this->component_id.' = document.getElementById("'.$this->component_id.'");
					const '.$this->component_id.'_menu_button = document.getElementById("'.$this->component_id.'_menu_button");
					const '.$this->component_id.'_mobile_navigation_container = document.getElementById("'.$this->component_id.'_mobile_navigation_container");
					const '.$this->component_class.'_mobile_navigation_anchor = document.getElementsByClassName("'.$this->component_class.'_mobile_navigation_anchor");
					const '.$this->component_class.'_desktop_navigation_anchor = document.getElementsByClassName("'.$this->component_class.'_desktop_navigation_anchor");

					for (var i=0; i < '.$this->component_class.'_desktop_navigation_anchor.length; i++){
						const desktop_element = '.$this->component_class.'_desktop_navigation_anchor[i];
						const mobile_element = '.$this->component_class.'_mobile_navigation_anchor[i];
						if (desktop_element.innerHTML === "'.$this->current_page.'") desktop_element.style.color = "var(--c9)";
						if (mobile_element.innerHTML === "'.$this->current_page.'") mobile_element.style.color = "var(--c9)";
					};

					window.addEventListener("resize",()=>{
						if (window.innerWidth < 1100 && window.innerWidth > 750) location.reload();
					});

					if (window.innerWidth < 950) 
					{
						for (var i=0; i < '.$this->component_class.'_mobile_navigation_anchor.length; i++){
							const element = '.$this->component_class.'_mobile_navigation_anchor[i];
							element.style.opacity = "0";
						};

						'.$this->component_id.'_menu_button.addEventListener("pointerup",()=>
						{
							if /*NOT CLICKED YET*/ (( parseInt('.$this->component_id.'_mobile_navigation_container.style.height) > 0 || '.$this->component_id.'_mobile_navigation_container.style.height === "150dvw" || '.$this->component_id.'_mobile_navigation_container.style.height === "" || '.$this->component_id.'_mobile_navigation_container.style.height === null ) && '.$this->component_id.'_mobile_navigation_container.classList.contains("header_navigation_clicked")) {
								'.$this->component_id.'_mobile_navigation_container.style.transition = "all ease 2000ms";
								'.$this->component_id.'_mobile_navigation_container.classList.remove("header_navigation_clicked");
								'.$this->component_id.'_mobile_navigation_container.style.display = "flex"
								'.$this->component_id.'_mobile_navigation_container.style.height = 0 + "px";
								'.$this->component_id.'_mobile_navigation_container.style.padding = "0px 0 0 0";
								for (var i=0; i < '.$this->component_class.'_mobile_navigation_anchor.length; i++){
									const element = '.$this->component_class.'_mobile_navigation_anchor[i];
									element.style.transition = "all ease 500ms 0ms";
									element.style.opacity = "0";
								}; 
							} else {
								'.$this->component_id.'_mobile_navigation_container.style.transition = "all ease 2000ms";
								'.$this->component_id.'_mobile_navigation_container.classList.add("header_navigation_clicked");
								'.$this->component_id.'_mobile_navigation_container.style.display = "flex";
								if (window.innerWidth < 450) '.$this->component_id.'_mobile_navigation_container.style.height = "30rem";
								if (window.innerWidth < 950 && window.innerWidth > 450) '.$this->component_id.'_mobile_navigation_container.style.height = "30rem";
								for (var i=0; i < '.$this->component_class.'_mobile_navigation_anchor.length; i++){
									const element = '.$this->component_class.'_mobile_navigation_anchor[i];
									element.style.transition = "all ease 2000ms 500ms";
									element.style.opacity = "1";
								};
							};
						});
					};
				</script>
			';
		}
	}
?>



					