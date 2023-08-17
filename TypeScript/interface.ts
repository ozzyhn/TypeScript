interface point{   //İNTERFACE İÇİNDE TANIMLADIK DAHA KOLAY TANIMLAMA VE KALITIM İÇİN
    x:number;
    y:number;
}

interface Passenger{
    name:string;
    phone:string;
}

interface Vehicle{
    currentLocation: point;
    travelTo(point:point):void;  //VOİD DÖNDÜRECEK VE BU ŞEKİLDE TANIMLANABİLİR
    getDistance(pointA:point, pointB:point):number;  // İKİ MESAFE ARASINI ÖLÇÜYOR GHERİYE NUMBER ÇEVİRİYOR
    addPassanger(passenger:Passenger):void;
    removePassanger(passenger:Passenger):void;
}
