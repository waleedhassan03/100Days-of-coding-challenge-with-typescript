// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

import { KeyObject } from "crypto";
import { features } from "process";

function carInformation(manufacturer: string, model: string, ...extraOptions: { [key : string] : any } []): object  {
  
    let carinfo = {
        manufacturer,
        model,
        ...Object.assign({}, ...extraOptions)
    }

    return carinfo;
};

let answers = carInformation("Toyota", "Land Cruiser", {color: "White"}, {year: "2022"}, {features:["Power Steering", "Automatic Gears"]} )

console.log(answers);