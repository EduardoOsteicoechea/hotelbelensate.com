// import CompletedComponentState from "../../../../_componentHelpers/CompletedComponentState.js";
// import Component from "../../../../_componentHelpers/Component.js";
// import ComponentState from "../../../../_componentHelpers/ComponentState.js";
// import ControlsEnabledComponentState from "../../../../_componentHelpers/ControlsEnabledComponentState.js";
// import ErrorComponentState from "../../../../_componentHelpers/ErrorComponentState.js";
// import StateCallbacksObject from "../../../../_componentHelpers/IStateCallBacksObject.js";
// import Subcomponent from "../../../../_componentHelpers/Subcomponent.js";
// import ArrivalInputManager from "./ArrivalInputManager.js";
// import DepartureInputManager from "./DepartureInputManager.js";

// export default class DatesManager extends Component {

//    _datesFiltersContainer: HTMLDivElement;
//    _arrivalInput: HTMLInputElement;
//    _departureInput: HTMLInputElement;
//    _appliedfilterscontainer: HTMLDivElement;
//    _optionsContainer: HTMLDivElement;

//    _arrivalInputManager: Subcomponent;
//    _departureInputManager: Subcomponent;

//    constructor(
//       datesFiltersContainer: HTMLDivElement,
//       arrivalInput: HTMLInputElement,
//       departureInput: HTMLInputElement,
//       appliedfilterscontainer: HTMLDivElement,
//       optionsContainer: HTMLDivElement,
//    ) {
//       super(); // This runs the base class constructor before extending it's functionality here.
//       this._datesFiltersContainer = datesFiltersContainer;
//       this._arrivalInput = arrivalInput;
//       this._departureInput = departureInput;
//       this._appliedfilterscontainer = appliedfilterscontainer;
//       this._optionsContainer = optionsContainer;

//       this._arrivalInputManager = new ArrivalInputManager(
//          this,
//          this._stateTracker,
//          datesFiltersContainer,
//          arrivalInput,
//          departureInput,
//          appliedfilterscontainer,
//          optionsContainer,
//       );

//       this._departureInputManager = new DepartureInputManager(
//          this,
//          this._stateTracker,
//          datesFiltersContainer,
//          arrivalInput,
//          departureInput,
//          appliedfilterscontainer,
//          optionsContainer,
//       );
      
//       this._stateCallbacks.initial = () => this.setComponentInitialState();
//       this._stateCallbacks.completed = () => this.setComponentCompletedState();
//       this._stateCallbacks.controlsEnabled = () => this.setComponentControlsEnabledState();
//       this._stateCallbacks.controlsDisabled = () => this.setComponentControlsDisabledState();
//       this._stateCallbacks.warning = () => this.setComponentWarningState();
//       this._stateCallbacks.error = () => this.setComponentErrorState();
//    }

//    ////////////////////////////////////
//    ////////////////////////////////////
//    // I decided to declare a separated initialization method 
//    // to decouple the constructor from the asynchronous operations 
//    ////////////////////////////////////
//    ////////////////////////////////////

//    async initialize(): Promise<void> {
      
//       ////////////////////////////////////
//       // Configure inputs event listeners
//       ////////////////////////////////////

//       await this._arrivalInput.addEventListener("change", async (event:any) => 
//       {
//          ////////////////////////////////////
//          // Determine next action according to input state and track state
//          ////////////////////////////////////

//          const result = await this._arrivalInputManager.determineWorkflow();
//          await this._stateTracker.trackState(()=>result);

//          ////////////////////////////////////
//          // Log the result for verification
//          ////////////////////////////////////
         
//          console.log(this._stateTracker._state);

//          ////////////////////////////////////
//          // Run corresponding workflow and track state
//          ////////////////////////////////////         

//          const result2 = await this._arrivalInputManager.executeWorkflow(this._stateTracker._state);
//          await this._stateTracker.trackState(()=>result2);

//          ////////////////////////////////////
//          // Log the result for verification
//          ////////////////////////////////////
         
//          console.log(this._stateTracker._state);
//       });

//       await this._departureInput.addEventListener("change", async (event:any) => 
//       {   
//          const result = await this._departureInputManager.determineWorkflow();
//          await this._stateTracker.trackState(()=>result);
         
//          console.log(this._stateTracker._state);       

//          const result2 = await this._departureInputManager.executeWorkflow(this._stateTracker._state);
//          await this._stateTracker.trackState(()=>result2);            
//          console.log(this._stateTracker._state);
//       });       
//    };

//    setComponentInitialState():void{

//    }
//    setComponentCompletedState():void{
//       try {  
//          this._arrivalInput.disabled = true;
//          this._departureInput.disabled = true;
         
//          try {  
//             this._createControlWorkflowCompletedInnerIndicator();
//          } catch (error) {
//             throw new Error("Error at createDatesCompletedIndicator()");
//          };
         
//          try {  
//             this._createFilterAppliedTag();
//          } catch (error) {
//             throw new Error("Error at createDatesCompletedIndicator()");
//          };

//          this._datesFiltersContainer.classList.remove("initialFilterState");
//          this._datesFiltersContainer.classList.add("completedFilterState");

//       } catch (error) {
//          throw new Error("Error at setControlsToInitialState()");
//       };
//    }
//    setComponentControlsEnabledState():void{
      
//    }
//    setComponentControlsDisabledState():void{
      
//    }
//    setComponentWarningState():void{
      
//    }
//    setComponentErrorState():void{
      
//    }
// }