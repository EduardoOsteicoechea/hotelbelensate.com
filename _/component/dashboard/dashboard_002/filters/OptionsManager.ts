// called from "./_ManageFilters.ts";

export default class OptionsManager{

   _optionsContainer:HTMLDivElement;

   constructor(optionsContainer:HTMLDivElement){
      this._optionsContainer = optionsContainer;
   }

   async generateOptions(datesArray:string[]):Promise<void>{
      const options: string = await this.getAvailableOptions(datesArray);
      this._optionsContainer.innerHTML = options;
   }

   async getAvailableOptions(datesArray:string[]): Promise<string>
   {
      return new Promise(async (resolve, reject)=>{
         const urlParams = new URLSearchParams();
         urlParams.append('arrival', datesArray[0]);
         urlParams.append('departure', datesArray[1]);

         const request = await fetch("../_/api/room_data/_options.php?" + urlParams.toString());
         const response = await request.text();
         // console.log(response);
         resolve(response);
      });
   }





































}