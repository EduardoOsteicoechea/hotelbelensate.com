export default class Component {

   _statesNames: { [key: string]: string } = {
      initial: "initial",
      completed: "completed",
      controlsEnabled: "controlsEnabled",
      controlsDisabled: "controlsDisabled",
      warning: "warning",
      error: "error",
   };
   
   _stateUpdaters: { [key: string]: () => void } = {};

   _propagatorsArray: ((...args:any[])=>void)[] = [];

   async initialize(
   ): Promise<void> {
      await this._configureUI();
      await this._addEventListeners();
      this._stateUpdaters.initial = this.setInitialState;
      this._stateUpdaters.completed = this.setCompletedState;
      this._stateUpdaters.controlsEnabled = this.setControlsEnabledState;
      this._stateUpdaters.controlsDisabled = this.setControlsDisabledState;
      this._stateUpdaters.warning = this.setWarningState;
      this._stateUpdaters.error = this.setErrorState;
   }

   async _configureUI() {}

   _addEventListeners() {}

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

   _updateState(stateUpdaterMethod: (...args:any[])=>void): void {
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

            if(this._propagatorsArray.length > 0)
               this._propagateState(this._propagatorsArray);
            // resolve();
         } catch (error) {
            // reject(error);
         }
      // });
   }

   async _propagateState(propagatorsArray: ((...args: any) => any)[]): Promise<void>  {
      return new Promise((resolve, reject) => {
         try {
            propagatorsArray.forEach(method => {
               method();
            });
            resolve();
         } catch (error) {
            reject(error);
         }
      });
   }

   setInitialState(): void {
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

   setControlsEnabledState(): void {
      try {
         
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
}