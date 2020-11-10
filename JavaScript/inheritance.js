// Story: As a programmer, I can make a car.
// Story: As a programmer, I can give my car a model on initialization.
// Story: As a programmer, I can give my car a year on initialization.
// Story: As a programmer, I can tell how many wheels myCar has.
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
// Story: As a programmer, I can turn the lights in all my cars on and off.
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

class Car {
	constructor(model, year) {
		this.model = model.toLowerCase()
		this.year = year
		this.wheels = 4
		this.lights = 'off'
		this.signal = 'off'
		this.speed = 0
	}

	lightsOnOff() {
		if (this.lights === 'off') {
			return `${this.lights} off`
		} else if (this.lights === 'on') {
			return `${this.lights}: on`
		} else {
			return 'Something went wrong'
		}
	}

	// signalOnOff(str) {
	// 	if (this.signal === 'off') {
	// 		return `${this.signal} `
	// 	} else if (this.signal === 'on') {
	// 		return `${this.signal} `
	// 	}
	// }

	carInfo() {
		return `model: ${this.model}, year: ${this.year}, wheels: ${this.wheels}, lights are: ${this.lights}, the signal is: ${this.signal}, current speed: ${this.speed} mph`
	}
}

// Write a variable called myCar which is an instance of the class Car
// The model for the car class can be "generic car"
// The year for the car class can be "myCar year"

let myCar = new Car('generic car', 1990)
console.log(myCar.carInfo())

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
// Story: As a programmer, I can slow my Tesla down by 7 per braking.

class Tesla extends Car {
	constructor(model, year) {
		super(model, year)
	}

	accelerate() {
		this.speed += 10
	}

	break() {
		this.speed -= 7
	}
}

// Create an object called myTesla which is a instance of class Tesla

let myTesla = new Tesla('model z', 2020)
myTesla.accelerate()
myTesla.accelerate()
myTesla.accelerate()
myTesla.accelerate()
myTesla.break()
console.log(myTesla.carInfo())

// Story: As a programmer, I can make a Toyota car.
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
// Story: As a programmer, I can slow my Toyota down by 2 per braking.

class Toyota extends Car {
	constructor(model, year) {
		super(model, year)
	}

	accelerate() {
		this.speed += 5
	}

	break() {
		this.speed -= 2
	}
}

// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota

let myToyota = new Toyota('corola', 1989)
myToyota.accelerate()
myToyota.accelerate()
myToyota.accelerate()
myToyota.accelerate()
myToyota.break()
console.log(myToyota.carInfo())

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

class Volkswagen extends Car {
	constructor(model, year) {
		super(model, year)
	}

	accelerate() {
		this.speed += 7
	}

	break() {
		this.speed -= 5
	}
}

// create an object called myVolkswagen which is a instance of class Volkswagen
let myVolkswagen = new Volkswagen('bug', 1979)
myVolkswagen.accelerate()
myVolkswagen.accelerate()
myVolkswagen.accelerate()
myVolkswagen.accelerate()
myVolkswagen.break()
console.log(myVolkswagen.carInfo())
myVolkswagen.lightsOnOff('on')
console.log(myVolkswagen.carInfo())
