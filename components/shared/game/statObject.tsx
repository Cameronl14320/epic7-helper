export default class statObject {

    id : number;
    name : string;
    min : number;
    max : number;

    constructor(name : string, min : number, max : number) {
        this.name = name;
        this.min = min;
        this.max = max;
    }
}