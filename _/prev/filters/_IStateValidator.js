"use strict";
// export default class IStateValidator 
// {
//     _standardStates = {
//         initial: "initial",
//         completed: "completed",
//         disabled_controls: "disabled_controls",
//         enabled_controls: "enabled_controls",
//     };
Object.defineProperty(exports, "__esModule", { value: true });
//     _currentState: string = this._standardStates.initial;
//     get currentState() 
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
// }
//# sourceMappingURL=_IStateValidator.js.map