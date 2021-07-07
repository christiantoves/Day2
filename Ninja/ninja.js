class Ninja {
    constructor(){
        this.name = 'name'
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(Ninja.name);
    }
    showStats(){
        return Ninja.name, Ninja.health, Ninja.speed, Ninja.strength;
    }
    drinkSake(){
        this.health += 10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


