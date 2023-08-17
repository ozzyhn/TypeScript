interface point{   //İNTERFACE İÇİNDE TANIMLADIK DAHA KOLAY TANIMLAMA VE KALITIM İÇİN
    x:number,
    y:number
}

interface Vehicle{
    travelTo(point:point):void;  //VOİD DÖNDÜRECEK VE BU ŞEKİLDE TANIMLANABİLİR
}

class Taxi implements Vehicle{


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

let taxi_1: Taxi = new Taxi({ x:1, y:2},'red');

taxi_1.travelTo({ x:1, y:2});

let currentLocaiton= taxi_1.Location;
taxi_1.Location={ x:1, y:2};

