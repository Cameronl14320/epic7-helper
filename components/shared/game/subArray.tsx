import { SxStyleProp } from 'rebass'
import substats from './substatsjson'
import statObject from './statObject'

export function subArray():Array<statObject> {
    const array : Array<statObject> = new Array<statObject>();
    array.push(new statObject(substats.critpercent.name, substats.critpercent.min, substats.critpercent.max));
    array.push(new statObject(substats.critdamage.name, substats.critdamage.min, substats.critdamage.max));
    array.push(new statObject(substats.atkpercent.name, substats.atkpercent.min, substats.atkpercent.max));
    array.push(new statObject(substats.healthpercent.name, substats.healthpercent.min, substats.healthpercent.max));
    
    return;
}