interface point{   //İNTERFACE İÇİNDE TANIMLADIK DAHA KOLAY TANIMLAMA VE KALITIM İÇİN
    x:number,
    y:number
}

interface Vehicle{
    currentLocation: point;
    travelTo(point:point):void;  //VOİD DÖNDÜRECEK VE BU ŞEKİLDE TANIMLANABİLİR

}

class Taxi implements Vehicle{

    currentLocation: point;

    travelTo(point:point):void {
        console.log(`taksi x: ${point.x} Y: ${point.y} konumuna giidoyr`);
    }
}


class Bus implements Vehicle{

    currentLocation: point;

    travelTo(point:point):void {
        console.log(`otobüs x: ${point.x} Y: ${point.y} konumuna giidoyr`);
    }
}


let taxi_1: Taxi = new Taxi();

taxi_1.travelTo({ x:1, y:2});
taxi_1.currentLocation={ x:1, y:2};

let bus_1 = new Bus();

bus_1.currentLocation={ x:1, y:2};
bus_1.travelTo({ x:1, y:2});

console.log(taxi_1.currentLocation.x);