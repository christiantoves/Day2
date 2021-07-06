class Ninja {
    constructor(){
        this.name = name
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
