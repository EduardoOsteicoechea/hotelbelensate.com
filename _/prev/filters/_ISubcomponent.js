"use strict";
// //////////////////////////////////////////
// // Inherit this class in every "action class" of a "main component class".
// // This'll inforce state tracking throughout the component.
// // Because every action in the "main component class" is performed by a subclass that requires a reference to the "main component class state subclass" as one of it's contructor parameter, we must validate the "main component class" state at every action.
// // Every state validation occurs through a "i_state_validation" class inheritant. This class acts as an unit test, to ensure standard state updates througout the component.
// //////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// export default class _ISubcomponent 
// {
//   _callback: ((...args: any[]) => boolean)
//   constructor(
//     callback: ((...args: any[]) => boolean)
//   ) {
//     this._callback = callback;
//   }
//   async Execute() : Promise<boolean | Error> {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const callbackResult = await this._callback();
//         if (callbackResult === true) {
//           resolve(true);
//         } else {
//           reject(new Error("Callback returned false"));
//         }
//       } catch (error) {
//         reject(new Error(`Error executing callback: ${error.message}`));
//       }
//     });
//   }
// }
//# sourceMappingURL=_ISubcomponent.js.map