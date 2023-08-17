interface point{   //İNTERFACE İÇİNDE TANIMLADIK DAHA KOLAY TANIMLAMA VE KALITIM İÇİN
    x:number,
    y:number
}

interface Vehicle{
    travelTo(point:point):void;  //VOİD DÖNDÜRECEK VE BU ŞEKİLDE TANIMLANABİLİR
}

class Taxi implements Vehicle{

    color:string;
    currentLocation: point;

    constructor(location: point, color: string) {
        this.currentLocation = location;
        this.color = color;
    }
    
    travelTo(point:point):void {
        console.log(`taksi x: ${point.x} Y: ${point.y} konumuna giidoyr`);
    }
}

let taxi_1: Taxi = new Taxi({ x:1, y:2},'red');

taxi_1.travelTo({ x:1, y:2});
