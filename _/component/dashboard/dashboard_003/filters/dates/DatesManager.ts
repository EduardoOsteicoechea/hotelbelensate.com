import Component from "../../../../_componentHelpers/Component.js";

// export default class DatesManager extends Component {
export default class DatesManager extends Component {

   _datesFiltersContainer:HTMLDivElement;
   _arrivalInput:HTMLInputElement;
   _departureInput:HTMLInputElement;
   _appliedFilterscontainer:HTMLDivElement;
   _optionsContainer:HTMLDivElement;
   _currentState:string = "initial";

   constructor(      
      datesFiltersContainer:HTMLDivElement,
      arrivalInput:HTMLInputElement,
      departureInput:HTMLInputElement,
      appliedFilterscontainer:HTMLDivElement,
      optionsContainer:HTMLDivElement,
   ){
      super();
      this._datesFiltersContainer = datesFiltersContainer;
      this._arrivalInput = arrivalInput;
      this._departureInput = departureInput;
      this._appliedFilterscontainer = appliedFilterscontainer;
      this._optionsContainer = optionsContainer;
   }

   async _configureUI(): Promise<void> {
      this._setMinimalArrivalDate();
      this._setMaximumArrivalDate();
      this._setMinimalDepartureDate();
      this._setMaximumDepartureDate();
      this.setInitialState();
   }

   _setMinimalArrivalDate(){
      const date: Date = new Date();
      const formattedDate:string = date.toISOString().substring(0,10); 
      this._arrivalInput.min = formattedDate;
   }
   
   _setMaximumArrivalDate(){
      let date: Date = new Date();
      date.setDate(date.getDate() + 30);
      const formattedDate:string = date.toISOString().substring(0,10);
      this._arrivalInput.max = formattedDate;
   }
   
   _setMinimalDepartureDate(){
      const arrivalDateStringValue:string = this._arrivalInput.min;
      const equivalentDate: Date = new Date(arrivalDateStringValue);
      equivalentDate.setDate(equivalentDate.getDate() + 1);
      const formattedDate: string = equivalentDate.toISOString().substring(0,10);
      this._departureInput.min = formattedDate;
   }

   _setMaximumDepartureDate(){
      this._departureInput.max = this._arrivalInput.max;
   }

   _addEventListeners() {
      this._arrivalInput.addEventListener("change", () => {
         const identifiedWorkflowName: string = this._identifyArrivalInputWorkflow();
         const identifiedWorkflow: () => void = () => this._identifyWorkflow(this._identifyArrivalInputWorkflow());
         identifiedWorkflow();
         console.log(identifiedWorkflowName);
         console.log(identifiedWorkflow);
         console.log(this._updateState(identifiedWorkflow));
      });
   }

   _identifyWorkflow(functionName: string): () => void {
      try {
         return this._stateUpdaters[functionName];
      } catch (error) {
         throw error;
      }
   }

   _identifyArrivalInputWorkflow():string {
      try {
         if(this._arrivalInput.value !== ""){
            return this._statesNames.controlsEnabled;
         }
         return this._statesNames.initial;
      } catch (error) {
         throw error;
      }
   }
   _identifyDepartureInputWorkflow():string {
      try {
         if(this._departureInput.value !== ""){
            return this._statesNames.completed;
         }
         return this._statesNames.controlsEnabled;
      } catch (error) {
         throw error;
      }
   }






   setInitialState(): void {
      this._setArrivalInputInitialState();
      this._setDepartureInputInitialState();
      this._currentState = "initial";
   }
   _setArrivalInputInitialState():void{
      this._arrivalInput.value = "";
      this._arrivalInput.disabled = false;
   }
   _setDepartureInputInitialState():void{
      this._departureInput.value = "";
      this._departureInput.disabled = true;
   }
   _setArrivalInputControlsEnabledState():void{
      this._arrivalInput.disabled = false;
   }
   _setDepartureInputControlsEnabledState():void{
      if(this._currentState !== "initial"){
         this._departureInput.disabled = false;
      };
   }

   setControlsEnabledState(): void {
      try {
         console.log("setControlsEnabledState");
         this._arrivalInput.disabled = false;
      } catch (error) {
         throw error;
      }
   }

   setControlsDisabledState(): void {
      try {
      } catch (error) {
         throw error;
      }
   }

   setWarningState(): void {
      try {
         
      } catch (error) {
         throw error;
      }
   }

   setErrorState(): void {
      try {
         
      } catch (error) {
         throw error;
      }
   }


   setCompletedState(): void {
      try {
         
      } catch (error) {
         throw error;
      }
   }
}