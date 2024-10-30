export default class Component {
    constructor() {
        this._statesNames = {
            initial: "initial",
            completed: "completed",
            controlsEnabled: "controlsEnabled",
            controlsDisabled: "controlsDisabled",
            warning: "warning",
            error: "error",
        };
        this._stateUpdaters = {};
        this._propagatorsArray = [];
    }
    async initialize() {
        await this._configureUI();
        await this._addEventListeners();
        this._stateUpdaters.initial = this.setInitialState;
        this._stateUpdaters.completed = this.setCompletedState;
        this._stateUpdaters.controlsEnabled = this.setControlsEnabledState;
        this._stateUpdaters.controlsDisabled = this.setControlsDisabledState;
        this._stateUpdaters.warning = this.setWarningState;
        this._stateUpdaters.error = this.setErrorState;
    }
    async _configureUI() { }
    _addEventListeners() { }
    // _identifyWorkflow(identifierFunction: (...arg:any[])=> string): () => void {
    //    try {
    //       ///////////////////////////////////////
    //       // Return the state updater that corresponds
    //       // with the required state of the "identifierFunction"
    //       ///////////////////////////////////////
    //       return this._stateUpdaters[identifierFunction()];
    //    } catch (error) {
    //       throw error;
    //    }
    // }
    _updateState(stateUpdaterMethod) {
        // return new Promise(async (resolve, reject) => {
        try {
            ///////////////////////////////////////
            // Run the updater function
            ///////////////////////////////////////
            stateUpdaterMethod();
            ///////////////////////////////////////
            // Run all the propagators functions if any.
            // The propagators functions are the actions related to the current
            // state that affect other components
            ///////////////////////////////////////
            if (this._propagatorsArray.length > 0)
                this._propagateState(this._propagatorsArray);
            // resolve();
        }
        catch (error) {
            // reject(error);
        }
        // });
    }
    async _propagateState(propagatorsArray) {
        return new Promise((resolve, reject) => {
            try {
                propagatorsArray.forEach(method => {
                    method();
                });
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
    }
    setInitialState() {
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
    setControlsEnabledState() {
        try {
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
}
//# sourceMappingURL=Component.js.map