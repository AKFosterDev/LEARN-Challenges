// Coffee Maker
class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `${this.type}: ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

// Write the code that makes a black coffee.

let coffee1 = new Coffee('black', 0, 0)
console.log(coffee1.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars.

let coffee2 = new Coffee('regular', 1, 2)
console.log(coffee2.coffeeProfile())
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

let coffee3 = new Coffee('sweet', 0, 2)
console.log(coffee3.coffeeProfile())

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// Write a method for your Latte class that outputs the latte's profile.

class Latte {
  constructor(flavor, milk, shot) {
    this.flavor = flavor
    this.milk = milk
    this.shot = shot
  }

  latteProfile() {
    return `${this.flavor} with ${this.milk} milk and ${this.shots()}`
  }

  shots() {
    if (this.shot > 1) {
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }
}

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
let latte1 = new Latte('regular', 'whole', 1)
console.log(latte1.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
let latte2 = new Latte('hazelnut', 'almond', 2)
console.log(latte2.latteProfile())

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Cylinder {
  constructor(radius, height) {
    this.radius = radius * radius
    this.height = height
    this.pi = Math.PI
  }

  calculateVolume() {
    return (this.pi * this.radius * this.height).toFixed(4)
  }
}

// Write the code that creates three unique cylinder objects

let cylinder1 = new Cylinder(12, 10)
console.log(cylinder1.calculateVolume())

let cylinder2 = new Cylinder(2, 7)
console.log(cylinder2.calculateVolume())

let cylinder3 = new Cylinder(4, 11)
console.log(cylinder3.calculateVolume())
