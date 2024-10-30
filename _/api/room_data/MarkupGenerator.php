<?php class MarkupGenerator {
   public string $imagesFolder = "../_/media/image/room/";
   public array $baseOptionsArray = [];
   public array $baseTypesArray = [];
   public array $baseUnitsArray = [];
   public string $markup = "";
   public string $className = "room_option";

   public function __construct($optionsArray)
   {
      $this->baseOptionsArray = $optionsArray;
   }

   public function generateMarkup():string
   {
      $counter = 1;
      foreach ($this->baseOptionsArray as $option) 
      {
         $currentType = $option;
         $roomName = $currentType["room name"];
         $roomServicesArray = $currentType["room services"];
         $roomPrice = $currentType["net price"];
         $admitsPax = $currentType["admits pax"];
         $paxAmmount = $currentType["pax amount"];
         $roomThumbnailImage = $currentType["room thumbnail image"][0];

         $roomThumbnailImageMarkup = '
            <div class="'.$this->className. "_" .'roomImageContainer">
               <img src="'. $this->imagesFolder . $roomThumbnailImage .'">
            </div>
         ';
         $paxMarkup = $admitsPax == false ? '':'
            <div class="pax_data_container">
               <h4 class="pax_data_container_title">
                  Pax
               </h4>
               <p class="pax_data_container_ammount">
                  '.$paxAmmount.'
               </p>
            </div>
         ';
         $roomServices = "";
         foreach ($roomServicesArray as $service) 
         {
            $roomServices .= " &#8226 " . $service; // &#8226 is the bullet point
         };

         $this->markup .= '
         <div
         id="'.$this->className. "_" . $counter . '"
         class="'.$this->className.'"
         >
            '.$roomThumbnailImageMarkup.'
            <div
            id='.$this->className. "_" . $counter . '
            class='.$this->className."_"."information_container".'
            >
               <h3 class="room_name">
                  '.$roomName.'
               </h3>
               <div class="room_items_container">
                  <p class="room_items">
                     '.$roomServices.'
                  </p>
               </div>
               <div class="room_price_container">
                  <h4 class="room_price_container_title">
                     Precio
                  </h4>
                  <p class="room_price_container_price">
                     '.$roomPrice.'
                  </p>
               </div>
               '.$paxMarkup.'
            </div>
         </div>
         '; 

         

         $counter = $counter + 1;
      };

      return $this->markup;
   }



















}?>