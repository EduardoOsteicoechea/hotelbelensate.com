<?php
	function read_image_folder($folder_path)
	{
		$enabled_images_folder_path = $folder_path . "/enabled";
		$disabled_images_folder_path = $folder_path . "/disabled";
		$folder_content_enabled_array = [];
		$folder_content_disabled_array = [];
		$folder_content_array = [];
		
		if (is_dir($enabled_images_folder_path)) 
		{
			if ($dh = opendir($enabled_images_folder_path)) 
			{
				 while (($file = readdir($dh)) !== false) 
				 {
					if($file != "." && $file != "..")
					{
						$folder_content_enabled_array[] = $file;
					};
				 }
				 closedir($dh);
			}
	  };

	  if (is_dir($disabled_images_folder_path)) 
		{
			if ($dh = opendir($disabled_images_folder_path)) 
			{
				 while (($file = readdir($dh)) !== false) 
				 {
					if($file != "." && $file != "..")
					{
						$folder_content_disabled_array[] = $file;
					};
				 }
				 closedir($dh);
			}
	  };
	  	$folder_content_array["enabled"] = $folder_content_enabled_array;
		$folder_content_array["disabled"] = $folder_content_disabled_array;
		return json_encode($folder_content_array);
	}
?>