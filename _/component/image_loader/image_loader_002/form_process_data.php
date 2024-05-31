<?php
	$desktop_images_folder = "../../../media/image/event_carrousel/enabled/desktop/";
	$mobile_images_folder = "../../../media/image/event_carrousel/enabled/mobile/";

	if(isset($_FILES)){
		$errors= array();
		$desktop_image_name = $_FILES['form_desktop_image_elements_image_input']['name'];
		$desktop_image_size =$_FILES['form_desktop_image_elements_image_input']['size'];
		$desktop_image_temporal_location =$_FILES['form_desktop_image_elements_image_input']['tmp_name'];
		$desktop_image_type=$_FILES['form_desktop_image_elements_image_input']['type'];
		$desktop_image_extension = "." . explode(".", $desktop_image_name)[1];

		$mobile_image_name = $_FILES['form_mobile_image_elements_image_input']['name'];
		$mobile_image_size =$_FILES['form_mobile_image_elements_image_input']['size'];
		$mobile_image_temporal_location =$_FILES['form_mobile_image_elements_image_input']['tmp_name'];
		$mobile_image_type=$_FILES['form_mobile_image_elements_image_input']['type'];
		$mobile_image_extension = "." . explode(".", $mobile_image_name)[1];

		if ($desktop_image_extension == ".webp" || $desktop_image_extension == ".png" || $desktop_image_extension == ".jpg" || $desktop_image_extension == ".jpeg")
		{

		};

		list($width, $height) = getimagesize($desktop_image_temporal_location);
		// $file_ext=strtolower(end(explode('.',$_FILES['imageUpload']['name'])));
	
		if(empty($errors)==true){
			move_uploaded_file( $desktop_image_temporal_location, $desktop_images_folder . $desktop_image_name );
			move_uploaded_file( $mobile_image_temporal_location, $mobile_images_folder . $mobile_image_name );
			// echo $width . "    " . $height;
			echo json_encode($_FILES);
		}else{
			print_r($errors);
		}
	}
?>