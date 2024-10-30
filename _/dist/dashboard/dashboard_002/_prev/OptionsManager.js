export default class OptionsManager {
    constructor(optionsContainer) {
        this._optionsContainer = optionsContainer;
    }
    async generateOptions(datesArray) {
        const options = await this.getAvailableOptions(datesArray);
        this._optionsContainer.innerHTML = options;
    }
    async getAvailableOptions(datesArray) {
        return new Promise(async (resolve, reject) => {
            const urlParams = new URLSearchParams();
            urlParams.append('arrival', datesArray[0]);
            urlParams.append('departure', datesArray[1]);
            const request = await fetch("../_/data/room_data/_options_available.php?" + urlParams.toString());
            const response = await request.text();
            // console.log(response);
            resolve(response);
        });
    }
}
//# sourceMappingURL=OptionsManager.js.map