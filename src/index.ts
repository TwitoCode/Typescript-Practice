import { AnimalMover,Dog,Human } from "./solid/openClosed";
import { HttpRequester, JSONFormatter } from "./solid/dependencyInversion";

const requester = new HttpRequester(new JSONFormatter());
console.log(requester.request("/api"));

const dogMover = new AnimalMover(new Dog())
const humanMover = new AnimalMover(new Human());
