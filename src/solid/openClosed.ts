export abstract class Animal {
	abstract move(): string;
}

export class Dog extends Animal {
	move() {
		return "Dog is walking";
	}
}

export class Human extends Animal {
	move() {
		return "Human is jogging";
	}
}

export class AnimalMover {
	constructor(private animal: Animal) {
		console.log(animal.move());
	}
}
