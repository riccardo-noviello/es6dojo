import { IndexController } from './indexController.js';
import { EventManager } from './common.js';

// class for our js application
export class App {

    // bootstrap the application
    constructor() {
        this.em = new EventManager();
        this.indexController = new IndexController(this.em);
        this.toString();        
    }

    toString() {
        console.log("App running");
    }
}

