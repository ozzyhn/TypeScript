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
