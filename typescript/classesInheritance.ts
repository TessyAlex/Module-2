class Vehicle{
    name: string;
    constructor(name:string){
    this.name=name;
}
getName():string{
    return this.name;
}

class Car extends Vehicle{
    model:string;

    constructor(model:string,name:string){
        super(name);
        this.model=model;
    }
    getNameModel():string{
        return this.model+this.name;
    }
}

class truck extends Vehicle{
    constructor(name:string){
    super(name);
}
}

var mycar=
new Car("Sports Model...","BMW");
console.log(mycar.getNameModel());

var truck=
new truck("Tata Truck");
console.log(truck.getName());