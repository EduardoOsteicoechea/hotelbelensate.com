import CompletedComponentState from "../../../../_componentHelpers/CompletedComponentState.js";
import ComponentState from "../../../../_componentHelpers/ComponentState.js";
import ControlsDisabledComponentState from "../../../../_componentHelpers/ControlsDisabledComponentState.js";
import ErrorComponentState from "../../../../_componentHelpers/ErrorComponentState.js";
import InitialComponentState from "../../../../_componentHelpers/InitialComponentState.js";
import Subcomponent from "../../../../_componentHelpers/Subcomponent.js";
import StateTracker from "../../../../_componentHelpers/StateTracker.js";
import ControlsEnabledComponentState from "../../../../_componentHelpers/ControlsEnabledComponentState.js";
import Component from "../../../../_componentHelpers/Component.js";

export default class ArrivalInputManager extends Subcomponent {

   _stateTracker: StateTracker;

   _datesFiltersContainer: HTMLDivElement;
   _arrivalInput: HTMLInputElement;
   _departureInput: HTMLInputElement;
   _appliedFiltersContainer: HTMLDivElement;
   _optionsContainer: HTMLDivElement;

   constructor(
      compomentManger:Component,
      stateTracker: StateTracker,
      datesFiltersContainer: HTMLDivElement,
      _arrivalInput: HTMLInputElement,
      departureInput: HTMLInputElement,
      appliedFiltersContainer: HTMLDivElement,
      optionsContainer: HTMLDivElement,
   ) {
      super();
      this._stateTracker = stateTracker;
      this._datesFiltersContainer = datesFiltersContainer;
      this._arrivalInput = _arrivalInput;
      this._departureInput = departureInput;
      this._appliedFiltersContainer = appliedFiltersContainer;
      this._optionsContainer = optionsContainer;
   }

   async determineWorkflow(): Promise<ComponentState> {
      return new Promise((resolve, reject) => {
         if (this._arrivalInput.value !== "") {
            this._stateTracker._state = new ControlsEnabledComponentState();
         } else {
            this._stateTracker._state = new InitialComponentState();
         }
         resolve(this._stateTracker._state);
      });
   }

   async executeWorkflow(componentState: ComponentState): Promise<ComponentState> {
      return new Promise((resolve, reject) => {
         if (
            componentState._stateName === "initial"
            ||
            componentState._stateName === "Error"
            ||
            componentState._stateName === ""
         ) {
            if (this.setComponentInitialState() === undefined) {
               resolve(new InitialComponentState());
            } else {
               resolve(new ErrorComponentState());
            };
         } else if (
            componentState._stateName === "controlsEnabled"
         ) {
            if (this.enableDepartureInput() === undefined) {
               resolve(new ControlsEnabledComponentState());
            } else {
               resolve(new ErrorComponentState());
            };
         };
      });
   }
   
   setComponentInitialState(): void | Error {
      try {
         this._setControlsToInitialState(this._arrivalInput, this._departureInput);
         this._setDatesFilterContainerAppereanceToNotCompleted(this._datesFiltersContainer);
         this._removeFilterCompletionIndicator(this._appliedFiltersContainer);
         this._inforceFilterOperationsCompletion();
      } catch (error) {
         throw new Error("Error at setControlsToInitialState()");
      };
   }

   
   _setControlsToInitialState(
      arrivalInput:HTMLInputElement,
      departureInput:HTMLInputElement,
   ): void | Error {
      try {  
         arrivalInput.value = "";
         arrivalInput.disabled = false;
         departureInput.value = "";
         departureInput.disabled = true;
      } catch (error) {
         throw new Error("Error at ");
      };
   }
   _setDatesFilterContainerAppereanceToNotCompleted(container:HTMLDivElement): void | Error {
      try {  
         container.classList.remove("completedFilterState");
         container.classList.add("initialFilterState");
      } catch (error) {
         throw new Error("Error at ");
      };
   }
   _removeFilterCompletionIndicator(container:HTMLDivElement): void | Error {
      try {  
         container.querySelector("#datesFilter")?.remove();
      } catch (error) {
         throw new Error("Error at ");
      };
   }
   _inforceFilterOperationsCompletion(): void | Error {
      try {  
      } catch (error) {
         throw new Error("Error at ");
      };
   }
   enableDepartureInput(): void | Error {
      try {  
         this._departureInput.disabled = false;
      } catch (error) {
         throw new Error("Error at enableDepartureInput()");
      };
   }

   ///////////////////////////////
   // Class end
   ///////////////////////////////
}