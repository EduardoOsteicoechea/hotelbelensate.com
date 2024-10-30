import ComponentState from "./ComponentState.js";

export default class Subcomponent
{
  _stateName:string = "";

  constructor(

  ){
    // console.log("Exported Subcomponent");
  }

  async determineWorkflow(): Promise<any> {
    return new Promise(()=> {});
  }

  async executeWorkflow(componentState: ComponentState): Promise<any> {
    return new Promise(()=> {});
  }
}