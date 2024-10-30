<?php
class page_top{
	public function __construct
	(
		$root_folder, 
		$session,
		$page_name, 
		$page_title,
		$component_array,
		$description = "Sitio web oficial del Hotel Belensate Mérida Venezuela",
	){
		$component_array_style_tags = "";
		
		for ($i=0; $i < count($component_array); $i++) { 
			$component_name = explode("_", $component_array[$i])[0];
			$component_version = $component_array[$i];
			include $root_folder . '_/component/'. $component_name .'/'. $component_version .'/_.php';
			$component_array_style_tags .= '<link rel="stylesheet" href="'. $root_folder . '_/component/'. $component_name .'/'. $component_version .'/_.css">';
		};

		echo '
		<!DOCTYPE html>
			<html lang="es">
				<head>
					<meta charset="utf-8">
					<link rel="icon" type="image/x-icon" href="'. $root_folder .'_/media/image/favicon.webp">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<meta name="description" content="'. $description .'">
					<meta name="keywords" content="Hotel Belensate, Hotel en Mérida Venezuela, El mejor hotel del estado Mérida, El mejor hotel de Mérida">
					<meta name="theme-color" content="#fff">
					<meta name="author" content="Eduardo Osteicoechea">
					<meta name="robots" content="index,follow">
					<link rel="canonical" href="https://hotelbelensate.com/inicio">
					<meta property="og:title" content="'.ucfirst($page_title).'">
					<meta property="og:description" content="'. $description .'">
					<meta property="og:image" content="'. $root_folder .'_/media/image/favicon.ico">
					<meta property="og:site_name" content="Hotel Belensate">
					<meta property="og:url" content="https://hotelbelensate.com/inicio">
					<meta name="twitter:card" content="summary_large_image">
					<link rel="alternate" hreflang="en" href="https://hotelbelensate.com/inicio">
					<title>'. ucfirst($page_title) .'</title>
					<link rel="stylesheet" href="'. $root_folder .'_/global.css">
					<script src="'. $root_folder .'_/global.js"></script>
					<link rel="stylesheet" href="'. $root_folder .'_/component/header/header_003/_.css">
					<link rel="stylesheet" href="'. $root_folder .'_/component/footer/footer_002/_.css">
					<link rel="stylesheet" href="'. $root_folder .'_/component/button/button_001/_.css">
					<link rel="stylesheet" href="'. $root_folder .'_/component/button/button_001/_.css">
					'. $component_array_style_tags .'
				</head>
				</body>
		'; 
	}
}?>
