// called from "./_ManageFilters.ts";
export default class AppliedFiltersManager {
    constructor(container, datesFilterManager, optionsManager) {
        this._container = container;
        this._datesFilterManager = datesFilterManager;
        this._optionsManager = optionsManager;
    }
    createAppliedDatesFilterIndicatorControl(arrival, departure) {
        if (document.getElementById("datesFilter") === null) {
            const valuesContainer = document.createElement("div");
            const arrivalContainer = document.createElement("div");
            arrivalContainer.innerHTML = "llegada: " + arrival;
            const departureContainer = document.createElement("div");
            departureContainer.innerHTML = "salida: " + departure;
            valuesContainer.appendChild(arrivalContainer);
            valuesContainer.appendChild(departureContainer);
            const closeButtonContainer = document.createElement("div");
            closeButtonContainer.classList.add("closeButton");
            this.addCloseButtonContainerPointerUpEvent(closeButtonContainer);
            const closeButtonContainerBar1 = document.createElement("div");
            closeButtonContainerBar1.classList.add("closeButtonBar");
            closeButtonContainerBar1.classList.add("closeButtonBar1");
            const closeButtonContainerBar2 = document.createElement("div");
            closeButtonContainerBar2.classList.add("closeButtonBar");
            closeButtonContainerBar2.classList.add("closeButtonBar2");
            closeButtonContainer.appendChild(closeButtonContainerBar1);
            closeButtonContainer.appendChild(closeButtonContainerBar2);
            const outerContainer = document.createElement("div");
            outerContainer.id = "datesFilter";
            outerContainer.appendChild(valuesContainer);
            outerContainer.appendChild(closeButtonContainer);
            this._container.appendChild(outerContainer);
        }
        ;
        this._optionsManager.generateOptions([arrival, departure]);
    }
    removeDatesFilter() {
        document.getElementById("datesFilter")?.remove();
        this._datesFilterManager.resetFilter();
    }
    addCloseButtonContainerPointerUpEvent(closeButtonContainer) {
        closeButtonContainer.addEventListener("pointerup", () => {
            this._datesFilterManager.resetFilter();
            this.removeDatesFilter();
        });
    }
}
//# sourceMappingURL=AppliedFiltersManager.js.map