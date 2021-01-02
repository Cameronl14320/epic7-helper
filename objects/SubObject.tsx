
import GearStat from './GearStat';
import {subArray} from './subArray'

export default class SubObject {
    rarity : number;
    enhancements : number;
    selectedStats : number[];
    tier: number;    

    constructor(rarity : number, enhancements : number, selectedSats : number[], tier : number) {
        this.rarity = rarity;
        this.enhancements = enhancements;
        this.selectedStats = selectedSats;
        this.tier = tier;
    }

    getValues() : number[] {
        let i = []
        return i
    }
    
    getStats() : GearStat[] {
        var stats : GearStat[] = [];
        for(let i = 0; i < this.selectedStats.length; i++) {
            stats.push(subArray[this.selectedStats[i]]);
        }
        return stats;
    }
    
}

