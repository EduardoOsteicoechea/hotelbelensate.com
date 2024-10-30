import DatesManager from "./dates/DatesManager.js";

export default class FiltersManager {
   constructor(
      filtersContainer: HTMLDivElement,
      filtersTitleAndActionContainer: HTMLDivElement,
      filtersTitleAndActionContainerTitle: HTMLHeadingElement,
      datesFiltersContainer: HTMLDivElement,
      datesFiltersContainerTitle: HTMLHeadingElement,
      arrivalFilterContainer: HTMLDivElement,
      arrivalFilterContainerLabel: HTMLLabelElement,
      arrivalFilterContainerDateInput: HTMLInputElement,
      departureFilterContainer: HTMLDivElement,
      departureFilterContainerLabel: HTMLLabelElement,
      departureFilterContainerDateInput: HTMLInputElement,
      capacityFiltersContainer: HTMLDivElement,
      capacityFiltersContainerTitle: HTMLHeadingElement,
      adultsFilterContainer: HTMLDivElement,
      adultsFilterContainerLabel: HTMLLabelElement,
      adultsFilterContainerInput: HTMLInputElement,
      childrenFilterContainer: HTMLDivElement,
      childrenFilterContainerLabel: HTMLLabelElement,
      childrenFilterContainerInput: HTMLInputElement,
      childrenFilterContainerChildrenagesContainer: HTMLDivElement,
      childrenFilterContainerChildrenagesContainerIndication: HTMLHeadingElement,
      childrenFilterContainerChildrenagesContainerItemsContainer: HTMLDivElement,
      roomFilterContainer: HTMLDivElement,
      roomFilterContainerTitle: HTMLHeadingElement,
      roomFilterContainerCheckboxesContainer: HTMLDivElement,
      locationFilterContainer: HTMLDivElement,
      locationFilterContainerTitle: HTMLHeadingElement,
      locationFilterContainerCheckboxesContainer: HTMLDivElement,
      budgetFilterContainer: HTMLDivElement,
      budgetFilterContainerTitle: HTMLHeadingElement,
      budgetFilterContainerCheckboxesContainer: HTMLDivElement,
      appliedfilterscontainer: HTMLDivElement,
      optionsContainer: HTMLDivElement,
   ) {
      const datesManager = new DatesManager(
         datesFiltersContainer,
         arrivalFilterContainerDateInput,
         departureFilterContainerDateInput,
         appliedfilterscontainer,
         optionsContainer,
      );
      datesManager.initialize();
   }
}