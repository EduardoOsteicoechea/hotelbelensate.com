import CompletedComponentState from "../../../../_componentHelpers/CompletedComponentState.js";
import ErrorComponentState from "../../../../_componentHelpers/ErrorComponentState.js";
import InitialComponentState from "../../../../_componentHelpers/InitialComponentState.js";
import Subcomponent from "../../../../_componentHelpers/Subcomponent.js";
import ControlsEnabledComponentState from "../../../../_componentHelpers/ControlsEnabledComponentState.js";
export default class DepartureInputManager extends Subcomponent {
    constructor(compomentManger, stateTracker, datesFiltersContainer, _arrivalInput, departureInput, appliedFiltersContainer, optionsContainer) {
        super();
        this._compomentManger = compomentManger;
        this._stateTracker = stateTracker;
        this._datesFiltersContainer = datesFiltersContainer;
        this._arrivalInput = _arrivalInput;
        this._departureInput = departureInput;
        this._appliedFiltersContainer = appliedFiltersContainer;
        this._optionsContainer = optionsContainer;
    }
    async determineWorkflow() {
        return new Promise((resolve, reject) => {
            if (this._departureInput.value !== "") {
                this._stateTracker._state = new CompletedComponentState();
            }
            else {
                this._stateTracker._state = new ControlsEnabledComponentState();
            }
            resolve(this._stateTracker._state);
        });
    }
    async executeWorkflow(componentState) {
        return new Promise((resolve, reject) => {
            if (componentState._stateName === "completed") {
                if (this.setControlsToCompletedState() === undefined) {
                    resolve(new CompletedComponentState());
                }
                else {
                    resolve(new ErrorComponentState());
                }
                ;
            }
            ;
        });
    }
    setControlsToCompletedState() {
        try {
            this._arrivalInput.disabled = true;
            this._departureInput.disabled = true;
            try {
                this._createDatesCompletedIndicator();
            }
            catch (error) {
                throw new Error("Error at createDatesCompletedIndicator()");
            }
            ;
            this._datesFiltersContainer.classList.remove("initialFilterState");
            this._datesFiltersContainer.classList.add("completedFilterState");
        }
        catch (error) {
            throw new Error("Error at setControlsToInitialState()");
        }
        ;
    }
    _createDatesCompletedIndicator() {
        try {
            const datesFilterAppliedIndicatorContainer = document.createElement("div");
            datesFilterAppliedIndicatorContainer.id = "datesFilterAppliedIndicatorContainer";
            const datesFilterAppliedIndicatorHeading = document.createElement("div");
            datesFilterAppliedIndicatorHeading.id = "datesFilterAppliedIndicatorHeading";
            this._printSelectedDates(datesFilterAppliedIndicatorHeading);
            const datesFilterAppliedIndicatorDeleteButton = document.createElement("div");
            datesFilterAppliedIndicatorDeleteButton.id = "datesFilterAppliedIndicatorDeleteButton";
            const datesFilterAppliedIndicatorDeleteButtonContainerBar1 = document.createElement("div");
            datesFilterAppliedIndicatorDeleteButtonContainerBar1.id = "datesFilterAppliedIndicatorDeleteButtonContainerBar1";
            const datesFilterAppliedIndicatorDeleteButtonContainerBar2 = document.createElement("div");
            datesFilterAppliedIndicatorDeleteButtonContainerBar2.id = "datesFilterAppliedIndicatorDeleteButtonContainerBar2";
            try {
                this._appendDeleteDatesIndicatorButtonEvent(datesFilterAppliedIndicatorDeleteButton, datesFilterAppliedIndicatorContainer, this._stateTracker);
            }
            catch (error) {
                throw new Error("Error at _appendDeleteDatesIndicatorButtonEvent()");
            }
            ;
            datesFilterAppliedIndicatorDeleteButton.appendChild(datesFilterAppliedIndicatorDeleteButtonContainerBar1);
            datesFilterAppliedIndicatorDeleteButton.appendChild(datesFilterAppliedIndicatorDeleteButtonContainerBar2);
            datesFilterAppliedIndicatorContainer.appendChild(datesFilterAppliedIndicatorHeading);
            datesFilterAppliedIndicatorContainer.appendChild(datesFilterAppliedIndicatorDeleteButton);
            this._appliedFiltersContainer.appendChild(datesFilterAppliedIndicatorContainer);
        }
        catch (error) {
            throw new Error("Error at createDatesCompletedIndicator()");
        }
        ;
    }
    _printSelectedDates(parentElement) {
        try {
            const arrivalDate = document.createElement("div");
            arrivalDate.innerHTML = "Llegada: " + this._arrivalInput.value;
            const departureDate = document.createElement("div");
            departureDate.innerHTML = "Salida: " + this._departureInput.value;
            parentElement.appendChild(arrivalDate);
            parentElement.appendChild(departureDate);
        }
        catch (error) {
            throw new Error("Error at createDatesCompletedIndicator()");
        }
        ;
    }
    _appendDeleteDatesIndicatorButtonEvent(buttonElement, indicatorElement, stateTracker) {
        try {
            buttonElement.addEventListener("pointerup", (event) => {
                indicatorElement.remove();
                stateTracker._state = new InitialComponentState();
            });
        }
        catch (error) {
            throw new Error("Error at _appendDeleteDatesIndicatorButtonEvent()");
        }
        ;
    }
}
//# sourceMappingURL=DepartureInputManager.js.map