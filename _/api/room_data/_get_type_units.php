<?php
include "_get_type_units_folder_name.php";

if (isset($_POST["type_id"]))
{
   $type_id = $_POST["type_id"];
   echo json_encode($type_id);
}
else
{
   echo json_encode("Accesso denegado");
};




































?>