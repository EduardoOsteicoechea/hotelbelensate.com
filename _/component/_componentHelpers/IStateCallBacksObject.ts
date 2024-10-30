export default interface StateCallbacksObject {
   [key: string]: (...args: any[]) => any;
}