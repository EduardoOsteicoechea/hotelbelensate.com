<?php
	function read_image_folder($folder_path)
	{	
		$enabled_images_folder_path = $folder_path . "/enabled";
		$enabled_desktop_images_folder_path = $enabled_images_folder_path . "/desktop";
		$enabled_mobile_images_folder_path = $enabled_images_folder_path . "/mobile";

		$folder_content_enabled_desktop_array = [];
		$folder_content_enabled_mobile_array = [];
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

	  	$folder_content_array["enabled"]["desktop"] = $folder_content_enabled_desktop_array;
	  	$folder_content_array["enabled"]["mobile"] = $folder_content_enabled_mobile_array;

		return $folder_content_array;
	};		
?>