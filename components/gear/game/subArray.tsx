import { SxStyleProp } from 'rebass'
import substats from './substats.json'
import statObject from './statObject'

export function createArray():Array<statObject> {
    const array : Array<statObject> = new Array<statObject>();
    const jsonArray : any[] = [];

    Object.keys(substats.substats).forEach(key => jsonArray.push({name: substats.substats[key].name, min: substats.substats[key].min, max: substats.substats[key].max}))
    jsonArray.forEach(element => {array.push(new statObject(element.name, element.min, element.max));});
    
    return array;
}

export const subArray : Array<statObject> = createArray();