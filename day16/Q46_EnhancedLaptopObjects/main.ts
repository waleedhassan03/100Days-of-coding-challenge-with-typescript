// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

import { describe } from "node:test";

let laptop =  {

    make: "Dell",
    model: "ProBook",
    year: 2020,

    describe: function(){
        console.log(`This is a ${this.make} ${this.model} ${this.year} laptop.`);
    }
};

laptop.describe();