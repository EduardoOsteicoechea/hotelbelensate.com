"use strict";
// export default class _IComponent
// {
//     _stateTracker: StateValidator = new StateValidator();
//     _setInitialState: Subcomponent = new Subcomponent(()=>{return true;});
//     _setCompletedState: Subcomponent = new Subcomponent(()=>{return true;});
//     _setEnabledControlsState: Subcomponent = new Subcomponent(()=>{return true;});
//     _setDisabledControlsState: Subcomponent = new Subcomponent(()=>{return true;});
//     _setComponentEventListeners: Subcomponent = new Subcomponent(()=>{return true;});
Object.defineProperty(exports, "__esModule", { value: true });
//     _datesFiltersContainer: HTMLDivElement;
//     _arrivalFilterContainerDatePicker: HTMLInputElement;
//     _departureFilterContainerDatePicker: HTMLInputElement;
//     _appliedFiltersContainer: HTMLDivElement;
//     _optionsContainer: HTMLDivElement;
//     constructor
//     (
//         datesFiltersContainer: HTMLDivElement,
//         arrivalFilterContainerDatePicker: HTMLInputElement,
//         departureFilterContainerDatePicker: HTMLInputElement,
//         appliedFiltersContainer: HTMLDivElement,
//         optionsContainer: HTMLDivElement,
//     )
//     {
//         this._datesFiltersContainer = datesFiltersContainer;
//         this._arrivalFilterContainerDatePicker = arrivalFilterContainerDatePicker;
//         this._departureFilterContainerDatePicker = departureFilterContainerDatePicker;
//         this._appliedFiltersContainer = appliedFiltersContainer;
//         this._optionsContainer = optionsContainer;
//         this._stateTracker.SetState("initial", true, this._setInitialState.Execute(), "");
//     }
// }
// class Subcomponent 
// {
//     _callback: ((...args: any[]) => boolean)
//     constructor(
//       callback: ((...args: any[]) => boolean)
//     ) {
//       this._callback = callback;
//     }
//     async Execute() : Promise<boolean | Error> {
//       return new Promise(async (resolve, reject) => {
//         try {
//           const callbackResult = await this._callback();
//           if (callbackResult === true) {
//             resolve(true);
//           } else {
//             reject(new Error("Callback returned false"));
//           }
//         } catch (error) {
//           reject(new Error(`Error executing callback: ${error.message}`));
//         }
//       });
//     }
// }
// class StateValidator 
// {
//     _standardStates = {
//         initial: "initial",
//         completed: "completed",
//         disabled_controls: "disabled_controls",
//         enabled_controls: "enabled_controls",
//     };
//     _currentState: string = this._standardStates.initial;
//     _onStateChangeCallbacks : Array<(...args: any[]) => any> = [];
//     get currentState
//     () 
//     {
//         return this._currentState;
//     }
//     async SetState
//     (
//         targetState: string, 
//         expectedResult: boolean, 
//         callback: Promise<boolean | Error>, 
//         errorMessage: string | null
//     ) : Promise<boolean | Error> 
//     {
//         return new Promise ( async (resolve, reject) => {
//             try {
//                 const isValid = await this.IsValid(expectedResult, callback, errorMessage)
//                 if(isValid)
//                 {
//                     this._currentState = targetState;
//                     resolve(true);
//                 }else{
//                     reject(new Error("The callback returned an unexpected result"))
//                 };
//             } catch (error) {                
//                 reject(new Error("Error executing the IsValid method"));
//             };
//         });
//     }
//     async IsValid
//     (
//         expectedResult: boolean, 
//         callback: Promise<boolean | Error>, 
//         errorMessage: string | null = "Validation failed: Expected result did not match callback return value"
//     ) : Promise<boolean> 
//     {
//         return new Promise (async (resolve, reject)=>{
//             try {
//                 const callbackResult = await callback;
//                 if(expectedResult === callbackResult){
//                     resolve(true);
//                 } else {
//                     reject(new Error("Callback returned false"))
//                 };
//             } catch (error) {
//                 reject(new Error("Error executing callback: " + error.message))
//             }
//         })
//     }
//     onStateChangeActions
//     (
//         callback: (...args: any) => any
//     ) : void 
//     {
//         this._onStateChangeCallbacks.push(callback);
//     }
// }
//# sourceMappingURL=_IComponent.js.map