// called from "./_ManageFilters.ts";

import AppliedFiltersManager from "./AppliedFiltersManager";

export default class DatesFilterManager{
   _filterContainer:HTMLDivElement;
   _arrivalInput:HTMLInputElement;
   _departureInput:HTMLInputElement;
   _appliedFiltersManager:AppliedFiltersManager | null = null;

   constructor
   (
      filterContainer:HTMLDivElement,
      arrivalInput:HTMLInputElement,
      departureInput:HTMLInputElement
   )
   {
      this._filterContainer = filterContainer;
      this._arrivalInput = arrivalInput;
      this._departureInput = departureInput;
   }

   initialize
   (
      appliedFiltersManager:AppliedFiltersManager
   )
   {
      this._appliedFiltersManager = appliedFiltersManager;
      this.setInitialState(
         this._filterContainer,
         this._arrivalInput,
         this._departureInput,
         this._appliedFiltersManager,
      );
   }

   setInitialState
   (   
      filterContainer:HTMLDivElement,
      arrivalInput:HTMLInputElement,
      departureInput:HTMLInputElement,
      appliedFiltersManager:AppliedFiltersManager | null
   )
   {
      this.setArrivalInputMinimalDate(this._arrivalInput);
      this.setArrivalInputMaximumDate(this._arrivalInput);
      this.setDepartureInputMinimalDate(this._departureInput);
      this.setDepartureInputMaximumDate(this._departureInput);
      this.addArrivalInputEventListener(
         this._filterContainer,
         this._arrivalInput, 
         this._departureInput,
         this._appliedFiltersManager
      );
      this.addDepartureInputEventListener(
         this._filterContainer,
         this._arrivalInput, 
         this._departureInput,
         this._appliedFiltersManager
      );
   }

   resetFilter()
   {
      this.removeFilterResetButton();
      this.setFilterAppareanceToUncompletedState();
      this.setArrivalInputInitialState();
      this.setDepartureInputInitialState();
      this.setArrivalInputMinimalDate(this._arrivalInput);
      this.setArrivalInputMaximumDate(this._arrivalInput);
      this.setDepartureInputMinimalDate(this._departureInput);
      this.setDepartureInputMaximumDate(this._departureInput);
   }

   setArrivalInputInitialState()
   {
      this._arrivalInput.value = "";
      this._arrivalInput.disabled = false;
   }

   setDepartureInputInitialState()
   {
      this._departureInput.value = "";
      this._departureInput.disabled = true;
   }

   setArrivalInputCompletedState()
   {
      this._arrivalInput.disabled = true;
   }

   setDepartureInputCompletedState()
   {
      this._departureInput.disabled = true;
   }

   addArrivalInputEventListener 
   (
      filterContainer:HTMLDivElement,
      arrivalInput:HTMLInputElement,
      departureInput:HTMLInputElement,
      appliedFiltersManager:AppliedFiltersManager | null
   )
   {
      arrivalInput.addEventListener("change", (event: Event) => 
      {
         const selectedDate:string = arrivalInput.value;
         if(selectedDate === "")
         {
            departureInput.value = "";
            departureInput.disabled = true;
            this.setDepartureInputMinimalDate(departureInput);
         }
         else
         {
            departureInput.disabled = false;
            this.setDepartureInputMinimalDate(departureInput, selectedDate);
         };       
      });
   }

   addDepartureInputEventListener
   (
      filterContainer:HTMLDivElement,
      arrivalInput:HTMLInputElement,
      departureInput:HTMLInputElement,
      appliedFiltersManager:AppliedFiltersManager | null
   )
   {
      departureInput.addEventListener("change", (event) => 
      {
         const selectedDate = departureInput.value;
         if(selectedDate !== ""){
            this.setArrivalInputMaximumDate(arrivalInput, selectedDate);
            this.setFilterToCompletedState(filterContainer, arrivalInput, departureInput, appliedFiltersManager);
            appliedFiltersManager?.createAppliedDatesFilterIndicatorControl(arrivalInput.value, departureInput.value);
         };
      });
   }
 



   setArrivalInputMinimalDate(input:HTMLInputElement, optionalMinimalDate = "")
   {
      let newDate = new Date();
      input.min = this.formatDateForDateInput(newDate);
   }

   setArrivalInputMaximumDate(input:HTMLInputElement, optionalMinimalDate = "")
   {
      if(optionalMinimalDate === "")
      {
         let newDate = new Date();
         newDate.setDate(newDate.getDate() + 30);
         input.max = this.formatDateForDateInput(newDate);
      }
      else
      {
         let newDate = new Date(optionalMinimalDate);
         newDate.setDate(newDate.getDate() - 1);
         input.max = this.formatDateForDateInput(newDate);
      };
   }

   setDepartureInputMinimalDate(input:HTMLInputElement, optionalMinimalDate = "")
   {
      if(optionalMinimalDate === "")
      {
         let newDate = new Date();
         newDate.setDate(newDate.getDate() + 1);
         input.min = this.formatDateForDateInput(newDate);
      }
      else
      {
         let newDate = new Date(optionalMinimalDate);
         newDate.setDate(newDate.getDate() + 1);
         input.min = this.formatDateForDateInput(newDate);
      };
   }

   setDepartureInputMaximumDate(input:HTMLInputElement)
   {
      let newDate = new Date();
      newDate.setDate(newDate.getDate() + 30);
      input.max = this.formatDateForDateInput(newDate);
   }

   formatDateForDateInput(date:Date)
   {
      return date.toISOString().slice(0, 10);
   }

   setFilterAppareanceToUncompletedState()
   {
      this._filterContainer.classList.remove("filled_filters");
   }

   setFilterToCompletedState(
      filterContainer:HTMLDivElement, 
      arrivalarrivalInput:HTMLInputElement,
      departureInput:HTMLInputElement,
      appliedFiltersManager:AppliedFiltersManager | null
   )
   {
      this.setArrivalInputCompletedState();
      this.setDepartureInputCompletedState();
      filterContainer.classList.add("filled_filters");
      this.createResetFilterButton(filterContainer, arrivalarrivalInput, departureInput, appliedFiltersManager); 
   }

   createResetFilterButton(
      filterContainer:HTMLDivElement, 
      arrivalInput:HTMLInputElement,
      departureInput:HTMLInputElement,
      appliedFiltersManager:AppliedFiltersManager | null
   )
   {
      const outerContainer = document.createElement("div");
      outerContainer.classList.add("ResetFilterButtonContainer");
      outerContainer.id = "DatesResetFilterButtonContainer";

      const message = document.createElement("div");
      message.classList.add("ResetFilterButtonMessage");
      message.innerHTML = "Remover";

      const button = document.createElement("div");
      button.classList.add("ResetFilterButton");
      this.addResetFilterButtonClickEvent(outerContainer, filterContainer, arrivalInput, departureInput, button, appliedFiltersManager);

      const buttonBar1 = document.createElement("div");
      buttonBar1.classList.add("ResetFilterButtonBar");
      buttonBar1.classList.add("ResetFilterButtonBar1");

      const buttonBar2 = document.createElement("div");
      buttonBar2.classList.add("ResetFilterButtonBar");
      buttonBar2.classList.add("ResetFilterButtonBar2");

      button.appendChild(buttonBar1);
      button.appendChild(buttonBar2);

      outerContainer.appendChild(message);
      outerContainer.appendChild(button);

      filterContainer.appendChild(outerContainer);
   }

   addResetFilterButtonClickEvent
   (
      outerContainer:HTMLDivElement,
      filterContainer:HTMLDivElement,
      arrivalInput:HTMLInputElement,
      departureInput:HTMLInputElement,
      button:HTMLDivElement, 
      appliedFiltersManager:AppliedFiltersManager | null
   ){
      button.addEventListener("pointerup",(event:Event)=>{
         this.removeFilterResetButton();
         appliedFiltersManager?.removeDatesFilter();
         this.setFilterAppareanceToUncompletedState();
         this.resetFilter();
      });
   }

   removeFilterResetButton(){
      const resetFilterButtonContainer: HTMLElement | null = document.getElementById("DatesResetFilterButtonContainer");
      if(resetFilterButtonContainer){
         resetFilterButtonContainer.innerHTML = "";
      }
      resetFilterButtonContainer?.remove();
   }

}

