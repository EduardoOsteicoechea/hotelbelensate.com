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
						<div></div>
					</div>
					<script>
						const '.$this->component_id.' = document.getElementById("'.$this->component_id.'");
						const '.$this->component_id.'_navigation = `
							<div
							id="'.$this->component_id.'_navigation_container"
							class="'.$this->component_class.'_navigation_container"
							>
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
						`;

							if(window.innerWidth < 550) document.body.innerHTML = document.body.innerHTML + '.$this->component_id.'_navigation;
							else '.$this->component_id.'.innerHTML = '.$this->component_id.'.innerHTML + '.$this->component_id.'_navigation;

							const '.$this->component_id.'_logo_container = document.getElementById("'.$this->component_id.'_logo_container");
							const '.$this->component_id.'_logo_image = document.getElementById("'.$this->component_id.'_logo_image");
							const '.$this->component_id.'_menu_button = document.getElementById("'.$this->component_id.'_menu_button");
							const '.$this->component_id.'_navigation_container = document.getElementById("'.$this->component_id.'_navigation_container");
							const '.$this->component_class.'_navigation_anchor = document.getElementsByClassName("'.$this->component_class.'_navigation_anchor");

							// console.log()

							// const screen_width = window.screen.width;
							// const screen_height = window.screen.height;
							// const screen_max = 850;
							// const screen_mid = 450;
							// const header_min = screen_width * .6;

							// '.$this->component_id.'_styles();
							// window.addEventListener("resize",()=>{'.$this->component_id.'_styles()});

							// function '.$this->component_id.'_styles() {
							// 	console.log(window)
							// 	console.log(navigator)
							// 	const window_width =        window.innerWidth;
							// 	// const mobile_condition =    screen_width < 450;
							// 	// const mobile_condition =    navigator.userAgentData.mobile || window_width < 500;
							// 	const mobile_condition =    navigator.userAgentData.mobile;
							// 	const desktop_condition =   window_width >= screen_max && !mobile_condition;
							// 	const tablet_condition =    window_width >= screen_mid && window_width < screen_max && !mobile_condition;
							// 	const generic_transition =  "all 2000ms";

							// 	if( desktop_condition ) 
							// 	{
							// 		console.log("tablet");
							// 		'.$this->component_id.'.style.cssText = `
							// 			display:flex;
							// 			gap:${(screen_width * .03) + "px"};
							// 			width:100%;
							// 			align-items:center;
							// 			height:${(screen_height * .125) + "px"};
							// 			padding:${(screen_height * .0) + "px"} ${(screen_height * .06) + "px"};
							// 			z-index:500;
							// 			transition:${generic_transition};
							// 		`;
							// 		'.$this->component_id.'_logo_container.style.cssText = `
							// 			height:100%;
							// 			padding:${(screen_height * .04) + "px"} ${(screen_height * .00) + "px"};
							// 			transition:${generic_transition};
							// 		`;
							// 		'.$this->component_id.'_logo_image.style.cssText = `
									
							// 		`;
							// 		'.$this->component_id.'_menu_button.style.cssText = `
									
							// 		`;
							// 		'.$this->component_id.'_navigation_container.style.cssText = `
							// 			display:flex;
							// 			align-items:center;
							// 			gap:${(screen_width * .03) + "px"};
							// 			margin-left:auto;
							// 			letter-spacing:${(screen_width * .001) + "px"};
							// 			width:fit-content;
							// 			overflow:hidden;
							// 			transition:width ease 2000ms;
							// 		`;							
							// 		for(var i=0; i < '.$this->component_class.'_navigation_anchor.length; i++){
							// 			const element = '.$this->component_class.'_navigation_anchor[i];
							// 				element.style.cssText = `
							// 					text-decoration:none;
							// 					color:#000;
							// 					font-weight:900;
							// 					font-size:${(screen_height * .012) + "px"};
							// 					transition:${generic_transition};
							// 			`;
							// 			if(element.innerHTML === "'.$this->current_page.'") element.style.color = `#bbb`;
							// 		};
							// 	} 
							// 	else if( tablet_condition ) 
							// 	{
							// 		console.log("tablet");
							// 		'.$this->component_id.'.style.cssText = `
							// 			display:flex;
							// 			gap:${(screen_width * .03) + "px"};
							// 			width:100%;
							// 			align-items:center;
							// 			height:${(screen_height * .125) + "px"};
							// 			padding:${(screen_height * .0) + "px"} ${(screen_height * .08) + "px"};
							// 			z-index:500;
							// 			transition:${generic_transition};
							// 		`;
							// 		'.$this->component_id.'_logo_container.style.cssText = `
							// 			height:100%;
							// 			padding:${(screen_height * .04) + "px"} ${(screen_height * .00) + "px"};
							// 			transition:${generic_transition};
							// 		`;
							// 		'.$this->component_id.'_logo_image.style.cssText = `
									
							// 		`;
							// 		'.$this->component_id.'_menu_button.style.cssText = `
									
							// 		`;
							// 		'.$this->component_id.'_navigation_container.style.cssText = `
							// 			display:flex;
							// 			align-items:center;
							// 			gap:${(screen_width * .03) + "px"};
							// 			margin-left:auto;
							// 			letter-spacing:${(screen_width * .001) + "px"};
							// 			width:0;
							// 			height:100%;
							// 			overflow:hidden;
							// 			transition:width ease 2000ms !important;
							// 		`;							
							// 		for(var i=0; i < '.$this->component_class.'_navigation_anchor.length; i++){
							// 			const element = '.$this->component_class.'_navigation_anchor[i];
							// 				element.style.cssText = `
							// 				display:flex;
							// 				text-decoration:none;
							// 				color:#000;
							// 				font-weight:900;
							// 				font-size:${(screen_height * .012) + "px"};
							// 				transition:${generic_transition};
							// 			`;
							// 			if(element.innerHTML === "'.$this->current_page.'") element.style.color = `#bbb`;
							// 		};
							// 	} 
							// 	else
							// 	{
							// 		console.log("mobile");
							// 		'.$this->component_id.'.style.cssText = `
							// 			display:flex;
							// 			align-items:center;
							// 			width:100%;
							// 			height:${(screen_height * .15) + "px"};
							// 			padding:${(screen_height * .0) + "px"} ${(screen_height * .03) + "px"};
							// 			z-index:500;
							// 			background:#fff;
							// 			transition:${generic_transition};
							// 		`;
							// 		'.$this->component_id.'_logo_container.style.cssText = `
							// 			height:100%;
							// 			padding:${(screen_height * .04) + "px"} ${(screen_height * .00) + "px"};
							// 			transition:${generic_transition};
							// 		`;
							// 		'.$this->component_id.'_logo_image.style.cssText = `
									
							// 		`;
							// 		'.$this->component_id.'_menu_button.style.cssText = `
									
							// 		`;
							// 		'.$this->component_id.'_navigation_container.style.cssText = `
							// 			display:flex;
							// 			align-items:center;
							// 			gap:${(screen_width * .03) + "px"};
							// 			margin-left:auto;
							// 			letter-spacing:${(screen_width * .001) + "px"};
							// 			width:0;
							// 			overflow:hidden;
							// 		`;						
							// 		for(var i=0; i < '.$this->component_class.'_navigation_anchor.length; i++){
							// 			const element = '.$this->component_class.'_navigation_anchor[i];
							// 			element.style.cssText = `
							// 				text-decoration:none;
							// 				color:#000;
							// 			`;
							// 		};
							// 	};
							// }; // apply_styles() end
					</script>
				</div>
			';

		}
	}
?>



					