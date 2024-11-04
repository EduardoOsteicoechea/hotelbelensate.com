<?php
   function get_type_units_folder_by_type_id(string $id)
   {
      $folder_names_by_id = [
         "01"=>"01_suite_presidencial",
         "02"=>"02_presidencial_junior",
         "03"=>"03_cabana",
         "04"=>"04_suite_ejecutiva",
         "05"=>"05_suite_nupcial",
         "06"=>"06_doble_deluxe",
         "07"=>"07_king_deluxe",
         "08"=>"08_especial_deluxe",
         "09"=>"09_matrimonial_ejecutiva",
         "10"=>"10_semi_suite",
         "11"=>"11_doble_colonial",
         "12"=>"12_matrimonial_colonial"
      ];

      $units_folder = $folder_names_by_id[$id] . "units";
      return $units_folder;
   };
?>