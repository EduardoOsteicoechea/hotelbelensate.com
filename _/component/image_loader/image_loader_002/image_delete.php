<?php
	$folder_path = "../../../media/image/" . $_POST["component_name"];
	$desktop_image_name = $_POST["desktop_image_name"];
	$desktop_image_path = $folder_path . "/" . $desktop_image_name;
	$mobile_image_name = $_POST["mobile_image_name"];
	$mobile_image_path = $folder_path . "/" . $mobile_image_name;

	unlink($desktop_image_path);
	unlink($mobile_image_path);
?>