<?php
   function get_type_units_data_as_json(array $array_data) : string
   {
      $data_as_json = json_encode($array_data, true);
      return $data_as_json;
   };
?>