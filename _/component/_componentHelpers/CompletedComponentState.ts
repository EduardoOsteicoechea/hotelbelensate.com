import ComponentState from "./ComponentState.js";

export default class CompletedComponentState extends ComponentState {
  _stateName:string="";

  constructor(

  )
  {
    super();
    this._stateName = "completed";
  }
}