// called from "./_.php";

import manageFilters from "../../../dist/dashboard/dashboard_002/filters/_ManageFilters.js";

export default class 
{
   constructor 
   (
      rootFolder,
      sessionArray,
      pageName,
      componentId,
      componentClassName,

      outerContainer,

      filters,
      filtersTitleAndActionContainer,
      filtersTitleAndActionContainerTitle,

      datesFiltersContainer,
      datesFiltersContainerTitle,
      arrivalFilterContainer,
      arrivalFilterContainerLabel,
      arrivalFilterContainerDatepicker,
      departureFilterContainer,
      departureFilterContainerLabel,
      departureFilterContainerDatePicker,

      capacityFiltersContainer,
      capacityFiltersContainerTitle,
      adultsFilterContainer,
      adultsFilterContainerLabel,
      adultsFilterContainerInput,
      childrenFilterContainer,
      childrenFilterContainerLabel,
      childrenFilterContainerInput,
      childrenFilterContainerChildrenAgesContainer,
      childrenFilterContainerChildrenAgesContainerIndication,
      childrenFilterContainerChildrenAgesContainerItemsContainer,

      roomFilterContainer,
      roomFilterContainerTitle,
      roomFilterContainerCheckboxesContainer,

      budgetFilterContainer,
      budgetFilterContainerTitle,
      budgetFilterContainerCheckboxesContainer,

      locationFilterContainer,
      locationFilterContainerTitle,
      locationFilterContainerCheckboxesContainer,

      appliedFiltersContainer,

      options,
   ) 
   {
      //////////////////////////////////////
      // Store each argument as a property of the current class
      //////////////////////////////////////

      this.rootFolder = document.getElementById(rootFolder);
      this.sessionArray = document.getElementById(sessionArray);
      this.pageName = document.getElementById(pageName);
      this.componentId = document.getElementById(componentId);
      this.componentClassName = document.getElementById(componentClassName);

      this.outerContainer = document.getElementById(outerContainer);

      this.filters = document.getElementById(filters);

      this.filtersTitleAndActionContainer = document.getElementById(filtersTitleAndActionContainer);
      this.filtersTitleAndActionContainerTitle = document.getElementById(filtersTitleAndActionContainerTitle);

      this.datesFiltersContainer = document.getElementById(datesFiltersContainer);
      this.datesFiltersContainerTitle = document.getElementById(datesFiltersContainerTitle);
      this.arrivalFilterContainer = document.getElementById(arrivalFilterContainer);
      this.arrivalFilterContainerLabel = document.getElementById(arrivalFilterContainerLabel);
      this.arrivalFilterContainerDatepicker = document.getElementById(arrivalFilterContainerDatepicker);
      this.departureFilterContainer = document.getElementById(departureFilterContainer);
      this.departureFilterContainerLabel = document.getElementById(departureFilterContainerLabel);
      this.departureFilterContainerDatePicker = document.getElementById(departureFilterContainerDatePicker);

      this.capacityFiltersContainer = document.getElementById(capacityFiltersContainer);
      this.capacityFiltersContainerTitle = document.getElementById(capacityFiltersContainerTitle);
      this.adultsFilterContainer = document.getElementById(adultsFilterContainer);
      this.adultsFilterContainerLabel = document.getElementById(adultsFilterContainerLabel);
      this.adultsFilterContainerInput = document.getElementById(adultsFilterContainerInput);
      this.childrenFilterContainer = document.getElementById(childrenFilterContainer);
      this.childrenFilterContainerLabel = document.getElementById(childrenFilterContainerLabel);
      this.childrenFilterContainerInput = document.getElementById(childrenFilterContainerInput);
      this.childrenFilterContainerChildrenAgesContainer = document.getElementById(childrenFilterContainerChildrenAgesContainer);
      this.childrenFilterContainerChildrenAgesContainerIndication = document.getElementById(childrenFilterContainerChildrenAgesContainerIndication);
      this.childrenFilterContainerChildrenAgesContainerItemsContainer = document.getElementById(childrenFilterContainerChildrenAgesContainerItemsContainer);

      this.roomFilterContainer = document.getElementById(roomFilterContainer);
      this.roomFilterContainerTitle = document.getElementById(roomFilterContainerTitle);
      this.roomFilterContainerCheckboxesContainer = document.getElementById(roomFilterContainerCheckboxesContainer);

      this.budgetFilterContainer = document.getElementById(budgetFilterContainer);
      this.budgetFilterContainerTitle = document.getElementById(budgetFilterContainerTitle);
      this.budgetFilterContainerCheckboxesContainer = document.getElementById(budgetFilterContainerCheckboxesContainer);

      this.locationFilterContainer = document.getElementById(locationFilterContainer);
      this.locationFilterContainerTitle = document.getElementById(locationFilterContainerTitle);
      this.locationFilterContainerCheckboxesContainer = document.getElementById(locationFilterContainerCheckboxesContainer);

      this.appliedFiltersContainer = document.getElementById(appliedFiltersContainer);

      this.options = document.getElementById(options);
      

      manageFilters(
         this.filters,

         this.filtersTitleAndActionContainer,
         this.filtersTitleAndActionContainerTitle,

         this.datesFiltersContainer,
         this.datesFiltersContainerTitle,
         this.arrivalFilterContainer,
         this.arrivalFilterContainerLabel,
         this.arrivalFilterContainerDatepicker,
         this.departureFilterContainer,
         this.departureFilterContainerLabel,
         this.departureFilterContainerDatePicker,

         this.capacityFiltersContainer,
         this.capacityFiltersContainerTitle,
         this.adultsFilterContainer,
         this.adultsFilterContainerLabel,
         this.adultsFilterContainerInput,
         this.childrenFilterContainer,
         this.childrenFilterContainerLabel,
         this.childrenFilterContainerInput,
         this.childrenFilterContainerChildrenAgesContainer,
         this.childrenFilterContainerChildrenAgesContainerIndication,
         this.childrenFilterContainerChildrenAgesContainerItemsContainer,

         this.roomFilterContainer,
         this.roomFilterContainerTitle,
         this.roomFilterContainerCheckboxesContainer,

         this.budgetFilterContainer,
         this.budgetFilterContainerTitle,
         this.budgetFilterContainerCheckboxesContainer,

         this.locationFilterContainer,
         this.locationFilterContainerTitle,
         this.locationFilterContainerCheckboxesContainer,

         this.appliedFiltersContainer,

         this.options,
      );
   }
}