// called from "../_js";
import AppliedFiltersManager from "./AppliedFiltersManager.js";
import DatesFilterManager from "./DatesFilterManager.js";
import OptionsManager from "./OptionsManager.js";
export default function (filtersContainer, filtersTitleContainer, filtersTitleContainerHeading, datesFiltersContainer, datesFiltersContainerHeading, arrivalFilterContainer, arrivalFilterContainerLabel, arrivalFilterInput, departureFilterContainer, departureFilterContainerLabel, departureFilterInput, capacityFiltersContainer, capacityFiltersContainerHeading, adultsFilterContainer, adultsFilterContainerLabel, adultsFilterContainerInput, childrenFilterContainer, childrenFilterContainerLabel, childrenFilterContainerInpu, childrenFilterContainerChildrenAgesContainer, childrenFilterContainerChildrenAgesContainerHeading, childrenFilterContainerChildrenAgesContainerItemsContainer, roomFilterContainer, roomFilterContainerHeading, roomFilterContainerItemsContainer, locationFilterContainer, locationFilterContainerHeading, locationFilterContainerItemsContainer, budgetFilterContainer, budgetFilterContainerHeading, budgetFilterContainerItemsContainer, applied_filters_container, optionsContainer) {
    const optionsManager = new OptionsManager(optionsContainer);
    const datesFilterManger = new DatesFilterManager(datesFiltersContainer, arrivalFilterInput, departureFilterInput);
    const appliedFiltersManager = new AppliedFiltersManager(applied_filters_container, datesFilterManger, optionsManager);
    datesFilterManger.initialize(appliedFiltersManager);
}
//# sourceMappingURL=_manageFilters.js.map