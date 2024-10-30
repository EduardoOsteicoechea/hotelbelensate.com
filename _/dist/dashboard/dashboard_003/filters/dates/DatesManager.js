import Component from "../../../../_componentHelpers/Component.js";
// export default class DatesManager extends Component {
export default class DatesManager extends Component {
    constructor(datesFiltersContainer, arrivalInput, departureInput, appliedFilterscontainer, optionsContainer) {
        super();
        this._currentState = "initial";
        this._datesFiltersContainer = datesFiltersContainer;
        this._arrivalInput = arrivalInput;
        this._departureInput = departureInput;
        this._appliedFilterscontainer = appliedFilterscontainer;
        this._optionsContainer = optionsContainer;
    }
    async _configureUI() {
        this._setMinimalArrivalDate();
        this._setMaximumArrivalDate();
        this._setMinimalDepartureDate();
        this._setMaximumDepartureDate();
        this.setInitialState();
    }
    _setMinimalArrivalDate() {
        const date = new Date();
        const formattedDate = date.toISOString().substring(0, 10);
        this._arrivalInput.min = formattedDate;
    }
    _setMaximumArrivalDate() {
        let date = new Date();
        date.setDate(date.getDate() + 30);
        const formattedDate = date.toISOString().substring(0, 10);
        this._arrivalInput.max = formattedDate;
    }
    _setMinimalDepartureDate() {
        const arrivalDateStringValue = this._arrivalInput.min;
        const equivalentDate = new Date(arrivalDateStringValue);
        equivalentDate.setDate(equivalentDate.getDate() + 1);
        const formattedDate = equivalentDate.toISOString().substring(0, 10);
        this._departureInput.min = formattedDate;
    }
    _setMaximumDepartureDate() {
        this._departureInput.max = this._arrivalInput.max;
    }
    _addEventListeners() {
        this._arrivalInput.addEventListener("change", () => {
            const identifiedWorkflowName = this._identifyArrivalInputWorkflow();
            const identifiedWorkflow = () => this._identifyWorkflow(this._identifyArrivalInputWorkflow());
            identifiedWorkflow();
            console.log(identifiedWorkflowName);
            console.log(identifiedWorkflow);
            console.log(this._updateState(identifiedWorkflow));
        });
    }
    _identifyWorkflow(functionName) {
        try {
            return this._stateUpdaters[functionName];
        }
        catch (error) {
            throw error;
        }
    }
    _identifyArrivalInputWorkflow() {
        try {
            if (this._arrivalInput.value !== "") {
                return this._statesNames.controlsEnabled;
            }
            return this._statesNames.initial;
        }
        catch (error) {
            throw error;
        }
    }
    _identifyDepartureInputWorkflow() {
        try {
            if (this._departureInput.value !== "") {
                return this._statesNames.completed;
            }
            return this._statesNames.controlsEnabled;
        }
        catch (error) {
            throw error;
        }
    }
    setInitialState() {
        this._setArrivalInputInitialState();
        this._setDepartureInputInitialState();
        this._currentState = "initial";
    }
    _setArrivalInputInitialState() {
        this._arrivalInput.value = "";
        this._arrivalInput.disabled = false;
    }
    _setDepartureInputInitialState() {
        this._departureInput.value = "";
        this._departureInput.disabled = true;
    }
    _setArrivalInputControlsEnabledState() {
        this._arrivalInput.disabled = false;
    }
    _setDepartureInputControlsEnabledState() {
        if (this._currentState !== "initial") {
            this._departureInput.disabled = false;
        }
        ;
    }
    setControlsEnabledState() {
        try {
            console.log("setControlsEnabledState");
            this._arrivalInput.disabled = false;
        }
        catch (error) {
            throw error;
        }
    }
    setControlsDisabledState() {
        try {
        }
        catch (error) {
            throw error;
        }
    }
    setWarningState() {
        try {
        }
        catch (error) {
            throw error;
        }
    }
    setErrorState() {
        try {
        }
        catch (error) {
            throw error;
        }
    }
    setCompletedState() {
        try {
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=DatesManager.js.map