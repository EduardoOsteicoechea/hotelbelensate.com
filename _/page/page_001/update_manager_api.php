<?php	
	// called from "./update_manager.php"
	if 
	(
		isset($_POST) && isset($_POST["pageName"]) && isset($_POST["apiKey"])
	)
	{
		$page_name = $_POST["pageName"];
		$api_key = $_POST["apiKey"];
		
		try 
		{
			include_once "../../global.php";

			$sql = "SELECT * from ".$page_name.";";
			$response = sql_command(connect_to_database("../../../"), 0, $sql);

			if($api_key == "123")
			{				
				echo json_encode($response);
			}
			else if ($api_key == "1234")
			{
				echo json_encode($response);
			}
		} 
		catch (\Throwable $th) 
		{
			echo json_encode($th->getMessage());
		}
	}
?>