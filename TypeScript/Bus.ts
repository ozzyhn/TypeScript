import { point } from "./point";
import{Vehicle} from "./vehicle";

export class Bus implements Vehicle {
    travelTo(point: point): void {
        throw new Error("Method not implemented.");
    }

}