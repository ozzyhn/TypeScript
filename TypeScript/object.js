var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(point.x, " Y: ").concat(point.y, " konumuna giidoyr"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs x: ".concat(point.x, " Y: ").concat(point.y, " konumuna giidoyr"));
    };
    return Bus;
}());
var taxi_1 = new Taxi;
taxi_1.travelTo({ x: 1, y: 2 });
