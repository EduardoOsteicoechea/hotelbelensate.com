import InitialComponentState from "./InitialComponentState.js";
export default class StateTracker {
    constructor() {
        this._state = new InitialComponentState();
        this._stateName = this._state._stateName;
    }
    //   async trackState(resultingState : Promise<ComponentState>): Promise<void> {
    async trackState(callback) {
        this._state = await callback();
        this._stateName = this._state._stateName;
    }
}
//# sourceMappingURL=StateTracker.js.map