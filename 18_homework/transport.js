export class Transport {
    constructor(options) {
        this.model = options.model;
        this.color = options.color;
        this.formFactor = options.formFactor,
        this.tireStatus = options.tireStatus;
        this.engineStatus = options.engineStatus;
        this.computerStatus = options.computerStatus;
    }
}