<?php
   include "DateFilter.php";
   include "MarkupGenerator.php";
   
   ////////////////////////////////////////
   // Capture request variables
   ////////////////////////////////////////

   $arrival_date = $_GET["arrival"];
   $departure_date = $_GET["departure"];
   $departure_date = $_GET["departure"];
   $departure_date = $_GET["departure"];



   ////////////////////////////////////////
   // Get availabe room options
   ////////////////////////////////////////
   
   $dateFilter = new DateFilter($arrival_date, $departure_date);
   $roomAvailableOptions = $dateFilter->roomTypesAndUnitsJsonObjects;

   ////////////////////////////////////////
   // Generate options markup
   ////////////////////////////////////////
   
   $markupGenerator = new MarkupGenerator($dateFilter->availableOptions);
   $html = $markupGenerator->generateMarkup();

   ////////////////////////////////////////
   // Return api result
   ////////////////////////////////////////

   echo $html;
   // print_r($dateFilter->requestedDaysArray);
   // print_r($dateFilter->availableOptions);
   // echo (count($dateFilter->availableOptions));
?>