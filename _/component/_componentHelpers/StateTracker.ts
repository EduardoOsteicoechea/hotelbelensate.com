import ComponentState from "./ComponentState.js";
import ErrorComponentState from "./ErrorComponentState.js";
import InitialComponentState from "./InitialComponentState.js";

export default class StateTracker
{
  _state:ComponentState = new InitialComponentState();
  _stateName:string= this._state._stateName;
   
  constructor(){
  }

//   async trackState(resultingState : Promise<ComponentState>): Promise<void> {
  async trackState(callback: (...args:any[]) => ComponentState):Promise<void> {
   this._state = await callback();
   this._stateName = this._state._stateName;
  }
}