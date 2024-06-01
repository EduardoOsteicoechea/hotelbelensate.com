<?php
	$folder_path = "../../../media/image/" . $_POST["component_name"];
	$desktop_image_name = $_POST["desktop_image_name"];
	$desktop_image_path = $folder_path . "/" . $desktop_image_name;
	$mobile_image_name = $_POST["mobile_image_name"];
	$mobile_image_path = $folder_path . "/" . $mobile_image_name;

	rename($desktop_image_path, str_replace("enabled","disabled",$desktop_image_path));
	rename($mobile_image_path, str_replace("enabled","disabled",$mobile_image_path));
?>