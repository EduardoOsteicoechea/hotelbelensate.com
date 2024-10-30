import DatesManager from "./dates/DatesManager.js";
export default class FiltersManager {
    constructor(filtersContainer, filtersTitleAndActionContainer, filtersTitleAndActionContainerTitle, datesFiltersContainer, datesFiltersContainerTitle, arrivalFilterContainer, arrivalFilterContainerLabel, arrivalFilterContainerDateInput, departureFilterContainer, departureFilterContainerLabel, departureFilterContainerDateInput, capacityFiltersContainer, capacityFiltersContainerTitle, adultsFilterContainer, adultsFilterContainerLabel, adultsFilterContainerInput, childrenFilterContainer, childrenFilterContainerLabel, childrenFilterContainerInput, childrenFilterContainerChildrenagesContainer, childrenFilterContainerChildrenagesContainerIndication, childrenFilterContainerChildrenagesContainerItemsContainer, roomFilterContainer, roomFilterContainerTitle, roomFilterContainerCheckboxesContainer, locationFilterContainer, locationFilterContainerTitle, locationFilterContainerCheckboxesContainer, budgetFilterContainer, budgetFilterContainerTitle, budgetFilterContainerCheckboxesContainer, appliedfilterscontainer, optionsContainer) {
        const datesManager = new DatesManager(datesFiltersContainer, arrivalFilterContainerDateInput, departureFilterContainerDateInput, appliedfilterscontainer, optionsContainer);
        datesManager.initialize();
    }
}
//# sourceMappingURL=FiltersManager.js.map