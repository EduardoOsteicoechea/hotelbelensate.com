<?php
	function page_top($root_folder, $page_name, $description, $session_array)
	{		
		$style_folder = $root_folder . '_/css/';
		$brand_folder = $root_folder . '_/media/image/brand/';

		return '
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="utf-8">
				<link rel="icon" type="image/x-icon" href="'. $brand_folder .'favicon.webp">

				<title>'. $page_name .'</title>

				<link rel="stylesheet" href="'.$style_folder.'global.css">
				<link rel="stylesheet" href="'.$style_folder.'global_desktop.css">
				<link rel="stylesheet" href="'.$style_folder.'global_tablet.css">
				<link rel="stylesheet" href="'.$style_folder.'global_mobile.css">
				<link rel="stylesheet" href="'.$style_folder.'fonts.css">

				<script src="'.$root_folder.'_/global.js"></script>
				<script src="'.$root_folder.'_/style_constants.js"></script>
				
				<meta name="viewport" content="width=device-width, initial-scale=1.0">

				<meta name="description" content="'.$description.'">
				<meta name="keywords" content="Real Estate, Realtor, Andrea D’Alessio, Luxury Properties, Florida, Miami, Properties, Buy Houses, Sell Houses, Develop Projects, Real Estate in Florida, Miami Real Estate, Luxury Homes in Miami, Florida Properties, Miami Properties, Andrea D’Alessio Properties, Andrea D’Alessio Real Estate, Buying Luxury Homes in Miami, Selling Luxury Homes in Miami, Real Estate Development in Miami, Andrea D’Alessio Projects, Luxury Real Estate in Florida, Luxury Realtor in Miami, Andrea D’Alessio Luxury Properties, Buying Properties in Florida, Selling Properties in Florida, Real Estate Projects in Miami, Luxury Real Estate Projects in Florida">

				<meta name="theme-color" content="#fff">
				<meta name="author" content="Eduardo Osteicoechea">

				<meta name="robots" content="index,follow">
				<link rel="canonical" href="https://hotelbelensate.com/inicio">
				<meta property="og:title" content="'.$page_name.'">
				<meta property="og:description" content="'.$description.'">
				<meta property="og:image" content="'. $brand_folder .'favicon.webp">
				<meta property="og:url" content="https://hotelbelensate.com/inicio">
				<link rel="alternate" hreflang="es" href="https://hotelbelensate.com/inicio">
		';
	};
?>
