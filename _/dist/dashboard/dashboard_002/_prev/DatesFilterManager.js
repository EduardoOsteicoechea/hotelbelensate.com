export default class DatesFilterManager {
    constructor(filterContainer, arrivalInput, departureInput) {
        this._appliedFiltersManager = null;
        this._filterContainer = filterContainer;
        this._arrivalInput = arrivalInput;
        this._departureInput = departureInput;
    }
    initialize(appliedFiltersManager) {
        this._appliedFiltersManager = appliedFiltersManager;
        this.setInitialState(this._filterContainer, this._arrivalInput, this._departureInput, this._appliedFiltersManager);
    }
    setInitialState(filterContainer, arrivalInput, departureInput, appliedFiltersManager) {
        this.setArrivalInputMinimalDate(this._arrivalInput);
        this.setArrivalInputMaximumDate(this._arrivalInput);
        this.setDepartureInputMinimalDate(this._departureInput);
        this.setDepartureInputMaximumDate(this._departureInput);
        this.addArrivalInputEventListener(this._filterContainer, this._arrivalInput, this._departureInput, this._appliedFiltersManager);
        this.addDepartureInputEventListener(this._filterContainer, this._arrivalInput, this._departureInput, this._appliedFiltersManager);
    }
    resetFilter() {
        this.removeFilterResetButton();
        this.setFilterAppareanceToUncompletedState();
        this.setArrivalInputInitialState();
        this.setDepartureInputInitialState();
        this.setArrivalInputMinimalDate(this._arrivalInput);
        this.setArrivalInputMaximumDate(this._arrivalInput);
        this.setDepartureInputMinimalDate(this._departureInput);
        this.setDepartureInputMaximumDate(this._departureInput);
    }
    setArrivalInputInitialState() {
        this._arrivalInput.value = "";
        this._arrivalInput.disabled = false;
    }
    setDepartureInputInitialState() {
        this._departureInput.value = "";
        this._departureInput.disabled = true;
    }
    setArrivalInputCompletedState() {
        this._arrivalInput.disabled = true;
    }
    setDepartureInputCompletedState() {
        this._departureInput.disabled = true;
    }
    addArrivalInputEventListener(filterContainer, arrivalInput, departureInput, appliedFiltersManager) {
        arrivalInput.addEventListener("change", (event) => {
            const selectedDate = arrivalInput.value;
            if (selectedDate === "") {
                departureInput.value = "";
                departureInput.disabled = true;
                this.setDepartureInputMinimalDate(departureInput);
            }
            else {
                departureInput.disabled = false;
                this.setDepartureInputMinimalDate(departureInput, selectedDate);
            }
            ;
        });
    }
    addDepartureInputEventListener(filterContainer, arrivalInput, departureInput, appliedFiltersManager) {
        departureInput.addEventListener("change", (event) => {
            const selectedDate = departureInput.value;
            if (selectedDate !== "") {
                this.setArrivalInputMaximumDate(arrivalInput, selectedDate);
                this.setFilterToCompletedState(filterContainer, arrivalInput, departureInput, appliedFiltersManager);
                appliedFiltersManager?.createAppliedDatesFilterIndicatorControl(arrivalInput.value, departureInput.value);
            }
            ;
        });
    }
    setArrivalInputMinimalDate(input, optionalMinimalDate = "") {
        let newDate = new Date();
        input.min = this.formatDateForDateInput(newDate);
    }
    setArrivalInputMaximumDate(input, optionalMinimalDate = "") {
        if (optionalMinimalDate === "") {
            let newDate = new Date();
            newDate.setDate(newDate.getDate() + 30);
            input.max = this.formatDateForDateInput(newDate);
        }
        else {
            let newDate = new Date(optionalMinimalDate);
            newDate.setDate(newDate.getDate() - 1);
            input.max = this.formatDateForDateInput(newDate);
        }
        ;
    }
    setDepartureInputMinimalDate(input, optionalMinimalDate = "") {
        if (optionalMinimalDate === "") {
            let newDate = new Date();
            newDate.setDate(newDate.getDate() + 1);
            input.min = this.formatDateForDateInput(newDate);
        }
        else {
            let newDate = new Date(optionalMinimalDate);
            newDate.setDate(newDate.getDate() + 1);
            input.min = this.formatDateForDateInput(newDate);
        }
        ;
    }
    setDepartureInputMaximumDate(input) {
        let newDate = new Date();
        newDate.setDate(newDate.getDate() + 30);
        input.max = this.formatDateForDateInput(newDate);
    }
    formatDateForDateInput(date) {
        return date.toISOString().slice(0, 10);
    }
    setFilterAppareanceToUncompletedState() {
        this._filterContainer.classList.remove("filled_filters");
    }
    setFilterToCompletedState(filterContainer, arrivalarrivalInput, departureInput, appliedFiltersManager) {
        this.setArrivalInputCompletedState();
        this.setDepartureInputCompletedState();
        filterContainer.classList.add("filled_filters");
        this.createResetFilterButton(filterContainer, arrivalarrivalInput, departureInput, appliedFiltersManager);
    }
    createResetFilterButton(filterContainer, arrivalInput, departureInput, appliedFiltersManager) {
        const outerContainer = document.createElement("div");
        outerContainer.classList.add("ResetFilterButtonContainer");
        outerContainer.id = "DatesResetFilterButtonContainer";
        const message = document.createElement("div");
        message.classList.add("ResetFilterButtonMessage");
        message.innerHTML = "Remover";
        const button = document.createElement("div");
        button.classList.add("ResetFilterButton");
        this.addResetFilterButtonClickEvent(outerContainer, filterContainer, arrivalInput, departureInput, button, appliedFiltersManager);
        const buttonBar1 = document.createElement("div");
        buttonBar1.classList.add("ResetFilterButtonBar");
        buttonBar1.classList.add("ResetFilterButtonBar1");
        const buttonBar2 = document.createElement("div");
        buttonBar2.classList.add("ResetFilterButtonBar");
        buttonBar2.classList.add("ResetFilterButtonBar2");
        button.appendChild(buttonBar1);
        button.appendChild(buttonBar2);
        outerContainer.appendChild(message);
        outerContainer.appendChild(button);
        filterContainer.appendChild(outerContainer);
    }
    addResetFilterButtonClickEvent(outerContainer, filterContainer, arrivalInput, departureInput, button, appliedFiltersManager) {
        button.addEventListener("pointerup", (event) => {
            this.removeFilterResetButton();
            appliedFiltersManager?.removeDatesFilter();
            this.setFilterAppareanceToUncompletedState();
            this.resetFilter();
        });
    }
    removeFilterResetButton() {
        const resetFilterButtonContainer = document.getElementById("DatesResetFilterButtonContainer");
        if (resetFilterButtonContainer) {
            resetFilterButtonContainer.innerHTML = "";
        }
        resetFilterButtonContainer?.remove();
    }
}
//# sourceMappingURL=DatesFilterManager.js.map