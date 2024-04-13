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

		public function __construct
		(
			string $root_folder,
			string $id,
			string $current_page,
			array $sesion_array,
		)
		{
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

			echo '
				<div
				id="'.$this->component_id.'"
				class="'.$this->component_class.'"
				>
				
					<!-- HEADER LOGO -->
					<!-- HEADER LOGO -->

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
					
					<!-- HEADER MENU BUTTON -->
					<!-- HEADER MENU BUTTON -->

					<div
					id="'.$this->component_id.'_menu_button"
					class="'.$this->component_class.'_menu_button"
					>
						<div></div>
						<div></div>
					</div>
					
					<!-- TOP NAVIGATION -->
					<!-- TOP NAVIGATION -->

					<div
					id="'.$this->component_id.'_navigation_container"
					class="'.$this->component_class.'_navigation_container"
					>
						<a
						class="'.$this->component_class.'_navigation_anchor"
						href="'.$this->root_folder.'inicio"
						>inicio</a>
						<a
						class="'.$this->component_class.'_navigation_anchor"
						href="'.$this->root_folder.'reservas"
						>reservas</a>
						<a
						class="'.$this->component_class.'_navigation_anchor"
						href="'.$this->root_folder.'restaurants"
						>restaurants</a>
						<a
						class="'.$this->component_class.'_navigation_anchor"
						href="'.$this->root_folder.'galeria"
						>galería</a>
						<a
						class="'.$this->component_class.'_navigation_anchor"
						href="'.$this->root_folder.'contacto"
						>contacto</a>
					</div>
				</div>
				
				<!-- HEADER JAVASCRIPT -->
				<!-- HEADER JAVASCRIPT -->

				<script>
					const '.$this->component_id.' = document.getElementById("'.$this->component_id.'");
					const '.$this->component_id.'_menu_button = document.getElementById("'.$this->component_id.'_menu_button");
					const '.$this->component_id.'_navigation_container = document.getElementById("'.$this->component_id.'_navigation_container");
					const '.$this->component_class.'_navigation_anchor = document.getElementsByClassName("'.$this->component_class.'_navigation_anchor");
					for (var i=0; i < '.$this->component_class.'_navigation_anchor.length; i++){
						const element = '.$this->component_class.'_navigation_anchor[i];
						if (element.innerHTML === "'.$this->current_page.'") element.style.color = "var(--c9)";
					};

					let zoom_level = window.devicePixelRatio;

					window.addEventListener("resize",()=>{
						console.log("resize")
						if (window.innerWidth < 950 && zoom_level !== window.devicePixelRatio) location.reload(true);
						for (var i=0; i < '.$this->component_class.'_navigation_anchor.length; i++){
							const element = '.$this->component_class.'_navigation_anchor[i];
							element.style.opacity = "1";
						};
					});

					// if (navigator.userAgentData.mobile) {
					if (window.innerWidth < 950) {
						
						for (var i=0; i < '.$this->component_class.'_navigation_anchor.length; i++){
							const element = '.$this->component_class.'_navigation_anchor[i];
							element.style.opacity = "0";
						};

						'.$this->component_id.'_menu_button.addEventListener("pointerup",()=>
						{
							console.log('.$this->component_id.'_navigation_container)
							if 
							(
								(
									parseInt('.$this->component_id.'_navigation_container.style.height) > 0 
									|| 
									'.$this->component_id.'_navigation_container.style.height === "150dvw"
									|| 
									'.$this->component_id.'_navigation_container.style.height === ""
									|| 
									'.$this->component_id.'_navigation_container.style.height === null
								)
								&&
								'.$this->component_id.'_navigation_container.classList.contains("header_navigation_clicked")
							) {
								'.$this->component_id.'_navigation_container.classList.remove("header_navigation_clicked")
								'.$this->component_id.'_navigation_container.style.height = 0 + "px";
								'.$this->component_id.'_navigation_container.style.padding = "0px 0 0 0";
								for (var i=0; i < '.$this->component_class.'_navigation_anchor.length; i++){
									const element = '.$this->component_class.'_navigation_anchor[i];
									element.style.transition = "all ease 500ms 0ms";
									element.style.opacity = "0";
								};
							} 
							else 
							{
								'.$this->component_id.'_navigation_container.classList.add("header_navigation_clicked")
								// '.$this->component_id.'_navigation_container.style.height = window.screen.height - parseInt('.$this->component_id.'.style.height) + "px";
								// '.$this->component_id.'_navigation_container.style.height = "150dvw";
								if (window.innerWidth < 450) '.$this->component_id.'_navigation_container.style.height = "120dvw";
								if (window.innerWidth < 950 && window.innerWidth > 450) '.$this->component_id.'_navigation_container.style.height = "8dvw";
								// '.$this->component_id.'_navigation_container.style.padding = "75px 0 0 0";
								for (var i=0; i < '.$this->component_class.'_navigation_anchor.length; i++){
									const element = '.$this->component_class.'_navigation_anchor[i];
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



					