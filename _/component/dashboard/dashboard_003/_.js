// called from "./_.php";

import FiltersManager from "../../../dist/dashboard/dashboard_003/filters/FiltersManager.js";

export default class {
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
      childrenFilterContainerChildrenagesContainer,
      childrenFilterContainerChildrenagesContainerIndication,
      childrenFilterContainerChildrenagesContainerItemsContainer,

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
    ) {

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

    this.childrenFilterContainerChildrenagesContainer = document.getElementById(childrenFilterContainerChildrenagesContainer);

    this.childrenFilterContainerChildrenagesContainerIndication = document.getElementById(childrenFilterContainerChildrenagesContainerIndication);

    this.childrenFilterContainerChildrenagesContainerItemsContainer = document.getElementById(childrenFilterContainerChildrenagesContainerItemsContainer);

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

    ////////////////////////////
    // Launch the filters manager
    ////////////////////////////

    new FiltersManager(
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
      this.childrenFilterContainerChildrenagesContainer,
      this.childrenFilterContainerChildrenagesContainerIndication,
      this.childrenFilterContainerChildrenagesContainerItemsContainer,

      this.roomFilterContainer,
      this.roomFilterContainerTitle,
      this.roomFilterContainerCheckboxesContainer,

      this.locationFilterContainer,
      this.locationFilterContainerTitle,
      this.locationFilterContainerCheckboxesContainer,

      this.budgetFilterContainer,
      this.budgetFilterContainerTitle,
      this.budgetFilterContainerCheckboxesContainer,

      this.appliedFiltersContainer,

      this.options,
    );
  };
}