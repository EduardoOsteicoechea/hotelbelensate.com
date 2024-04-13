<?php
	function page_top($root_folder, $page_name, $description)
	{		
		$style_folder = $root_folder . '_/';
		$brand_folder = $root_folder . '_/media/image/brand/';

		return '
		<!DOCTYPE html>
		<html lang="es">
			<head>
				<meta charset="utf-8">
				<link rel="icon" type="image/x-icon" href="'. $brand_folder .'favicon.webp">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>'. $page_name .'</title>
				<link rel="stylesheet" href="'.$style_folder.'global.css">
				<script src="'.$root_folder.'_/global.js"></script>
				<meta name="description" content="'.$description.'">
				<meta name="keywords" content="Hotel Belensate, Hotel en Mérida Venezuela, El mejor hotel del estado Mérida, El mejor hotel de Mérida">
				<meta name="theme-color" content="#fff">
				<meta name="author" content="Eduardo Osteicoechea">
				<meta name="robots" content="index,follow">
				<link rel="canonical" href="https://hotelbelensate.com/inicio">
				<meta property="og:title" content="'.$page_name.'">
				<meta property="og:description" content="'.$description.'">
				<meta property="og:image" content="'. $brand_folder .'favicon.webp">
				<meta property="og:url" content="https://hotelbelensate.com/inicio">
				<link rel="alternate" hreflang="en" href="https://hotelbelensate.com/inicio">
		';
	};
?>
