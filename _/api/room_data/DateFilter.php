<?php
   class DateFilter
   {
      public string $arrival = "";
      public string $departure = "";
      public array $requestedDaysArray = [];
      public array $roomTypesDirectoriesNames = [];
      public array $roomTypesObjects = [];
      public array $roomTypeUnitsFilesNames = [];
      public array $roomUnitsJsonObjects = [];
      public array $roomUnits = [];
      public array $availableOptions = [];
      public array $roomTypesAndUnitsJsonObjects = [];
      public array $unitsReservedDaysArrays = [];

      public function __construct(
         string $arrival,
         string $departure
      ) {
         $this->arrival = $arrival;
         $this->departure = $departure;
         $this->GenerateRequestedDaysArray();
         $this->GetAvailableTypes();
         $this->GetAvailableUnits();
         $this->GetAvailableOptions();
         $this->GenerateUnitsReservedDaysArrays();
      }



      function GenerateRequestedDaysArray()
      {
         return $this->GetDaysBetween($this->arrival, $this->departure);
      }

      function GetDaysBetween($startDate, $endDate)
      {
         $this->requestedDaysArray = [];
         $currentDate = strtotime($startDate);
         $endDate = strtotime($endDate);

         while ($currentDate <= $endDate) {
            $this->requestedDaysArray[] = date('Y-m-d', $currentDate);
            $currentDate = strtotime('+1 day', $currentDate);
         };

         return $this->requestedDaysArray;
      }



      function GetAvailableTypes()
      {
         $this->roomTypesDirectoriesNames = $this->GetDirectories("rooms");
         foreach ($this->roomTypesDirectoriesNames as $directoryName) 
         {
            $roomTypesName = $this->ReadFile("rooms" . "/" . $directoryName, "/type/room_type.json")["room name"];

            $this->roomTypesObjects[$roomTypesName] = $this->ReadFile("rooms" . "/" . $directoryName, "/type/room_type.json");

            $this->roomTypeUnitsFilesNames[$directoryName] = $this->GetJsonFilesNames("rooms" . "/" . $directoryName . "/units");
         };

         return $this->roomTypeUnitsFilesNames;
      }


      
      function GetJsonFilesNames($directory)
      {
         $jsonFiles = [];

         if (is_dir($directory)) {
            $handle = opendir($directory);
            if ($handle) {
               while (($file = readdir($handle)) !== false) {
                  if (pathinfo($file, PATHINFO_EXTENSION) === 'json') {
                     $jsonFiles[] = $file;
                  };
               };
               closedir($handle);
            };
         };
         return $jsonFiles;
      }

      function GetDirectories($directory)
      {
         $directories = [];

         if (is_dir($directory)) {
            $handle = opendir($directory);
            if ($handle) {
               while (($file = readdir($handle)) !== false) {
                  if ($file != "." && $file != "..") {
                     $path = $directory . "/" . $file;
                     if (is_dir($path)) {
                        $directories[] = $file;
                     };
                  };
               };
               closedir($handle);
            };
         };
         return $directories;
      }

      function ReadFile($directory, $filename)
      {
         $filepath = $directory . "/" . $filename;

         if (file_exists($filepath)) {
            $contents = file_get_contents($filepath);
            return json_decode($contents, true);
         };
      }



      function GenerateUnitsReservedDaysArrays()
      {
         foreach($this->roomUnitsJsonObjects as $typeObject)
         {
            foreach($typeObject as $unitObject)
            {
               foreach($unitObject["reserved dates"] as $day)
               {
                  array_push($this->unitsReservedDaysArrays, $day);
               };
            };         
         };
         $this->unitsReservedDaysArrays = array_unique($this->unitsReservedDaysArrays);
         return $this->unitsReservedDaysArrays;
      }


      function GetAvailableUnits()
      {
         foreach ($this->roomTypesDirectoriesNames as $directoryName) 
         {
            foreach ($this->roomTypeUnitsFilesNames[$directoryName] as $fileName) 
            {
               $currentFileContent = $this->ReadFile(
                  "rooms" . "/" . $directoryName . "/" . "units",
                  $fileName
               );
               $this->roomUnits[] = $currentFileContent;
            };
         };
         return $this->roomUnits;
      }


      function GetAvailableOptions()
      {
         foreach ($this->roomUnits as $unit)
         {
            if($this->CanUnitBeReserved($unit) == true)
            {
               if($this->AvailableOptionsContainsType($this->roomTypesObjects[$unit["room name"]]) == false)
               {
                  $this->availableOptions[$unit["room name"]] = $this->roomTypesObjects[$unit["room name"]];
               };
            };  
         };

         return $this->availableOptions;
      }

      function AvailableOptionsContainsType($unitRoomName)
      {
         $doesContain = false;
         foreach ($this->availableOptions as $key => $value) 
         {
            if($key == $unitRoomName)
            {
               $doesContain = true;
            };
         };   
         return $doesContain;
      }

      function CanUnitBeReserved($unit)
      {
         foreach ($this->requestedDaysArray as $requestedDay)
         {
            if (in_array($requestedDay, $unit["reserved dates"])) 
            {
               return false;
            };
         };         
         return true;
      }

      // function GetAvailableOptions()
      // {
      //    foreach ($this->roomTypesDirectoriesNames as $directoryName) 
      //    {
      //       $currentRoomTypeArray = [];
      //       $this->roomTypesAndUnitsJsonObjects[$directoryName]["type"] = $this->roomTypesJsonObjects[$directoryName];

      //       foreach ($this->roomTypeUnitsFilesNames[$directoryName] as $fileName) 
      //       {
      //          $currentFileContent = $this->ReadFile(
      //             "rooms" . "/" . $directoryName . "/" . "units",
      //             $fileName
      //          );

      //          // Careful here
      //          $currentFileContent = $currentFileContent;
      //          // $currentFileContent = json_decode($currentFileContent, true);

      //          $currentRoomTypeArray[] = $currentFileContent;

      //          $this->roomUnitsJsonObjects[$directoryName] = $currentRoomTypeArray;
      //          $this->roomTypesAndUnitsJsonObjects[$directoryName]["units"] = $currentRoomTypeArray;
      //       };
      //    };

      //    return $this->roomUnitsJsonObjects;
      // }


   }
