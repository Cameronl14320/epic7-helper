import { SxStyleProp } from 'rebass'
import substats from './substats.json'
import statObject from './statObject'

export default function subArray():Array<statObject> {
    const array : Array<statObject> = new Array<statObject>();
    const jsonArray : any[] = [];
    Object.keys(substats.substats).forEach(key => jsonArray.push({name: substats.substats[key].name, min: substats.substats[key].min, max: substats.substats[key].max}))

    console.log(jsonArray.length);
    jsonArray.forEach(element => {
        var name : string = element.name;
        var min : number = element.min;
        var max : number = element.max;
        console.log(name + " : " + min + " : " + max);
        array.push(new statObject(name, min, max));
    });
    return;
}