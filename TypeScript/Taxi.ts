import { point } from "./point";
import{Vehicle} from "./vehicle";

export class Taxi implements Vehicle{


    get Location(){  //property tanımlaması bu şekilde
        return this.location;
    }

    set Location(value:point){  //property tanımlaması bu şekilde
        if(value.x<0 && value.y <0){
            throw new Error('kordinat bilgileri hatalı');
        } 
        this.location= value;
    }

    constructor(private location: point, private color: string) { }
    
    travelTo(point:point):void {
        console.log(`taksi x: ${this.location.x} Y: ${this.location.y} konumuna giidoyr`);
    }
}
