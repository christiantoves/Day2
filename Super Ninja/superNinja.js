class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
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
// let myNinja = new Ninja("donnie")
// console.log(myNinja)
class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    speakWisdom(){
        super.drinkSake()
    console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const sensei1 = new Sensei("Master Splinter");
console.log(sensei1);
sensei1.speakWisdom();
console.log(sensei1);