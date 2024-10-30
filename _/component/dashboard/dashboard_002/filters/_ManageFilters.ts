// called from "../_js";

import AppliedFiltersManager from "./AppliedFiltersManager.js";
import DatesFilterManager from "./DatesFilterManager.js";
import OptionsManager from "./OptionsManager.js";

export default function 
(
   filtersContainer:HTMLDivElement,

   filtersTitleContainer:HTMLDivElement,
   filtersTitleContainerHeading:HTMLHeadingElement,

   datesFiltersContainer:HTMLDivElement,
   datesFiltersContainerHeading:HTMLHeadingElement,
   arrivalFilterContainer:HTMLDivElement,
   arrivalFilterContainerLabel:HTMLLabelElement,
   arrivalFilterInput:HTMLInputElement,
   departureFilterContainer:HTMLDivElement,
   departureFilterContainerLabel:HTMLLabelElement,
   departureFilterInput:HTMLInputElement,

   capacityFiltersContainer:HTMLDivElement,
   capacityFiltersContainerHeading:HTMLHeadingElement,
   adultsFilterContainer:HTMLDivElement,
   adultsFilterContainerLabel:HTMLLabelElement,
   adultsFilterContainerInput:HTMLInputElement,
   childrenFilterContainer:HTMLDivElement,
   childrenFilterContainerLabel:HTMLLabelElement,
   childrenFilterContainerInpu:HTMLInputElement,
   childrenFilterContainerChildrenAgesContainer:HTMLDivElement,
   childrenFilterContainerChildrenAgesContainerHeading:HTMLHeadingElement,
   childrenFilterContainerChildrenAgesContainerItemsContainer:HTMLDivElement,

   roomFilterContainer:HTMLDivElement,
   roomFilterContainerHeading:HTMLHeadingElement,
   roomFilterContainerItemsContainer:HTMLDivElement,

   locationFilterContainer:HTMLDivElement,
   locationFilterContainerHeading:HTMLHeadingElement,
   locationFilterContainerItemsContainer:HTMLDivElement,

   budgetFilterContainer:HTMLDivElement,
   budgetFilterContainerHeading:HTMLHeadingElement,
   budgetFilterContainerItemsContainer:HTMLDivElement,

   applied_filters_container:HTMLDivElement,

   optionsContainer:HTMLDivElement,
)
{
   const optionsManager = new OptionsManager(optionsContainer);

   const datesFilterManger = new DatesFilterManager(
      datesFiltersContainer,
      arrivalFilterInput,
      departureFilterInput
   );
   
   const appliedFiltersManager = new AppliedFiltersManager(
      applied_filters_container, 
      datesFilterManger, 
      optionsManager
   );
   
   datesFilterManger.initialize(appliedFiltersManager);
}