var car={};
car.milage=8298;
car.color='black';
console.log(car);

car.TurnKey = function(){
    console.log("engine in now on");
}
car.LightOn= function(){
    console.log("car light is on");
}
car.TurnKey();
console.log(car);
car.LightOn();