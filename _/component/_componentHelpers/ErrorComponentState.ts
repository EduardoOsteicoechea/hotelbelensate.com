import ComponentState from "./ComponentState.js";

export default class ErrorComponentState extends ComponentState {
  _stateName:string="";

  constructor(

  )
  {
    super();
    this._stateName = "error";
  }
}