<?php
		$folder_path = "../../../media/image/" . $_POST["folder_path"];
	
		$enabled_images_folder_path = $folder_path . "/enabled";
		$enabled_desktop_images_folder_path = $enabled_images_folder_path . "/desktop";
		$enabled_mobile_images_folder_path = $enabled_images_folder_path . "/mobile";

		$disabled_images_folder_path = $folder_path . "/disabled";
		$disabled_desktop_images_folder_path = $disabled_images_folder_path . "/desktop";
		$disabled_mobile_images_folder_path = $disabled_images_folder_path . "/mobile";

		$folder_content_enabled_desktop_array = [];
		$folder_content_enabled_mobile_array = [];
		$folder_content_disabled_desktop_array = [];
		$folder_content_disabled_mobile_array = [];
		$folder_content_array = [];
		
		if (is_dir($enabled_desktop_images_folder_path)) 
		{
			if ($dh = opendir($enabled_desktop_images_folder_path)) 
			{
				 while (($file = readdir($dh)) !== false) 
				 {
					if($file != "." && $file != "..")
					{
						$folder_content_enabled_desktop_array[] = $file;
					};
				 }
				 closedir($dh);
			}
	 	};
	  
		if (is_dir($enabled_mobile_images_folder_path)) 
		{
			if ($dh = opendir($enabled_mobile_images_folder_path)) 
			{
				 while (($file = readdir($dh)) !== false) 
				 {
					if($file != "." && $file != "..")
					{
						$folder_content_enabled_mobile_array[] = $file;
					};
				 }
				 closedir($dh);
			}
	  };

	  if (is_dir($disabled_desktop_images_folder_path)) 
		{
			if ($dh = opendir($disabled_desktop_images_folder_path)) 
			{
				 while (($file = readdir($dh)) !== false) 
				 {
					if($file != "." && $file != "..")
					{
						$folder_content_disabled_desktop_array[] = $file;
					};
				 }
				 closedir($dh);
			}
	  };
	  if (is_dir($disabled_mobile_images_folder_path)) 
		{
			if ($dh = opendir($disabled_mobile_images_folder_path)) 
			{
				 while (($file = readdir($dh)) !== false) 
				 {
					if($file != "." && $file != "..")
					{
						$folder_content_disabled_mobile_array[] = $file;
					};
				 }
				 closedir($dh);
			}
	  };

	  	$folder_content_array["enabled"]["desktop"] = $folder_content_enabled_desktop_array;
	  	$folder_content_array["enabled"]["mobile"] = $folder_content_enabled_mobile_array;
	  	$folder_content_array["disabled"]["desktop"] = $folder_content_disabled_desktop_array;
		$folder_content_array["disabled"]["mobile"] = $folder_content_disabled_mobile_array;

		echo json_encode($folder_content_array);
?>