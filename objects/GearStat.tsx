export default class GearStat {
    name: string;
    min: number[];
    max: number[];

    constructor(name: string, min: number[], max: number[]) {
        this.name = name;
        this.min = min;
        this.max = max;
    }
}