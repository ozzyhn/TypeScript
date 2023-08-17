import{Taxi} from './Taxi';

let taxi_1: Taxi = new Taxi({ x:1, y:2},'red');

taxi_1.travelTo({ x:1, y:2});

let currentLocaiton= taxi_1.Location;
taxi_1.Location={ x:1, y:2};
