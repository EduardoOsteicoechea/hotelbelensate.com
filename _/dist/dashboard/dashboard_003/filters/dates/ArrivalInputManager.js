import ErrorComponentState from "../../../../_componentHelpers/ErrorComponentState.js";
import InitialComponentState from "../../../../_componentHelpers/InitialComponentState.js";
import Subcomponent from "../../../../_componentHelpers/Subcomponent.js";
import ControlsEnabledComponentState from "../../../../_componentHelpers/ControlsEnabledComponentState.js";
export default class ArrivalInputManager extends Subcomponent {
    constructor(compomentManger, stateTracker, datesFiltersContainer, _arrivalInput, departureInput, appliedFiltersContainer, optionsContainer) {
        super();
        this._stateTracker = stateTracker;
        this._datesFiltersContainer = datesFiltersContainer;
        this._arrivalInput = _arrivalInput;
        this._departureInput = departureInput;
        this._appliedFiltersContainer = appliedFiltersContainer;
        this._optionsContainer = optionsContainer;
    }
    async determineWorkflow() {
        return new Promise((resolve, reject) => {
            if (this._arrivalInput.value !== "") {
                this._stateTracker._state = new ControlsEnabledComponentState();
            }
            else {
                this._stateTracker._state = new InitialComponentState();
            }
            resolve(this._stateTracker._state);
        });
    }
    async executeWorkflow(componentState) {
        return new Promise((resolve, reject) => {
            if (componentState._stateName === "initial"
                ||
                    componentState._stateName === "Error"
                ||
                    componentState._stateName === "") {
                if (this.setComponentInitialState() === undefined) {
                    resolve(new InitialComponentState());
                }
                else {
                    resolve(new ErrorComponentState());
                }
                ;
            }
            else if (componentState._stateName === "controlsEnabled") {
                if (this.enableDepartureInput() === undefined) {
                    resolve(new ControlsEnabledComponentState());
                }
                else {
                    resolve(new ErrorComponentState());
                }
                ;
            }
            ;
        });
    }
    setComponentInitialState() {
        try {
            this._setControlsToInitialState(this._arrivalInput, this._departureInput);
            this._setDatesFilterContainerAppereanceToNotCompleted(this._datesFiltersContainer);
            this._removeFilterCompletionIndicator(this._appliedFiltersContainer);
            this._inforceFilterOperationsCompletion();
        }
        catch (error) {
            throw new Error("Error at setControlsToInitialState()");
        }
        ;
    }
    _setControlsToInitialState(arrivalInput, departureInput) {
        try {
            arrivalInput.value = "";
            arrivalInput.disabled = false;
            departureInput.value = "";
            departureInput.disabled = true;
        }
        catch (error) {
            throw new Error("Error at ");
        }
        ;
    }
    _setDatesFilterContainerAppereanceToNotCompleted(container) {
        try {
            container.classList.remove("completedFilterState");
            container.classList.add("initialFilterState");
        }
        catch (error) {
            throw new Error("Error at ");
        }
        ;
    }
    _removeFilterCompletionIndicator(container) {
        try {
            container.querySelector("#datesFilter")?.remove();
        }
        catch (error) {
            throw new Error("Error at ");
        }
        ;
    }
    _inforceFilterOperationsCompletion() {
        try {
        }
        catch (error) {
            throw new Error("Error at ");
        }
        ;
    }
    enableDepartureInput() {
        try {
            this._departureInput.disabled = false;
        }
        catch (error) {
            throw new Error("Error at enableDepartureInput()");
        }
        ;
    }
}
//# sourceMappingURL=ArrivalInputManager.js.map