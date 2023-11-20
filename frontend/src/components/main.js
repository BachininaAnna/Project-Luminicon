import {Pies} from "../utilis/pies.js";

export class Main {
    constructor() {
        new Pies();
        document.getElementById('navbar-main').classList.add('active');
    }
}
