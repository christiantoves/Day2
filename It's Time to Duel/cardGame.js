class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= Unit.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "resilience"){
                target.res += this.magnitude
            }
            if (this.stat === "power"){
                target.power += this.magnitude
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4) 
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by three", "resilience", 3)
const promiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by two", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "increase taret's power by two", "power", 2)

hardAlgorithm.play(redBeltNinja)
promiseRejection.play(redBeltNinja)
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)
console.log(blackBeltNinja)